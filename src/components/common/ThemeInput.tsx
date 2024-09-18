import { cva } from 'class-variance-authority';
import React from 'react';
import { Input } from '../ui/input';

// Definir las clases base del input
const inputStyles = cva(
  'bg-background-primary-muted text background-primary-foreground border-none rounded-xl placeholder:text-collapsable-primary' // Clases base
);

type ThemeInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const ThemeInput: React.FC<ThemeInputProps> = ({ className, ...props }) => {
  return <Input className={inputStyles({ className })} {...props} />;
};

export default ThemeInput;
