<?php snippet('header') ?>

<nav>
	<p>
	  <a href='<?php echo $site->url() ?>' class='arrow'><span>&larr;</span></a>
	</p>
</nav>

  <div id='info'>

    <div class="column">
      <?php echo $page->text1()->kirbytext() ?>
    </div>
    <div class="column ctwo">
      <?php echo $page->text2()->kirbytext() ?>
    </div>
    <div class="column">
      <?php echo $page->text3()->kirbytext() ?>
    </div>

  </div>

  <div id='imprint'>

    <div class='column'>
      <?php echo $page->copyright()->kirbytext() ?>
      <?php echo $page->imprint()->kirbytext() ?>
    </div>

  </div>


 </main>

 <script>

 </script>

<?php snippet('footer') ?>