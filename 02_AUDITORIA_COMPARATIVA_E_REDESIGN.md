# Auditoria comparativa e redesenho — Yasmim Studio 3.0 → 4.0

**Base auditada:** arquivos `index.html`, `style.css`, `app.js`, `catalog.js`, `seed.js`, `sw.js`, `manifest.webmanifest` da versão 3.0 fornecida na conversa, além de capturas de tela de suas áreas principais.  
**Data:** 15/10/2026.  
**Escopo:** avaliação heurística e inspeção de código; não representa pesquisa com usuários reais nem certificação de acessibilidade.

## 1. Diagnóstico da versão 3.0

### Identidade e percepção de marca

- A cor base da estrutura da v3.0 era próxima do grafite: `#17191e` no meta tema e `#181b23` no manifesto. Elementos e marcadores empregavam um acento entre lilás e roxo, inclusive no calendário. Isso não correspondia à identidade bordô/branco/dourado solicitada.
- O cabeçalho incluía termos e mensagens como “WORKSPACE”, “SEU ESPAÇO CRIATIVO”, “Crie com intenção.” e “Menos organização complicada. Mais tempo para o que importa.”. Para uma ferramenta privada de trabalho, essas frases concorriam com conteúdos de alta utilidade, sem auxiliar a realização de tarefas.
- O dashboard exibia faixas inspiracionais, cards de contadores, calendário, painel de data selecionada, checklist, próximos conteúdos e uma propaganda interna do editor. A densidade total aumentava a sensação de montagem por componentes genéricos.
- A v3.0 possuía recursos úteis (26 posts, guias, editor em canvas, exportações, IndexedDB e PWA); o problema principal era **priorização visual e coerência**, não ausência de funcionalidades.

### Fluxo funcional e onboarding

- No código antigo, `setup-catalog` marcava a etapa como concluída apenas ao navegar para Catálogos, mesmo sem alterar nada.
- A flag `completed` também era acionada para qualquer status diferente de `pending`. Assim, selecionar “Em produção” já podia concluir a etapa, embora ela se referisse a organizar ou concluir um post.
- `viewpost` era marcado ao abrir os detalhes, e `created` ao salvar um post. Essas duas ações já seguiam a ideia correta de progresso por evento.
- A introdução aparecia automaticamente como modal; isso poderia interromper o acesso imediato ao calendário em visitas iniciais.

### Interface do editor de catálogo

- A estrutura de páginas predefinidas, preview em canvas e exportador local é uma base tecnicamente reaproveitável.
- A organização tinha excesso de comandos expostos simultaneamente. A escolha de tema usava opções visuais heterogêneas, como Graphite com acento roxo, aumentando a distância em relação à marca.
- Sem imagens reais, valores ou logo definitiva fornecidos, o catálogo precisa ser avaliado como **modelo funcional**, não peça final aprovada para cliente.

### Armazenamento e atualização

- Os dados ficam em IndexedDB, com fallback de `localStorage`, portanto não são arquivos commitados no GitHub Pages.
- Trocar o código **na mesma origem** pode preservar os dados do navegador, mas isso não é garantia universal: mudanças de origem, apagamento dos dados do site, modo privado ou incompatibilidade de esquema podem causar perda.
- Como a versão 4.0 será publicada em um **novo repositório**, será uma origem/URL diferente. O armazenamento anterior não será automaticamente transportado: use o recurso **Exportar backup** da versão antiga e **Importar backup** na nova, se houver dados existentes.

## 2. Comparativo de arquitetura visual e uso

