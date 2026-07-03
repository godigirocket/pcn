
// ═════════════════════════════════════════════════════════
// PROTEÇÃO TOTAL CONTRA CLONAGEM E INSPEÇÃO
// ═════════════════════════════════════════════════════════

// 1. Bloquear clique direito
document.addEventListener('contextmenu',e=>{e.preventDefault();return false;});

// 2. Bloquear todas as teclas de inspeção
document.addEventListener('keydown',e=>{
  // F12
  if(e.key==='F12'){e.preventDefault();e.stopPropagation();return false;}
  // Ctrl+Shift+I (DevTools)
  if(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='i')){e.preventDefault();e.stopPropagation();return false;}
  // Ctrl+Shift+J (Console)
  if(e.ctrlKey&&e.shiftKey&&(e.key==='J'||e.key==='j')){e.preventDefault();e.stopPropagation();return false;}
  // Ctrl+Shift+C (Inspecionar elemento)
  if(e.ctrlKey&&e.shiftKey&&(e.key==='C'||e.key==='c')){e.preventDefault();e.stopPropagation();return false;}
  // Ctrl+U (Ver fonte)
  if(e.ctrlKey&&(e.key==='U'||e.key==='u')){e.preventDefault();e.stopPropagation();return false;}
  // F11 (Tela cheia)
  if(e.key==='F11'){e.preventDefault();e.stopPropagation();return false;}
  // Ctrl+S (Salvar)
  if(e.ctrlKey&&(e.key==='S'||e.key==='s')){e.preventDefault();e.stopPropagation();return false;}
}, true);

// 3. Bloquear drag e drop
document.addEventListener('dragstart',e=>{e.preventDefault();return false;});
document.addEventListener('drag',e=>{e.preventDefault();return false;});

// 4. Bloquear seleção de texto
document.addEventListener('selectstart',e=>{e.preventDefault();return false;});
document.body.style.userSelect='none';
document.body.style.webkitUserSelect='none';
document.body.style.webkitTouchCallout='none';

// 5. Desabilitar console.log e ferramentas de debug
(function(){
  const noop=()=>{};
  window.console.log=noop;
  window.console.error=noop;
  window.console.warn=noop;
  window.console.info=noop;
  window.console.debug=noop;
  
  // Detectar DevTools aberto
  let devToolOpen=false;
  const threshold=160;
  setInterval(()=>{
    if(window.outerHeight-window.innerHeight>threshold||window.outerWidth-window.innerWidth>threshold){
      if(!devToolOpen){devToolOpen=true;window.location.href='about:blank';}
    }else{devToolOpen=false;}
  },500);
})();

// 6. Proteger HTML contra cópia/visualização
Object.defineProperty(document,'write',{value:()=>{}});
document.body.oncontextmenu=()=>false;
document.body.ondragstart=()=>false;

// 7. Bloqueador de ferramentas de desenvolvimento
if(window.devtools&&window.devtools.open){window.location.href='about:blank';}

// 8. Bloquear técnicas avançadas de debugging
setInterval(()=>{
  debugger; // força parada se DevTools estiver aberto
},1000);

console.clear=()=>{};


// ===== LOADING SCREEN =====
(function(){
  const bar=document.getElementById('load-bar');
  const msg=document.getElementById('load-msg');
  const msgs=['Loading PCN BOLADÃO.flp...','Initializing 808s...','Ready!'];
  let step=0;
  const iv=setInterval(()=>{
    step++;
    if(step===1){bar.style.width='40%';msg.textContent=msgs[0];}
    else if(step===2){bar.style.width='75%';msg.textContent=msgs[1];}
    else if(step===3){bar.style.width='100%';msg.textContent=msgs[2];}
    else if(step===4){document.getElementById('loading').classList.add('hide');clearInterval(iv);}
  },600);
})();

// ===== NAVIGATION =====
const navBtns=document.querySelectorAll('header nav button');
const sections=document.querySelectorAll('.section');
navBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    navBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    sections.forEach(s=>s.classList.remove('active'));
    document.getElementById(btn.dataset.section).classList.add('active');
    if(btn.dataset.section==='home')document.body.style.overflow='hidden';
    else document.body.style.overflow='auto';
  });
});
document.body.style.overflow='hidden';

