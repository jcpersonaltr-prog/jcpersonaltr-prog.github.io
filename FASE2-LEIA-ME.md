# FASE 2 — Secção Treino

## Como instalar (sem perder as tuas alterações)

Com o zip no Desktop e o projeto em ~/Desktop/plasmik-report, corre no Terminal:

    unzip -o ~/Desktop/plasmik-report-fase2.zip -d ~/Desktop/plasmik-report

Isto adiciona os ficheiros novos e substitui APENAS a página `src/pages/treino.astro`.
A tua foto, o link do WhatsApp, o Buttondown e os ajustes de CSS ficam intactos.

## O que há de novo

- /treino — hub com as 4 ferramentas
- /treino/fit-cards — cartões filtráveis por categoria e nível
- /treino/temporizador — Perfektus Timer (HIIT, Tabata, EMOM, sons)
- /treino/tabela-nutricional — tabela pesquisável e ordenável
- /treino/desafios — desafio do mês + arquivo

## Como gerir o conteúdo

**Fit cards** → edita `src/data/fitcards.json`. Cada cartão tem titulo,
categoria, nivel (Iniciante/Intermédio/Avançado), tempo, equipamento e a
lista de exercícios (nomes em inglês). Os filtros criam-se sozinhos a
partir das categorias que existirem. Os 9 cartões incluídos são exemplos —
substitui pelos teus.

**Tabela nutricional** → substitui `public/data/alimentos.csv` pelo teu CSV
do Wix. A página deteta automaticamente o separador (; ou ,) e as colunas,
seja qual for a estrutura. A primeira coluna é usada na pesquisa.

**Desafios** → edita a lista no topo de `src/pages/treino/desafios.astro`.
Todos os meses: adiciona o novo com `atual: true` e muda o anterior para
`atual: false`.

**Temporizador** → funciona já. Se preferires usar o teu Perfektus Timer
HTML original, diz e integro-o em vez deste.
