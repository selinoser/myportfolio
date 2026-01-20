import "./../assets/scss/skills.scss"
import { skills } from '../skills';

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <div className="section-header">
                    <h2 className="title">Skills & Technologies</h2>
                    <div className="underline"></div>
                </div>

                <div className="skills-grid">
                    {skills.map((item, index) => (
                        <div key={index} className="skill-card">
                            <div className="icon-box">
                                <img src={item.iconUrl} alt={item.name} />
                            </div>
                            <span className="skill-name">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;