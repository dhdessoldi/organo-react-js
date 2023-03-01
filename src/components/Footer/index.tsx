import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <ul className='icones'>
                <li>
                    <a href='facebook.com' target="_blank">
                        <img src='imagens/fb.png' alt='' />
                    </a>
                </li>
                <li>
                    <a href='twitter.com' target="_blank">
                        <img src='imagens/tw.png' alt='' />
                    </a>
                </li>
                <li>
                    <a href='instagram.com' target="_blank">                        
                        <img src='imagens/ig.png' alt='' />
                    </a>
                </li>
            </ul>
            <img src='imagens/logo.png' alt='' />
            <p>Desenvolvido por Daniel.</p>

        </section>
    )
}

export default Footer