import { ButtonHTMLAttributes } from 'react';
import { w, W } from 'windstitch';

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		ButtonContainerProps {}

const ButtonContainer = w.button(
	`px-4 py-2 rounded-lg  transition-all flex items-center justify-center gap-2`,
	{
		variants: {
			variant: {
				primary: 'shadow-md text-neutral-800 bg-amber-500',
				text: 'text-amber-500',
				outlined: 'text-amber-500 border border-amber-500',
			},
			size: {
				fit: 'w-fit',
				full: 'w-full',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'fit',
		},
	}
);

type ButtonContainerProps = W.Infer<typeof ButtonContainer>;

const Button = ({ ...props }: ButtonProps) => {
	return <ButtonContainer className="" {...props} />;
};

export default Button;
