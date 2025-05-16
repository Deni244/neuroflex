document.addEventListener('DOMContentLoaded', () => {
  const mobileAccordionItems = document.querySelectorAll(
    '.accordion__list-mobile .accordion__item'
  );
  let activeItem = null;

  function closeAccordionItem(item) {
    const content = item.querySelector('.accordion__item-content');
    if (!content) return;

    content.style.maxHeight = content.scrollHeight + 'px';
    content.offsetHeight;
    content.style.maxHeight = '0';

    content.addEventListener('transitionend', function handler() {
      item.classList.remove('accordion__item--active');
      content.removeEventListener('transitionend', handler);
    });
  }

  function openAccordionItem(item) {
    const content = item.querySelector('.accordion__item-content');
    if (!content) return;

    item.classList.add('accordion__item--active');
    content.style.maxHeight = content.scrollHeight + 'px';
  }

  mobileAccordionItems.forEach(item => {
    const button = item.querySelector('.accordion__item-wrapper');
    if (!button) return;

    button.addEventListener('click', () => {
      const isActive = item.classList.contains('accordion__item--active');

      if (isActive) {
        closeAccordionItem(item);
        activeItem = null;
      } else {
        if (activeItem) {
          closeAccordionItem(activeItem);
        }
        openAccordionItem(item);
        activeItem = item;
      }
    });
  });

  const firstMenuItem = document.querySelector(
    '.accordion__list-desktop .accordion__item'
  );
  if (firstMenuItem) {
    firstMenuItem.classList.add('accordion__item--active');
  }
});

