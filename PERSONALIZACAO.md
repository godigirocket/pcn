# 🎨 Guia de Personalização Detalhado

## 📍 Atualizações Obrigatórias

### 1. ☎️ Número do WhatsApp

**IMPORTANTE:** O site tem 2 lugares com o número placeholder que você DEVE atualizar:

#### Local 1: Botão da página de contato (linha 853)
```html
<a class="zap-big" href="https://wa.me/5551999999999" target="_blank">
```
👉 Mude para:
```html
<a class="zap-big" href="https://wa.me/55SEU_DDD_NUMERO" target="_blank">
```

#### Local 2: Função de checkout (linha 1100)
```javascript
const num='5551999999999'; // ← TROQUE PELO SEU NÚMERO
```
👉 Mude para:
```javascript
const num='55SEU_DDD_NUMERO'; // Exemplo: 5511987654321
```

**Formato correto:** `55` + `DDD` + `NÚMERO`
- Exemplo: `5511987654321` (SP)
- Exemplo: `5521987654321` (RJ)

---

## 🔗 Links de Redes Sociais

### Instagram
Procure por: `https://www.instagram.com/7pcnboladao/`

**Aparece em 4 lugares:**
1. Linha 768 (botão no overlay da playlist)
2. Linha 836 (links na seção músicas)
3. Linha 848 (seção contato)

### Spotify
Procure por: `https://open.spotify.com/artist/4EaBvk5268lNcv35sXhinc`

**Aparece em 3 lugares:**
1. Linha 769 (botão no overlay)
2. Linha 837 (links na seção músicas)
3. Linha 849 (seção contato)

**Players Spotify (3 lugares):**
1. Linha 773 (player no overlay) - Track específica
2. Linha 834 (player na seção músicas) - Perfil do artista
3. Linha 876 (player oculto com autoplay)

### Email
Procure por: `pcnboladao@gmail.com`

**Aparece em 2 lugares:**
1. Linha 838 (link na seção músicas)
2. Linha 848 (seção contato)

---

## 🛍️ Personalizar Produtos da Loja

### Localização: Linha 1069

```javascript
const products=[
  {n:'BEAT EXCLUSIVO TRAP',  d:'100% exclusivo, cedido por contrato', p:150.00, c:'#8866ff'},
  {n:'FEAT / PARCERIA',      d:'Parceria com 7PCN BOLADÃO',          p:200.00, c:'#ff8800'},
  {n:'MIX & MASTER',         d:'Mix e masterização profissional',    p:99.90,  c:'#44cccc'},
  {n:'MELODIA EXCLUSIVA',    d:'Loop melódico feito sob medida',     p:79.90,  c:'#ff77bb'},
  {n:'PACK DRUM KIT',        d:'808s, snares e hihats exclusivos',   p:29.90,  c:'#44aaff'},
];
```

**Campos:**
- `n:` Nome do produto (curto)
- `d:` Descrição
- `p:` Preço (use ponto, ex: 99.90)
- `c:` Cor em hexadecimal

**Adicionar novo produto:**
```javascript
{n:'SEU PRODUTO', d:'Descrição do produto', p:49.90, c:'#ff0000'},
```

---

## 🎵 Personalizar Track da Playlist

### Localização: Linha 773

**Track atual:**
```html
<iframe src="https://open.spotify.com/embed/track/5ZSZ5sS0yh1kED2DY14dcX?..."
```

**Como pegar o ID da track:**
1. Abra a música no Spotify
2. Clique em "Compartilhar" → "Copiar link"
3. O link será: `https://open.spotify.com/track/ID_DA_MUSICA`
4. Copie apenas o ID e substitua

---

## 🖼️ Alterar Imagem de Fundo

### Localização: Linha 410

```css
background:url('https://instagram.fpoa39-1.fna.fbcdn.net/v/t51.82787-19/651454321...') center/cover no-repeat;
```

**Opções:**

### 1. Usar imagem local
```css
background:url('imgi_32_464298985_17943959666865619_7484067345195022157_n.jpg') center/cover no-repeat;
```

### 2. Usar outra URL
Suba sua imagem para Imgur, Cloudinary ou similar e use a URL.

---