| Dimensão | Versão 3.0 | Versão 4.0 | Benefício esperado |
|---|---|---|---|
| Paleta | Grafite + lilás + cores heterogêneas | Bordô principal + porcelana + champagne/dourado | Consistência de marca |
| Tipografia | Ênfase em sans padrão, títulos similares a SaaS | Instrument Serif/Georgia + DM Sans + mono pontual | Atmosfera editorial sem perder legibilidade |
| Home | Dashboard com muitos blocos de peso semelhante | Hero institucional breve + calendário prioritário | Primeira ação mais evidente |
| Navegação mobile | Cinco itens, incluindo ajustes | Quatro itens; ajustes no cabeçalho | Menos escolhas permanentes |
| Linguagem | Slogans e textos afetivos por toda a interface | Termos operacionais, datas e ações concretas | Menos ruído semântico |
| Onboarding | Tour modal e flags por navegação | Checklist visível, vinculado a eventos reais | Feedback honesto e progressão verificável |
| Catálogos | Cinco temas com cores variadas | Cinco temas dentro de uma família bordô/rosé/marfim | Saída visual consistente |
| Dados | IndexedDB e backups | Continuidade do mecanismo IndexedDB e backups | Operação estática sem backend |
| Créditos | Presença no rodapé e sidebar | Créditos discretos de Raul Designer no rodapé e sidebar | Assinatura profissional sem competir com conteúdo |
| Exportação | PNG/ZIP/PDF/PDF otimizado | Recursos preservados no renderizador | Não perder funcionalidades valiosas |

## 3. Fluxos implementados na v4.0

### A. Calendário

Ao entrar, a usuária encontra a página Calendário. O dia atual é destacado, os dias com publicações recebem uma marcação e a seleção altera a lista da data. As setas navegam entre meses; o botão central volta para hoje. O botão principal cria uma publicação. O painel lateral apresenta as próximas publicações e os primeiros passos, sem banners motivacionais.

### B. Publicações

Lista cronológica com data legível, tipo, título, instrução resumida e status. É possível filtrar, buscar, abrir o post, alterar o status, editar todos os campos, copiar legenda, criar novos agendamentos e excluir. O conteúdo original de novembro e dezembro de 2026 foi preservado em `seed.js`.

### C. Primeiros passos — eventos que contam

| Passo | Critério efetivo de conclusão |
|---|---|
| Abrir uma publicação | A função `openPost` é executada com ID existente |
| Criar um agendamento | Novo registro válido é adicionado com `savePost` (não vale apenas abrir o formulário) |
| Marcar um post como publicado | Status de um post muda para `published` |
| Personalizar o catálogo | O usuário muda título/descrição/cor/tema, envia imagem ou acrescenta/duplica página |

O painel não permite marcar uma etapa clicando em um checkbox decorativo. A barra é recalculada a partir das flags registradas após os eventos. As flags ficam no mesmo armazenamento local dos conteúdos.

### D. Catálogo de procedimentos

Permanece um editor por páginas, incluindo: capa, sobre mim, procedimento, preços, cuidados, contato e página livre. O usuário pode criar, reordenar, duplicar e remover páginas, inserir imagem, adicionar logo, escolher fontes e uma das cinco variantes de tema, editar títulos e descrição, valores de aplicação/manutenção, valor anterior e promoção. Há pré-visualização e quatro formatos de exportação: página PNG, todas as páginas em ZIP, PDF alta qualidade e PDF otimizado para compartilhamento.

**Limites intencionais:** não é um editor vetorial com posicionamento livre; PDF é composto por páginas rasterizadas, sendo indicado para distribuição digital. A versão otimizada reduz peso com compressão, mas **não preserva absolutamente toda a informação de uma imagem original**. Para offset e impressão profissional, é necessário avaliar sangria, DPI e produção gráfica.

### E. Dados, autoria e PWA

- Site de Raul Designer: https://rauldesigner.com.br
- Instagram profissional: https://instagram.com/rauldesigner
- Aplicativo publicável na raiz de um novo repositório GitHub Pages.
- Manifesto PWA, ícones provisórios bordô/dourado e service worker versionado.
- Indexação por buscadores não é objetivo principal, pois a ferramenta pode conter textos e materiais internos. GitHub Pages é público; **não inclua senhas, números de clientes, fotos sem consentimento ou dados sensíveis no código publicado**.
- Não há login, compartilhamento multiusuário ou gravação automática em repositório. Para sincronização segura de dados entre aparelhos será necessário backend com autenticação, como um banco com regras de acesso apropriadas.

## 4. Validações técnicas realizadas

**Ambiente:** Chromium headless com conteúdo injetado localmente (não teste em dispositivo Apple físico). O acesso HTTP interno do navegador de testes estava restringido pelo ambiente, portanto as interações foram testadas com scripts CSS/JS inseridos diretamente no documento. Esse método valida renderização e handlers, mas **não valida o comportamento de instalação ou armazenamento persistente por origem HTTPS real**.

