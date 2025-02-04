import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '../public/images/corpcomment.png';
import rmtdevImg from '../public/images/rmtdev.png';
import wordanalyticsImg from '../public/images/wordanalytics.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Full-Stack Engineer',
		location: 'Juno Beach, FL',
		description:
			'I worked as a full-stack engineer for the pricing and estimations division of NextEra Energy. A fortune 100 sustainable energy company. ',
		icon: React.createElement(CgWorkAlt),
		date: '2024-2025',
	},
	{
		title: 'Full-Stack Web Developer',
		location: 'Remote',
		description:
			'I am currently a full-stack web developer who works on a variety of projects. I have relevent experience in both front-end and back-end development.',
		icon: React.createElement(CgWorkAlt),
		date: '2019 - Present',
	},
	{
		title: 'Software Consultant',
		location: 'San Diego CA',
		description:
			'I held the role of Software Consultant for Global Flow Cycling during the companies early planning and development stages.',
		icon: React.createElement(CgWorkAlt),
		date: '2024 - 2025',
	},
	{
		title: 'Software Tester II',
		location: 'Remote, TX',
		description:
			'I worked as a systems software tester for the Tandem Source web applications launched in both the U.S and Canada. Focusing on both R&D, automation, and production software.',
		icon: React.createElement(CgWorkAlt),
		date: '2022 - 2024',
	},
	{
		title: 'Software Tester I',
		location: 'San Diego, CA',
		description:
			'I worked as a systems software tester preforming and writing manual code tests for digital health systems software in accordance with company software development lifecycles and FDA guidelines.',
		icon: React.createElement(CgWorkAlt),
		date: '2021 - 2022',
	},
	{
		title: 'University of California San Diego',
		location: 'San Diego, CA',
		description:
			'I completed a 6 month project focused bootcamp where I focused on full-srtack engineering and web development.',
		icon: React.createElement(LuGraduationCap),
		date: '2021 - 2022',
	},
] as const;

export const projectsData = [
	{
		title: 'CorpComment',
		description:
			'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
		imageUrl: corpcommentImg,
	},
	{
		title: 'rmtDev',
		description:
			'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	'HTML5',
	'CSS3',
	'JavaScript ES6+',
	'TypeScript',
	'React',
	'React Native',
	'Next.js',
	'Vue.js',
	'JQuery',
	'Node.js',
	'Tailwind',
	'Vite',
	'Vitest',
	'Git',
	'GitHub',
	'DynamoDB',
	'MongoDB',
	'GraphQL',
	'Apollo',
	'Express',
	'PostgreSQL',
	'Framer Motion',
	'StoryBook',
	'WordPress',
] as const;
