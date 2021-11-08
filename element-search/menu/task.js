let classLinks = document.querySelectorAll(".menu__link");//обращаемся как в сss

for (let menuLink of classLinks) {
    menuLink.onclick = function () {
        let menuLinkParent = menuLink.closest("li");
    let activeMenuItem = document.querySelector(".menu_active");

    let menuSub = menuLinkParent.querySelector(".menu__item > .menu_sub");
        let childrenMenuSub = menuLinkParent.querySelector(".menu_active");

        if (activeMenuItem !== null) {
            activeMenuItem.classList.remove("menu_active");
        }

        if (menuSub !== null && childrenMenuSub === null) {
            menuSub.classList.toggle("menu_active");
        }

        return false;
    };
};

