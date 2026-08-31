
import type { SkillCategory } from "../../../data/skills";
import Tag from "../Tag/Tag";

import "./Skill.css";

function Skill({ skill }: { skill: SkillCategory }) {
    return (
        <div className="skill">
            <p className="skill__title">{skill.name}</p>
            <ul className="skill__list">
                {skill.skills.map((s) => (
                    <Tag key={s.name} text={s.name} color={skill.color} />
                ))}
            </ul>
        </div>
    );
}


export default Skill;