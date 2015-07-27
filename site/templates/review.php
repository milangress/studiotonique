<?php snippet('header') ?>

<nav>
	<p>
	  <a href='<?php echo $site->url() ?>' class='arrow'><span>&larr;</span></a>
	</p>
</nav>

<iframe id="iframe" class="" src="http://www.studiotonique.tumblr.com/" ></iframe>

<script>
	
	var iframe = document.getElementById('iframe'),
    timer;

	// window.addEventListener('scroll', function() {

	  clearTimeout(timer);

	  if(iframe.classList.contains('disable')) {
	    iframe.classList.remove('disable');
	  }
	  
	  timer = setTimeout(function(){
	    iframe.classList.add('disable');
	  },500);

	}, false);

</script>

<?php snippet('footer') ?>