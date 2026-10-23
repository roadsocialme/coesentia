'use strict';
const stories = {
  'digital-duality': {kind:'Read / Essays',title:'Digital duality',description:'An essay collection exploring identity, intelligence and what connects us. The first essays are being developed. There are no published articles to read yet.'},
  'both-of-us': {kind:'Watch / Film',title:'Both of Us',description:'A speculative short film about human–AI connection. The project is in development; a film, trailer and release date are not yet available.'},
  conversations: {kind:'Listen / Audio',title:'Conversations on consciousness',description:'A planned audio series opening questions about consciousness, culture and shared futures. Episodes and a listening feed have not been released yet.'}
};
const dialog = document.querySelector('#story-dialog');
let returnFocus;
function showStory(key,trigger){const story=stories[key];if(!story)return;returnFocus=trigger||document.querySelector(`[data-story="${key}"]`);document.querySelector('#story-kind').textContent=story.kind;document.querySelector('#story-title').textContent=story.title;document.querySelector('#story-description').textContent=story.description;if(!dialog.open)dialog.showModal();}
document.querySelectorAll('[data-story]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();history.pushState(null,'',link.getAttribute('href'));showStory(link.dataset.story,link);}));
function closeStory(){dialog.close();if(stories[location.hash.slice(1)])history.replaceState(null,'','#explore');}
document.querySelector('.close').addEventListener('click',closeStory);
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeStory();}});
dialog.addEventListener('close',()=>{if(stories[location.hash.slice(1)])history.replaceState(null,'','#explore');returnFocus?.focus();});
document.querySelector('#story-newsletter').addEventListener('click',()=>dialog.close());
function syncStory(){const key=location.hash.slice(1);if(stories[key])showStory(key);else if(dialog.open)dialog.close();}
window.addEventListener('hashchange',syncStory);window.addEventListener('popstate',syncStory);syncStory();
document.querySelector('#year').textContent=new Date().getFullYear();
const signupUrl=window.COESENTIA_CONFIG?.newsletterUrl;
if(signupUrl){try{const url=new URL(signupUrl);if(url.protocol!=='https:')throw new Error('HTTPS required');const link=document.querySelector('#signup-link');link.href=url.href;link.hidden=false;document.querySelector('#signup-pending').hidden=true;document.querySelector('#signup-privacy').hidden=false;document.querySelector('#newsletter-status').textContent='Occasional updates. Join using our secure signup form.';}catch{console.warn('Newsletter is not configured with a valid HTTPS URL.');}}
