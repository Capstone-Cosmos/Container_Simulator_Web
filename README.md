# Cosmos — 컨테이너 적재 시뮬레이션 웹 시스템

수출 물류 담당자가 컨테이너에 무엇을 어떻게 실을지 3D 화면으로 미리 보고 결정하는 웹 애플리케이션이다.
상품은 팔레트(화물을 얹어 지게차로 옮기는 규격 받침대) 위에 얹은 채로 컨테이너에 들어간다.
한양대학교 ERICA 캠퍼스 2024년 1학기 캡스톤디자인 프로젝트로 만들었고, 배포한 데모 없이 로컬에서만 띄운다.

![Cosmos 포스터](./docs/CapStone_Cosmos.png)

## 배경

이 프로젝트의 목적은 적재 실수를 줄이고 컨테이너 활용률을 높이는 것이다. 팬데믹 이후 해상 물류 수요가
늘면서 수출 담당자는 컨테이너 한 대에 실을 수 있는 부피와 무게를 판단할 일이 잦아졌다. 종이와 엑셀로
하던 이 판단을 화면 위 3D 공간으로 옮겼다.

## 핵심 기능

3D 적재 화면과 역할 기반 승인 흐름을 하나의 배포 산출물로 묶은 것이 이 시스템이다.

- **3D 적재 시뮬레이션** — 컨테이너 내부를 렌더링하고 담당자가 팔레트를 집어 옮겨 배치한다. 서버가 팔레트를 한 층으로 자동 배치해 주는 기능도 있다.
- **역할 분리** — 일반 사용자는 출고할 상품을 등록하고, 수출 담당자는 그 상품을 승인해 컨테이너에 배치한다.
- **규격 상수 내장** — 컨테이너 세 규격과 팔레트 다섯 종의 치수와 중량을 코드에 상수로 갖는다. 값은 「도메인 모델」에 있다.
- **JWT 인증** — 로그인하면 JWT(서명이 붙은 인증 토큰) 두 종류를 발급한다. Access 토큰은 응답 헤더로, Refresh 토큰은 쿠키로 내려보낸다.
- **단일 배포 산출물** — Gradle 빌드가 React를 먼저 빌드해 Spring Boot 정적 리소스로 넣으므로, 서버 하나만 띄우면 프론트까지 함께 뜬다.

## 기술 스택

| 구성 | 스택 |
|---|---|
| 백엔드 | Spring Boot 3.2.3 · Java 17 · Spring Security · Spring Data JPA · JJWT 0.12.3 |
| 프론트엔드 | React 18 · TypeScript · React Router 6 · Tailwind CSS · daisyUI · styled-components · axios |
| 3D | Three.js — `@react-three/fiber` · `@react-three/drei` · `@react-three/rapier` |
| 데이터베이스 | MySQL |
| 빌드 | Gradle 8.5 (Wrapper 포함 — Gradle을 따로 설치하지 않고 `./gradlew`로 빌드한다) · Create React App |

## 실행

### 사전 준비

MySQL에 데이터베이스와 계정을 만든다. 테이블은 손으로 만들지 않는다. JPA가 `ddl-auto=update` 설정으로
엔티티를 보고 스키마를 자동 생성한다.

```sql
CREATE DATABASE db_cosmos DEFAULT CHARACTER SET utf8mb4;
CREATE USER 'user_cosmos'@'localhost' IDENTIFIED BY '<비밀번호>';
GRANT ALL PRIVILEGES ON db_cosmos.* TO 'user_cosmos'@'localhost';
```

`src/main/resources/application.properties`의 `spring.datasource.password`와 `spring.jwt.secret`을
자기 환경 값으로 바꾼다.

Node.js와 npm이 `PATH`에 있어야 한다. Gradle이 `bootRun`이든 `build`든 React를 항상 먼저 빌드하기
때문이다. 두 명령 모두 `processResources` 태스크를 거치고, 그 태스크가
`copyReactBuildFiles → buildReact → installReact`를 순서대로 실행한다.

### 개발 모드

프론트엔드와 백엔드를 각각 다른 포트로 띄운다.

```bash
./gradlew bootRun -x buildReact                    # 백엔드 → http://localhost:8080
cd src/main/frontend && npm install && npm start   # 프론트 → http://localhost:3000
```

`package.json`의 `proxy` 설정이 프론트의 API 요청을 8080으로 넘긴다. 3000번 개발 서버를 쓰므로 Gradle이
만드는 React 빌드는 이 모드에서 쓰이지 않는다. `-x buildReact`가 그 빌드 태스크를 이번 실행에서 제외한다.

### 통합 빌드

React 빌드와 Spring Boot를 하나의 JAR로 묶어 띄운다.

