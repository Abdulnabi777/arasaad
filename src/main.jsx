import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight, BrainCircuit, Building2, Camera, Check, ChevronDown,
  CloudCog, Cpu, Database, Fingerprint, Globe2, Headphones,
  LockKeyhole, MapPin, Menu, Network, Radar, ScanFace, ServerCog,
  ShieldCheck, Sparkles, Truck, X, Zap, Activity, Play, Eye, BellRing,
  Layers, ChevronRight, Phone, Mail, Award, CheckCircle2
} from "lucide-react";
import "./styles.css";
import { ScrollToTop } from "./components/ScrollToTop";

const solutions = [
  {
    icon: Camera,
    title: "AI Vision & CCTV",
    tag: "Proactive Surveillance",
    desc: "Turn conventional surveillance into intelligent, proactive security with AI-powered video analytics, perimeter defense, and automatic license plate recognition.",
    features: ["Real-time intrusion & anomaly alerts", "Facial recognition & crowd analytics", "Automated ANPR & speed monitoring", "Edge AI and central VMS integration"]
  },
  {
    icon: Fingerprint,
    title: "Access & Biometrics",
    tag: "Zero-Trust Identity",
    desc: "Face, multi-spectral fingerprint, and RFID credentials for controlled, auditable, contactless access across enterprise facilities and campuses.",
    features: ["Sub-second facial matching", "Anti-spoofing liveness detection", "Time & attendance integration", "Turnstile & barrier speed gates"]
  },
  {
    icon: Radar,
    title: "IoT & Smart Sensors",
    tag: "Connected Edge",
    desc: "Connected wireless and wired sensor arrays making environmental, physical, and operational parameters measurable and actionable 24/7.",
    features: ["Temperature & air quality telemetry", "Energy & power consumption sensing", "Vibration & asset health alerts", "LoRaWAN & cellular edge gateways"]
  },
  {
    icon: Truck,
    title: "Fleet & GPS Tracking",
    tag: "Logistics Intelligence",
    desc: "Real-time location, route optimization, fuel consumption monitoring, and driver behavioral telemetry for enterprise field fleets.",
    features: ["Sub-meter GPS tracking & geofencing", "Fuel theft & idling detection", "Automated driver trip logs", "Cold-chain temperature logs"]
  },
  {
    icon: ServerCog,
    title: "Data Center Solutions",
    tag: "Mission-Critical Infra",
    desc: "Passive and active high-density infrastructure engineered for 99.999% uptime, precision cooling, structured cabling, and power redundancy.",
    features: ["Modular server rack containment", "Precision cooling & humidity systems", "Tier-standard power distribution", "DCIM real-time telemetry"]
  },
  {
    icon: BrainCircuit,
    title: "Enterprise Software & ICCC",
    tag: "Integrated Operations",
    desc: "Integrated City Command Centers (ICCC), custom ERP, visitor kiosks, and unified dashboards tailored to your organizational workflows.",
    features: ["Unified multi-subsystem view", "Custom ticketing & workflow automation", "Cross-system API bridges", "Auditable compliance logs"]
  },
  {
    icon: Sparkles,
    title: "Smart Education Tech",
    tag: "Next-Gen Classrooms",
    desc: "Interactive flat panels, digital podiums, campus-wide IoT broadcasting, and smart lecture capture systems for modern learning institutions.",
    features: ["4K Interactive touch displays", "Automated lecture capture & streaming", "Campus digital signage networks", "Student attendance automation"]
  },
  {
    icon: CloudCog,
    title: "IT & Network Infrastructure",
    tag: "High-Speed Backbone",
    desc: "End-to-end enterprise network switching, optical fiber backbones, Wi-Fi 6 coverage, firewall gateways, and SLA-backed management.",
    features: ["SD-WAN & resilient failover", "Managed switches & fiber backbones", "Enterprise NGFW cyber protection", "24/7 NOC monitoring services"]
  }
];

const strengths = [
  "Reduce operational costs and eliminate repetitive manual workflows",
  "Improve safety, site compliance, and situational awareness in real-time",
  "Bridge hardware, edge sensors, and enterprise software in a unified ecosystem",
  "Tailor engineering architectures around each client's physical workflow"
];

