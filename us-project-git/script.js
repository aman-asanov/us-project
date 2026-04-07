// ================================
// ИНИЦИАЛИЗАЦИЯ И ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ================================

const translationDictionary = {
    ky: {
        'Главная': 'Башкы бет',
        'Клиники': 'Клиникалар',
        'Врачи': 'Докторлор',
        'Лечение за границей': 'Чет өлкөдө дарылоо',
        'Врачам': 'Докторлорго',
        'О нас': 'Биз жөнүндө',
        'Контакты': 'Байланыш',
        'Клиники Бишкека - MedBridge': 'Бишкектеги клиникалар - MedBridge',
        'Врачи - MedBridge': 'Дарыгерлер - MedBridge',
        'О нас - MedBridge Bishkek': 'Биз жөнүндө - MedBridge Bishkek',
        'Найти клинику': 'Клиника табуу',
        'Записаться': 'Жазылуу',
        'Получить консультацию': 'Консультация алуу',
        'Лечение за границей - Турция и Индия - MedBridge': 'Чет өлкөдө дарылоо - Түркия жана Индия - MedBridge',
        'MedBridge Bishkek - Медицинская платформа': 'MedBridge Bishkek - Медициналык платформа',
        'MedBridge - ведущая медицинская платформа Кыргызстана': 'MedBridge - Кыргызстандагы алдыңкы медициналык платформа',
        'Ваш надежный мост к качественной медицине': 'Саламаттык сактоого сиздин ишенимдүү көпүрөңүз',
        'Лучшие клиники Бишкека, Турции и Индии в одном месте': 'Бишкек, Түркия жана Индиядагы мыкты клиникалар бир жерде',
        'Доступ к лучшим клиникам Турции и Индии': 'Түркия жана Индиядагы эң мыкты клиникаларга жетүү',
        'Выберите страну для лечения': 'Дарылануу үчүн өлкөнү тандаңыз',
        'Современные технологии и опыт': 'Замандын технологиялары жана тажрыйба',
        'Специализации': 'Адистиктер',
        'Кардиология и кардиохирургия': 'Кардиология жана кардиохирургия',
        'Онкология': 'Онкология',
        'Трансплантация органов': 'Орган трансплантациясы',
        'Пластическая хирургия': 'Пластикалык хирургия',
        'Офтальмология': 'Офтальмология',
        'Ортопедия': 'Ортопедия',
        'Стоимость лечения: 30-50% дешевле, чем в Европе': 'Дарылоо баасы: Европага караганда 30-50% арзаныраак',
        'Высокие стандарты и доступные цены': 'Жогорку стандарттар жана жеткиликтүү баалар',
        'Стоимость лечения: 50-70% дешевле, чем в Европе': 'Дарылоо баасы: Европага караганда 50-70% арзаныраак',
        'Сравнение Турции и Индии': 'Түркия менен Индиянын салыштыруусу',
        'Критерий': 'Критерий',
        'Стоимость': 'Баасы',
        'Уровень медицины': 'Медицинанын деңгээли',
        'Время в пути': 'Жолдо өтүү убактысы',
        'Язык больниц': 'Клиникалардын тили',
        'Требуемая виза': 'Талап кылынган виза',
        'Реабилитация': 'Реабилитация',
        'На месте + дома': 'Жеринде + үйдө',
        'Помощь с визой и документами': 'Виза жана документтер боюнча жардам',
        '7 шагов к лечению за границей': 'Чет өлкөдө дарылоо үчүн 7 кадам',
        'Консультация': 'Консультация',
        'Обсудим ваш случай с врачами': 'Сиздин учурду дарыгерлер менен талкуулайбыз',
        'Подбор клиники': 'Клиника тандап алуу',
        'Выберем лучший вариант': 'Эң жакшы вариантты тандайбыз',
        'Оценка стоимости': 'Баасын баалоо',
        'Рассчитаем полную стоимость': 'Толук баасын эсептейбиз',
        'Поможем оформить визу': 'Визаны расмийдөөгө жардам беребиз',
        'Перелет': 'Учуу',
        'Забронируем авиабилеты': 'Авиабилеттерди брондойбуз',
        'Лечение': 'Дарылоо',
        'Сопровождение на месте': 'Жеринде коштоо',
        'Возвращение': 'Кайтып келүү',
        'Помощь с возвращением домой': 'Үйгө кайтканга жардам',
        'Стоимость услуг': 'Кызматтардын баасы',
        'Консультация врача': 'Дарыгердин консультациясы',
        'Бесплатно': 'Тегин',
        'Онлайн консультация и оценка': 'Онлайн консультация жана баалоо',
        'Включено в сервис': 'Кызматка кирет',
        'Оформление визы': 'Визаны расмийдөө',
        'Переводы документов': 'Документтерди которуу',
        'Нотариальные переводы': 'Нотариалдык котормолор',
        'Отзывы пациентов о лечении за границей': 'Чет өлкөдө дарылоо боюнча пациенттердин пикирлери',
        'Найдите лучшую клинику для вашего здоровья': 'Саламаттыгыңыз үчүн эң мыкты клиниканы табыңыз',
        'Фамилия врача': 'Дарыгердин фамилиясы',
        'Высокопрофессиональные специалисты с многолетним опытом': 'Көп жылдык тажрыйбасы бар жогорку кесипкөй адистер',
        'Откройте для себя новые возможности в получении качественной медицинской помощи': 'Сапаттуу медициналык жардам алуу үчүн жаңы мүмкүнчүлүктөрдү ачкыла',
        'Наша платформа объединяет пациентов, врачей и медицинские учреждения в единую экосистему, где можно быстро найти нужного врача, записаться на приём и если необходимо - получить лечение у ведущих специалистов Турции и Индии.': 'Биздин платформа пациенттерди, дарыгерлерди жана медициналык мекемелерди бирдиктүү экосистема менен бириктирет, анда керектүү дарыгерди ыкчам табып, кабылууга жазылып, зарыл болсо Түркия менен Индиянын мыкты адистеринен дарыланып аласыз.',
        'Мы работаем только с лучшими клиниками и врачами, имеющими соответствующую лицензию и опыт': 'Биз лицензиясы жана тажрыйбасы бар мыкты клиникалар жана дарыгерлер менен гана иштейбиз',
        'Все врачи имеют лицензию, опыт и подтвержденные отзывы пациентов': 'Бардык дарыгерлер лицензияга, тажрыйбага жана пациенттердин тастыкталган пикирлерине ээ',
        'Открыли портал с первыми 50 клиниками и 100 врачами, зарегистрировали первых 1000 пациентов': 'Алгачкы 50 клиника жана 100 дарыгер менен портал ачып, алгачкы 1000 пациентти каттадык',
        'Начали партнерство с ведущими клиниками Турции и Индии, помогли первым 100 пациентам получить лечение за границей': 'Түркия менен Индиянын алдыңкы клиникалары менен өнөктөштүктү баштадык, алгачкы 100 пациентке чет өлкөдө дарыланууга жардам бердик',
        'Продолжаем развиваться, добавляя новые функции и расширяя присутствие на рынке': 'Биз жаңы функцияларды кошуп, рынокто катышуубузду кеңейтип өсүүнү улантып жатабыз',
        'Все специализации': 'Бардык адистиктер',
        'Все города': 'Бардык шаарлар',
        'Сортировка': 'Сорттоо',
        'Поиск': 'Издөө',
        'Все рейтинги': 'Бардык рейтингдер',
        'По рейтингу': 'Рейтинг боюнча',
        'По цене': 'Баасына ылайык',
        'По названию': 'Аталышы боюнча',
        'По числу отзывов': 'Сын-пикирлер саны боюнча',
        'Сброс': 'Тазалоо',
        'Ваше имя': 'Атыңыз',
        'Ваш email': 'Сиздин email',
        'Номер телефона': 'Телефон номери',
        'Выберите дату': 'Күндү тандаңыз',
        'Выберите время': 'Убактты тандаңыз',
        'Описание вашего состояния': 'Сиздин абалыңыздын сүрөттөлүшү',
        'О нас': 'Биз жөнүндө',
        'Онлайн запись': 'Онлайн жазылуу','Запишитесь к врачу за несколько кликов, выберите удобное время': 'Бир нече чыкылдатуу менен дарыгерге жазылыңыз, ыңгайлуу убакытты тандаңыз',
        'Запись к врачу': 'Дарыгерге жазылуу',
        'Отзывы пациентов': 'Пациенттердин пикирлери',
        'Найдите лучшие клиники Бишкека с фильтрацией по специализации, цене и отзывам': 'Бишкектеги мыкты клиникаларды адистиги, баасы жана пикирлери боюнча табыңыз',
        'Лечение в зарубежных клиниках': 'Чет өлкөдө клиникаларда дарылоо',
        'Процесс лечения за границей': 'Чет өлкөдө дарылоо процесси',
        'Пожалуйста, заполните все обязательные поля.': 'Бардык милдеттүү талааларды толтуруңуз.',
        'Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.': 'Рахмат! Сиздин өтүнүчүңүз кабыл алынды. Биз сиз менен жакын арада байланышабыз.',
        'По вашему запросу клиник не найдено': 'Сиздин сурамыңыз боюнча клиникалар табылган жок',
        'Найдено {count} клиник': '{count} клиника табылды',
        'Направление на лечение в Турцию и Индию к лучшим специалистам': 'Түркия жана Индиядагы мыкты адистерге дарыланууга жолдомо',       
        'По вашему запросу врачей не найдено': 'Сиздин сурамыңыз боюнча дарыгерлер табылган жок',
        'Найдено {count} врачей': '{count} дарыгер табылды',
        'Пожалуйста, заполните все необходимые поля.': 'Бардык зарыл талааларды толтуруңуз.',
        'Фильтры сброшены': 'Сүзгүчтөр шайкештенди',
        'Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.': 'Сиздин өтүнүчүңүз жөнөтүлдү! Биз сиз менен жакын арада байланышабыз.',
        'Консультант свяжется с вами в ближайшее время!': 'Консультант сиз менен жакын арада байланышат!',
        'Регистрация открыта! ': 'Каттоо ачык! ',
        'Направление пациента {patientName} успешно отправлено!': 'Пациенттин жолдомосу {patientName} ийгиликтүү жөнөтүлдү!',
        'Запись к врачу {doctorName} принята! Мы свяжемся с вами в ближайшее время.': 'Дарыгерге жазылуу {doctorName} кабыл алынды! Биз сиз менен жакын арада байланышабыз.',
        '✓ ': '✓ ',
        '✗ ': '✗ '
    },
    en: {
        'Главная': 'Home',
        'Клиники': 'Clinics',
        'Бишкека': 'Bishkek',
        'Врачи': 'Doctors',
        'Лечение за границей': 'Abroad Treatment',
        'Врачам': 'For Doctors',
        'О нас': 'About Us',
        'Контакты': 'Contacts',
        'Найти клинику': 'Find a Clinic',
        'Все клиники Бишкека': 'All Bishkek Clinics',
        'Найти врача': 'Find a Doctor',
        'Наши врачи': 'Our Doctors',
        'Врачи Бишкека': 'Bishkek Doctors',
        'Онлайн запись': 'Online Appointment',
        'Запишитесь к врачу за несколько кликов, выберите удобное время': 'Book a doctor in a few clicks, choose a convenient time',
        'Направление на лечение в Турцию и Индию к лучшим специалистам': 'Referral for treatment in Turkey and India to the best specialists',
        'Помощь с визой': 'Visa Assistance',
        'Полное сопровождение: виза, перелет, жилье, транспорт': 'Full support: visa, flight, accommodation, transportation',
        'Консультации врачей': 'Doctor Consultations',
        'Онлайн консультации с врачами и медицинское сопровождение': 'Online consultations with doctors and medical support',
        'Защита данных': 'Data Protection',
        'Надежное хранилище ваших медицинских документов и рецептов': 'Secure storage for your medical documents and prescriptions',
        'Получить консультацию': 'Get Consultation',
        'Клиники Бишкека - MedBridge': 'Bishkek Clinics - MedBridge',
        'Врачи - MedBrat': 'Doctors - MedBrat',
        'О нас - MedBridge Bishkek': 'About Us - MedBridge Bishkek',
        'Лечение за границей - Турция и Индия - MedBridge': 'Abroad Treatment - Turkey and India - MedBridge',
        'MedBridge Bishkek - Медицинская платформа': 'MedBridge Bishkek - Medical Platform',
        'MedBridge - ведущая медицинская платформа Кыргызстана': 'MedBridge - the leading medical platform of Kyrgyzstan',
        'Ваш надежный мост к качественной медицине': 'Your Reliable Bridge to Quality Healthcare',
        'Трансплантация печени': 'Liver Transplantation',
        'Расширенный поиск': 'Advanced Search',
        'Все клиники': 'All Clinics',
        'Кардиохирургия': 'Cardiac Surgery',
        'Название клиники': 'Clinic Name',
        'Химиотерапия': 'Chemotherapy',
        'УЗИ': 'Ultrasound',
        ' Врачей': ' Doctors',
        'Лучшие клиники': 'Top Clinics',
        'Турции и Индии в одном месте': 'of Turkey and India in one place',
        'Высокая цена': 'High Price',
        'Средняя цена': 'Medium Price',
        'Лазерная коррекция': 'Laser Vision Correction',
        ' Бишкек, Кыргызстан': 'Bishkek, Kyrgyzstan',
        'Получить план': 'Get a Plan',
        'Заявка': 'Request',
        'Оставьте первичную информацию': 'Leave your initial information',
        'Обсудим ваш случай': 'Let\'s discuss your case',
        'Найдем лучший вариант': 'We will find the best option',
        'Виза': 'Visa',
        'Поможем с оформлением': 'We will help with the application',
        'Забронируем билеты': 'We will book the tickets',
        'О компании': 'About Us',
        'ведущая медицинская платформа, соединяющая пациентов с лучшими клиниками Кыргызстана и зарубежья.': 'the leading medical platform connecting patients with the best clinics in Kyrgyzstan and abroad.',
        'Полное сопровождение': 'Full Support',
        'Следите за нами': 'Follow Us',
        'Быстрые ссылки': 'Quick Links',
        'Связь': 'Contact',
        'Помощь с возвращением': 'Assistance with return',
        'Лучшие клиники Бишкека, Турции и Индии в одном месте': 'Top clinics of Bishkek, Turkey, and India in one place',
        'Доступ к лучшим клиникам Турции и Индии': 'Access to the best clinics in Turkey and India',
        'Выберите страну для лечения': 'Choose a country for treatment',
        'Турция': 'Turkey',
        'Индия': 'India',
        'Современные клиники Стамбула, Анкары и Измира': 'Modern clinics in Istanbul, Ankara, and Izmir',
        'Лучшие больницы Дели, Бангалора и Мумбаи': 'Top hospitals in Delhi, Bangalore, and Mumbai',
        'Лечение в зарубежных клиниках': 'Treatment in foreign clinics',
        'Лучшие клиники Бишкека, Турции и Индии в одном месте': 'Top clinics of Bishkek, Turkey, and India in one place',
        'Современные технологии и опыт': 'Modern technology and experience',
        'Специализации': 'Specializations',
        'Кардиология': 'Cardiology',
        'Наши услуги': 'Our Services',
        'Хирургия': 'Surgery',
        'Терапия': 'Therapy',
        'Стоматология': 'Dentistry',
        'Травматология': 'Traumatology',
        'Педиатрия': 'Pediatrics',
        'Неврология': 'Neurology',
        'Имплантология': 'Implantology',
        'Кардиология и кардиохирургия': 'Cardiology and cardiac surgery',
        'Онкология': 'Oncology',
        'Трансплантация органов': 'Organ transplantation',
        'Пластическая хирургия': 'Plastic surgery',
        'Офтальмология': 'Ophthalmology',
        'Ортопедия': 'Orthopedics',
        'Стоимость лечения: 30-50% дешевле, чем в Европе': 'Treatment costs 30-50% lower than in Europe',
        'Высокие стандарты и доступные цены': 'High standards and affordable prices',
        'Стоимость лечения: 50-70% дешевле, чем в Европе': 'Treatment costs 50-70% lower than in Europe',
        'Сравнение Турции и Индии': 'Comparison of Turkey and India',
        'Критерий': 'Criterion',
        'Записаться': 'Book Now',
        'Стоимость': 'Cost',
        'Запись к врачу': 'Doctor Appointment',
        'Уровень медицины': 'Level of medicine',
        'Время в пути': 'Travel time',
        'клиника': 'clinic',
        'Язык больниц': 'Hospital language',
        'Требуемая виза': 'Required visa',
        'Реабилитация': 'Rehabilitation',
        'На месте + дома': 'On-site + at home',
        'Помощь с визой и документами': 'Visa and document support',
        '7 шагов к лечению за границей': '7 steps to treatment abroad',
        'Консультация': 'Consultation',
        'Обсудим ваш случай с врачами': 'We will discuss your case with doctors',
        'Подбор клиники': 'Clinic selection',
        'Выберем лучший вариант': 'We will choose the best option',
        'Оценка стоимости': 'Cost estimation',
        'Рассчитаем полную стоимость': 'We will calculate the full cost',
        'Поможем оформить визу': 'We will help arrange the visa',
        'Перелет': 'Flight',
        'Забронируем авиабилеты': 'We will book plane tickets',
        'Лечение': 'Treatment',
        'Сопровождение на месте': 'On-site support',
        'Возвращение': 'Return',
        'Помощь с возвращением домой': 'Help with returning home',
        'Стоимость услуг': 'Service costs',
        'Консультация врача': 'Doctor consultation',
        'Бесплатно': 'Free',
        'Онлайн консультация и оценка': 'Online consultation and assessment',
        'Включено в сервис': 'Included in service',
        'Оформление визы': 'Visa processing',
        'Переводы документов': 'Document translation',
        'Нотариальные переводы': 'Notary translations',
        'Отзывы пациентов о лечении за границей': 'Patient reviews of abroad treatment',
        'Найдите лучшую клинику для вашего здоровья': 'Find the best clinic for your health',
        'Фамилия врача': 'Doctor\'s last name',
        'Высокопрофессиональные специалисты с многолетним опытом': 'Highly professional specialists with many years of experience',
        'Откройте для себя новые возможности в получении качественной медицинской помощи': 'Discover new opportunities to receive quality medical care',
        'Наша платформа объединяет пациентов, врачей и медицинские учреждения в единую экосистему, где можно быстро найти нужного врача, записаться на приём и если необходимо - получить лечение у ведущих специалистов Турции и Индии.': 'Our platform brings patients, doctors and medical facilities into one ecosystem where you can quickly find the right doctor, book an appointment and, if necessary, receive treatment from leading specialists in Turkey and India.',
        'Мы работаем только с лучшими клиниками и врачами, имеющими соответствующую лицензию и опыт': 'We work only with the best clinics and doctors who have the appropriate license and experience',
        'Все врачи имеют лицензию, опыт и подтвержденные отзывы пациентов': 'All doctors have licenses, experience and verified patient reviews',
        'Открыли портал с первыми 50 клиниками и 100 врачами, зарегистрировали первых 1000 пациентов': 'We launched a portal with the first 50 clinics and 100 doctors and registered the first 1000 patients',
        'Начали партнерство с ведущими клиниками Турции и Индии, помогли первым 100 пациентам получить лечение за границей': 'We began partnerships with leading clinics in Turkey and India and helped the first 100 patients receive treatment abroad',
        'Продолжаем развиваться, добавляя новые функции и расширяя присутствие на рынке': 'We continue to grow by adding new features and expanding our market presence',
        'Все специализации': 'All Specialties',
        'Все города': 'All Cities',
        'Сортировка': 'Sort',
        'Поиск': 'Search',
        'Все рейтинги': 'All Ratings',
        'По рейтингу': 'By Rating',
        'По цене': 'By Price',
        'По названию': 'By Name',
        'По числу отзывов': 'By Reviews',
        'Сброс': 'Reset',
        'Ваше имя': 'Your Name',
        'Ваш email': 'Your Email',
        'Номер телефона': 'Phone Number',
        'Выберите дату': 'Select Date',
        'Выберите время': 'Select Time',
        'Описание вашего состояния': 'Describe Your Condition',
        'О нас': 'About Us',
        'Отзывы пациентов': 'Patient Reviews',
        'Найдите лучшие клиники Бишкека с фильтрацией по специализации, цене и отзывам': 'Find the best Bishkek clinics filtered by specialty, price and reviews',
        'Лечение в зарубежных клиниках': 'Treatment in Foreign Clinics',
        'Процесс лечения за границей': 'Treatment Process Abroad',
        'Пожалуйста, заполните все обязательные поля.': 'Please fill out all required fields.',
        'Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.': 'Thank you! Your request has been received. We will contact you shortly.',
        'По вашему запросу клиник не найдено': 'No clinics found for your request',
        'Найдено {count} клиник': '{count} clinics found',
        'По вашему запросу врачей не найдено': 'No doctors found for your request',
        'Найдено {count} врачей': '{count} doctors found',
        'Пожалуйста, заполните все необходимые поля.': 'Please fill in all required fields.',
        'Фильтры сброшены': 'Filters reset',
        'Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.': 'Your request has been submitted! We will contact you shortly.',
        'Консультант свяжется с вами в ближайшее время!': 'A consultant will contact you shortly!',
        'Регистрация открыта! ': 'Registration is open! ',
        'Направление пациента {patientName} успешно отправлено!': 'Patient referral {patientName} was sent successfully!',
        'Запись к врачу {doctorName} принята! Мы свяжемся с вами в ближайшее время.': 'Doctor appointment for {doctorName} has been accepted! We will contact you soon.',
        '✓ ': '✓ ',
        '✗ ': '✗ '
    }
};

