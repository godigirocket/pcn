# ✅ CHECKLIST COMPLETO DE TESTES - PCN SITE

## 📋 TESTES BÁSICOS

### Loading
- [ ] Página carrega com loading screen
- [ ] Barra de progresso se move
- [ ] Logo FL Studio no centro
- [ ] Texto "Loading FL Studio..."
- [ ] Desaparece após ~2 segundos

### Header
- [ ] Header aparece no topo (fixo)
- [ ] Logo "🎵 PCN BOLADÃO" visível
- [ ] 4 botões: HOME, LOJA, MÚSICAS, CONTATO
- [ ] Botão HOME está ativo (laranja) inicialmente
- [ ] Botão ativo muda ao clicar

### Cursor
- [ ] Cursor padrão desaparece
- [ ] Cursor customizado (crosshair) aparece
- [ ] Segue o mouse ao mover
- [ ] Ponto branco no centro

---

## 🎵 TESTES - PIANO

### Visual
- [ ] 10 teclas aparecem na esquerda
- [ ] Teclas brancas e pretas alternadas
- [ ] Altura das teclas uniforme
- [ ] Rótulo com nota em cada tecla

### Funcionamento Mouse
- [ ] Clique em Z = C4 toca
- [ ] Clique em X = D4 toca
- [ ] Clique em C = E4 toca
- [ ] Clique em V = F4 toca
- [ ] Clique em B = G4 toca
- [ ] Clique em N = A4 toca
- [ ] Clique em M = B4 toca
- [ ] Clique em , = C5 toca
- [ ] Clique em . = D5 toca
- [ ] Clique em / = E5 toca
- [ ] Cada som é diferente (frequência correta)

### Feedback Visual
- [ ] Tecla fica laranja ao clicar
- [ ] Volta ao normal após som terminar
- [ ] Animação suave

### Funcionamento Teclado
- [ ] Pressionar Z = C4 toca
- [ ] Pressionar X = D4 toca
- [ ] Pressionar C = E4 toca
- [ ] (continuar para todas as 10 teclas)

---

## 🥁 TESTES - DRUMS

### Visual
- [ ] 6 pads aparecem na base
- [ ] Textos: KICK, SNARE, HAT, CLAP, PERC, RIM
- [ ] Pads têm altura uniforme
- [ ] Ocupam toda a largura

### Funcionamento
- [ ] Clique KICK = som grave (150Hz)
- [ ] Clique SNARE = som agudo (200Hz)
- [ ] Clique HAT = som muito agudo (300Hz)
- [ ] Clique CLAP = som de palmas (180Hz)
- [ ] Clique PERC = som agudo (400Hz)
- [ ] Clique RIM = clique seco (800Hz)
- [ ] Cada som tem decay diferente
- [ ] Sons terminam naturalmente (não cortam abruptamente)

### Feedback Visual
- [ ] Pad fica laranja ao clicar
- [ ] Volta ao normal após som
- [ ] Glow effect ao tocar
- [ ] Sombra ao redor do pad

---

## 🎹 TESTES - FL STUDIO WINDOW

### Estrutura
- [ ] Janela com borda arredondada
- [ ] Titlebar com 3 bolinhas (R, Y, G)
- [ ] Texto "PCN BOLADÃO.flp" no titulo
- [ ] Toolbar abaixo do título
- [ ] Botão Play (▶) verde
- [ ] Botão Stop (■) vermelho
- [ ] BPM display mostra "120 BPM"
- [ ] Abas: Master, Pattern

### Área Principal
- [ ] Centro com "PCN BOLADÃO" gigante
- [ ] Texto 3D com sombras
- [ ] Anéis girando ao redor (energia)
- [ ] Grid background
- [ ] Sem overflow de conteúdo

### Status
- [ ] Status bar na base diz "Ready"
- [ ] Sem erros de JavaScript (console limpo)

---

## 📱 TESTES - RESPONSIVIDADE

### Desktop (1920x1080)
- [ ] FL window ocupa ~95vw (max 1400px)
- [ ] Piano na esquerda (48px)
- [ ] Centro com PCN BOLADÃO
- [ ] Plugin rack na direita (200px)
- [ ] Drums na base
- [ ] Tudo visível e proporcionado
- [ ] Sem scrollbars horizontais
- [ ] Sem overflow

### Tablet Landscape (1024x768 simulado)
- [ ] FL window se adapta
- [ ] Piano fica menor (32px)
- [ ] Plugin rack fica menor (160px)
- [ ] PCN BOLADÃO fica menor
- [ ] Drums ocupam base
- [ ] Sem overflow
- [ ] Sem erros de layout

### Mobile Portrait (375x812 simulado)
- [ ] FL window desaparece
- [ ] Mensagem "VIRE A TELA" aparece
- [ ] Ícone 📱 visível
- [ ] Texto em português correto
- [ ] Centralizado na tela
- [ ] Animação do ícone (flutuação)

### Mobile Landscape (812x375 simulado)
- [ ] FL window aparece
- [ ] Componentes se adaptam
- [ ] Piano muito pequeno
- [ ] Centro com PCN BOLADÃO legível
- [ ] Plugin rack pequeno
- [ ] Drums na base
- [ ] Sem overflow
- [ ] Funciona (toca piano/drums)

### Resize Dinâmico
- [ ] Redimensionar janela = sem bugs
- [ ] Elementos se realocam suavemente
- [ ] Nenhum elemento sobrepõe outro
- [ ] Sem layout shifts bruscos