// ===== PIANO KEYS GENERATION =====
(function(){
  const sidebar=document.getElementById('pianoKeys');
  if(!sidebar)return;
  // C minor pentatonic + chromatic pattern with keyboard mapping
  // Keys: A S D F G H J K = white, W E T Y U = black (displayed on piano)
  const keys=[
    {note:'C5',white:true,kb:'A'},{note:'C#5',white:false,kb:'W'},
    {note:'D5',white:true,kb:'S'},{note:'Eb5',white:false,kb:'E'},
    {note:'E5',white:true,kb:'D'},{note:'F5',white:true,kb:'F'},
    {note:'F#5',white:false,kb:'T'},{note:'G5',white:true,kb:'G'},
    {note:'G#5',white:false,kb:'Y'},{note:'A5',white:true,kb:'H'},
    {note:'Bb5',white:false,kb:'U'},{note:'B5',white:true,kb:'J'},
    {note:'C6',white:true,kb:'K'},
  ];
  keys.forEach(k=>{
    const el=document.createElement('div');
    el.className='piano-key '+(k.white?'white':'black');
    el.dataset.note=k.note;
    el.innerHTML=`<span class="kb">${k.kb}</span>${k.note.replace(/\d/,'')}`;
    el.addEventListener('mousedown',e=>{e.preventDefault();playPianoNote(k.note);el.classList.add('hit');});
    el.addEventListener('mouseup',()=>el.classList.remove('hit'));
    el.addEventListener('mouseleave',()=>el.classList.remove('hit'));
    el.addEventListener('touchstart',e=>{e.preventDefault();playPianoNote(k.note);el.classList.add('hit');},{passive:false});
    el.addEventListener('touchend',()=>el.classList.remove('hit'));
    sidebar.appendChild(el);
  });
})();

// ===== VISUALIZER PHOTO CYCLING =====
(function(){
  const imgs=document.querySelectorAll('#vizPhotos img');
  if(!imgs.length)return;
  let idx=0;
  setInterval(()=>{
    imgs[idx].classList.remove('show');
    idx=(idx+1)%imgs.length;
    imgs[idx].classList.add('show');
  },4000);
})();

// ===== VISUALIZER WAVEFORM BARS =====
(function(){
  const wf=document.getElementById('vizWaveform');
  if(!wf)return;
  for(let i=0;i<24;i++){
    const b=document.createElement('div');
    b.className='viz-bar2';
    const h=(6+Math.random()*28).toFixed(0);
    const d=(0.2+Math.random()*0.5).toFixed(2);
    const dl=(Math.random()*0.4).toFixed(2);
    b.style.cssText=`--h:${h}px;--d:${d}s;--dl:${dl}s`;
    wf.appendChild(b);
  }
})();

