import { useState } from "react";
import { SectionLayout } from "../../layout/SectionLayout/SectionLayout";

import "./Work.css";

import { jobs } from "../../../data/jobs";
import Tag from "../../ui/Tag/Tag";

function Work() {
  const [openId, setOpenId] = useState<string | null>(jobs[0]?.id ?? null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const highlightTag = hoveredTag ?? activeTag;
  const matchCount = activeTag
    ? jobs.filter((job) => job.tags.some((tag) => tag.text === activeTag))
        .length
    : jobs.length;

  const toggleJob = (id: string) =>
    setOpenId((current) => (current === id ? null : id));
  const toggleTag = (text: string) =>
    setActiveTag((current) => (current === text ? null : text));

  return (
    <SectionLayout
      id="work"
      title="Work"
      number="04"
      size="sm"
      below={
        <ol className="work__list">
          {jobs.map((job) => {
            const open = openId === job.id;
            const muted =
              highlightTag !== null &&
              !job.tags.some((tag) => tag.text === highlightTag);
            const panelId = `work-panel-${job.id}`;

            return (
              <li
                key={job.id}
                className={[
                  "work__entry",
                  open && "work__entry--open",
                  muted && "work__entry--muted",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="work__entry-period-container">
                  <span className="work__period">{job.period}</span>
                </div>

                <div className="work__entry-content">
                  <button
                    type="button"
                    className="work__toggle"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggleJob(job.id)}
                  >
                    <span className="work__heading">
                      <span className="work__title">{job.title}</span>
                      <span className="work__company">
                        {job.company} | {job.location}
                      </span>
                    </span>
                    <span className="work__icon" aria-hidden="true" />
                  </button>

                  <div className="work__tags">
                    {job.tags.map((tag) => (
                      <button
                        key={tag.text}
                        type="button"
                        className={`work__tag${activeTag === tag.text ? " work__tag--active" : ""}`}
                        aria-pressed={activeTag === tag.text}
                        title={`Show jobs tagged ${tag.text}`}
                        onClick={() => toggleTag(tag.text)}
                        onMouseEnter={() => setHoveredTag(tag.text)}
                        onMouseLeave={() => setHoveredTag(null)}
                      >
                        <Tag text={tag.text} color={tag.color} />
                      </button>
                    ))}
                  </div>

                  <div className="work__panel" id={panelId} aria-hidden={!open}>
                    <div className="work__panel-inner">
                      <p className="work__description">{job.description}</p>

                      <ul className="work__responsibilities">
                        {job.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      {job.takeaway && (
                        <p className="work__takeaway">{job.takeaway}</p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      }
    >
      <div className="work__intro">
        <p>
          Jobs I've had throughout the years. Open a role for details, or click
          a tag to see where else it shows up.
        </p>

        <p className="work__filter-status" aria-live="polite">
          {activeTag ? (
            <>
              {matchCount} of {jobs.length} jobs tagged{" "}
              <strong>{activeTag}</strong>
              <button
                type="button"
                className="work__filter-clear"
                onClick={() => setActiveTag(null)}
              >
                Clear
              </button>
            </>
          ) : (
            `${jobs.length} jobs, 2016 – 2026`
          )}
        </p>
      </div>
    </SectionLayout>
  );
}

export default Work;
