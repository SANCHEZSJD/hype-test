import React from 'react';
import { MdAdd } from 'react-icons/md';
const questions = [
    "What services does TanahAir Offer?",
    "Why should i choose a Design studio like TanahAir over full-service agency?",
    "How does TanahAir create website content without knowing our Business plan?",
    "What will be delivered? And When?",
    "What often will results be reported?",
    "How Quickly will i start seeing result after working with TanahAir?"
];

const Section7 = () => {
    return (
        <article className='card-wrapper'>
            <h2 className='crad-title'>Preguntas frecuentes</h2>
            <div className="question-container">
                {
                    questions.map((question, index) => (
                        <div key={index} className="question-item">
                            <div className="question-item-text">{question}</div>
                            <MdAdd style={{ color: '#FF6600', fontSize: 33 }} />
                        </div>
                    ))
                }
            </div>
        </article>
    )
};

export default Section7;