# FASE 3 — Media e Tinta

## Como instalar

    unzip -o ~/Downloads/plasmik-report-fase3.zip -d ~/Desktop/plasmik-report

(troca Downloads por Desktop se o zip estiver no Desktop)

Substitui apenas `media.astro`, `tinta.astro` e `content.config.ts`.
Tudo o que personalizaste fica intacto.

## O que há de novo

- /media — hub com Vídeos e Galeria
- /media/videos — podcasts e clips com filtro; o vídeo carrega ao clique
- /media/galeria — Fotos e Prop Art com lightbox
- /tinta — listagem com filtro (Reflexões, Leafs From a Dead Tree, Princípios)
- /tinta/... — página de leitura literária de cada texto

## Como gerir o conteúdo

**Vídeos** → edita `src/data/videos.json`. Para cada vídeo precisas do ID
do YouTube: no URL `youtube.com/watch?v=nmfZi8BDzS8`, o ID é o que vem
depois de `v=`. Define `tipo` como "Podcast" ou "Clip". Já incluí o teu
episódio com a Lia Bahut como primeiro exemplo real.

**Galeria** → arrasta imagens (.jpg/.png/.webp) para:
- `public/images/galeria/fotos/` → separador Fotos (P&B automático)
- `public/images/galeria/prop-art/` → separador Prop Art (cores originais)
As imagens são detetadas sozinhas. Apaga os exemplos quando puseres as tuas.

**Tinta** → um texto = um ficheiro .md em `src/content/tinta/`, com:

    ---
    titulo: "O título"
    data: 2026-07-10
    tipo: reflexao        (ou: leafs, principio)
    resumo: "Uma linha opcional."
    ---
    O texto em Markdown por baixo.

A listagem, os filtros e a página de leitura criam-se sozinhos.
