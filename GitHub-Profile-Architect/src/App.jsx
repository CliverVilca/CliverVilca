import React, { useState, useEffect } from 'react';
import {
    Github,
    Code2,
    BarChart3,
    Share2,
    Layout,
    Terminal,
    Sparkles,
    Copy,
    Check,
    RefreshCcw,
    Zap,
    Globe,
    User,
    Trash2,
    Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
    const [activeTab, setActiveTab] = useState('basics');
    const [copied, setCopied] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Cliver Vilca',
        role: 'Full Stack Developer',
        description: 'Passionate about building scalable web applications and exploring the future of IA.',
        location: 'Puno, Peru',
        web: 'https://clivervilca.dev',
        socials: {
            linkedin: 'clivervilca',
            twitter: 'clivervilca',
            instagram: ''
        },
        techStack: ['php', 'laravel', 'vue', 'js', 'python', 'nodejs', 'mysql', 'docker', 'git'],
        projects: [
            { name: 'ACTAS Search System', repoUrl: 'https://github.com/CliverVilca/ACTAS-SEARCH-SYSTEM' },
            { name: 'Reconocimiento Placas', repoUrl: 'https://github.com/CliverVilca/Reconocimiento-Placas' }
        ],
        statsTheme: 'tokyonight',
        bannerStyle: 'waving',
        showStreak: true,
        showActivity: true
    });

    const [generatedMarkdown, setGeneratedMarkdown] = useState('');

    useEffect(() => {
        generateMarkdown();
    }, [profile]);

    const generateMarkdown = () => {
        const { name, role, description, socials, techStack, projects, statsTheme, bannerStyle, showStreak, showActivity } = profile;

        const bannerUrl = `https://capsule-render.vercel.app/api?type=${bannerStyle}&color=gradient&height=300&section=header&text=${encodeURIComponent(name)}&fontSize=90&animation=fadeIn&fontAlignY=38&desc=${encodeURIComponent(role)}&descAlignY=51&descSize=20`;

        const typingUrl = `https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&pause=1000&color=7aa2f7&center=true&vCenter=true&width=500&lines=${encodeURIComponent('Hi there! I am ' + name)}🚀;${encodeURIComponent(role)};${encodeURIComponent('Passionate about Code and Innovation')}`;

        const stackIcons = techStack.length > 0 ? `https://skillicons.dev/icons?i=${techStack.filter(v => v).join(',')}&theme=dark` : '';

        const md = `# <p align="center">✨ Welcome to my Profile ✨</p>

<p align="center">
  <img src="${bannerUrl}" />
</p>

<p align="center">
  <img src="${typingUrl}" alt="Typing SVG" />
</p>

---

### 🚀 About Me

${description}

- 📍 Based in **${profile.location}**
- 🌐 Visit my portfolio: [${profile.web}](${profile.web})
- 💬 Ask me about: **${techStack.slice(0, 3).join(', ')}**

---

### 💻 Tech Stack

<div align="center">
  <img src="${stackIcons}" />
</div>

---

### 📂 Featured Projects

${projects.map(p => `- **[${p.name}](${p.repoUrl})**`).join('\n')}

---

### 📊 GitHub Stats

<p align="center">
  <img width="48%" src="https://github-readme-stats.vercel.app/api?username=CliverVilca&show_icons=true&theme=${statsTheme}&hide_border=true&title_color=7aa2f7&icon_color=7aa2f7&text_color=9aa5ce&bg_color=1a1b26" />
  <img width="48%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=CliverVilca&layout=compact&theme=${statsTheme}&hide_border=true&title_color=7aa2f7&text_color=9aa5ce&bg_color=1a1b26" />
</p>

${showActivity ? `<p align="center">
  <img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=CliverVilca&theme=${statsTheme}&area=true&hide_border=true" />
</p>` : ''}

---

${showStreak ? `### 🔥 My Streaks

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=CliverVilca&theme=${statsTheme}&hide_border=true" />
</p>

---` : ''}

### 📫 Connect with Me

<p align="center">
${socials.linkedin ? `<a href="https://linkedin.com/in/${socials.linkedin}" target="blank"><img align="center" src="https://skillicons.dev/icons?i=linkedin" alt="Linkedin" height="30" width="30" /></a> ` : ''}
${socials.twitter ? `<a href="https://twitter.com/${socials.twitter}" target="blank"><img align="center" src="https://skillicons.dev/icons?i=twitter" alt="Twitter" height="30" width="30" /></a> ` : ''}
${socials.instagram ? `<a href="https://instagram.com/${socials.instagram}" target="blank"><img align="center" src="https://skillicons.dev/icons?i=instagram" alt="Instagram" height="30" width="30" /></a> ` : ''}
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=CliverVilca&label=Profile%20Views&color=7aa2f7&style=flat-square" alt="Views" />
</p>

---
<p align="center">
  <i>"Crafting code with passion and precision."</i>
</p>
`;
        setGeneratedMarkdown(md);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedMarkdown);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleAddProject = () => {
        setProfile({ ...profile, projects: [...profile.projects, { name: '', repoUrl: '' }] });
    };

    const handleProjectChange = (index, field, value) => {
        const updatedProjects = [...profile.projects];
        updatedProjects[index][field] = value;
        setProfile({ ...profile, projects: updatedProjects });
    };

    const handleRemoveProject = (index) => {
        const updatedProjects = profile.projects.filter((_, i) => i !== index);
        setProfile({ ...profile, projects: updatedProjects });
    };

    return (
        <div className="app-container">
            <header className="main-header">
                <div className="logo">
                    <Sparkles className="icon-gold" />
                    <h1>Profile<span>Architect</span></h1>
                </div>
                <div className="actions">
                    <button className="btn-secondary" onClick={() => window.open('https://github.com/CliverVilca', '_blank')}>
                        <Github size={18} />
                        <span>@CliverVilca</span>
                    </button>
                </div>
            </header>

            <main className="builder-layout">
                <aside className="builder-sidebar">
                    <nav>
                        <button className={activeTab === 'basics' ? 'active' : ''} onClick={() => setActiveTab('basics')}>
                            <User size={20} />
                            <span>Básicos</span>
                        </button>
                        <button className={activeTab === 'tech' ? 'active' : ''} onClick={() => setActiveTab('tech')}>
                            <Code2 size={20} />
                            <span>Tecnologías</span>
                        </button>
                        <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
                            <Layout size={20} />
                            <span>Proyectos</span>
                        </button>
                        <button className={activeTab === 'stats' ? 'active' : ''} onClick={() => setActiveTab('stats')}>
                            <BarChart3 size={20} />
                            <span>Estadísticas</span>
                        </button>
                        <button className={activeTab === 'preview' ? 'active' : ''} onClick={() => setActiveTab('preview')}>
                            <Terminal size={20} />
                            <span>Editor MD</span>
                        </button>
                    </nav>
                    <div className="sidebar-footer">
                        <button className="btn-primary w-full" onClick={handleCopy}>
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                            <span>{copied ? 'Copiado' : 'Copiar Markdown'}</span>
                        </button>
                    </div>
                </aside>

                <section className="builder-content">
                    <div className="scroll-area">
                        <AnimatePresence mode="wait">
                            {activeTab === 'basics' && (
                                <motion.div key="basics" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="config-section">
                                    <h2>Personalización Básica</h2>
                                    <div className="input-group">
                                        <label>Nombre Completo</label>
                                        <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
                                    </div>
                                    <div className="input-group">
                                        <label>Rol Principal</label>
                                        <input type="text" value={profile.role} onChange={(e) => setProfile({ ...profile, role: e.target.value })} />
                                    </div>
                                    <div className="input-group">
                                        <label>Bio Corta</label>
                                        <textarea rows="3" value={profile.description} onChange={(e) => setProfile({ ...profile, description: e.target.value })} />
                                    </div>
                                    <div className="grid-2">
                                        <div className="input-group">
                                            <label>Ubicación</label>
                                            <input type="text" value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} />
                                        </div>
                                        <div className="input-group">
                                            <label>Sitio Web</label>
                                            <input type="text" value={profile.web} onChange={(e) => setProfile({ ...profile, web: e.target.value })} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'tech' && (
                                <motion.div key="tech" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="config-section">
                                    <h2>Tech Stack</h2>
                                    <p className="hint">Escribe las tecnologías separadas por coma</p>
                                    <div className="input-group">
                                        <input type="text" placeholder="php,laravel,vue..." value={profile.techStack.join(',')} onChange={(e) => setProfile({ ...profile, techStack: e.target.value.split(',').map(s => s.trim()) })} />
                                    </div>
                                    <div className="tech-preview-list">
                                        {profile.techStack.map((tech, i) => tech && (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'projects' && (
                                <motion.div key="projects" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="config-section">
                                    <h2>Proyectos Destacados</h2>
                                    {profile.projects.map((project, index) => (
                                        <div key={index} className="project-card-editor">
                                            <div className="input-group">
                                                <input type="text" placeholder="Nombre del Proyecto" value={project.name} onChange={(e) => handleProjectChange(index, 'name', e.target.value)} />
                                            </div>
                                            <div className="input-group">
                                                <input type="text" placeholder="URL del Repositorio" value={project.repoUrl} onChange={(e) => handleProjectChange(index, 'repoUrl', e.target.value)} />
                                            </div>
                                            <button className="btn-icon-danger" onClick={() => handleRemoveProject(index)}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    ))}
                                    <button className="btn-secondary w-full" onClick={handleAddProject} style={{ marginTop: '1rem', borderStyle: 'dashed' }}>
                                        <Plus size={16} />
                                        <span>Añadir Nuevo Proyecto</span>
                                    </button>
                                </motion.div>
                            )}

                            {activeTab === 'stats' && (
                                <motion.div key="stats" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="config-section">
                                    <h2>Estadísticas y Estilo</h2>
                                    <div className="input-group">
                                        <label>Tema de Estadísticas</label>
                                        <select value={profile.statsTheme} onChange={(e) => setProfile({ ...profile, statsTheme: e.target.value })}>
                                            <option value="tokyonight">Tokyo Night</option>
                                            <option value="radical">Radical</option>
                                            <option value="merko">Merko</option>
                                            <option value="gruvbox">Gruvbox</option>
                                            <option value="dracula">Dracula</option>
                                        </select>
                                    </div>
                                    <div className="toggle-group">
                                        <label className="toggle">
                                            <input type="checkbox" checked={profile.showStreak} onChange={(e) => setProfile({ ...profile, showStreak: e.target.checked })} />
                                            <span className="slider"></span>
                                            <span>Mostrar Rachas (Streaks)</span>
                                        </label>
                                        <label className="toggle">
                                            <input type="checkbox" checked={profile.showActivity} onChange={(e) => setProfile({ ...profile, showActivity: e.target.checked })} />
                                            <span className="slider"></span>
                                            <span>Mostrar Grafo de Actividad</span>
                                        </label>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'preview' && (
                                <motion.div key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="config-section">
                                    <h2>Editor de Markdown</h2>
                                    <div className="code-editor-container">
                                        <textarea
                                            className="markdown-source-editor"
                                            value={generatedMarkdown}
                                            onChange={(e) => setGeneratedMarkdown(e.target.value)}
                                            spellCheck="false"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                <section className="live-preview">
                    <div className="preview-header">
                        <Zap size={16} className="text-primary" />
                        <span>Vista Previa del Perfil</span>
                    </div>
                    <div className="preview-window">
                        <div className="github-md-render">
                            <div className="md-header">
                                <img src={`https://capsule-render.vercel.app/api?type=${profile.bannerStyle}&color=gradient&height=180&section=header&text=${encodeURIComponent(profile.name)}&fontSize=60&animation=fadeIn&fontAlignY=38`} />
                            </div>
                            <div className="md-typing" style={{ textAlign: 'center', marginTop: '1rem' }}>
                                <p style={{ fontSize: '1.2rem', color: '#7aa2f7', fontWeight: 'bold' }}>{profile.role}</p>
                            </div>
                            <div className="md-body">
                                <h3>Sobre Mí</h3>
                                <p>{profile.description}</p>
                                <div className="md-tech" style={{ textAlign: 'center', margin: '2rem 0' }}>
                                    <img src={`https://skillicons.dev/icons?i=${profile.techStack.filter(v => v).join(',')}&theme=dark`} style={{ maxWidth: '100%' }} />
                                </div>
                                <h3>📂 Proyectos</h3>
                                <ul>
                                    {profile.projects.map((p, i) => p.name && (
                                        <li key={i}><strong>{p.name}</strong></li>
                                    ))}
                                </ul>
                                <h3>📊 Estadísticas</h3>
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '1rem' }}>
                                    <div style={{ background: '#1a1b26', padding: '20px', borderRadius: '8px', border: '1px solid #333', flex: 1, textAlign: 'center', color: '#565f89' }}>Tarjetas de Estadísticas</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
        .app-container { display: flex; flex-direction: column; height: 100vh; background: var(--bg); color: var(--text); }
        .main-header { height: 70px; display: flex; align-items: center; justify-content: space-between; padding: 0 2rem; border-bottom: 1px solid var(--border); background: rgba(15, 17, 26, 0.8); backdrop-filter: blur(10px); z-index: 100; }
        .logo { display: flex; align-items: center; gap: 0.8rem; }
        .logo h1 { font-size: 1.5rem; font-weight: 800; color: #fff; }
        .logo h1 span { color: var(--primary); }
        .builder-layout { display: flex; flex: 1; overflow: hidden; }
        .builder-sidebar { width: 260px; background: rgba(26, 27, 38, 0.5); border-right: 1px solid var(--border); display: flex; flex-direction: column; padding: 1.5rem 0; }
        .builder-sidebar nav { flex: 1; padding: 0 1rem; }
        .builder-sidebar nav button { width: 100%; display: flex; align-items: center; gap: 1rem; padding: 1rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; border-radius: 12px; transition: all 0.2s; margin-bottom: 0.5rem; font-weight: 500; text-align: left; }
        .builder-sidebar nav button:hover { background: var(--glass); color: var(--text); }
        .builder-sidebar nav button.active { background: linear-gradient(90deg, rgba(122, 162, 247, 0.1), transparent); color: var(--primary); border-left: 3px solid var(--primary); }
        .builder-content { flex: 1; max-width: 600px; padding: 2rem; background: var(--bg); border-right: 1px solid var(--border); display: flex; flex-direction: column; }
        .scroll-area { flex: 1; overflow-y: auto; padding-right: 1rem; }
        .config-section h2 { margin-bottom: 1.5rem; font-size: 1.8rem; color: #fff; }
        .input-group { margin-bottom: 1.2rem; }
        .input-group label { display: block; margin-bottom: 0.4rem; font-size: 0.85rem; color: var(--text-muted); font-weight: 600; }
        .input-group input, .input-group textarea, .input-group select { width: 100%; background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); border-radius: 8px; padding: 0.8rem; color: #fff; font-family: inherit; transition: all 0.2s; }
        .input-group input:focus { outline: none; border-color: var(--primary); background: rgba(255, 255, 255, 0.08); }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .hint { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem; }
        .tech-preview-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
        .tech-tag { padding: 0.2rem 0.6rem; background: rgba(122, 162, 247, 0.1); border: 1px solid rgba(122, 162, 247, 0.2); border-radius: 4px; font-size: 0.75rem; color: var(--primary); }
        .project-card-editor { position: relative; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; margin-bottom: 1rem; }
        .btn-icon-danger { position: absolute; top: 0.5rem; right: 0.5rem; background: transparent; border: none; color: #f7768e; cursor: pointer; padding: 0.5rem; border-radius: 6px; }
        .btn-icon-danger:hover { background: rgba(247, 118, 142, 0.1); }
        .live-preview { flex: 1; background: #0d1117; padding: 2rem; display: flex; flex-direction: column; overflow-y: auto; }
        .preview-header { display: flex; align-items: center; gap: 0.5rem; color: #8b949e; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 1rem; }
        .github-md-render { color: #c9d1d9; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; }
        .md-body h3 { border-bottom: 1px solid #21262d; padding-bottom: 0.3rem; margin: 1.5rem 0 1rem; }
        .markdown-source-editor { width: 100%; height: 400px; background: #010409; color: #79c0ff; font-family: 'Fira Code', monospace; font-size: 0.85rem; padding: 1.5rem; border-radius: 12px; border: 1px solid #30363d; resize: vertical; }
        .toggle-group { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
        .toggle { display: flex; align-items: center; gap: 1rem; cursor: pointer; font-size: 0.9rem; }
        .slider { width: 34px; height: 18px; background: #333; border-radius: 10px; position: relative; transition: 0.3s; }
        .slider:before { content: ""; position: absolute; width: 14px; height: 14px; background: #fff; border-radius: 50%; top: 2px; left: 2px; transition: 0.3s; }
        input:checked + .slider { background: var(--primary); }
        input:checked + .slider:before { transform: translateX(16px); }
        input[type="checkbox"] { display: none; }
        .btn-primary { background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; border: none; padding: 0.8rem; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
        .btn-secondary { background: var(--glass); border: 1px solid var(--border); color: #fff; padding: 0.6rem; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; transition: 0.2s; }
        .btn-secondary:hover { background: rgba(255, 255, 255, 0.1); }
      `}</style>
        </div>
    );
};

export default App;
