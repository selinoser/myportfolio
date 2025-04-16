import "./../assets/scss/skills.scss"
import { skills } from '../skills';

const Skills = () => {
    return (
        <div className="container" id="skills">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills">
                    {
                        skills.map((item) => (
                            <div key={item.id} className="item">
                                <img src={item.iconUrl} />
                                <span>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills