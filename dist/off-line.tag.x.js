window.customElements.define('off-line', class extends HTMLElement {	connectedCallback() {		this.hidden = navigator.onLine;		window.addEventListener('online', ()=>this.hidden=true);		window.addEventListener('offline', ()=>this.hidden=false);	}});window.customElements.define('on-line', class extends HTMLElement {	connectedCallback() {		this.hidden = !navigator.onLine;		window.addEventListener('online', ()=>this.hidden=false);		window.addEventListener('offline', ()=>this.hidden=true);	}});