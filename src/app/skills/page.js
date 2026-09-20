export default function Skills() {
    return(
        <main className="skills-page">
            <p>WHAT I WORK WITH</p>
            <h1>My Skills</h1>
            <p className="skills-intro">Technologies and tools I'm learning and using to build projects.</p>
            <section className="skills-grid">
                <div className="skill-card">
                    <h2>Frontend</h2>
                    <p>HTML5 | CSS3 | JavaScript | Nextjs</p>
                </div>
                <div className="skill-card">
                    <h2>Programming</h2>
                    <p>Python | Java | C++</p>
                </div>
                <div className="skill-card">
                    <h2>AI/ML</h2>
                    <p>Pandas | NumPy | Scikit-Learn | TensorFlow</p>
                </div>
                <div className="skill-card">
                    <h2>Tools</h2>
                    <p>Git | Github | VS Code | Jupyter</p>
                </div>
            </section>
        </main>
    )
}