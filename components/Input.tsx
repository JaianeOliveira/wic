import { Eye, EyeSlash } from 'phosphor-react';
import { FormEvent, InputHTMLAttributes, useState } from 'react';
import { W, w } from 'windstitch';

interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		StyledInputProps {
	label: string;
}

const Label = w.label(`text-sm font-medium mb-2 text-neutral-200`);

const StyledInput = w.input(
	`bg-neutral-700 
	outline-none 
	px-3 
	py-2 
	rounded-lg 
	placeholder:text-neutral-500 
	text-sm
	
	`,
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
	const [showPassword, setShowPassword] = useState(false);
	const passwordVisibilityHandler = (e: FormEvent) => {
		e.preventDefault();
		setShowPassword((prevState) => !prevState);
	};

	if (props.type === 'password') {
		return (
			<div className="flex flex-col">
				<Label htmlFor={props.name}>{label}</Label>
				<div className="flex w-full items-center justify-between bg-neutral-700 rounded-lg px-3 py-2 gap-4 max-h-[45px]">
					<input
						{...props}
						type={showPassword ? 'text' : 'password'}
						className="w-full bg-transparent outline-none p-0 m-0"
					/>
					<button
						className="outline-none text-amber-500 focus-visible:text-amber-400"
						onClick={passwordVisibilityHandler}
					>
						{showPassword ? <EyeSlash /> : <Eye />}
					</button>
				</div>
			</div>
		);
	}
	return (
		<div className="flex flex-col">
			<Label htmlFor={props.name}>{label}</Label>
			<StyledInput {...props} />
		</div>
	);
};

export default Input;
