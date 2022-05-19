//burger menu
const burgerBtn = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.querySelector(".body");
burgerBtn.addEventListener("click", function () {
	burgerMenu.classList.toggle("burger-menu--active");
	burgerBtn.classList.toggle("burger--active");
	body.classList.toggle("scroll");
	
});

//search form
const form = document.querySelector(".search");
const openForm = document.querySelector(".search__open");
const searchBtn = document.querySelector(".search__btn");
const searchCross = document.querySelector(".search__cross");

openForm.addEventListener("click", function () {
	form.classList.add("search--active");
	openForm.style.visibility = "hidden";

	document.querySelectorAll(".search__svg").forEach(function (svgWidth) {
		svgWidth.style.width = "24px";
	});
});

searchCross.addEventListener("click", function () {
	form.classList.remove("search--active");
	openForm.style.visibility = "visible";

	document.querySelectorAll(".search__svg").forEach(function (svgWidth) {
		svgWidth.style.width = "0";
	});
});

const swiper = new Swiper(".swiper", {
	// Optional parameters
	autoplay: {
		delay: 5000,
	},

	loop: true,
	speed: 1500,

	a11y: {
		prevSlideMessage: "Предыдущий слайд",
		nextSlideMessage: "Следующий слайд",
		lastSlideMessage: "последний слайд",
		firstSlideMessage: "первый слайд",
		paginationBulletMessage: "переход к слайду {{index}}",
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

$(function () {
	$("#accordion").accordion({
		collapsible: true,
	});
});

//^Tabs
document.querySelectorAll(".work__tab").forEach(function (tabsBtn) {
	tabsBtn.addEventListener("click", function (event) {
		const path = event.currentTarget.dataset.path;

		document.querySelectorAll(".work__tab").forEach(function (btn) {
			btn.classList.remove("work__tab--active");
			event.currentTarget.classList.add("work__tab--active");
		});

		document.querySelectorAll(".tab-content").forEach(function (tabsBtn) {
			tabsBtn.classList.remove("tab-content--active");
		});
		document
			.querySelector(`[data-target="${path}"]`)
			.classList.add("tab-content--active");
	});
});


//inert traps

