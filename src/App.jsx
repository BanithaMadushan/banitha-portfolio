import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Smartphone, 
  Layers, 
  Menu, 
  X,
  Award,
  BookOpen,
  ArrowRight,
  Download,   // Added
  Figma,      // Added
  Layout,     // Added
  PenTool     // Added
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    languages: ["Java", "JavaScript", "Dart", "PHP", "Python", "SQL"],
    frontend: ["React.js", "Tailwind CSS", "Figma", "HTML5/CSS3", "Bootstrap"],
    backend: ["Node.js", "Firebase", "MySQL", "MongoDB"],
    mobile: ["Flutter", "Android Studio"],
    tools: ["Git & GitHub", "Postman", "Selenium", "JMeter", "VS Code"]
  };

  const projects = [
    {
      title: "After-Sales Service System",
      client: "George Stuart Consumer",
      description: "Enterprise mobile & web solution. Streamlined sales workflows and customer complaints. Features QR scanning for chemical usage guides.",
      tags: ["Flutter", "Firebase", "Node.js"],
      type: "Client Project",
      color: "from-blue-400 to-cyan-400",
      link: "https://github.com/BanithaMadushan/Steuart_Care_Web_App.git", // Update with real link
    },
    {
      title: "AK Textiles Corporate Site",
      client: "AK Textiles (PVT) Ltd",
      description: "Modern, responsive corporate website designed for the garment sector. Focused on brand identity and mobile responsiveness.",
      tags: ["HTML", "CSS", "JavaScript"],
      type: "Client Project",
      color: "from-purple-400 to-pink-400",
      link: "https://github.com/BanithaMadushan/AK-Textiles.git", // Update with real link
    },
    {
      title: "Online Bookshop API",
      client: "Academic Capstone",
      description: "Full-stack e-commerce app with JWT auth, shopping cart, and external book API integration for dynamic catalog updates.",
      tags: ["React.js", "MongoDB", "Node.js"],
      type: "Full Stack",
      color: "from-emerald-400 to-teal-400",
      link: "https://github.com/BanithaMadushan/BookStore.git"
    },
    {
      title: "Tuition Manager",
      client: "Mobile App",
      description: "Comprehensive student management system handling enrollments, attendance, and payments with multi-role access levels.",
      tags: ["Flutter", "Dart", "Firebase"],
      type: "Mobile App",
      color: "from-orange-400 to-amber-400",
      link: "https://github.com/BanithaMadushan/tution_management_app.git"
    },
    {
      title: "Movie Explorer",
      client: "Personal Project",
      description: "Interactive movie discovery app using TMDb API. Features infinite scrolling, search filtering, and dynamic routing.",
      tags: ["React", "Axios", "MUI"],
      type: "Frontend",
      color: "from-indigo-400 to-violet-400",
      link: "https://github.com/BanithaMadushan/Movie_Explorer.git"
    }
  ];

  const designs = [
    {
      title: "Sky Track System",
      type: "Management Dashboard",
      desc: "A comprehensive tracking and management interface designed for efficiency and real-time monitoring.",
      link: "https://www.figma.com/design/Js8P8bT2Do4l8Z1T56YMjN/Sky-track?node-id=0-1&t=S2amQShMjkglznQO-1",
      color: "border-cyan-500/50"
    },
    {
      title: "Cafeteria App",
      type: "Food Service UI",
      desc: "User-friendly application design for browsing menus, ordering food, and managing cafeteria services.",
      link: "https://www.figma.com/design/sttu8ciYAmi7yu61xC923R/Cafetaria?node-id=0-1&t=1oOt31mnQcDOejYf-1",
      color: "border-orange-500/50"
    },
    {
      title: "AK Textiles",
      type: "Corporate Website",
      desc: "Modern web design for a garment company, focusing on brand identity and product showcasing.",
      link: "https://www.figma.com/design/uMkL2istt8gVsWAVnAW367/AK-Textiles?node-id=0-1&t=6ejePXuw3T9mElSu-1",
      color: "border-purple-500/50"
    },
    {
      title: "Cynexia Web",
      type: "Digital Platform",
      desc: "A futuristic and responsive web interface designed for optimal user engagement and navigation.",
      link: "https://www.figma.com/design/sdyWkoT4EgdQnXtOzXzkga/Cynexia-web?node-id=0-1&t=2556tIn7t1LtcMuf-1",
      color: "border-emerald-500/50"
    }
  ];

  const publications = [
    {
      title: "Deep Learning-Based Emotion Recognition System",
      conference: "5th CINEC Int. Research Symposium",
      desc: "Enhancing Human-Computer Interaction through AI analysis of facial expressions."
    },
    {
      title: "AI-Based Solutions for Online Dress Shopping",
      conference: "4th CINEC Int. Research Symposium",
      desc: "Research on improving user experience in e-commerce using artificial intelligence."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-tighter cursor-pointer">
            BM.
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            {['About', 'Skills', 'Projects', 'Designs', 'Research'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full text-xs font-bold transition-all border border-slate-700">
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            {['About', 'Skills', 'Projects', 'Designs', 'Research', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-4 hover:bg-slate-800 text-slate-300 text-sm border-l-2 border-transparent hover:border-cyan-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 container mx-auto min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-900/50 text-cyan-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for Internships & Projects
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            Banitha <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Madushan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Software Engineering Undergraduate crafting <span className="text-white">high-performance web</span> & <span className="text-white">mobile applications</span>. 
            Bridging the gap between functional code and pixel-perfect design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            
            <a 
              href="/Banitha_CV.pdf" 
              download="Banitha_Madushan_CV.pdf"
              className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-20 flex gap-6 text-slate-500">
            <a href="https://github.com/BanithaMadushan" target="_blank" className="hover:text-white transition-colors"><Github size={24}/></a>
            <a href="https://linkedin.com/in/banitha-madushan-27b4532ab" target="_blank" className="hover:text-blue-400 transition-colors"><Linkedin size={24}/></a>
            <a href="mailto:banithamadu12@gmail.com" className="hover:text-cyan-400 transition-colors"><Mail size={24}/></a>
          </div>
        </div>
      </section>

      {/* Skills Marquee Section */}
      <section id="skills" className="py-20 border-y border-slate-800/50 bg-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
           <h2 className="text-center text-sm font-mono text-slate-500 mb-10 tracking-widest uppercase">Technologies I Work With</h2>
           
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
             {[...skills.languages, ...skills.frontend, ...skills.backend].slice(0, 12).map((skill, idx) => (
               <div key={idx} className="bg-slate-950/50 border border-slate-800/50 rounded-xl p-4 flex items-center justify-center text-slate-300 font-medium hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all cursor-default">
                 {skill}
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400">A selection of my recent client and academic work.</p>
          </div>
          <a href="https://github.com/BanithaMadushan" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
            View Github <ExternalLink size={16}/>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
              <div className={`h-1 w-full bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-white border border-slate-700`}>
                    {project.type}
                  </span>
                  <div className="flex gap-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer transition-colors"
                      title="View Code"
                    >
                        <Github size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-cyan-500/80 mb-4 font-mono">{project.client}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UI/UX Design Gallery Section */}
      <section id="designs" className="py-32 container mx-auto px-6 bg-slate-900/20">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="p-3 bg-pink-500/10 rounded-full text-pink-400 mb-4">
            <PenTool size={32} />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">UI/UX Design Gallery</h2>
          <p className="text-slate-400 max-w-2xl">
            Beyond coding, I design intuitive user interfaces. Here are some of my prototypes and wireframes created in Figma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designs.map((design, index) => (
            <div key={index} className={`relative group bg-slate-950 rounded-2xl p-1 border-2 ${design.color} hover:border-pink-500 transition-colors duration-300`}>
              
              <div className="bg-slate-900 h-full rounded-xl p-8 flex flex-col items-start relative overflow-hidden">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                <div className="flex items-center gap-2 text-pink-400 text-xs font-bold tracking-wider uppercase mb-4">
                  <Layout size={14} />
                  {design.type}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {design.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {design.desc}
                </p>

                <a 
                  href={design.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-auto flex items-center gap-2 text-white font-medium bg-slate-800 hover:bg-pink-600 px-6 py-3 rounded-lg transition-all w-full justify-center border border-slate-700 hover:border-pink-500"
                >
                  <Figma size={18} />
                  View Prototype
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
              <BookOpen size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Research Publications</h2>
              <p className="text-slate-400 text-sm">Contributions to the academic community</p>
            </div>
          </div>

          <div className="grid gap-6">
            {publications.map((pub, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-purple-500/40 transition-colors group">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-200 group-hover:text-purple-400 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-slate-500 mt-2">{pub.desc}</p>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-sm font-medium text-slate-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                  <Award size={16} className="text-yellow-500" />
                  {pub.conference}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to collaborate?</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          I am currently open for full-time Software Engineering roles. 
          If you have an interesting project or just want to say hi, feel free to reach out.
        </p>
        <a 
          href="mailto:banithamadu12@gmail.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1"
        >
          <Mail size={20} />
          Send me an email
        </a>

        <footer className="mt-20 pt-8 border-t border-slate-800 text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Banitha Madushan. All rights reserved.</p>
          <p>Built with React & Tailwind</p>
        </footer>
      </section>
    </div>
  );
};

export default Portfolio;