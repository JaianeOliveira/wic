import { User } from 'phosphor-react';
import { ReactNode } from 'react';
import { w } from 'windstitch';
import Sidebar from '../Sidebar';

type LayoutProps = {
	children: ReactNode | string;
};

const Container = w.div(`
    flex bg-neutral-900 w-full h-[100vh] text-neutral-100 
`);

const Header = w.header(`
	h-[8vh]
	w-full
	px-[6vw]
	py-8
	flex
	items-center
	justify-end
	gap-4
	text-sm
`);

const Content = w.div(`
	pr-[6vw]
	pl-[2vw]
	pb-4
	h-[90%]
`);

const Main = w.main(`
	w-full
	h-full
`);

const Avatar = w.div(
	`
	bg-neutral-600
	w-8
	h-8
	rounded-full
	shadow-md
	flex
	items-center
	justify-center
	text-neutral-100
	cursor-pointer
`,
	{
		defaultProps: {
			children: <User size={18} />,
		},
	}
);

const Layout = ({ children }: LayoutProps) => {
	return (
		<Container>
			<Sidebar />
			<Main>
				<Header>Jaiane Oliveira</Header>
				<Content>{children}</Content>
			</Main>
		</Container>
	);
};

export default Layout;