// ===== VIZ CONTROL BUTTONS =====
document.querySelectorAll('.viz-ctrl-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.viz-ctrl-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== 3D NAME ANIMATION =====
(function(){
  const el=document.getElementById('pcn-label');
  const block=document.getElementById('heroBlock');
  if(!el||!block)return;
  let targetX=0,targetY=0,curX=0,curY=0;
  const lerp=0.06,maxRot=30;
  function onMove(cx,cy){
    const rect=block.getBoundingClientRect();
    const mx=(cx-rect.left-rect.width/2)/(rect.width/2);
    const my=(cy-rect.top-rect.height/2)/(rect.height/2);
    targetY=mx*maxRot; targetX=-my*maxRot;
  }
  document.addEventListener('mousemove',e=>onMove(e.clientX,e.clientY));
  document.addEventListener('touchmove',e=>{if(e.touches.length)onMove(e.touches[0].clientX,e.touches[0].clientY);},{passive:true});
  function animate(){
    curX+=(targetX-curX)*lerp; curY+=(targetY-curY)*lerp;
    const s=1+Math.sqrt(curX*curX+curY*curY)/maxRot*0.08;
    el.style.transform=`perspective(900px) rotateX(${curX}deg) rotateY(${curY}deg) scale(${s})`;
    requestAnimationFrame(animate);
  }
  animate();
})();

// ===== ORBITAL RINGS =====
(function(){
  const canvas=document.getElementById('orbit-canvas');
  const ctx=canvas.getContext('2d');
  function resize(){canvas.width=canvas.parentElement.clientWidth;canvas.height=canvas.parentElement.clientHeight;}
  resize();window.addEventListener('resize',resize);

  const rings=[
    {rx:120,ry:40,speed:0.8,color:'rgba(255,106,0,0.3)',offset:0},
    {rx:150,ry:50,speed:-0.6,color:'rgba(168,85,247,0.25)',offset:Math.PI/3},
    {rx:100,ry:35,speed:1.0,color:'rgba(255,149,0,0.2)',offset:Math.PI/2},
    {rx:170,ry:55,speed:-0.4,color:'rgba(255,255,255,0.1)',offset:Math.PI}
  ];
  let t=0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const cx=canvas.width/2,cy=canvas.height/2;
    rings.forEach(r=>{
      ctx.beginPath();
      ctx.strokeStyle=r.color;
      ctx.lineWidth=1.5;
      for(let i=0;i<=360;i++){
        const a=(i*Math.PI/180)+t*r.speed*0.01+r.offset;
        const x=cx+Math.cos(a)*r.rx;
        const y=cy+Math.sin(a)*r.ry;
        if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
      }
      ctx.stroke();
    });
    t++;
    requestAnimationFrame(draw);
  }
  draw();
})();

// ===== AUDIO ENGINE =====
let audioCtx=null;
function getCtx(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx;}

// --- PIANO SYNTH (Plug flute: Square+Sine through Bandpass Q12, with delay) ---
function playPiano(freq){
  const ctx=getCtx();
  const now=ctx.currentTime;

  // Oscillators
  const osc1=ctx.createOscillator();
  osc1.type='square';osc1.frequency.value=freq;
  const osc2=ctx.createOscillator();
  osc2.type='sine';osc2.frequency.value=freq;

  // Bandpass
  const bp=ctx.createBiquadFilter();
  bp.type='bandpass';bp.frequency.value=freq*1.5;bp.Q.value=12;

  // Gain envelope: 1s sustain minimum, 500ms release
  const gain=ctx.createGain();
  gain.gain.setValueAtTime(0.25,now);
  gain.gain.setValueAtTime(0.25,now+1.0);
  gain.gain.linearRampToValueAtTime(0,now+1.5);

  // Delay feedback
  const delay=ctx.createDelay();delay.delayTime.value=0.2;
  const fb=ctx.createGain();fb.gain.value=0.2;
  const dryGain=ctx.createGain();dryGain.gain.value=0.8;
  const wetGain=ctx.createGain();wetGain.gain.value=0.3;

  // Routing
  osc1.connect(bp);osc2.connect(bp);
  bp.connect(gain);
  gain.connect(dryGain);dryGain.connect(ctx.destination);
  gain.connect(delay);delay.connect(fb);fb.connect(delay);
  delay.connect(wetGain);wetGain.connect(ctx.destination);

  osc1.start(now);osc2.start(now);
  osc1.stop(now+1.6);osc2.stop(now+1.6);
  if(typeof updatePitch==='function')updatePitch(freq);
}

// C minor pentatonic frequencies
const pianoMapZ=[523.25,587.33,622.25,698.46,783.99,880.00,932.33];
const pianoNotesLow=[261.63,293.66,311.13,349.23,392.00,440.00,466.16,523.25,587.33,622.25];
const keyMapPiano={'z':0,'x':1,'c':2,'v':3,'b':4,'n':5,'m':6};
const keyMapPianoLow={'q':0,'w':1,'e':2,'r':3,'t':4,'y':5,'u':6,'i':7,'o':8,'p':9};

// Sidebar piano note→freq and keyboard→note
const noteFreqMap={'C5':523.25,'C#5':554.37,'D5':587.33,'Eb5':622.25,'E5':659.25,'F5':698.46,'F#5':739.99,'G5':783.99,'G#5':830.61,'A5':880.00,'Bb5':932.33,'B5':987.77,'C6':1046.50};
const kbToNote={'a':'C5','w':'C#5','s':'D5','e':'Eb5','d':'E5','f':'F5','t':'F#5','g':'G5','y':'G#5','h':'A5','u':'Bb5','j':'B5','k':'C6'};
function playPianoNote(noteName){const freq=noteFreqMap[noteName];if(freq)playPiano(freq);}

