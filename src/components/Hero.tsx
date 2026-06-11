import { site } from "../data/site";

const PIXEL_CELLS = 16;

export default function Hero() {
  return (
    <section
      className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-12 px-4 py-14 min-h-[calc(100svh-72px)] min-[861px]:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] max-[860px]:min-h-0 max-[860px]:pt-[42px]"
      id="inicio"
    >
      <div>
        <p className="kicker">{site.kicker}</p>
        <h1>{site.name}</h1>
        <p className="mb-0 text-[22px] font-bold text-yellow">{site.role}</p>
        <p className="mt-4 text-lg text-muted">{site.intro}</p>
        <div className="mt-6 flex items-center gap-3.5 max-[560px]:flex-col max-[560px]:items-stretch">
          <a className="button button-primary" href="#projetos">
            Ver projetos
          </a>
          <a className="button button-secondary" href="#contato">
            Falar comigo
          </a>
        </div>
      </div>

      <div
        className="pixel-panel p-6 max-[860px]:order-first"
        aria-label="Cartao profissional pixelizado"
      >
        <div className="avatar-frame">

          <img src="/avatar.png" alt="Leo Gouveia" />

        </div>
        <div className="grid grid-cols-3 gap-3 max-[560px]:grid-cols-1">
          {site.stats.map((stat) => (
            <div className="stats-cell" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
