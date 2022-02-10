import React from 'react';
import community from '../assets/community.png';
import {motion} from 'framer-motion';

const Community = () => {
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
        className="community"> 
     <motion.div custom={1} variants={animation} className='community-item-img'>
                <img src={community} alt='community' />
    </motion.div>
     <motion.div custom={2} variants={animation} className="community-item">
          <div className='community-p'> Community</div>
          <div className='community-text'>Platform Dedicated To Promoting</div>
          <div className='community-paragrf'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum sagittis ultrices  consectetur adipiscing elit. fringilla quisque pulvinar. </div>
          <div><button className='community-btn'> What we do?  </button>  </div>
      </motion.div>      
     </motion.div>
     
     </>
 );
};

export default Community;
