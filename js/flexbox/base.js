var ulNav = document.getElementsByClassName('row0');
var liNav = ulNav[0].getElementsByTagName('li');

var displayFlex = document.querySelector('#displayFlex');
var posDisplayFlex = displayFlex.offsetTop;

var flexDirection = document.querySelector('#flexDirection');
var posFlexDirection = flexDirection.offsetTop;

var flexWrap = document.querySelector('#flexWrap');
var posFlexWrap = flexWrap.offsetTop;

var flexFlow = document.querySelector('#flexFlow');
var posFlexFlow = flexFlow.offsetTop;

var justifyContent = document.querySelector('#justifyContent');
var posJustifyContent = justifyContent.offsetTop;

var alignItems = document.querySelector('#alignItems');
var posAlignItems = alignItems.offsetTop;

var alignContent = document.querySelector('#alignContent');
var posAlignContent = alignContent.offsetTop;

var chapter = document.querySelector('#chapter');
var posChapter = chapter.offsetTop;

window.onscroll = function () {
  var scroll = window.scrollY;
  scroll = scroll+300;
  if ( scroll >= 300 && scroll < posDisplayFlex) {
    liNav[0].removeAttribute('class', 'activ');
  } else if (scroll > posDisplayFlex && scroll < posFlexDirection) {
    liNav[0].setAttribute('class', 'activ');
    liNav[1].removeAttribute('class', 'active');
  } else if (scroll >= posFlexDirection && scroll < posFlexWrap) {
    liNav[0].removeAttribute('class', 'activ');
    liNav[1].setAttribute('class', 'activ');
    liNav[2].removeAttribute('class', 'active');
  } else if (scroll >= posFlexWrap && scroll < posFlexFlow) {
    liNav[1].removeAttribute('class', 'activ');
    liNav[2].setAttribute('class', 'activ');
    liNav[3].removeAttribute('class', 'active');
  } else if (scroll >= posFlexFlow && scroll < posJustifyContent) {
    liNav[2].removeAttribute('class', 'activ');
    liNav[3].setAttribute('class', 'activ');
    liNav[4].removeAttribute('class', 'active');
  } else if (scroll >= posJustifyContent && scroll < posAlignItems) {
    liNav[3].removeAttribute('class', 'activ');
    liNav[4].setAttribute('class', 'activ');
    liNav[5].removeAttribute('class', 'active');
  } else if (scroll >= posAlignItems && scroll < posAlignContent) {
    liNav[4].removeAttribute('class', 'activ');
    liNav[5].setAttribute('class', 'activ');
    liNav[6].removeAttribute('class', 'active');
  } else if (scroll >= posAlignContent  && scroll < (posChapter - 300)) {
    liNav[5].removeAttribute('class', 'activ');
    liNav[6].setAttribute('class', 'activ');
    liNav[7].removeAttribute('class', 'activ');
  } else {
    liNav[6].removeAttribute('class', 'activ');
    liNav[7].setAttribute('class', 'activ');
  }
};
