// ================================
// БАЗА ДАННЫХ КЛИНИК
// ================================

const clinicsDatabase = [
    {
        id: 1,
        name: 'Клиника Vedanta',
        specialty: ['Кардиология', 'Хирургия', 'Травматология', 'Гинекология'],
        address: 'ул. Фучика, 34, Бишкек',
        rating: 4.9,
        reviews: 127,
        image: 'vedanta.png',
        phone: '+996 701 103 103',
        hours: 'Круглосуточно',
        price: 'Высокая',
        doctors: 25,
        description: 'Современный медицинский центр со стационаром на 80 коек, реанимацией и кардиохирургией. Выполняют операции на сердце и стентирование [citation:1]'
    },
    {
        id: 2,
        name: 'Университетская клиника Amanat Hospital',
        specialty: ['Педиатрия', 'Хирургия', 'Травматология', 'Кардиология'],
        address: 'ул. Турусбекова, 88/1, Бишкек',
        rating: 4.8,
        reviews: 94,
        image: 'amanat.png',
        phone: '+996 556 10 30 00',
        hours: 'Круглосуточно',
        price: 'Высокая',
        doctors: 30,
        description: 'Многопрофильный медицинский центр с детской поликлиникой 24/7, стационаром и травматологией [citation:1]'
    },
    {
        id: 3,
        name: 'Сеть клиник Profi Med',
        specialty: ['Терапия', 'Педиатрия', 'Стоматология', 'Неврология'],
        address: 'ул. Ленина, 188, Бишкек (мкр. Аламедин-1)',
        rating: 4.7,
        reviews: 203,
        image: 'сюда',
        phone: '+996 550 50 88 99',
        hours: 'Круглосуточно',
        price: 'Средняя',
        doctors: 45,
        description: 'Работает с 2014 года, 8 филиалов по всему Кыргызстану. Возврат денег, если нет результата [citation:1]'
    },
    {
        id: 4,
        name: 'Клиника "Авиценна"',
        specialty: ['Кардиология', 'Гастроэнтерология', 'Неврология', 'Хирургия'],
        address: 'ул. Бакаева, 106, Бишкек',
        rating: 4.8,
        reviews: 156,
        image: 'сюда',
        phone: '+996 505 90 90 09',
        hours: 'Круглосуточно',
        price: 'Средняя',
        doctors: 35,
        description: 'Сеть многопрофильных клиник с более чем 100 специалистами, собственной лабораторией и стационаром [citation:1]'
    },
    {
        id: 5,
        name: 'NeoClinic',
        specialty: ['Гастроэнтерология', 'Урология', 'Гинекология', 'Эндоскопия'],
        address: 'ул. Медерова, 67, Бишкек',
        rating: 4.9,
        reviews: 89,
        image: 'сюда',
        phone: '+996 551 00 01 03',
        hours: '09:00 - 18:00',
        price: 'Высокая',
        doctors: 18,
        description: 'Лазерно-эндоскопический центр. Операции без разрезов, комплексные Check-Up программы [citation:1]'
    },
    {
        id: 6,
        name: 'Клиника MedcenterKG',
        specialty: ['Хирургия', 'Гинекология', 'Ортопедия', 'Урология'],
        address: 'просп. Жибек-Жолу, 388, Бишкек',
        rating: 4.7,
        reviews: 112,
        image: 'сюда',
        phone: '+996 772 55 50 76',
        hours: '08:00 - 17:00',
        price: 'Средняя',
        doctors: 22,
        description: 'Хирургический филиал с УЗИ 3D/4D, эндоскопией и стационаром. Профессора и кандидаты наук [citation:8]'
    },
    {
        id: 7,
        name: 'Офтальмологический лазерный центр',
        specialty: ['Офтальмология', 'Лазерная коррекция', 'Катаракта'],
        address: 'пр. Ч. Айтматова, 299/1, Бишкек',
        rating: 4.9,
        reviews: 78,
        image: 'сюда',
        phone: '+996 704 00 91 93',
        hours: '09:00 - 18:00',
        price: 'Высокая',
        doctors: 12,
        description: 'Лазерная коррекция зрения, хирургия катаракты, лечение сетчатки. Современное оборудование [citation:6]'
    },
    {
        id: 8,
        name: 'Клиника Медведева',
        specialty: ['Офтальмология', 'Детская офтальмология', 'Хирургия глаза'],
        address: 'ул. Чокморова, 240, Бишкек',
        rating: 4.8,
        reviews: 64,
        image: 'сюда',
        phone: '+996 555 70 76 00',
        hours: '09:00 - 16:00',
        price: 'Средняя',
        doctors: 8,
        description: 'Ведущая офтальмологическая клиника. Хирургия катаракты, глаукомы, лазерные операции [citation:6]'
    },
    {
        id: 9,
        name: 'МЕДАС Медицинский центр',
        specialty: ['Терапия', 'Кардиология', 'Диагностика', 'Общая практика'],
        address: 'ул. Кулиева, 20, Бишкек',
        rating: 4.7,
        reviews: 51,
        image: 'сюда',
        phone: '+996 (312) - уточнить',
        hours: '08:00 - 20:00',
        price: 'Средняя',
        doctors: 15,
        description: 'Лицензированный медицинский центр. Входит в реестр ведущих поставщиков медицинских услуг [citation:9]'
    },
    {
        id: 10,
        name: 'Медицинский центр "Семья"',
        specialty: ['Семейная медицина', 'Педиатрия', 'Гинекология', 'Терапия'],
        address: 'ул. Ибраимова, 42, Бишкек',
        rating: 4.6,
        reviews: 43,
        image: 'сюда',
        phone: '+996 770 0xx',
        hours: '08:00 - 20:00',
        price: 'Средняя',
        doctors: 12,
        description: 'Медицинский центр для всей семьи. Прием взрослых и детей [citation:10]'
    }
];
// ================================
// ИНИЦИАЛИЗАЦИЯ
// ================================

