'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionInView('About');
	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
			id='about'>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-3 dark:text-white'>
				From fortune 100 companies to startups, and independent clients acorss
				the country I have been fortunate to work with a diverse range of
				clients and technologies. My focus has been consistent throught my
				journey as a web developer, to deliver high quality, performance driven
				and accessible web based projects to share with the world. I have a
				constant willingness to learn and collaborate with others to create the
				best possible product. I am always looking for new opportunities to grow
				and the next great team to be apart of.
			</p>
			<p className='font-semibold italic'>
				“Every great developer you know got there by solving problems they were
				unqualified to solve until they actually did it.” - Patrick McKenzie
			</p>
		</motion.section>
	);
}
