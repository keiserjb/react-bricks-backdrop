<?php

/**
 *  BlockReactBricks extends BlockText
 *
 *  This class allows us to create site alert blocks.
 */
class BlockReactBricks extends Block {

  /**
   * {@inheritdoc}
   */
  function __construct($plugin_name, array $data = array()) {
    parent::__construct($plugin_name, $data);

    $this->settings += [
      'reactbricks' => '',
    ];
  }

  /**
   *  Sets title text on draggable block panel in Layout builder.
   */
  function getAdminTitle() {
    if (!empty($this->settings['admin_label'])) {
      return check_plain($this->settings['admin_label']);
    }

    return !empty($this->settings['title']) ? check_plain(
      $this->settings['title']
    ) : t('React Bricks Block');
  }

  /**
   * Returns the rendered content of this block.
   *
   * If there is no content, a non-breaking space is returned to ensure the
   * block is still displayed, with only the background image applied.
   *
   * @return string
   */
  function getContent() {
    $output = '<div id="react-bricks-app"></div>';
    $path = backdrop_get_path('module', 'react_bricks');
    backdrop_add_js($path . '/js/dist/main.min.js', array(
      'scope' => 'footer',
    ));
    return $output;
  }

}


