import React from 'react';
import shield from '../assets/images/shield.svg';
import isotipo from '../assets/images/isotipo.svg';

const Section2 = () => {
    return (
        <article className='card-wrapper card-shield-wrapper'>
            <img src={shield} style={{ maxWidth: 500 }} />
            <div className='card-shield-content'>
                <h2>Somos</h2>
                <img src={isotipo} style={{ width: 350 }} />
                <p>Somos un fondo de inversión fundado en el año 2018 con el claro norte de generar un impacto económico en todos los aportantes con el único objetivo de que sus miembros puedan alcanzar metas y desarrollar sus proyectos de alto impacto dentro de su núcleo familiar.</p>
            </div>
        </article>
    )
}

export default Section2;