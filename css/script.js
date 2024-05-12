document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const listitems = document.querySelector('list_item');
  
    menuToggle.addEventListener('click', function() {
        listitems.listitems.toggle('active');
    });
  });