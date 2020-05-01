import Widget from './Widget';

const button = document.getElementById('button');
const createWidget = new Widget(
  document.body,
  'Popover title',
  'And here`s some amazing content. It`s very engaging. Right?',
);
createWidget.bindToDOM();

button.addEventListener('click', () => {
  createWidget.positionWidget(button);
});