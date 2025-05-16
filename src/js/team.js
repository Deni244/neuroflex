  const slidesData = [
    {
      image: {
        srcset: '/img/team/team-1.webp 1x, /img/team/team-1@2x.webp 2x',
        src: '/img/team/team-1.webp',
        alt: 'Roman Kirilenko',
      },
      profile: {
        en: {
          title: 'Expert in task decomposition',
          name: 'Roman Kirilenko',
          subtitle: 'Fullstack developer in Java',
        },
        ua: {
          title: `Експерт з декомпозиції завдань`,
          name: `Кириленко Роман`,
          subtitle: `Фулстек-розробник на Java`,
        },
        ru: {
          title: `Эксперт по декомпозиции задач`,
          name: `Кириленко Роман`,
          subtitle: `Фулстек-разработчик на Java`,
        },
      },
      info: {
        en: {
          title: 'Community manager in task decomposition',
        subtitle: 'Moderator of automated processes in CRM',
        description: 'The community brings together professionals who jointly develop commercial projects, achieving new levels of profit. For this purpose, advanced management tools are used: process automation, analytics and task decomposition.',
        },
         ua: {
          title: `Ком’юніті-менеджер з декомпозиції завдань`,
          subtitle: `Будь там, де роблять системні результати.`,
          description: `Спільнота об'єднує фахівців, які спільно розвивають комерційні проєкти, досягаючи нових рівнів прибутку. Для цього використовуються передові інструменти управління: автоматизація процесів, аналітика та декомпозиція задач.`,
        },
        ru: {
          title: `Комьюнити-менеджер в декомпозиции задач`,
          subtitle: `Модератор автоматизированных процессов в CRM`,
          description: `Сообщество объединяет профессионалов, которые совместно развивают коммерческие проекты, достигая новых уровней прибыли. Для этого используются передовые инструменты управления: автоматизация процессов, аналитика и декомпозиция задач.`,
        },
      },
    },
    {
      image: {
        srcset: '/img/team/team-2.webp 1x, /img/team/team-2@2x.webp 2x',
        src: '/img/team/team-2.webp',
        alt: 'Emily Johnson',
      },
      profile: {
        en: {
          title: 'Expert in digital marketing',
          name: 'Kimakivska Angelina',
          subtitle: 'Creator of media system',
        },
        ua: {
          title: `Експерт з digital-маркетингу`,
          name: `Кімакивська Ангеліна`,
          subtitle: `Автор системи медійності`,
        },
        ru: {
          title: `Эксперт в digital-маркетинге`,
          name: `Кимакивська Ангелина`,
          subtitle: `Создатель системы медийности`,
        },
      },
      info: {
        en: {
          title: 'Community manager in digital marketing',
          subtitle: 'Moderator of digital processes in marketing',
          description: 'Community builds and scales business processes to grow project revenues. Bloggers and marketers develop advertising strategies, scale auto-funnels and traffic monetisation models.',
         
        },
         ua: {
          title: `Ком’юніті-менеджер з digital-маркетингу`,
          subtitle: `Модератор digital-процесів в маркетингу`,
          description: `Спільнота вибудовує та масштабує бізнес-процеси для зростання доходів проєктів. Блогери та маркетологи розвивають рекламні стратегії, масштабують автоворонки та моделі монетизації трафіку.`,
        },
        ru: {
          title: `Комьюнити-менеджер в digital-маркетинге`,
          subtitle: `Модератор digital-процессов в маркетинге`,
          description: `Сообщество выстраивает и масштабирует бизнес-процессы для роста доходов проектов. Блогеры и маркетологи развивают рекламные стратегии, масштабируют автоворонки и модели монетизации трафика.`,
        },
      },
    },
    {
      image: {
        srcset: '/img/team/team-3.webp 1x, /img/team/team-3@2x.webp 2x',
        src: '/img/team/team-3.webp',
        alt: 'Alexander Smith',
      },
      profile: {
        en: {
          title: 'Expert in B2B growth strategies',
          name: 'Dmitry Chernishevsky',
          subtitle: 'B2B process architect',
        },
        ua: {
          title: `Експерт зі стратегій B2B-зростання`,
          name: `Чернишевський Дмитро`,
          subtitle: `Архітектор B2B-процесів`,
        },
        ru: {
          title: `Эксперт по B2B-стратегиям роста`,
          name: `Чернишевский Дмитрий`,
          subtitle: `Архитектор B2B-процессов`,
        },
      },
      info: {
        en: {
          title: 'Community manager on scalable models',
          subtitle: 'Moderator on scaling B2B models',
          description: 'Entrepreneurs and community experts develop and scale B2B models, integrating them into the ecosystem and commercial processes. These models enable strategic growth, automation and scaling, creating an architecture of operations and integrations for sustainable projects.',
        },
        ua: {
          title: `Ком’юніті-менеджер з масштабованих моделей`,
          subtitle: `Модератор із масштабування B2B-моделей`,
          description: `Підприємці та експерти спільноти розробляють та масштабують B2B-моделі, інтегруючи їх в екосистему та комерційні процеси. Ці моделі забезпечують стратегічне зростання, автоматизацію та масштабування, створюючи архітектуру операцій та інтеграцій для стійкого розвитку проєктів.`,
        },
        ru: {
          title: `Комьюнити-менеджер по масштабируемым моделям`,
          subtitle: `Модератор по масштабированию B2B-моделей`,
          description: `Предприниматели и эксперты сообщества разрабатывают и масштабируют B2B-модели, интегрируя их в экосистему и коммерческие процессы. Эти модели обеспечивают стратегический рост, автоматизацию и масштабирование, создавая архитектуру операций и интеграций для устойчивого развития проектов.`,
        },
      },
    },
  ];

