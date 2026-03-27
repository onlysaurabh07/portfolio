import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import profilePic from './assets/profile_pic.jpeg';
import logoImg from './assets/logo.jpeg';
import resumeFile from './assets/SAURABH SINGH.pdf';
import ssrJpg from './assets/ssr.jpg'; // Import the image
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  User, 
  Briefcase, 
  Mail, 
  ExternalLink, 
  Github, 
  Send, 
  ChevronRight,
  Database,
  Monitor,
  GraduationCap,
  FileText,
  Linkedin,
  Twitter,
  Instagram,
  Menu,
  X
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Typewriter = ({ texts, speed = 100, waitTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentFullText = texts[textIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      }, speed);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), waitTime);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, speed, waitTime]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ge7qy86",      // ✅ your service ID
      "template_uemj7sc",     // ✅ your template ID
      form.current,
      "AXUY5CR0Kj96E7-bU"     // ✅ your public key
    )
    .then(() => {
      alert("Message sent successfully ✅");
      e.target.reset();
    })
    .catch((error) => {
      console.log("ERROR:", error);
      alert("Failed ❌. Please try again later.");
    });
  };

  const roles = [
    "Python Developer",
    "Data Analyst",
    "Full Stack Developer"
  ];

  return (
    <div className="App">
      <header className="glass">
        <nav className="container">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo"
          ><img src={logoImg} alt="Saurabh Singh Logo" className="logo-img" />
          </motion.div>

          {/* Desktop nav */}
          <ul className="desktop-nav">
            {navLinks.map(link => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>

          {/* Hamburger button (mobile only) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu glass"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <ul>
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setMenuOpen(false)}>
                      <ChevronRight size={16} />{link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Saurabh Singh
              </motion.h1>
              <motion.div 
                className="typewriter-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Typewriter texts={roles} />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Crafting elegant solutions with code and data.
              </motion.p>
              <div className="hero-btns">
                <motion.a 
                  href="#projects" 
                  className="btn-primary"
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects <ExternalLink size={18} />
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="btn-outline"
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me <Mail size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section 
          id="about" 
          className="container"
          {...fadeInUp}
        >
          <h2><User className="section-icon" /> About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>I am a B.Tech graduate from BBD University, Lucknow, with a passion for building scalable web applications and analyzing complex datasets.</p>
              <p>My expertise spans from backend development with Node.js to data visualization with Python and Tableau.</p>
            </div>
            <div className="about-img glass">
              <img src={profilePic} alt="Saurabh Singh" className="profile-img" />
            </div>
          </div>
        </motion.section>

        <section id="skills" className="glass-section">
          <div className="container">
            <motion.h2 {...fadeInUp}><Code className="section-icon" /> Technical Skills</motion.h2>
            <div className="skills-grid">
              {[
                { 
                  title: 'Programming', 
                  icon: <Code />, 
                  skills: [
                    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
                    { name: 'SQL', icon: 'https://skillicons.dev/icons?i=mysql' },
                    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
                    { name: 'PHP', icon: 'https://skillicons.dev/icons?i=php' }
                  ] 
                },
                { 
                  title: 'Web Development', 
                  icon: <Monitor />, 
                  skills: [
                    { name: 'React.js', icon: 'https://skillicons.dev/icons?i=react' },
                    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
                    { name: 'Express.js', icon: 'https://skillicons.dev/icons?i=express' },
                    { name: 'HTML/CSS', icon: 'https://skillicons.dev/icons?i=html,css' }
                  ] 
                },
                { 
                  title: 'Data Analysis', 
                  icon: <Database />, 
                  skills: [
                    { name: 'Pandas', icon: 'https://api.iconify.design/simple-icons:pandas.svg?color=%23ffffff' },
                    { name: 'NumPy', icon: 'https://api.iconify.design/simple-icons:numpy.svg?color=%23ffffff' },
                    { name: 'Matplotlib', icon: 'https://api.iconify.design/devicon-plain:matplotlib.svg?color=%23ffffff' },
                    { name: 'Tableau', icon: 'https://api.iconify.design/simple-icons:tableau.svg?color=%23ffffff' },
                    { name: 'Excel', icon: 'https://api.iconify.design/simple-icons:microsoftexcel.svg?color=%23ffffff' }
                  ] 
                }
              ].map((group, i) => (
                <motion.div 
                  key={i}
                  className="skill-card glass"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="skill-header">
                    {group.icon}
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.skills.map((s, j) => (
                      <li key={j}>
                        <img src={s.icon} alt={s.name} className="skill-tech-icon" />
                        <span>{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="container">
          <motion.h2 {...fadeInUp}><GraduationCap className="section-icon" /> Education</motion.h2>
          <motion.div 
            className="glass education-card"
            {...fadeInUp}
            whileHover={{ scale: 1.01 }}
          >
            <div className="edu-header">
              <div className="edu-icon-bg">
                <GraduationCap size={32} />
              </div>
              <div className="edu-info">
                <h3>Bachelor of Technology in Computer Science</h3>
                <p className="school">BBD University, Lucknow</p>
                <p className="duration">2022 — 2026</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="container">
          <motion.h2 {...fadeInUp}><Briefcase className="section-icon" /> Featured Projects</motion.h2>
          <div className="projects-grid">
            {[
              { title: 'Emotion Recognition', desc: 'ML project detecting human emotions via facial expressions.', tags: ['Python', 'ML'], icon: '😊' },
              { title: 'Diwali Sales Analysis', desc: 'EDA on sales data to understand customer behavior.', tags: ['Python', 'Pandas'], icon: '📈' },
              { title: 'Gym Website', desc: 'Responsive website for a gym client.', tags: ['React', 'CSS'], icon: '💪' }
            ].map((p, i) => (
              <motion.div 
                key={i}
                className="project-card glass"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="project-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tech-tags">
                  {p.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div>
                <div className="project-links">
                  <ExternalLink size={20} />
                  <Github size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="resume" className="container">
          <motion.h2 {...fadeInUp}><FileText className="section-icon" /> Resume</motion.h2>
          <motion.div 
            className="glass resume-card"
            {...fadeInUp}
          >
            <p>Download my professional resume for complete career details, certifications, and technical proficiencies.</p>
            <div className="resume-btns">
               <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn-primary">
                 <FileText size={18} /> View Resume
               </a>
               <a href={resumeFile} download="Saurabh_Singh_Resume.pdf" className="btn-outline">
                 <ExternalLink size={18} /> Download PDF
               </a>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="container">
          <motion.h2 {...fadeInUp}><Mail className="section-icon" /> Get In Touch</motion.h2>
          <motion.div 
            className="contact-container glass"
            {...fadeInUp}
          >
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="glass">
        <div className="container footer-content">
          <div className="footer-logo"><img src={logoImg} alt="Saurabh Singh Logo" className="footer-logo-img" /></div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/saurabh-kumar-singh-96a956374" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="https://x.com/issr69280" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            <a href="https://github.com/onlysaurabh07" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="https://www.instagram.com/only.saurabh_?igsh" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          </div>
          <p>&copy; 2026 Saurabh Singh. Built with React, Framer Motion & Lucide.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
