import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { Button } from "@/components/ui/button"

// Definir las clases base y variantes usando CVA
const buttonStyles = cva(
  'rounded-xl', // Clases base
  {
    variants: {
      variant: {
        default: 'bg-button-cta-primary text-button-cta-primary-foreground',
        secondary: 'bg-button-cta-secondary text-button-cta-secondary-foreground',
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

const ThemeButton: React.FC<ThemeButtonProps> = ({ variant, className, ...props }) => {
  return <Button className={buttonStyles({ variant, className })} {...props} />;
};

export default ThemeButton;
