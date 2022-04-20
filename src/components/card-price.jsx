import classNames from "classnames";
import React from "react";
import btc from '../assets/images/btc.svg';

const features = [
    {
        title: "Rendimiento mensual 12.5%",
        subTitle: 'Pagos de lunes a viernes',
    },
    {
        title: "Bono acelerador",
        subTitle: '3% por invitación directa',
    },
    {
        title: "Retiro mensual",
        subTitle: 'Por fecha de ingreso',
    }
];

const CardPrice = ({ title, values, isBasicPLan }) => {

    return (
        <div className="card-price-container">
            <h2 className="card-price-title">{title}</h2>
            <div className="prices-content">
                {values.map((value, index) => (<span className="prices-item" key={index}>{new Intl.NumberFormat().format(value)}</span>))}
            </div>
            <div className="goal">
                <span className="bold">Meta 200%</span> incluye capital
            </div>
            {
                features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <h3 className="feature-item-title">{feature.title}</h3>
                        <p className="feature-item-subtitle">{feature.subTitle}</p>
                    </div>
                ))
            }
            <button className={classNames("feature-btn", { "basic": isBasicPLan })}>
                Adquierelo con <div className="feature-btn-cryptos">
                    <img src={btc} />
                    <img src={btc} />
                </div>
            </button >
        </div >
    )

};

export default CardPrice;