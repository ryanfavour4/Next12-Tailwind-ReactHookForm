type props = {
    children: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}

const Button = ({ children, onClick}: props) => {
  return (
    <button onClick={onClick} className="my-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
      {children}
    </button>
  );
};

export default Button;
