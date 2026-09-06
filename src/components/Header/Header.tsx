import './Header.css'

import logoMarsul from '../../assets/images/logo-marsul.jpeg'
import headerMarsul from '../../assets/images/header-marsul.jpeg'

function Header() {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${headerMarsul})` }}
    >
      <div className="header-container">

        <a href="#inicio" className="logo">
          <img
            src={logoMarsul}
            alt="Marsul Importadora & Distribuidora"
          />
        </a>

        <div className="header-menu">
          <nav className="navigation">
            <a href="#inicio">Início</a>
            <a href="#empresa">Empresa</a>
            <a href="#produtos">Produtos</a>
            <a href="#qualidade">Qualidade</a>
            <a href="#contato">Contato</a>
          </nav>

          <a href="#contato" className="quote-button">
            Solicitar cotação
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header