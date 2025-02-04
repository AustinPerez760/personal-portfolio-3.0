'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
	const { ref } = useSectionInView('Experience', 0.3);
	return (
		<section
			ref={ref}
			id='experience'
			className='scroll-mt-28 mb-28 sm:40 dark:text-white'>
			<SectionHeading>My Experience</SectionHeading>
			<VerticalTimeline lineColor=''>
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background: 'white',

								border: '1px solid rgba(0,0,0,0.05',
								textAlign: 'left',
								padding: '1.3rem, 2rem',
							}}
							contentArrowStyle={{
								borderRight: '0.4rem solid  rgba(0,0,0,0.08)',
							}}
							date={item.date}
							icon={item.icon}
							iconStyle={{ background: 'white', color: 'black' }}>
							<h3 className='font-semibold capitalize dark:text-black'>
								{item.title}
							</h3>
							<p className='font-normal !mt-0 dark:text-black'>
								{item.location}
							</p>
							<p className='!font-normal !mt-1 text-gray-800'>
								{item.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
