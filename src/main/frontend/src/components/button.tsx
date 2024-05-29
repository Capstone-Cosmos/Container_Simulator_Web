interface IButton {
  name: string;
  className?: string;
  onClick?: any;
  clicked?: boolean;
}

function Button({ name, className, onClick, clicked }: IButton) {
  return (
    <div
      className={`flex w-full h-full mr-[1%] pb-[1px] items-center justify-center cursor-pointer text-[20px] border-[3px] rounded-xl bg-white hover:bg-cb hover:text-white hover:border-cb
          ${className} ${
        clicked
          ? "border-cb text-cb"
          : "bg-lightGray/5"
      }`}
      onClick={onClick}
    >
      ​​​​​​{name}
      ​​​​
    </div>
  );
}
export default Button;
