import React from 'react';

import imgPost1 from '../assets/images/blog/post-1.svg';
import imgPost2 from '../assets/images/blog/post-2.svg';
import imgPost3 from '../assets/images/blog/post-3.svg';
import imgPost4 from '../assets/images/blog/post-4.svg';

import CardPost from './card-post';

const posts = [
    {
        img: imgPost1,
        title: 'User experience design fundamental',
        description: 'Gain the basic skills in User Experience. Study practice and theory'
    },
    {
        img: imgPost2,
        title: 'User experience design fundamental',
        description: 'Gain the basic skills in User Experience. Study practice and theory'
    },
    {
        img: imgPost3,
        title: 'User experience design fundamental',
        description: 'Gain the basic skills in User Experience. Study practice and theory'
    },
    {
        img: imgPost4,
        title: 'User experience design fundamental',
        description: 'Gain the basic skills in User Experience. Study practice and theory'
    }
];

const Section6 = () => {

    return (
        <article className='card-wrapper card-post-wrapper'>
            <h2 className='crad-title'>Bolg</h2>
            <div className="card-post-content">
                {
                    posts.map((post, index) => (<CardPost key={index} {...post} />))
                }
            </div>
        </article>
    )
}

export default Section6;