## 🎨 Personalizar Cores do FL Studio

### Localização: Linhas 13-35

```css
:root{
  --fl-orange: #ff8c00;    /* Cor principal (laranja FL) */
  --fl-green: #a8e040;     /* Verde (play, meters) */
  --fl-red: #ff5544;       /* Vermelho (rec) */
  --fl-blue: #5599ff;      /* Azul */
  --fl-purple: #aa77ff;    /* Roxo */
  --fl-lcd: #c8f000;       /* Verde LCD (preços) */
}
```

**Mude essas variáveis para alterar todo o esquema de cores do site.**

---

## ⏱️ Alterar BPM

### Localização: Linha 690

```html
<div class="fl-bpm" id="flbpm">140.000</div>
```

Mude para o BPM das suas tracks (ex: `170.000` para drum and bass).

---

## 🎹 Personalizar Canais do Channel Rack

### Localização: Linha 1037

```javascript
const chDefs=[
  {n:'HOST 1',   c:'#ff8800'},
  {n:'HARMOR',  c:'#ff4466'},
  {n:'808 SUB', c:'#ff6600'},
  // ... adicione mais
];
```

**Campos:**
- `n:` Nome do canal (máx 8 caracteres)
- `c:` Cor em hex

---

## 🎼 Personalizar Faixas da Playlist

### Localização: Linha 982

```javascript
const trackDefs=[
  {name:'Viola',   color:'#8866ff', blocks:[{w:72,x:0},{w:48,x:80}]},
  {name:'Cello',   color:'#8866ff', blocks:[{w:300,x:0,wave:true}]},
];
```

**Campos:**
- `name:` Nome da faixa
- `color:` Cor
- `blocks:` Array de blocos
  - `w:` largura em pixels
  - `x:` posição em pixels
  - `wave:` true para waveform, false para notas

---

## 🔊 Desabilitar Som de Inicialização

### Localização: Linha 945

**Comentar a linha:**
```javascript
// playFLSound();  // <-- desabilitado
runLoader();
```

---

## 🎵 Desabilitar Autoplay do Spotify

### Localização: Linha 876

**Remover ou comentar:**
```html
<!-- 
<iframe src="https://open.spotify.com/embed/track/...?autoplay=1" ...></iframe>
-->
```

---

## 📊 Personalizar Animações EQ

### Localização: Linha 1017

```javascript
const data=[
  {h:'12px',d:'0.55s',dl:'0s',c:'var(--fl-green)'},
  // ... mais barras
];
```

**Campos:**
- `h:` altura máxima
- `d:` duração da animação
- `dl:` delay
- `c:` cor

---

## 📱 Ajustes Mobile

### Localização: Linhas 579-586

```css
@media(max-width:600px){
  .fl-browser{display:none}
  /* ... mais ajustes */
}
```

Ajuste o breakpoint (`600px`) conforme necessário.

---

## 🎯 Mensagem do WhatsApp Checkout

### Localização: Linha 1097

```javascript
let msg='Olá! Quero comprar:\n\n';
cart.forEach(i=>{msg+=`• ${i.name} (x${i.qty}) — R$ ${(i.price*i.qty).toFixed(2)}\n`;});
msg+=`\n*TOTAL: R$ ${total.toFixed(2)}*\n\nAguardo! 🙏`;
```

Personalize a mensagem conforme seu estilo.

---

## 💡 Dicas

1. **Sempre faça backup** antes de editar
2. **Teste no navegador** após cada mudança
3. **Use Ctrl+F** para encontrar rapidamente
4. **Valide o HTML** em validator.w3.org se tiver problemas
5. **Cache do navegador:** Ctrl+Shift+R para forçar reload

---

## 🆘 Problemas Comuns

### WhatsApp não abre
- Verifique o formato: `5511987654321` (sem espaços, traços ou parênteses)

### Spotify não carrega
- Verifique se o link está correto
- Teste o link direto no navegador

### Imagem não aparece
- Verifique o caminho do arquivo
- Use caminho relativo: `imgi_32_...jpg`

### Site não atualiza
- Limpe o cache: Ctrl+Shift+R
- Tente em modo anônimo

---

**Boa sorte com seu site! 🎵🔥**
