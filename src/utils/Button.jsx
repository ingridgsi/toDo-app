function Button({ children, onClick }) {
  return (
    <button
      className="drop-shadow-md border-none font-medium focus:outline-none  rounded-[6px] focus:ring bg-custom-bgButton hover:bg-custom-bgButtonHover py-1 px-3 hover:drop-shadow-xl focus:shadow-sm text-custom-baseTextColor "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
