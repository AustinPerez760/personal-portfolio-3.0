import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sam Perez | Portfolio',
	description: 'Full-stack developer and designer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='!scroll-smooth'>
			<body
				className={`${inter.className} bg-slate-50 text-slate-950 relative pt-28 sm:pt-36 dark:bg- dark:text-gray-50 dark:text-opacity-90 dark:bg-black`}>
				<div className='bg-red-700 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-red-800'></div>
				<div
					className='bg-blue-900 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
				-700'></div>

				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />

					<Toaster position='top-center' />

					<ThemeSwitch />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}