let currentLanguage = localStorage.getItem('language') || 'ru';
const originalTextNodes = new WeakMap();

// ================================
// ИНИЦИАЛИЗАЦИЯ
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeModals();
    initializeLanguageSelector();
    initializeScrollAnimations();
    initializeNavigation();
    initializeHoverEffects();
});

// ================================
// ЯЗЫКОВОЙ СЕЛЕКТОР
// ================================

function initializeLanguage() {
    document.getElementById('currentLang').textContent = getLanguageLabel(currentLanguage);
    updatePageLanguage();
}

function initializeLanguageSelector() {
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

function getLanguageLabel(lang) {
    return lang === 'ky' ? 'КЫ' : lang === 'en' ? 'EN' : 'РУ';
}

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    document.getElementById('currentLang').textContent = getLanguageLabel(lang);
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        updatePageLanguage();
        document.body.style.opacity = '1';
    }, 300);
}

function translatePhrase(text) {
    if (currentLanguage === 'ru') {
        return text;
    }
    return translationDictionary[currentLanguage]?.[text] || text;
}

function translateTemplate(text, params = {}) {
    let translated = translatePhrase(text);
    Object.entries(params).forEach(([key, value]) => {
        translated = translated.replace(new RegExp(`\{${key}\}`, 'g'), value);
    });
    return translated;
}

