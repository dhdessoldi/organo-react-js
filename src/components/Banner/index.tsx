import './Banner.css'
import React from 'react';

interface BannerProps {
    sourceImage: string
    altText?: string
}

function Banner ({sourceImage, altText}: BannerProps) {
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="Imagem com figuras geométricas e pessoas tocando as mãos"/> */}
            <img src={sourceImage} alt={altText}/>
        </header>
    )
}

export default Banner