---

## 🔐 TESTES - PROTEÇÃO ANTI-CLONE

### Bloqueios
- [ ] Clique direito = bloqueado (sem menu)
- [ ] F12 = bloqueado (não abre DevTools)
- [ ] F11 = funciona (permite maximizar)
- [ ] Ctrl+Shift+I = bloqueado
- [ ] Ctrl+Shift+J = bloqueado
- [ ] Ctrl+Shift+C = bloqueado
- [ ] Ctrl+U = bloqueado
- [ ] Ctrl+S = bloqueado

### Restrições
- [ ] Não pode selecionar texto com mouse
- [ ] Não pode arrastar elementos
- [ ] Não pode copiar código
- [ ] Não pode inspecionar elementos

---

## 🎯 TESTES - NAVEGAÇÃO

### Botões Header
- [ ] Clique HOME = vai para home
- [ ] Clique LOJA = vai para loja
- [ ] Clique MÚSICAS = vai para músicas
- [ ] Clique CONTATO = vai para contato

### Indicador Ativo
- [ ] HOME tem background laranja (inicial)
- [ ] Ao clicar LOJA = LOJA fica laranja, HOME volta
- [ ] Ao clicar MÚSICAS = MÚSICAS fica laranja
- [ ] Ao clicar CONTATO = CONTATO fica laranja

### Transição
- [ ] Seções desaparecem suavemente
- [ ] Nova seção aparece
- [ ] Scroll volta ao topo

### Seção LOJA
- [ ] Título "LOJA" em laranja
- [ ] 6 cards aparecem em grid
- [ ] Cards têm ícones: 🎧 🎹 🎤 🔊 📱 🎵
- [ ] Preços em laranja
- [ ] Cards têm efeito hover (levantam)

### Seção MÚSICAS
- [ ] Título "MÚSICAS" em laranja
- [ ] Spotify player embed aparece
- [ ] Player é responsivo

### Seção CONTATO
- [ ] Título "CONTATO" em laranja
- [ ] Email visível
- [ ] Telefone visível
- [ ] Link WhatsApp verde
- [ ] Botão WhatsApp clicável

---

## ⚡ TESTES - PERFORMANCE

### Carregamento
- [ ] Página carrega em menos de 3 segundos
- [ ] Sem lag ao interagir
- [ ] Sons tocam instantaneamente

### Interatividade
- [ ] Clique no piano = responde <100ms
- [ ] Clique nos drums = responde <100ms
- [ ] Navegação = resposta imediata
- [ ] Cursor segue smooth (sem travos)

### Memória
- [ ] Página não fica lenta após usar piano/drums por tempo
- [ ] Sem memory leaks (comportamento consistente)

---

## 🎨 TESTES - VISUAL

### Cores
- [ ] Laranja (#ff6a00) em elementos principais
- [ ] Preto/cinza escuro no fundo
- [ ] Branco no texto principal
- [ ] Cinza no texto secundário

### Typography
- [ ] "Bebas Neue" para títulos (PCN BOLADÃO)
- [ ] "Inter" para textos
- [ ] Tamanhos proporcionados
- [ ] Legibilidade excelente

### Efeitos
- [ ] Sombra em elementos (profundidade)
- [ ] Glow laranja em hover
- [ ] Gradients suaves
- [ ] Animações fluidas

---

## 🧪 TESTES - CROSS-BROWSER

### Chrome
- [ ] Funciona 100%
- [ ] Sons tocam
- [ ] Layout correto

### Firefox
- [ ] Funciona 100%
- [ ] Sons tocam
- [ ] Layout correto

### Safari
- [ ] Funciona 100%
- [ ] Sons tocam
- [ ] Layout correto

### Edge
- [ ] Funciona 100%
- [ ] Sons tocam
- [ ] Layout correto

---

## 🔊 TESTES - AUDIO WEB API

### Piano
- [ ] Frequências corretas para cada nota
- [ ] Decay suave (som diminui naturalmente)
- [ ] Attack rápido (som começa imediato)
- [ ] Volume adequado (não muito alto/baixo)

### Drums
- [ ] Cada drum tem frequência diferente
- [ ] Kick é grave (150Hz)
- [ ] Snare é agudo (200Hz)
- [ ] Hat é muito agudo (300Hz)
- [ ] Sons não distorcem
- [ ] Não perde qualidade

---

## 📊 RESUMO DO CHECKLIST

### Obrigatório (Deve 100% funcionar)
- [ ] Piano toca sons
- [ ] Drums toca sons
- [ ] Navegação funciona
- [ ] Mobile portrait mostra mensagem
- [ ] Mobile landscape mostra FL Studio
- [ ] Desktop mostra FL Studio completo
- [ ] Proteção anti-clone ativa
- [ ] Sem overflow em qualquer resolução

### Desejável (Deve estar bom)
- [ ] Animações suaves
- [ ] Performance ótima
- [ ] Visual profissional
- [ ] Cursor customizado
- [ ] Efeitos de hover

### Extra (Valores agregados)
- [ ] Spotify funcionando em MÚSICAS
- [ ] WhatsApp link funcional
- [ ] Grid de produtos na LOJA
- [ ] Todos os browsers suportados

---

## ✅ RESULTADO FINAL

Se **TODOS** os itens acima estão marcados ✅, o site está **100% funcional e pronto para produção!**

Parabéns! 🎉
