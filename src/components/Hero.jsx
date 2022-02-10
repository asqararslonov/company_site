import React from 'react';
import heroimg from '../assets/Image.svg';
import {motion} from 'framer-motion'

const Hero = () => {
    const textVariants = {
        hidden: { 
            x: -100,
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1 
        }
    }
    const imageVariants = {
        hidden: { 
            x: 100,
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1 
        },transition: { delay:  1 },
    }
  return (
      <>
        <div className='hero'>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className='hero-item'
                >
                <div className='hero-blue-text'>Smart Buissnes</div>
                <div className='hero-title-text'>Connecting people is our 
                <span className='hero-blue-text'> buissnes</span>
                </div>
                <div className='hero-description-text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id tenetur accusamus, consectetur eius error nam?
                </div>
                <div className='hero-btn-group'>
                    <button className='hero-btn'>Get Started</button>
                    <button className='hero-btn-outline'>Play Video</button>
                </div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className='hero-item-img'
                >
                <img src={heroimg} alt='hero-img' />
            </motion.div>
        </div>
      </>
  );
};

export default Hero;
