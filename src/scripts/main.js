(() => {
    document.addEventListener("click", e => {
        const menuList = document.getElementById('menu-list')
        if(e.target.matches('.burguer-button-container') || e.target.matches('.button-icon') && !menuList.style.display == "none") {
            return menuList.style.display = "none"; 
        }

        if(e.target.matches('.burguer-button-container') || e.target.matches('.button-icon') && menuList.style.display == "none") {
            return menuList.style.display = "flex";        
        }

        if(e.target.matches('.list-menu-container') || e.target.matches('.list-menu')) {
            return menuList.style.display = "flex"; 
        }

        return menuList.style.display = "none"; 
    })

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    document.addEventListener("scroll", e => {
        const banner = document.getElementById('main-banner-content')
        const rowup = document.getElementsByClassName('rowup-container')[0]
        if(!isInViewport(banner)) {
            return rowup.style.display = "flex"; 
        } 
        return rowup.style.display = "none"; 
    })
})();