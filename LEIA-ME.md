# Yasmim Studio 4.2 — Catálogo e planejamento

Projeto estático para GitHub Pages, responsivo e preparado para iPhone. Desenvolvimento e design: Raul Designer — https://rauldesigner.com.br — https://instagram.com/rauldesigner.

## Como publicar

1. Faça um **backup** dos dados na versão já publicada (Preferências → Exportar backup).
2. No repositório do site atual, substitua **todos os arquivos deste pacote**, mantendo as pastas `assets/` e `vendor/`. Faça isso no ramo usado pelo GitHub Pages.
3. Em **Settings → Pages**, configure **Deploy from a branch** e selecione o ramo correto e `/ (root)`.
4. Aguarde o deploy, abra o mesmo endereço no Safari e atualize. Se a versão antiga ficar em cache, feche e reabra o site/ícone da tela inicial.
5. Se tiver feito novas alterações e quiser recuperá-las em outro aparelho, importe seu backup pelo menu Preferências.

No GitHub, envie os **arquivos extraídos**, não apenas o ZIP.

## Novidades da 4.2

- Interface e catálogo com fonte **Montserrat** como padrão. O carregamento do Google Fonts depende de conexão; em modo offline usa fontes de sistema semelhantes. Georgia e Baskerville continuam disponíveis como escolhas opcionais no catálogo.
- Seletor de **nome do arquivo** na exportação, com padrão **Catálogo de serviços Yasmim Lohana**.
- Correção do desenho das fotos em páginas de apresentação, cuidados, contato, valores e demais seções (não somente capa).
- Ajuste de imagem ao quadro por recorte, arrastar e zoom, além de ajuste posterior de **tamanho da fotografia** no editor.
- Ajustes **independentes por página** de cor de fundo, cor de destaque, textura (nenhuma, linhas, grade, pontos, arcos, linho), tamanho de títulos e textos, além de controles e textos do cabeçalho e rodapé.
- Botão **Aplicar aparência em todas as páginas** copia aparência, não fotos nem conteúdo.
- **Desfazer/Refazer** no editor, com histórico de até 40 estados durante a sessão.
- **Tutorial interativo** com cinco ações reais: selecionar página, editar texto, adicionar foto, personalizar estilo e exportar.
- Cores de texto automaticamente adaptadas para contraste melhor quando uma página recebe um fundo claro ou escuro.

## Como editar no celular

1. Entre em **Catálogos** e selecione a página na faixa horizontal.
2. Toque em **Texto** (títulos, valores, descrição), **Foto** (upload, recorte e tamanho) ou **Estilo** (tipografia, fundo, texturas e cabeçalho/rodapé).
3. Em **Foto**, escolha imagem JPG, PNG ou WebP, arraste e amplie no quadro e confirme. Em seguida, ajuste o tamanho em `65–185%`. Imagens HEIC/HEIF podem precisar de conversão conforme o Safari.
4. Em **Estilo**, personalize só a página atual ou escolha **Aplicar aparência em todas as páginas**.
5. Se cometer um erro, use **Desfazer** e **Refazer** perto do botão de tutorial.
6. Toque em **Exportar**; altere o nome, escolha PNG, ZIP de imagens, PDF de alta qualidade ou otimizado. Aguarde o painel **Arquivo pronto** para baixar, abrir ou compartilhar.

## Tutorial interativo

Abra **Catálogos → Tutorial interativo**. Cada etapa muda de estado ao realizar a ação correspondente. O botão **Ir para esta etapa** orienta ou abre a ferramenta, mas **não conclui automaticamente** o passo. O progresso é salvo com o catálogo neste aparelho.

## Dados e limitações

- As alterações são gravadas por **IndexedDB**, com alternativa por `localStorage` quando disponível. Se apagar os dados do site, trocar o domínio ou usar outro aparelho, poderá precisar restaurar um backup.
- A atualização no mesmo domínio normalmente preserva o armazenamento, pois a chave IndexedDB foi mantida como `yasmim-studio-db` e `docs/main`. Mesmo assim, **faça backup antes do deploy**.
- **Desfazer e refazer são mantidos apenas durante a sessão aberta**; atualizações/recarregamentos limpam o histórico. Os dados editados, porém, são persistidos normalmente.
- GitHub Pages hospeda o código estático e **não grava os dados de volta no repositório**. Nunca insira tokens pessoais do GitHub dentro de JavaScript público.
- O catálogo exportado é baseado em imagens de página. O PDF é visualmente fiel, mas o texto no PDF não é selecionável.
- Para reduzir riscos ao compartilhar fotos de clientes, use somente imagens com autorização e não divulgue dados pessoais sem consentimento.

## Arquivos principais

- `index.html` — estrutura do aplicativo
- `style.css` — interface e responsividade
- `app.js` — navegação, formulários, editor, onboarding, histórico e exportação
- `catalog.js` — renderizador canvas, recorte/layout e criação de PDFs/PNG
- `seed.js` — 26 conteúdos originais e guias
- `sw.js` — cache PWA versão 4.2
- `manifest.webmanifest` e `assets/` — ícones/instalação
- `vendor/jszip.min.js` — geração de ZIP local sem CDN

## Testes efetuados

Verificações automatizadas com Chromium e viewport mobile simulado (390 px): seleção de páginas, edição, upload e recorte na página 2, ajustes de imagem/tamanho/textura/cor, ocultação de cabeçalho, desfazer/refazer, avanço das etapas e exportação do PDF otimizado com nome customizado. O renderizador foi testado com foto em sete tipos de página. O PDF gerado de seis páginas foi aberto com PyMuPDF e inspecionado.

**Importante:** ainda é necessário um teste final com um **iPhone físico no Safari**, sobretudo para abrir o seletor de fotos, salvar em Arquivos e verificar o funcionamento offline após publicação. Não alegamos cobertura de todos os dispositivos/versões do iOS.
