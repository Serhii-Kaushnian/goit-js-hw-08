import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('[type="email"]');
const textAreaRef = document.querySelector('[name="message"]');
const buttonRef = document.querySelector('[type="submit"]');

const STORAGE_KEY = 'feedback-form-state';

restoreMessage();

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 1000));

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

  console.log('formData: ', formData);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function restoreMessage() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
  if (!savedMessage) {
    return;
  }
  if (savedMessage) {
    const { email, message } = parsedMessage;
    if (message) {
      textAreaRef.value = message;
    }
    if (email) {
      inputRef.value = email;
    }
  }
  console.log('parsedMessage: ', parsedMessage);
}
