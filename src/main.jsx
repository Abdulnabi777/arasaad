import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, BrainCircuit, Building2, Camera, Check, ChevronDown,
  CloudCog, Cpu, Database, Fingerprint, Globe2, Headphones,
  LockKeyhole, MapPin, Menu, Network, Radar, ScanFace, ServerCog,
  ShieldCheck, Sparkles, Truck, X, Zap
} from "lucide-react";
import "./styles.css";

const solutions = [
  { icon: Camera, title: "AI Vision & CCTV", text: "Turn conventional surveillance into intelligent, proactive security with AI-powered video analytics." },
  { icon: Fingerprint, title: "Access & Biometrics", text: "Face, fingerprint and RFID solutions for controlled, auditable access across facilities." },
  { icon: Radar, title: "IoT & Smart Sensors", text: "Connected sensors and monitoring systems that make physical operations measurable and smarter." },
  { icon: Truck, title: "Fleet & GPS Tracking", text: "Track vehicles, routes and field operations with practical GPS and fleet intelligence." },
  { icon: ServerCog, title: "Data Center Solutions", text: "Passive and active infrastructure designed for reliable, scalable enterprise environments." },
  { icon: BrainCircuit, title: "Enterprise Software", text: "ERP, visitor management, parking, ICCC and custom software tailored to your workflow." },
  { icon: GraduationCapIcon, title: "Smart Education", text: "Technology-enabled education hardware and software for modern learning environments." },
  { icon: CloudCog, title: "IT & Hardware", text: "End-to-end hardware and IT infrastructure support for business-critical deployments." }
];

const strengths = [
  "Reduce operational costs and repetitive manual work",
  "Improve safety, security and visibility",
  "Connect hardware, software and people in one ecosystem",
  "Build solutions around the customer's actual workflow"
];

const industries = [
  { title: "Enterprise & Manufacturing", icon: Building2, desc: "Connected operations, ERP, access control and workplace security." },
  { title: "Pharma & Healthcare", icon: ShieldCheck, desc: "Secure facilities, controlled access, surveillance and business systems." },
  { title: "Smart Cities", icon: Globe2, desc: "Command-center platforms, video walls and city-scale monitoring." },
  { title: "Education", icon: Sparkles, desc: "Smart classroom, enrollment and campus technology solutions." }
];

const projects = [
  { no: "01", title: "CCTV Surveillance", desc: "Intelligent surveillance deployments for small and large environments.", tag: "Security" },
  { no: "02", title: "Biometric & Access Control", desc: "Identity-first access systems using face, fingerprint and RFID technologies.", tag: "Access" },
  { no: "03", title: "AI Vision Analytics", desc: "Computer-vision solutions designed around specific operational problems.", tag: "AI" },
  { no: "04", title: "Data Center Infrastructure", desc: "Passive and non-passive infrastructure for dependable IT operations.", tag: "Infrastructure" }
];

