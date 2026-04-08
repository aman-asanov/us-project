// ================================
// ИНИЦИАЛИЗАЦИЯ И ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ================================

const translations = {
    ru: {
        findClinic: 'Найти клинику',
        getConsultation: 'Получить консультацию',
        appointment: 'Запись к врачу',
        clinicName: 'Название клиники',
        allSpecialties: 'Все специализации',
        allCities: 'Все города',
        sort: 'Сортировка',
        search: 'Поиск',
        book: 'Записаться',
        ourServices: 'Наши услуги',
        abroadTreatment: 'Лечение в зарубежных клиниках',
        treatmentProcess: 'Процесс лечения за границей',
        reviews: 'Отзывы пациентов'
    },
    ky: {
        findClinic: 'Клиника табыңыз',
        getConsultation: 'Консультация алыңыз',
        appointment: 'Врачка жазылыңыз',
        clinicName: 'Кликанын аты',
        allSpecialties: 'Бардык адистиктери',
        allCities: 'Бардык шаарлар',
        sort: 'Сорттоо',
        search: 'Издөө',
        book: 'Жазылыңыз',
        ourServices: 'Биздин кызматтар',
        abroadTreatment: 'Чет өлкөдө дарылоо',
        treatmentProcess: 'Чет өлкөдө дарылоо процесси',
        reviews: 'Пациенттердин пикирлери'
    },
    en: {
        findClinic: 'Find Clinic',
        getConsultation: 'Get Consultation',
        appointment: 'Book Appointment',
        clinicName: 'Clinic Name',
        allSpecialties: 'All Specialties',
        allCities: 'All Cities',
        sort: 'Sort',
        search: 'Search',
        book: 'Book',
        ourServices: 'Our Services',
        abroadTreatment: 'Treatment Abroad',
        treatmentProcess: 'Treatment Process',
        reviews: 'Patient Reviews'
    }
};

let currentLanguage = localStorage.getItem('language') || 'ru';

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
    document.getElementById('currentLang').textContent = currentLanguage.toUpperCase();
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

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Обновляем текст кнопки
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    
    // Анимация переключения
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        updatePageLanguage();
        document.body.style.opacity = '1';
    }, 300);
}

function updatePageLanguage() {
    // Здесь можно обновить все тексты на странице
    console.log('Язык изменен на:', currentLanguage);
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
