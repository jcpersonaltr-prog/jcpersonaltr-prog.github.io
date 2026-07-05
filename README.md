# THE PLASMIK REPORT — Site oficial

Fitness uncovered. Site estático construído em [Astro](https://astro.build), com autonomia total: sem mensalidades, sem lock-in, sem banners de terceiros.

## Arrancar em local (no teu Mac)

```bash
npm install     # primeira vez apenas
npm run dev     # abre em http://localhost:4321
```

## Publicar uma edição nova do Relatório

1. Duplica um ficheiro em `src/content/relatorio/` (ex.: `028-titulo-da-edicao.md`).
2. Edita o cabeçalho:
   ```yaml
   ---
   titulo: "O título da edição"
   numero: 28
   data: 2026-07-15
   resumo: "Uma frase de apresentação."
   tags: ["treino"]
   ---
   ```
3. Escreve o conteúdo em Markdown por baixo.
4. `git add . && git commit -m "Edição 28" && git push` — o site atualiza sozinho.

A homepage mostra automaticamente a edição com o número mais alto.

## Substituir a foto do hero

Coloca a tua fotografia em `public/images/hero.jpg` (formato 4:5, ex.: 1200×1500).
O CSS converte-a automaticamente para preto e branco de alto contraste.

## Ligar a subscrição de email

O formulário no rodapé (`src/components/Footer.astro`) está preparado para o
[Buttondown](https://buttondown.com) (gratuito até 100 subscritores):
cria conta e substitui `theplasmikreport` no `action` pelo teu username.
Se publicares no Netlify, podes em alternativa usar Netlify Forms (instruções no comentário do ficheiro).

## Ligar a Comunidade WhatsApp

Em `src/pages/comunidade.astro`, substitui a constante `whatsappLink`
pelo link de convite da tua Comunidade WhatsApp.

## Deploy

### Opção A — Netlify (recomendada: domínio próprio fácil, forms incluídos)
1. Faz push do repositório para o GitHub.
2. Em [netlify.com](https://netlify.com): "Add new site" → "Import from GitHub".
3. Build command: `npm run build` · Publish directory: `dist` (detetado automaticamente).
4. Domínio próprio: Site settings → Domain management.

### Opção B — GitHub Pages
1. Faz push para um repositório com branch `main`.
2. Settings → Pages → Source: **GitHub Actions** (o workflow já está em `.github/workflows/deploy.yml`).
3. Se o site ficar em `https://utilizador.github.io/nome-do-repo`, descomenta
   as linhas `site` e `base` em `astro.config.mjs` e ajusta o nome do repositório.

## Estrutura

```
src/
├── styles/global.css      ← sistema visual (tokens, tipografia, componentes)
├── layouts/Base.astro     ← estrutura HTML, SEO, fontes
├── components/            ← Header (masthead) e Footer (subscrição)
├── content/relatorio/     ← as edições, uma por ficheiro .md
└── pages/                 ← index, relatorio, treino, media, tinta, comunidade, sobre
```

## Fases seguintes

- **Fase 2**: Treino — fit cards filtráveis, Perfektus Timer embebido, tabela nutricional interativa, desafios.
- **Fase 3**: Media (podcasts/clips/galeria) e Tinta (reflexões e Leafs From a Dead Tree como coleções).
- **Fase 4**: domínio próprio, redirects do Wix, pesquisa (Pagefind), SEO final.
