import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';

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
				className={`${inter.className} bg-slate-50 text-slate-950 relative h-[5000px] pt-28 sm:pt-36 `}>
				<div className='bg-sky-800 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
				<div className='bg-red-400 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>

				<ActiveSectionContextProvider>
					<Header />
					{children}
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}
