import './Hero.css'

import heroTextil from '../../assets/images/hero-textil.jpg'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-label">
            EXCELÊNCIA EM SOLUÇÕES TÊXTEIS
          </span>

          <h1>
            Fios que conectam
            <span> qualidade à sua produção.</span>
          </h1>

          <p className="hero-description">
            Soluções têxteis desenvolvidas para empresas que buscam
            qualidade, confiança e eficiência em cada etapa da produção.
          </p>

          <div className="hero-actions">
            <a href="#produtos" className="hero-primary">
              Conheça nossos produtos
              <span>→</span>
            </a>

            <a href="#contato" className="hero-secondary">
              Fale com nossa equipe
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <strong>Qualidade</strong>
              <span>Produtos selecionados</span>
            </div>

            <div>
              <strong>Confiança</strong>
              <span>Relacionamentos duradouros</span>
            </div>

            <div>
              <strong>Eficiência</strong>
              <span>Agilidade no atendimento</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image">
            <img
              src={heroTextil}
              alt="Fios têxteis industriais"
            />
          </div>

          <div className="hero-floating-card">
            <span className="floating-icon">✓</span>

            <div>
              <strong>Compromisso com qualidade</strong>
              <p>Do atendimento à entrega.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero