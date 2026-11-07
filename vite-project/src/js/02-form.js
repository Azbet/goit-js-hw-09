const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {email: '', message: ''};

populateFormFields();

form.addEventListener('input', (event) => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
 localStorage.removeItem(STORAGE_KEY);
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Lütfen tüm alanları doldurun!');
    return;
  }

  console.log({
    email: emailValue,
    message: messageValue
  });

  
  form.reset();
  formData = { email: '', message: '' };
});

function populateFormFields() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      
      formData = parsedData;

      form.elements.email.value = parsedData.email || '';
      form.elements.message.value = parsedData.message || '';
    } catch (error) {
      console.error('LocalStorage verisi okunurken hata oluştu:', error);
    }
  }
}