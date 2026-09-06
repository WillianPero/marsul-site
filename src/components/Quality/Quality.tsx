import './Quality.css'

function Quality() {
  return (
    <section className="quality" id="qualidade">
      <div className="quality-container">

        <div className="quality-header">
          <span className="quality-label">
            NOSSOS DIFERENCIAIS
          </span>

          <h2>
            Um compromisso que vai
            <span> além do produto.</span>
          </h2>

          <p>
            Trabalhamos para oferecer uma experiência segura, eficiente e
            profissional em cada etapa do relacionamento com nossos clientes.
          </p>
        </div>

        <div className="quality-grid">

          {/* QUALIDADE */}
          <article className="quality-card">

            <div className="quality-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.3L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z" />
              </svg>
            </div>

            <h3>Qualidade</h3>

            <p>
              Seleção criteriosa de produtos para atender às diferentes
              necessidades da indústria.
            </p>

            <span className="quality-link">
              Nosso compromisso
            </span>

          </article>

          {/* CONFIABILIDADE */}
          <article className="quality-card">

            <div className="quality-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3L20 6V11C20 16.2 16.6 20 12 21C7.4 20 4 16.2 4 11V6L12 3Z" />
                <path d="M8.5 12L11 14.5L15.5 9.5" />
              </svg>
            </div>

            <h3>Confiabilidade</h3>

            <p>
              Relacionamentos construídos com transparência, responsabilidade
              e compromisso.
            </p>

            <span className="quality-link">
              Relações duradouras
            </span>

          </article>

          {/* AGILIDADE */}
          <article className="quality-card">

            <div className="quality-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7V12L15.5 14" />
              </svg>
            </div>

            <h3>Agilidade</h3>

            <p>
              Atendimento próximo e eficiente para acompanhar as demandas
              dos nossos clientes.
            </p>

            <span className="quality-link">
              Atendimento eficiente
            </span>

          </article>

          {/* PARCERIA */}
          <article className="quality-card">

            <div className="quality-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M8 12L10.5 14.5C11.3 15.3 12.7 15.3 13.5 14.5L18 10" />
                <path d="M3.5 8.5L7 5L10 8L7 11L3.5 8.5Z" />
                <path d="M20.5 8.5L17 5L14 8L17 11L20.5 8.5Z" />
                <path d="M7 11L4.5 13.5C3.7 14.3 3.7 15.7 4.5 16.5C5.3 17.3 6.7 17.3 7.5 16.5L9 15" />
                <path d="M17 11L19.5 13.5C20.3 14.3 20.3 15.7 19.5 16.5C18.7 17.3 17.3 17.3 16.5 16.5L15 15" />
              </svg>
            </div>

            <h3>Parceria</h3>

            <p>
              Construímos relações de longo prazo, buscando entender e
              atender cada necessidade.
            </p>

            <span className="quality-link">
              Crescimento conjunto
            </span>

          </article>

        </div>

      </div>
    </section>
  )
}

export default Quality