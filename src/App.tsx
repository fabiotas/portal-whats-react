import "./App.css";

const services = [
  {
    icon: "</>",
    title: "Desenvolvimento de Sistemas",
    description:
      "Soluções personalizadas, modernas e escaláveis para atender às necessidades do seu negócio.",
  },
  {
    icon: "↗",
    title: "Consultoria em Tecnologia",
    description:
      "Análise de processos, arquitetura de software e definição das melhores estratégias técnicas.",
  },
  {
    icon: "⚙",
    title: "Integrações e Automação",
    description:
      "Integramos sistemas e automatizamos processos para aumentar a produtividade da sua empresa.",
  },
];

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app">
      <header className="header">
        <a href="#inicio" className="logo">
          <span className="logo-symbol">SS</span>
          <span>SS Sistemas</span>
        </a>

        <nav className="navigation">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className="header-button">
          Fale conosco
        </a>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <span className="eyebrow">
              Consultoria e desenvolvimento de software
            </span>

            <h1>
              Tecnologia que transforma
              <span> ideias em resultados.</span>
            </h1>

            <p>
              Desenvolvemos sistemas, integrações e soluções digitais para
              empresas que desejam melhorar processos, aumentar a produtividade
              e crescer com tecnologia.
            </p>

            <div className="hero-actions">
              <a href="#contato" className="primary-button">
                Fale com um especialista
                <span aria-hidden="true">→</span>
              </a>

              <a href="#servicos" className="secondary-button">
                Conheça nossos serviços
              </a>
            </div>

            <div className="hero-indicators">
              <div>
                <strong>Soluções</strong>
                <span>personalizadas</span>
              </div>

              <div>
                <strong>Tecnologia</strong>
                <span>moderna e segura</span>
              </div>

              <div>
                <strong>Atendimento</strong>
                <span>próximo e consultivo</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="code-window-header">
                <span />
                <span />
                <span />
              </div>

              <div className="code-lines">
                <p>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">solution</span> = {"{"}
                </p>

                <p className="indent">
                  business:{" "}
                  <span className="code-green">"SS Sistemas"</span>,
                </p>

                <p className="indent">
                  technology:{" "}
                  <span className="code-green">"moderna"</span>,
                </p>

                <p className="indent">
                  results: <span className="code-green">true</span>,
                </p>

                <p>{"};"}</p>

                <p className="code-comment">
                  // Transformando desafios em soluções
                </p>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span>✓</span>
              Desenvolvimento personalizado
            </div>

            <div className="floating-card floating-card-bottom">
              <span>↗</span>
              Processos mais eficientes
            </div>
          </div>
        </section>

        <section id="servicos" className="services section">
          <div className="section-heading">
            <span className="eyebrow">Nossos serviços</span>

            <h2>Soluções pensadas para o seu negócio</h2>

            <p>
              Da análise inicial até a entrega, construímos soluções alinhadas
              aos objetivos da sua empresa.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contato">
                  Saiba mais
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre" className="about section">
          <div className="about-content">
            <span className="eyebrow">Sobre a SS Sistemas</span>

            <h2>Parceria técnica para transformar sua ideia em realidade</h2>

            <p>
              A SS Sistemas atua com desenvolvimento de software, consultoria e
              automação de processos. Nosso objetivo é entender o problema,
              definir a melhor solução e construir sistemas que realmente gerem
              valor para o negócio.
            </p>

            <div className="about-list">
              <div>
                <span>01</span>
                <p>Entendimento das necessidades e regras do negócio.</p>
              </div>

              <div>
                <span>02</span>
                <p>Planejamento técnico claro e transparente.</p>
              </div>

              <div>
                <span>03</span>
                <p>Desenvolvimento focado em qualidade e evolução.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contact section">
          <div className="contact-card">
            <div className="profile-container">
              <div className="profile-circle">
                <img
                  src="/fabio-profile.png"
                  alt="Especialista da SS Sistemas"
                />
              </div>

              <span className="profile-status" />
            </div>

            <div className="contact-content">
              <span className="eyebrow">Vamos conversar?</span>

              <h2>Tem uma ideia ou precisa melhorar algum processo?</h2>

              <p>
                Conte um pouco sobre o seu projeto. Vamos analisar sua
                necessidade e encontrar a melhor solução para sua empresa.
              </p>

              <div className="contact-actions">
                <a
                  href="https://wa.me/5519983184020"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Conversar pelo WhatsApp
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href="mailto:fabiotas9@gmail.com.br"
                  className="contact-email"
                >
                  fabiotas9@gmail.com.br
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="logo">
          <span className="logo-symbol">SS</span>
          <span>SS Sistemas</span>
        </a>

        <p>© {currentYear} SS Sistemas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;