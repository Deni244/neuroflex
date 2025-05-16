import { translations } from "./translations.js";

// Поточна мова за замовчуванням
let currentLang = 'en';


function getNestedValue(obj, keyPath) {
  return keyPath.split('.').reduce((acc, key) => acc?.[key], obj);
}

function renderTexts() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = getNestedValue(translations[currentLang], key);
    if (translation) {
      el.textContent = translation;
    }
  });
}
// Вибір мови
document.getElementById("language-select").addEventListener("change", function (e) {
  currentLang = e.target.value;
  renderTexts();
});

// Початковий рендер
// renderTexts();
