import React from 'react';
import feature1 from '../assets/icon1.svg';
import feature2 from '../assets/icon2.svg';
import feature3 from '../assets/icon3.svg';
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
        viewport={{once:true}}
        className='features'>
               <motion.div custom={1} variants={animation} className='features-title'>How We Work</motion.div>
          <div className='features-item'>

               <motion.div custom={2} variants={animation} className='features-info'>  
                    <div  className='features-imgs'><img src={feature1} alt='features' /> </div>
                    <div className='features-text'> Start Design  </div>
                    <div className='features-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.  </div>
                </motion.div> 
                
                <motion.div custom={3} variants={animation} className='features-info'>  
                    <div  className='features-imgs'><img src={feature2} alt='features' /> </div>
                    <div className='features-text'> Start Design  </div>
                    <div className='features-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.  </div>
                </motion.div> 
                
                <motion.div custom={4} variants={animation} className='features-info'>  
                    <div  className='features-imgs'><img src={feature3} alt='features' /> </div>
                    <div className='features-text'> Start Design  </div>
                    <div className='features-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.  </div>
                </motion.div> 
        </div>     
    </motion.div>
    </>
    );
};

export default Features;
