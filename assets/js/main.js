
/* assets/js/main.js */

/* Toggle Submenu on Click for Mobile Devices */
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item.has-submenu > a');

  navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        if (submenu.style.display === 'block') {
          submenu.style.display = 'none';
        } else {
          submenu.style.display = 'block';
        }
      }
    });
  });
});
