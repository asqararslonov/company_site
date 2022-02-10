import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion';

import 'swiper/css';
import cardimg from '../assets/card1.png';

const cards = [
    {
        img: cardimg,
        description: 'I recently concluded a complete messaging revamp for an exciting com',
        autor: '- Leo Aminoff',
        profession: 'Product Designer'
    },
    {
        img: cardimg,
        description: 'I recently concluded a complete messaging revamp for an exciting com',
        autor: '- Leo Aminoff',
        profession: 'Product Designer'
    },
    {
        img: cardimg,
        description: 'I recently concluded a complete messaging revamp for an exciting com',
        autor: '- Leo Aminoff',
        profession: 'Product Designer'
    },
    {
        img: cardimg,
        description: 'I recently concluded a complete messaging revamp for an exciting com',
        autor: '- Leo Aminoff',
        profession: 'Product Designer'
    },
    {
        img: cardimg,
        description: 'I recently concluded a complete messaging revamp for an exciting com',
        autor: '- Leo Aminoff',
        profession: 'Product Designer'
    },
    {
        img: cardimg,
        description: 'I recently concluded a complete messaging revamp for an exciting com',
        autor: '- Leo Aminoff',
        profession: 'Product Designer'
    },
]

const Cards = () => {
    const textAnimation = {
        hidden: {
          opacity: 0.5,
        },
        visible: {
          opacity: 1,
          transition: { delay:  0.5 }, 
        },
      }
    const animation = {
        hidden: {
          x: 100,
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
            className='card'>
            <div className='card-header'>
                <motion.div variants={textAnimation} className='card-title'>What Our Customers are Saying.</motion.div>
            </div>
            <div className='card-body'>
            <Swiper
                breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1080: {
                    width: 980,
                    slidesPerView: 3,
                  },
                1680: {
                    width: 1680,
                    slidesPerView: 4,
                },
                }}
                spaceBetween={50}
                slidesPerView={1}
                grabCursor={true}
            >
                {
                    cards.map((card, index) => (
                        <SwiperSlide key={index}>
                    <motion.div custom={index} variants={animation} className='card-item'>
                        <div className='card-img'>
                            <img src={card.img} alt='card-item' />
                        </div>
                        <div className='card-text'>
                            <div className='card-description'>
                            {card.description}
                            </div>
                            <div className='card-autor'>
                            {card.autor}
                            </div>
                            <div className='card-profession'>
                                {card.profession}
                            </div>
                        </div>
                    </motion.div>
                </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </motion.div>
    </>
    );
};


export default Cards;
