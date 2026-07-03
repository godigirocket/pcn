<script>
document.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('keydown',e=>{
  if(['F12','F11'].includes(e.key)||(e.ctrlKey&&e.shiftKey&&['i','I','j','J','c','C'].includes(e.key))||(e.ctrlKey&&['u','U','s','S'].includes(e.key))){e.preventDefault();e.stopPropagation();return false;}
},true);
document.addEventListener('dragstart',e=>e.preventDefault());
document.addEventListener('selectstart',e=>e.preventDefault());
</script>

<!-- CURSOR -->
<div id="cur"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.5)" stroke-width="1"/><line x1="11" y1="3" x2="11" y2="9" stroke="#ff6a00" stroke-width="1.5" stroke-linecap="round"/><line x1="11" y1="13" x2="11" y2="19" stroke="#ff6a00" stroke-width="1.5" stroke-linecap="round"/><line x1="3" y1="11" x2="9" y2="11" stroke="#ff6a00" stroke-width="1.5" stroke-linecap="round"/><line x1="13" y1="11" x2="19" y2="11" stroke="#ff6a00" stroke-width="1.5" stroke-linecap="round"/><circle cx="11" cy="11" r="1.5" fill="#ff8c00"/></svg></div>
<div id="cur-dot"></div>

<!-- PRESAVE POPUP -->
<div id="presave-overlay">
  <div id="presave-box">
    <div class="pp-bar">
      <span class="pp-dot r" onclick="closePresave()"></span>
      <span class="pp-dot y"></span><span class="pp-dot g"></span>
      <span style="font-size:10px;color:#555;margin:0 auto;">Novo Lançamento — KANKIU</span>
      <span onclick="closePresave()" style="color:#555;font-size:15px;cursor:pointer;">✕</span>
    </div>
    <div class="pp-body">
      <img class="pp-cover" src="https://i.imgur.com/DMZ6WBT.png" alt="KANKIU">
      <div class="pp-tag"><i class="fa-solid fa-music"></i> Agora Disponível</div>
      <div class="pp-artist">KANKIU</div>
      <div class="pp-release">PCN BOLADÃO · Salve na sua biblioteca</div>
      <a class="pp-btn" href="https://onerpm.link/750177162510" target="_blank" onclick="closePresave()"><i class="fa-brands fa-spotify"></i> SALVAR / PRÉ-SAVE</a>
      <span class="pp-skip" onclick="closePresave()">Agora não</span>
    </div>
  </div>
</div>

<!-- LOADING -->
<div id="loading">
  <img src="https://upload.wikimedia.org/wikipedia/fr/e/ef/FL-Studio-12-Logo.png" alt="FL Studio">
  <div id="load-wrap"><div id="load-fill"></div></div>
  <p id="load-msg">Loading PCN BOLADÃO.flp...</p>
</div>

<!-- MOBILE PORTRAIT -->
<div id="mob-portrait">
  <div class="mp-title">PCN BOLADÃO</div>
  <div class="mp-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
  <div class="mp-text">VIRE SEU TELEFONE</div>
  <div class="mp-sub">para visualizar o FL Studio</div>
</div>

<!-- HEADER -->
<header>
  <div class="logo">
    <img src="https://i.ibb.co/Kc5HwFjB/imgi-2-651454321-17997294479865619-4343586608265419942-n.jpg" alt="PCN">
    PCN BOLADÃO
  </div>
  <nav>
    <button class="active" data-s="home">HOME</button>
    <button data-s="loja">LOJA</button>
    <button data-s="musicas">MÚSICAS</button>
    <button data-s="contato">CONTATO</button>
  </nav>
</header>

