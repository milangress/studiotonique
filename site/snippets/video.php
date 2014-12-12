<?php

// stop without videos
if(empty($videos)) return;

// set some defaults
if(!isset($width))    $width    = 400;
if(!isset($height))   $height   = 300;
if(!isset($preload))  $preload  = true;
if(!isset($controls)) $controls = true;

// build the html tags for the video element
$preload  = ($preload)  ? ' preload="auto"'   : '';
$controls = ($controls) ? ' controls="controls"' : '';

?>
<video <?php echo $preload . $controls ?> >
  <?php foreach($videos as $video): ?>
 	 <source src="<?php echo $video->url() ?>" type="<?php echo $video->mime() ?>" />
  <?php endforeach ?>
  Your browser does not support the video tag.
  <?php if(isset($thumb)): ?>
 	 <img src="<?php echo $thumb->url() ?>" alt="<?php echo $thumb->title() ?>" />
  <?php endif ?>
</video>