function GraduationCapIcon(props) {
  return <Sparkles {...props} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="noise" />

      <header className="navbar">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">A</span>
          <span>
            <strong>ARSAAD</strong>
            <small>SMART SYSTEMS LLP</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#platform" onClick={closeMenu}>Platform</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#industries" onClick={closeMenu}>Industries</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Talk to us <ArrowUpRight size={16}/></a>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />

          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> SMART SYSTEMS • AI • IOT • SECURITY</div>
            <h1>Make your physical world <em>intelligent.</em></h1>
            <p>
              We connect AI, software, IoT and enterprise infrastructure to build
              smarter, safer and more efficient operations.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button primary">Build a solution <ArrowUpRight size={18}/></a>
              <a href="#solutions" className="button ghost">Explore capabilities <ChevronDown size={17}/></a>
            </div>
            <div className="hero-proof">
              <span><Check size={15}/> Customer-first engineering</span>
              <span><Check size={15}/> Hardware + software</span>
              <span><Check size={15}/> Built for scale</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Smart systems visualization">
            <div className="visual-card main-card">
              <div className="visual-top">
                <span>ARSAAD COMMAND</span>
                <span className="live"><i/> LIVE</span>
              </div>
              <div className="network">
                <div className="network-ring ring-a"/>
                <div className="network-ring ring-b"/>
                <div className="network-ring ring-c"/>
                <div className="core"><BrainCircuit size={32}/><span>AI CORE</span></div>
                <div className="node n1"><Camera size={18}/></div>
                <div className="node n2"><Fingerprint size={18}/></div>
                <div className="node n3"><Truck size={18}/></div>
                <div className="node n4"><ServerCog size={18}/></div>
              </div>
              <div className="metrics">
                <div><small>CONNECTED</small><strong>2,480</strong></div>
                <div><small>ALERTS</small><strong>07</strong></div>
                <div><small>UPTIME</small><strong>99.9%</strong></div>
              </div>
            </div>
            <div className="floating-card fc-one"><ShieldCheck/><span><b>Security</b> intelligent monitoring</span></div>
            <div className="floating-card fc-two"><Zap/><span><b>Automation</b> faster decisions</span></div>
          </div>
        </section>

        <section className="logo-strip">
          <span>ONE PARTNER FOR</span>
          <b>AI VISION</b><b>IoT</b><b>SECURITY</b><b>SOFTWARE</b><b>INFRASTRUCTURE</b>
        </section>

        <section className="section intro" id="about">
          <div className="section-label">01 — ABOUT ARSAAD</div>
          <div className="intro-grid">
            <h2>Technology that connects the <span>real world.</span></h2>
            <div>
              <p className="lead">
                ARSAAD Smart Systems helps organizations turn technology challenges
                into practical, connected outcomes.
              </p>
              <p>
                From surveillance and access control to enterprise software,
                GPS tracking, sensors and AI-powered video analytics, we combine
                the pieces into systems that are easier to operate and scale.
              </p>
              <a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>

        <section className="section solutions-section" id="solutions">
          <div className="section-heading">
            <div>
              <div className="section-label">02 — OUR CAPABILITIES</div>
              <h2>One ecosystem.<br/><span>Many possibilities.</span></h2>
            </div>
            <p>Choose a capability to see how ARSAAD can solve a real operational challenge.</p>
          </div>

          <div className="solutions-layout">
            <div className="solution-list">
              {solutions.map((s, i) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.title}
                    className={`solution-item ${activeSolution === i ? "active" : ""}`}
                    onClick={() => setActiveSolution(i)}
                  >
                    <span className="solution-number">0{i + 1}</span>
                    <Icon size={21}/>
                    <span>{s.title}</span>
                    <ArrowUpRight className="solution-arrow" size={18}/>
                  </button>
                );
              })}
            </div>

            <div className="solution-detail">
              <div className="detail-grid" />
              <div className="detail-icon">{React.createElement(solutions[activeSolution].icon, {size: 34})}</div>
              <div className="detail-number">0{activeSolution + 1}</div>
              <h3>{solutions[activeSolution].title}</h3>
              <p>{solutions[activeSolution].text}</p>
              <div className="detail-pill"><span/> Designed around your requirements</div>
              <a href="#contact" className="button light">Discuss this solution <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="section platform" id="platform">
          <div className="platform-visual">
            <div className="platform-window">
              <div className="window-bar"><span/><span/><span/><label>smart-operations / overview</label></div>
              <div className="dashboard">
                <div className="dash-side">
                  <b>ARSAAD</b>
                  <span className="active">Overview</span><span>Security</span><span>Access</span><span>Fleet</span><span>Analytics</span>
                </div>
                <div className="dash-main">
                  <div className="dash-head"><span>Operational intelligence</span><small>Today • Live</small></div>
                  <div className="dash-cards">
                    <div><small>Devices</small><b>2,480</b><i>+18.2%</i></div>
                    <div><small>Events</small><b>14,092</b><i>+9.4%</i></div>
                    <div><small>Resolved</small><b>98.7%</b><i>+2.1%</i></div>
                  </div>
                  <div className="chart">
                    <div className="chart-lines"><i/><i/><i/><i/></div>
                    <svg viewBox="0 0 600 180" preserveAspectRatio="none">
                      <path d="M0 145 C70 135 75 90 135 110 S220 140 280 75 S365 55 420 92 S510 125 600 28" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="platform-copy">
            <div className="section-label">03 — THE ARSAAD APPROACH</div>
            <h2>Connect the dots.<br/><span>Then automate.</span></h2>
            <p className="lead">The best technology is not a collection of products. It is a connected system that works together.</p>
            <div className="strength-list">
              {strengths.map((x, i) => <div key={x}><span>0{i + 1}</span><Check size={17}/>{x}</div>)}
            </div>
          </div>
        </section>

        <section className="section industries" id="industries">
          <div className="section-heading">
            <div>
              <div className="section-label">04 — WHERE WE WORK</div>
              <h2>Built for <span>real operations.</span></h2>
            </div>
            <p>From a single site to a distributed operation, our systems are designed around measurable outcomes.</p>
          </div>
          <div className="industry-grid">
            {industries.map(({title, icon: Icon, desc}) => (
              <article className="industry-card" key={title}>
                <div className="industry-icon"><Icon size={24}/></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="card-arrow"><ArrowUpRight size={18}/></span>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-label">05 — PROJECTS & DEPLOYMENTS</div>
          <div className="projects-head">
            <h2>From <span>idea</span> to<br/>operational reality.</h2>
            <p>Explore the types of systems we deploy across security, infrastructure and intelligent operations.</p>
          </div>
          <div className="project-list">
            {projects.map(p => (
              <article className="project-row" key={p.no}>
                <span className="project-no">{p.no}</span>
                <div className="project-title"><span>{p.tag}</span><h3>{p.title}</h3></div>
                <p>{p.desc}</p>
                <ArrowUpRight className="project-arrow" size={23}/>
              </article>
            ))}
          </div>
        </section>

        <section className="section client-section">
          <div className="client-card">
            <div>
              <div className="section-label">06 — TRUSTED OUTCOMES</div>
              <h2>Technology should make<br/><span>work feel simpler.</span></h2>
            </div>
            <div className="client-copy">
              <p>Our work spans enterprise systems, smart-city initiatives, security deployments and operational technology.</p>
              <div className="client-names">
                <span>MYSORE CITY CORPORATION</span>
                <span>BELAGAVI SMART CITY</span>
                <span>ENTERPRISE & PHARMA</span>
                <span>SMART INFRASTRUCTURE</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="cta-grid"/>
          <div className="section-label">07 — LET'S BUILD</div>
          <h2>Have a challenge?<br/><span>Let's make it smarter.</span></h2>
          <p>Tell us what you are trying to improve. We will help you identify the right mix of software, hardware, AI and infrastructure.</p>
          <div className="cta-actions">
            <a className="button primary large" href="mailto:sales@araadsmartsys.com">Email our team <ArrowUpRight size={19}/></a>
            <a className="button outline large" href="tel:+918548941500">Call +91 85489 41500 <ArrowUpRight size={19}/></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark">A</span>
              <span><strong>ARSAAD</strong><small>SMART SYSTEMS LLP</small></span>
            </a>
            <p>We connect customers with smart solutions.</p>
          </div>
          <div className="footer-links">
            <div><b>Explore</b><a href="#solutions">Solutions</a><a href="#projects">Projects</a><a href="#industries">Industries</a></div>
            <div><b>Company</b><a href="#about">About us</a><a href="#contact">Contact</a><a href="#platform">Approach</a></div>
            <div><b>Contact</b><span>sales@araadsmartsys.com</span><span>+91 85489 41500</span><span>Bangalore, Karnataka</span></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ARSAAD Smart Systems LLP. All rights reserved.</span>
          <span>LLPIN: ACQ-2394 • GST: 29ACKFA7872Q1ZB</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
