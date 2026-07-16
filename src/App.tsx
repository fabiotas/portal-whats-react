import "./App.css";

const services = [
  {
    number: "01",
    title: "Desenvolvimento de Sistemas",
    category: "Software personalizado",
    description:
      "Criamos sistemas modernos, escaláveis e alinhados às necessidades reais do seu negócio.",
    items: [
      "Sistemas web personalizados",
      "Portais administrativos",
      "APIs e serviços de integração",
    ],
    visual: "system",
  },
  {
    number: "02",
    title: "Automação e Integrações",
    category: "Eficiência operacional",
    description:
      "Conectamos ferramentas, automatizamos processos e reduzimos atividades manuais.",
    items: [
      "Integração entre sistemas",
      "Automação de processos",
      "APIs e serviços externos",
    ],
    visual: "automation",
  },
  {
    number: "03",
    title: "Consultoria em Tecnologia",
    category: "Estratégia e arquitetura",
    description:
      "Analisamos o cenário atual e ajudamos sua empresa a tomar decisões técnicas mais seguras.",
    items: [
      "Levantamento de requisitos",
      "Arquitetura de software",
      "Planejamento de soluções",
    ],
    visual: "consulting",
  },
];

const testimonials = [
  {
    name: "Carlos Almeida",
    role: "Diretor de Operações",
    text: "A SS Sistemas entendeu rapidamente nosso processo e entregou uma solução muito mais simples e eficiente.",
  },
  {
    name: "Mariana Lopes",
    role: "Gestora Administrativa",
    text: "O atendimento foi próximo durante todo o projeto. Tivemos clareza desde o planejamento até a entrega.",
  },
  {
    name: "Rafael Martins",
    role: "Empreendedor",
    text: "Conseguimos transformar uma ideia em um sistema funcional, moderno e preparado para crescer.",
  },
];

