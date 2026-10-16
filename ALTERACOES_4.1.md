# Yasmim Studio 4.1 — Correções do editor mobile

**Atualização sobre a versão 4.0 (16 de outubro de 2026).**

## Correções

1. **Fonte Luxo:** revisão para Baskerville/Palatino/Georgia, sem ornamentos difíceis de ler. As demais famílias continuam disponíveis no menu Estilo.
2. **Editor mobile:** barra de ações próxima ao polegar (Texto, Foto, Estilo, PDF) e painel de edição inferior. A prévia fica separada e acessível sem navegar até o fundo de formulários longos. A página selecionada continua identificada no editor.
3. **Carregar fotografia:** fluxo de seleção → recorte → posicionamento por arrastar → ampliação com slider → confirmar. O arquivo é recortado para o enquadramento da página e salvo automaticamente. Um botão permite reajustar a imagem atualmente salva.
4. **Fotos em páginas específicas:** inserção também nos modelos de Contato e Valores, quando cabível.
5. **Exportação:** corrigida chamada inválida do renderizador quando existia logo na capa. Após processar o PDF/PNG/ZIP, aparece uma tela de arquivo pronto com opções Baixar, Abrir PDF e Compartilhar (quando suportado).
6. **Telas estreitas:** corrigida a largura horizontal do editor em 320 px.
7. **PWA:** versão do cache incrementada para atualizar os arquivos do site.

## Compatibilidade

- Preservado nome de IndexedDB `yasmim-studio-db` e a chave `main`; **não houve redefinição intencional dos dados existentes**.
- Antes de trocar os arquivos no repositório, faça backup em Preferências. Se o endereço do site mudar, os dados locais não migram automaticamente.
- Teste executado por navegador Chromium com viewport móvel em simulação; não houve teste diretamente em Safari físico.
- Fotos HEIC podem precisar de conversão para JPEG/PNG dependendo da versão do navegador.
- PDF otimizado reduz os bytes de imagem com compressão visual; não é exportação sem perdas bit a bit.

## Checklist de teste no iPhone

1. Abra Catálogos e escolha uma página.
2. Toque Foto e selecione uma imagem da biblioteca.
3. Arraste e altere Zoom; confirme em Usar esta foto.
4. Confira a prévia, feche/reabra o app e confirme que a foto permanece.
5. Toque PDF → Alta qualidade → Abrir PDF no Safari ou Baixar arquivo.
6. Use Compartilhar → Salvar em Arquivos, se disponível.