- **320 px:** página renderizada sem rolagem horizontal e sem exceções JavaScript registradas no cenário testado.
- **390 px:** navegação, calendário e fluxo completo das quatro etapas: 0/4 → 1/4 ao abrir post → 2/4 ao salvar post → 3/4 ao publicar → 4/4 ao editar catálogo. Nenhum erro JavaScript registrado no cenário.
- **1440 px:** layout desktop sem rolagem horizontal e sem exceções registradas.
- **Catálogo:** prévia em canvas de 800 × 1120, seis páginas no modelo inicial. Gerador produziu em teste um PDF válido com cabeçalho `%PDF-1.4`, cerca de **344 KB (otimizado)** e **1,17 MB (alta qualidade)**. Tamanho é apenas um exemplo com conteúdo padrão, não limite nem promessa.
- **Integridade estática:** scripts `app.js` e `catalog.js` passaram por verificação de sintaxe com Node.

**Não foi validado:** Safari/iOS real; fluxo completo do compartilhamento por AirDrop/Arquivos; persistência de IndexedDB entre instalações no iPhone; captura fotográfica ao vivo; auditoria WCAG sistemática; impressão profissional dos PDFs; sincronização entre aparelhos.

## 5. Matriz de riscos e recomendações

| Risco | Severidade | Tratamento |
|---|---|---|
| Dados perdidos ao mudar de repositório/domínio | Alto | Exportar e importar backup JSON |
| Armazenamento Safari sujeito a políticas de limpeza | Alto | Backups periódicos; não tratar o navegador como banco compartilhado |
| Repositório público com dados confidenciais | Alto | Não subir dados privados de pacientes/clientes; conteúdo de exemplo genérico |
| Textos originais com promessas fortes (“100% seguro”, “zero dor”) | Médio | Revisar com profissional responsável antes de usar em material público |
| Fonte online indisponível durante uso offline | Baixo | Fallback Georgia e fonte de sistema |
| PDF rasterizado para gráfica | Médio | Usar fluxo especializado para gráfica quando necessário |
| Serviço de cache servindo versão antiga | Médio | Versão de cache atualizada; reabrir/recarregar após implantação |
| Acessibilidade insuficiente em alguns microtextos | Médio | Auditoria completa em aparelhos reais e revisão de contrastes individuais |

## 6. Instrução para implantação em novo repositório

1. Crie um repositório vazio, por exemplo `yasmim-studio`.
2. Envie **o conteúdo da pasta `Yasmim_Studio_4.0`** para a raiz do repositório (o `index.html` precisa ficar na raiz; pastas `vendor/` e `assets/` também precisam acompanhar).
3. Ative GitHub Pages em `Settings → Pages → Deploy from a branch → main → /(root)`.
4. Visite a URL `https://SEU-USUARIO.github.io/yasmim-studio/` no Safari do iPhone.
5. Execute o teste real: criar publicação, atualizar status, editar catálogo, exportar PDF, fechar/abrir e verificar se as edições permanecem.
6. Abra o menu Compartilhar do Safari e escolha Adicionar à Tela de Início.
7. Guarde o primeiro backup após preencher as informações profissionais.

**Importante para atualizar depois:** se mudar apenas os arquivos do projeto **mantendo a mesma URL**, os dados normalmente permanecem armazenados naquela origem, mas nenhuma atualização deve dispensar backup. Se mudar para outro repositório com URL diferente, a transferência deve ser feita por backup manual.

## 7. Próxima fase, se desejada

Após teste no iPhone real, as prioridades recomendadas são: aprovação da logo definitiva, revisão de conteúdo e catálogo pela profissional, testes de VoiceOver/zoom, checklist de exportação nas versões de Safari usadas e, se necessário, sincronização segura multiusuário com autenticação. Não adicionar backend apenas para alterar a aparência de um site estático.

## 8. Resultado da auditoria

A versão 4.0 abandona a estética genérica de painel SaaS e adota uma identidade visual fundamentada em uso real. A alteração mais importante é estrutural: a experiência começa pelo **calendário e pelas ações que a cliente precisa realizar**, em vez de um dashboard ornamental. O catálogo continua como ferramenta poderosa, mas a complexidade aparece dentro da área em que ela faz sentido.

**Autoria:** Raul Designer — https://rauldesigner.com.br — https://instagram.com/rauldesigner
