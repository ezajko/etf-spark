document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const menuLevels = document.querySelectorAll('.mobile-menu-level');

    // Open Menu
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            mobileMenuOverlay.classList.add('active');
        });
    }

    // Close Menu
    function closeMenu() {
        mobileMenuOverlay.classList.remove('active');
        // Reset to level 1
        setTimeout(() => {
            menuLevels.forEach(level => {
                level.classList.remove('active');
                if (level.dataset.level === '1') {
                    level.classList.add('active');
                }
            });
        }, 300);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function (e) {
            if (e.target === mobileMenuOverlay) {
                closeMenu();
            }
        });
    }

    // Navigation Logic
    document.querySelectorAll('.has-children > a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const parentLi = this.parentElement;
            const subMenu = parentLi.querySelector('.mobile-menu-level');
            if (subMenu) {
                subMenu.classList.add('active');
            }
        });
    });

    document.querySelectorAll('.back-item a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const currentLevel = this.closest('.mobile-menu-level');
            currentLevel.classList.remove('active');
        });
    });

    // Search Toggle Logic
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.getElementById('searchBox');

    if (searchToggle && searchBox) {
        searchToggle.addEventListener('click', function (e) {
            e.preventDefault();
            searchBox.classList.toggle('d-none');
            if (!searchBox.classList.contains('d-none')) {
                searchBox.querySelector('input').focus();
            }
        });

        // Close search when clicking outside
        document.addEventListener('click', function (e) {
            if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
                searchBox.classList.add('d-none');
            }
        });
    }
    // Keyboard Support (Escape Key)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            // Close Mobile Menu
            if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
                closeMenu();
                navbarToggler.focus(); // Return focus to toggler
            }
            // Close Search Box
            if (searchBox && !searchBox.classList.contains('d-none')) {
                searchBox.classList.add('d-none');
                searchToggle.focus(); // Return focus to toggler
            }
        }
    });

    // Focus Trap for Mobile Menu
    if (mobileMenuOverlay) {
        const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

        mobileMenuOverlay.addEventListener('keydown', function (e) {
            if (!mobileMenuOverlay.classList.contains('active')) return;

            const focusableContent = mobileMenuOverlay.querySelectorAll(focusableElementsString);
            const firstFocusableElement = focusableContent[0];
            const lastFocusableElement = focusableContent[focusableContent.length - 1];

            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
});
