import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-pastelPink text-white px-6 py-3 rounded-2xl shadow-md hover:bg-pastelPurple transition duration-300 ease-in-out text-lg font-semibold"
    >
      {children}
    </button>
  );
};

export default Button;