const contentData = [
  {
    id: 1,
    title: {
      en: `Growing your blog to a steady income`,
      ua: `Прокачування блогу до стабільного доходу`,
      ru: `Прокачка блога до стабильного дохода`,
    },
    text: {
      en: `When I started developing my blog, it was difficult. I lacked time and knowledge, and growth required significant investment. The blog was small, and there were almost no orders for advertising.
            I was invited to one of the community projects and decided to give it a try. After joining the community, I started actively participating in projects, earning income and developing my blog. Thanks to the streamlined processes and quality materials, I was able to accelerate my progress significantly.
            Now my income is $3000 per month, mostly thanks to advertising infoproducts and crypto-offers. I am very happy to be part of a strong environment that helps me to grow and develop faster. `,
      ua: `Коли я починала розвивати блог, було складно. Бракувало часу і знань, а для зростання були потрібні значні вкладення. Блог був невеликий, і замовлення реклами майже не надходили.
            Мене запросили в один із проектів спільноти, і я вирішила спробувати. Вступивши до спільноти, я почала брати активну участь у проектах, отримувати дохід і розвивати свій блог. Завдяки налагодженим процесам та якісним матеріалам, я змогла значно прискорити свій прогрес.
            Зараз мій дохід становить від $3000 на місяць, переважно завдяки рекламі інфопродуктів та крипто-офферів. Дуже рада, що стала частиною сильного оточення, яке допомагає мені зростати та розвиватися швидше.`,
      ru: `Когда я начинала развивать свой блог, было сложно. Не хватало времени и знаний, а для роста требовались значительные вложения. Блог был небольшой, и заказы на рекламу почти не поступали.
            Меня пригласили в один из проектов сообщества, и я решила попробовать. Вступив в сообщество, я начала активно участвовать в проектах, получать доход и развивать свой блог. Благодаря отлаженным процессам и качественным материалам, я смогла значительно ускорить свой прогресс.
            Сейчас мой доход составляет от $3000 в месяц, в основном благодаря рекламе инфопродуктов и крипто-офферов. Очень рада, что стала частью сильного окружения, которое помогает мне расти и развиваться быстрее. `,
    },
    footer: {
      en: 'Victoria Shevchuk, media blogger',
      ua: `Шевчук Вікторія, медіа блогер`,
      ru: `Шевчук Виктория, медиа блогер`,
    },
  },
  {
    id: 2,
    title: {
      en: 'Fitness course: quick launch and scaling up',
      ua: `Фітнес-курс: швидкий запуск та масштабування`,
      ru: `Фитнес-курс: быстрый запуск и масштабирование`,
    },
    text: {
      en: `Participated in a commercial community project where the launch of an offer took only three days due to the well-established processes. There were six specialists in the team, which allowed for efficient distribution of tasks.
The product was a fitness course with a focus on glute training. Promotion through community bloggers reduced advertising costs and increased profits.
My first month's income was $1500, and the project scaled thereafter. I cannot publish the details of the project in the public domain.`,
      ua: `Брав участь у комерційному проекті спільноти, де запуск офферу зайняв лише три дні завдяки налагодженим процесам. У команді було шість спеціалістів, що дозволило ефективно розподіляти завдання.
Продукт - курс з фітнесу з акцентом на тренування сідниць. Просування через блогерів спільноти дозволило знизити витрати на рекламу та збільшити прибуток.
Мій дохід за перший місяць становив $1500, надалі проект масштабувався. Деталі проекту не можу публікувати у відкритому доступі.`,
      ru: `Участвовал в коммерческом проекте сообщества, где запуск оффера занял всего три дня благодаря отлаженным процессам. В команде было шесть специалистов, что позволило эффективно распределять задачи.
Продукт — курс по фитнесу с акцентом на тренировки ягодиц. Продвижение через блогеров сообщества позволило снизить расходы на рекламу и увеличить прибыль.
Мой доход за первый месяц составил $1500, в дальнейшем проект масштабировался. Детали проекта не могу публиковать в открытом доступе.  `,
    footer: {
      en: 'Andrey Rudenko, IT developer',
      ua: `Андрій Руденко, ІТ-розробник`,
      ru: `Руденко Андрей, ІТ-разработчик`,
    }
    },
  },
  {
    id: 3,
    title: {
      en: 'Crypto-offers with high profitability',
      ua: `Крипто-оффери з високою профітністю`,
      ru: `Крипто-офферы с высокой профитностью`,
    },
    text: {
      en: `After joining the community, I decided to test crypto-offers. The launch was quick thanks to the well-established processes.
I quickly reviewed converting creatives, and the tests were inexpensive - only $10.7 per registration. To amplify results, I used an aggressive news preload with the country's president, which yielded a great response.
Launched via pharma accounts and auto-regs with cloaca. Worked with Facebook and Instagram, targeting an audience of men and women between the ages of 28 and 67.
Made $6,349 net profit in 3 weeks of shedding.`,
      ua: `Вступивши до спільноти, вирішив протестувати крипто-оффери. Запуск пройшов швидко завдяки налагодженим процесам.
Оперативно переглянув креативи, що конвертують, тести обійшлися недорого — всього по $10,7 за реєстрацію. Для посилення результатів використав агресивний преленд новин з президентом країни, що дало відмінний відгук.
Запуск здійснювався через фарм-акаунти та автореги з клоакою. Працював з Facebook та Instagram, націлюючись на аудиторію чоловіків та жінок віком від 28 до 67 років.
За 3 тижні проливу заробив $6 349 чистого профіту.`,
      ru: `Вступив в сообщество, решил протестировать крипто-офферы. Запуск прошел быстро благодаря отлаженным процессам.
Оперативно просмотрел конвертящие креативы, тесты обошлись недорого — всего по $10,7 за регистрацию. Для усиления результатов использовал агрессивный новостной преленд с президентом страны, что дало отличный отклик.
Запуск осуществлялся через фарм-аккаунты и автореги с клоакой. Работал с Facebook и Instagram, нацеливаясь на аудиторию мужчин и женщин в возрасте от 28 до 67 лет.
За 3 недели пролива заработал $6 349 чистого профита.`,
    },
    footer: {
      en: 'Anatoly Voitenko, media buyer',
      ua: `Войтенко Анатолій, медіабайєр`,
      ru: `Войтенко Анатолий, медиабайер`,
    },
  },
  {
    id: 4,
    title: {
      en: 'Scaling commodity projects',
      ua: `Масштабування товарних проектів`,
      ru: `Масштабирование товарных проектов`,
    },
    text: {
      en: `I've been a member of the community for three months now and I'm completely happy with the results. At first I was sceptical about participating in projects, but after talking to the moderators I decided to give it a try. I threw in a few product projects that were not working for me.
Thanks to well-built processes, quality analytics and competent positioning, the projects not only began to bring profit, but also scaled significantly. Now I am actively involved in both community projects and my own private projects.
During this time I have considerably pumped up my skills and increased my results 4 times.`,
      ua: `Перебуваю в спільноті вже три місяці і повністю задоволена результатами. Спочатку я скептично ставилася до участі у проектах, але після спілкування з модераторами вирішила спробувати. Закинула кілька товарних проектів, які в мене не заходили. Завдяки вибудуваним процесам, якісній аналітиці та грамотному позиціонуванню проекти не лише почали приносити прибуток, а й значно масштабувалися. Зараз я беру активну участь як у проектах спільноти, так і у своїх приватних проектах. 
За цей час значно прокачала свої навички та збільшила результати у 4 рази.`,
      ru: `Состою в сообществе уже три месяца и полностью довольна результатами. Сначала я скептически относилась к участию в проектах, но после общения с модераторами решила попробовать. Закинула несколько товарных проектов, которые у меня не заходили.
Благодаря выстроенным процессам, качественной аналитике и грамотному позиционированию проекты не только начали приносить прибыль, но и значительно масштабировались. Сейчас я активно участвую как в проектах сообщества, так и в своих частных проектах.
За это время значительно прокачала свои навыки и увеличила результаты в 4 раза`,
    },
    footer: {
      en: 'Svetlana Gumenyuk, entrepreneur',
      ua: `Гуменюк Світлана, підприємець`,
      ru: `Гуменюк Светлана, предприниматель`,
    },
  },
  {
    id: 5,
    title: {
      en: 'Blog growth through arbitrage auto-funnels',
      ua: `Зростання блогу через арбітражні автоворонки`,
      ru: `Рост блога через арбитражные автоворонки`,
    },
    text: {
      en: `Regarding the community, I immediately realised that it was a great opportunity for growth. In the community I got access to clear strategies, practical cases and a strong environment. 
Once I started working with arbitrage autofunnels, I significantly accelerated the growth of my blog and increased my income. These autofunnels helped me to work more effectively with advertising, test new approaches and optimise content.
I've set up a steady, growing income, and I'm actively growing my blog. The community is a driver for growth and development.`,
      ua: `Щодо спільноти одразу зрозуміла, що це чудова можливість для зростання. У спільноті я отримала доступ до чітких стратегій, практичних кейсів та сильного оточення.
Почавши працювати з арбітражними автоворонками, я значно прискорила зростання свого блогу та збільшила дохід. Ці автоворонки допомогли мені ефективніше працювати з рекламою, тестувати нові підходи та оптимізувати контент.
Налаштувала стабільний дохід, що росте, а також активно розвиваю блог. Спільнота є драйвером для зростання та розвитку.`,
      ru: `Относительно сообщества сразу поняла, что это отличная возможность для роста. В сообществе я получила доступ к четким стратегиям, практическим кейсам и сильному окружению. 
Начав работать с арбитражными автоворонками, я значительно ускорила рост своего блога и увеличила доход. Эти автоворонки помогли мне более эффективно работать с рекламой, тестировать новые подходы и оптимизировать контент.
Настроила стабильный, растущий доход, а также активно развиваю блог. Сообщество является драйвером для роста и развития. `,
    },
    footer: {
      en: 'Onishchuk Anastasia, blogging and arbitrage',
      ua: `Оніщук Анастасія, блогінг та арбітраж`,
      ru: `Онищук Анастасия, блоггинг и арбитраж  `,
    },
  },
  {
    id: 6,
    title: {
      en: 'From freelancing without results to career growth',
      ua: `Від фрілансу без результату до кар'єрного зростання`,
      ru: `От фриланса без результата к карьерному росту`,
    },
    text: {
      en: `Before joining the community, I passed various tests and interviews, but did not get results. Freelancing was also not yielding results due to lack of experience. After joining the community, I started working on commercial projects. 
Apart from earning opportunities, the community has greatly impacted my career growth. Thanks to the support and resources I received, I was able to achieve results that would have taken me much more time and money without this help.
I now work for a good company and continue to develop professionally.`,
      ua: `До вступу до спільноти я проходила різні тести та співбесіди, але не отримувала результатів. Фріланс теж не приносив результату через брак досвіду. Приєднавшись до спільноти, я почала працювати у комерційних проектах.
Окрім можливості заробляти, спільнота значно вплинула на моє кар'єрне зростання. Завдяки підтримці та ресурсам, які я отримала, мені вдалося досягти тих результатів, на які мені знадобилося б набагато більше часу та коштів без цієї допомоги.
Зараз я працюю у хорошій компанії та продовжую професійно розвиватися.`,
      ru: `До вступления в сообщество я проходила различные тесты и собеседования, но не получала результатов. Фриланс тоже не приносил результата из-за недостатка опыта. Присоединившись к сообществу, я начала работать в коммерческих проектах.  
Помимо возможности зарабатывать, сообщество значительно повлияло на мой карьерный рост. Благодаря поддержке и ресурсам, которые я получила, мне удалось достичь тех результатов, на которые бы мне потребовалось гораздо больше времени и средств без этой помощи.
Сейчас я работаю в хорошей компании и продолжаю профессионально развиваться.`,
    },
    footer: {
      en: 'Maria Ivanchuk, motion designer',
      ua: `Іванчук Марія, моушн-дизайнер `,
      ru: `Иванчук Мария, моушн-дизайнер`,
    },
  },
];
const menuItems = document.querySelectorAll('.accordion__item');
const contentTitle = document.querySelector('.accordion__content-title');
const contentText = document.querySelector('.accordion__content-text');
const contentFooter = document.querySelector('.accordion__content-footer');