<!-- HOME -->
<section id="home" class="section active">
  <div class="fl-win">
    <!-- Title Bar -->
    <div class="fl-tb">
      <div class="fl-dot r"></div><div class="fl-dot y"></div><div class="fl-dot g"></div>
      <span>FL Studio 20 — PCN BOLADÃO.flp</span>
    </div>
    <!-- Toolbar -->
    <div class="fl-bar">
      <div class="tb-btn play">▶</div>
      <div class="tb-btn stop">■</div>
      <div class="tb-btn rec">●</div>
      <div class="bpm" id="flbpm">140.000</div>
      <div class="tb-tabs">
        <span class="tb-tab">Playlist</span>
        <span class="tb-tab">Mixer</span>
        <span class="tb-tab active">Piano Roll</span>
      </div>
    </div>
    <!-- Main -->
    <div class="fl-main">
      <!-- Piano -->
      <div class="piano-side" id="pianoKeys"></div>
      <!-- Center -->
      <div class="fl-center">
        <div class="grid-bg"></div>
        <canvas id="particles-c"></canvas>
        <!-- Hero -->
        <div class="hero" id="heroBlock">
          <div class="ering a"></div>
          <div class="ering b"></div>
          <div id="pcn-label">PCN BOLADÃO<span class="refl">PCN BOLADÃO</span></div>
        </div>
        <!-- Floating tags -->
        <span class="ftag" style="top:15%;left:9%">808</span>
        <span class="ftag" style="top:74%;left:8%;animation-delay:-2s">LEAN</span>
        <span class="ftag" style="top:20%;right:12%;animation-delay:-1s">TRAP</span>
        <span class="ftag" style="top:76%;right:14%;animation-delay:-3s">♱</span>
      </div>
      <!-- Plugin Rack -->
      <div class="plugin-rack">
        <div class="rack-inner">
          <!-- clipe.exe - MAIOR -->
          <div class="plug-win xlarge">
            <div class="plug-title">
              <div class="fl-dot r"></div><div class="fl-dot y"></div><div class="fl-dot g"></div>
              <span>clipe.exe</span>
            </div>
            <div class="plug-body">
              <iframe src="https://www.youtube.com/embed/KE3V-oxv11A?autoplay=1&mute=1&loop=1&playlist=KE3V-oxv11A&controls=0&modestbranding=1&playsinline=1&rel=0" allow="autoplay;encrypted-media" loading="lazy"></iframe>
            </div>
            <div class="plug-footer">
              <span class="plug-btn on">Clipe</span>
              <a class="plug-btn" href="https://www.youtube.com/@PCNboladao" target="_blank" style="text-decoration:none;">YouTube</a>
            </div>
          </div>
          <!-- produtos.exe - MAIOR -->
          <div class="plug-win large">
            <div class="plug-title">
              <div class="fl-dot r"></div><div class="fl-dot y"></div><div class="fl-dot g"></div>
              <span>produtos.exe</span>
            </div>
            <div class="plug-body" id="vizProdPhotos">
              <img src="https://i.imgur.com/DMZ6WBT.png" class="show" style="object-fit:cover;">
              <img src="https://i.imgur.com/UYnObyx.png" style="object-fit:cover;">
              <img src="https://i.imgur.com/RnqS6xs.png" style="object-fit:cover;background:#f5f5f5;">
              <img src="https://i.imgur.com/COsCuKl.png" style="object-fit:cover;">
            </div>
            <div class="plug-footer">
              <span class="plug-btn on">Produtos</span>
              <span class="plug-btn" onclick="goSection('loja')" style="cursor:pointer;">Loja</span>
            </div>
          </div>
          <!-- Fruity Limiter -->
          <div class="plug-win medium">
            <div class="plug-title">
              <div class="fl-dot r"></div><div class="fl-dot y"></div><div class="fl-dot g"></div>
              <span>Fruity Limiter</span>
            </div>
            <div class="plug-body">
              <canvas id="limiter-canvas"></canvas>
            </div>
            <div class="plug-footer">
              <span class="plug-btn on">Limiter</span>
              <span class="plug-btn">COMP</span>
            </div>
          </div>
          <!-- Maximus -->
          <div class="plug-win medium">
            <div class="plug-title">
              <div class="fl-dot r"></div><div class="fl-dot y"></div><div class="fl-dot g"></div>
              <span>Maximus</span>
            </div>
            <div class="plug-body">
              <canvas id="maximus-canvas"></canvas>
            </div>
            <div class="plug-footer">
              <span class="plug-btn on">Master</span>
              <span class="plug-btn">LOW</span>
              <span class="plug-btn">MID</span>
              <span class="plug-btn">HIGH</span>
            </div>
          </div>
          <!-- EQ -->
          <div class="plug-win medium">
            <div class="plug-title">
              <div class="fl-dot r"></div><div class="fl-dot y"></div><div class="fl-dot g"></div>
              <span>Parametric EQ 2</span>
            </div>
            <div class="plug-body">
              <canvas id="eq-canvas"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Drums -->
    <div class="drum-row">
      <div class="d-pad" data-drum="kick" style="background:rgba(224,40,40,.15);border-top:2px solid #e02828;"><span style="color:#e05555;">KICK</span><span style="background:#e02828;">1</span></div>
      <div class="d-pad" data-drum="snare" style="background:rgba(80,130,220,.15);border-top:2px solid #5082dc;"><span style="color:#7aaaf0;">SNARE</span><span style="background:#5082dc;">2</span></div>
      <div class="d-pad" data-drum="hat" style="background:rgba(40,180,100,.15);border-top:2px solid #28b464;"><span style="color:#50d882;">H-HAT</span><span style="background:#28b464;">3</span></div>
      <div class="d-pad" data-drum="clap" style="background:rgba(180,80,220,.15);border-top:2px solid #b450dc;"><span style="color:#d480f0;">CLAP</span><span style="background:#b450dc;">4</span></div>
      <div class="d-pad" data-drum="perc" style="background:rgba(220,170,40,.15);border-top:2px solid #dcaa28;"><span style="color:#f0cc50;">PERC</span><span style="background:#dcaa28;color:#000;">5</span></div>
      <div class="d-pad" data-drum="rim" style="background:rgba(40,190,210,.15);border-top:2px solid #28bed2;"><span style="color:#50dcf0;">RIM</span><span style="background:#28bed2;color:#000;">6</span></div>
    </div>
    <!-- Status bar -->
    <div class="fl-status">PCN BOLADÃO — FL Studio 21 — CPU: 12% | RAM: 1.2GB</div>
  </div>
</section>

