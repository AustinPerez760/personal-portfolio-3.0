'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] mx-auto text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}>
            <Image
              src='/images/portfolio-pic.jpeg'
              alt='Sam portrait'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-34 w-34 rounded-full border-[0.35rem] border-white shadow-xl'></Image>
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
      <motion.p
        className='mb-10 mt-4 px-4 text-2xl font-light !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className='font-bold'>Hey, I'm Sam </span>I am a{' '}
        <span className='font-bold'>full-stack web developer</span> with{' '}
        <span className='font-bold'>5</span> years of experience bringing
        feature rich and user-friendly{' '}
        <span className='italic'>web applications</span> to life.
      </motion.p>
    </section>
  );
}
