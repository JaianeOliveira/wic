import Link from 'next/link';

const Logo = () => {
	return (
		<Link className="focus-visible:outline-amber-400" href="/">
			<h1
				className="text-amber-400 text-shadow transition-all outline-none"
				tabIndex={-1}
			>
				WIC
			</h1>
		</Link>
	);
};

export default Logo;
