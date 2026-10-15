# Yasmim Studio 4.0 — Bordeaux Editorial

Site estático para planejamento de conteúdo e montagem de catálogos, desenvolvido por **Raul Designer**. Layout mobile-first com foco em Safari/iPhone.

## Publicação no GitHub Pages

1. Crie um repositório **novo** no GitHub.
2. Envie **todos os arquivos desta pasta** para a raiz dele; o arquivo `index.html` precisa aparecer na raiz. Preserve as pastas `vendor/` e `assets/`.
3. Vá em `Settings → Pages → Build and deployment` e escolha `Deploy from a branch` → `main` → `/ (root)`.
4. Aguarde a publicação no endereço parecido com `https://usuario.github.io/nome-do-repositorio/`.
5. No iPhone: Safari → Compartilhar → Adicionar à Tela de Início. Se possível, faça o primeiro acesso com internet.

## Principais funções

- **Calendário:** dia atual, datas com post, conteúdo selecionado, navegação entre meses.
- **Planejamento:** 26 publicações originais de nov/dez de 2026; criação, edição, exclusão, filtros, status, detalhes e cópia de legendas.
- **Primeiros passos por eventos:** abrir publicação, salvar agendamento novo, marcar um post como publicado e editar o catálogo. Apenas ações reais mudam o progresso.
- **Catálogos:** editor de páginas (capa, sobre, serviços, valores, cuidados, contato, página livre), imagens, logo, nome, preços, promoções, fontes, cinco variações premium, PNG, ZIP, PDF e PDF otimizado.
- **Biblioteca:** Stories, tutorais, perguntas e respostas provenientes do material original.
- **Preferências:** marca, logo, exportação/importação de backup e informações de armazenamento.
- **PWA:** manifesto, ícones provisórios, versão offline dos arquivos centrais após acesso online.

## Onde os dados ficam

**No navegador do aparelho**, em IndexedDB (ou fallback local quando disponível). O GitHub Pages NÃO grava as alterações no repositório, não sincroniza celulares e não oferece autenticação. Dados locais podem ser perdidos caso a usuária limpe o Safari, troque a URL, desinstale o atalho, etc.

**Se estiver migrando do site antigo para um REPOSITÓRIO NOVO:** a URL será diferente, portanto exporte primeiro o backup JSON antigo e importe na versão 4.0, se existirem alterações importantes. Para atualizações futuras na mesma URL, faça backup antes mesmo que os dados normalmente persistam.

## PDF: alta qualidade x otimizado

PDFs são montados a partir de imagens de cada página. Os dois conservam composição visual; a versão otimizada usa compressão, portanto não é matematicamente sem perda. Para gráfica e impressão profissional, finalize em fluxo de pré-impressão com sangria e perfis de cor adequados. O PDF gerado é ideal para compartilhamento digital.

## Observações

- Nem todos os dados de marca foram fornecidos; logo, valores e contato permanecem editáveis, sem inventar informações comerciais.
- Revisar orientações e promessas técnicas dos textos fornecidos antes de publicar para clientes; algumas podem estar excessivamente categóricas.
- Fonte editorial Google Fonts pode não estar disponível offline; existem fallbacks locais.
- Não hospede dados pessoais ou credenciais de clientes no GitHub público.
- Testado em Chromium em telas simuladas de 320, 390 e 1440 px e PDF gerado localmente. **Não testado em Safari/iPhone físico.**

## Arquivos

- `index.html` — estrutura e navegação
- `style.css` — identidade Bordeaux Editorial responsiva
- `app.js` — calendário, postagens, onboarding, formulários, persistência e interface
- `catalog.js` — renderização e exportação de catálogos
- `seed.js` — conteúdos e guias originais
- `vendor/` — JSZip local
- `assets/` — ícones da PWA (provisórios)
- `manifest.webmanifest` e `sw.js` — PWA/offline
- `01_PESQUISA_UI_PREMIUM.md` — relatório de pesquisa e referências
- `02_AUDITORIA_COMPARATIVA_E_REDESIGN.md` — relatório da v3 vs v4 e testes

**Créditos:** https://rauldesigner.com.br · https://instagram.com/rauldesigner
