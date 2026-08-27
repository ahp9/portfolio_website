import { useLayoutEffect, useRef, useState } from "react";
import { SectionLayout } from "../../layout/SectionLayout/SectionLayout";

import "./Projects.css";

import { projects } from "../../../data/projects";
import ProjectCard from "../../ui/PorjectCard/ProjectCard";

function Projects() {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const cardRefs = useRef(new Map<string, HTMLElement>());
    const prevRects = useRef(new Map<string, DOMRect>());

    const captureRects = () => {
        const rects = new Map<string, DOMRect>();
        cardRefs.current.forEach((el, id) => rects.set(id, el.getBoundingClientRect()));
        prevRects.current = rects;
    };

    const handleOpen = (id: string) => {
        captureRects();
        setExpandedId(id);
    };

    const handleClose = () => {
        captureRects();
        setExpandedId(null);
    };

    // FLIP: animate every card from its previous position/size to its new
    // one whenever a card expands or collapses, so siblings glide instead of jumping.
    useLayoutEffect(() => {
        cardRefs.current.forEach((el, id) => {
            const prev = prevRects.current.get(id);
            if (!prev) return;

            const next = el.getBoundingClientRect();
            const dx = prev.left - next.left;
            const dy = prev.top - next.top;
            const dw = prev.width - next.width;
            const dh = prev.height - next.height;

            if (!dx && !dy && !dw && !dh) return;

            el.style.transition = "none";
            el.style.transform = `translate(${dx}px, ${dy}px)`;
            el.style.width = `${prev.width}px`;
            el.style.height = `${prev.height}px`;

            el.getBoundingClientRect();

            requestAnimationFrame(() => {
                el.style.transition = "transform var(--duration-slow) var(--ease-standard), width var(--duration-slow) var(--ease-standard), height var(--duration-slow) var(--ease-standard)";
                el.style.transform = "";
                el.style.width = "";
                el.style.height = "";
            });
        });
    }, [expandedId]);

    return (
        <SectionLayout id="projects" title="Projects" number="03" size="sm" below={
            <div className="projects__list">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        expanded={expandedId === project.id}
                        onOpen={() => handleOpen(project.id)}
                        onClose={handleClose}
                        cardRef={(el) => {
                            if (el) cardRefs.current.set(project.id, el);
                            else cardRefs.current.delete(project.id);
                        }}
                    />
                ))}
            </div>
        }>
            <p>A selection of things I've built.</p>
        </SectionLayout>
    )
}

export default Projects;
