import './Footer.css'

import logoMarsul from '../../assets/images/logo-marsul2.jpeg'
import footerBackground from '../../assets/images/footer-marsul.jpg'

const whatsappMessage =
  'Olá! Vim pelo site da Marsul e gostaria de obter mais informações sobre os produtos e soluções disponíveis. Poderiam me ajudar?'

const whatsappLink = `https://wa.me/5511930474318?text=${encodeURIComponent(
  whatsappMessage
)}`

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerBackground})`,
      }}
    >

      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* MARCA */}

        <div className="footer-brand">

          <img
            src={logoMarsul}
            alt="Marsul"
            className="footer-logo"
          />

          <p>
            Soluções em fios de poliéster para a indústria têxtil,
            com qualidade, confiabilidade e compromisso em cada
            fornecimento.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            Fale conosco pelo WhatsApp
            <span>→</span>
          </a>

        </div>

        {/* NAVEGAÇÃO */}

        <div className="footer-column">

          <span className="footer-title">
            NAVEGAÇÃO
          </span>

          <nav className="footer-links">

            <a href="#inicio">
              Início
            </a>

            <a href="#empresa">
              Empresa
            </a>

            <a href="#produtos">
              Produtos
            </a>

            <a href="#qualidade">
              Qualidade
            </a>

            <a href="#contato">
              Contato
            </a>

          </nav>

        </div>

        {/* CONTATO */}

        <div className="footer-column">

          <span className="footer-title">
            CONTATO
          </span>

          <div className="footer-contact">

            <a href="mailto:comercial@marsul.net">
              comercial@marsul.net
            </a>

            <a
              href="https://wa.me/5511930474318"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 93047-4318
            </a>

            <a
              href="https://wa.me/5511968608246"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 96860-8246
            </a>

          </div>

        </div>

      </div>

      {/* RODAPÉ INFERIOR */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} Marsul. Todos os direitos reservados.
          </p>

          <span>
            Qualidade que conecta sua produção.
          </span>

        </div>

      </div>

    </footer>
  )
}

export default Footer