// --- DRUM SYNTH ---
function playKick(){
  const ctx=getCtx();const now=ctx.currentTime;
  const osc=ctx.createOscillator();osc.type='sine';
  osc.frequency.setValueAtTime(200,now);
  osc.frequency.exponentialRampToValueAtTime(15,now+0.8);
  const osc2=ctx.createOscillator();osc2.type='sine';
  osc2.frequency.setValueAtTime(100,now);
  osc2.frequency.exponentialRampToValueAtTime(10,now+0.6);
  const g=ctx.createGain();g.gain.setValueAtTime(1,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.8);
  osc.connect(g);osc2.connect(g);g.connect(ctx.destination);
  osc.start(now);osc2.start(now);osc.stop(now+0.8);osc2.stop(now+0.8);
}
function playSnare(){
  const ctx=getCtx();const now=ctx.currentTime;
  // Noise
  const buf=ctx.createBuffer(1,ctx.sampleRate*0.2,ctx.sampleRate);
  const d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  const noise=ctx.createBufferSource();noise.buffer=buf;
  const nf=ctx.createBiquadFilter();nf.type='highpass';nf.frequency.value=1000;
  const ng=ctx.createGain();ng.gain.setValueAtTime(0.8,now);ng.gain.exponentialRampToValueAtTime(0.01,now+0.2);
  noise.connect(nf);nf.connect(ng);ng.connect(ctx.destination);
  // Body
  const osc=ctx.createOscillator();osc.type='triangle';osc.frequency.value=180;
  const g=ctx.createGain();g.gain.setValueAtTime(0.7,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.1);
  osc.connect(g);g.connect(ctx.destination);
  noise.start(now);osc.start(now);noise.stop(now+0.2);osc.stop(now+0.1);
}
function playHat(){
  const ctx=getCtx();const now=ctx.currentTime;
  const buf=ctx.createBuffer(1,ctx.sampleRate*0.05,ctx.sampleRate);
  const d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  const noise=ctx.createBufferSource();noise.buffer=buf;
  const hp=ctx.createBiquadFilter();hp.type='highpass';hp.frequency.value=7000;
  const g=ctx.createGain();g.gain.setValueAtTime(0.5,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.05);
  noise.connect(hp);hp.connect(g);g.connect(ctx.destination);noise.start(now);noise.stop(now+0.05);
}
function playClap(){
  const ctx=getCtx();const now=ctx.currentTime;
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
  const ctx=getCtx();const now=ctx.currentTime;
  const osc=ctx.createOscillator();osc.type='sine';osc.frequency.value=800;
  const g=ctx.createGain();g.gain.setValueAtTime(0.5,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.15);
  osc.connect(g);g.connect(ctx.destination);osc.start(now);osc.stop(now+0.15);
}
function playRim(){
  const ctx=getCtx();const now=ctx.currentTime;
  const osc=ctx.createOscillator();osc.type='square';
  osc.frequency.value=1800;
  const hp=ctx.createBiquadFilter();hp.type='highpass';hp.frequency.value=2000;
  const g=ctx.createGain();g.gain.setValueAtTime(0.4,now);g.gain.exponentialRampToValueAtTime(0.01,now+0.06);
  osc.connect(hp);hp.connect(g);g.connect(ctx.destination);osc.start(now);osc.stop(now+0.06);
}

const drumFns={kick:playKick,snare:playSnare,hat:playHat,clap:playClap,perc:playPerc,rim:playRim};
const drumKeys={'1':'kick','2':'snare','3':'hat','4':'clap','5':'perc','6':'rim'};

