import './Products.css'

const whatsappTexturized =
  'Olá! Vim pelo site da Marsul e gostaria de obter mais informações sobre o Fio 100% Poliéster Texturizado, incluindo disponibilidade, cores e condições comerciais. Poderiam me ajudar?'

const whatsappSpun =
  'Olá! Vim pelo site da Marsul e gostaria de obter mais informações sobre o Fio 100% Poliéster Fiado, incluindo disponibilidade, cores e condições comerciais. Poderiam me ajudar?'

const whatsappTexturizedLink = `https://wa.me/5511930474318?text=${encodeURIComponent(
  whatsappTexturized
)}`

const whatsappSpunLink = `https://wa.me/5511930474318?text=${encodeURIComponent(
  whatsappSpun
)}`

const products = [
  {
    number: '01',
    title: 'Fio 100% Poliéster Texturizado',
    description:
      'Fio desenvolvido para aplicações da indústria têxtil, oferecendo qualidade, regularidade e desempenho para diferentes necessidades de produção.',
    specifications: ['150/48', '75/36'],
    colors: ['Natural', 'Preto TM', 'Branco TM'],
    image: '/src/assets/images/texturizado-01.jpeg',
    whatsappLink: whatsappTexturizedLink,
  },
  {
    number: '02',
    title: 'Fio 100% Poliéster Fiado',
    description:
      'Solução em fio de poliéster fiado desenvolvida para atender diferentes aplicações têxteis, combinando versatilidade, qualidade e confiabilidade.',
    specifications: ['44/2', '30/1'],
    colors: ['Natural', 'Branco', 'Preto'],
    image: '/src/assets/images/fiado-01.jpeg',
    whatsappLink: whatsappSpunLink,
  },
]

function Products() {
  return (
    <section className="products" id="produtos">
      <div className="products-container">

        <div className="products-header">

          <div>
            <span className="section-label">
              NOSSOS PRODUTOS
            </span>

            <h2>
              Soluções têxteis para
              <span> diferentes necessidades.</span>
            </h2>
          </div>

          <p>
            Trabalhamos com fios de poliéster selecionados para atender às
            demandas da indústria, sempre buscando qualidade, confiabilidade
            e eficiência em cada fornecimento.
          </p>

        </div>

        <div className="products-grid">

          {products.map((product) => (
            <article
              className="product-card"
              key={product.number}
            >

              {/* IMAGEM DO PRODUTO */}

              <div className="product-image-wrapper">

                <img
                  src={product.image}
                  alt={product.title}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />

                <div className="image-placeholder">
                  <span>{product.number}</span>
                </div>

              </div>

              {/* CONTEÚDO */}

              <div className="product-content">

                <span className="product-category">
                  FIO TÊXTIL
                </span>

                <h3>
                  {product.title}
                </h3>

                <p>
                  {product.description}
                </p>

                {/* ESPECIFICAÇÕES */}

                <div className="product-specifications">

                  <div className="specification-group">

                    <span className="specification-title">
                      TÍTULOS DISPONÍVEIS
                    </span>

                    <div className="specification-list">

                      {product.specifications.map((specification) => (
                        <span
                          className="specification-tag"
                          key={specification}
                        >
                          {specification}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* CORES */}

                  <div className="specification-group">

                    <span className="specification-title">
                      CORES DISPONÍVEIS
                    </span>

                    <div className="specification-list">

                      {product.colors.map((color) => (
                        <span
                          className="specification-tag"
                          key={color}
                        >
                          {color}
                        </span>
                      ))}

                    </div>

                    <span className="colors-note">
                      Demais cores sob consulta.
                    </span>

                  </div>

                </div>

                {/* WHATSAPP */}

                <a
                  href={product.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-whatsapp"
                >
                  Solicitar informações
                  <span>→</span>
                </a>

              </div>

            </article>
          ))}

        </div>

        {/* ÁREA DE CONTATO */}

        <div className="products-bottom">

          <div className="products-bottom-content">

            <span className="products-bottom-label">
              PRECISA DE UMA LINHA ESPECÍFICA?
            </span>

            <h3>
              Não encontrou exatamente
              <span> o que procura?</span>
            </h3>

            <p>
              Entre em contato com nossa equipe. Podemos entender sua
              necessidade e buscar a solução mais adequada para sua operação.
            </p>

          </div>

          <a
            href="#contato"
            className="products-contact-button"
          >
            Fale com nossa equipe
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Products