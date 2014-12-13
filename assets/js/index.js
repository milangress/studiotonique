var active = document.getElementById('active');
var content = document.getElementById('content');
var allVids = content.querySelectorAll('video');
var allFigs = content.children;
// var embeddedVids = false;

var a1 = document.getElementById('arrowOne');
var a2 = document.getElementById('arrowTwo');
var curItem, item, videoItem, param, lastIndex;
var allItems = [];
var imgid = 0;

var ua = navigator.userAgent.toLowerCase();
var isMobile = window.innerWidth < 767;
var isAndroid = ua.indexOf("android") > -1;



function showReplay(target, video){
	var replayBtn = target.querySelector('.replay');
	replayBtn.style.display = 'block';
	// target.currentTime = 0;
	replayBtn.addEventListener('click', function(){
		replayBtn.style.display = 'none';
		video.api("play");
	})
}

function hideReplay(target){
	var replayBtn = target.parentElement.querySelector('.replay');
	replayBtn.style.display = 'none';
}

function jumpToProject(name){
	var projectFigure = document.getElementById(name);
	if(projectFigure){
		var firstChild = projectFigure.children[0];
		imgid = allItems.indexOf(firstChild);
		showItem();
	}
}

function showItem( event ){

	event == 'random' ? imgid = Math.floor(Math.random() * allItems.length) : imgid = imgid ;
	var nextItem = allItems[imgid]; 

	if( curItem ){
		curItem.style.display = 'none';
		nextItem.parentElement != curItem.parentElement ? curItem.parentElement.style.display = 'none' : '';

		if(isVideo(curItem) && !isMobile){ 
			
			videoItem.api('seekTo', 0);
			videoItem.api('pause');

			// videoItem.pause();
			// videoItem.currentTime > 0 ? videoItem.currentTime = 0 : '';
			// hideReplay(videoItem);

		}
	}

	curItem = nextItem;

	curItem.style.display = 'block';
	curItem.parentElement.style.display = 'block';

	if( isVideo(curItem) && !isMobile ){

		// videoItem.api("play");
		loadImage(allItems[imgid+1]);
	
	}else{

		loadImage(curItem);
	
	}

	preload();
	window.history.replaceState( {} , curItem.parentElement.id,  _subfolder +'/project:'+curItem.parentElement.id+'' );
}


///// UTILS


function isVideo(target){
	var isvideo = false;
	
	if(target.children[0]){ 
		target.children[0].tagName == 'IFRAME' ? isvideo = true : isvideo = false;

		///// get vimeo vimeo item
		videoItem = $f(target.children[0].id);
	}

	// if(target){
	// 	if(target.children[0] && target.children[0].tagName == 'VIDEO'){
	// 		isvideo = true;
	// 		videoItem = target.children[0];
	// 	}
	// }

	return isvideo;
}



/////  BROWSER ACTIONS


var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange() {
  if (document[hidden]) {
    isVideo(curItem) ? videoItem.api('pause') : '';
  }
}

function setMaxWidth(){
	var maxwidth;
	isMobile = window.innerWidth < 767;

	!isMobile ? maxwidth = window.innerWidth-370+'px' : maxwidth = '100%';
	maxwidth > 2000 ? content.style.width = '2000px' : content.style.width = maxwidth;
}



///// LOADER


function loadImage(img) {
	try {
		if(!isVideo(img) && !img.src){
			var src = isMobile ? img.getAttribute('mobile-src') : img.getAttribute('data-src');
			img.classList.add('loading');
			var preloader = new Image();
			preloader.src = src;
			img.src =  _subfolder + '/assets/images/loading.svg';
			preloader.onload = function() {
				img.src = src;
				img.classList.remove('loading');
			};
		}
	}catch (e){
		console.log('invalid item');
	}
}


function preload() {
	var index = imgid;
	var lastPos = allItems.length - 1;
	var next =
		!lastIndex ? next = true :
		!(index == lastPos && lastIndex == 0)
		&& (index > lastIndex)
		|| (index == 0 && lastIndex == lastPos);
	var preloadPos = next
		? index == lastPos ? 0 : index + 1
		: index == 0 ? lastPos : index - 1;
	loadImage(allItems[preloadPos]);
	lastIndex = index;
}



///// CONTROLS


function next(event){
	if(event.target.tagName == 'IMG' || event.target.tagName == 'IFRAME' || event.target.id == 'arrowTwo'){
		imgid == allItems.length-1 ? imgid = 0 : imgid++;
		showItem(event);
	}
}

function prev(event){
	imgid == 0 ? imgid = allItems.length-1 : imgid--;
	showItem(event);
}




///// INITIALIZE


function fillArray(){

	if (isMobile && isAndroid){
		for(var v=0; v<allVids.length; v++){
			//showReplay(allVids[v]);
			allVids[v].parentElement.style.display = 'none';
		}
	}

	for (var f=0; f<allFigs.length; f++){

		var curFig = allFigs[f];

		for(var i=0; i<curFig.children.length; i++){

			item = curFig.children[i];
			//curFig.style.display = 'none';

			if(item.tagName != 'FIGCAPTION' && item.tagName != 'SPAN' && item.tagName != 'NOSCRIPT'){	
				item.style.display != 'none' ? allItems.push(item) : '';
				item.style.display = 'none';
			}

		}
	}

}

function enableArrows(){

	a2.addEventListener('click', next);
	a1.addEventListener('click', prev);

}

function preloadFirstImages(){

	loadImage(allItems[imgid]);
	loadImage(allItems[imgid+1]);
	loadImage(allItems[imgid-1]);

}

function addEventListeners(){

	for (var i=0; i<allFigs.length; i++) {
		allFigs[i].addEventListener('click', next);
	}

	document.addEventListener(visibilityChange, handleVisibilityChange, false);
	window.addEventListener("resize", setMaxWidth);

}


function init(){

	fillArray();
	
	console.log("param: "+param);
	param ? jumpToProject(param) : showItem('random') ;

	embeddedVids ? initVideos() : '' ;

	//preloadFirstImages();
	loadImage(allItems[imgid-1]);
	setMaxWidth();
	enableArrows();

	addEventListeners();
}

init();