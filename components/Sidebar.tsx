import { Tooltip } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	CaretLeft,
	CaretRight,
	ChartPieSlice,
	ClockCounterClockwise,
	User,
} from 'phosphor-react';
import { useState } from 'react';
import { w } from 'windstitch';
import Logo from './Logo';

type NavItemProps = {
	path: string;
	label: string;
	icon: JSX.Element;
	expanded: boolean;
};

type NavItemListItem = {
	path: string;
	icon: JSX.Element;
	label: string;
};

export const Container = w.div(
	`
    h-full 
    bg-neutral-800 
    shadow-lg 
    flex
    flex-col 
    justify-start 
    py-4 
    px-6
	w-full
	gap-4
	transition-all
`,
	{
		variants: {
			expanded: (isExpanded: boolean) =>
				isExpanded ? 'items-start w-56 ' : 'items-center w-16 ',
		},
		defaultVariants: {
			expanded: false,
		},
	}
);

export const NavItemContainer = w(Link, {
	className: 'py-3 flex gap-2 items-center font-thin transition-all',
	variants: {
		active: (isActive: boolean) =>
			isActive ? 'text-amber-400' : 'text-neutral-100',
	},
	defaultVariants: {
		active: false,
	},
});

export const ExpandButton = w.button(
	`
	bg-amber-500
	p-2
	text-neutral-800
	rounded-lg
	shadow-sm
	transition-all
	flex
	items-center
	justify-center
`,
	{
		variants: {
			expanded: (isExpanded: boolean) => (isExpanded ? 'w-full' : ''),
		},
		defaultVariants: {
			expanded: false,
		},
	}
);

export const NavItem = ({ path, label, icon, expanded }: NavItemProps) => {
	const { pathname } = useRouter();
	return (
		<NavItemContainer href={path} active={pathname === path}>
			{expanded ? (
				<>
					{icon}
					<span>{label}</span>
				</>
			) : (
				<Tooltip placement="right" content={label}>
					{icon}
				</Tooltip>
			)}
		</NavItemContainer>
	);
};

const Sidebar = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const navItems: NavItemListItem[] = [
		{
			path: '/',
			label: 'Dashboard',
			icon: <ChartPieSlice size={24} />,
		},
		{
			path: '/checkpoints',
			label: 'Checkpoints',
			icon: <ClockCounterClockwise size={24} />,
		},
	];

	return (
		<Container expanded={isExpanded}>
			<Link href="/">
				<Logo />
			</Link>

			<nav className="gap-2 h-full">
				{navItems.map((item, index) => (
					<NavItem key={index} {...item} expanded={isExpanded} />
				))}
			</nav>
			<NavItem
				path="/user"
				label="Perfil do Usuário"
				icon={<User size={24} />}
				expanded={isExpanded}
			/>

			<ExpandButton
				expanded={isExpanded}
				onClick={setIsExpanded.bind(null, !isExpanded)}
			>
				{isExpanded ? <CaretLeft size={24} /> : <CaretRight size={24} />}
			</ExpandButton>
		</Container>
	);
};

export default Sidebar;
