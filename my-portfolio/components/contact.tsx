'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
	const { ref } = useSectionInView('Contact');

	return (
		<motion.section
			id='contact'
			ref={ref}
			className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}>
			<SectionHeading>Contact me</SectionHeading>

			<p className='text-gray-800 -mt-7'>
				Please constact me directly at{' '}
				<a className='underline' href=''>
					austinperezwebdev@gmai.com
				</a>{' '}
				or through this form
			</p>
			<form
				className='mt-10 flex flex-col'
				action={(formData) => {
					sendEmail(formData);
				}}>
				<input
					className='h-14 rounded-lg borderBlack p-4'
					name='senderEmail'
					type='email'
					required
					maxLength={100}
					placeholder='Your Email'
				/>
				<textarea
					className='h-52 my-3 rounded-lg borderBlack p-4'
					name='message'
					placeholder='Your Message'
					required
					maxLength={500}
				/>
				<button
					type='submit'
					className=' group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-black text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'>
					Submit{' '}
					<FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
				</button>
			</form>
		</motion.section>
	);
}
