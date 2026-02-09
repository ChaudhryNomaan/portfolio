import React, { useState, useEffect } from 'react';

const projects = [
  { title: "Otoobe", desc: "Startup Landing Page", img: "otoobe.png", link: "https://www.otoobe.com/" },
  { title: "OneTrip Tours", desc: "Travel & Booking", img: "onetrip.png", link: "https://onetrip-tours.vercel.app/" },
  { title: "Team Freelancers", desc: "UI Concept Design", img: "teamfreelancers.png", link: "https://team-freelancer.vercel.app/" },
  { title: "K72 Portfolio", desc: "Creative Agency", img: "k72.png", link: "https://k72-seven-nu.vercel.app/" },
  { title: "Nike Store", desc: "E-Commerce UI", img: "nike.png", link: "https://nike-theta-henna.vercel.app/" },
  { title: "Homyz", desc: "Real Estate Platform", img: "real estate.png", link: "https://homyz-navy.vercel.app/" },
  { title: "Grilli", desc: "Restaurant Landing", img: "grilli.png", link: "https://grill-i.netlify.app/" },
  { title: "Pillar", desc: "Architecture Portfolio", img: "pillar.png", link: "https://pillar-real-state.vercel.app/" },
  { title: "Cloud Engine", desc: "SaaS Landing Page", img: "cloud-web.png", link: "https://cloud-web-engien.netlify.app/" },
  { title: "CH-IPS", desc: "Product Concept", img: "chips.png", link: "https://ch-ips.netlify.app/" },
  { title: "Magma", desc: "Business Website", img: "magma.png", link: "https://magm-a.netlify.app/" },
  { title: "Geluna", desc: "Ice Cream Shop", img: "icecream.png", link: "https://geluna.netlify.app/" },
  { title: "Lazarev Clone", desc: "High-End Agency UI", img: "lazarev.png", link: "https://lazarev-sepia.vercel.app/" },
  { title: "Zentry Gaming", desc: "Award-winning Animation", img: "gaming.png", link: "https://zentry-animation.vercel.app/" },
  { title: "Frequencii", desc: "Visual Audio UI", img: "freequencies.png", link: "https://frequencii-eight.vercel.app/" },
  { title: "Global Bank", desc: "Fintech Dashboard", img: "globalbank.png", link: "https://global-bank-two.vercel.app/" },
  { title: "Takara", desc: "Minimalist UI", img: "takara.png", link: "https://takara-phi.vercel.app/" },
  { title: "Tourly", desc: "Adventure Guide", img: "tourly.png", link: "https://tourl-y.netlify.app/" },
  { title: "Tour Master", desc: "Vacation Planning", img: "tourest.png", link: "https://tour-master.netlify.app/" },
  { title: "Foodie", desc: "Food Delivery UI", img: "foodie.png", link: "https://f-oodie.netlify.app/" }
];

const techStack = [
  { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
  { name: "React", icon: "fa-brands fa-react", color: "#61DAFB" },
  { name: "Next.js", icon: "fa-solid fa-n", color: "#000000" },
  { name: "Tailwind", icon: "fa-solid fa-wind", color: "#38B2AC" },
  { name: "TypeScript", icon: "fa-solid fa-code", color: "#3178C6" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
  { name: "MongoDB", icon: "fa-solid fa-database", color: "#47A248" },
  { name: "Figma", icon: "fa-brands fa-figma", color: "#F24E1E" },
  { name: "UI Design", icon: "fa-solid fa-pen-nib", color: "#00eaff" },
  { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <div className="portfolio-root">
      <header className="nav-container">
        <div className="brand">PORTFOLIO<span>.</span></div>
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </button>
          <a href="#contact" className="cta-button" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className={`hamburger ${menuOpen ? 'toggle' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="line1"></div><div className="line2"></div><div className="line3"></div>
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-bg-container">
          <img src="/images/portfolio.jpg" alt="Hero" className="hero-default-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge"><p>⚡ Available for new projects</p></div>
          <h1 className="hero-title">Crafting The <br /><span className="outline-text">Future</span> <br />Of Web.</h1>
          <p className="hero-desc">High-end digital solutions tailored for those who value precision and performance.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Start a Project</a>
            <a href="#work" className="btn-outline">Selected Work</a>
          </div>
        </div>
      </section>

      <section id="work" className="section-padding">
        <p className="section-tag">Portfolio</p>
        <h2 className="section-title">Selected Work</h2>
        <div className="work-grid">
          {projects.map((proj, i) => (
            <a key={i} href={proj.link} target="_blank" rel="noreferrer" className="work-card">
              <div className="img-container">
                <img src={`/images/${proj.img}`} alt={proj.title} onError={(e) => e.target.src='https://placehold.co/600x400/111/00eaff?text=Project'} />
              </div>
              <div className="work-info">
                <h3>{proj.title}</h3>
                <p className="work-subtext">{proj.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="services" className="section-padding">
        <p className="section-tag">Expertise</p>
        <h2 className="section-title">Strategic Solutions</h2>
        <div className="services-bento">
          <div className="service-card-premium main-service">
            <div className="icon-glow"><i className="fa-solid fa-laptop-code"></i></div>
            <h3>Full-Stack Development</h3>
            <p>Building scalable, lightning-fast web applications using the latest modern stacks.</p>
            <div className="card-footer">01</div>
          </div>
          <div className="service-card-premium">
            <div className="icon-glow"><i className="fa-solid fa-bezier-curve"></i></div>
            <h3>UI / UX Design</h3>
            <p>Creating digital products that are beautiful and intuitive.</p>
            <div className="card-footer">02</div>
          </div>
          <div className="service-card-premium">
            <div className="icon-glow"><i className="fa-solid fa-mobile-screen"></i></div>
            <h3>Responsive Design</h3>
            <p>Flawless performance on every screen size.</p>
            <div className="card-footer">03</div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <p className="section-tag">Engine Room</p>
        <h2 className="section-title">Capabilities</h2>
        <div className="tech-wall-grid">
          {techStack.map((tech, i) => (
            <div key={i} className="tech-card-modern">
              <div className="tech-card-inner">
                <i className={tech.icon} style={{ color: tech.color }}></i>
                <span>{tech.name}</span>
              </div>
              <div className="tech-glow" style={{ backgroundColor: tech.color }}></div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="contact-visual-card">
          <h2 className="contact-huge-text">Let's create something <br /><span className="text-gradient">legendary.</span></h2>
          <a href="mailto:your-email@example.com" className="contact-main-btn">Hire Me Now</a>
          <div className="floating-sphere"></div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} MY PORTFOLIO. ALL RIGHTS RESERVED.</footer>
    </div>
  );
}

export default App;