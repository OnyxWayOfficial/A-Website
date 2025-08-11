// Small interactive behavior: nav toggle + form demo
document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if(toggle){
  toggle.addEventListener('click', ()=>{
    if(nav.style.display==='flex'){nav.style.display='none'} else {nav.style.display='flex'}
  })
}

// Demo form handler — shows a success message without sending anything
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const note = document.createElement('div');
    note.textContent = 'Thanks! This is a demo. No message was sent.';
    note.style.marginTop = '8px';
    note.style.color = 'var(--accent)';
    form.appendChild(note);
    form.reset();
  })
}
