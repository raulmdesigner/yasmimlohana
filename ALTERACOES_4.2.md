# Histórico técnico — v4.2

## Bugs corrigidos

1. Renderizador de imagens: a chamada `drawPhoto` nas seções `about`, `pricing`, `care`, `contact` e `custom` usava argumentos deslocados, gerando áreas vazias ou erro na exportação. Todas as chamadas agora recebem o objeto `Image` correto. O layout `graphite` da capa foi corrigido também.
2. Fundos personalizados: ao trocar o fundo bordô por branco, a cor de texto do tema não era recalculada. Agora os textos recebem contraste adaptativo em fundos personalizados.
3. Exportação de nome: o nome é lido e sanitizado antes de abrir o indicador de geração e aplicado aos formatos de download.
4. Tipografia: Montserrat virou opção padrão (interface e catálogo), migrando a preferência antiga Luxo/Editorial para Moderno quando o armazenamento v4.1 é lido.

## Recursos adicionados

- Presets de pattern: `none`, `lines`, `grid`, `dots`, `arcs`, `linen`.
- Propriedades por página: `photoScale`, `titleScale`, `bodyScale`, `headerEnabled`, `footerEnabled`, `headerText`, `footerText`, `pattern` e paleta `bg`/`accent`.
- Aplicação de estilo a todas as páginas (sem afetar imagens e textos).
- Histórico de edição em memória limitado a 40 snapshots (undo/redo).
- Tutorial contextual com estados vinculados a ações efetivas.
- Menu de exportação com nome padrão `Catálogo de serviços Yasmim Lohana`.

## Persistência e compatibilidade

- Banco IndexedDB **inalterado**: `yasmim-studio-db`, versão 1, object store `docs`, chave `main`.
- Estrutura de posts/seed e identificação das páginas mantidas. Campos v4.2 ausentes recebem defaults compatíveis.
- Progresso do tutorial fica guardado dentro do estado do catálogo; histórico de desfazer/refazer não persiste.
- `sw.js` atualizado para `yasmim-studio-v4-2-20261016-01` para renovação de cache.

## Testes e pendências

- `node --check app.js` e `node --check catalog.js`: sem erros de sintaxe.
- Playwright + Chromium, tela mobile simulada, edição e upload com recorte na segunda página: sucesso.
- Renderização de imagem em capa, sobre, procedimento, preços, cuidados, contato e página livre: sucesso.
- PDF otimizado exportado e aberto como documento PDF de seis páginas; verificação de página 2: texto legível, foto renderizada e textura aplicada.
- Um teste no Safari físico do iPhone ainda é recomendado antes de entregar para a cliente.