<!-- LOJA -->
<section id="loja" class="section">
  <div class="loja-wrap">
    <div class="loja-titulo">KANKIU <span>COLLECTION</span></div>
    <div class="loja-sub">Streetwear Underground Edition</div>
    
    <!-- Product Hero -->
    <div class="prod-hero">
      <div class="prod-img-flip" id="prodFlip">
        <img class="prod-front" src="https://i.imgur.com/DMZ6WBT.png" alt="Camisa Kankiu - Frente">
        <img class="prod-back" src="https://i.imgur.com/UYnObyx.png" alt="Camisa Kankiu - Costas">
        <span class="img-hint">Passe o mouse para ver costas</span>
      </div>
      
      <div class="prod-info-main">
        <div class="prod-name">Camisa Kankiu</div>
        <div class="prod-seals">
          <span class="seal seal-hot"><i class="fa-solid fa-fire"></i> Poucas Unidades</span>
          <span class="seal seal-limit">Drop Limitado</span>
          <span class="seal seal-new">Novo</span>
        </div>
        <div class="prod-price-box">
          <div class="prod-price"><span class="prod-price-cents">R$</span> 100,<span style="font-size:28px">00</span></div>
          <div class="prod-installment">Frete incluído</div>
        </div>
        <div class="prod-desc">Camiseta oversized exclusiva. Tecido premium, estampa resinada, edição limitada.<br>100% algodão penteado • Exclusiva • Streetwear edition</div>
        <div class="stock-bar"><div class="stock-dot"></div>Últimas peças disponíveis</div>
        <button class="prod-btn-buy" onclick="buyWhatsApp('Camisa Kankiu')"><i class="fa-brands fa-whatsapp"></i> Comprar via WhatsApp</button>
        <button class="prod-btn-detail" onclick="buyWhatsApp('Camisa Kankiu - Mais informações')"><i class="fa-solid fa-info-circle"></i> Mais informações</button>
      </div>
    </div>
    
    <!-- More Products -->
    <div class="more-products-title">Mais Produtos</div>
    <div class="loja-grid">
      <div class="loja-card" onclick="buyWhatsApp('Caneca PCN')">
        <img src="https://i.imgur.com/RnqS6xs.png" alt="Caneca PCN">
        <div class="loja-card-info">
          <h3>Caneca PCN</h3>
          <div class="price">R$ 55,00</div>
          <div class="loja-card-btn"><i class="fa-brands fa-whatsapp"></i> Comprar</div>
        </div>
      </div>
      
      <div class="loja-card" onclick="buyWhatsApp('Moletom Kankiu')">
        <img src="https://i.imgur.com/COsCuKl.png" alt="Moletom Kankiu">
        <div class="loja-card-info">
          <h3>Moletom Kankiu</h3>
          <div class="price">R$ 260,00</div>
          <div class="loja-card-btn"><i class="fa-brands fa-whatsapp"></i> Comprar</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MÚSICAS -->
<section id="musicas" class="section">
  <div class="mus-wrap">
    <div class="mus-title">MÚSICAS</div>
    <div class="mus-sub">Ouça no Spotify</div>
    <!-- Artista row -->
    <div class="mus-artist-row">
      <img src="https://i.ibb.co/992g4LWK/imgi-41-661993170-18387838516083845-7837809524537980210-n.jpg" alt="PCN">
      <div><h2>PCN BOLADÃO</h2><p>Artista no Spotify</p></div>
      <a class="mus-follow" href="https://open.spotify.com/artist/4EaBvk5268lNcv35sXhinc" target="_blank"><i class="fa-brands fa-spotify"></i> Seguir</a>
    </div>
    <!-- Links -->
    <div class="mus-links">
      <a class="mus-link" href="https://open.spotify.com/artist/4EaBvk5268lNcv35sXhinc" target="_blank" style="background:rgba(29,185,84,.1);border:1px solid rgba(29,185,84,.2);color:#1db954;"><i class="fa-brands fa-spotify"></i> Spotify</a>
      <a class="mus-link" href="https://www.youtube.com/@PCNboladao" target="_blank" style="background:rgba(255,0,0,.1);border:1px solid rgba(255,0,0,.2);color:#ff4444;"><i class="fa-brands fa-youtube"></i> YouTube</a>
      <a class="mus-link" href="https://www.instagram.com/7pcnboladao" target="_blank" style="background:rgba(225,48,108,.1);border:1px solid rgba(225,48,108,.2);color:#e1306c;"><i class="fa-brands fa-instagram"></i> Instagram</a>
    </div>
    <!-- PRÉ-SAVE -->
    <div class="presave-block">
      <div class="presave-label"><i class="fa-solid fa-music"></i> PRÉ-SAVE — NOVO LANÇAMENTO</div>
      <iframe style="border-radius:12px;width:100%;border:none;display:block;" src="https://open.spotify.com/embed/prerelease/2KhuPf1YqIQB4zYfEPSArA?utm_source=generator&theme=0" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <!-- Player artista -->
    <iframe src="https://open.spotify.com/embed/artist/4EaBvk5268lNcv35sXhinc?theme=0" width="100%" height="380" style="border-radius:10px;border:none;display:block;" allowfullscreen allow="autoplay;clipboard-write;encrypted-media;fullscreen;picture-in-picture" loading="lazy"></iframe>
  </div>
