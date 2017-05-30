/**
 * @file
 * Handles link replacement for elf module.
 */

(function ($) {
  Drupal.behaviors.elf = {
    attach: function(context) {
      // Find all external links and let them open in a new window.
      $("a.elf-external", context).once('elf-external', function() {
        $(this).click(function() {
          window.open($(this).attr("href"));
          return false;
        });
      });
    }
  };
})(jQuery);
