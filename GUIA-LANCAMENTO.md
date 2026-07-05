# GUIA DE LANÇAMENTO — The Plasmik Report

Ordem: Parte A (site no ar) → Parte B (painel CMS) → Parte C (testes).
A Parte A funciona sozinha; o CMS pode ser ligado no dia seguinte sem pressa.

---

## PARTE A — Pôr o site no ar (GitHub Pages)

### A1. Criar o repositório
1. Vai a https://github.com/new (sessão iniciada como `jcpersonaltr-prog`).
2. Repository name: **jcpersonaltr-prog.github.io** — exatamente este nome
   (é o que faz o site viver na raiz, sem prefixos).
3. Visibilidade: **Public** (obrigatório para GitHub Pages gratuito).
4. NÃO adiciones README, .gitignore nem licença (já existem no projeto).
5. Create repository.

### A2. Enviar o projeto (no Terminal, na pasta do projeto)
```bash
cd ~/Desktop/plasmik-report
git init
git add .
git commit -m "The Plasmik Report — lançamento"
git branch -M main
git remote add origin https://github.com/jcpersonaltr-prog/jcpersonaltr-prog.github.io.git
git push -u origin main
```
(Se o push pedir autenticação: username `jcpersonaltr-prog` e, como password,
um Personal Access Token — ver nota no fim deste guia.)

### A3. Ativar o GitHub Pages
1. No repositório: **Settings → Pages**.
2. Em "Build and deployment" → Source: escolhe **GitHub Actions**.
3. Vai ao separador **Actions** — o workflow "Deploy para GitHub Pages"
   já deve estar a correr. Quando ficar verde (1–2 min):

**O site está no ar em https://jcpersonaltr-prog.github.io**

A partir de agora, QUALQUER push no main republica o site sozinho.

---

## PARTE B — Painel CMS (/admin) com autenticação própria

O painel já está no site em `/admin`. Falta o autenticador (10 min, uma única vez).

### B1. Deploy do autenticador no Cloudflare
1. Cria conta gratuita em https://dash.cloudflare.com/sign-up (se não tiveres).
2. Vai a https://github.com/sveltia/sveltia-cms-auth e clica no botão
   **Deploy to Cloudflare Workers** do README. Autoriza e faz deploy.
3. No dashboard do Cloudflare → Workers → serviço `sveltia-cms-auth`:
   copia o URL do worker, algo como
   `https://sveltia-cms-auth.XXXX.workers.dev`

### B2. Criar a OAuth App no GitHub
1. Vai a https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**.
2. Preenche:
   - Application name: `Plasmik CMS`
   - Homepage URL: `https://jcpersonaltr-prog.github.io`
   - Authorization callback URL: `URL-DO-WORKER/callback`
     (ex.: `https://sveltia-cms-auth.XXXX.workers.dev/callback`)
3. Register application → copia o **Client ID** → clica em
   **Generate a new client secret** → copia o **Client Secret**.

### B3. Configurar o worker
1. No Cloudflare: Workers → `sveltia-cms-auth` → **Settings → Variables**.
2. Adiciona as variáveis (tipo Secret):
   - `GITHUB_CLIENT_ID` = o Client ID
   - `GITHUB_CLIENT_SECRET` = o Client Secret
   - `ALLOWED_DOMAINS` = `jcpersonaltr-prog.github.io`
3. Guarda / redeploy se pedido.

### B4. Apontar o painel para o worker
1. Abre `public/admin/config.yml` no projeto.
2. Na linha `base_url:`, substitui pelo URL do teu worker.
3. Publica a alteração:
```bash
cd ~/Desktop/plasmik-report
git add . && git commit -m "Ligar autenticador do CMS" && git push
```

### Atalho para já (sem worker)
O Sveltia também aceita login com um Personal Access Token do GitHub:
em https://jcpersonaltr-prog.github.io/admin escolhe a opção de token,
colando um PAT fine-grained com permissão Contents: Read and write sobre
o repositório. Serve para começares a publicar hoje; o worker é a solução
definitiva "de um clique".

---

## PARTE C — Teste ponta-a-ponta

1. Abre **https://jcpersonaltr-prog.github.io/admin**
2. Login with GitHub (autoriza a app na primeira vez).
3. Coleção **Relatório** → New Edição → preenche os campos → **Publish**.
4. Vai ao separador Actions do repositório: um build novo arranca sozinho.
5. 1–2 minutos depois: a edição está no site, e na homepage se o número
   for o mais alto. Fluxo completo: painel → commit → Action → site. ✓

---

## DEPOIS DO LANÇAMENTO

- **Domínio próprio** (quando quiseres): compra o domínio, e no repo
  Settings → Pages → Custom domain. Atualiza também `site` no
  `astro.config.mjs` e `ALLOWED_DOMAINS` no worker.
- **Reformar o Wix**: no editor Wix, troca a homepage por um aviso
  "Mudámos para [novo endereço]" durante umas semanas, e cancela
  qualquer plano pago.
- **Publicar do telemóvel**: o /admin funciona no browser do telemóvel —
  podes escrever e publicar edições sem computador.

## Nota: Personal Access Token para o git push
Se o `git push` pedir password: https://github.com/settings/tokens →
Generate new token (classic) → scope `repo` → usa o token como password.
Ou instala o GitHub CLI (`brew install gh` e `gh auth login`) e esquece
passwords de vez.