function App() {
  const whatsappNumber = "5519981791019";

  return (
    <div className="app">
      <header className="header">
        <a href="#inicio" className="brand">
          <img src="/ss-sistemas-icon.svg" alt="" className="brand-icon" />

        </a>

        <nav className="navigation">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#resultados">Resultados</a>
          <a href="#clientes">Clientes</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="outline-button"
        >
          Fale conosco
        </a>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />

          <div className="hero-content">
            <span className="section-label">
              Desenvolvimento, consultoria e automação
            </span>

            <h1>
              Tecnologia para transformar
              <span> ideias em resultados.</span>
            </h1>

            <p>
              Desenvolvemos sistemas e soluções digitais para empresas que
              desejam modernizar processos, reduzir tarefas manuais e crescer
              com mais eficiência.
            </p>

            <div className="hero-actions">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Iniciar um projeto
                <span>↗</span>
              </a>

              <a href="#servicos" className="text-button">
                Conhecer serviços
                <span>↓</span>
              </a>
            </div>

            <div className="hero-metrics">
              <div>
                <strong>10+</strong>
                <span>Anos de experiência</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Soluções personalizadas</span>
              </div>

              <div>
                <strong>360º</strong>
                <span>Visão técnica do projeto</span>
              </div>
            </div>
          </div>

          <div className="hero-art">
  <div className="sphere-stage">
    <span className="sphere-ambient-glow" />

    <span className="sphere-orbit sphere-orbit-one" />
    <span className="sphere-orbit sphere-orbit-two" />
    <span className="sphere-orbit sphere-orbit-three" />

    <span className="sphere-particle sphere-particle-one" />
    <span className="sphere-particle sphere-particle-two" />
    <span className="sphere-particle sphere-particle-three" />

    <div className="tech-sphere">
      <div className="sphere-rotation">
        <span className="sphere-light" />
        <span className="sphere-grid sphere-grid-one" />
        <span className="sphere-grid sphere-grid-two" />
      </div>

      <div className="sphere-logo">
        <img
          src="/ss-sistemas-icon.svg"
          alt="SS Sistemas"
        />
      </div>
    </div>

    <div className="sphere-tag sphere-tag-development">
      <span />
      Desenvolvimento
    </div>

    <div className="sphere-tag sphere-tag-consulting">
      <span />
      Consultoria
    </div>

    <div className="sphere-tag sphere-tag-automation">
      <span />
      Automação
    </div>
  </div>
</div>
        </section>

        <div className="service-marquee">
          <div className="service-marquee-track">
            <span>Desenvolvimento Web</span>
            <i>✦</i>
            <span>Integrações</span>
            <i>✦</i>
            <span>Automação</span>
            <i>✦</i>
            <span>Consultoria</span>
            <i>✦</i>
            <span>APIs</span>
            <i>✦</i>
            <span>Arquitetura</span>
            <i>✦</i>
            <span>Inteligência Artificial</span>
          </div>
        </div>

        <section id="servicos" className="services-section">
          <div className="section-heading">
            <span className="section-label">Nossos serviços</span>

            <h2>
              Soluções digitais para
              <span> desafios reais.</span>
            </h2>

            <p>
              Cada projeto começa pelo entendimento do problema e termina com
              uma solução criada para gerar valor de verdade.
            </p>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-panel" key={service.title}>
                <div className="service-panel-glow" />

                <div className="service-copy">
                  <span className="service-number">{service.number}</span>

                  <span className="service-category">{service.category}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        <span>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Conversar sobre este serviço
                    <span>↗</span>
                  </a>
                </div>

                <div className={`service-visual ${service.visual}`}>
                  <div className="visual-browser">
                    <div className="visual-browser-header">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="visual-sidebar">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="visual-content">
                      <div className="visual-title" />

                      <div className="visual-cards">
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="visual-chart">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>

                  <div className="visual-mobile">
                    <div />
                    <span />
                    <span />
                    <button />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resultados" className="results-section">
          <div className="result-item">
            <strong>5M+</strong>
            <span>Linhas de código analisadas</span>
          </div>

          <div className="result-item">
            <strong>450+</strong>
            <span>Processos avaliados</span>
          </div>

          <div className="result-item">
            <strong>22%</strong>
            <span>Redução média de esforço manual</span>
          </div>

          <div className="result-item">
            <strong>99%</strong>
            <span>Foco em estabilidade e qualidade</span>
          </div>
        </section>

        <section id="clientes" className="testimonials-section">
          <div className="section-heading">
            <span className="section-label">Experiência dos clientes</span>

            <h2>
              Parcerias construídas com
              <span> confiança.</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-top">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>

                  <div className="quote">“</div>
                </div>

                <div className="stars">★★★★★</div>

                <p>{testimonial.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Somente esta seção foi redesenhada */}
        <section id="contato" className="contact-section">
          <span className="contact-light contact-light-top" />
          <span className="contact-light contact-light-bottom" />

          <div className="contact-copy">
            <span className="section-label">Vamos conversar?</span>

            <h2>
              Sua empresa
              <br />
              tem um
              <br />
              desafio.
              <span>
                Nós podemos
                <br />
                criar a solução.
              </span>
            </h2>

            <p>
              Conte um pouco sobre seu projeto, processo ou ideia. Vamos
              analisar sua necessidade e encontrar o melhor caminho técnico.
            </p>

            <div className="contact-actions">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="contact-action-icon"
                >
                  <path
                    d="M20.5 3.5A11.77 11.77 0 0 0 12.08 0C5.52 0 .18 5.33.18 11.9c0 2.1.55 4.15 1.6 5.95L.08 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01C18.64 23.8 24 18.47 24 11.9c0-3.18-1.24-6.16-3.5-8.4Zm-8.42 18.29h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.22-3.74.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.51-5.26c0-5.46 4.44-9.9 9.91-9.9a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.92 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"
                    fill="currentColor"
                  />
                </svg>

                <span>Conversar pelo WhatsApp</span>
                <strong aria-hidden="true">→</strong>
              </a>

              <a
                href="mailto:contato@sssistemas.com.br"
                className="contact-email"
              >
                <span className="contact-email-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M3 5h18v14H3V5Zm1.9 2 7.1 5 7.1-5H4.9ZM19 17V9.43l-7 4.93-7-4.93V17h14Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <span>contato@sssistemas.com.br</span>
              </a>
            </div>
          </div>

          <div className="contact-showcase">
            <div className="contact-orbit">
              <span className="orbit-ring orbit-ring-one" />
              <span className="orbit-ring orbit-ring-two" />
              <span className="orbit-dot orbit-dot-one" />
              <span className="orbit-dot orbit-dot-two" />

              <div className="contact-photo">
                <img
                  src="/fabio-profile.png"
                  alt="Especialista da SS Sistemas"
                />
              </div>

              <span className="online-status" aria-label="Disponível" />
            </div>

            <div className="contact-benefits">
              <article className="contact-benefit">
                <div className="contact-benefit-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <strong>Resposta rápida</strong>
                <p>
                  Retorno em até
                  <br />
                  24h úteis
                </p>
              </article>

              <article className="contact-benefit">
                <div className="contact-benefit-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 2 20 5v6c0 5.1-3.4 9.2-8 11-4.6-1.8-8-5.9-8-11V5l8-3Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m9 12 2 2 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <strong>Confidencialidade</strong>
                <p>
                  Seus dados e ideias
                  <br />
                  sempre protegidos
                </p>
              </article>

              <article className="contact-benefit">
                <div className="contact-benefit-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle
                      cx="12"
                      cy="12"
                      r="7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M12 2v3M12 19v3M2 12h3M19 12h3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <strong>Soluções sob medida</strong>
                <p>
                  Tecnologia alinhada
                  <br />
                  ao seu objetivo
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="brand">
          <img src="/ss-sistemas-icon.svg" alt="" className="brand-icon" />

          <span>
            <strong>SS</strong> Sistemas
          </span>
        </a>

        <p>
          © {new Date().getFullYear()} SS Sistemas. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
