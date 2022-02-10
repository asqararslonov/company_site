import React from 'react';
import features from '../assets/icon1.svg';
import {motion} from 'framer-motion';

const Features = () => {
    const animation = {
        hidden: {
          x: -100,
          opacity: 0,
        },
        visible: custom => ({
          x: 0,
          opacity: 1,
          transition: { delay: custom * 0.2 }, 
        }),
      }
  return (
    <>
    <motion.div 
        initial="hidden"
        whileInView="visible"
        className='features'>
               <motion.div custom={1} variants={animation} className='features-title'>How We Work</motion.div>
          <div className='features-item'>

               <motion.div custom={2} variants={animation} className='features-info'>  
                    <div  className='features-imgs'><img src={features} alt='features' /> </div>
                    <div className='features-text'> Start Design  </div>
                    <div className='features-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.  </div>
                </motion.div> 
                
                <motion.div custom={3} variants={animation} className='features-info'>  
                    <div  className='features-imgs'><img src={features} alt='features' /> </div>
                    <div className='features-text'> Start Design  </div>
                    <div className='features-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.  </div>
                </motion.div> 
                
                <motion.div custom={4} variants={animation} className='features-info'>  
                    <div  className='features-imgs'><img src={features} alt='features' /> </div>
                    <div className='features-text'> Start Design  </div>
                    <div className='features-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.  </div>
                </motion.div> 
        </div>     
    </motion.div>
    </>
    );
};

export default Features;