</section>

<!-- CONTATO -->
<section id="contato" class="section">
  <div class="ct-wrap">
    <div class="ct-title">FALE <span>COMIGO</span></div>
    <div class="ct-sub">Bookings · Feats · Parcerias</div>
    <div class="ct-card">
      <div class="ct-card-label">Redes Sociais</div>
      <a class="ct-link ig" href="https://www.instagram.com/7pcnboladao/" target="_blank"><i class="fa-brands fa-instagram"></i>@7pcnboladao</a>
      <a class="ct-link sp" href="https://open.spotify.com/artist/4EaBvk5268lNcv35sXhinc" target="_blank"><i class="fa-brands fa-spotify"></i>PCN BOLADÃO no Spotify</a>
      <a class="ct-link ml" href="mailto:pcnboladao@gmail.com"><i class="fa-solid fa-envelope"></i>pcnboladao@gmail.com</a>
    </div>
    <a class="zap-btn" href="https://wa.me/5511976369308" target="_blank"><i class="fa-brands fa-whatsapp" style="font-size:22px;"></i>CHAMAR NO WHATSAPP</a>
    <div class="dr-footer">
      <span class="dr-label">Desenvolvido por</span>
      <a href="https://www.instagram.com/GODIGIROCKET" target="_blank" class="dr-brand">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="#6EC72D"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="#6EC72D"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" fill="#4da81e"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="#4da81e"/></svg>
        <span>DigiRocket</span>
      </a>
      <p class="dr-copy">© 2025 PCN BOLADÃO · Todos os direitos reservados</p>
    </div>
  </div>
</section>

<script>
// ===== LOADING =====
(function(){
  try{
    const fill=document.getElementById('load-fill');
    const msg=document.getElementById('load-msg');
    const loading=document.getElementById('loading');
    
    setTimeout(()=>{fill.style.width='40%';msg.textContent='Loading PCN BOLADÃO.flp...';},600);
    setTimeout(()=>{fill.style.width='75%';msg.textContent='Initializing 808s...';},1200);
    setTimeout(()=>{fill.style.width='100%';msg.textContent='Ready!';},1800);
    setTimeout(()=>{loading.classList.add('hide');},2400);
  }catch(e){
    console.error('Loading error:',e);
    // Force hide loading on error
    setTimeout(()=>{
      const l=document.getElementById('loading');
      if(l)l.style.display='none';
    },1000);
  }
})();

// ===== NAVIGATION =====
function goSection(id){
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.s===id));
  document.querySelectorAll('.section').forEach(s=>s.classList.toggle('active',s.id===id));
  document.body.style.overflow=id==='home'?'hidden':'auto';
  document.documentElement.style.overflow=id==='home'?'hidden':'auto';
}
document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>goSection(b.dataset.s)));
document.body.style.overflow='hidden';

// ===== PIANO KEYS =====
(function(){
  const sidebar=document.getElementById('pianoKeys');
  if(!sidebar)return;
  const keys=[
    {note:'C5',white:true,kb:'A'},{note:'C#5',white:false,kb:'W'},
    {note:'D5',white:true,kb:'S'},{note:'Eb5',white:false,kb:'E'},
    {note:'E5',white:true,kb:'D'},{note:'F5',white:true,kb:'F'},
    {note:'F#5',white:false,kb:'T'},{note:'G5',white:true,kb:'G'},
    {note:'G#5',white:false,kb:'Y'},{note:'A5',white:true,kb:'H'},
    {note:'Bb5',white:false,kb:'U'},{note:'B5',white:true,kb:'J'},
    {note:'C6',white:true,kb:'K'}
  ];
  const noteFreq={'C5':523.25,'C#5':554.37,'D5':587.33,'Eb5':622.25,'E5':659.25,'F5':698.46,'F#5':739.99,'G5':783.99,'G#5':830.61,'A5':880,'Bb5':932.33,'B5':987.77,'C6':1046.5};
  keys.forEach(k=>{
    const el=document.createElement('div');
    el.className='p-key '+(k.white?'white':'black');
    el.dataset.note=k.note;
    el.innerHTML=`<span class="kb">${k.kb}</span>${k.note.replace(/\d/,'')}`;
    el.addEventListener('mousedown',e=>{e.preventDefault();playPianoNote(noteFreq[k.note]);el.classList.add('hit');});
    el.addEventListener('mouseup',()=>el.classList.remove('hit'));
    el.addEventListener('mouseleave',()=>el.classList.remove('hit'));
    el.addEventListener('touchstart',e=>{e.preventDefault();playPianoNote(noteFreq[k.note]);el.classList.add('hit');},{passive:false});
    el.addEventListener('touchend',()=>el.classList.remove('hit'));
    sidebar.appendChild(el);
  });
  window._noteFreq=noteFreq;
  window._kbToNote={'a':'C5','w':'C#5','s':'D5','e':'Eb5','d':'E5','f':'F5','t':'F#5','g':'G5','y':'G#5','h':'A5','u':'Bb5','j':'B5','k':'C6'};
})();

