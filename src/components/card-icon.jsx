import React from 'react';

const IconContainer = ({ children }) => {
    return (
        <div className="icon-container">{children}</div>
    )
}

const CardIcon = ({ Icon, title, description }) => {
    return (
        <div className="card-icon-container">
            {Icon && <IconContainer>{Icon}</IconContainer>}
            <div className="card-icon-content">
                <h3 className="card-icon-title">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default CardIcon;