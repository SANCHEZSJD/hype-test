import React from "react";
import CardPrice from "./card-price";

const prices = [
    {
        title: "Ejecutivo junior",
        values: [100, 300, 500]
    },
    {
        title: "Ejecutivo",
        values: [1000, 2000, 3000]
    },
    {
        title: "Gerente",
        values: [5000, 10000, 20000]
    },
    {
        title: "Empresario",
        values: [30000, 40000, 50000]
    }
];

const Section5 = () => {
    return (
        <article className='card-wrapper card-plan-wrapper'>
            {prices.map((price, index) => (<CardPrice key={index} {...price} isBasicPLan={index === 0} />))}
        </article>
    )
}

export default Section5;