import { ReactNode } from 'react';
import { w } from 'windstitch';

export type CardProps = {
	children: ReactNode;
	title?: string | ReactNode;
	className?: string;
};

const Container = w.div(`
  bg-neutral-800
  rounded-xl
  shadow-md
  p-6
  text-sm
`);

const Title = w.h3(`
    text-md
    font-medium
    uppercase
    mb-4
`);

const Card = ({ children, title, ...props }: CardProps) => {
	return (
		<Container {...props}>
			{title && <Title>{title}</Title>}
			{children}
		</Container>
	);
};

export default Card;
