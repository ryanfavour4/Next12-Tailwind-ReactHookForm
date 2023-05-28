import Link from "next/link";

type props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  to: string;
};

const Links = ({ children, to, onClick }: props) => {
  return (
    <Link
      onClick={onClick}
      className="text-green-500 font-medium underline hover:text-red-500"
      href={{ pathname: to }}
    >
      {children}
    </Link>
  );
};

export default Links;
