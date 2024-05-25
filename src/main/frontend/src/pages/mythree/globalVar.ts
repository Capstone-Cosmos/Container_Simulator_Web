const [x,y,z] = [2.4, 2.6, 6.1]
const dy = -0.5
const dz = -2
const dx = -x/2

function getRandomboxColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
  
const globalVar= {
    defaultData : [
        {
          id: 0,
          position: [0,0,0],
          length: 1,
          width: 1,
          height: 1,
          boxColor: getRandomboxColor(),
        },
        {
          id: 1,
          position: [2,0,2],
          length: 1,
          width: 1.5,
          height: 1,
          boxColor: getRandomboxColor(),
        },
        {
          id: 2,
          position: [-3,0,1],
          length: 1.2,
          width: 1.2,
          height: 3,
          boxColor: getRandomboxColor(),
        },
      ],
    dx:0,
    dy:-0.5,
    dz:0,

    get get_defaultData(){
        return this.defaultData;
    },
    get get_dy(){
        return this.dy;
    }

}

export default globalVar;