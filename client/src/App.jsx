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
  Monitor
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function App() {
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
            <li><a href="#projects">Projects</a></li>
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

        <section id="contact" className="container">
          <motion.h2 {...fadeInUp}><Mail className="section-icon" /> Get In Touch</motion.h2>
          <motion.div 
            className="contact-container glass"
            {...fadeInUp}
          >
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="glass">
        <div className="container">
          <p>&copy; 2026 Saurabh Singh. Built with React & Lucide.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
