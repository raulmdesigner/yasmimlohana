# Pesquisa de UI premium — Yasmim Studio 4.0

**Data:** 15 de outubro de 2026  
**Responsável pelo projeto:** Raul Designer  
**Escopo:** pesquisa de linguagem visual, diretrizes de desenvolvimento, usabilidade mobile, identidade de marca e critérios de qualidade.  
**Método:** análise de fontes públicas de design e ergonomia, auditoria da versão 3.0 e interpretação das referências visuais fornecidas. A pesquisa é qualitativa; não houve entrevistas ou testes com a cliente final.

## 1. O que significa premium neste projeto

Uma interface premium não é uma interface com mais efeitos. Para um app de planejamento editorial e catálogos, a percepção de qualidade deve surgir da **clareza operacional**, da **consistência de identidade**, do **tratamento tipográfico**, da **atenção aos detalhes** e da **confiabilidade das ações**. O ponto de partida são necessidades concretas: encontrar a próxima publicação, agendar um conteúdo, copiar uma legenda, alterar o status e editar um catálogo.

A direção escolhida é **Bordeaux Editorial**: uma composição influenciada pelo universo da beleza de posicionamento sofisticado, associando o bordô a superfícies claras, pequenos acentos dourados e títulos serifados. Isso é uma decisão criativa contextual, não uma regra universal para marcas de luxo.

**Antiobjetivos:** roxo genérico de interface de IA, saturação de cards, excesso de microetiquetas, slogans motivacionais, animações sem função, gradientes de destaque em cada seção, badges coloridas para informação comum e layouts que fazem parecer que todas as funcionalidades têm a mesma prioridade.

## 2. Aprendizados das fontes de referência

### 2.1 Byredo — luxo por edição e contenção

