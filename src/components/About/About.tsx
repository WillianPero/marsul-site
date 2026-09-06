import './About.css'

import sobreMarsul from '../../assets/images/sobre-marsul.jpeg'

function About() {
  return (
    <section className="about" id="empresa">
      <div className="about-container">

        <div className="about-image">
          <img
            src={sobreMarsul}
            alt="Fios têxteis em processo industrial"
          />
        </div>

        <div className="about-content">
          <span className="about-label">
            SOBRE A MARSUL
          </span>

          <h2>
            Confiança, eficiência
            <span> e compromisso em cada operação.</span>
          </h2>

          <p>
            A Marsul atua conectando fornecedores, produtos e empresas
            com foco em qualidade, agilidade e relacionamento de longo prazo.
          </p>

          <p>
            Nossa atuação é pautada pela transparência, pelo atendimento
            próximo e pela busca constante por soluções que contribuam
            para o crescimento dos nossos clientes.
          </p>

          <div className="about-highlights">
            <div>
              <strong>01</strong>
              <span>Atendimento próximo</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Compromisso com qualidade</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Agilidade nas operações</span>
            </div>
          </div>

          <a href="#contato" className="about-button">
            Fale com nossa equipe
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default About