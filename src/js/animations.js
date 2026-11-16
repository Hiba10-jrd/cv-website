export function initAnimations() {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)'});observer.unobserve(entry.target);}}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  }
  const track=document.querySelector('.timeline-track span');
  let pending=false;
  const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.scroll-progress').style.transform=`scaleX(${max>0?scrollY/max:0})`;const timeline=document.querySelector('.timeline');const r=timeline.getBoundingClientRect();track.style.height=`${Math.max(0,Math.min(100,(innerHeight*.7-r.top)/r.height*100))}%`;document.querySelectorAll('.experience-card').forEach(el=>el.classList.toggle('is-current',el.getBoundingClientRect().top<innerHeight*.72));pending=false;};
  addEventListener('scroll',()=>{if(!pending){requestAnimationFrame(update);pending=true;}},{passive:true});addEventListener('resize',update);update();
  const art=document.querySelector('.hero-art');
  if(matchMedia('(pointer: fine)').matches && !reduced.matches){art.addEventListener('pointermove',event=>{const r=art.getBoundingClientRect();art.style.setProperty('--move-x',`${(event.clientX-r.left-r.width/2)*.018}px`);art.style.setProperty('--move-y',`${(event.clientY-r.top-r.height/2)*.018}px`);});art.addEventListener('pointerleave',()=>{art.style.setProperty('--move-x','0px');art.style.setProperty('--move-y','0px');});}
}
