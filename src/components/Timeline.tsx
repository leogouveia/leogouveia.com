import { site } from "../data/site";

export default function Timeline() {
  const { experience } = site;

  return (
    <section className="mx-auto w-full max-w-[1120px] px-4 py-[74px]" id="experiencia">
      <div className="max-w-[720px]">
        <p className="kicker">{experience.kicker}</p>
        <h2>{experience.heading}</h2>
      </div>
      <div className="grid gap-[22px]">
        {experience.items.map((item) => (
          <article className="timeline-item" key={item.period}>
            <span className="period">{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.company}</p>
            <p className="text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
