export function initNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const close = () => { toggle.setAttribute('aria-expanded','false'); nav.classList.remove('is-open'); };
  toggle.addEventListener('click', () => { const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open); });
  nav.addEventListener('click',event=>{if(event.target.closest('a'))close();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape' && nav.classList.contains('is-open')){close();toggle.focus();}});
  document.addEventListener('click',event=>{if(!event.target.closest('.header'))close();});
  const media=matchMedia('(min-width: 901px)');media.addEventListener('change',close);
  if ('IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>{const active=a.hash===`#${entry.target.id}`;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -65% 0px'});
    document.querySelectorAll('main > section[id]').forEach(section=>observer.observe(section));
  }
}
