import React from 'react';

const CardPost = ({ img, title, description }) => {
    return (
        <div className="card-post">
            <div className="card-post-image">
                <img src={img} />
            </div>
            <div className="card-post-head">
                <div className="card-post-title">{title}</div>
                <span>...</span>
            </div>
            <div className="card-post-description">{description}</div>
        </div>
    )
}

export default CardPost;