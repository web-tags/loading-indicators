document.head.insertAdjacentHTML('beforeend', `<template id="pulsing-circles"><style>div{display:inline-block;margin:5px;border-radius:100%;background:#333;width:100px;height:100px;animation:pulse 2s ease infinite;opacity:.2}#c2{animation-delay:.3s}#c3{animation-delay:.6s}@keyframes pulse{from{opacity:.2}50%{opacity:.9}to{opacity:.2}}</style><div id="c1"></div><div id="c2"></div><div id="c3"></div></template>`);
			window.customElements.define('pulsing-circles', class extends HTMLElement {
				constructor() {
					super();
					this.attachShadow({mode: 'open'}).appendChild(document.querySelector('template#pulsing-circles').content.cloneNode(true));
					
				}
				
				
			 	
			});