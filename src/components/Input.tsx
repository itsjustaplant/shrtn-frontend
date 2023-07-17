import React from 'react';

interface Props {
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  isErrored: boolean
}

const Input = ({ placeholder, onChange, onKeyDown, isErrored }: Props) => {
  const defaultClassName = "w-full px-4 py-2 transition-colors ease-linear delay-100 border-2 rounded-md outline-0";
  return (
    <>
      <input
        className={`${defaultClassName} ${isErrored ? 'border-error' : 'focus:border-bad-green border-gud-green'}`}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default Input;
