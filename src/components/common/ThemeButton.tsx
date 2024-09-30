import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { Button } from "@/components/ui/button"

// Definir las clases base y variantes usando CVA
const buttonStyles = cva(
  'rounded-xl ', // Clases base
  {
    variants: {
      variant: {
        default: 'bg-button-cta-primary text-button-cta-primary-foreground',
        secondary: 'bg-button-cta-secondary text-button-cta-secondary-foreground',
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// Tipado de las propiedades del botón utilizando VariantProps
type ThemeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

const ThemeButton: React.FC<ThemeButtonProps> = ({ variant, className, size, ...props }) => {
  return <Button className={buttonStyles({ variant, className, size })} {...props} />;
};

export default ThemeButton;
