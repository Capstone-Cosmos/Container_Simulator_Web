interface IButton {
  name: string;
  className?: string;
  onClick?: any;
  clicked?: boolean;
}

function Button({ name, className, onClick, clicked }: IButton) {
  return (
    <div
      className={`flex w-full h-full mr-[1%] pb-[1px] items-center justify-center cursor-pointer text-[20px]  rounded-md hover:bg-cb hover:text-white hover:border-cb
          ${className} ${clicked ? "text-white bg-cb" : "bg-lightGray/5"}`}
      onClick={onClick}
    >
      ​​​​​​{name}
    </div>
  );
}
export default Button;
