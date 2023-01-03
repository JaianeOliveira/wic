import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { Sora } from '@next/font/google';

const sora = Sora({
	subsets: ['latin'],
	variable: '--font-sora',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${sora.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
