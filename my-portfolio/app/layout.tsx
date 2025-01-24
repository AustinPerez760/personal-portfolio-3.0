import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sam Perez | Portfolio',
  description: 'Full-stack developer and designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-slate-50 text-slate-950`}>
        <div className='bg-sky-800 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-stone-400 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
