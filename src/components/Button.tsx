import React from 'react';

interface Props {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className='w-full py-2 font-semibold transition-colors ease-linear delay-100 rounded-md text-stransition-colors bg-gud-green hover:bg-bad-green hover:text-white'
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