const industries = [
  {
    title: "Enterprise & Manufacturing",
    icon: Building2,
    desc: "Connected factory operations, ERP integrations, biometric floor access, and automated workplace perimeter safety.",
    tag: "Industry 4.0"
  },
  {
    title: "Pharma & Healthcare",
    icon: ShieldCheck,
    desc: "Secure cleanrooms, regulated access control, thermal monitoring, and 21 CFR compliance-ready audit trails.",
    tag: "Cleanrooms & Care"
  },
  {
    title: "Smart Cities & Urban Hubs",
    icon: Globe2,
    desc: "Unified command & control (ICCC), video wall integration, intelligent traffic monitoring, and municipal sensors.",
    tag: "Public Infrastructure"
  },
  {
    title: "Modern Education Campuses",
    icon: Sparkles,
    desc: "Smart classrooms, interactive displays, lecture streaming, and campus-wide perimeter security networks.",
    tag: "EdTech & Campuses"
  }
];

const projects = [
  {
    no: "01",
    title: "CCTV Surveillance & AI Analytics",
    desc: "Turnkey multi-site camera deployment with automated tripwires, crowd count, and perimeter breach alerts.",
    tag: "AI Security"
  },
  {
    no: "02",
    title: "Biometric & Access Control Matrix",
    desc: "Multi-factor facial and contactless fingerprint access installed across 12,000+ registered personnel.",
    tag: "Zero-Trust Access"
  },
  {
    no: "03",
    title: "AI Vision for Municipal Operations",
    desc: "Computer-vision models analyzing vehicle flow, illegal parking, and civic municipal event tracking.",
    tag: "City Vision"
  },
  {
    no: "04",
    title: "Tier-Grade Data Center Infrastructure",
    desc: "Precision cooling, structured optical cabling, and real-time DCIM power management for high-availability nodes.",
    tag: "Infrastructure"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [dashTab, setDashTab] = useState("Overview");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`app ${scrolled ? "scrolled" : ""}`}>
      {/* Ambient background glows */}
      <div className="ambient-mesh" />

      {/* Modern White Top Navigation */}
      <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-container">
          <a className="brand" href="#top" onClick={closeMenu}>
            <img
              src="/favicon.png"
              alt="ARSAAD Smart Systems"
              className="brand-logo"
            />
            <div className="brand-text">
              <strong>ARSAAD <span>SMART</span></strong>
              <small>SYSTEMS & AI</small>
            </div>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="#platform" onClick={closeMenu}>Platform</a>
            <a href="#industries" onClick={closeMenu}>Industries</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Talk to an Engineer
              <ArrowUpRight size={16} />
            </a>
          </nav>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO SECTION WITH VIDEO & LIVE TELEMETRY */}
        <section className="hero">
          <div className="grid-bg-overlay" />
          <div className="container hero-layout">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="section-badge">
                <span className="pulse-dot-blue" />
                AI VISION • IOT EDGE • ENTERPRISE SECURITY
              </div>

              <h1>
                Make your physical world <span className="gradient-text">intelligent.</span>
              </h1>

              <p className="lead">
                ARSAAD connects AI vision, smart sensors, biometric access, and enterprise IT 
                infrastructure into high-reliability systems built for modern operations.
              </p>

              <div className="hero-actions">
                <motion.a
                  href="#contact"
                  className="btn btn-primary btn-large"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Deploy a Solution <ArrowUpRight size={18} />
                </motion.a>
                <motion.a
                  href="#solutions"
                  className="btn btn-outline btn-large"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Capabilities <ChevronDown size={18} />
                </motion.a>
              </div>

              <div className="hero-stats">
                <div className="hero-stat-item">
                  <strong>2,480+</strong>
                  <span>Active Connected Devices</span>
                </div>
                <div className="stat-divider" />
                <div className="hero-stat-item">
                  <strong>99.9%</strong>
                  <span>System Reliability SLA</span>
                </div>
                <div className="stat-divider" />
                <div className="hero-stat-item">
                  <strong>100%</strong>
                  <span>Custom Architecture</span>
                </div>
              </div>
            </motion.div>

            {/* HERO VISUAL WITH EMBEDDED VIDEO & LIVE TELEMETRY */}
            <div className="hero-visual-wrapper">
              <motion.div
                className="hero-media-card"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="media-card-topbar">
                  <div className="topbar-controls">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="topbar-title">ARSAAD COMMAND HUB</span>
                </div>

                <div className="video-container">
                  <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                  </video>
                  <div className="video-overlay-gradient" />
                </div>

                <div className="media-card-telemetry">
                  <div className="telemetry-item">
                    <small>MONITORED</small>
                    <strong>2,480</strong>
                    <em>Active Nodes</em>
                  </div>
                  <div className="telemetry-item">
                    <small>DETECTION</small>
                    <strong>&lt; 0.2s</strong>
                    <em>AI Inference</em>
                  </div>
                  <div className="telemetry-item">
                    <small>UPTIME</small>
                    <strong>99.98%</strong>
                    <em>Target SLA</em>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* LOGO STRIP / CAPABILITY SCROLL */}
        <section className="marquee-strip">
          <div className="marquee-content">
            <span className="marquee-label">CAPABILITIES</span>
            <span className="marquee-item"><Camera size={16} color="#2861b8"/> AI VISION & CCTV</span>
            <span className="marquee-dot" />
            <span className="marquee-item"><Fingerprint size={16} color="#2861b8"/> BIOMETRICS & ACCESS</span>
            <span className="marquee-dot" />
            <span className="marquee-item"><Radar size={16} color="#2861b8"/> IOT & SMART SENSORS</span>
            <span className="marquee-dot" />
            <span className="marquee-item"><Truck size={16} color="#2861b8"/> FLEET & GPS TELEMETRY</span>
            <span className="marquee-dot" />
            <span className="marquee-item"><ServerCog size={16} color="#2861b8"/> DATA CENTER INFRA</span>
            <span className="marquee-dot" />
            <span className="marquee-item"><BrainCircuit size={16} color="#2861b8"/> INTEGRATED ICCC SYSTEMS</span>
            <span className="marquee-dot" />
            {/* Duplicated for seamless loop */}
            <span className="marquee-label">CAPABILITIES</span>
            <span className="marquee-item"><Camera size={16} color="#2861b8"/> AI VISION & CCTV</span>
            <span className="marquee-dot" />
            <span className="marquee-item"><Fingerprint size={16} color="#2861b8"/> BIOMETRICS & ACCESS</span>
            <span className="marquee-dot" />
            <span className="marquee-item"><Radar size={16} color="#2861b8"/> IOT & SMART SENSORS</span>
            <span className="marquee-dot" />
            <span className="marquee-item"><Truck size={16} color="#2861b8"/> FLEET & GPS TELEMETRY</span>
          </div>
        </section>

        {/* SECTION 01: ABOUT ARSAAD */}
        <section className="section" id="about">
          <div className="container">
            <div className="section-head-split">
              <div>
                <div className="section-badge">01 — ABOUT ARSAAD</div>
                <h2>Technology that connects the <span>real world.</span></h2>
              </div>
              <p>
                ARSAAD Smart Systems helps public bodies and private enterprises turn 
                fragmented technology challenges into cohesive, measurable outcomes.
              </p>
            </div>

            <div className="trust-banner-card">
              <div className="trust-banner-copy">
                <div className="section-badge">ENGINEERING EXCELLENCE</div>
                <h2>Connected Systems.<br/><span>Zero Compromise.</span></h2>
                <p>
                  From AI-assisted surveillance and access control gates to municipal 
                  command centers and enterprise IoT telemetry, we unite hardware, software, 
                  and human operations into one responsive platform.
                </p>
                <div className="client-tag-pills">
                  <span className="client-tag">MYSORE CITY CORPORATION</span>
                  <span className="client-tag">BELAGAVI SMART CITY</span>
                  <span className="client-tag">PHARMA & HEALTHCARE</span>
                  <span className="client-tag">ENTERPRISE IT PARKS</span>
                </div>
              </div>
              <div style={{ position: "relative", borderRadius: "18px", overflow: "hidden", boxShadow: "0 14px 34px rgba(20,45,80,0.12)" }}>
                <img
                  src="/smart-city.jpg"
                  alt="Connected Smart City Infrastructure"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(255,255,255,0.92)", padding: "8px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", color: "#142d50", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Globe2 size={16} color="#2861b8" />
                  Deployed Across Major Smart City Hubs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: CAPABILITIES & SOLUTIONS (Avenqeo Style Interactive Tab) */}
        <section className="section" id="solutions" style={{ background: "#ffffff" }}>
          <div className="container">
            <div className="section-head-center">
              <div className="section-badge">02 — OUR CAPABILITIES</div>
              <h2>One Ecosystem. <span>Many Possibilities.</span></h2>
              <p>Select any capability below to explore how ARSAAD bridges physical challenges with intelligent automation.</p>
            </div>

            <div className="solutions-wrapper">
              <div className="solutions-nav">
                {solutions.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = activeSolution === i;
                  return (
                    <button
                      key={s.title}
                      className={`solution-tab-btn ${isActive ? "active" : ""}`}
                      onClick={() => setActiveSolution(i)}
                    >
                      <div className="tab-btn-content">
                        <div className="tab-btn-icon">
                          <Icon size={18} />
                        </div>
                        <span className="tab-btn-title">{s.title}</span>
                      </div>
                      <span className="tab-btn-no">0{i + 1}</span>
                    </button>
                  );
                })}
              </div>

              <div className="solution-display-pane">
                <div className="display-pane-top">
                  <div className="display-icon-box">
                    {React.createElement(solutions[activeSolution].icon, { size: 30 })}
                  </div>
                  <span className="display-num-watermark">0{activeSolution + 1}</span>
                </div>

                <div className="display-pane-body">
                  <div className="section-badge">{solutions[activeSolution].tag}</div>
                  <h3>{solutions[activeSolution].title}</h3>
                  <p>{solutions[activeSolution].desc}</p>

                  <div className="display-features-list">
                    {solutions[activeSolution].features.map((feat) => (
                      <div className="display-feature-item" key={feat}>
                        <CheckCircle2 size={16} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a href="#contact" className="btn btn-primary">
                    Consult on this Solution <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: PLATFORM & DASHBOARD ARCHITECTURE */}
        <section className="section" id="platform">
          <div className="container">
            <div className="platform-grid">
              <motion.div
                className="platform-window-mockup"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="dash-window-header">
                  <div className="topbar-controls">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="dash-window-path">arsad-command-center / live-telemetry</span>
                  <span className="topbar-live"><i /> SYNCHRONIZED</span>
                </div>

                <div className="dash-inner-layout">
                  <div className="dash-sidebar">
                    <div className="dash-sidebar-brand">ARSAAD OS</div>
                    {["Overview", "Cameras", "Biometrics", "IoT Edge", "Telemetry"].map((tab) => (
                      <button
                        key={tab}
                        className={`dash-sidebar-btn ${dashTab === tab ? "active" : ""}`}
                        onClick={() => setDashTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="dash-content">
                    <div className="dash-kpis">
                      <div className="kpi-card">
                        <small>Connected Nodes</small>
                        <strong>2,480</strong>
                        <span>+18.4% online</span>
                      </div>
                      <div className="kpi-card">
                        <small>Daily Events</small>
                        <strong>14,092</strong>
                        <span>99.8% automated</span>
                      </div>
                      <div className="kpi-card">
                        <small>Avg Response</small>
                        <strong>0.18s</strong>
                        <span>Low-latency edge</span>
                      </div>
                    </div>

                    <div className="dash-chart-card">
                      <div className="chart-header">
                        <span>Real-time Processing Throughput</span>
                        <small>Live stream</small>
                      </div>
                      <svg className="svg-chart-wave" viewBox="0 0 500 120" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2861b8" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#2861b8" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,80 Q70,20 140,60 T280,30 T420,70 T500,20 L500,120 L0,120 Z"
                          fill="url(#chartGrad)"
                        />
                        <path
                          d="M0,80 Q70,20 140,60 T280,30 T420,70 T500,20"
                          fill="none"
                          stroke="#2861b8"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="platform-copy-side">
                <div className="section-badge">03 — THE ARSAAD METHOD</div>
                <h2>Connect the dots.<br /><span>Then automate.</span></h2>
                <p className="lead">
                  True operational excellence isn't buying isolated gadgets. It is orchestrating
                  sensors, AI camera feeds, and physical security gates into one synchronized loop.
                </p>

                <div className="strengths-container">
                  {strengths.map((str, idx) => (
                    <motion.div
                      className="strength-box"
                      key={str}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="strength-no">0{idx + 1}</span>
                      <div className="strength-icon">
                        <Check size={16} />
                      </div>
                      <span className="strength-text">{str}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: INDUSTRIES WE SERVE */}
        <section className="section" id="industries" style={{ background: "#ffffff" }}>
          <div className="container">
            <div className="section-head-split">
              <div>
                <div className="section-badge">04 — WHERE WE WORK</div>
                <h2>Built for <span>critical operations.</span></h2>
              </div>
              <p>
                From cleanroom biometrics to municipal city centers, our architectures
                are engineered around audited reliability and measurable efficiency.
              </p>
            </div>

            <div className="industries-grid">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <motion.article
                    className="industry-card-white"
                    key={ind.title}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="industry-icon-pill">
                      <Icon size={24} />
                    </div>
                    <span className="section-badge" style={{ marginBottom: "10px", width: "fit-content" }}>{ind.tag}</span>
                    <h3>{ind.title}</h3>
                    <p>{ind.desc}</p>
                    <div className="industry-card-footer">
                      <span>Explore domain</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 05: PROJECTS & DEPLOYMENTS */}
        <section className="section" id="projects">
          <div className="container">
            <div className="section-head-split">
              <div>
                <div className="section-badge">05 — PROVEN DEPLOYMENTS</div>
                <h2>From vision to <span>operational reality.</span></h2>
              </div>
              <p>
                A glance at real-world deployments deployed across government and private sectors.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((proj) => (
                <motion.article
                  className="project-item-card"
                  key={proj.no}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="project-num">{proj.no}</span>
                  <div className="project-heading-block">
                    <span className="project-tag-pill">{proj.tag}</span>
                    <h3>{proj.title}</h3>
                  </div>
                  <p className="project-desc">{proj.desc}</p>
                  <div className="project-action-arrow">
                    <ArrowUpRight size={20} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 06: CALL TO ACTION BANNER */}
        <section className="section" id="contact" style={{ paddingTop: "20px" }}>
          <div className="container">
            <div className="cta-white-section">
              <div className="cta-grid-bg" />
              <div className="cta-white-content">
                <div className="section-badge">06 — LET'S COLLABORATE</div>
                <h2>Have an operational challenge?<br /><span>Let's make it smarter.</span></h2>
                <p>
                  Share your requirements with our system architects. We will provide a 
                  tailored blueprint combining AI vision, smart sensors, and dependable hardware.
                </p>
                <div className="cta-actions-row">
                  <motion.a
                    className="btn btn-cta-white btn-large"
                    href="mailto:sales@araadsmartsys.com"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Mail size={18} />
                    Email Our Team
                  </motion.a>
                  <motion.a
                    className="btn btn-cta-ghost btn-large"
                    href="tel:+918548941500"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Phone size={18} />
                    Call +91 85489 41500
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            <div className="footer-brand-side">
              <a className="brand" href="#top">
                <img
                  src="/favicon.png"
                  alt="ARSAAD Smart Systems"
                  className="brand-logo"
                />
                <div className="brand-text">
                  <strong>ARSAAD <span>SMART</span></strong>
                  <small>SYSTEMS & AI</small>
                </div>
              </a>
              <p>
                We connect customers with intelligent solutions across AI vision, 
                biometric credentials, IoT, and high-uptime enterprise infrastructure.
              </p>
            </div>

            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#solutions">AI Vision & CCTV</a></li>
                <li><a href="#solutions">Biometrics & Access</a></li>
                <li><a href="#solutions">IoT Sensors</a></li>
                <li><a href="#solutions">Data Center Infra</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Organization</h4>
              <ul>
                <li><a href="#about">About ARSAAD</a></li>
                <li><a href="#platform">The Platform</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#projects">Deployments</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Direct Contact</h4>
              <ul>
                <li><span>sales@araadsmartsys.com</span></li>
                <li><span>+91 85489 41500</span></li>
                <li><span>Bangalore, Karnataka, India</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© {new Date().getFullYear()} ARSAAD Smart Systems LLP. All rights reserved.</span>
            <span>LLPIN: ACQ-2394 • GST: 29ACKFA7872Q1ZB</span>
          </div>
        </div>
      </footer>

      {/* Floating Back-To-Top Button */}
      <ScrollToTop />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
