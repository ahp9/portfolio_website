import { SectionLayout } from "../../layout/SectionLayout/SectionLayout";

import "./Education.css";

import { education } from "../../../data/education";
import Tag from "../../ui/Tag/Tag";

function Education() {
  return (
    <SectionLayout id="education" title="Menntun" number="02" size="sm">
      <div className="education__list">
        {education.map((entry) => (
          <div className="education__entry" key={entry.degree}>
            <div className="education__entry-period-container">
              <span className="education__period">{entry.period}</span>
            </div>
            <div className="education__entry-content">
              <h3 className="education__degree">{entry.degree}</h3>
              <div className="education__institution-container">
                <p className="education__institution">{entry.institution}</p>
                {entry.specialization && (
                  <p className="education__institution">| Specialization: {entry.specialization}</p>
                )}
              </div>
              {entry.tags && (
                <div className="education__tags">
                  {entry.tags.map((tag) => (
                    <Tag key={tag.text} text={tag.text} color={tag.color} />
                  ))}
                </div>
              )}
              <p className="education__description">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Education;
