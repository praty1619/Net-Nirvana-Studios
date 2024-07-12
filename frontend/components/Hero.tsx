"use client";

import { useState } from 'react';
import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';
import PopupForm from './ui/PopupForm';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className='relative flex items-center justify-center h-screen'>
      <WavyBackground />
      <div className='relative z-10 text-center p-4'>
        <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-light mb-4'>
          Welcome to Your Journey
        </h2>
        <div className='text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg'>
          <TextGenerateEffect 
            className='text-white'
            words='Find Your Digital Nirvana'
          />
        </div>
        <p className='text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-gray-200 mb-12'>
          Transforming the digital landscape, one project at a time
        </p>
        <MagicButton
          title="Discuss Project"
          icon={<FaLocationArrow />}
          position="right"
          onClick={openForm}
        />
      </div>
      <PopupForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  )
}

export default Hero;