```bash
./gradlew build
java -jar build/libs/container-0.0.1-SNAPSHOT.jar   # http://localhost:8080
```

## 사용 순서

띄운 뒤 아래 다섯 단계를 차례로 하면 3D 적재 화면이 열린다.

1. `/member/join`에서 일반 사용자로 가입하고 로그인한 뒤, `/user/uploadpd`에서 출고할 상품을 등록한다.
2. 로그아웃하고 `/manager/join`에서 수출 담당자로 가입한다.
3. `/manager/apprWait`에서 방금 등록한 상품을 승인한다.
4. `/manager/containerUpload`에서 컨테이너 규격과 출고 마감 시각을 정해 등록한다.
5. `/manager/containerList`에서 그 컨테이너를 열면 3D 적재 화면이 뜬다. 승인된 상품을 팔레트에 얹어 컨테이너 안에 배치하고 위치를 저장한다.

## 디렉터리 구조

Spring Boot 프로젝트 하나 안에 React 앱이 `src/main/frontend`로 들어가 있는 단일 레포다.

```
Container_Simulator_Web
├── build.gradle                 # React 빌드를 Spring 정적 리소스로 복사하는 태스크 포함
├── docs/                        # 발표 포스터(PNG·PDF)
└── src
    ├── main
    │   ├── java/com/cosmos/container
    │   │   ├── config/          # SecurityConfig · CorsMvcConfig
    │   │   ├── constant/        # ContainerType · PalletType · Role · 승인/배송 상태 enum
    │   │   ├── controller/      # Container · Pallet · Product · Save · Reissue
    │   │   ├── dto/
    │   │   ├── entity/          # JPA 엔티티
    │   │   ├── jwt/             # LoginFilter · JWTFilter · JWTUtil · CustomLogoutFilter
    │   │   ├── repository/
    │   │   └── service/         # 도메인 서비스 + SchedulerService
    │   ├── resources/
    │   │   └── application.properties
    │   └── frontend/            # React 앱 (Create React App + TypeScript)
    │       ├── public/          # 컨테이너 3D 모델(glTF)과 표면 재질 텍스처(PBR)
    │       └── src
    │           ├── Router.tsx   # 라우팅 정본
    │           ├── components/  # Header · 네비게이터 · 공용 버튼
    │           ├── pages/
    │           │   ├── BoxPage.tsx  # 3D 편집 화면 진입점
    │           │   ├── manager/     # 컨테이너 등록·목록·승인·적재 화면
    │           │   ├── member/      # 상품 등록·조회 화면
    │           │   └── mythree/     # 3D 씬 — ShippingContainer(규격별) · MyBox · BoxList
    │           └── shared/axios/
    └── test/java/...
```

`src/main/resources/static/`은 커밋하지 않는다. 이 디렉터리는 `copyReactBuildFiles` 태스크가
`src/main/frontend/build`를 복사해 만드는 빌드 산출물이다. 프론트엔드 소스의 단일 출처는
`src/main/frontend`다.

## 도메인 모델

컨테이너 규격과 팔레트 규격은 코드에 상수로 들어 있고, 상품은 승인 상태와 배송 상태를 따로 갖는다.

**컨테이너 규격** — 이름과 최대 적재 중량은 `ContainerType`에 있다.

| 규격 | 최대 적재 중량 |
|---|---|
| 20FT DRY | 21,700 kg |
| 40FT DRY | 26,740 kg |
| 40FT HQ | 26,580 kg |

**팔레트 규격** — 다섯 종(11A·12A·11B·13B·15A)의 가로·세로·자체 중량은 `PalletType`에 있다.

**상태**

| 상태 | 값 | 바뀌는 때 |
|---|---|---|
| 승인 | 승인대기 · 승인 · 반려 | 담당자가 승인·반려·취소 요청을 보낼 때 바뀐다 |
| 배송 | 없음 · 배송대기 · 배송중 · 배송완료 | 상품을 등록하면 없음이고, 팔레트에 실으면 배송대기가 되며, 출고 마감 시각이 지나면 `SchedulerService`(마감을 주기적으로 확인하는 백엔드 스케줄러)가 1분 주기로 배송중으로 넘긴다 |

배송완료는 enum에만 있고 대입하는 코드가 없어 아직 도달하지 않는 값이다.

## API

권한 열의 이름은 다음을 가리킨다. 일반 사용자는 `ROLE_MEMBER`, 수출 담당자는 `ROLE_MANAGER`다.