function updateContent(id) {
  const language = document.getElementById('language-select').value;
  const content = contentData.find(item => item.id === parseInt(id));
  if (!content) return;

  contentTitle.textContent = content.title[language];

  const paragraphs = content.text[language].split('\n\n');

  const existingParagraphs = document.querySelectorAll(
    '.accordion__content-text'
  );
  for (let i = 1; i < existingParagraphs.length; i++) {
    existingParagraphs[i].remove();
  }

  contentText.textContent = paragraphs[0].trim();

  const contentSection = document.querySelector('.accordion__item-content');
  const footerElement = document.querySelector('.accordion__content-footer');

  for (let i = 1; i < paragraphs.length; i++) {
    const p = document.createElement('p');
    p.className = 'accordion__content-text';
    p.textContent = paragraphs[i].trim();
    contentSection.insertBefore(p, footerElement);
  }

  contentFooter.textContent = content.footer[language];
}
document.getElementById('language-select')?.addEventListener('change', () => {
  const activeItem = document.querySelector('.accordion__item--active');
  const id = activeItem?.getAttribute('data-id') || '1';
  updateContent(id);
});

menuItems.forEach(item => {
  item.addEventListener('click', function () {
    menuItems.forEach(i => i.classList.remove('accordion__item--active'));

    this.classList.add('accordion__item--active');

    const id = this.getAttribute('data-id');
    updateContent(id);
  });
});

updateContent(1);
