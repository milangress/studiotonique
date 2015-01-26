<?php snippet('header') ?>

<nav>
	<p>
	  <span class='arrow noselect' id='arrowOne'>&larr;</span>
	  &ensp;
	  <span class='arrow noselect' id='arrowTwo'>&rarr;</spam>
	</p>
</nav>
  	<div id='content'>
  		<?php 
  			$videonames = array();
			
			foreach($site->find('projects')->children()->visible() as $project): 
			$index = 0;
			?>

	    	<figure id="<?php echo html($project->uid()) ?>">

			<?php foreach($project->files() as $file): 
				$index++;
				if(!$project->video()->isEmpty()){
					$count = $project->files()->count()+1;
				}else{
					$count = $project->files()->count();
				}
				
			?>

				<?php if(!in_array($file->name(), $videonames)) : ?>
					  	
					  	<?php if($file->type() == 'image'): ?>

					  		<?php $thumb = thumb($file, array('width' => 767, 'retina' => true, 'quality' => 90), false); ?>

					  		<div class="img">		
								<img data-src="<?php echo $file->url() ?>" mobile-src="<?php echo $thumb ?>" />
								<noscript><img src="<?php echo $file->url() ?>" /></noscript>
								<div class="index"><?php echo $index ?>&thinsp;/&thinsp;<?php echo $count ?></div>
							</div>

						<?php endif ?>

				<?php endif ?>

		  	<?php endforeach ?>

		  	<?php if(!$project->video()->isEmpty()): ?>

		  		<div class="embed-container">
		  			<iframe id="<?php echo $project->video() ?>" class="vplayer" src="https://player.vimeo.com/video/<?php echo $project->video() ?>?api=1&amp;player_id=<?php echo $project->video() ?>&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		  			<!-- <span class='replay'>&#8634; Replay</span> -->
		  			<div class="index"><?php echo $count ?>&thinsp;/&thinsp;<?php echo $count ?></div>
		  		</div>

		  	<?php endif ?>

		  	<figcaption>
			    <div class='title'>
			    	<?php echo $project->title()->kirbytext(); ?>
			    </div>
			    <div class='data'>
			    	<?php echo $project->data()->kirbytext() ?>
			    </div>
			    <div class='data'>
			    	<?php echo $project->text()->kirbytext() ?>
			    </div>
			</figcaption>

		  	</figure>

		<?php endforeach ?>
	</div>

</main>
<script src="assets/js/embedded.js"></script>

<?php

	session_start();
	$id = session_id();

	if ($_SESSION['LastRequest'] != $id){
	  $_SESSION['LastRequest'] = $id;
	  if ( sizeof(param()) != 0 ){
	 	  $output = "<script>param = '". param('project') . "';</script>";
	 	  echo $output;
		}
	}

?>

<script>

	var js = document.createElement("script");

	js.type = "text/javascript";
	js.src = _subfolder+'/assets/js/index.js';

	document.body.appendChild(js);

</script>

<?php snippet('footer') ?>