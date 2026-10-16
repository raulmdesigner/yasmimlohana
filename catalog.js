/* Yasmim Studio • renderer e exportador independente, sem bibliotecas remotas. */
window.CatalogStudio=(()=>{
'use strict';
const W=800,H=1120;
const THEMES={
 atelier:{name:'Porcelana',bg:'#f8f4ee',fg:'#3b1420',accent:'#946036',muted:'#765f61',rule:'#dfd0c5'},
 noir:{name:'Bordô Noite',bg:'#2b0916',fg:'#fff9f0',accent:'#e2c38b',muted:'#d3afb8',rule:'#6f3847'},
 rosa:{name:'Rosé Antigo',bg:'#f1e5e1',fg:'#461421',accent:'#a17b4b',muted:'#8b6870',rule:'#dfc5c3'},
 graphite:{name:'Marfim',bg:'#fffdf9',fg:'#391422',accent:'#b78d50',muted:'#846f6b',rule:'#e4dacf'},
 bordo:{name:'Bordeaux',bg:'#561629',fg:'#fff9f1',accent:'#e3bd83',muted:'#dfc4ca',rule:'#8b5361'},
};
const PAGE_TYPES={cover:'Capa',about:'Sobre mim',service:'Procedimento',pricing:'Tabela de valores',care:'Cuidados',contact:'Contato',custom:'Página livre'};
const defPage=(type)=>({id:'pg'+Date.now()+'-'+Math.floor(Math.random()*99999),type,title:({cover:'Beleza em cada detalhe',about:'Muito além da beleza',service:'Novo procedimento',pricing:'Investimento em você',care:'Cuidados essenciais',contact:'Vamos conversar?',custom:'Sua nova seção'})[type],subtitle:'',body:'',image:'',price:'',oldPrice:'',maintenance:'',promo:'',items:[],bg:'',accent:'',pattern:'',photoScale:100,titleScale:100,bodyScale:100,headerEnabled:true,footerEnabled:true,headerText:'',footerText:''});
function photoFrame(c,p){if(p.type==='cover')return c.theme==='noir'?[716,594]:c.theme==='graphite'?[430,1120]:[473,810];if(p.type==='about')return [322,575];if(p.type==='service')return [686,390];if(p.type==='care')return [270,220];if(p.type==='pricing')return [240,130];if(p.type==='contact')return [255,172];return [686,340]}
function initialCatalog(){const cover=defPage('cover');cover.title='Yasmim Lohana';cover.subtitle='CATÁLOGO DE PROCEDIMENTOS';cover.body='Cílios & Sobrancelhas';const about=defPage('about');about.title='Sobre o estúdio';about.body='Cuidar da beleza é também cuidar da autoestima. Conheça os procedimentos e escolha o que combina com você.';
const service=defPage('service');service.title='Extensão de cílios';service.subtitle='OLHARES ÚNICOS';service.body='Diferentes efeitos para valorizar seu olhar. Escolhemos juntas a técnica adequada para o resultado que você deseja.';
const brow=defPage('service');brow.title='Design de sobrancelhas';brow.subtitle='NATURALIDADE EM FOCO';brow.body='Um design pensado para respeitar suas características e realçar sua expressão.';
const care=defPage('care');care.title='O cuidado continua em casa';care.subtitle='DICAS PÓS-ATENDIMENTO';care.items=['Siga as orientações específicas do seu procedimento.','Higienize a região conforme as recomendações recebidas.','Evite puxar ou esfregar os fios.','Em caso de desconforto, entre em contato.'];
const contact=defPage('contact');contact.title='Seu momento começa aqui';contact.subtitle='AGENDE UM HORÁRIO';contact.body='Será um prazer cuidar de você. Entre em contato e consulte disponibilidade, detalhes e valores.';
return {name:'Catálogo de serviços Yasmim Lohana',brand:'Yasmim Lohana',tagline:'Cílios & Sobrancelhas',instagram:'',whatsapp:'',logo:'',theme:'bordo',font:'modern',bg:'',accent:'',pattern:'none',pages:[cover,about,service,brow,care,contact]};}
const imgCache=new Map();
async function image(src){if(!src)return null;if(imgCache.has(src))return imgCache.get(src);const im=new Image();const p=new Promise(r=>{im.onload=()=>r(im);im.onerror=()=>r(null)});im.src=src;imgCache.set(src,p);return p}
function text(ctx,s,x,y,size=24,{color='#28232d',font='sans',weight='normal',max=Infinity,align='left',ls=0}={}){ctx.fillStyle=color;ctx.textAlign=align;ctx.textBaseline='alphabetic';const fam=font==='luxe'?'Baskerville, Georgia, serif':font==='serif'?'Georgia, serif':font==='condensed'?'Montserrat, Arial, sans-serif':'Montserrat, Arial, sans-serif';ctx.font=`${weight} ${size}px ${fam}`;s=String(s??'');if(ls&&ctx.letterSpacing!==undefined)ctx.letterSpacing=ls+'px';if(max!==Infinity){while(ctx.measureText(s).width>max&&s.length>3)s=s.slice(0,-2)+'…'}ctx.fillText(s,x,y);if(ctx.letterSpacing!==undefined)ctx.letterSpacing='0px';}
function lines(ctx,str,x,y,width,size=24,opts={},height=1.42,maxLines=25){const paras=String(str??'').split(/\n/);let row=0;const color=opts.color||'#333';for(const p of paras){const wr=p.split(/\s+/).filter(Boolean);let acc='';const maxW=width;for(const w of wr){let test=acc?acc+' '+w:w;text(ctx,test,-10000,-10000,size,opts);if(ctx.measureText(test).width>maxW&&acc){text(ctx,acc,x,y+row*size*height,size,{...opts,color});row++;acc=w}else acc=test;if(row>=maxLines)return row}if(acc){text(ctx,acc,x,y+row*size*height,size,{...opts,color});row++}else if(!wr.length)row++;if(row>=maxLines)return row}return row}
function rect(ctx,x,y,w,h,color,r=0){ctx.fillStyle=color;ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill()}
function rule(ctx,x,y,w,color,h=1){rect(ctx,x,y,w,h,color)}
function drawPattern(ctx,mode,t){
 if(!mode||mode==='none')return;
 ctx.save();ctx.globalAlpha=.13;ctx.strokeStyle=t.accent;ctx.fillStyle=t.accent;ctx.lineWidth=1;
 if(mode==='lines'){for(let x=-1200;x<1300;x+=43){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+620,H);ctx.stroke()}}
 else if(mode==='grid'){for(let x=0;x<W;x+=64){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}for(let y=0;y<H;y+=64){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}}
 else if(mode==='dots'){for(let y=24;y<H;y+=38)for(let x=24;x<W;x+=38){ctx.beginPath();ctx.arc(x,y,1.8,0,Math.PI*2);ctx.fill()}}
 else if(mode==='arcs'){for(let r=85;r<1320;r+=58){ctx.beginPath();ctx.arc(W+125,H+50,r,0,Math.PI*2);ctx.stroke()}}
 else if(mode==='linen'){ctx.globalAlpha=.085;for(let y=0;y<H;y+=7){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}for(let x=0;x<W;x+=11){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}}
 ctx.restore();
}
function drawCoverBg(ctx,t){ctx.fillStyle=t.bg;ctx.fillRect(0,0,W,H);for(let i=0;i<7;i++){ctx.strokeStyle=t.rule;ctx.globalAlpha=.21;ctx.beginPath();ctx.ellipse(780,960,215+i*37,190+i*37,-.4,0,Math.PI*2);ctx.stroke()}ctx.globalAlpha=1}
function drawPhoto(ctx,im,x,y,w,h,zoom=100){if(!im||!im.width||!im.height)return false;const ar=im.width/im.height,fr=w/h;let sx=0,sy=0,sw=im.width,sh=im.height;if(ar>fr){sw=im.height*fr;sx=(im.width-sw)/2}else{sh=im.width/fr;sy=(im.height-sh)/2}ctx.save();ctx.beginPath();ctx.rect(x,y,w,h);ctx.clip();const z=Math.min(2,Math.max(.55,Number(zoom||100)/100));const ww=w*z,hh=h*z;ctx.drawImage(im,sx,sy,sw,sh,x+(w-ww)/2,y+(h-hh)/2,ww,hh);ctx.restore();return true}
function drawNoPhoto(ctx,x,y,w,h,t){rect(ctx,x,y,w,h,t.rule);ctx.save();ctx.globalAlpha=.38;ctx.strokeStyle=t.accent;for(let i=0;i<6;i++){ctx.beginPath();ctx.ellipse(x+w*.54,y+h*.56,Math.min(w,h)*(.11+i*.09),Math.min(w,h)*(.18+i*.09),-.4,0,Math.PI*2);ctx.stroke()}ctx.restore();text(ctx,'ADICIONE SUA FOTO',x+w/2,y+h/2,16,{color:t.muted,align:'center',ls:2})}
function brand(ctx,c,t,logo,p){if(p.headerEnabled===false)return;const header=p.headerText?.trim()||c.brand||'Yasmim Lohana';if(logo){drawPhoto(ctx,logo,56,47,68,68)}else{rect(ctx,56,53,54,54,t.accent,14);text(ctx,c.brand?.charAt(0)||'Y',83,89,30,{color:t.bg,align:'center',font:'sans'})}text(ctx,header,logo?142:126,87,22,{color:t.fg,font:'sans',weight:'600',max:logo?590:610});rule(ctx,56,127,688,t.rule)}
function bottom(ctx,c,t,pageIndex,total,p){if(p.footerEnabled===false)return;rule(ctx,56,1055,688,t.rule);text(ctx,p.footerText?.trim()||c.tagline||'CÍLIOS & SOBRANCELHAS',56,1084,15,{color:t.muted,ls:1.2,max:520});text(ctx,`${String(pageIndex+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`,742,1084,15,{color:t.muted,align:'right'});}
function pageTitle(ctx,p,t,small=false,font="sans"){text(ctx,(p.subtitle||PAGE_TYPES[p.type]).toUpperCase(),58,197,17,{color:t.accentText||t.accent,weight:'bold',ls:1.8});lines(ctx,p.title,56,small?259:282,690,Math.round((small?46:58)*Math.max(.65,Math.min(1.5,Number(p.titleScale||100)/100))),{font,color:t.fg,weight:'600'},1.15,3);}
async function drawPage(canvas,c,p,pageIndex,scale=1){const ctx=canvas.getContext('2d',{alpha:false});canvas.width=Math.round(W*scale);canvas.height=Math.round(H*scale);ctx.setTransform(scale,0,0,scale,0,0);const base=THEMES[c.theme]||THEMES.atelier;const t={...base,bg:p.bg||c.bg||base.bg,accent:p.accent||c.accent||base.accent};ctx.fillStyle=t.bg;ctx.fillRect(0,0,W,H);drawPattern(ctx,p.pattern||c.pattern||'none',t);const im=await image(p.image),logo=await image(c.logo);
const channel=v=>parseInt(v,16);const lightness=hex=>{let h=(hex||'').replace('#','');if(h.length===3)h=h.split('').map(a=>a+a).join('');if(h.length!==6)return .5;const rgb=[0,2,4].map(i=>{let x=channel(h.slice(i,i+2))/255;return x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4)});return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722};
 const isLight=lightness(t.bg)>.43;
 if(p.bg||c.bg){t.fg=isLight?'#391a25':'#fff9f4';t.muted=isLight?'#735e65':'#e4cbd2';t.rule=isLight?'#dccbc7':'#915b69';}
 t.accentText=isLight && lightness(t.accent)>.25?'#80532f':t.accent;
 const titleFont=c.font==='editorial'?'serif':(['luxe','luxo'].includes(c.font)?'luxe':'sans');const titleFactor=Math.max(.65,Math.min(1.5,Number(p.titleScale||100)/100));const bodyFactor=Math.max(.65,Math.min(1.5,Number(p.bodyScale||100)/100));
if(p.type==='cover'){
 if(c.theme==='noir'){
 ctx.fillStyle=t.bg;ctx.fillRect(0,0,W,H);drawPattern(ctx,p.pattern||c.pattern||'none',t);if(im)drawPhoto(ctx,im,42,48,716,594,p.photoScale);else drawNoPhoto(ctx,42,48,716,594,t);
 rect(ctx,42,646,716,1,t.rule);text(ctx,(p.subtitle||'CATÁLOGO DE PROCEDIMENTOS').toUpperCase(),54,691,16,{color:t.accentText||t.accent,ls:2});
 lines(ctx,p.title,48,788,693,Math.round(69*titleFactor),{font:titleFont,color:t.fg},1.16,3);
 if(p.footerEnabled!==false){rule(ctx,55,980,152,t.accent,3);text(ctx,c.brand||'Yasmim Lohana',56,1025,29,{font:titleFont,color:t.fg});if(logo)drawPhoto(ctx,logo,646,959,87,87);text(ctx,(p.footerText||c.tagline||'CÍLIOS & SOBRANCELHAS').toUpperCase(),56,1063,15,{color:t.muted,ls:1.5})}if(p.headerEnabled===true&&p.headerText)text(ctx,p.headerText,53,83,20,{color:t.accentText||t.accent,weight:'600',max:650});return;
 }
 if(c.theme==='graphite'){
 ctx.fillStyle=t.bg;ctx.fillRect(0,0,W,H);if(im)drawPhoto(ctx,im,0,0,430,H,p.photoScale);else drawNoPhoto(ctx,0,0,430,H,t);
 rect(ctx,430,0,370,H,t.bg);if(p.headerEnabled!==false)text(ctx,p.headerText||'BEAUTY STUDIO',470,96,17,{color:t.accentText||t.accent,ls:2,max:270});
 rule(ctx,470,121,140,t.accent,2);text(ctx,(p.subtitle||'CATÁLOGO').toUpperCase(),470,327,17,{color:t.muted,ls:1.8});
 lines(ctx,p.title,465,397,300,Math.round(56*titleFactor),{font:titleFont,color:t.fg},1.17,6);
 if(p.footerEnabled!==false){text(ctx,c.brand||'Yasmim Lohana',465,942,35,{font:titleFont,color:t.fg,max:302});text(ctx,p.footerText||c.tagline||'Cílios e Sobrancelhas',465,982,18,{color:t.muted,max:290});if(logo)drawPhoto(ctx,logo,651,991,90,90)}return;
 }
 drawCoverBg(ctx,t);drawPattern(ctx,p.pattern||c.pattern||'none',t);if(im){drawPhoto(ctx,im,327,0,473,810,p.photoScale);rect(ctx,0,0,350,810,t.bg)}
 else{ctx.globalAlpha=.13;rect(ctx,327,0,473,800,t.accent);ctx.globalAlpha=1;drawNoPhoto(ctx,397,151,340,560,t)}
 if(p.headerEnabled!==false){text(ctx,p.headerText||'ESTÚDIO DE BELEZA',57,85,16,{color:t.accentText||t.accent,ls:2,weight:'bold',max:270});rule(ctx,57,113,181,t.accent,2)}if(logo)drawPhoto(ctx,logo,638,865,91,91);
 text(ctx,p.subtitle||'CATÁLOGO DE PROCEDIMENTOS',57,250,17,{color:t.muted,ls:1.5});const title=p.title||'A beleza de ser você';const yy=340;lines(ctx,title,53,yy,im?285:325,Math.round(61*titleFactor),{font:titleFont,color:t.fg},1.17,5);rule(ctx,58,619,120,t.accent,4);lines(ctx,p.body||c.tagline,57,682,280,Math.round(24*bodyFactor),{color:t.fg},1.45,4);
 rect(ctx,0,830,W,290,t.bg);if(p.footerEnabled!==false){text(ctx,c.brand||'Yasmim Lohana',59,966,51,{font:titleFont,color:t.fg});text(ctx,(p.footerText||c.tagline||'CÍLIOS & SOBRANCELHAS').toUpperCase(),60,1008,17,{color:t.accentText||t.accent,ls:2.3,max:650});text(ctx,'2026 • CATÁLOGO',741,1057,15,{align:'right',color:t.muted})}return;}
brand(ctx,c,t,logo,p);bottom(ctx,c,t,pageIndex,c.pages.length,p);
if(p.type==='about'){
 pageTitle(ctx,p,t,false,titleFont);let top=420;if(im)drawPhoto(ctx,im,420,370,322,575,p.photoScale);else drawNoPhoto(ctx,420,370,322,575,t);
 rule(ctx,57,380,100,t.accent,3);lines(ctx,p.body||'Conte sua história e apresente seu trabalho.',58,443,328,Math.round(25*bodyFactor),{color:t.fg},1.55,14);text(ctx,'CUIDADO EM CADA DETALHE',58,928,16,{color:t.accentText||t.accent,ls:1.8});}
else if(p.type==='service'){
 pageTitle(ctx,p,t,true,titleFont);const photoTop=340;im?drawPhoto(ctx,im,57,photoTop,686,390,p.photoScale):drawNoPhoto(ctx,57,photoTop,686,390,t);
 lines(ctx,p.body||'Descreva o seu procedimento.',58,785,650,Math.round(23*bodyFactor),{color:t.fg},1.45,6);
 rule(ctx,57,901,686,t.rule);text(ctx,'APLICAÇÃO',57,945,15,{color:t.muted,ls:1.5});text(ctx,p.price?`R$ ${p.price}`:'Sob consulta',57,993,39,{font:titleFont,color:t.fg});
 if(p.maintenance){text(ctx,'MANUTENÇÃO',407,945,15,{color:t.muted,ls:1});text(ctx,`R$ ${p.maintenance}`,407,992,34,{font:titleFont,color:t.fg})}
 if(p.promo){rect(ctx,509,244,234,45,t.accent,7);text(ctx,p.promo,626,272,16,{color:t.bg,weight:'bold',align:'center',max:216})}
 if(p.oldPrice){text(ctx,`DE R$ ${p.oldPrice}`,257,990,15,{color:t.muted});rule(ctx,255,984,135,t.muted,1)}
 }
else if(p.type==='pricing'){
 pageTitle(ctx,p,t,true,titleFont);rule(ctx,57,325,687,t.rule);let y=378;const items=(p.items||[]).length?p.items:[{name:'Novo serviço',price:'Sob consulta'}];for(const item of items.slice(0,8)){text(ctx,String(item.name||item).slice(0,48),59,y,25,{color:t.fg,font:titleFont,max:465});text(ctx,item.price?'R$ '+item.price:'Sob consulta',739,y,22,{color:t.accentText||t.accent,align:'right'});rule(ctx,58,y+30,681,t.rule);y+=87}if(im)drawPhoto(ctx,im,495,865,240,130,p.photoScale);lines(ctx,p.body||'Valores sujeitos a confirmação no agendamento.',58,994,im?410:660,Math.round(17*bodyFactor),{color:t.muted},1.3,2);}
else if(p.type==='care'){
 pageTitle(ctx,p,t,true,titleFont);const items=(p.items||[]).length?p.items:[p.body||'Personalize este texto com seus cuidados.'];let y=354;for(let i=0;i<Math.min(6,items.length);i++){text(ctx,String(i+1).padStart(2,'0'),58,y,21,{color:t.accentText||t.accent,font:titleFont});const n=lines(ctx,items[i],123,y,605,Math.round(26*bodyFactor),{color:t.fg},1.4,3);y+=Math.max(105,45*n+30);rule(ctx,57,y-37,683,t.rule)}if(im){drawPhoto(ctx,im,470,780,270,220,p.photoScale)}}
else if(p.type==='contact'){
 text(ctx,(p.subtitle||'AGENDE SEU HORÁRIO').toUpperCase(),57,248,18,{color:t.accentText||t.accent,ls:2});lines(ctx,p.title,51,378,670,Math.round(73*titleFactor),{color:t.fg,font:titleFont},1.2,4);rule(ctx,56,642,165,t.accent,3);lines(ctx,p.body,57,722,670,Math.round(26*bodyFactor),{color:t.fg},1.46,6);if(im)drawPhoto(ctx,im,485,765,255,172,p.photoScale);if(c.instagram){text(ctx,'INSTAGRAM',57,912,15,{color:t.muted,ls:2});text(ctx,c.instagram,57,950,28,{color:t.accentText||t.accent})}if(c.whatsapp){text(ctx,'CONTATO',440,912,15,{color:t.muted,ls:2});text(ctx,c.whatsapp,440,949,25,{color:t.fg,max:300})}}
else{pageTitle(ctx,p,t,true,titleFont);if(im)drawPhoto(ctx,im,57,350,686,340,p.photoScale);rule(ctx,57,im?739:362,675,t.accent,2);lines(ctx,p.body,58,im?789:418,672,Math.round(28*bodyFactor),{color:t.fg},1.5,17);}
}
async function pngBlob(canvas,kind='image/png',q){return new Promise((resolve,reject)=>{try{if(canvas.toBlob){canvas.toBlob(b=>b?resolve(b):reject(new Error('Não foi possível gerar a imagem')),kind,q)}else{fetch(canvas.toDataURL(kind,q)).then(r=>r.blob()).then(resolve,reject)}}catch(e){reject(e)}})}
const fromBuf=a=>new Uint8Array(a);
async function pdfBlob(c,optimized=false,notify=()=>{}){
 const parts=[];let offset=0;const offsets=[0];const put=b=>{if(typeof b==='string')b=new TextEncoder().encode(b);parts.push(b);offset+=b.length};
 const begin=(n)=>{offsets[n]=offset;put(`${n} 0 obj\n`)};const end=()=>put('endobj\n');
 put('%PDF-1.4\n');begin(1);put('<< /Type /Catalog /Pages 2 0 R >>\n');end();begin(2);put(`<< /Type /Pages /Count ${c.pages.length} /Kids [${c.pages.map((_,i)=>3+i*3+' 0 R').join(' ')}] >>\n`);end();
 for(let i=0;i<c.pages.length;i++){
  const cv=document.createElement('canvas');await drawPage(cv,c,c.pages[i],i,optimized?1.15:1.85);
  const b=await pngBlob(cv,'image/jpeg',optimized?.78:.94);const bytes=fromBuf(await b.arrayBuffer());
  const pg=3+i*3,im=pg+1,stream=pg+2;
  begin(pg);put(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 833.39] /Resources << /XObject << /Im1 ${im} 0 R >> >> /Contents ${stream} 0 R >>\n`);end();
  begin(im);put(`<< /Type /XObject /Subtype /Image /Width ${cv.width} /Height ${cv.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${bytes.byteLength} >>\nstream\n`);put(bytes);put('\nendstream\n');end();
  const draw=`q\n595.28 0 0 833.39 0 0 cm\n/Im1 Do\nQ\n`;
  begin(stream);put(`<< /Length ${draw.length} >>\nstream\n${draw}endstream\n`);end();notify(i+1,c.pages.length);
 }
 const startXref=offset;put(`xref\n0 ${offsets.length}\n0000000000 65535 f \n`);for(let i=1;i<offsets.length;i++)put(String(offsets[i]).padStart(10,'0')+' 00000 n \n');put(`trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF`);
 return new Blob(parts,{type:'application/pdf'});
}
async function imageBlob(c,pageIndex,scale=2.25){const cv=document.createElement('canvas');await drawPage(cv,c,c.pages[pageIndex],pageIndex,scale);return pngBlob(cv)}
async function allImagesZip(c,notify=()=>{}){if(!window.JSZip)throw Error('Biblioteca ZIP indisponível');const zip=new JSZip();for(let i=0;i<c.pages.length;i++){const b=await imageBlob(c,i,2);zip.file(`Yasmim_Catalogo_${String(i+1).padStart(2,'0')}.png`,b);notify(i+1,c.pages.length)}return zip.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:4}})}
async function deliver(blob,file){const f=new File([blob],file,{type:blob.type});if(navigator.canShare&&navigator.canShare({files:[f]})&&/iPhone|iPad|iPod/i.test(navigator.userAgent)){try{await navigator.share({files:[f],title:file});return}catch(e){if(e.name==='AbortError')return}}
 const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=file;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000)}
async function resizeImage(file,preserveAlpha=false){if(!file||!file.type.startsWith('image/'))throw Error('Selecione uma imagem JPG, PNG ou WebP.');if(file.size>24*1024*1024)throw Error('Escolha uma imagem de até 24 MB.');const src=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(Error('Falha ao abrir a imagem.'));reader.readAsDataURL(file)});const img=await image(src);if(!img)throw Error('Formato de imagem não compatível.');const max=preserveAlpha?1100:1600;const rate=Math.min(1,max/Math.max(img.width,img.height));const cv=document.createElement('canvas');cv.width=Math.round(img.width*rate);cv.height=Math.round(img.height*rate);const ctx=cv.getContext('2d');ctx.drawImage(img,0,0,cv.width,cv.height);return preserveAlpha?cv.toDataURL('image/png'):cv.toDataURL('image/jpeg',.84)}
return {W,H,THEMES,PAGE_TYPES,defPage,initialCatalog,photoFrame,drawPage,pdfBlob,imageBlob,allImagesZip,deliver,resizeImage};
})();