// ===== AUDIO =====
let audioCtx=null;
function getACtx(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx;}

function playPianoNote(freq){
  const ctx=getACtx();const now=ctx.currentTime;
  const osc1=ctx.createOscillator();osc1.type='square';osc1.frequency.value=freq;
  const osc2=ctx.createOscillator();osc2.type='sine';osc2.frequency.value=freq;
  const bp=ctx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=freq*1.5;bp.Q.value=12;
  const gain=ctx.createGain();
  gain.gain.setValueAtTime(0.22,now);gain.gain.setValueAtTime(0.22,now+0.9);gain.gain.linearRampToValueAtTime(0,now+1.4);
  const delay=ctx.createDelay();delay.delayTime.value=0.18;
  const fb=ctx.createGain();fb.gain.value=0.18;
  const wet=ctx.createGain();wet.gain.value=0.28;
  osc1.connect(bp);osc2.connect(bp);bp.connect(gain);
  gain.connect(ctx.destination);gain.connect(delay);delay.connect(fb);fb.connect(delay);delay.connect(wet);wet.connect(ctx.destination);
  osc1.start(now);osc2.start(now);osc1.stop(now+1.5);osc2.stop(now+1.5);
  const noteNames=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
  const n=Math.round(12*Math.log2(freq/261.63))%12;
  const pd=document.getElementById('pitch-display');
  if(pd)pd.textContent=noteNames[(n+12)%12];
}

function playKick(){
  const ctx=getACtx();const now=ctx.currentTime;
  const o=ctx.createOscillator();o.type='sine';o.frequency.setValueAtTime(200,now);o.frequency.exponentialRampToValueAtTime(15,now+0.8);
  const g=ctx.createGain();g.gain.setValueAtTime(1,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.8);
  o.connect(g);g.connect(ctx.destination);o.start(now);o.stop(now+0.8);
}
function playSnare(){
  const ctx=getACtx();const now=ctx.currentTime;
  const buf=ctx.createBuffer(1,ctx.sampleRate*0.2,ctx.sampleRate);
  const d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  const noise=ctx.createBufferSource();noise.buffer=buf;
  const hpf=ctx.createBiquadFilter();hpf.type='highpass';hpf.frequency.value=1000;
  const g=ctx.createGain();g.gain.setValueAtTime(0.8,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.2);
  noise.connect(hpf);hpf.connect(g);g.connect(ctx.destination);noise.start(now);noise.stop(now+0.2);
}
function playHat(){
  const ctx=getACtx();const now=ctx.currentTime;
  const buf=ctx.createBuffer(1,ctx.sampleRate*0.05,ctx.sampleRate);
  const d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  const n=ctx.createBufferSource();n.buffer=buf;
  const hp=ctx.createBiquadFilter();hp.type='highpass';hp.frequency.value=7000;
  const g=ctx.createGain();g.gain.setValueAtTime(0.5,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.05);
  n.connect(hp);hp.connect(g);g.connect(ctx.destination);n.start(now);n.stop(now+0.05);
}
function playClap(){
  const ctx=getACtx();const now=ctx.currentTime;
  for(let i=0;i<3;i++){
    const buf=ctx.createBuffer(1,ctx.sampleRate*0.03,ctx.sampleRate);
    const d=buf.getChannelData(0);for(let j=0;j<d.length;j++)d[j]=Math.random()*2-1;
    const n=ctx.createBufferSource();n.buffer=buf;
    const bp=ctx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=1200;bp.Q.value=2;
    const g=ctx.createGain();g.gain.setValueAtTime(0.6,now+i*0.015);g.gain.exponentialRampToValueAtTime(0.01,now+i*0.015+0.08);
    n.connect(bp);bp.connect(g);g.connect(ctx.destination);n.start(now+i*0.015);n.stop(now+i*0.015+0.08);
  }
}
function playPerc(){
  const ctx=getACtx();const now=ctx.currentTime;
  const o=ctx.createOscillator();o.type='sine';o.frequency.value=800;
  const g=ctx.createGain();g.gain.setValueAtTime(0.5,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.15);
  o.connect(g);g.connect(ctx.destination);o.start(now);o.stop(now+0.15);
}
function playRim(){
  const ctx=getACtx();const now=ctx.currentTime;
  const o=ctx.createOscillator();o.type='square';o.frequency.value=1800;
  const hp=ctx.createBiquadFilter();hp.type='highpass';hp.frequency.value=2000;
  const g=ctx.createGain();g.gain.setValueAtTime(0.4,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.06);
  o.connect(hp);hp.connect(g);g.connect(ctx.destination);o.start(now);o.stop(now+0.06);
}

const drumFns={kick:playKick,snare:playSnare,hat:playHat,clap:playClap,perc:playPerc,rim:playRim};
const drumKeys={'1':'kick','2':'snare','3':'hat','4':'clap','5':'perc','6':'rim'};

