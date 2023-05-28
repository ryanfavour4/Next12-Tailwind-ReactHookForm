type props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick }: props) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 hover:opacity-80 rounded-full shadow-lg pb-2 bg-primaryColor text-4xl text-center text-white flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export default Button;