// ===== KEYBOARD EVENT HANDLER =====
const activeKeys=new Set();
document.addEventListener('keydown',e=>{
  if(activeKeys.has(e.key))return;
  activeKeys.add(e.key);
  const k=e.key.toLowerCase();

  // SIDEBAR PIANO (A W S E D F T G Y H U J K)
  if(kbToNote.hasOwnProperty(k)){
    playPianoNote(kbToNote[k]);
    const el=document.querySelector(`.piano-key[data-note="${kbToNote[k]}"]`);
    if(el){el.classList.add('hit');setTimeout(()=>el.classList.remove('hit'),300);}
    return; // don't fall through to drums
  }
  // Drums: 1=kick 2=snare 3=hat 4=clap 5=perc 6=rim
  if(drumKeys.hasOwnProperty(k)){
    drumFns[drumKeys[k]]();
    highlightDrumPad(drumKeys[k]);
  }
});
document.addEventListener('keyup',e=>{activeKeys.delete(e.key);});

// ===== VISUAL FEEDBACK =====
function highlightPianoKey(idx){
  const keys=document.querySelectorAll('.piano-key');
  if(keys[idx]){keys[idx].classList.add('hit');setTimeout(()=>keys[idx].classList.remove('hit'),300);}
}
function highlightDrumPad(name){
  const pad=document.querySelector(`.drum-pad[data-drum="${name}"]`);
  if(pad){pad.classList.add('hit');setTimeout(()=>pad.classList.remove('hit'),200);}
}

// Drum pad click
document.querySelectorAll('.drum-pad').forEach(pad=>{
  pad.addEventListener('mousedown',()=>{drumFns[pad.dataset.drum]();pad.classList.add('hit');});
  pad.addEventListener('mouseup',()=>pad.classList.remove('hit'));
  pad.addEventListener('mouseleave',()=>pad.classList.remove('hit'));
  pad.addEventListener('touchstart',e=>{e.preventDefault();drumFns[pad.dataset.drum]();pad.classList.add('hit');});
  pad.addEventListener('touchend',()=>pad.classList.remove('hit'));
});

// Piano key click
document.querySelectorAll('.piano-key').forEach((key,i)=>{
  key.addEventListener('mousedown',()=>{
    const freq=i<7?pianoMapZ[i]:(i<17?pianoNotesLow[i-7]:pianoMapZ[i%7]);
    playPiano(freq);key.classList.add('hit');
  });
  key.addEventListener('mouseup',()=>key.classList.remove('hit'));
  key.addEventListener('mouseleave',()=>key.classList.remove('hit'));
});

// ===== KNOB DRAG =====
(function(){
  const knobs=document.querySelectorAll('.knob');
  let dragging=null,startY=0,startVal=0;
  knobs.forEach(knob=>{
    knob.addEventListener('mousedown',e=>{
      dragging=knob;startY=e.clientY;startVal=parseInt(knob.dataset.value)||50;
      document.body.style.cursor='grabbing';
    });
  });
  document.addEventListener('mousemove',e=>{
    if(!dragging)return;
    const diff=startY-e.clientY;
    const val=Math.max(0,Math.min(100,startVal+diff));
    dragging.dataset.value=val;
    const rot=(val-50)*2.7;
    dragging.style.background=`conic-gradient(from ${220+rot}deg,var(--orange),#333 70%,#333)`;
  });
  document.addEventListener('mouseup',()=>{dragging=null;document.body.style.cursor='';});
})();

// ===== FPC DRUM PADS (gamified click pads) =====
document.querySelectorAll('.fpc-pad').forEach(pad=>{
  pad.addEventListener('mousedown',()=>{
    drumFns[pad.dataset.sound]();
    pad.classList.add('hit');
  });
  pad.addEventListener('mouseup',()=>pad.classList.remove('hit'));
  pad.addEventListener('mouseleave',()=>pad.classList.remove('hit'));
  pad.addEventListener('touchstart',e=>{e.preventDefault();drumFns[pad.dataset.sound]();pad.classList.add('hit');});
  pad.addEventListener('touchend',()=>pad.classList.remove('hit'));
});

