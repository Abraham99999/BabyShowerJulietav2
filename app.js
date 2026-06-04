const openButton=document.getElementById('openInvite');
const cover=document.getElementById('cover');
const invitation=document.getElementById('invitation');
openButton.addEventListener('click',()=>{
 cover.style.transition='opacity .7s ease, transform .7s ease';
 cover.style.opacity='0';
 cover.style.transform='scale(1.03)';
 setTimeout(()=>{cover.style.display='none';invitation.classList.remove('hidden');window.scrollTo(0,0)},700);
});
const targetDate=new Date('2026-06-28T16:00:00-06:00').getTime();
function updateCountdown(){
 const diff=targetDate-Date.now();
 if(diff<=0){document.getElementById('countdown').innerHTML='<div>¡Hoy celebramos a Julieta! 💕</div>';return}
 const d=Math.floor(diff/86400000),h=Math.floor(diff/3600000%24),m=Math.floor(diff/60000%60),s=Math.floor(diff/1000%60);
 document.getElementById('days').textContent=String(d).padStart(2,'0');
 document.getElementById('hours').textContent=String(h).padStart(2,'0');
 document.getElementById('minutes').textContent=String(m).padStart(2,'0');
 document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown();setInterval(updateCountdown,1000);
