var players = document.querySelectorAll('.vplayer');
var embeddedVids;
players.length > 0 ? embeddedVids = true : embeddedVids = false ;
var YTplayer = new Array();
var playerready, player;
var called = 0;

function initVideos() {
  for(var p=0; p<players.length; p++){

    var player = $f(players[p]);
    player.addEvent('ready', onPlayerReady);
	YTplayer.push(player);
  
  }
}

function onPlayerReady( data ) {

	var froogaloop = $f(data);
	
	called++;
	called == YTplayer.length ? showItem('random') : '';
}