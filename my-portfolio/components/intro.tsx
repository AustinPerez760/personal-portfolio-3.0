'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			id='home'
			className='mb-28 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem]'>
			<div className='flex items-center justify-center'>
				<div className='relative'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'tween', duration: 0.2 }}>
						<Image
							src='/images/portfolio-pic.jpeg'
							alt='Sam portrait'
							width='165' // 195px
							height='165' // 195px
							quality='95'
							priority={true}
							className='h-34 w-34 rounded-full border-[0.35rem] border-white shadow-xl dark:border-black'></Image>
					</motion.div>
					<motion.span
						className='absolute bottom-0 right-0  text-4xl'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							delay: 0.3,
							duration: 0.5,
						}}></motion.span>
				</div>
			</div>

			<motion.h1
				className='mb-10 mt-4 px-4 text-2xl font-light !leading-[1.5] sm:text-4xl'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				<span className='font-bold'>Hey, I'm Sam </span>I am a{' '}
				<span className='font-bold'>full-stack web developer</span> with{' '}
				<span className='font-bold'>5</span> years of experience bringing
				feature rich and user-friendly{' '}
				<span className='italic'>web applications</span> to life.
			</motion.h1>

			<motion.div
				className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
				initial={{ opacity: 0, y: 900 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}>
				<Link
					href='#contact'
					className=' group bg-slate-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:hover:bg-slate-500 dark:bg-slate-800  dark:text-white'
					onClick={() => {
						setActiveSection('Contact');
						setTimeOfLastClick(Date.now());
					}}>
					{' '}
					Contact me here{' '}
					<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
				</Link>

				<a
					className=' group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:text-black dark:opacity-800'
					href='/CV.pdf'
					download>
					Download CV{' '}
					<HiDownload className='opacity-60 group-hover:translate-y-1 transition' />{' '}
				</a>

				<a
					className='bg-white p-4 text-gray-700 flex items-center gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer rounded-full border border-black/10'
					href='https://www.linkedin.com/in/austin-perez3'
					target='_blank'>
					{' '}
					<BsLinkedin />
				</a>

				<a
					className='bg-white p-4 text-gray-700 flex items-center gap-2 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer text-[1.35rem] rounded-full border border-black/10'
					href='https://github.com/AustinPerez760'
					target='_blank'>
					{' '}
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
