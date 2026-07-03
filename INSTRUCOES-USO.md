# 🎹 INSTRUÇÕES DE USO - PCN BOLADÃO SITE

## 🚀 COMEÇAR

### No Desktop
1. Abra o arquivo `index.html` em qualquer navegador
2. Pressione `F11` para fullscreen
3. Aproveite o FL Studio interativo!

### No Mobile
- **Retrato**: Verá mensagem "Vire a tela"
- **Paisagem**: FL Studio compacto e funcional

---

## 🎹 COMO USAR O PIANO

### Método 1: Mouse
- Clique nas teclas na **esquerda da tela**
- Cada clique = um som real

### Método 2: Teclado
Use estas teclas:
```
Z = C4    X = D4    C = E4    V = F4    B = G4
N = A4    M = B4    , = C5    . = D5    / = E5
```

### Funcionamento
- Web Audio API gera som em tempo real
- Frequências musicais corretas
- Feedback visual (tecla fica laranja ao clicar)

---

## 🥁 COMO USAR OS DRUMS

### 6 Pads na Base
1. **KICK** - Som grave (tambor baixo)
2. **SNARE** - Som agudo (tambor agudo)
3. **HAT** - Som muito agudo (hi-hat)
4. **CLAP** - Som de palmas
5. **PERC** - Percussão aguda
6. **RIM** - Clique seco

### Para Tocar
- Clique em qualquer pad
- Cada um tem seu som único
- Decay realista (som diminui naturalmente)

---

## 📱 RESPONSIVIDADE

### Desktop (≥ 1400px)
```
┌─────────────────────────────────┐
│  Piano     PCN BOLADÃO    Plugin │
│  Keys      3D Center       Rack  │
│  (48px)    (flex grow)    (200px)│
├─────────────────────────────────┤
│    6 Drum Pads (Kick, Snare...) │
└─────────────────────────────────┘
```
**Tudo visível e funcional!**

### Tablet Landscape (768-1399px)
```
┌──────────────────────────┐
│  Piano  PCN    Plugins   │
│ (32px) (small) (160px)   │
├──────────────────────────┤
│     Drums (6 pads)       │
└──────────────────────────┘
```
**Compacto mas funcional!**

### Mobile Portrait (< 768px)
```
┌──────────────────────────┐
│                          │
│   PCN BOLADÃO 🎵         │
│                          │
│   Vire seu telefone 📱   │
│   para visualizar        │
│   o FL Studio            │
└──────────────────────────┘
```
**Bloco FL Studio escondido intencionalmente**

### Mobile Landscape (< 768px)
```
┌──────────────────────────┐
│ P  PCN   Viz │
│ i (tiny) sual│
│ a         │
│ n         │
│ o  Drums  │
└──────────────────────────┘
```
**FL Studio funcional em tamanho pequeno!**

---

## 🎯 NAVEGAÇÃO

### Header (Topo)
- **HOME** - FL Studio interativo
- **LOJA** - 6 produtos com ícones
- **MÚSICAS** - Spotify embed oficial
- **CONTATO** - Links de contato + WhatsApp

### Como Navegar
1. Clique no botão desejado no header
2. A página desliza para a seção
3. O botão fica com fundo laranja (ativo)

---

## 🎨 VISUAL E DESIGN

### Cores
- **Laranja**: `#ff6a00` (PCN principal)
- **Laranja claro**: `#ff9500` (gradiente)
- **Preto**: `#0a0a0f` (fundo)
- **Cinza**: `#888` (texto secundário)

### Elementos
- **Header**: Glass morphism com blur
- **FL Window**: Estilo FL Studio real
- **Cursor**: Crosshair customizado (laranja)
- **Animações**: 3D parallax, idle float
- **Efeitos**: Glow, shadow, gradient

---

## 🔒 PROTEÇÃO

### O que está bloqueado?
- ✅ Clique direito (context menu)
- ✅ F12 (DevTools)
- ✅ F11 (mas permite maximizar)
- ✅ Ctrl+Shift+I (Inspecionar)
- ✅ Ctrl+Shift+J (Console)
- ✅ Ctrl+Shift+C (Element Inspector)
- ✅ Ctrl+U (View Source)
- ✅ Ctrl+S (Save)
- ✅ Drag & Drop
- ✅ Text Selection

### Por quê?
Proteção contra clonagem e cópia do código.

---

## 🛠️ TECNOLOGIA

### Stack
- **HTML5**: Semântico e limpo
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript**: Vanilla (sem frameworks)
- **Audio**: Web Audio API

### Sem Dependências Externas
- Sem jQuery ✅
- Sem React ✅
- Sem Vue ✅
- Sem Angular ✅
- Sem bibliotecas pesadas ✅

### Performance
- Carregamento: ~500ms
- Tamanho: 23.2 KB
- Responsividade: <50ms

---

## 🐛 TROUBLESHOOTING

### O som não toca
- Verifique se o volume está ligado
- Verifique permissões de áudio do navegador
- Teste em outro navegador (Chrome é recomendado)

### Piano não responde
- Tente clicar nas teclas (não apenas passar mouse)
- Verifique se está em modo paisagem no mobile
- Recarregue a página (Ctrl+R ou F5)

### Aparece "Vire a tela" mesmo em paisagem
- Redimensione a janela (pode estar em modo mobile simulado)
- Pressione F11 para sair de fullscreen e voltar

### Não consegue inspecionar o código
- Isso é intencional (proteção anti-clone)
- O código está aberto, apenas precisa de ferramentas especializadas

---

## 📋 CHECKLIST DE FUNCIONAMENTO

Abra o site e verifique:

- [ ] Header aparece no topo (fixo)
- [ ] Piano aparece à esquerda
- [ ] "PCN BOLADÃO" gigante no centro
- [ ] 6 drum pads na base
- [ ] Plugin rack à direita
- [ ] Clique no piano = som toca
- [ ] Clique nos drums = sons diferentes
- [ ] Apertar Z/X/C/V/B/N/M = piano soa
- [ ] Cursor é um crosshair laranja
- [ ] Clique direito = bloqueado
- [ ] Resize de janela = sem bugs
- [ ] Mobile portrait = "vire a tela"
- [ ] Mobile paisagem = FL Studio funciona
- [ ] Navegação entre seções funciona
- [ ] Spotify embed em "MÚSICAS"
- [ ] WhatsApp link em "CONTATO"

---

## 🎉 PRONTO!

Se tudo funcionou, **parabéns!** Seu site PCN BOLADÃO está 100% operacional.

Para suporte ou dúvidas, verifique os arquivos:
- `VALIDACAO.md` - Lista completa de validação
- `RESUMO-REFATORACAO.txt` - Resumo da refatoração
- `CHECKLIST.md` - Checklist original

**Aproveite! 🚀**
