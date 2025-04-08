import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-auroraPink hover:bg-pink-300 text-white font-semibold py-2 px-6 rounded-2xl shadow-md transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
