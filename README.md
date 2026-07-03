# 🎵 7PCN BOLADÃO — FL Studio Site

Site profissional com visual do FL Studio para artista de trap/rap.

## 📋 Características

- ✅ Interface **idêntica ao FL Studio 20**
- 🎨 Design dark com cores do FL Studio
- 📱 Totalmente responsivo
- 🎵 Player Spotify integrado
- 🛒 Sistema de carrinho de compras
- 💬 Integração direta com WhatsApp
- 🎛️ Animações e interações profissionais

## 🔧 Configuração

### 1. Atualizar Número do WhatsApp

Procure por `5551999999999` no arquivo HTML e substitua pelo seu número real:

**Linha 1100:**
```javascript
const num='5551999999999'; // ← TROQUE PELO SEU NÚMERO
```

**Linha 853:**
```html
<a class="zap-big" href="https://wa.me/5551999999999" target="_blank">
```

### 2. Atualizar Links de Redes Sociais

Verifique e atualize os links:

- **Instagram:** `https://www.instagram.com/7pcnboladao/`
- **Spotify:** `https://open.spotify.com/artist/4EaBvk5268lNcv35sXhinc`
- **Email:** `pcnboladao@gmail.com`

### 3. Imagens

O site já está configurado com as imagens que estão na pasta:
- `imgi_2_651454321...` (foto de perfil do artista)
- Outras imagens disponíveis na pasta podem ser usadas

## 📱 Seções do Site

### 🏠 INÍCIO
- Visual playlist do FL Studio
- Overlay com nome do artista
- Player Spotify principal
- Animação EQ
- Channel Rack com canais animados

### 🛒 LOJA
- Beats exclusivos
- Feat / Parceria
- Mix & Master
- Melodias exclusivas
- Pack de drum kits
- Carrinho de compras com WhatsApp checkout

### 🎵 MÚSICAS
- Player Spotify com todas as músicas
- Links para redes sociais

### 📞 CONTATO
- Informações de contato
- Botão direto para WhatsApp
- Links para redes sociais

## 🎨 Recursos Visuais

- **Loading screen** com animação FL Studio
- **Som de inicialização** (igual ao FL Studio)
- **Barra de progresso** animada
- **Channel Rack** com meters animados
- **Beat counter** funcionando
- **Botões e controles** idênticos ao FL Studio

## 📦 Produtos na Loja

| Produto | Preço | Descrição |
|---------|-------|-----------|
| Beat Exclusivo Trap | R$ 150,00 | 100% exclusivo, cedido por contrato |
| Feat / Parceria | R$ 200,00 | Parceria com 7PCN BOLADÃO |
| Mix & Master | R$ 99,90 | Mix e masterização profissional |
| Melodia Exclusiva | R$ 79,90 | Loop melódico feito sob medida |
| Pack Drum Kit | R$ 29,90 | 808s, snares e hihats exclusivos |

## 🚀 Como Usar

1. Abra o arquivo `7pcn_site.html` em qualquer navegador moderno
2. O site carregará automaticamente com animação
3. Navegue pelas seções usando os botões no topo
4. Clientes podem adicionar produtos ao carrinho e finalizar via WhatsApp

## 🎯 Compatibilidade

- ✅ Chrome / Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (iOS / Android)

## 🔊 Funcionalidades de Áudio

- Som de inicialização FL Studio (Web Audio API)
- Player Spotify embutido
- Autoplay opcional (linha 876)

## 📝 Personalização

### Alterar Produtos

Edite o array `products` na linha 1069:

```javascript
const products=[
  {n:'NOME DO PRODUTO', d:'Descrição', p:99.90, c:'#8866ff'},
  // Adicione mais produtos aqui
];
```

### Alterar BPM

Linha 690:
```html
<div class="fl-bpm" id="flbpm">140.000</div>
```

### Alterar Cores

Todas as cores do FL Studio estão nas variáveis CSS (linhas 13-35).

## 🎵 Faixas no Background

As faixas da playlist são geradas automaticamente:
- Viola
- Cello
- Underworld
- Brass
- 808 SUB

Personalize no array `trackDefs` (linha 982).

## 📞 Suporte

Para dúvidas ou modificações:
- 📧 Email: pcnboladao@gmail.com
- 📱 WhatsApp: (atualizar com seu número)
- 📸 Instagram: @7pcnboladao

---

**Desenvolvido com ❤️ em estilo FL Studio** 🎛️