| 메서드 | 경로 | 권한 | 하는 일 |
|---|---|---|---|
| POST | `/members` · `/managers` | 누구나 | 일반 사용자·수출 담당자 회원가입 |
| GET | `/emails` · `/ids` | 누구나 | 이메일·아이디 중복 확인 |
| POST | `/login` | 누구나 | 로그인 후 Access·Refresh 토큰 발급 |
| POST | `/reissue` | 누구나 | Refresh 토큰으로 Access 토큰 재발급 (「한계」 참고) |
| POST | `/logout` | 쿠키 보유자 | Refresh 토큰 폐기 |
| POST · GET | `/products` | 일반 사용자 | 상품 등록·조회 |
| POST | `/products/delete` | 일반 사용자 | 상품 삭제 |
| GET | `/products/wait` · `/products/decide` | 수출 담당자 | 승인 대기·처리 완료 상품 조회 |
| PATCH | `/products/accept` · `/reject` · `/cancel` | 수출 담당자 | 상품 승인·반려·취소 |
| POST · GET | `/containers` | 로그인 사용자 | 컨테이너 등록·목록 |
| DELETE | `/containers?id={id}` | 로그인 사용자 | 컨테이너 삭제 |
| GET | `/containers/{container-id}` | 로그인 사용자 | 컨테이너 상세 조회 |
| GET | `/pallets/{container-id}` | 수출 담당자 | 컨테이너에 적재된 팔레트 조회 |
| GET | `/pallets/{container-id}/valid` | 수출 담당자 | 적재 가능 여부 검증 |
| POST | `/pallets` | 수출 담당자 | 팔레트 적재 |
| DELETE | `/pallets/{pallet-id}` | 수출 담당자 | 팔레트 해제 |
| PATCH | `/pallets` | 수출 담당자 | 3D 화면에서 옮긴 팔레트 좌표 저장 |
| PATCH | `/pallets/{container-id}/shipping` | 수출 담당자 | 컨테이너 안 팔레트를 좌우 2열 한 층으로 자동 배치 |

## 한계

학부 캡스톤 결과물이라 아래를 남긴 채로 마쳤다. 고치지 않고 있는 그대로 적어 둔다.

- **토큰 재발급** — `/reissue`는 동작하지 않는다. `LoginFilter`가 발급하는 쿠키 이름은 `refreshToken`인데 `SecurityService.reissue`가 찾는 이름은 `refresh`라 항상 `Refresh Token Null`로 400을 돌려준다. 프론트에도 이 경로를 부르는 코드가 없어 한 번도 쓰인 적이 없다.
- **컨테이너 경로의 권한** — `SecurityConfig`의 담당자 전용 경로 목록에 `containers`가 앞 슬래시 없이 적혀 있다. 그래서 `/containers`에는 담당자가 아니라 로그인한 사용자 누구나 접근한다.
- **Access 토큰 유효기간** — 로그인은 1시간, 재발급은 10분을 준다. 두 곳에 상수를 따로 적어 벌어진 차이로 보인다.
- **스케줄러의 반복 쓰기** — `SchedulerService`는 마감이 지난 컨테이너를 매번 다시 집어 이미 배송중인 상품에 같은 값을 1분마다 다시 쓴다. 넘긴 컨테이너를 걸러내는 조건이 없다.
- **설정값의 위치** — DB 비밀번호와 JWT 시크릿이 `application.properties`에 그대로 들어 있다. 운영에 올리려면 환경 변수나 외부 설정으로 빼야 한다.
- **쓰이지 않는 의존** — 백엔드의 Thymeleaf 두 의존은 `templates/`가 없어 쓰이지 않는다. 프론트의 `json-server`·`faker`·`msw`는 초기 목 API(실제 서버 대신 가짜 응답을 주는 개발용 API) 실험 흔적이라 `src`에서 참조가 없다.
- **자동 배치의 범위** — `PalletService.shipPallets`는 팔레트를 좌우 번갈아 폭만큼 밀어 넣는 한 층 배치만 계산한다. 부피 기준 최적화(3D Bin-Packing)는 구현하지 않았다.
- **화면 지원 범위** — 데스크톱 브라우저에서만 확인했고 모바일 화면은 대응하지 않았다.

## 팀

| 이름 | 학과 | 역할 |
|---|---|---|
| 전상언 | 컴퓨터학부 | 팀장 · 백엔드 개발 |
| 정연찬 | 컴퓨터학부 | 프론트엔드 개발 · UI/UX |
| 최익제 | ICT융합학부 | 시뮬레이션 구현 · 3D 모델링 |

- **과목** — 캡스톤디자인 (2024년 1학기)
- **지도교수** — 홍규연 교수님
- **기업 연계** — 모바일앱개발협동조합 (멘토: 최원서 대표)
- **소속** — 한양대학교 ERICA 캠퍼스

## 더 읽기

- [발표 포스터 (PDF)](./docs/CapStone_Cosmos.pdf) — 과제 배경과 시스템 구성을 한 장으로 정리한 자료
