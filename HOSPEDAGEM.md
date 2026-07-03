# 🌐 Como Publicar Seu Site (Grátis)

## 🎯 Opções de Hospedagem Gratuita

### 1. 🟣 GitHub Pages (Recomendado)

**Prós:**
- ✅ 100% grátis
- ✅ SSL/HTTPS automático
- ✅ Ilimitado de sites
- ✅ Fácil de atualizar

**Passo a passo:**

1. **Criar conta no GitHub**
   - Acesse: https://github.com
   - Clique em "Sign up"
   - Use um email válido

2. **Criar novo repositório**
   - Clique no "+" no canto superior direito
   - "New repository"
   - Nome: `7pcn-site` (ou qualquer nome)
   - Marque "Public"
   - Clique "Create repository"

3. **Upload dos arquivos**
   - Na página do repositório, clique em "uploading an existing file"
   - Arraste o arquivo `7pcn_site.html`
   - **IMPORTANTE:** Renomeie para `index.html` antes de fazer upload
   - Clique em "Commit changes"

4. **Ativar GitHub Pages**
   - Vá em "Settings" (configurações)
   - No menu lateral, clique em "Pages"
   - Em "Source", selecione "main" ou "master"
   - Clique em "Save"
   - Aguarde 1-2 minutos

5. **Seu site estará em:**
   ```
   https://SEU_USUARIO.github.io/7pcn-site/
   ```

---

### 2. 🟢 Netlify

**Prós:**
- ✅ Deploy por arrastar e soltar
- ✅ HTTPS automático
- ✅ Domínio personalizado grátis

**Passo a passo:**

1. **Acesse:** https://netlify.com
2. **Clique em "Sign up"**
3. **Na dashboard, clique em "Add new site"**
4. **Escolha "Deploy manually"**
5. **Arraste a pasta com o arquivo HTML**
6. **Pronto!** URL gerada na hora: `https://nome-aleatorio.netlify.app`

**Personalizar domínio:**
- Site settings → Domain management → Add custom domain

---

### 3. 🔵 Vercel

**Prós:**
- ✅ Deploy instantâneo
- ✅ Performance excelente
- ✅ Fácil integração com GitHub

**Passo a passo:**

1. **Acesse:** https://vercel.com
2. **Clique em "Sign up" (pode usar GitHub)**
3. **Clique em "Add New Project"**
4. **Importe do GitHub** (se conectou) ou faça upload manual
5. **Deploy automático**

---

### 4. 🟠 Cloudflare Pages

**Prós:**
- ✅ CDN super rápida
- ✅ Ilimitado de banda
- ✅ HTTPS automático

**Passo a passo:**

1. **Acesse:** https://pages.cloudflare.com
2. **Criar conta**
3. **Create a project**
4. **Conectar GitHub** ou upload manual
5. **Deploy!**

---

## 📱 Opções Mobile-First

### 5. 📲 Carrd.co

**Prós:**
- ✅ Interface visual (sem código)
- ✅ Templates prontos
- ✅ Mobile-friendly

**Contras:**
- ❌ Versão grátis: 1 site apenas
- ❌ Limitado

---

## 🌍 Domínio Personalizado

### Gratuitos (para teste):

1. **Freenom** → `.tk`, `.ml`, `.ga`
   - Domínios gratuitos por 1 ano
   - https://freenom.com

2. **InfinityFree** → Subdomínio grátis
   - https://infinityfree.net

### Pagos (Recomendado):

1. **Registro.br** → `.com.br` por ~R$ 40/ano
   - https://registro.br

2. **Namecheap** → `.com` por ~$10/ano
   - https://namecheap.com

3. **GoDaddy** → Vários TLDs
   - https://godaddy.com

---

## 🔗 Configurar Domínio Personalizado

### No GitHub Pages:

1. Compre domínio (ex: `7pcnboladao.com`)
2. No painel do domínio, adicione DNS:
   ```
   Tipo: A
   Nome: @
   Valor: 185.199.108.153
   
   Tipo: CNAME
   Nome: www
   Valor: SEU_USUARIO.github.io
   ```
3. No GitHub: Settings → Pages → Custom domain
4. Digite seu domínio e salve

### No Netlify:

1. Domain settings → Add custom domain
2. Siga instruções para configurar DNS
3. SSL ativado automaticamente

---

## 📊 Comparação Rápida

| Serviço | Facilidade | Velocidade | SSL | Domínio Grátis |
|---------|------------|-----------|-----|----------------|
| GitHub Pages | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | ❌ |
| Netlify | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | `.netlify.app` |
| Vercel | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | `.vercel.app` |
| Cloudflare | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | `.pages.dev` |

---

## 🎨 Bio do Instagram

Depois de publicar, use no Instagram:

```
🎵 7PCN BOLADÃO
🔥 Trap • Beats • PCN
🎛️ FL Studio Producer

🌐 SITE/LOJA ↓
[seu-link-aqui]
```

**Dica:** Use serviço de link curto:
- Bitly: https://bitly.com
- TinyURL: https://tinyurl.com

Exemplo: `bit.ly/7pcn` fica melhor na bio!

---

## 🚀 Próximos Passos Após Publicar

1. **Teste tudo novamente** no site publicado
2. **Compartilhe nas redes sociais**
3. **Adicione na bio do Instagram**
4. **Story com o link**
5. **Acompanhe mensagens do WhatsApp**

---

## 📈 Analytics (opcional)

### Google Analytics (grátis)

1. Acesse: https://analytics.google.com
2. Crie uma propriedade
3. Copie o código de tracking
4. Cole antes do `</head>` no HTML

### Hotjar (grátis até 35 sessões/dia)

1. Acesse: https://hotjar.com
2. Crie conta
3. Instale o código de tracking
4. Veja como visitantes usam o site

---

## 🆘 Problemas Comuns

### Site não carrega
- Aguarde 2-5 minutos após deploy
- Limpe cache do navegador
- Tente em modo anônimo

### Domínio não funciona
- Propagação de DNS leva 24-48h
- Verifique configuração DNS
- Use https://dnschecker.org para verificar

### WhatsApp não abre
- Verifique o número está correto
- Teste direto: `https://wa.me/5511987654321`

---

## 💡 Dica de Ouro

**Use Netlify para começar:**
- Mais fácil de todas as opções
- Deploy em 30 segundos
- Depois pode migrar para GitHub Pages se quiser

---

## 📞 Suporte

Precisa de ajuda? Pergunte nos seguintes lugares:

- **GitHub:** https://github.com/discussions
- **Stack Overflow:** https://stackoverflow.com
- **Reddit:** r/webdev
- **YouTube:** Procure "como hospedar site HTML grátis"

---

**Bora publicar esse site! 🚀🎵**
