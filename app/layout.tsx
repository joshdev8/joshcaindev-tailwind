import './output.css';
import { Oswald } from '@next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const oswald = Oswald({ subsets: ['latin'] });

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={oswald.className}>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
