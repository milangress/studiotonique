<?php header("Content-Type:text/html;charset=utf-8"); ?> 
<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon2">

  <?php echo css('assets/css/style.css') ?>
  <script src="assets/js/font.js"></script>

  <?php echo 
      "<script>",
        "var _subfolder = '/". c::get(subfolder) . "';", 
        "_subfolder != '/' ? _subfolder = _subfolder : _subfolder = '' ;",
        "loadFont();",
      "</script>"; 
  ?>

  <noscript>
    <style>
      figure { position: relative; }
      figure:first-child figcaption { top: 55px; }
      figcaption { top: 0; }
      .arrow {display: none; }
    </style>
  </noscript>

</head>
<body>

  <?php
    function debug_to_console( $data ) {

      if ( is_array( $data ) )
          $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
      else
          $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";

      echo $output;
    }
  ?>
  
   <?php snippet('menu') ?>