let classLinks = document.querySelectorAll(".menu__link");//обращаемся как в сss

for (let menuLink of classLinks) {
   menuLink.onclick = function () {
      let menuLinkParent = menuLink.closest("li");

		let menuSub = menuLinkParent.querySelector(".menu__item > .menu_sub");

		const activeMenuItem = document.querySelector(".menu_active");

		if (menuSub !== null && activeMenuItem !== null && menuSub === activeMenuItem) { //проверяем присутствие элемента
			menuSub.classList.remove("menu_active");
			return false; //чтобы обработчик не выполнялся
		}

		if (activeMenuItem && activeMenuItem !== null) {
			activeMenuItem.classList.remove("menu_active");
		}
		menuSub.classList.toggle("menu_active");

		return false;

	};
};