A linguagem pública de marcas como **Byredo** adota uma apresentação controlada dos produtos, com categorias reconhecíveis e um inventário visual contido. A leitura útil para este projeto não é copiar uma loja, mas aplicar a disciplina editorial: títulos claros, composição consistente, uso deliberado do espaço vazio e informações objetivas. A seleção de produtos e serviços precisa continuar fácil de explorar. [Byredo, site oficial](https://www.byredo.com/) e [categoria oficial](https://www.byredo.com/us_en/c/perfume/personal-fragrances/view-all-collection).

### 2.2 Apple HIG — hierarquia, adaptação e familiaridade

O **Human Interface Guidelines** recomenda compreender a plataforma, usar padrões familiares, adaptar layouts a tamanhos diferentes e tratar cor, tipografia, materiais e acessibilidade como elementos coordenados. Para o Yasmim Studio, isso se traduz em áreas de toque confortáveis, menu inferior curto no iPhone, formulários com rótulos e tratamento cuidadoso das áreas seguras. O app não precisa imitar visualmente o iOS; precisa **funcionar como um bom app no iOS**. [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines).

### 2.3 Nielsen Norman Group — comunicar, não decorar

A heurística **Aesthetic and Minimalist Design** indica que informação extra compete com informação necessária. Isso apoia remover slogans e notas redundantes. A técnica de **progressive disclosure** ajuda a mostrar inicialmente as ações mais frequentes e oferecer controles avançados quando a usuária entra na função específica. Portanto: calendário primeiro; filtros na tela de posts; fontes e preços apenas no editor de catálogo. [NN/g — Aesthetic and Minimalist Design](https://www.nngroup.com/articles/aesthetic-minimalist-design/) e [NN/g — Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/).

### 2.4 Skills públicas de frontend — direção antes de decoração

Foram analisadas como referências metodológicas as orientações disponíveis em [JetBrains/skills — frontend-design](https://github.com/JetBrains/skills/blob/main/frontend-design/SKILL.md), que atribuem valor a uma direção estética específica e à eliminação de padrões genéricos, e em [aladicf/better-web-ui — frontend-design](https://github.com/aladicf/better-web-ui/blob/main/skills/frontend-design/SKILL.md), que propõe começar pela tarefa do usuário, estabelecer hierarquia em escala de cinza, criar design tokens e polir somente no fim. **Não se afirma que essas skills foram instaladas ou executadas**; suas recomendações serviram como fontes de estudo.

### 2.5 Acessibilidade W3C — o luxo não pode diminuir a legibilidade

A WCAG 2.2 AA usa referência de **4,5:1 para texto normal** e **3:1 para texto grande** (com exceções). A WCAG 2.2 inclui tamanho mínimo de alvo, foco não obstruído e outras exigências de operação. Foram calculados alguns contrastes da paleta proposta: bordô `#430F1F` contra branco quente `#FFFCF7` ≈ **15,47:1**; dourado-claro `#E2C99F` contra bordô ≈ **9,87:1**; texto escuro `#2C2023` contra branco quente ≈ **15,34:1**; texto secundário revisado `#74686B` contra branco quente ≈ **5,21:1**. Estes cálculos **não equivalem a uma auditoria WCAG integral**. [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/).

### 2.6 Mobile, performance e modo offline

Uma PWA estática hospedada no GitHub Pages pode funcionar offline depois de adquirir seus recursos via cache. Entretanto, o service worker não controla a primeira visita e não substitui armazenamento ou sincronização de dados. No iPhone, as capacidades variam conforme a versão do Safari e o modo de instalação. Fontes remotas são opcionais e têm alternativas locais. [web.dev — Service workers](https://web.dev/learn/pwa/service-workers?hl=pt-BR).

## 3. Padrões capturados das referências enviadas pelo cliente

| Referência visual | Padrão aproveitado | O que não foi copiado |
|---|---|---|
| Cursor (interfaces de agentes) | Linguagem econômica, sistema de navegação consistente, feedback de estado, áreas densas apenas quando necessárias | Paleta azul/roxo, apresentação de código e controles técnicos desnecessários |
| Interface escura com cards (imagem 2) | Hierarquia numérica e contraste de superfícies | Neon, gradientes brilhantes, sistema de créditos e gamificação |
| Calendário esportivo (imagem 3) | Seleção explícita da data, navegação temporal simples e lista correspondente | Aposta, estatísticas de jogo e estética esportiva |
| Interface de navegação escura (imagem 4) | Barra inferior simples, espaçamento e foco no conteúdo ativo | Rosa vibrante e cards excessivamente arredondados |
| Catálogos de cílios enviados | Tipografia editorial e relação direta entre procedimento, foto e preço | Composição apertada, textos ilegíveis e catálogos muito longos em uma única página |

## 4. Sistema visual proposto

### 4.1 Paleta oficial do app

| Token | Cor | Uso previsto |
|---|---|---|
| Bordeaux principal | `#430F1F` | Sidebar, cabeçalho mobile, botões principais e painel de onboarding |
| Bordeaux profundo | `#270812` | Feedbacks e camadas escuras |
| Bordeaux médio | `#672638` | Estado ativo de navegação e pequenos destaques |
| Bordô suave | `#854457` | Marcadores e estados auxiliares |
| Dourado | `#C9A66C` | Linhas finas, monograma e ênfases pontuais sobre bordô |
| Champagne | `#E2C99F` | Ícones e destaques sobre fundo escuro |
| Porcelana | `#FFFCF7` | Cartões e superfícies de leitura |
| Fundo neutro | `#F8F5F0` | Áreas de trabalho e descanso visual |
| Texto principal | `#2C2023` | Conteúdo sobre porcelana |
| Texto secundário | `#74686B` | Metadados e explicações breves |

**Regra de uso:** bordô estabelece identidade, branco quente permite leitura e dourado sinaliza poucos pontos nobres. Dourado médio não deve ser usado indiscriminadamente como texto pequeno sobre branco.

### 4.2 Tipografia

- **Display:** Instrument Serif (ou Georgia como fallback), usado em títulos editoriais e números grandes.
- **Interface:** DM Sans (fallback de sistema), em controles, instruções e parágrafos.
- **Metadados:** DM Mono (fallback monoespaçada), em marcações de calendário, datas e categorias discretas.
- **Sistema:** três papéis tipográficos, sem saltos aleatórios de fonte e peso.

### 4.3 Composição e interação

- **Uma ação primária por tela:** no calendário, “Nova publicação”; no catálogo, “Exportar”.
- **Menu mobile:** quatro destinos persistentes: Calendário, Posts, Catálogos e Biblioteca. Preferências ficam no ícone do cabeçalho.
- **Calendário:** mês grande, seleção de hoje, marcações das datas com publicação e conteúdo do dia escolhido.
- **Fluxo orientado por evento:** passos iniciais só avançam quando a operação correspondente realmente acontece.
- **Editor de catálogo:** fluxo por páginas e campos, com preview sempre visível; adequado a celular sem exigir arrastar objetos minúsculos.
- **Animação:** microfeedback curto, sem efeitos decorativos; respeitar `prefers-reduced-motion`.

## 5. Requisitos de engenharia premium

**Confiabilidade:** cada controle deve ter uma ação verdadeira; campos precisam validar o que a usuária envia; é necessário confirmar exclusões. **Estado:** toda alteração tem status de gravação e meio de exportar backup. **Segurança:** dados locais no navegador; nenhum token de escrita do GitHub em JavaScript público. **Responsividade:** 320 px deve funcionar sem rolagem horizontal; o menu não pode ocupar a área de conteúdo. **Acessibilidade:** rótulos, foco visível, contraste e botões confortáveis ao toque. **Resiliência:** componentes essenciais independentes da conexão com Google Fonts; dados independentes do service worker. **Portabilidade:** ZIP pronto para ser copiado para a raiz de um repositório estático.

## 6. Critérios de aceite

1. Todas as 26 publicações originais continuam disponíveis.
2. O calendário identifica hoje, eventos e permite abrir cada dia.
3. Criar tarefa só é marcado após salvar um novo agendamento.
4. Abrir post só é marcado após abrir os detalhes de uma publicação.
5. Publicar conteúdo só é marcado ao selecionar “Publicado”.
6. Personalizar catálogo só é marcado após modificar o catálogo (texto, cor, página, foto ou modelo).
7. O editor mantém tipos de página, fotos, logo, preços, promoção e exportações.
8. O site é navegável nas principais larguras de iPhone e desktop.
9. A interface evita textos de efeito desnecessários e privilegia termos funcionais.
10. O sistema explica claramente que armazenamento local **não** significa sincronização com GitHub.

## 7. Fontes consultadas

- Apple: https://developer.apple.com/design/human-interface-guidelines
- Nielsen Norman Group — minimalist design: https://www.nngroup.com/articles/aesthetic-minimalist-design/
- Nielsen Norman Group — progressive disclosure: https://www.nngroup.com/articles/progressive-disclosure/
- W3C: https://www.w3.org/TR/WCAG22/
- web.dev: https://web.dev/learn/pwa/service-workers?hl=pt-BR
- Byredo: https://www.byredo.com/
- JetBrains/skills: https://github.com/JetBrains/skills/blob/main/frontend-design/SKILL.md
- aladicf/better-web-ui: https://github.com/aladicf/better-web-ui/blob/main/skills/frontend-design/SKILL.md
