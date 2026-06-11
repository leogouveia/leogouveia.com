import { site } from "../data/site";

export default function ProjectGrid() {
  const { projects } = site;

  return (
    <section className="mx-auto w-full max-w-[1120px] px-4 py-[74px]" id="projetos">
      <div className="max-w-[720px]">
        <p className="kicker">{projects.kicker}</p>
        <h2>{projects.heading}</h2>
      </div>
      <div className="grid grid-cols-1 gap-[22px] min-[861px]:grid-cols-3">
        {projects.items.map((project) => (
          <article className="pixel-panel p-4" key={project.title}>
            <div
              className={`project-screen ${project.screenClass}`}
              aria-hidden="true"
            />
            <h3>{project.title}</h3>
            <p className="text-muted">{project.description}</p>
            <a
              className="project-link"
              href={project.href}
              aria-label={`Abrir ${project.title}`}
            >
              Detalhes
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
