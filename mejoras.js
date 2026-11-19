/* =========================================================
   MEJORAS DEL PORTAFOLIO · Lau Ocampo · Tres y Nueve Creativo
   Se carga DESPUÉS del script principal del index.html:
   <script src="mejoras.js"></script>   (justo antes de </body>)
   Para agregar proyectos, marcas o fotos solo edita la zona DATOS.
   ========================================================= */
(()=>{
/* ---------- DATOS (edita aquí) ---------- */
const D={
  wa:"", // WhatsApp con indicativo, ej: "573001234567". Vacío = no se muestra
  behance:{
    video:"https://www.behance.net/gallery/231181729/Edicion-de-Video",
    s1:"https://www.behance.net/gallery/230686035/Social-Media-Parte-1-(Marcas-Disenos)",
    s2:"https://www.behance.net/gallery/230688607/Social-Media-Parte-2-(Marcas-Disenos)"
  },
  // Videos de adelanto (opcional). Sube los .mp4 a assets/videos/ y escribe aquí la ruta
  videos:[], // ej: ["assets/videos/reel-1.mp4","assets/videos/reel-2.mp4"]
  // Sitios web. Imagen opcional: assets/projects/<archivo>.jpg
  web:[
    {t:"Brunello House",u:"https://www.behance.net/gallery/230681485/Realizacion-website-Brunello-House",img:"assets/projects/brunello-house.jpg"},
    {t:"Ahomas Sanación",u:"https://www.behance.net/gallery/230681119/Sitio-web-realizado-para-Ahomas-Sanacion",img:"assets/projects/ahomas.jpg"},
    {t:"Zaria Realty Group",u:"https://www.behance.net/gallery/230679461/Sitio-Web-Realizado-Para-Zaria-Realty-Group",img:"assets/projects/zaria.jpg"},
    {t:"Colony Springs Medical Center",u:"https://colonyspringsmedical.com/",img:"assets/projects/colony-springs.jpg"}
  ],
  instagram:"https://www.instagram.com/laurafranco_creativa",
  // Cuadrícula tipo feed: sube capturas a assets/instagram/ y pon el link de cada publicación
  igPosts:[
    {img:"assets/instagram/ig-1.jpg",u:""},{img:"assets/instagram/ig-2.jpg",u:""},{img:"assets/instagram/ig-3.jpg",u:""},
    {img:"assets/instagram/ig-4.jpg",u:""},{img:"assets/instagram/ig-5.jpg",u:""},{img:"assets/instagram/ig-6.jpg",u:""}
  ],
  linkedin:"https://www.linkedin.com/in/lauraocampofranco-ab576623a",
  // Logos: [nombre, archivo dentro de LOGOS/, sector]
  marcas:[
    ["Zaria Realty Group","ZARAREALTY.jpg","Real estate"],["Fortex Realty","FORTEX.jpg","Real estate"],
    ["Innovation Mortgage","INNOVATION.jpg","Real estate"],["Miami Tax Team","MIAMI TAXTEAM.jpg","Real estate"],
    ["Colony Springs","COLONY.jpg","Salud"],["Tapisc","TAPISC.jpg","Muebles"],
    ["Ahomas","AHOMAS.jpg","Bienestar"],["ACSSL","ACSSL.jpg","Educación y asesorías"],
    ["Success Orlando","SUCCESS ORLANDO.jpg","Educación y asesorías"],["Industrias Cory","INDUSTRIAS CORY.jpg","Productos de limpieza"],
    ["Bivrantti","BIVRANTTI.jpg","Otros"],["Kuantika","KUANTIKA.jpg","Otros"],["Saelu","SAELU.jpg","Otros"],["Tres y Nueve Creativo","TRESYNUEVE.jpg","Otros"]
  ],
  // Herramientas: nombre visible -> archivo en LOGOS/
  tools:{"Meta Ads":"META 2.jpg","TikTok Ads":"TIKTOK 1.jpg","Google Ads":"GOOGLE 2.jpg","WordPress":"WORDPRESS.jpg","Illustrator":"ILUSTRATOR.jpg","Photoshop":"PHOTOSHOP.jpg","After Effects":"AFTEREFFECTS.jpg","Canva":"CANVA.jpg","CapCut":"CAPCUT.jpg","IA en todo":"IA.jpg","Mailchimp":"MAILCHIMP.jpg"},
  // Imágenes de servicios (carpeta SERVICIOS)
  servicios:{pauta:"PAUTA DIGITAL.jpg",redes:"REDES SOCIALES.jpg",web:"LANDING PAGE.jpg","videos-ia":"EDICION IA.jpg",crm:"CRM Y BOT.jpg",mentorias:"MENTORIAS.png"}
};

/* ---------- Utilidades ---------- */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const E=encodeURI,pal=["#9fd8e6","#c9b3f0","#f6b8d1","#b8ecd2"];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const IMG=(src,alt="")=>`<img src="${E(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="this.remove()">`;
const mail=(window.CONFIG&&CONFIG.email)||"lawriztfios99@gmail.com";

/* ---------- Estilos nuevos (mismos colores y tipografías) ---------- */
document.head.insertAdjacentHTML("beforeend",`<style>
.btn.sm{padding:11px 20px;font-size:.88rem;min-height:44px}
.btn.fill:hover{background:var(--menta);border-color:var(--menta);transform:translateY(-3px)}
.btn:not(.fill):hover{background:var(--lila);color:#2a2a2c;transform:translateY(-3px)}
.btn{transition:.3s}
.more{margin-top:46px}.more .sub{margin-top:0}
.more .btns{margin-top:16px}
.vids{display:flex;gap:14px;overflow-x:auto;margin-top:18px;padding-bottom:8px;scroll-snap-type:x mandatory}
.vids video{flex:0 0 min(220px,60vw);aspect-ratio:9/16;border-radius:18px;object-fit:cover;background:var(--bg2);scroll-snap-align:start}
.webg{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr));gap:16px;margin-top:18px}
.wcard{display:block;border-radius:var(--radius);overflow:hidden;background:var(--bg2);border:1px solid rgba(255,255,255,.1);transition:.3s}
.wcard:hover{transform:translateY(-8px) rotate(-1deg);border-color:var(--c)}
.wcard .th{aspect-ratio:16/10;background:linear-gradient(135deg,var(--c),rgba(255,255,255,.08));position:relative;overflow:hidden}
.wcard .th img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.wcard .bd{padding:14px 18px 18px}.wcard h3{font-size:1.02rem;margin-bottom:6px}
.wcard span{color:var(--c);font-weight:800;font-size:.82rem}
.social{margin-top:70px}
.igrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:520px;margin-top:20px}
.igrid a{aspect-ratio:1;border-radius:12px;overflow:hidden;position:relative;background:linear-gradient(135deg,var(--c),rgba(255,255,255,.08));display:grid;place-items:center;transition:.3s}
.igrid a:hover{transform:scale(1.05) rotate(-1deg)}
.igrid img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.sgrid{display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:start}
.lin{padding:28px;border-radius:var(--radius);background:var(--bg2);border:2px solid var(--mar);margin-top:20px}
.lin h3{font-size:1.3rem;margin-bottom:8px}.lin p{color:var(--muted);margin-bottom:16px}
@media(max-width:820px){.sgrid{grid-template-columns:1fr}.igrid{max-width:none}}
.mq{overflow:hidden;margin-top:22px;border-radius:var(--radius);padding:14px 0;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1)}
.mq .trk{display:flex;gap:16px;width:max-content;animation:slide 40s linear infinite}
.mq:hover .trk{animation-play-state:paused}
.lg2{width:150px;height:84px;flex:none;display:grid;place-items:center;background:#fff;border-radius:16px;padding:10px;transition:.3s}
.lg2:hover{transform:translateY(-5px) rotate(-1.5deg)}
.lg2 img{max-width:100%;max-height:100%;object-fit:contain}
.tool i img{width:100%;height:100%;object-fit:contain;border-radius:12px;background:#fff}
.tool i:has(img){background:#fff;padding:3px}
.tl.now{border-color:var(--rosa);box-shadow:0 0 0 1px var(--rosa),0 18px 40px rgba(246,184,209,.12)}
.tl.now .nuevo{display:inline-block;margin-left:8px;background:var(--rosa);color:#2a2a2c;font-size:.66rem;font-weight:800;padding:3px 10px;border-radius:999px}
.quick{margin-top:16px}.quick a{display:inline-flex;align-items:center;gap:6px}
.fcontact{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:18px}
</style>`);

/* ---------- 1. QUIÉN SOY (texto nuevo) ---------- */
const q=$("#quien .rv");
if(q){q.querySelectorAll("p").forEach(p=>p.remove());
q.insertAdjacentHTML("beforeend",`
<p>Soy <b>Laura Ocampo Franco</b>, aunque casi todos me conocen como <b>Lau</b>. Tengo 27 años, vivo en Medellín, Colombia, y llevo <b>6 años</b> trabajando en <b>marketing digital</b>.</p>
<p>Mi historia comenzó a los 21 años, cuando empecé a brindar <b>mentorías de marketing digital</b> a agentes inmobiliarios y a apoyar empresas con <b>diseño gráfico</b>. Lo que inició como un proyecto freelance se convirtió en una trayectoria con empresas de <b>Colombia y Florida</b>: estrategias digitales, campañas publicitarias y proyectos creativos.</p>
<p>He trabajado con marcas de <b>real estate, salud, belleza, maquillaje, skincare coreano, muebles, bienestar, energía y sanación, validación de títulos profesionales, coaching y gastronomía</b>. Cada marca nos ha permitido construir estrategias a su medida, conectar con sus audiencias y <b>atraer clientes potenciales con intención de compra</b>, para convertir esos leads en oportunidades comerciales y en crecimiento.</p>
<p>Mi enfoque combina <b>creatividad, estrategia y análisis de resultados</b>: contenido visual atractivo, gestión de redes, campañas de <b>Meta Ads y TikTok Ads</b>, <b>landing pages orientadas a la conversión</b> y <b>SEO</b> para fortalecer el posicionamiento orgánico.</p>
<p>Me mantengo en constante aprendizaje con cursos, práctica y el intercambio con mi equipo, siempre atenta a nuevas tendencias y a la <b>inteligencia artificial</b>, una gran oportunidad para optimizar procesos y potenciar la creatividad.</p>
<p>Hoy, junto con mi equipo de <b>Tres y Nueve Creativo</b>, seguimos creciendo para ayudar a más marcas a destacar en el mundo digital. No se trata solo de publicar contenido, sino de crear estrategias que generen visibilidad, atraigan clientes y aporten resultados reales.</p>
<p class="script">¡Mi equipo y yo estamos aquí para ayudarte a llevar tu marca al siguiente nivel!</p>`);}

/* ---------- 2. HERRAMIENTAS con logos + MARCAS por sector con carrusel ---------- */
$$(".tool").forEach(t=>{const n=t.querySelector("span")?.textContent,f=D.tools[n];
  if(f)t.querySelector("i").insertAdjacentHTML("beforeend",IMG("LOGOS/"+f,n));});

const br=$("#brands");
if(br){
  br.className="";br.style.display="block";
  const sec=["Todas",...new Set(D.marcas.map(m=>m[2]))];
  br.innerHTML=`<div class="filters" id="bf">${sec.map((s,i)=>`<button class="fbtn ${i?"":"on"}" data-s="${esc(s)}">${esc(s)}</button>`).join("")}</div><div class="mq"><div class="trk" id="btrk"></div></div>`;
  const draw=s=>{let l=D.marcas.filter(m=>s==="Todas"||m[2]===s);
    let rep=[];while(rep.length<14)rep=rep.concat(l);
    $("#btrk").innerHTML=[...rep,...rep].map(m=>`<div class="lg2" title="${esc(m[0])} · ${esc(m[2])}">${IMG("LOGOS/"+m[1],m[0])}</div>`).join("");};
  draw("Todas");
  $$("#bf .fbtn").forEach(b=>b.onclick=()=>{$$("#bf .fbtn").forEach(x=>x.classList.remove("on"));b.classList.add("on");draw(b.dataset.s)});
}
const sub=$("#experiencia .sub");if(sub)sub.textContent="Más de 10 marcas, organizadas por sector";

/* ---------- Imágenes de servicios desde SERVICIOS/ ---------- */
$$(".sv-img").forEach(b=>{const f=D.servicios[b.dataset.img];if(f)b.insertAdjacentHTML("beforeend",IMG("SERVICIOS/"+f,b.dataset.alt));});

/* ---------- 3. PROYECTOS: Behance, web, videos ---------- */
const bandP=$("#proyectos .band");
if(bandP){bandP.insertAdjacentHTML("beforebegin",`
<div class="more rv in"><div class="sub">Edición de video</div>
<p class="lead" style="margin-top:6px">Un adelanto de mis reels y videos. El resto está en Behance.</p>
${D.videos.length?`<div class="vids">${D.videos.map(v=>`<video src="${E(v)}#t=0.5" controls preload="metadata" playsinline muted></video>`).join("")}</div>`:""}
<div class="btns"><a class="btn fill sm" href="${D.behance.video}" target="_blank" rel="noopener">VER PROYECTOS DE EDICIÓN DE VIDEO ↗</a></div></div>
<div class="more rv in"><div class="sub">Social media</div>
<p class="lead" style="margin-top:6px">Posts, carruseles y piezas para redes de distintas marcas.</p>
<div class="btns"><a class="btn fill sm" href="${D.behance.s1}" target="_blank" rel="noopener">VER SOCIAL MEDIA – PARTE 1 ↗</a><a class="btn sm" href="${D.behance.s2}" target="_blank" rel="noopener">VER SOCIAL MEDIA – PARTE 2 ↗</a></div></div>
<div class="more rv in"><div class="sub">Diseño y desarrollo web</div>
<p class="lead" style="margin-top:6px">Una muestra de los sitios y landing pages que he desarrollado.</p>
<div class="webg">${D.web.map((w,i)=>`<a class="wcard" href="${w.u}" target="_blank" rel="noopener" style="--c:${pal[i%4]}"><div class="th">${w.img?IMG(w.img,w.t):""}</div><div class="bd"><h3>${esc(w.t)}</h3><span>Ver proyecto ↗</span></div></a>`).join("")}</div>
<div class="btns" style="margin-top:20px"><a class="btn sm" href="${(window.CONFIG&&CONFIG.behance)||"https://www.behance.net/"}" target="_blank" rel="noopener">Explorar más trabajos ↗</a></div></div>`);}

/* ---------- 5. Instagram + LinkedIn (antes de Habilidades) ---------- */
const hab=$("#herramientas");
if(hab){hab.insertAdjacentHTML("beforebegin",`<section id="redes"><div class="wrap">
<div class="eyebrow rv in"><i class="star"></i> Redes</div><h2 class="rv in">Sígueme y <span class="grad">conoce más</span></h2>
<div class="sgrid"><div><p class="lead">Un vistazo a mi contenido en Instagram. Toca cualquier publicación para verla en la red.</p>
<div class="igrid">${D.igPosts.map((p,i)=>`<a href="${p.u||D.instagram}" target="_blank" rel="noopener" aria-label="Ver publicación en Instagram" style="--c:${pal[i%4]}">${IMG(p.img,"Publicación de Instagram")}</a>`).join("")}</div>
<div class="btns" style="margin-top:18px"><a class="btn fill sm" href="${D.instagram}" target="_blank" rel="noopener">Ver Instagram ↗</a></div></div>
<div class="lin"><h3>Mi trayectoria en LinkedIn</h3><p>Experiencia, formación y recomendaciones de mi recorrido profesional.</p><a class="btn fill sm" href="${D.linkedin}" target="_blank" rel="noopener">Conocer mi trabajo ↗</a></div></div></div></section>`);}

/* ---------- 6. EXPERIENCIA: Tres y Nueve Creativo como la más reciente ---------- */
const exp=$("#exp");
if(exp){exp.insertAdjacentHTML("afterbegin",`<div class="tl now rv in" style="--c:#f6b8d1"><small>2026 – Actualidad · Medellín</small>
<h3>Fundadora y directora creativa<span class="nuevo">ACTUAL</span></h3><div class="org">Tres y Nueve Creativo</div>
<p>Lidero proyectos de marketing digital de forma independiente junto con mi equipo. Desarrollamos estrategias digitales integrales para empresas de distintos sectores: diseño, redes sociales, publicidad digital, edición de video, desarrollo web y generación de leads.</p>
<p>Esta etapa la he fortalecido con formación continua y trabajo colaborativo, al día con nuevas herramientas y con la inteligencia artificial aplicada al marketing. Nuestro objetivo: mejorar la presencia digital de las empresas, conectar con clientes potenciales y convertir el marketing en oportunidades de crecimiento y ventas.</p>
<div class="tags"><em>Estrategia digital</em><em>Meta Ads</em><em>Desarrollo web</em><em>Generación de leads</em><em>IA aplicada</em></div></div>`);}

/* ---------- 7. CONTACTO visible al inicio y al final ---------- */
const links=()=>[["Instagram",D.instagram],["LinkedIn",D.linkedin],["Behance",(window.CONFIG&&CONFIG.behance)||"https://www.behance.net/"],["✉ Correo","mailto:"+mail]]
  .concat(D.wa?[["WhatsApp","https://wa.me/"+D.wa]]:[]);
const row=cls=>`<div class="${cls}">${links().map(([n,u],i)=>`<a href="${u}" ${u.startsWith("http")?'target="_blank" rel="noopener"':""} style="--c:${pal[i%4]}">${n}</a>`).join("")}</div>`;
const btns=$(".hero .btns");if(btns)btns.insertAdjacentHTML("afterend",row("pills quick"));
const ft=$("footer");if(ft)ft.insertAdjacentHTML("afterbegin",row("pills fcontact"));
})();