// ===== EQ CANVAS (FL Studio Fruity Parametric EQ 2 style) =====
(function(){
  const eqC=document.getElementById('eq-canvas');
  if(!eqC)return;
  const eqCtx=eqC.getContext('2d');
  const bandColors=['#e04040','#ff8c00','#c8f000','#40cc80','#5599ff'];
  
  function drawEQ(){
    eqC.width=eqC.offsetWidth;eqC.height=eqC.offsetHeight;
    const w=eqC.width,h=eqC.height;
    eqCtx.clearRect(0,0,w,h);
    
    // Background gradient (like FL Studio dark green/teal)
    const bg=eqCtx.createLinearGradient(0,0,0,h);
    bg.addColorStop(0,'#060d10');bg.addColorStop(1,'#030608');
    eqCtx.fillStyle=bg;eqCtx.fillRect(0,0,w,h);
    
    // Frequency grid lines (vertical — octave markers)
    const freqs=[63,125,250,500,1000,2000,4000,8000,16000];
    eqCtx.strokeStyle='rgba(80,120,100,0.2)';eqCtx.lineWidth=1;
    freqs.forEach(f=>{
      const x=w*(Math.log10(f/20)/Math.log10(20000/20));
      eqCtx.beginPath();eqCtx.moveTo(x,0);eqCtx.lineTo(x,h);eqCtx.stroke();
    });
    
    // dB grid lines (horizontal)
    for(let db=-18;db<=18;db+=6){
      const y=h/2-(db/36)*h;
      eqCtx.strokeStyle=db===0?'rgba(80,120,100,0.4)':'rgba(80,120,100,0.15)';
      eqCtx.beginPath();eqCtx.moveTo(0,y);eqCtx.lineTo(w,y);eqCtx.stroke();
    }
    
    // 0dB center label
    eqCtx.fillStyle='rgba(80,120,100,0.5)';eqCtx.font='7px Inter';
    eqCtx.fillText('0',2,h/2-2);
    
    // Build EQ curve from knobs
    const knobs=document.querySelectorAll('.knob');
    const vals=Array.from(knobs).map(k=>parseInt(k.dataset.value)||50);
    const bandFreqs=[80,250,1000,3000,8000];
    
    // Draw curve
    eqCtx.beginPath();
    for(let x=0;x<w;x++){
      const logPos=x/w;
      const freq=20*Math.pow(20000/20,logPos);
      let gain=0;
      vals.forEach((v,i)=>{
        const dB=(v-50)/50*14;
        const bw=2.0;
        const ratio=Math.log10(freq/bandFreqs[i]);
        gain+=dB*Math.exp(-(ratio*ratio)/(2*bw*bw));
      });
      const y=h/2-(gain/28)*h;
      if(x===0)eqCtx.moveTo(x,y);else eqCtx.lineTo(x,y);
    }
    
    // Fill under curve
    eqCtx.lineTo(w,h/2);eqCtx.lineTo(0,h/2);eqCtx.closePath();
    const grad=eqCtx.createLinearGradient(0,0,0,h);
    grad.addColorStop(0,'rgba(255,140,0,0.15)');
    grad.addColorStop(1,'rgba(255,140,0,0.02)');
    eqCtx.fillStyle=grad;eqCtx.fill();
    
    // Stroke curve
    eqCtx.beginPath();
    for(let x=0;x<w;x++){
      const freq=20*Math.pow(20000/20,x/w);
      let gain=0;
      vals.forEach((v,i)=>{
        const dB=(v-50)/50*14;
        const ratio=Math.log10(freq/bandFreqs[i]);
        gain+=dB*Math.exp(-(ratio*ratio)/(2*2.0*2.0));
      });
      const y=h/2-(gain/28)*h;
      if(x===0)eqCtx.moveTo(x,y);else eqCtx.lineTo(x,y);
    }
    eqCtx.strokeStyle='#ff8c00';eqCtx.lineWidth=1.5;eqCtx.stroke();
    
    // Band handle dots
    vals.forEach((v,i)=>{
      const x=w*(Math.log10(bandFreqs[i]/20)/Math.log10(20000/20));
      const dB=(v-50)/50*14;
      const y=h/2-(dB/28)*h;
      eqCtx.beginPath();eqCtx.arc(x,y,4,0,Math.PI*2);
      eqCtx.fillStyle=bandColors[i];eqCtx.fill();
      eqCtx.strokeStyle='rgba(0,0,0,0.5)';eqCtx.lineWidth=1;eqCtx.stroke();
    });
  }
  
  drawEQ();
  // Redraw when knobs change
  setInterval(drawEQ,300);
})();

