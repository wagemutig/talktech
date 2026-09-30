/* TALK-TECH site behaviour: language toggle, contact form, explorer tabs, hero rain */
(function(){
  var lang='de';
  var opts={
    'Berufsfachschule':{de:['Demo für meine Klasse','Pilotlektion durchführen','Allgemeine Frage'],en:['Demo for my class','Run a pilot lesson','General question']},
    'Verband / Lehrmittel':{de:['Integration in Lehrmittel','Partnerschaft','Allgemeine Frage'],en:['Integration into teaching materials','Partnership','General question']},
    'Lehrbetrieb':{de:['Eigenes Szenario entwickeln','Demo für Berufsbildner:innen','Allgemeine Frage'],en:['Develop a custom scenario','Demo for vocational trainers','General question']}
  };
  var sel=document.getElementById('w');
  function aud(){var c=document.querySelector('input[name=aud]:checked');return c?c.value:'Berufsfachschule'}
  function fill(){var o=opts[aud()][lang];sel.innerHTML='';o.forEach(function(t){var x=document.createElement('option');x.textContent=t;sel.appendChild(x)})}
  document.querySelectorAll('input[name=aud]').forEach(function(r){r.addEventListener('change',fill)});
  var els=document.querySelectorAll('[data-en]');
  els.forEach(function(el){el.setAttribute('data-de',el.innerHTML)});
  function setLang(l){
    lang=l;document.documentElement.lang=l;
    els.forEach(function(el){el.innerHTML=el.getAttribute('data-'+l)});
    document.getElementById('l-de').setAttribute('aria-pressed',l==='de');
    document.getElementById('l-en').setAttribute('aria-pressed',l==='en');
    var m=document.getElementById('m');m.placeholder=m.getAttribute('data-ph-'+l);
    fill();
    if(window.__show)window.__show();
    try{localStorage.setItem('tt-lang',l)}catch(e){}
  }
  document.getElementById('l-de').onclick=function(){setLang('de')};
  document.getElementById('l-en').onclick=function(){setLang('en')};
  var saved='de';try{saved=localStorage.getItem('tt-lang')||'de'}catch(e){}
  setLang(saved);


  // explorer tabs
  var tabs=[].slice.call(document.querySelectorAll('.tab')),cur=0;
  function show(i,focus){if(i===undefined)i=cur;
    cur=(i+tabs.length)%tabs.length;
    tabs.forEach(function(t,j){var on=j===cur;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!on});
    if(focus)tabs[cur].focus();
    var tl=tabs[cur].parentNode;tl.scrollLeft=tabs[cur].offsetLeft-tl.offsetLeft-8;
    document.getElementById('count').textContent=(cur+1)+' / '+tabs.length;
    document.getElementById('prev').disabled=cur===0;
    var last=cur===tabs.length-1;
    document.getElementById('next-l').textContent=last?(lang==='de'?'Demo anfragen':'Request a demo'):tabs[cur+1].textContent;
    document.getElementById('next').classList.toggle('go',last);
  }
  tabs.forEach(function(t,i){t.addEventListener('click',function(){show(i)});t.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){show(cur+1,true);e.preventDefault()}if(e.key==='ArrowLeft'){show(cur-1,true);e.preventDefault()}})});
  window.__show=function(){show()};
  show(0);
  document.getElementById('prev').onclick=function(){show(cur-1)};
  document.getElementById('next').onclick=function(){if(cur===tabs.length-1){document.getElementById('kontakt').scrollIntoView({behavior:'smooth'});return}show(cur+1)};
  var px=null,pn=document.querySelector('.panels');
  pn.addEventListener('touchstart',function(e){px=e.touches[0].clientX},{passive:true});
  pn.addEventListener('touchend',function(e){if(px===null)return;var dx=e.changedTouches[0].clientX-px;if(Math.abs(dx)>60)show(cur+(dx<0?1:-1));px=null});
  // «Pilot» lives in a tab, not a section: open the tab, then scroll to the explorer
  function openPilot(){
    show(3);
    var ex=document.querySelector('#mr-barker .explorer');
    var smooth=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    ex.scrollIntoView({behavior:smooth?'smooth':'auto',block:'start'});
  }
  document.querySelectorAll('a[href="#pilot"]').forEach(function(a){a.addEventListener('click',function(e){
    e.preventDefault();openPilot();
    try{history.replaceState(null,'','#pilot')}catch(err){}
  })});
  window.addEventListener('hashchange',function(){if(location.hash==='#pilot')openPilot()});
  if(location.hash==='#pilot')requestAnimationFrame(openPilot);

  document.getElementById('f').addEventListener('submit',function(ev){
    ev.preventDefault();
    var n=document.getElementById('n'),e=document.getElementById('e'),d=document.getElementById('done');
    if(!n.value.trim()||!/.+@.+\..+/.test(e.value)){
      d.hidden=false;d.style.borderColor='var(--warn)';
      d.textContent=lang==='de'?'Bitte Name und eine gültige E-Mail-Adresse angeben.':'Please enter your name and a valid email address.';
      (n.value.trim()?e:n).focus();return;
    }
    var f=ev.target,btn=f.querySelector('button[type=submit]');btn.disabled=true;
    d.hidden=false;d.style.borderColor='';d.textContent=lang==='de'?'Wird gesendet …':'Sending …';
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(f)).toString()})
      .then(function(r){if(!r.ok)throw new Error(r.status);
        d.textContent=lang==='de'?'Danke, '+n.value.trim()+'. Ihre Anfrage ist bei uns angekommen. Wir melden uns persönlich.':'Thanks, '+n.value.trim()+'. We received your request and will get back to you personally.';
        f.reset();fill();})
      .catch(function(){d.style.borderColor='var(--warn)';
        d.textContent=lang==='de'?'Das Senden hat nicht geklappt. Bitte versuchen Sie es in einem Moment nochmals.':'Sending failed. Please try again in a moment.';})
      .finally(function(){btn.disabled=false});
  });

  // hero rain: falling K1/K2/K3, binary and TALK-TECH glyphs (echoing the team shirt).
  // Reacts to the cursor (desktop), touch drag, and device tilt where the browser allows it.
  var hero=document.querySelector('.hero'),cv=document.getElementById('rain'),cx=cv.getContext('2d');
  var GL=['0','1','0','1','K1','K2','K3','T','A','L','K','E','C','H'],LH=18,R=280;
  var cols=[],W=0,H=0,dpr=1,colors=['#3d72b8','#3b938f','#3c9a5a'];
  var ptr={x:-9999,y:-9999,on:false},pS={x:-9999,y:-9999,k:0},tilt={x:0,y:0},tiltT={x:0,y:0},gotTilt=false;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function css(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim()}
  function readColors(){colors=[css('--blue'),css('--teal'),css('--green')]}
  function rg(){return Math.floor(Math.random()*GL.length)}
  function size(){
    dpr=Math.min(window.devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;
    cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
    cols=[];var step=W<600?34:44;
    for(var x=10;x<W;x+=step){var len=5+Math.floor(Math.random()*10),g=[];for(var i=0;i<len;i++)g.push(rg());
      cols.push({x:x+Math.random()*12,y:Math.random()*(H+200),v:28+Math.random()*52,len:len,c:Math.floor(Math.random()*3),g:g})}
  }
  function draw(){
    cx.clearRect(0,0,W,H);cx.font='500 12px "IBM Plex Mono", ui-monospace, monospace';cx.textAlign='center';cx.textBaseline='middle';
    var slant=tilt.x*0.35;
    for(var k=0;k<cols.length;k++){var c=cols[k];cx.fillStyle=colors[c.c];
      for(var i=0;i<c.len;i++){
        var y=c.y-i*LH;if(y<-20||y>H+20)continue;
        var x=c.x+i*LH*slant,a=(1-i/c.len)*.5;if(i===0)a=.95;
        if(pS.k>.01){var dx=x-pS.x,dy=y-pS.y,d=Math.sqrt(dx*dx+dy*dy);
          if(d<R){var f=(1-d/R)*pS.k,e=f*f*(3-2*f);x+=(dx>=0?1:-1)*e*48;a=Math.min(1,a+e*.75);if(Math.random()<e*.03)c.g[i]=rg()}}
        cx.globalAlpha=a;cx.fillText(GL[c.g[i]],x,y);
      }}
    cx.globalAlpha=1;
  }
  var raf=0,last=0,running=false,visible=true;
  function tick(t){
    var dt=Math.min(.05,(t-(last||t))/1000);last=t;
    tilt.x+=(tiltT.x-tilt.x)*.08;tilt.y+=(tiltT.y-tilt.y)*.08;
    if(ptr.on){if(pS.k<.01){pS.x=ptr.x;pS.y=ptr.y}pS.x+=(ptr.x-pS.x)*.06;pS.y+=(ptr.y-pS.y)*.06}
    pS.k+=((ptr.on?1:0)-pS.k)*.05;
    var speed=Math.max(.25,1+tilt.y*1.1);
    for(var k=0;k<cols.length;k++){var c=cols[k];
      var slow=1;if(pS.k>.01){var hx=Math.abs(c.x-pS.x),top=c.y-c.len*LH;
        if(hx<R&&pS.y>top-R&&pS.y<c.y+R){var q=1-hx/R;slow=1-.85*q*q*(3-2*q)*pS.k}}
      c.y+=c.v*speed*slow*dt;c.x+=tilt.x*40*dt;
      if(c.x<-20)c.x+=W+40;else if(c.x>W+20)c.x-=W+40;
      if(c.y-c.len*LH>H){c.y=-10-Math.random()*120;for(var i=0;i<c.len;i++)c.g[i]=rg()}
      if(Math.random()<.04*slow)c.g[Math.floor(Math.random()*c.len)]=rg();
    }
    draw();raf=requestAnimationFrame(tick);
  }
  function start(){if(running||reduce||!visible||document.hidden)return;running=true;last=0;raf=requestAnimationFrame(tick)}
  function stop(){running=false;cancelAnimationFrame(raf)}

  // cursor / touch
  function setPtr(clientX,clientY){var r=cv.getBoundingClientRect();ptr.x=clientX-r.left;ptr.y=clientY-r.top;ptr.on=true;
    if(!gotTilt){tiltT.x=(ptr.x/W-.5)*.8}
    if(reduce)draw()}
  hero.addEventListener('pointermove',function(e){setPtr(e.clientX,e.clientY)});
  hero.addEventListener('pointerleave',function(){ptr.on=false;if(!gotTilt)tiltT.x=0;if(reduce)draw()});
  hero.addEventListener('touchmove',function(e){var t=e.touches[0];if(t)setPtr(t.clientX,t.clientY)},{passive:true});
  hero.addEventListener('touchend',function(){ptr.on=false},{passive:true});

  // device tilt (iOS asks for permission on the first tap; Android sends events directly)
  function onOri(e){if(e.gamma==null&&e.beta==null)return;gotTilt=true;
    var g=Math.max(-1,Math.min(1,(e.gamma||0)/30)),b=Math.max(-1,Math.min(1,((e.beta||45)-45)/35));
    tiltT.x=g;tiltT.y=b}
  if(window.DeviceOrientationEvent){
    if(typeof DeviceOrientationEvent.requestPermission==='function'){
      var ask=function(){document.removeEventListener('touchend',ask);
        try{DeviceOrientationEvent.requestPermission().then(function(s){if(s==='granted')window.addEventListener('deviceorientation',onOri)}).catch(function(){})}catch(err){}};
      document.addEventListener('touchend',ask,{passive:true});
    }else{window.addEventListener('deviceorientation',onOri)}
  }

  // pause when the hero is off screen or the tab is hidden; re-read colors on theme change
  if('IntersectionObserver' in window){new IntersectionObserver(function(en){visible=en[0].isIntersecting;visible?start():stop()}).observe(hero)}
  document.addEventListener('visibilitychange',function(){document.hidden?stop():start()});
  try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){readColors();draw()})}catch(e){}
  new MutationObserver(function(){readColors();draw()}).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  var rs;window.addEventListener('resize',function(){clearTimeout(rs);rs=setTimeout(function(){size();draw()},120)});
  readColors();size();draw();start();
})();
