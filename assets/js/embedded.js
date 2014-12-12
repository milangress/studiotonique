var players = document.querySelectorAll('.player');
var embeddedVids;
players.length > 0 ? embeddedVids = true : embeddedVids = false ;
var YTplayer = new Array();
var playerready, player;
var called = 0;


function initVideos(){
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
  for(var p=0; p<players.length; p++){
  	player = new YT.Player(players[p].id, {
		events: {'onReady': onPlayerReady}
	});
	YTplayer.push(player);
  }
}

function onPlayerReady() {
  called++;
  called == YTplayer.length ? showItem('random') : '';
}