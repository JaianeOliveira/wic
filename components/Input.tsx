import { InputHTMLAttributes } from 'react';
import { W, w } from 'windstitch';

interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		StyledInputProps {
	label: string;
}

const StyledInput = w.input(
	`bg-neutral-700 outline-none px-3 py-2 rounded-lg placeholder:text-neutral-500 text-sm`,
	{
		variants: {
			inputWidth: {
				default: 'w-[302px]',
				fit: 'w-fit',
				full: 'w-full',
			},
		},
		defaultVariants: {
			inputWidth: 'default',
		},
	}
);

type StyledInputProps = W.Infer<typeof StyledInput>;

const Input = ({ label, ...props }: InputProps) => {
	return (
		<fieldset>
			<legend className="text-sm font-medium pb-1 text-neutral-200">
				{label}
			</legend>
			<StyledInput
				type="email"
				placeholder="example@email.com"
				name="email"
				{...props}
			/>
		</fieldset>
	);
};

export default Input;