function getOriginalText(node) {
    if (!originalTextNodes.has(node)) {
        originalTextNodes.set(node, node.nodeValue);
    }
    return originalTextNodes.get(node);
}

function updatePageLanguage() {
    document.documentElement.lang = currentLanguage;
    document.getElementById('currentLang').textContent = getLanguageLabel(currentLanguage);
    translateTextNodes();
    translateAttributes();
    translateTitle();
}

function translateTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;

    while (node = walker.nextNode()) {
        if (!node.nodeValue.trim()) continue;
        if (node.parentElement && ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentElement.tagName)) continue;

        const original = getOriginalText(node);
        let translatedText = original;

        Object.keys(translationDictionary[currentLanguage] || {}).forEach((ruText) => {
            if (!ruText) return;
            translatedText = translatedText.split(ruText).join(translatePhrase(ruText));
        });

        if (translatedText !== node.nodeValue) {
            node.nodeValue = translatedText;
        }
    }
}

function translateAttributes() {
    const attrNames = ['placeholder', 'title', 'alt', 'value'];
    const elements = document.querySelectorAll('[placeholder], [title], [alt], [value]');

    elements.forEach((element) => {
        attrNames.forEach((attr) => {
            if (!element.hasAttribute(attr)) return;
            const originalKey = `data-i18n-original-${attr}`;
            if (!element.hasAttribute(originalKey)) {
                element.setAttribute(originalKey, element.getAttribute(attr));
            }
            const originalValue = element.getAttribute(originalKey);
            const newValue = translatePhrase(originalValue);
            if (newValue !== element.getAttribute(attr)) {
                element.setAttribute(attr, newValue);
            }
        });
    });
}

