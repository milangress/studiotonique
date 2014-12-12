<main id='main'>

  <ul id='mainnav'>
    <h1>
      <li>
        <a href="<?php echo $site->url() ?>">Studio Tonique</a>
      </li>
      <?php foreach($pages->visible() as $p): ?>
      <li>
        <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
      </li>
      <?php endforeach ?> 
    </h1>
  </ul>