// ===== DRUM PADS =====
document.querySelectorAll('.d-pad').forEach(pad=>{
  const fn=()=>{drumFns[pad.dataset.drum]();pad.classList.add('hit');setTimeout(()=>pad.classList.remove('hit'),150);};
  pad.addEventListener('mousedown',fn);
  pad.addEventListener('touchstart',e=>{e.preventDefault();fn();},{passive:false});
});

// ===== KEYBOARD =====
const heldKeys=new Set();
document.addEventListener('keydown',e=>{
  if(heldKeys.has(e.key))return;
  heldKeys.add(e.key);
  const k=e.key.toLowerCase();
  if(window._kbToNote&&window._kbToNote[k]){
    const note=window._kbToNote[k];
    const freq=window._noteFreq[note];
    if(freq){
      playPianoNote(freq);
      const el=document.querySelector(`.p-key[data-note="${note}"]`);
      if(el){el.classList.add('hit');setTimeout(()=>el.classList.remove('hit'),280);}
    }
  }
  if(drumKeys[k]){
    drumFns[drumKeys[k]]();
    const pad=document.querySelector(`.d-pad[data-drum="${drumKeys[k]}"]`);
    if(pad){pad.classList.add('hit');setTimeout(()=>pad.classList.remove('hit'),150);}
  }
});
document.addEventListener('keyup',e=>heldKeys.delete(e.key));

// ===== CURSOR =====
(function(){
  if(window.innerWidth<=768)return; // desktop only
  const cur=document.getElementById('cur');
  const dot=document.getElementById('cur-dot');
  if(!cur)return;
  document.addEventListener('mousemove',e=>{
    cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';
    dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';
  });
  document.querySelectorAll('button,a,.d-pad,.p-key,.plug-btn,.tb-tab,.tb-btn,.ftag').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cur.style.transform='translate(-50%,-50%) scale(1.5)';});
    el.addEventListener('mouseleave',()=>{cur.style.transform='translate(-50%,-50%) scale(1)';});
  });
})();

// ===== 3D HERO =====
(function(){
  const el=document.getElementById('pcn-label');
  if(!el||window.innerWidth<=768)return; // desktop only
  let tX=0,tY=0,cX=0,cY=0;
  const MAX=18,LERP=0.08;
  document.addEventListener('mousemove',e=>{
    tY=(e.clientX/window.innerWidth-0.5)*MAX*2;
    tX=-(e.clientY/window.innerHeight-0.5)*MAX*2;
  });
  (function tick(){
    cX+=(tX-cX)*LERP;cY+=(tY-cY)*LERP;
    el.style.transform=`perspective(900px) rotateX(${cX}deg) rotateY(${cY}deg)`;
    requestAnimationFrame(tick);
  })();
})();

