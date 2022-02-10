import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
  return (
    <>
        <div className='card'>
            <div className='card-header'>
                <div className='card-title'>What Our Customers are Saying.</div>
            </div>
            <div className='card-body'>
            <Swiper
                breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                }}
                spaceBetween={50}
                slidesPerView={1}
                grabCursor={true}
            >
                {
                    cards.map((card, index) => (
                        <SwiperSlide key={index}>
                    <div className='card-item'>
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
                    </div>
                </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    </>
    );
};


export default Cards;