document.addEventListener('DOMContentLoaded', function() {
    loadAllClinics();
    initializeSearch();
    initializeModals();
    initializeLanguage();
});

// ================================
// ЗАГРУЗКА И ОТОБРАЖЕНИЕ КЛИНИК
// ================================

function loadAllClinics() {
    const container = document.getElementById('all-clinics-list');
    container.innerHTML = '';
    
    clinicsDatabase.forEach((clinic, index) => {
        const card = createClinicCard(clinic);
        container.appendChild(card);
        
        // Добавляем задержку анимации для каждой карточки
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 50);
    });
}

function createClinicCard(clinic) {
    const card = document.createElement('div');
    card.className = 'clinic-card glass';
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.5s ease-out';
    
    const specialtyText = clinic.specialty.join(', ');
    
    card.innerHTML = `
        <div class="clinic-image">
            <img src="${clinic.image}" alt="${clinic.name}">
            <span class="rating-badge">${clinic.rating.toFixed(1)} ⭐</span>
        </div>
        <div class="clinic-info">
            <h3>${clinic.name}</h3>
            <p class="specialty">${specialtyText}</p>
            <p class="location"><i class="fas fa-map-marker-alt"></i> ${clinic.address}</p>
            <p class="rating-text">${clinic.reviews} отзывов</p>
            
            <div class="clinic-details" style="font-size: 0.9rem; color: #666; margin: 0.8rem 0;">
                <p><i class="fas fa-phone"></i> ${clinic.phone}</p>
                <p><i class="fas fa-clock"></i> ${clinic.hours}</p>
                <p><i class="fas fa-user-md"></i> Врачей: ${clinic.doctors}</p>
                <p><i class="fas fa-tag"></i> ${clinic.price} цена</p>
            </div>
            
            <button class="btn btn-small" onclick="openAppointmentModal('${clinic.name}')">Записаться</button>
        </div>
    `;
    
    // Добавляем hover эффект
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 60px rgba(26, 77, 62, 0.25)';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 40px rgba(26, 77, 62, 0.15)';
    });
    
    return card;
}

// ================================
// ПОИСК И ФИЛЬТРАЦИЯ
// ================================

function performSearch() {
    const nameFilter = document.querySelector('.search-name').value.toLowerCase();
    const specialtyFilter = document.querySelector('.search-specialty').value.toLowerCase();
    const ratingFilter = document.querySelector('.search-rating').value;
    const sortType = document.querySelector('.search-sort').value;
    
    let filtered = clinicsDatabase.filter(clinic => {
        const nameMatch = clinic.name.toLowerCase().includes(nameFilter);
        const specialtyMatch = !specialtyFilter || clinic.specialty.some(s => s.toLowerCase().includes(specialtyFilter));
        const ratingMatch = !ratingFilter || clinic.rating >= parseFloat(ratingFilter);
        
        return nameMatch && specialtyMatch && ratingMatch;
    });
    
    // Сортировка
    filtered.sort((a, b) => {
        switch(sortType) {
            case 'rating':
                return b.rating - a.rating;
            case 'price':
                const priceMap = { 'Низкая': 1, 'Средняя': 2, 'Высокая': 3 };
                return priceMap[a.price] - priceMap[b.price];
            case 'alphabetical':
                return a.name.localeCompare(b.name);
            case 'reviews':
                return b.reviews - a.reviews;
            default:
                return 0;
        }
    });
    
    renderClinicsList(filtered);
    
    if (filtered.length === 0) {
        showNotification('По вашему запросу клиник не найдено', 'info');
    } else {
        showNotification(`Найдено ${filtered.length} клиник`, 'success');
    }
}

