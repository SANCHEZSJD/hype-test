import React from "react";

import cryptoTree from '../assets/images/crypto-tree.svg';
import isotipo from '../assets/images/isotipo.svg';

import btc from '../assets/images/btc.svg';

const items = [
    "Conocer el negocio",
    "Defina una meta",
    "Conocer quien lo invita",
    "Solicite el registro",
    "Defina el valor a invertir"
];

const Section4 = () => {
    
    const getMarginLeft = (index) => {
        let i = 0;
        let arr = [];
        const halfItem = Math.round(items.length / 2) - 1;
        items.forEach((element, ii) => {
            if (ii <= halfItem) {
                arr.push(i);
                if (ii < halfItem) i++;
            } else {
                i--;
                arr.push(i);
            }
        });
        return `${arr[index] * 8}rem`;
    }

    return (
        <>
            <article className='card-wrapper card-tree-wrapper'>
                <div className='card-tree-content'>
                    <div className="card-tree-items">
                        <img src={isotipo} />
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <span className="item" style={{ marginRight: getMarginLeft(index) }}>
                                        <span className="number">{index + 1}.</span>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="means-transaction">
                            <h2>Medios de transacción</h2>
                            <div className="means-transaction-content">
                                <div className="crypto-item">
                                    <img src={btc} />
                                    BTC (BITCOIN)
                                </div>
                                <div className="crypto-item">
                                    <img src={btc} />
                                    USDT (TRC20)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-tree-bg">
                    <img src={cryptoTree} />
                </div>
            </article>
            <div className="tree-title">
                <img src={isotipo} />
            </div>
        </>
    )
}

export default Section4;