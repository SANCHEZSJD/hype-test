import React from 'react';
import bannerBg from '../assets/images/banner-bg.svg';

const Section3 = () => {
    return (
        <article className='card-wrapper card-banner-wrapper' style={{ backgroundImage: `url(${bannerBg})`, backgroundPosition: 'center 45%' }}>
            <p>“La pequeña semilla sabía que para crecer, necesitaba ser cubierta de tierra, enterrada en la oscuridad y luchar para alcanzar la luz.”</p>
            <p className='banner-name'>Sandra Kring</p>
        </article>
    )
};

export default Section3;