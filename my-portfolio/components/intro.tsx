'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section>
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
            transition={{ type: 'tween', delay: 0.3, duration: 0.3 }}>
            🏆
          </motion.span>
        </div>
      </div>
    </section>
  );
}