// ===== PARTICLES =====
(function(){
  const c=document.getElementById('particles-c');
  if(!c||window.innerWidth<=768)return; // skip no mobile
  const ctx=c.getContext('2d');
  let W,H;
  const resize=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;};
  resize();
  const pts=Array.from({length:30},()=>({ // reduzido de 50 para 30
    x:Math.random()*2000,y:Math.random()*1200,
    vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.15,
    r:Math.random()*1.2+.3,o:Math.random()*.25+.05,
    purple:Math.random()>.6
  }));
  let mx=.5,my=.5;
  document.addEventListener('mousemove',e=>{mx=e.clientX/window.innerWidth;my=e.clientY/window.innerHeight;});
  (function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx+(mx-.5)*.1;p.y+=p.vy+(my-.5)*.08;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x%W,p.y%H,p.r,0,Math.PI*2);
      ctx.fillStyle=p.purple?`rgba(168,85,247,${p.o})`:`rgba(255,106,0,${p.o})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  })();
})();

// ===== EQ CANVAS =====
(function(){
  const eqC=document.getElementById('eq-canvas');
  if(!eqC)return;
  const ctx=eqC.getContext('2d');
  const bandFreqs=[80,250,1000,3000,8000];
  let vals=[35,55,65,50,45];
  let frame=0;
  function draw(){
    if(frame++%2!==0){requestAnimationFrame(draw);return;} // draw every 2 frames
    eqC.width=eqC.offsetWidth;eqC.height=eqC.offsetHeight;
    const w=eqC.width,h=eqC.height;
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='#030608';ctx.fillRect(0,0,w,h);
    // grid
    [125,500,2000,8000].forEach(f=>{
      const x=w*(Math.log10(f/20)/Math.log10(1000));
      ctx.strokeStyle='rgba(80,120,100,0.08)';ctx.lineWidth=1;
      ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();
    });
    ctx.strokeStyle='rgba(80,120,100,0.2)';ctx.beginPath();ctx.moveTo(0,h/2);ctx.lineTo(w,h/2);ctx.stroke();
    // curve
    ctx.beginPath();
    for(let x=0;x<w;x+=2){ // step 2px
      const freq=20*Math.pow(1000,x/w);
      let gain=0;
      vals.forEach((v,i)=>{
        const dB=(v-50)/50*14;
        const ratio=Math.log10(freq/bandFreqs[i]);
        gain+=dB*Math.exp(-(ratio*ratio)/8);
      });
      const y=h/2-(gain/28)*h;
      x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.lineTo(w,h/2);ctx.lineTo(0,h/2);ctx.closePath();
    const grad=ctx.createLinearGradient(0,0,0,h);
    grad.addColorStop(0,'rgba(255,140,0,0.15)');grad.addColorStop(1,'rgba(255,140,0,0.01)');
    ctx.fillStyle=grad;ctx.fill();
    ctx.beginPath();
    for(let x=0;x<w;x+=2){
      const freq=20*Math.pow(1000,x/w);
      let gain=0;
      vals.forEach((v,i)=>{const dB=(v-50)/50*14;const ratio=Math.log10(freq/bandFreqs[i]);gain+=dB*Math.exp(-(ratio*ratio)/8);});
      const y=h/2-(gain/28)*h;x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.strokeStyle='#ff8c00';ctx.lineWidth=1.5;ctx.stroke();
    vals=vals.map(v=>Math.max(20,Math.min(80,v+(Math.random()-.5)*1)));
    requestAnimationFrame(draw);
  }
// ===== EQ CANVAS =====
(function(){
  try{
  const c=document.getElementById('eq-canvas');
  if(!c)return;
  const ctx=c.getContext('2d',{alpha:false});
  let w,h;
  const bands=[
    {freq:80,gain:0,label:'HP',color:'#28b464'},
    {freq:250,gain:2,label:'LF',color:'#5082dc'},
    {freq:1000,gain:3,label:'MF',color:'#ff8c00'},
    {freq:3000,gain:1,label:'HMF',color:'#dcaa28'},
    {freq:8000,gain:-1,label:'HF',color:'#b450dc'}
  ];
  
  function draw(){
    w=c.width=c.offsetWidth;
    h=c.height=c.offsetHeight;
    
    // Background
    ctx.fillStyle='#08090c';
    ctx.fillRect(0,0,w,h);
    
    // Grid horizontal
    ctx.strokeStyle='rgba(255,106,0,0.08)';
    ctx.lineWidth=1;
    for(let i=0;i<=4;i++){
      ctx.beginPath();
      ctx.moveTo(0,h/4*i);
      ctx.lineTo(w,h/4*i);
      ctx.stroke();
    }
    
    // Center line
    ctx.strokeStyle='rgba(255,106,0,0.15)';
    ctx.lineWidth=1.5;
    ctx.beginPath();
    ctx.moveTo(0,h/2);
    ctx.lineTo(w,h/2);
    ctx.stroke();
    
    // Draw curve
    ctx.beginPath();
    for(let x=0;x<w;x+=3){
      const freq=20*Math.pow(1000,x/w);
      let totalGain=0;
      bands.forEach(b=>{
        const octaves=Math.log2(freq/b.freq);
        const response=b.gain*Math.exp(-(octaves*octaves)/3);
        totalGain+=response;
      });
      const y=h/2-(totalGain/15)*h;
      if(x===0)ctx.moveTo(x,y);
      else ctx.lineTo(x,y);
    }
    
    // Fill under curve
    ctx.lineTo(w,h/2);
    ctx.lineTo(0,h/2);
    ctx.closePath();
    const grad=ctx.createLinearGradient(0,0,0,h);
    grad.addColorStop(0,'rgba(255,140,0,0.25)');
    grad.addColorStop(0.5,'rgba(255,140,0,0.05)');
    grad.addColorStop(1,'rgba(255,140,0,0)');
    ctx.fillStyle=grad;
    ctx.fill();
    
    // Stroke curve
    ctx.beginPath();
    for(let x=0;x<w;x+=3){
      const freq=20*Math.pow(1000,x/w);
      let totalGain=0;
      bands.forEach(b=>{
        const octaves=Math.log2(freq/b.freq);
        const response=b.gain*Math.exp(-(octaves*octaves)/3);
        totalGain+=response;
      });
      const y=h/2-(totalGain/15)*h;
      if(x===0)ctx.moveTo(x,y);
      else ctx.lineTo(x,y);
    }
    ctx.strokeStyle='#ff8c00';
    ctx.lineWidth=2;
    ctx.stroke();
    
    // Animate
    bands.forEach(b=>{
      b.gain+=(Math.random()-0.5)*0.15;
      b.gain=Math.max(-6,Math.min(6,b.gain));
    });
  }
  
  setInterval(draw,50);
  }catch(e){console.error('EQ error:',e);}
})();

// ===== FRUITY LIMITER CANVAS =====
(function(){
  try{
  const c=document.getElementById('limiter-canvas');
  if(!c)return;
  const ctx=c.getContext('2d',{alpha:false});
  let w,h;
  let level=0;
  let targetLevel=0;
  
  function draw(){
    w=c.width=c.offsetWidth;
    h=c.height=c.offsetHeight;
    
    ctx.fillStyle='#05070a';
    ctx.fillRect(0,0,w,h);
    
    ctx.strokeStyle='rgba(40,180,100,0.06)';
    ctx.lineWidth=1;
    for(let i=1;i<4;i++){
      ctx.beginPath();
      ctx.moveTo(0,h/4*i);
      ctx.lineTo(w,h/4*i);
      ctx.stroke();
    }
    
    const threshY=h*0.35;
    ctx.strokeStyle='rgba(255,140,0,0.4)';
    ctx.lineWidth=1.5;
    ctx.setLineDash([5,3]);
    ctx.beginPath();
    ctx.moveTo(0,threshY);
    ctx.lineTo(w,threshY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    level+=(targetLevel-level)*0.1;
    const meterH=level*h*0.8;
    const meterX=w*0.15;
    const meterW=w*0.7;
    
    ctx.fillStyle='rgba(20,25,30,0.6)';
    ctx.fillRect(meterX,h-h*0.9,meterW,h*0.8);
    
    const meterGrad=ctx.createLinearGradient(0,h-meterH,0,h);
    if(meterH>threshY){
      meterGrad.addColorStop(0,'#ff4444');
      meterGrad.addColorStop(0.5,'#ff8800');
      meterGrad.addColorStop(1,'#28b464');
    }else{
      meterGrad.addColorStop(0,'#28b464');
      meterGrad.addColorStop(1,'rgba(40,180,100,0.3)');
    }
    ctx.fillStyle=meterGrad;
    ctx.fillRect(meterX,h-(meterH),meterW,meterH);
    
    if(meterH>threshY){
      ctx.fillStyle='#ff4444';
      ctx.fillRect(meterX-5,h-meterH-2,meterW+10,4);
    }
    
    if(Math.random()<0.05){
      targetLevel=Math.random()*0.9+0.1;
    }
  }
  
  setInterval(draw,30);
  }catch(e){console.error('Limiter error:',e);}
})();

// ===== MAXIMUS CANVAS =====
(function(){
  try{
  const c=document.getElementById('maximus-canvas');
  if(!c)return;
  const ctx=c.getContext('2d',{alpha:false});
  let w,h;
  const bands=[
    {name:'LOW',level:0.7,target:0.7,color:'#28b464',pos:0},
    {name:'MID',level:0.85,target:0.85,color:'#ff8c00',pos:1},
    {name:'HIGH',level:0.6,target:0.6,color:'#dc3c3c',pos:2}
  ];
  
  function draw(){
    w=c.width=c.offsetWidth;
    h=c.height=c.offsetHeight;
    
    ctx.fillStyle='#06080b';
    ctx.fillRect(0,0,w,h);
    
    const bandW=w/3;
    const padding=8;
    
    bands.forEach((band,i)=>{
      const x=i*bandW;
      
      const bgColor=band.color+'08';
      ctx.fillStyle=bgColor;
      ctx.fillRect(x+1,0,bandW-2,h);
      
      if(i>0){
        ctx.fillStyle='rgba(255,255,255,0.05)';
        ctx.fillRect(x,0,1,h);
      }
      
      band.level+=(band.target-band.level)*0.08;
      
      const meterH=band.level*h*0.85;
      const meterX=x+padding;
      const meterW=bandW-padding*2;
      
      const grad=ctx.createLinearGradient(0,h-meterH,0,h);
      grad.addColorStop(0,band.color);
      grad.addColorStop(0.6,band.color+'cc');
      grad.addColorStop(1,band.color+'44');
      
      ctx.fillStyle=grad;
      ctx.fillRect(meterX,h-meterH,meterW,meterH);
      
      ctx.fillStyle=band.color;
      ctx.shadowBlur=15;
      ctx.shadowColor=band.color;
      ctx.fillRect(meterX,h-meterH,meterW,3);
      ctx.shadowBlur=0;
      
      ctx.fillStyle='rgba(255,255,255,0.6)';
      ctx.font='bold 10px Inter';
      ctx.textAlign='center';
      ctx.fillText(band.name,x+bandW/2,h-10);
      
      if(Math.random()<0.03){
        band.target=Math.random()*0.6+0.3;
      }
    });
  }
  
  setInterval(draw,40);
  }catch(e){console.error('Maximus error:',e);}
})();

// ===== PRODUCT IMAGE CYCLING =====
(function(){
  const imgs=document.querySelectorAll('#vizProdPhotos img');
  if(!imgs.length)return;
  let i=0;
  setInterval(()=>{
    imgs[i].classList.remove('show');imgs[i].style.opacity='0';
    i=(i+1)%imgs.length;
    imgs[i].classList.add('show');imgs[i].style.opacity='1';
  },3000);
})();

// ===== PRESAVE POPUP =====
function closePresave(){
  const el=document.getElementById('presave-overlay');
  if(el){el.style.opacity='0';setTimeout(()=>el.classList.remove('show'),300);}
}
setTimeout(()=>{
  const el=document.getElementById('presave-overlay');
  if(el){el.classList.add('show');el.style.opacity='1';el.addEventListener('click',e=>{if(e.target===el)closePresave();});}
},60000);

// ===== WHATSAPP =====
function buyWhatsApp(p){
  window.open('https://wa.me/5511976369308?text='+encodeURIComponent('Olá! Tenho interesse em: '+p),'_blank');
}

// ===== FLOATING TAGS =====
document.querySelectorAll('.ftag').forEach(t=>t.addEventListener('click',()=>t.classList.toggle('on')));
</script>
</body>
</html>