// ===== AUTO-TUNE SLIDERS =====
document.querySelectorAll('.at-slider-wrap').forEach(slider=>{
  function update(e){
    const fill=slider.querySelector('.at-slider-fill');
    if(!fill)return;
    const rect=slider.getBoundingClientRect();
    const pct=Math.max(0,Math.min(100,((e.clientX-rect.left)/rect.width)*100));
    fill.style.width=pct+'%';
  }
  slider.addEventListener('click',update);
  let dragging=false;
  slider.addEventListener('mousedown',()=>dragging=true);
  document.addEventListener('mousemove',e=>{if(dragging)update(e);});
  document.addEventListener('mouseup',()=>dragging=false);
});
document.querySelectorAll('.at-key-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.at-key-btn').forEach(b=>b.classList.remove('active-key'));
    btn.classList.add('active-key');
  });
});

// ===== WHATSAPP CHECKOUT =====
function buyWhatsApp(produto){
  const nome=produto||'Camisa Kankiu';
  const msg=encodeURIComponent('Olá! Tenho interesse em: '+nome+'. Gostaria de comprar!');
  window.open('https://wa.me/5511976369308?text='+msg,'_blank');
}

// ===== PRESAVE POPUP =====
function closePresave(){
  const el=document.getElementById('presave-overlay');
  if(el){el.style.opacity='0';setTimeout(()=>{el.style.display='none';},300);}
}
// Show after 60 seconds
setTimeout(()=>{
  const el=document.getElementById('presave-overlay');
  if(el){
    el.classList.add('show');
    setTimeout(()=>{el.style.opacity='1';},50);
    el.addEventListener('click',e=>{if(e.target===el)closePresave();});
  }
},60000);

// ===== PRODUTO CYCLING — desktop + mobile =====
(function(){
  // Desktop
  const desktopImgs=document.querySelectorAll('#vizProdPhotos img');
  if(desktopImgs.length){
    let i=0;setInterval(()=>{desktopImgs[i].classList.remove('show');i=(i+1)%desktopImgs.length;desktopImgs[i].classList.add('show');},3000);
  }
  // Mobile
  const mobImgs=document.querySelectorAll('#vizMobProd img');
  if(mobImgs.length){
    let i=0;setInterval(()=>{mobImgs[i].classList.remove('show');i=(i+1)%mobImgs.length;mobImgs[i].classList.add('show');},3000);
  }
})();

// ===== GO LOJA =====
window.addEventListener('goLoja',()=>{
  document.querySelectorAll('header nav button').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  const loja=document.getElementById('loja');
  if(loja){loja.classList.add('active');document.body.style.overflow='auto';}
  const btn=document.querySelector('[data-section="loja"]');
  if(btn)btn.classList.add('active');
});
function showFront(){
  const w=document.getElementById('prodImgWrap');
  if(!w)return;
  w.classList.remove('show-back');
  document.querySelectorAll('.img-toggle-btn').forEach((b,i)=>b.classList.toggle('active',i===0));
}
function showBack(){
  const w=document.getElementById('prodImgWrap');
  if(!w)return;
  w.classList.add('show-back');
  document.querySelectorAll('.img-toggle-btn').forEach((b,i)=>b.classList.toggle('active',i===1));
}

// ===== PITCH DISPLAY UPDATE =====
const noteNames=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
function updatePitch(freq){
  const n=Math.round(12*Math.log2(freq/261.63))%12;
  const el=document.getElementById('pitch-display');
  if(el)el.textContent=noteNames[(n+12)%12];
}

