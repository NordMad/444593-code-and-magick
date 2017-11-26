'use strict';
// 1 Убираю класс hidden

var usersSetup = document.querySelector('.setup');
usersSetup.classList.remove('hidden');

var wizardTemplate = document.querySelector('#similar-wizard-template');

// 2 Создаю массив с параметрами волшебников

var wizardNames = [
  ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
];

var coat = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyes = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomWizard = function () {
  var firstName = wizardNames[0][getRandomNumber(0, wizardNames[0].length - 1)];
  var lastName = wizardNames[1][getRandomNumber(0, wizardNames[1].length - 1)];
  return firstName + ' ' + lastName;
};

var getRandomCoatColor = function () {
  return coat[getRandomNumber(0, coat.length)];
};

var getRandomEyesColor = function () {
  return eyes[getRandomNumber(0, eyes.length)];
};

var wizards = [
  {
    name: getRandomWizard(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  },
  {
    name: getRandomWizard(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  },
  {
    name: getRandomWizard(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  },
  {
    name: getRandomWizard(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  }
];

// 3 Создаю элементы и копирую в них волшебников

var similarListElement = usersSetup.querySelector('.setup-similar-list');
var similarWizardTemplate = wizardTemplate.content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  fragment.appendChild(wizardElement);
}
// 4 Отрисовываю сгенерированные DOM-элементы в блок .setup-similar-list
similarListElement.appendChild(fragment);
// 5 Показываю блок .setup-similar
document.querySelector('.setup-similar').classList.remove('hidden');
