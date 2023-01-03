import { ReactNode } from 'react';
import { w } from 'windstitch';

const Container = w.div(
	`w-[100vw] h-[100vh] bg-neutral-900 text-neutral-100 flex items-center justify-center flex-col gap-4`
);

interface AuthLayoutProps {
	children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return <Container>{children}</Container>;
};

export default AuthLayout;