// document.addEventListener('DOMContentLoaded', () => {
//   const prevButton = document.querySelector('.team__slide-prev-button');
//   const nextButton = document.querySelector('.team__slide-next-button');
//   const dots = document.querySelectorAll('.team__slide-nav-dot');

//   const profileImage = document.getElementById('profile-image');
//   const profileTitle = document.getElementById('profile-title');
//   const profileName = document.getElementById('profile-name');
//   const profileSubtitle = document.getElementById('profile-subtitle');
//   const infoTitle = document.getElementById('info-title');
//   const infoSubtitle = document.getElementById('info-subtitle');
//   const infoDescription = document.getElementById('info-description');


// let language = document.getElementById("language-select").value;
//   let currentSlide = 0;

//   function updateSlide(slideIndex) {
//     const slideData = slidesData[slideIndex];

//     const elements = [
//       profileImage,
//       profileTitle,
//       profileName,
//       profileSubtitle,
//       infoTitle,
//       infoSubtitle,
//       infoDescription,
//     ];
//     elements.forEach(el => el.classList.add('fade-out'));

//     setTimeout(() => {
//       profileImage.srcset = slideData.image.srcset;
//       profileImage.src = slideData.image.src;
//       profileImage.alt = slideData.image.alt;

//       document.getElementById("language-select").addEventListener("change", () => {
//   let language = document.getElementById("language-select").value;
//   console.log(language);
  
//       profileTitle.textContent = slideData.profile[language].title;
//       profileName.textContent = slideData.profile[language].name;
//       profileSubtitle.textContent = slideData.profile[language].subtitle;

//       infoTitle.textContent = slideData.info[language].title;
//       infoSubtitle.textContent = slideData.info[language].subtitle;
//       infoDescription.textContent = slideData.info[language].description;
// });

//       elements.forEach(el => {
//         el.classList.remove('fade-out');
//         el.classList.add('fade-in');
//       });

//       setTimeout(() => {
//         elements.forEach(el => el.classList.remove('fade-in'));
//       }, 300);
//     }, 300);

//     dots.forEach((dot, index) => {
//       dot.classList.toggle('active', index === slideIndex);
//     });
//   }

//   function nextSlide() {
//     currentSlide = (currentSlide + 1) % slidesData.length;
//     updateSlide(currentSlide);
//   }

//   function prevSlide() {
//     currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
//     updateSlide(currentSlide);
//   }

//   nextButton.addEventListener('click', nextSlide);
//   prevButton.addEventListener('click', prevSlide);

//   dots.forEach(dot => {
//     dot.addEventListener('click', () => {
//       const slideIndex = parseInt(dot.getAttribute('data-index'));
//       currentSlide = slideIndex;
//       updateSlide(currentSlide);
//     });
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.team__slide-prev-button');
  const nextButton = document.querySelector('.team__slide-next-button');
  const dots = document.querySelectorAll('.team__slide-nav-dot');

  const profileImage = document.getElementById('profile-image');
  const profileTitle = document.getElementById('profile-title');
  const profileName = document.getElementById('profile-name');
  const profileSubtitle = document.getElementById('profile-subtitle');
  const infoTitle = document.getElementById('info-title');
  const infoSubtitle = document.getElementById('info-subtitle');
  const infoDescription = document.getElementById('info-description');

  const languageSelect = document.getElementById("language-select");

  let currentSlide = 0;

  function updateSlide(slideIndex) {
    const slideData = slidesData[slideIndex];
    const language = languageSelect.value;

    const elements = [
      profileImage,
      profileTitle,
      profileName,
      profileSubtitle,
      infoTitle,
      infoSubtitle,
      infoDescription,
    ];
    elements.forEach(el => el.classList.add('fade-out'));

    setTimeout(() => {
      profileImage.srcset = slideData.image.srcset;
      profileImage.src = slideData.image.src;
      profileImage.alt = slideData.image.alt;

      profileTitle.textContent = slideData.profile[language].title;
      profileName.textContent = slideData.profile[language].name;
      profileSubtitle.textContent = slideData.profile[language].subtitle;

      infoTitle.textContent = slideData.info[language].title;
      infoSubtitle.textContent = slideData.info[language].subtitle;
      infoDescription.textContent = slideData.info[language].description;

      elements.forEach(el => {
        el.classList.remove('fade-out');
        el.classList.add('fade-in');
      });

      setTimeout(() => {
        elements.forEach(el => el.classList.remove('fade-in'));
      }, 300);
    }, 300);

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === slideIndex);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slidesData.length;
    updateSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
    updateSlide(currentSlide);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-index'));
      currentSlide = slideIndex;
      updateSlide(currentSlide);
    });
  });

  languageSelect.addEventListener("change", () => {
    updateSlide(currentSlide); // просто оновлюємо поточний слайд
  });

  updateSlide(currentSlide); // початкове завантаження
});
