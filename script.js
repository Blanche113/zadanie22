document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var opis = document.querySelector(".opis");
        var portfolio = document.querySelector(".portfolio");
        var naglOpis = document.querySelectorAll(".nagl-opis");
        var listaBlock = document.querySelectorAll(".lista-block-ul");
        var zalety = document.querySelector(".zalety");
        var story = document.querySelector(".story-main");
        var people = document.querySelector(".people-main");
        var kontakt = document.querySelector(".kontakt-main-main");
        var triggerBottom = window.innerHeight; // Настройте на ваше усмотрение

        // informacja
        naglOpis.forEach(naglOpisBox => {
            var naglOpisBoxTop = naglOpisBox.getBoundingClientRect().top;
            if (naglOpisBoxTop < triggerBottom) {
                naglOpisBox.classList.add("animate-nagl-opis");
            } else {
                naglOpisBox.classList.remove("animate-nagl-opis");
            }
        });

        // opis
        var opisTop = opis.getBoundingClientRect().top;
        if (opisTop < triggerBottom) {
            opis.querySelectorAll(".orange-opis").forEach(orangeOpis => {
                orangeOpis.classList.add("animate-orange-opis");
            });
            opis.querySelectorAll(".blue-opis").forEach(blueOpis => {
                blueOpis.classList.add("animate-blue-opis");
            });
            opis.querySelectorAll(".left-opis").forEach(leftOpis => {
                leftOpis.classList.add("animate-left-opis");
            });
            opis.querySelectorAll(".right-opis").forEach(rightOpis => {
                rightOpis.classList.add("animate-right-opis");
            });
            opis.querySelectorAll(".img-opis").forEach(imgOpis => {
                imgOpis.classList.add("animate-img-opis");
            });
            opis.querySelectorAll(".girl-opis").forEach(girlOpis => {
                girlOpis.classList.add("animate-girl-opis");
            });
        } else {
            opis.querySelectorAll(".orange-opis").forEach(orangeOpis => {
                orangeOpis.classList.remove("animate-orange-opis");
            });
            opis.querySelectorAll(".blue-opis").forEach(blueOpis => {
                blueOpis.classList.remove("animate-blue-opis");
            });
            opis.querySelectorAll(".left-opis").forEach(leftOpis => {
                leftOpis.classList.remove("animate-left-opis");
            });
            opis.querySelectorAll(".right-opis").forEach(rightOpis => {
                rightOpis.classList.remove("animate-right-opis");
            });
            opis.querySelectorAll(".img-opis").forEach(imgOpis => {
                imgOpis.classList.remove("animate-img-opis");
            });
            opis.querySelectorAll(".girl-opis").forEach(girlOpis => {
                girlOpis.classList.remove("animate-girl-opis");
            });
        }

        // lista
        listaBlock.forEach(listaBlockBox => {
            var listaBlockBoxTop = listaBlockBox.getBoundingClientRect().top;
            if (listaBlockBoxTop < triggerBottom) {
                listaBlockBox.classList.add("animate-lista-block-ul");
            } else {
                listaBlockBox.classList.remove("animate-lista-block-ul");
            }
        });

        // portfolio
        var portfolioTop = portfolio.getBoundingClientRect().top;
        if (portfolioTop < triggerBottom) {
            portfolio.querySelectorAll(".zd1").forEach(zd1 => {
                zd1.classList.add("animate-zd1");
            });
            portfolio.querySelectorAll(".zd2").forEach(zd2 => {
                zd2.classList.add("animate-zd2");
            });
            portfolio.querySelectorAll(".zd-info-1").forEach(zdInfo => {
                zdInfo.classList.add("animate-zd-info-1");
            });
            portfolio.querySelectorAll(".zd-info-2").forEach(zdInfo2 => {
                zdInfo2.classList.add("animate-zd-info-2");
            });
            portfolio.querySelectorAll(".portfolio-h2").forEach(portfolioH2 => {
                portfolioH2.classList.add("animate-portfolio-h2");
            });
            portfolio.querySelectorAll(".portfolio-button").forEach(portfolioButton => {
                portfolioButton.classList.add("animate-portfolio-button");
            });
        } else {
            portfolio.querySelectorAll(".zd1").forEach(zd1 => {
                zd1.classList.remove("animate-zd1");
            });
            portfolio.querySelectorAll(".zd2").forEach(zd2 => {
                zd2.classList.remove("animate-zd2");
            });
            portfolio.querySelectorAll(".zd-info-1").forEach(zdInfo => {
                zdInfo.classList.remove("animate-zd-info-1");
            });
            portfolio.querySelectorAll(".zd-info-2").forEach(zdInfo2 => {
                zdInfo2.classList.remove("animate-zd-info-2");
            });
            portfolio.querySelectorAll(".portfolio-h2").forEach(portfolioH2 => {
                portfolioH2.classList.remove("animate-portfolio-h2");
            });
            portfolio.querySelectorAll(".portfolio-button").forEach(portfolioButton => {
                portfolioButton.classList.remove("animate-portfolio-button");
            });
        }

        // zalety
        var zaletyTop = zalety.getBoundingClientRect().top;
        if (zaletyTop < triggerBottom) {
            zalety.querySelectorAll(".zalety-list").forEach(zl => {
                zl.classList.add("animate-zalety-list");
            });
            zalety.querySelectorAll(".zalety-list").forEach(zl => {
                zl.classList.add("animate-zalety-list");
            });
            zalety.querySelectorAll(".zalety-right").forEach(zl_right => {
                zl_right.classList.add("animate-zalety-right");
            });
            zalety.querySelectorAll(".zalety-button").forEach(zl_button => {
                zl_button.classList.add("animate-zalety-button");
            });
        } else {
            zalety.querySelectorAll(".zalety-list").forEach(zl => {
                zl.classList.remove("animate-zalety-list");
            });
            zalety.querySelectorAll(".zalety-list").forEach(zl => {
                zl.classList.remove("animate-zalety-list");
            });
            zalety.querySelectorAll(".zalety-right").forEach(zl_right => {
                zl_right.classList.remove("animate-zalety-right");
            });
            zalety.querySelectorAll(".zalety-button").forEach(zl_button => {
                zl_button.classList.remove("animate-zalety-button");
            });
        }

        // story
        var storyTop = story.getBoundingClientRect().top;
        if (storyTop < triggerBottom) {
            story.querySelectorAll(".orange-story").forEach(zl => {
                zl.classList.add("animate-orange-story");
            });
            story.querySelectorAll(".blue-story").forEach(zl => {
                zl.classList.add("animate-blue-story");
            });
            story.querySelectorAll(".img-story").forEach(zl => {
                zl.classList.add("animate-img-story");
            });
            story.querySelectorAll(".left-story").forEach(zl => {
                zl.classList.add("animate-left-story");
            });
            story.querySelectorAll(".right-story").forEach(zl => {
                zl.classList.add("animate-right-story");
            });
            story.querySelectorAll(".girl-story").forEach(zl => {
                zl.classList.add("animate-girl-story");
            });
        } else {
            story.querySelectorAll(".orange-story").forEach(zl => {
                zl.classList.remove("animate-orange-story");
            });
            story.querySelectorAll(".blue-story").forEach(zl => {
                zl.classList.remove("animate-blue-story");
            });
            story.querySelectorAll(".img-story").forEach(zl => {
                zl.classList.remove("animate-img-story");
            });
            story.querySelectorAll(".left-story").forEach(zl => {
                zl.classList.remove("animate-left-story");
            });
            story.querySelectorAll(".right-story").forEach(zl => {
                zl.classList.remove("animate-right-story");
            });
            story.querySelectorAll(".girl-story").forEach(zl => {
                zl.classList.remove("animate-girl-story");
            });
        }

        // people
        var peopleTop = people.getBoundingClientRect().top;
        if (peopleTop < triggerBottom) {
            people.querySelectorAll(".large-man").forEach(zl => {
                zl.classList.add("animate-large-man");
            });
            people.querySelectorAll(".crcl-people").forEach(zl => {
                zl.classList.add("animate-crcl-people");
            });
            people.querySelectorAll(".little-man").forEach(zl => {
                zl.classList.add("animate-little-man");
            });
            people.querySelectorAll(".medium-woman").forEach(zl => {
                zl.classList.add("animate-medium-woman");
            });
            people.querySelectorAll(".opis-people").forEach(zl => {
                zl.classList.add("animate-opis-people");
            });
            people.querySelectorAll(".button-people").forEach(zl => {
                zl.classList.add("animate-button-people");
            });
            people.querySelectorAll(".orange-circle").forEach(zl => {
                zl.classList.add("animate-orange-circle");
            });
        } else {
            people.querySelectorAll(".large-man").forEach(zl => {
                zl.classList.remove("animate-large-man");
            });
            people.querySelectorAll(".crcl-people").forEach(zl => {
                zl.classList.remove("animate-crcl-people");
            });
            people.querySelectorAll(".little-man").forEach(zl => {
                zl.classList.remove("animate-little-man");
            });
            people.querySelectorAll(".medium-woman").forEach(zl => {
                zl.classList.remove("animate-medium-woman");
            });
            people.querySelectorAll(".opis-people").forEach(zl => {
                zl.classList.remove("animate-opis-people");
            });
            people.querySelectorAll(".button-people").forEach(zl => {
                zl.classList.remove("animate-button-people");
            });
            people.querySelectorAll(".orange-circle").forEach(zl => {
                zl.classList.remove("animate-orange-circle");
            });
        }

        // kontakt
        var kontaktTop = kontakt.getBoundingClientRect().top;
        if (kontaktTop < triggerBottom) {
            kontakt.querySelectorAll(".kontakt-top").forEach(zl => {
                zl.classList.add("animate-kontakt-top");
            });
            kontakt.querySelectorAll(".kontakt-bottom-left").forEach(zl => {
                zl.classList.add("animate-kontakt-bottom-left");
            });
            kontakt.querySelectorAll(".kontakt-bottom-right").forEach(zl => {
                zl.classList.add("animate-kontakt-bottom-right");
            });
        } else {
            kontakt.querySelectorAll(".kontakt-top").forEach(zl => {
                zl.classList.remove("animate-kontakt-top");
            });
            kontakt.querySelectorAll(".kontakt-bottom-left").forEach(zl => {
                zl.classList.remove("animate-kontakt-bottom-left");
            });
            kontakt.querySelectorAll(".kontakt-bottom-right").forEach(zl => {
                zl.classList.remove("animate-kontakt-bottom-right");
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu-list");
    const overlay = document.getElementById("overlay");
    const hideMenu = document.getElementById("hideMenu");

    menuBtn.addEventListener("click", function () {
        menu.style.left = "0";
        overlay.style.display = "block";
    });

    overlay.addEventListener("click", function () {
        menu.style.left = "-400px";
        overlay.style.display = "none";
    });

    hideMenu.addEventListener("click", function () {
        menu.style.left = "-400px";
        overlay.style.display = "none";
    });
});







// const menu = document.querySelector(".menu-list");
// const menuItems = document.querySelectorAll(".menuItem");
// const openMenu = document.querySelector(".openMenu");
// const closeMenu = document.querySelector(".closeMenu");
// const shadow = document.querySelector(".shadow");

// openMenu.addEventListener("click", function () {
//     if (!menu.classList.contains("showMenu")) {
//         menu.classList.add("showMenu");
//         shadow.classList.add("cienOut");
//         shadow.classList.remove("cien");
//         shadow.style.display = "block";
//     }
// });
// closeMenu.addEventListener("click", function () {
//     if (menu.classList.contains("showMenu")) {
//         menu.classList.remove("showMenu");
//         shadow.classList.remove("cienOut");
//         shadow.classList.add("cien");
//     }
// });