function resetFilters() {
    document.querySelector('.search-name').value = '';
    document.querySelector('.search-specialty').value = '';
    document.querySelector('.search-rating').value = '';
    document.querySelector('.search-sort').value = 'rating';
    
    loadAllClinics();
    showNotification('Фильтры сброшены', 'info');
}

function renderClinicsList(clinics) {
    const container = document.getElementById('all-clinics-list');
    container.innerHTML = '';
    
    clinics.forEach((clinic, index) => {
        const card = createClinicCard(clinic);
        container.appendChild(card);
        
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 50);
    });
}

// ================================
// ИНИЦИАЛИЗАЦИЯ ПОИСКА
// ================================

function initializeSearch() {
    const searchInputs = document.querySelectorAll('.search-name, .search-specialty, .search-rating, .search-sort');
    
    searchInputs.forEach(input => {
        input.addEventListener('change', performSearch);
    });
    
    // Живой поиск при вводе в поле названия
    document.querySelector('.search-name').addEventListener('input', function() {
        if (this.value.length > 0) {
            setTimeout(performSearch, 300);
        } else {
            loadAllClinics();
        }
    });
}

// ================================
// МОДАЛЬНЫЕ ОКНА
// ================================

function initializeModals() {
    const modal = document.getElementById('appointmentModal');
    const closeButton = document.querySelector('.modal-close');
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            closeAppointmentModal();
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeAppointmentModal();
            }
        });
    }
    
    const form = document.querySelector('.appointment-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitAppointmentForm();
        });
    }
}

function openAppointmentModal(clinicName) {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Добавляем название клиники в форму (если есть скрытое поле)
    let clinicField = document.querySelector('input[name="clinic"]');
    if (!clinicField) {
        clinicField = document.createElement('input');
        clinicField.type = 'hidden';
        clinicField.name = 'clinic';
        clinicField.value = clinicName;
        document.querySelector('.appointment-form').appendChild(clinicField);
    } else {
        clinicField.value = clinicName;
    }
    
    // Анимация
    setTimeout(() => {
        modal.style.animation = 'fadeIn 0.3s ease-out';
    }, 10);
}

function closeAppointmentModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function submitAppointmentForm() {
    const form = document.querySelector('.appointment-form');
    const formData = new FormData(form);
    
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    
    if (name && email && phone) {
        showNotification('✓ Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
        form.reset();
        closeAppointmentModal();
    } else {
        showNotification('✗ Пожалуйста, заполните все необходимые поля.', 'error');
    }
}

// ================================
// УВЕДОМЛЕНИЯ
// ================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    
    const colors = {
        'success': '#4CAF50',
        'error': '#f44336',
        'info': '#2196F3'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${colors[type] || colors['info']};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ================================
// ИНИЦИАЛИЗАЦИЯ ЯЗЫКА
// ================================

function initializeLanguage() {
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            document.getElementById('currentLang').textContent = lang.toUpperCase();
        });
    });
}

// ================================
// ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
// ================================

// Функция для получения информации о клинике
function getClinicInfo(clinicId) {
    return clinicsDatabase.find(clinic => clinic.id === clinicId);
}

// Функция для получения средней оценки
function getAverageRating() {
    const sum = clinicsDatabase.reduce((acc, clinic) => acc + clinic.rating, 0);
    return (sum / clinicsDatabase.length).toFixed(1);
}

// Функция для получения всех специальностей (без дублей)
function getAllSpecialties() {
    const specialties = new Set();
    clinicsDatabase.forEach(clinic => {
        clinic.specialty.forEach(s => specialties.add(s));
    });
    return Array.from(specialties).sort();
}

// Логирование
console.log('Загружено клиник:', clinicsDatabase.length);
console.log('Средний рейтинг:', getAverageRating());
console.log('Все специальности:', getAllSpecialties());
