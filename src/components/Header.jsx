import React,{useState} from 'react';
import {useMediaQuery} from './Media'
import {motion, AnimatePresence} from 'framer-motion'
import Hamburger from './Hamburger'
import logo from '../assets/logo.png';

const Header = () => {
  const isSmall = useMediaQuery('(max-width: 650px)');
  const [isOpen, setOpen] = useState(false);
  return (
  <>
    <div className='header' >
        <div className='header-logo' >
          <img src={logo} alt='logo'  />
        </div>
        {
          isSmall ? 
          <button className='header-hamburger' onClick={()=> setOpen(!isOpen)}>
          <Hamburger />
          </button>
          :<>
            <ul className='header-item'>
              <li>Home</li>
              <li >About</li>
              <li>Service</li>
            <li >Rewievs</li>
          </ul>
          <button className='header-btn'>Get Started</button></>
        }
    </div>
      <AnimatePresence  >
    {
      isOpen && 
        <motion.div
          initial={{height: 0}}
          animate={{height: '100%'}}
          exit={{ height: 0 }}
          transition={{  ease : 'easeInOut' }}
          className='header-mobile-menu'
          >
          <ul className='header-item'>
            <li>Home</li>
            <li >About</li>
            <li>Service</li>
            <li >Rewievs</li>
          </ul>
        </motion.div>
    }
    </AnimatePresence>  
  </>
  );
};

export default Header;
