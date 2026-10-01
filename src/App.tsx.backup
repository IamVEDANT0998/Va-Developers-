import { useState } from "react";

const products = [
  {
    name: "Creator Studio",
    type: "AI Creator Platform",
    description:
      "A creator-focused workspace designed to help YouTube creators plan, generate and organize video content.",
  },
  {
    name: "Edit Studio",
    type: "Video Editing",
    description:
      "A modern editing experience focused on powerful mobile-first video creation.",
  },
];

const services = [
  "Android App Development",
  "AI Application Development",
  "Web Development",
  "UI/UX Design",
  "Product Engineering",
  "Creator Tools",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className={theme === "dark" ? "app dark" : "app light"}>
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-mark">VA</span>
          <span>
            <strong>VA DEVELOPERS</strong>
            <small>BUILD • CREATE • INNOVATE</small>
          </span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("products")}>Products</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("technology")}>Technology</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow" />

          <div className="hero-content">
            <div className="eyebrow">INDEPENDENT SOFTWARE STUDIO</div>

            <h1>
              We build
              <span> digital products </span>
              that matter.
            </h1>

            <p>
              VA Developers creates modern applications, AI-powered tools,
              creator platforms and digital experiences with a focus on useful,
              simple and professional products.
            </p>

            <div className="hero-buttons">
              <button className="primary" onClick={() => scrollTo("products")}>
                Explore Products →
              </button>
              <button className="secondary" onClick={() => scrollTo("contact")}>
                Start a Project
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>02+</strong>
                <span>Products</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Focused</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Ideas</span>
              </div>
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-window">
              <div className="window-top">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="preview-title">VA Developers</span>
              </div>

              <div className="preview-body">
                <div className="preview-sidebar">
                  <div className="side-logo">VA</div>
                  <span className="active">⌂</span>
                  <span>▣</span>
                  <span>✦</span>
                  <span>⚙</span>
                </div>

                <div className="preview-main">
                  <span className="mini-label">CREATOR STUDIO</span>
                  <h3>Your ideas.</h3>
                  <h2>Made ready to publish.</h2>

                  <div className="preview-card">
                    <div className="card-line large" />
                    <div className="card-line" />
                    <div className="card-line short" />
                    <div className="fake-button">Generate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="section-heading">
            <span>OUR PRODUCTS</span>
            <h2>Tools we're building.</h2>
            <p>
              A growing collection of products designed around real-world
              problems.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-number">0{index + 1}</div>
                <div className="product-icon">
                  {index === 0 ? "✦" : "▶"}
                </div>
                <span className="product-type">{product.type}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button onClick={() => scrollTo("contact")}>
                  View Product →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section muted-section">
          <div className="section-heading">
            <span>WHAT WE DO</span>
            <h2>From idea to product.</h2>
            <p>
              We focus on building practical digital products and experiences.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <div className="service-card" key={service}>
                <span>0{index + 1}</span>
                <h3>{service}</h3>
                <p>Focused development with a clean, product-first approach.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-content">
            <span>ABOUT VA DEVELOPERS</span>
            <h2>Small team. Big ideas.</h2>
            <p>
              VA Developers is an independent technology brand focused on
              creating applications, software tools and digital experiences.
            </p>
            <p>
              We believe software should be useful first, simple to understand
              and enjoyable to use.
            </p>
          </div>

          <div className="about-panel">
            <div className="panel-line">
              <span>01</span>
              <strong>Build</strong>
              <p>Turn ideas into working products.</p>
            </div>
            <div className="panel-line">
              <span>02</span>
              <strong>Improve</strong>
              <p>Iterate through feedback and testing.</p>
            </div>
            <div className="panel-line">
              <span>03</span>
              <strong>Launch</strong>
              <p>Prepare products for real users.</p>
            </div>
          </div>
        </section>

        <section id="technology" className="section technology-section">
          <div className="section-heading">
            <span>TECHNOLOGY</span>
            <h2>Built with modern tools.</h2>
          </div>

          <div className="tech-list">
            <div>React</div>
            <div>TypeScript</div>
            <div>Android</div>
            <div>AI</div>
            <div>Cloud</div>
            <div>Modern Web</div>
          </div>
        </section>

        <section className="cta-section">
          <div>
            <span>HAVE AN IDEA?</span>
            <h2>Let's build something useful.</h2>
          </div>
          <button className="primary" onClick={() => scrollTo("contact")}>
            Contact VA Developers →
          </button>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <span>CONTACT</span>
            <h2>Let's talk.</h2>
            <p>
              Have a project, product idea or collaboration in mind?
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <span>Email</span>
              <a href="mailto:contact@vadevelopers.com">
                contact@vadevelopers.com
              </a>
            </div>

            <div className="contact-card">
              <span>Projects</span>
              <p>Apps • AI • Web • Creator Tools</p>
            </div>

            <div className="contact-card">
              <span>Availability</span>
              <p>Open to selected projects and collaborations.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <div className="brand-mark">VA</div>
          <div>
            <strong>VA DEVELOPERS</strong>
            <p>Building digital products.</p>
          </div>
        </div>

        <div className="footer-links">
          <button onClick={() => scrollTo("products")}>Products</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} VA Developers. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
