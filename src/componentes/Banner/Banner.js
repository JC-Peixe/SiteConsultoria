import './banner.css';

function Banner (){

    return (
        <header className="Banner-header">
            <nav className="Banner-nav">
                <ul className="Banner-ul">
                    <div>
                    <li className="Linha-1"><a href="#">Início</a></li>
                    <li className="Linha-2"><a href="#">Planos</a></li>
                    <li className="Linha-3"><a href="#">Compra</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Banner