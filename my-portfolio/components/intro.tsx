import Image from 'next/image';
import React from 'react';

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div>
          <Image
            src='/images/portfolio-pic.jpeg'
            alt='Sam portrait'
            width='192'
            height='192'
            quality='95'
            priority={true}
            className='h-34 w-34 rounded-full border-[0.35rem] border-white shadow-xl'></Image>
          <span className='text-4xl'>🦦</span>
        </div>
      </div>
    </section>
  );
}
