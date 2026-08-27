import { useEffect, useRef, useState } from "react";
import Tag from "../Tag/Tag";
import type { Project } from "../../../data/projects";

import "./ProjectCard.css";

const PREVIEW_NATIVE_WIDTH = 1280;
const PREVIEW_NATIVE_HEIGHT = 800;

type ProjectCardProps = {
  project: Project;
  expanded: boolean;
  onOpen: () => void;
  onClose: () => void;
  cardRef: (el: HTMLElement | null) => void;
};

function ProjectCard({ project, expanded, onOpen, onClose, cardRef }: ProjectCardProps) {
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!expanded || !previewRef.current) return;

    const el = previewRef.current;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setScale(width / PREVIEW_NATIVE_WIDTH);
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [expanded]);

  return (
    <article
      ref={cardRef}
      className={`project-card${expanded ? " project-card--expanded" : ""}`}
      onClick={expanded ? undefined : onOpen}
    >
      {expanded && (
        <button
          type="button"
          className="project-card__close"
          aria-label="Close"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
        >
          ×
        </button>
      )}

      <div className="project-card__top">
        <div className="project-card__info">
          <div className="project-card__header">
            <span className="project-card__number">{project.number}</span>
            <span className="project-card__period">{project.period}</span>
          </div>

          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>

          {project.tags && (
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <Tag key={tag.text} text={tag.text} color={tag.color} />
              ))}
            </div>
          )}
        </div>

        {expanded && (
          <div className="project-card__preview" ref={previewRef}>
            {project.links.demo ? (
              <iframe
                src={project.links.demo}
                title={`${project.title} preview`}
                loading="lazy"
                style={{
                  width: `${PREVIEW_NATIVE_WIDTH}px`,
                  height: `${PREVIEW_NATIVE_HEIGHT}px`,
                  transform: `scale(${scale})`,
                }}
              />
            ) : (
              <div className="project-card__preview-placeholder">No demo available</div>
            )}
          </div>
        )}
      </div>

      <div className="project-card__details">
        <div className="project-card__details-inner">
          <p><strong>Problem</strong> {project.problem}</p>
          <p><strong>Solution</strong> {project.solution}</p>
          <p><strong>The hard part</strong> {project.hardPart}</p>
          <p><strong>My role</strong> {project.role}</p>
          {project.grade && <p><strong>Grade</strong> {project.grade}</p>}
        </div>
      </div>

      <div className="project-card__links">
        {project.links.caseStudy && (
          <a className="project-card__link" href={project.links.caseStudy} onClick={(e) => e.stopPropagation()}>
            Case study
          </a>
        )}
        {project.links.github && (
          <a className="project-card__link" href={project.links.github} onClick={(e) => e.stopPropagation()}>
            GitHub
          </a>
        )}
        {project.links.demo && (
          <a className="project-card__link" href={project.links.demo} onClick={(e) => e.stopPropagation()}>
            Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;