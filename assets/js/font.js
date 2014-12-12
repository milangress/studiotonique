function loadFont(){

	var newStyle = document.createElement('style');
	newStyle.appendChild(document.createTextNode("\
	@font-face {\
	    font-family: 'PxGrotesk';\
	    src: url('" +  _subfolder + "/assets/fonts/pxgrotesk-regular-webfont.eot');\
	    src: url('" +  _subfolder + "/assets/fonts/pxgrotesk-regular-webfont.eot?#iefix') format('embedded-opentype'),\
			 url('" +  _subfolder + "/assets/fonts/pxgrotesk-regular-webfont.woff') format('woff'),\
	    	 url('" +  _subfolder + "/assets/fonts/pxgrotesk-regular-webfont.ttf') format('truetype'),\
	    	 url('" +  _subfolder + "/assets/fonts/pxgrotesk-regular-webfont.svg#svgFontName') format('truetype');\
	}\
	"));

	document.head.appendChild(newStyle);

}