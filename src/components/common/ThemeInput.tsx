import { cva } from 'class-variance-authority';
import React from 'react';
import { Input } from '../ui/input';

// Definir las clases base del input y agregar variantes
const inputStyles = cva(
  'text-background-primary-foreground border-none rounded-xl placeholder:text-collapsable-primary', // Clases base comunes
  {
    variants: {
      variant: {
        primary: 'bg-background-primary-muted',  // Clases para el input de tipo primary
        secondary: 'bg-background-tertiary-muted placeholder:text-gray-300',  // Clases para el input de tipo secondary
      },
    },
    defaultVariants: {
      variant: 'primary',  // Variante por defecto
    },
  }
);

type ThemeInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'primary' | 'secondary';  // Definimos las variantes
};

const ThemeInput: React.FC<ThemeInputProps> = ({ className, variant, ...props }) => {
  return <Input className={inputStyles({ variant, className })} {...props} />;
};

export default ThemeInput;