function translateTitle() {
    const originalTitle = document.documentElement.getAttribute('data-i18n-original-title') || document.title;
    if (!document.documentElement.hasAttribute('data-i18n-original-title')) {
        document.documentElement.setAttribute('data-i18n-original-title', document.title);
    }
    document.title = translatePhrase(originalTitle);
}

// ================================
// МОДАЛЬНЫЕ ОКНА
// ================================

function initializeModals() {
    const modal = document.getElementById('appointmentModal');
    const bookButtons = document.querySelectorAll('.btn-small');
    const closeButton = document.querySelector('.modal-close');
    
    if (!modal) return;
    
    // Открытие модального окна
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });
    
    // Закрытие модального окна
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            closeModal();
        });
    }
    
    // Закрытие при клике на фон
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Отправка формы
    const form = document.querySelector('.appointment-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitAppointment();
        });
    }
}

function openModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Анимация
    setTimeout(() => {
        modal.style.animation = 'fadeIn 0.3s ease-out';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function submitAppointment() {
    const form = document.querySelector('.appointment-form');
    const formData = new FormData(form);
    
    // Валидация
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    
    if (name && email && phone) {
        showNotification('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.', 'success');
        form.reset();
        closeModal();
    } else {
        showNotification('Пожалуйста, заполните все обязательные поля.', 'error');
    }
}

// ================================
// УВЕДОМЛЕНИЯ
// ================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Стили для уведомления
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ================================
// НАВИГАЦИЯ
// ================================

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Удаляем класс active со всех ссылок
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Добавляем класс active текущей ссылке
            this.classList.add('active');
        });
    });
    
    // Устанавливаем активную ссылку при загрузке
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ
// ================================

function initializeScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ================================
// HOVER ЭФФЕКТЫ
// ================================

function initializeHoverEffects() {
    // Ripple эффект для кнопок
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Создаем ripple элемент
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                width: 20px;
                height: 20px;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                pointer-events: none;
                animation: ripple-animation 0.6s ease-out;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Hover эффекты для карточек
    const cards = document.querySelectorAll('.clinic-card, .service-card, .country-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 60px rgba(26, 77, 62, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 40px rgba(26, 77, 62, 0.15)';
        });
    });
}

// ================================
// ФИЛЬТРАЦИЯ КЛИНИК
// ================================

function initializeClinicFilters() {
    const filterInputs = document.querySelectorAll('.filter-input, .filter-select');
    const filterButton = document.querySelector('.search-filters .btn-primary');
    
    if (filterButton) {
        filterButton.addEventListener('click', function() {
            const name = document.querySelector('.filter-input[placeholder="Название клиники"]')?.value || '';
            const specialty = document.querySelector('.filter-select:nth-of-type(1)')?.value || '';
            const city = document.querySelector('.filter-select:nth-of-type(2)')?.value || '';
            
            filterClinics({ name, specialty, city });
        });
    }
}

function filterClinics(filters) {
    const clinicCards = document.querySelectorAll('.clinic-card');
    
    clinicCards.forEach(card => {
        let show = true;
        
        if (filters.name) {
            const cardName = card.querySelector('h3').textContent.toLowerCase();
            show = show && cardName.includes(filters.name.toLowerCase());
        }
        
        if (filters.specialty && filters.specialty !== 'Все специализации') {
            const cardSpecialty = card.querySelector('.specialty').textContent.toLowerCase();
            show = show && cardSpecialty.includes(filters.specialty.toLowerCase());
        }
        
        card.style.display = show ? 'block' : 'none';
        card.style.animation = show ? 'fadeIn 0.5s ease-out' : 'none';
    });
}

