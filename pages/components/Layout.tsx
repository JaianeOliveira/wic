import { ReactNode } from 'react';
import { w } from 'windstitch';
import Sidebar from './Sidebar';

type LayoutProps = {
	children: ReactNode | string;
};

const Container = w.div(`
    flex bg-neutral-800 w-full h-[100vh] text-neutral-100 
`);

const Layout = ({ children }: LayoutProps) => {
	return (
		<Container>
			<Sidebar />
			{children}
		</Container>
	);
};

export default Layout;