// ===== CUSTOM CURSOR =====
(function(){
  const cur=document.getElementById('cur');
  const dot=document.getElementById('cur-dot');
  if(!cur||!dot)return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{
    mx=e.clientX;my=e.clientY;
    cur.style.left=mx+'px';cur.style.top=my+'px';
    dot.style.left=mx+'px';dot.style.top=my+'px';
  });
  const hov='button,a,.drum-pad,.fpc-pad,.knob,.piano-key,.ftag,.viz-btn,.at-btn,.at-key-btn,.tb-tab,.tb-btn,.prod-btn-buy,.prod-btn-detail,.img-toggle-btn,.at-slider-wrap';
  document.querySelectorAll(hov).forEach(el=>{
    el.addEventListener('mouseenter',()=>cur.classList.add('big'));
    el.addEventListener('mouseleave',()=>cur.classList.remove('big'));
  });
})();

// ===== 3D HERO NAME =====
(function(){
  const el=document.getElementById('pcn-label');
  if(!el)return;
  let tX=0,tY=0,cX=0,cY=0,idle=0;
  let interacting=false,idleTimer=null;
  const MAX=22;
  function onMove(x,y){
    interacting=true;clearTimeout(idleTimer);
    const rect=el.getBoundingClientRect();
    const cx=rect.left+rect.width/2,cy=rect.top+rect.height/2;
    tY=Math.max(-MAX,Math.min(MAX,(x-cx)/(window.innerWidth/2)*MAX));
    tX=Math.max(-MAX,Math.min(MAX,-(y-cy)/(window.innerHeight/2)*MAX));
    idleTimer=setTimeout(()=>{interacting=false;},2000);
  }
  document.addEventListener('mousemove',e=>onMove(e.clientX,e.clientY));
  document.addEventListener('touchmove',e=>{if(e.touches.length)onMove(e.touches[0].clientX,e.touches[0].clientY);},{passive:true});
  function tick(){
    if(!interacting){idle+=.008;tX=Math.sin(idle*.7)*6;tY=Math.cos(idle*.5)*4;}
    cX+=(tX-cX)*.07;cY+=(tY-cY)*.07;
    const s=1+Math.sqrt(cX*cX+cY*cY)/MAX*.04;
    el.style.transform=`perspective(900px) rotateX(${cX}deg) rotateY(${cY}deg) scale(${s})`;
    requestAnimationFrame(tick);
  }
  tick();
})();

// ===== PARTICLES =====
(function(){
  const c=document.getElementById('particles-canvas');
  if(!c)return;
  const ctx=c.getContext('2d');
  let W,H;
  function resize(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;}
  resize();new ResizeObserver(resize).observe(c.parentElement);
  const pts=Array.from({length:55},()=>({x:Math.random()*2000,y:Math.random()*1200,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.18,r:Math.random()*1.4+.4,o:Math.random()*.35+.08,purple:Math.random()>.55}));
  let mx=.5,my=.5;
  document.addEventListener('mousemove',e=>{mx=e.clientX/window.innerWidth;my=e.clientY/window.innerHeight;});
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx+(mx-.5)*.15;p.y+=p.vy+(my-.5)*.12;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x%W,p.y%H,p.r,0,Math.PI*2);
      ctx.fillStyle=p.purple?`rgba(168,85,247,${p.o})`:`rgba(255,106,0,${p.o})`;ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ===== VISUALIZER photo cycling =====
(function(){
  const imgs=document.querySelectorAll('#vizPhotos img');
  if(!imgs.length)return;
  let idx=0;
  setInterval(()=>{imgs[idx].classList.remove('show');idx=(idx+1)%imgs.length;imgs[idx].classList.add('show');},3500);
})();

// ===== VISUALIZER bars =====
(function(){
  const container=document.getElementById('vizBars');
  if(!container)return;
  for(let i=0;i<20;i++){
    const b=document.createElement('div');b.className='viz-bar';
    const h=(4+Math.random()*22).toFixed(0),d=(.2+Math.random()*.5).toFixed(2),dl=(Math.random()*.35).toFixed(2);
    b.style.cssText=`--h:${h}px;--d:${d}s;--dl:${dl}s`;container.appendChild(b);
  }
})();

// ===== VIZ ctrl buttons =====
document.querySelectorAll('.viz-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{document.querySelectorAll('.viz-btn').forEach(b=>b.classList.remove('on'));btn.classList.add('on');});
});

// ===== FLOATING TAGS =====
document.querySelectorAll('.ftag').forEach(t=>t.addEventListener('click',()=>t.classList.toggle('on')));


