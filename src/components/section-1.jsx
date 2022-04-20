import React from 'react';
import iconLike from '../assets/images/icon-link.svg';
import iconTrade from '../assets/images/icon-trade.svg';
import iconGlobal from '../assets/images/icon-global.svg';
import CardIcon from './card-icon';

const cardData = [
    {
        Icon: <img src={iconLike} />,
        title: 'Compromiso',
        description: 'Mejora continua en nuestros servicios hacia nuestros Inversores',
    },
    {
        Icon: <img src={iconTrade} />,
        title: 'Prosperidad',
        description: 'Fomentar el crecimiento económico de nuestros inversores con los beneficios  de nuestra empresa',
    },
    {
        Icon: <img src={iconGlobal} />,
        title: 'Inclusión Global',
        description: 'Queremos permitir que toda la comunidad pueda recibir los mismos beneficios de manera eficiente y real',
    }
];

const Section1 = () => {
    return (
        <article className='card-wrapper card-icon-wrapper'>
            {cardData.map((card, index) => (<CardIcon key={index} {...card} />))}
        </article>
    )
};

export default Section1;