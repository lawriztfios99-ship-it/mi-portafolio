/* =========================================================
   MEJORAS DEL PORTAFOLIO v3 · Lau Ocampo · Tres y Nueve Creativo
   Se carga DESPUÉS del script principal del index.html:
   <script src="mejoras.js"></script>   (justo antes de </body>)
   Para agregar proyectos, marcas o fotos solo edita la zona DATOS.
   ========================================================= */
(()=>{
/* ---------- DATOS (edita aquí) ---------- */
const D={
  wa:"", // WhatsApp con indicativo, ej: "573001234567". Vacío = no se muestra
  behance:[
    {k:"video", t:"Edición de video", d:"Reels y videos editados", u:"https://www.behance.net/gallery/231181729/Edicion-de-Video", img:"laura/PORTADAS PROYECTOS/EDICIÓN DE VIDEO PORTADA.jpg", cta:"VER PROYECTOS DE EDICIÓN DE VIDEO"},
    {k:"social", t:"Social media · Parte 1", d:"Posts y carruseles", u:"https://www.behance.net/gallery/230686035/Social-Media-Parte-1-(Marcas-Disenos)", img:"laura/PORTADAS PROYECTOS/SOCIAL MEDIA PORTADA 1.jpg", cta:"VER SOCIAL MEDIA – PARTE 1"},
    {k:"social", t:"Social media · Parte 2", d:"Más marcas y diseños", u:"https://www.behance.net/gallery/230688607/Social-Media-Parte-2-(Marcas-Disenos)", img:"laura/PORTADAS PROYECTOS/SOCIAL MEDIA PORTADA 2.jpg", cta:"VER SOCIAL MEDIA – PARTE 2"}
  ],
  behanceBanner:"laura/PORTADAS PROYECTOS/PORTADA BEHANCE.jpg",
  videos:[],
  web:[
    {t:"Brunello House",u:"https://www.behance.net/gallery/230681485/Realizacion-website-Brunello-House",img:"assets/projects/brunello-house.jpg",logo:"",txt:"Brunello"},
    {t:"Ahomas Sanación",u:"https://www.behance.net/gallery/230681119/Sitio-web-realizado-para-Ahomas-Sanacion",img:"assets/projects/ahomas.jpg",logo:"AHOMAS.jpg"},
    {t:"Zaria Realty Group",u:"https://www.behance.net/gallery/230679461/Sitio-Web-Realizado-Para-Zaria-Realty-Group",img:"assets/projects/zaria.jpg",logo:"ZARAREALTY.jpg"},
    {t:"Colony Springs Medical Center",u:"https://colonyspringsmedical.com/",img:"assets/projects/colony-springs.jpg",logo:"COLONY.jpg"}
  ],
  ig:{user:"laurafranco_creativa",url:"https://www.instagram.com/laurafranco_creativa",seguidores:"1063",seguidos:"444",
      name:"LauraOFranco | Marketing de Contenido y Diseño 🎨",
      bio:["✨ Diseñadora de contenido | Meta ADS","🎥 Editora de videos | Landing Pages","⬆️ Te ayudo a destacar tu marca","📍 Medellín"],
      avatar:"assets/instagram/avatar.jpg",
      usuarioList:["assets/instagram/usuario-instagram.png","FEED INSTAGRAM/USUARIO INSTAGRAM.png"],
      feedList:["assets/instagram/feed-instagram.jpg","FEED INSTAGRAM/FEED INSTAGRAM.png"]},
  igPosts:[
    {img:"assets/instagram/ig-1.jpg",u:""},{img:"assets/instagram/ig-2.jpg",u:""},{img:"assets/instagram/ig-3.jpg",u:""},
    {img:"assets/instagram/ig-4.jpg",u:""},{img:"assets/instagram/ig-5.jpg",u:""},{img:"assets/instagram/ig-6.jpg",u:""}
  ],
  linkedin:{url:"https://www.linkedin.com/in/lauraocampofranco-ab576623a",name:"Laura Ocampo Franco",
      headline:"Marketing digital · Meta Ads · Diseño | Fundadora de Tres y Nueve Creativo",
      foto:"laura/laura.jpg.jpg", logo:"LOGOS/LINKEDIN.jpg",
      banner:"assets/images/linkedin-banner.jpg"},
  marcas:[
    ["Zaria Realty Group","ZARAREALTY.jpg","Real estate"],["Fortex Realty","FORTEX.jpg","Real estate"],
    ["Innovation Mortgage","INNOVATION.jpg","Real estate"],["Miami Tax Team","MIAMI TAXTEAM.jpg","Real estate"],
    ["Colony Springs","COLONY.jpg","Salud"],["Tapisc","TAPISC.jpg","Muebles"],
    ["Ahomas","AHOMAS.jpg","Bienestar"],["ACSSL","ACSSL.jpg","Educación y asesorías"],
    ["Success Orlando","SUCCESS ORLANDO.jpg","Educación y asesorías"],["Industrias Cory","INDUSTRIAS CORY.jpg","Productos de limpieza"],
    ["Bivrantti","BIVRANTTI.jpg","Otros"],["Kuantika","KUANTIKA.jpg","Otros"],["Saelu","SAELU.jpg","Otros"],["Tres y Nueve Creativo","TRESYNUEVE.jpg","Otros"]
  ],
  tools:{"Meta Ads":"META 2.jpg","TikTok Ads":"TIKTOK 1.jpg","Google Ads":"GOOGLE 2.jpg","WordPress":"WORDPRESS.jpg","Illustrator":"ILUSTRATOR.jpg","Photoshop":"PHOTOSHOP.jpg","After Effects":"AFTEREFFECTS.jpg","Canva":"CANVA.jpg","CapCut":"CAPCUT.jpg","IA en todo":"IA.jpg","Mailchimp":"MAILCHIMP.jpg"},
  servicios:{pauta:"PAUTA DIGITAL.jpg",redes:"REDES SOCIALES.jpg",web:"LANDING PAGE.jpg","videos-ia":"EDICION IA.jpg",crm:"CRM Y BOT.jpg",mentorias:"MENTORIAS.png"}
};

/* ---------- Utilidades ---------- */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const E=encodeURI,pal=["#9fd8e6","#c9b3f0","#f6b8d1","#b8ecd2"];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const IMG=(src,alt="",rm="this.remove()")=>src?`<img src="${E(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="${rm}">`:"";
const mail=(window.CONFIG&&CONFIG.email)||"lawriztfios99@gmail.com";
const trim=src=>new Promise(res=>{const im=new Image();im.onload=()=>{try{
  const w=im.naturalWidth,h=im.naturalHeight,c=document.createElement("canvas");c.width=w;c.height=h;
  const x=c.getContext("2d");x.drawImage(im,0,0);const d=x.getImageData(0,0,w,h).data;let t=h,b=-1,l=w,r=-1;
  for(let y=0;y<h;y++)for(let i=0;i<w;i++)if(d[(y*w+i)*4+3]>8){if(y<t)t=y;if(y>b)b=y;if(i<l)l=i;if(i>r)r=i}
  if(b<0)return res(E(src));const o=document.createElement("canvas");o.width=r-l+1;o.height=b-t+1;
  o.getContext("2d").drawImage(c,l,t,o.width,o.height,0,0,o.width,o.height);res(o.toDataURL("image/png"))}catch(e){res(E(src))}};
  im.onerror=()=>res(null);im.src=E(src)});
const first=async l=>{for(const s of l){const r=await trim(s);if(r)return r}return null};
const BEH="https://www.behance.net/lauraocampo99";

/* ---------- Estilos ---------- */
document.head.insertAdjacentHTML("beforeend",`<style>
.btn{transition:.3s}.btn.sm{padding:11px 20px;font-size:.88rem;min-height:44px}
.btn.fill:hover{background:var(--menta);border-color:var(--menta);transform:translateY(-3px)}
.btn:not(.fill):hover{background:var(--lila);color:#2a2a2c;transform:translateY(-3px)}
.more{margin-top:50px}.more .sub{margin-top:0}
.lead.sm2{margin:6px 0 18px}

/* QUIÉN SOY */
.about .grid{grid-template-columns:.95fr 1.05fr;align-items:center;gap:clamp(24px,4vw,56px)}
.about .grid>.rv:last-child{display:flex;flex-direction:column}
.about .polas{order:-1;margin:0 0 26px;gap:16px}
.about .pola{padding:9px 9px 30px}
.about .stats{gap:12px}.about .stat{padding:16px 18px}
.about .stat b{font-size:clamp(1.6rem,3.6vw,2.2rem)}
@media(min-width:821px){.about .rv p{text-align:justify;hyphens:auto}.about .rv p.script{text-align:left}}
@media(max-width:820px){.about .polas{margin-bottom:20px}}

/* SERVICIOS */
.ejemplo{display:none!important}
.panel .side{align-self:stretch}
.panel .sv-img{height:100%;min-height:260px;aspect-ratio:auto}
@media(max-width:820px){.panel .sv-img{aspect-ratio:4/3;height:auto;min-height:0}}
.svgo{position:absolute;inset:0;z-index:2;display:flex;align-items:flex-end;justify-content:center;padding:14px}
.svgo span{background:var(--menta);color:#2a2a2c;font-weight:800;font-size:.85rem;padding:9px 18px;border-radius:999px;transition:.3s;box-shadow:0 8px 20px rgba(0,0,0,.35)}
.svgo:hover span{background:var(--rosa);transform:translateY(-4px)}
.sv-img img{transition:transform .6s}.sv-img:hover img{transform:scale(1.05)}

/* PROYECTOS */
.bhg{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:16px}
.bc,.wcard{display:flex;flex-direction:column;border-radius:var(--radius);overflow:hidden;background:var(--bg2);border:1px solid rgba(255,255,255,.1);transition:.3s}
.bc:hover,.wcard:hover{transform:translateY(-8px) rotate(-.8deg);border-color:var(--c)}
.cv{position:relative;flex:none;min-height:0;aspect-ratio:5/3;overflow:hidden;background:linear-gradient(135deg,var(--c),rgba(255,255,255,.06))}
.cv>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:2;transition:transform .6s}
.bc:hover .cv>img,.wcard:hover .cv>img{transform:scale(1.07)}
.ob{position:absolute;top:12px;right:12px;z-index:3;background:rgba(42,42,44,.85);color:#fff;font-weight:800;font-size:.72rem;padding:6px 12px;border-radius:999px}
.cv.mock{display:grid;place-items:center}
.film{position:absolute;left:0;right:0;height:16px;background:repeating-linear-gradient(90deg,rgba(42,42,44,.55) 0 14px,transparent 14px 26px)}
.film.t{top:10px}.film.b{bottom:10px}
.play{width:78px;height:78px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 12px 30px rgba(0,0,0,.35);animation:bob 3s ease-in-out infinite}
.play:before{content:"";border-left:22px solid #2a2a2c;border-block:13px solid transparent;margin-left:7px}
.mosaic{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:78%}
.mosaic b{aspect-ratio:4/5;border-radius:10px;background:#fff;opacity:.9}
.mosaic b:nth-child(2n){background:var(--c);opacity:1}.mosaic b:nth-child(3n){opacity:.55}
.browser{width:80%;background:#2a2a2c;border-radius:12px;padding:10px;box-shadow:0 14px 30px rgba(0,0,0,.35)}
.browser s{display:inline-block;width:8px;height:8px;border-radius:50%;background:#fff;margin-right:5px;opacity:.7}
.browser u{display:block;height:46px;margin-top:10px;border-radius:8px;background:#fff;text-decoration:none;display:grid;place-items:center;overflow:hidden}
.browser u img{max-width:80%;max-height:38px;object-fit:contain}
.browser em{display:block;height:7px;border-radius:4px;background:var(--c);margin-top:8px;width:70%}
.browser em+em{width:45%;background:#fff;opacity:.4}
.browser u b{font-family:"Archivo Black",sans-serif;color:#2a2a2c;font-size:1.05rem;letter-spacing:.05em}
.bd{padding:14px 18px 18px}.bd h3{font-size:1.02rem;margin-bottom:4px}.bd p{color:var(--muted);font-size:.85rem;margin-bottom:6px}
.bd span{color:var(--c);font-weight:800;font-size:.82rem}
.webg{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr));gap:16px}
.vids{display:flex;gap:14px;overflow-x:auto;margin-top:16px;padding-bottom:8px}
.vids video{flex:0 0 min(200px,56vw);aspect-ratio:9/16;border-radius:18px;object-fit:cover;background:var(--bg2)}

/* REDES */
.sgrid{display:grid;grid-template-columns:1.3fr .7fr;gap:24px;align-items:stretch}
.ig{display:flex;flex-direction:column;align-items:flex-start;gap:16px;transition:.3s;background:transparent;border:none;padding:0}
.ig-top{display:flex;align-items:center;gap:12px;margin-bottom:6px}
.ig-top img{width:42px;height:42px;object-fit:contain;border-radius:10px}
.ig-top span{font-size:1.15rem;font-weight:800;color:#fff}
.igh{display:flex;gap:clamp(14px,3vw,28px);align-items:center;flex-wrap:wrap;margin-bottom:20px}
.igh .av{width:clamp(76px,14vw,110px);aspect-ratio:1;border-radius:50%;object-fit:cover;border:3px solid var(--lila);background:var(--lila);flex:none}
.igh .info{flex:1;min-width:200px}
.igh .top{display:flex;gap:12px;align-items:center;flex-wrap:wrap}
.igh .top b{font-size:1.1rem}
.igh .st{display:flex;gap:18px;margin:8px 0;font-size:.9rem;color:var(--muted)}.igh .st b{color:#fff}
.igh .nm{font-weight:800;font-size:.9rem}.igh .bio{color:var(--muted);font-size:.86rem;line-height:1.5}
.igrid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}
.igrid a{aspect-ratio:4/5;overflow:hidden;position:relative;background:var(--bg)}
.igrid img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s}
.igrid a:hover img{transform:scale(1.08)}
.lin{display:flex;flex-direction:column;border-radius:var(--radius);overflow:hidden;background:var(--bg2);border:2px solid var(--mar);transition:.3s}
.lin:hover{transform:translateY(-8px) rotate(-.6deg);box-shadow:0 20px 40px rgba(159,216,230,.15)}
.lin .bn{height:110px;background:linear-gradient(120deg,var(--mar),var(--lila),var(--rosa));position:relative;overflow:hidden}
.lin .bn img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.lin .av2{width:104px;height:104px;border-radius:50%;object-fit:cover;border:4px solid var(--bg2);margin:-52px 0 0 22px;position:relative;background:var(--lila)}
.lin .bd2{padding:10px 22px 24px;display:flex;flex-direction:column;gap:6px;flex:1}
.lin h3{font-size:1.25rem}.lin p{color:var(--muted);font-size:.92rem;margin-bottom:10px}
.lin .btn{align-self:flex-start;margin-top:auto}
.lin .in{color:var(--mar);font-weight:800;font-size:.78rem;letter-spacing:.12em;text-transform:uppercase}
@media(max-width:900px){.sgrid{grid-template-columns:1fr}}

/* HERRAMIENTAS */
.tools{grid-template-columns:repeat(auto-fill,minmax(104px,1fr))}
.tool{padding:12px}.tool span{display:none}
.tool i{width:100%;height:auto;aspect-ratio:1;margin:0;border-radius:16px;background:#fff;padding:14px;max-width:92px;margin:0 auto}
.tool i img{width:100%;height:100%;object-fit:contain;border-radius:10px}
@media(max-width:520px){.tools{grid-template-columns:repeat(3,1fr);gap:10px}.tool{padding:8px}}

/* MARCAS */
.mq{overflow:hidden;margin-top:22px;border-radius:var(--radius);padding:18px 0;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1)}
.mq .trk{display:flex;gap:18px;width:max-content;animation:slide 45s linear infinite}
.mq:hover .trk{animation-play-state:paused}
.lg2{width:150px;height:116px;flex:none;display:grid;place-items:center;background:#fff;border-radius:20px;overflow:hidden;transition:.3s}
.lg2 img{width:72px;height:72px;object-fit:contain}
.lg2:hover{transform:translateY(-6px) rotate(-1.5deg)}
@media(max-width:600px){.lg2{width:116px;height:92px;border-radius:16px}.lg2 img{width:58px;height:58px}.mq .trk{gap:12px}}

.ig:hover{transform:translateY(-6px)}
.igf{width:100%;height:auto;border-radius:14px;box-shadow:0 4px 15px rgba(0,0,0,0.2)}
.lin .bn.lg{background:#fff;height:130px;display:grid;place-items:center}
.lin .bn.lg img{object-fit:contain;padding:16px}
.bc.wide{margin-top:18px}.bc.wide .cv{aspect-ratio:16/6;min-height:150px;flex:none}
@media(max-width:600px){.bc.wide .cv{aspect-ratio:16/9}}
.tl.now{border-color:var(--rosa);box-shadow:0 0 0 1px var(--rosa),0 18px 40px rgba(246,184,209,.12)}
.tl.now .nuevo{display:inline-block;margin-left:8px;background:var(--rosa);color:#2a2a2c;font-size:.66rem;font-weight:800;padding:3px 10px;border-radius:999px}
.quick{margin-top:16px}.fcontact{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:18px}

/* =====================================================
   AJUSTES v4 (estabilidad en móvil y PC)
   ===================================================== */
html,body{max-width:100%}
body{overflow-x:clip}
.hero{overflow:clip}
.hero .wrap{max-width:100%}
.frame img{object-position:center 12%}

/* texto que se escribe: altura fija para que nada salte */
.role{min-height:1.7em}

/* PC: las fotos flotantes se ocultan si pueden tapar el texto */
@media(min-width:821px) and (max-width:1399px){.fl{display:none}}
@media(min-width:1400px){.sticker{transition:transform .25s ease-out}}

/* CELULAR / TÁCTIL */
@media(max-width:820px){
  .role{min-height:3.4em;display:flex;align-items:flex-start;justify-content:center}

  .photo{width:min(300px,82%);margin-top:6px}
  .frame{border-radius:150px 150px 24px 24px}

  .sticker{font-size:.7rem;padding:6px 11px;max-width:70vw}
  .s2{top:50%;right:auto;left:-12px}
  .s1{left:auto;right:-12px;bottom:70px}
  .s3{right:auto;left:-4px;bottom:16px}

  .doll{left:-22px;top:-20px;width:76px}
  .fl{max-width:22vw}
  .tabs,.filters{margin-inline:0;padding-inline:0}
}

/* quitar efectos pesados en pantallas táctiles (evita fallos al hacer zoom) */
@media(hover:none),(max-width:820px){
  body{background-image:none}
  .blob{animation:none;filter:blur(40px);opacity:.22;max-width:60vw;max-height:60vw}
  .b1{left:-60px}.b2{right:-50px}
  .fl .in{animation:none}
  #glow{display:none}
  .bar{backdrop-filter:none;-webkit-backdrop-filter:none;background:rgba(42,42,44,.96)}
}
</style>`);

/* ---------- 1. QUIÉN SOY (resumido) ---------- */
const q=$("#quien .rv");
if(q){q.querySelectorAll("p").forEach(p=>p.remove());
q.insertAdjacentHTML("beforeend",`
<p>Soy <b>Laura Ocampo Franco (Lau)</b>, tengo 27 años, vivo en Medellín y llevo <b>6 años</b> en <b>marketing digital</b>. Empecé a los 21 dando <b>mentorías</b> a agentes inmobiliarios y apoyando empresas con <b>diseño gráfico</b>; hoy trabajo con marcas de <b>Colombia y Florida</b>.</p>
<p>He trabajado en real estate, salud, belleza, muebles, bienestar, coaching, gastronomía y más. Mi enfoque une <b>creatividad, estrategia y resultados</b>: contenido visual, <b>Meta Ads y TikTok Ads</b>, <b>landing pages que convierten</b> y <b>SEO</b>, siempre al día con la <b>inteligencia artificial</b>.</p>
<p>Junto a mi equipo de <b>Tres y Nueve Creativo</b> creamos estrategias que generan visibilidad, atraen clientes y aportan resultados reales.</p>
<p class="script">¡Estamos aquí para llevar tu marca al siguiente nivel!</p>`);}

/* ---------- 2. HERRAMIENTAS y MARCAS ---------- */
$$(".tool").forEach(t=>{const n=t.querySelector("span")?.textContent,f=D.tools[n];
  if(f){t.title=n;t.querySelector("i").innerHTML=IMG("LOGOS/"+f,n);} else t.remove();});

const br=$("#brands");
if(br){
  br.className="";br.style.display="block";
  const sec=["Todas",...new Set(D.marcas.map(m=>m[2]))];
  br.innerHTML=`<div class="filters" id="bf">${sec.map((s,i)=>`<button class="fbtn ${i?"":"on"}" data-s="${esc(s)}">${esc(s)}</button>`).join("")}</div><div class="mq"><div class="trk" id="btrk"></div></div>`;
  const draw=s=>{const l=D.marcas.filter(m=>s==="Todas"||m[2]===s);
    let rep=[];while(rep.length<10)rep=rep.concat(l);
    $("#btrk").innerHTML=[...rep,...rep].map(m=>`<div class="lg2" title="${esc(m[0])} · ${esc(m[2])}">${IMG("LOGOS/"+m[1],m[0])}</div>`).join("");};
  draw("Todas");
  $$("#bf .fbtn").forEach(b=>b.onclick=()=>{$$("#bf .fbtn").forEach(x=>x.classList.remove("on"));b.classList.add("on");draw(b.dataset.s)});
}
const sub=$("#experiencia .sub");if(sub)sub.textContent="Más de 10 marcas, organizadas por sector";

/* ---------- Servicios: imagen clicable → Hablemos ---------- */
$$(".sv-img").forEach(b=>{const f=D.servicios[b.dataset.img];
  if(f)b.insertAdjacentHTML("beforeend",IMG("SERVICIOS/"+f,b.dataset.alt));
  b.insertAdjacentHTML("beforeend",`<a class="svgo" href="#contacto" aria-label="Hablemos"><span>Hablemos ✦</span></a>`);});

/* ---------- 3. PROYECTOS ---------- */
const mock=k=>k==="video"?`<i class="film t"></i><i class="film b"></i><span class="play"></span>`
  :k==="social"?`<div class="mosaic"><b></b><b></b><b></b><b></b><b></b><b></b></div>`
  :`<div class="browser"><s></s><s></s><s></s><u></u><em></em><em></em></div>`;
const bandP=$("#proyectos .band");
if(bandP){bandP.insertAdjacentHTML("beforebegin",`
<div class="more rv in"><div class="sub">Explora mis trabajos</div>
<p class="lead sm2">Una muestra aquí; el resto lo ves completo en Behance.</p>
<div class="bhg">${D.behance.map((b,i)=>`<a class="bc ${i?"":"big"}" href="${b.u}" target="_blank" rel="noopener" style="--c:${pal[(i*2+1)%4]}">
<div class="cv mock">${mock(b.k)}${IMG(b.img,b.t)}<span class="ob">Behance ↗</span></div>
<div class="bd"><h3>${esc(b.t)}</h3><p>${esc(b.d)}</p><span>${esc(b.cta)} ↗</span></div></a>`).join("")}</div>
${D.videos.length?`<div class="vids">${D.videos.map(v=>`<video src="${E(v)}#t=0.5" controls preload="metadata" playsinline muted></video>`).join("")}</div>`:""}</div>
<div class="more rv in"><div class="sub">Diseño y desarrollo web</div>
<p class="lead sm2">Sitios y landing pages que he desarrollado. Toca uno para verlo.</p>
<div class="webg">${D.web.map((w,i)=>`<a class="wcard" href="${w.u}" target="_blank" rel="noopener" style="--c:${pal[i%4]}">
<div class="cv mock"><div class="browser"><s></s><s></s><s></s><u>${w.logo?IMG("LOGOS/"+w.logo,w.t):`<b>${esc(w.txt||w.t)}</b>`}</u><em></em><em></em></div>${IMG(w.img,w.t)}<span class="ob">Ver sitio ↗</span></div>
<div class="bd"><h3>${esc(w.t)}</h3><span>Ver proyecto ↗</span></div></a>`).join("")}</div>
<a class="bc wide" href="${BEH}" target="_blank" rel="noopener" style="--c:#f6b8d1"><div class="cv mock">${mock("web")}${IMG(D.behanceBanner,"Mi perfil de Behance")}<span class="ob">Behance ↗</span></div><div class="bd"><h3>Mi portafolio completo en Behance</h3><span>Explorar más trabajos ↗</span></div></a></div>`);}

/* ---------- 5. Instagram + LinkedIn ---------- */
const hab=$("#herramientas");
if(hab){const g=D.ig,l=D.linkedin;
hab.insertAdjacentHTML("beforebegin",`<section id="redes"><div class="wrap">
<div class="eyebrow rv in"><i class="star"></i> Redes</div><h2 class="rv in">Sígueme y <span class="grad">conoce más</span></h2>
<div class="sgrid">
<a class="ig rv in" href="${g.url}" target="_blank" rel="noopener" aria-label="Ver mi Instagram">
<div class="ig-top">
  ${IMG("LOGOS/LOGO INSTAGRAM.jpg","Instagram")}
  <span>@${g.user}</span>
</div>
<img class="igf" alt="Mi feed de Instagram" hidden>
<span class="btn fill sm">Ver Instagram ↗</span></a>
<a class="lin rv in" href="${l.url}" target="_blank" rel="noopener" aria-label="Ver mi LinkedIn">
<div class="bn lg">${IMG(l.logo,"LinkedIn")}</div>${IMG(l.foto,l.name).replace("<img",'<img class="av2"')}
<div class="bd2"><span class="in">Mi trayectoria</span><h3>${esc(l.name)}</h3><p>${esc(l.headline)}</p><span class="btn fill sm">Entra a LinkedIn ↗</span></div></a>
</div></div></section>`);

first(g.feedList).then(u=>{const e=$(".igf");if(u&&e){e.src=u;e.hidden=false}});}

/* ---------- 6. EXPERIENCIA ---------- */
const exp=$("#exp");
if(exp){exp.insertAdjacentHTML("afterbegin",`<div class="tl now rv in" style="--c:#f6b8d1"><small>2026 – Actualidad · Medellín</small>
<h3>Fundadora y directora creativa<span class="nuevo">ACTUAL</span></h3><div class="org">Tres y Nueve Creativo</div>
<p>Lidero proyectos de marketing digital de forma independiente junto con mi equipo. Desarrollamos estrategias digitales integrales para empresas de distintos sectores: diseño, redes sociales, publicidad digital, edición de video, desarrollo web y generación de leads.</p>
<p>Esta etapa la he fortalecido con formación continua y trabajo colaborativo, al día con nuevas herramientas y con la inteligencia artificial aplicada al marketing. Nuestro objetivo: mejorar la presencia digital de las empresas, conectar con clientes potenciales y convertir el marketing en oportunidades de crecimiento y ventas.</p>
<div class="tags"><em>Estrategia digital</em><em>Meta Ads</em><em>Desarrollo web</em><em>Generación de leads</em><em>IA aplicada</em></div></div>`);}

/* ---------- 7. CONTACTO al inicio y al final ---------- */
const links=()=>[["Instagram",D.ig.url],["LinkedIn",D.linkedin.url],["Behance",BEH],["✉ Correo","mailto:"+mail]]
  .concat(D.wa?[["WhatsApp","https://wa.me/"+D.wa]]:[]);
const row=cls=>`<div class="${cls}">${links().map(([n,u],i)=>`<a href="${u}" ${u.startsWith("http")?'target="_blank" rel="noopener"':""} style="--c:${pal[i%4]}">${n}</a>`).join("")}</div>`;
const bh=$("#bh");if(bh)bh.href=BEH;
const btns=$(".hero .btns");if(btns)btns.insertAdjacentHTML("afterend",row("pills quick"));
const ft=$("footer");if(ft)ft.insertAdjacentHTML("afterbegin",row("pills fcontact"));
})();
