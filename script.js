// * Burger menu
const headerNav = document.querySelector('.header__nav');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
    headerNav.classList.toggle('_active');
  });
}

//* Smooth scroll
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('.content-wrapper__header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        headerNav.classList.remove('_active');
        iconMenu.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}

console.log(`1. студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages +10
2. вёрстка валидная +10
для проверки валидности вёрстки используйте сервис https://validator.w3.org/
3. вёрстка семантическая +20
В коде странице присутствуют и используются по назначению следующие элементы:
Под "используются по назначению" имеется в виду, что у элементов есть какое-то содержание, соответствующее типу элемента, а не добавлены пустые теги для получения баллов. Правильность использования элементов не проверяется и на балл не влияет.
* header, main, footer +5
* элемент nav +5
* только один заголовок h1 +5
* заголовки h2 +5
4. в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10
Если ссылка в футере ведёт на курс stage0, это не ошибка.
5. для оформления СV используются css-стили +10
6. при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10
7. на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10
8. навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10
Также допускается использование нумерованого списка ol > li или ol > li > a
9. Содержание CV +30
CV содержит:
* краткую информацию о себе +5
* контакты для связи +5
* перечень навыков +5
* пример кода. Код добавляется при помощи символов и тегов, а не картинкой +5
* перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения +5
* информацию об образовании и уровне английского +5
10.CV выполнено на английском языке +10
130/130`);
