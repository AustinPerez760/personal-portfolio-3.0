'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection('About');
		}
	}, [inView, setActiveSection]);
	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
			id='about'>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-3'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum fuga,
				veritatis ipsum vitae id quibusdam repellat dignissimos nihil temporibus
				culpa magnam unde molestias, illum perspiciatis, velit non quis
				voluptate amet aspernatur eos tempore officia necessitatibus?
				Praesentium officiis, quasi error, ipsum rem autem debitis, eos illum
				iusto unde quo odit. Sapiente.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
				harum eaque sed autem officiis sint aliquam perferendis vitae, libero
				iure!
			</p>
		</motion.section>
	);
}
