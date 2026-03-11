import React from 'react';
import './App.css';
import profilePic from './assets/profile_pic.jpeg';
import { motion } from 'framer-motion';
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
  Instagram
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send message. Ensure your backend and MongoDB are connected.');
      }
    } catch (err) {
      alert('Connecting to backend... Make sure your server is running on port 5000.');
    }
  };

  return (
    <div className="App">
      <header className="glass">
        <nav className="container">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo"
          >
            Saurabh<span>.</span>
          </motion.div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
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
              <h1>Saurabh Singh</h1>
              <h3>Python Developer | Data Analyst | Full Stack Developer</h3>
              <p>Crafting elegant solutions with code and data.</p>
              <div className="hero-btns">
                <a href="#projects" className="btn-primary">
                  View Projects <ExternalLink size={18} />
                </a>
                <a href="#contact" className="btn-outline">
                  Contact Me <Mail size={18} />
                </a>
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
                { title: 'Programming', icon: <Code />, skills: ['Python', 'SQL', 'JavaScript', 'PHP'] },
                { title: 'Web Development', icon: <Monitor />, skills: ['React.js', 'Node.js', 'Express.js', 'HTML/CSS'] },
                { title: 'Data Analysis', icon: <Database />, skills: ['Pandas/NumPy', 'Matplotlib', 'Tableau', 'Excel'] }
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
                      <li key={j}><ChevronRight size={14} /> {s}</li>
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
               <button className="btn-primary"><FileText size={18} /> View Resume</button>
               <button className="btn-outline"><ExternalLink size={18} /> Download PDF</button>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="container">
          <motion.h2 {...fadeInUp}><Mail className="section-icon" /> Get In Touch</motion.h2>
          <motion.div 
            className="contact-container glass"
            {...fadeInUp}
          >
            <form onSubmit={handleSubmit}>
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
          <div className="footer-logo">Saurabh<span>.</span></div>
          <div className="social-links">
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Github size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
          <p>&copy; 2026 Saurabh Singh. Built with React, Framer Motion & Lucide.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
