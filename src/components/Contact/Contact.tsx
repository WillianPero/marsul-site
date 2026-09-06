import './Contact.css'

const whatsappMessage =
  'Olá! Vim pelo site da Marsul e gostaria de obter mais informações sobre a Linha de Poliéster, incluindo disponibilidade e condições comerciais. Poderiam me ajudar?'

const quotationMessage =
  'Olá! Vim pelo site da Marsul e gostaria de solicitar uma cotação. Poderiam me orientar sobre os produtos disponíveis e as condições comerciais?'

const whatsappLink1 = `https://wa.me/5511930474318?text=${encodeURIComponent(
  whatsappMessage
)}`

const whatsappLink2 = `https://wa.me/5511968608246?text=${encodeURIComponent(
  whatsappMessage
)}`

const quotationLink = `https://wa.me/5511930474318?text=${encodeURIComponent(
  quotationMessage
)}`

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact-container">

        {/* ================================
            INFORMAÇÕES
        ================================= */}

        <div className="contact-content">

          <span className="contact-label">
            ENTRE EM CONTATO
          </span>

          <h2>
            Vamos encontrar a
            <span> solução ideal para sua empresa.</span>
          </h2>

          <p>
            Precisa de uma linha específica ou deseja solicitar uma cotação?
            Nossa equipe está pronta para entender sua necessidade e ajudar
            você.
          </p>

          <div className="contact-info">

            {/* E-MAIL */}

            <a
              href="mailto:comercial@marsul.net"
              className="contact-item"
            >
              <div className="contact-icon email-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="M3 7L12 13L21 7" />
                </svg>
              </div>

              <div>
                <span>E-mail</span>

                <strong>
                  comercial@marsul.net
                </strong>
              </div>
            </a>

            {/* WHATSAPP 1 */}

            <a
              href={whatsappLink1}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item contact-whatsapp"
            >
              <div className="contact-icon whatsapp-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20.5 11.5C20.5 16.2 16.7 20 12 20C10.5 20 9.1 19.6 7.9 18.9L4 20L5.2 16.3C4.4 14.9 4 13.3 4 11.5C4 6.8 7.8 3 12.5 3C17.2 3 20.5 6.8 20.5 11.5Z" />

                  <path d="M8.5 8.5C8.7 8.1 9 8 9.3 8H10.1C10.4 8 10.6 8.2 10.7 8.5L11.2 9.7C11.3 10 11.2 10.3 11 10.5L10.4 11.1C11 12.2 11.9 13.1 13 13.7L13.6 13.1C13.8 12.9 14.1 12.8 14.4 12.9L15.6 13.4C15.9 13.5 16.1 13.8 16.1 14.1V14.9C16.1 15.2 16 15.5 15.6 15.7C15.1 16 14.5 16.1 14 15.9C10.9 14.9 9 13 8 9.9C7.8 9.4 7.9 8.8 8.5 8.5Z" />
                </svg>
              </div>

              <div>
                <span>WhatsApp</span>

                <strong>
                  (11) 93047-4318
                </strong>
              </div>
            </a>

            {/* WHATSAPP 2 */}

            <a
              href={whatsappLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item contact-whatsapp"
            >
              <div className="contact-icon whatsapp-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20.5 11.5C20.5 16.2 16.7 20 12 20C10.5 20 9.1 19.6 7.9 18.9L4 20L5.2 16.3C4.4 14.9 4 13.3 4 11.5C4 6.8 7.8 3 12.5 3C17.2 3 20.5 6.8 20.5 11.5Z" />

                  <path d="M8.5 8.5C8.7 8.1 9 8 9.3 8H10.1C10.4 8 10.6 8.2 10.7 8.5L11.2 9.7C11.3 10 11.2 10.3 11 10.5L10.4 11.1C11 12.2 11.9 13.1 13 13.7L13.6 13.1C13.8 12.9 14.1 12.8 14.4 12.9L15.6 13.4C15.9 13.5 16.1 13.8 16.1 14.1V14.9C16.1 15.2 16 15.5 15.6 15.7C15.1 16 14.5 13 14 15.9C10.9 14.9 9 13 8 9.9C7.8 9.4 7.9 8.8 8.5 8.5Z" />
                </svg>
              </div>

              <div>
                <span>WhatsApp</span>

                <strong>
                  (11) 96860-8246
                </strong>
              </div>
            </a>

          </div>
        </div>

        {/* ================================
            ATENDIMENTO DIRETO
        ================================= */}

        <div className="contact-form-wrapper">

          <div className="contact-form-header">

            <span>
              FALE COM A MARSUL
            </span>

            <h3>
              Atendimento direto e personalizado
            </h3>

            <p>
              Fale diretamente com nossa equipe comercial pelo WhatsApp.
              Tire suas dúvidas, consulte disponibilidade ou solicite uma
              cotação de forma rápida e prática.
            </p>

          </div>

          <a
            href={quotationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-whatsapp-button"
          >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M20.5 11.5C20.5 16.2 16.7 20 12 20C10.5 20 9.1 19.6 7.9 18.9L4 20L5.2 16.3C4.4 14.9 4 13.3 4 11.5C4 6.8 7.8 3 12.5 3C17.2 3 20.5 6.8 20.5 11.5Z" />

              <path d="M8.5 8.5C8.7 8.1 9 8 9.3 8H10.1C10.4 8 10.6 8.2 10.7 8.5L11.2 9.7C11.3 10 11.2 10.3 11 10.5L10.4 11.1C11 12.2 11.9 13.1 13 13.7L13.6 13.1C13.8 12.9 14.1 12.8 14.4 12.9L15.6 13.4C15.9 13.5 16.1 13.8 16.1 14.1V14.9C16.1 15.2 16 15.5 15.6 15.7C15.1 16 14.5 15.9 14 15.9C10.9 14.9 9 13 8 9.9C7.8 9.4 7.9 8.8 8.5 8.5Z" />
            </svg>

            Solicitar cotação pelo WhatsApp

          </a>

          <p className="contact-direct-message">
            Atendimento comercial direto pelo WhatsApp.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Contact