// ================================
// ПОИСК
// ================================

function initializeSearch() {
    const searchInput = document.querySelector('.filter-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            searchContent(query);
        });
    }
}

function searchContent(query) {
    const items = document.querySelectorAll('.clinic-card, .doctor-card');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}

// ================================
// ПАРАЛЛАКС ЭФФЕКТ
// ================================

function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            element.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        });
    });
}

// ================================
// COUNTER АНИМАЦИЯ
// ================================

function animateCounter(element, target, duration = 1000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(counter);
        }
        element.textContent = Math.ceil(current);
    }, 16);
}

// ================================
// SCROLLTOTOP КНОПКА
// ================================

function initializeScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollToTopBtn');
    
    if (!scrollTopBtn) {
        const btn = document.createElement('button');
        btn.id = 'scrollToTopBtn';
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        btn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #1a4d3e, #2d7560);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            z-index: 999;
            font-size: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(26, 77, 62, 0.3);
        `;
        document.body.appendChild(btn);
    }
    
    window.addEventListener('scroll', () => {
        const scrollTopBtn = document.getElementById('scrollToTopBtn');
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    document.getElementById('scrollToTopBtn')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ================================
// ИНИЦИАЛИЗАЦИЯ ДОПОЛНИТЕЛЬНЫХ ФУНКЦИЙ
// ================================

// Добавляем стили для анимаций ripple
if (!document.getElementById('ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
        @keyframes ripple-animation {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Инициализируем дополнительные функции
window.addEventListener('load', () => {
    initializeClinicFilters();
    initializeSearch();
    initializeParallax();
    initializeScrollToTop();
});

// ================================
// УТИЛИТЫ
// ================================

// Функция для формирования даты
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

// Функция для валидации email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Функция для валидации номера телефона
function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

// ================================
// СОБЫТИЕ ЗАГРУЗКИ СТРАНИЦЫ
// ================================

window.addEventListener('load', () => {
    // Скрываем loader если он есть
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Анимация элементов при загрузке
    const cards = document.querySelectorAll('.clinic-card, .service-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ================================
// ОБРАБОТКА ОШИБОК
// ================================

window.addEventListener('error', (event) => {
    console.error('Ошибка:', event.error);
});

// ================================
// ЭКСПОРТ ФУНКЦИЙ (если используется модульная система)
// ================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchLanguage,
        openModal,
        closeModal,
        showNotification,
        filterClinics,
        searchContent,
        validateEmail,
        validatePhone,
        formatDate
    };
}
