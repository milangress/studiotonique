<main id='main'>

  <ul id='mainnav'>
      <li>
        <h1><a href="<?php echo $site->url() ?>">Studio Tonique</a></h1>
      </li>
      <?php foreach($pages->visible() as $p): ?>
      <li>
        <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
      </li>
      <?php endforeach ?> 
  </ul>