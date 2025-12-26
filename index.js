// Navbar hover functionality
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const navMenus = document.querySelectorAll('.nav-menu');
    
    navItems.forEach(item => {
        const menuId = item.getAttribute('data-menu');
        const menu = document.querySelector(`.nav-menu[data-menu="${menuId}"]`);
        
        if (menu) {
            // Show menu on hover
            item.addEventListener('mouseenter', () => {
                // Hide all menus first
                navMenus.forEach(m => {
                    m.style.maxHeight = '0';
                    m.style.opacity = '0';
                    m.style.visibility = 'hidden';
                });
                // Show the corresponding menu
                menu.style.maxHeight = '600px';
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
            });
            
            // Keep menu open when hovering over it
            menu.addEventListener('mouseenter', () => {
                menu.style.maxHeight = '600px';
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
            });
            
            // Hide menu when mouse leaves
            menu.addEventListener('mouseleave', () => {
                menu.style.maxHeight = '0';
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            });
        }
    });
    
    // Hide all menus when mouse leaves navbar
    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('mouseleave', () => {
        navMenus.forEach(menu => {
            menu.style.maxHeight = '0';
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
        });
    });
});

