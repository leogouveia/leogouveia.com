# Site pessoal pixel

Portfolio pessoal e profissional com visual pixel art, construido com Astro, React e Tailwind CSS. Publicado no GitHub Pages com dominio customizado.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:4321` no navegador.

## Build

```bash
npm run build
npm run preview
```

O build gera a pasta `dist/` com HTML, CSS e JS estaticos.

## Publicar no GitHub Pages

O deploy e automatico via GitHub Actions ao fazer push na branch `main`.

1. No GitHub, abra **Settings** > **Pages**.
2. Em **Build and deployment**, escolha **Source: GitHub Actions**.
3. Faca push para `main` e aguarde o workflow **Deploy to GitHub Pages** concluir.

### Dominio customizado

O arquivo [`public/CNAME`](public/CNAME) define `leogouveia.com`. Configure o DNS do dominio apontando para o GitHub Pages (registros `A`/`AAAA` ou `CNAME`, conforme a [documentacao do GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

Se o dominio for outro, atualize `public/CNAME` e `site` em [`astro.config.mjs`](astro.config.mjs).

## Onde editar

| Arquivo | Conteudo |
|---------|----------|
| [`src/data/site.ts`](src/data/site.ts) | Nome, cargo, experiencias, projetos, links de contato |
| [`src/components/Hero.tsx`](src/components/Hero.tsx) | Secao hero (React) |
| [`src/components/Timeline.tsx`](src/components/Timeline.tsx) | Experiencia profissional (React) |
| [`src/components/ProjectGrid.tsx`](src/components/ProjectGrid.tsx) | Projetos (React) |
| [`src/components/AboutSection.astro`](src/components/AboutSection.astro) | Secao sobre |
| [`src/components/ContactSection.astro`](src/components/ContactSection.astro) | Secao contato |
| [`src/styles/global.css`](src/styles/global.css) | Tema Tailwind e efeitos pixel |
