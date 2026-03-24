// ================================
// БАЗА ДАННЫХ ВРАЧЕЙ
// ================================

const doctorsDatabase = [
    {
        id: 1,
        name: 'Теке Айтбеков',
        specialty: 'Кардиология',
        experience: 20,
        rating: 4.9,
        reviews: 124,
        languages: ['Русский', 'Кыргызский', 'Английский'],
        clinic: 'Клиника "Альфастом"',
        bio: 'Опытный кардиолог с 20-летним стажем. Специализируется на лечении заболеваний сердца и сосудов.',
        education: 'Медицинский институт Бишкека, кандидат медицинских наук',
        specialization: 'Ишемическая болезнь сердца, гипертония, аритмии'
    },
    {
        id: 2,
        name: 'Жанна Аманиязова',
        specialty: 'Онкология',
        experience: 18,
        rating: 4.8,
        reviews: 98,
        languages: ['Русский', 'Английский'],
        clinic: 'ООО "МедЦентр"',
        bio: 'Ведущий онколог Кыргызстана. Прошла обучение в лучших клиниках Европы.',
        education: 'МГУ им. М.В. Ломоносова, PhD в онкологии',
        specialization: 'Рак легких, рак груди, химиотерапия'
    },
    {
        id: 3,
        name: 'Азат Болотбеков',
        specialty: 'Офтальмология',
        experience: 15,
        rating: 4.9,
        reviews: 156,
        languages: ['Русский', 'Английский'],
        clinic: 'Клиника "Окулюс"',
        bio: 'Специалист по рефракционной хирургии и лазеротерапии. Обладает последней техникой.',
        education: 'Российская медицинская академия',
        specialization: 'LASIK, катаракта, глаукома'
    },
    {
        id: 4,
        name: 'Гулдар Каримова',
        specialty: 'Стоматология',
        experience: 12,
        rating: 4.7,
        reviews: 203,
        languages: ['Русский', 'Кыргызский'],
        clinic: 'Дентальный центр "Улыбка"',
        bio: 'Опытный стоматолог-имплантолог. Использует только современные материалы.',
        education: 'Медицинский университет Бишкека',
        specialization: 'Имплантология, протезирование, эндодонтия'
    },
    {
        id: 5,
        name: 'Канат Исаченко',
        specialty: 'Ортопедия',
        experience: 22,
        rating: 4.9,
        reviews: 167,
        languages: ['Русский', 'Английский', 'Немецкий'],
        clinic: 'Ортопедический центр',
        bio: 'Один из лучших ортопедов в регионе. Имеет опыт спортивной медицины.',
        education: 'Санкт-Петербургский государственный медицинский университет',
        specialization: 'Артроскопия, эндопротезирование, травматология'
    },
    {
        id: 6,
        name: 'Мария Семенова',
        specialty: 'Педиатрия',
        experience: 14,
        rating: 4.8,
        reviews: 89,
        languages: ['Русский', 'Кыргызский', 'Английский'],
        clinic: 'Детская клиника "Радуга"',
        bio: 'Детский врач с большим опытом в диагностике и лечении детских болезней.',
        education: 'Медицинский институт Бишкека',
        specialization: 'Педиатрия, неврология детей, вакцинология'
    },
    {
        id: 7,
        name: 'Сергей Петров',
        specialty: 'Кардиология',
        experience: 16,
        rating: 4.6,
        reviews: 142,
        languages: ['Русский', 'Английский'],
        clinic: 'Клиника "Кардиопрофилактика"',
        bio: 'Кардиолог с опытом в кардиохирургии и интервенционной кардиологии.',
        education: 'Московская медицинская академия',
        specialization: 'Коронарография, стентирование, антиаритмическая терапия'
    },
    {
        id: 8,
        name: 'Айна Корбекова',
        specialty: 'Неврология',
        experience: 13,
        rating: 4.7,
        reviews: 76,
        languages: ['Русский', 'Кыргызский'],
        clinic: 'Неврологический центр',
        bio: 'Невролог с специализацией в лечении инсульта и эпилепсии.',
        education: 'Казахский национальный медицинский университет',
        specialization: 'Неврология, реабилитология, рефлексотерапия'
    },
    {
        id: 9,
        name: 'Нурланбек Абдиев',
        specialty: 'Гастроэнтерология',
        experience: 17,
        rating: 4.8,
        reviews: 118,
        languages: ['Русский', 'Английский'],
        clinic: 'Клиника "Гастро"',
        bio: 'Гастроэнтеролог высокой квалификации. Владеет эндоскопическими методами.',
        education: 'Институт гастроэнтерологии, Москва',
        specialization: 'Гастрит, язва, колит, эндоскопия'
    },
    {
        id: 10,
        name: 'Анна Виноградова',
        specialty: 'Дерматология',
        experience: 11,
        rating: 4.9,
        reviews: 195,
        languages: ['Русский', 'Английский', 'Французский'],
        clinic: 'Клиника "Дерма плюс"',
        bio: 'Дерматолог-косметолог с опытом лазеротерапии и пластической дерматологии.',
        education: 'Одесский национальный медицинский университет',
        specialization: 'Дерматология, косметология, лазеротерапия'
    }
];

let selectedDoctor = null;

// ================================
// ИНИЦИАЛИЗАЦИЯ
// ================================

document.addEventListener('DOMContentLoaded', function() {
    loadAllDoctors();
    initializeDoctorSearch();
    initializeModals();
    initializeLanguage();
});

// ================================
// ЗАГРУЗКА И ОТОБРАЖЕНИЕ ВРАЧЕЙ
// ================================

function loadAllDoctors() {
    const container = document.getElementById('doctors-list');
    container.innerHTML = '';
    
    doctorsDatabase.forEach((doctor, index) => {
        const card = createDoctorCard(doctor);
        container.appendChild(card);
        
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 50);
    });

    if (typeof updatePageLanguage === 'function') {
        updatePageLanguage();
    }
}

function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.className = 'doctor-card';
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.5s ease-out';
    
    const avgLang = doctor.languages.slice(0, 2).join(', ');
    
    card.innerHTML = `
        <div class="doctor-image">
            <i class="fas fa-user-doctor"></i>
            <span class="doctor-spec-badge">${doctor.specialty}</span>
        </div>
        <div class="doctor-info">
            <div class="doctor-name">${doctor.name}</div>
            <div class="doctor-specialty">${doctor.specialty}</div>
            <div class="doctor-experience">
                <i class="fas fa-briefcase"></i> Опыт: ${doctor.experience} лет
            </div>
            <div class="doctor-rating">
                <span>${'⭐'.repeat(Math.floor(doctor.rating))}</span>
                <span>${doctor.rating}</span>
                <span>(${doctor.reviews} отзывов)</span>
            </div>
            <div class="doctor-languages">
                ${doctor.languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
            </div>
            <div class="doctor-actions">
                <button class="btn btn-small" onclick="viewDoctorDetails(${doctor.id})">Подробно</button>
                <button class="btn btn-small btn-primary" data-i18n="book" onclick="bookDoctor(${doctor.id})">Записаться</button>
            </div>
        </div>
    `;
    
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-15px)';
        this.style.boxShadow = '0 15px 60px rgba(26, 77, 62, 0.25)';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 40px rgba(26, 77, 62, 0.15)';
    });
    
    return card;
}

// ================================
// ПРОСМОТР ДЕТАЛЕЙ ВРАЧА
// ================================

function viewDoctorDetails(doctorId) {
    selectedDoctor = doctorsDatabase.find(d => d.id === doctorId);
    
    if (!selectedDoctor) return;
    
    const modal = document.getElementById('doctorDetailsModal');
    const content = document.getElementById('doctorDetailsContent');
    
    content.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 4rem; color: #1a4d3e; margin-bottom: 1rem;">
                <i class="fas fa-user-doctor"></i>
            </div>
            <h2>${selectedDoctor.name}</h2>
        </div>
        
        <div style="background: var(--light-bg); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 1rem; color: var(--primary-color);">Информация о враче</h4>
            <p><strong>Специальность:</strong> ${selectedDoctor.specialty}</p>
            <p><strong>Опыт:</strong> ${selectedDoctor.experience} лет</p>
            <p><strong>Рейтинг:</strong> ${selectedDoctor.rating} ⭐ (${selectedDoctor.reviews} отзывов)</p>
            <p><strong>Клиника:</strong> ${selectedDoctor.clinic}</p>
        </div>
        
        <div style="background: var(--light-bg); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 1rem; color: var(--primary-color);">Биография</h4>
            <p>${selectedDoctor.bio}</p>
        </div>
        
        <div style="background: var(--light-bg); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 1rem; color: var(--primary-color);">Образование</h4>
            <p>${selectedDoctor.education}</p>
        </div>
        
        <div style="background: var(--light-bg); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 1rem; color: var(--primary-color);">Специализация</h4>
            <p>${selectedDoctor.specialization}</p>
        </div>
        
        <div>
            <h4 style="margin-bottom: 1rem; color: var(--primary-color);">Языки общения</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${selectedDoctor.languages.map(lang => `
                    <span style="background: var(--primary-color); color: white; padding: 6px 12px; border-radius: 12px; font-size: 0.9rem;">
                        ${lang}
                    </span>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeDoctorDetailsModal() {
    const modal = document.getElementById('doctorDetailsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ================================
// ПОИСК И ФИЛЬТРАЦИЯ
// ================================

function performDoctorSearch() {
    const nameFilter = document.querySelector('.search-name').value.toLowerCase();
    const specialtyFilter = document.querySelector('.search-specialty').value.toLowerCase();
    const ratingFilter = document.querySelector('.search-rating').value;
    
    let filtered = doctorsDatabase.filter(doctor => {
        const nameMatch = doctor.name.toLowerCase().includes(nameFilter);
        const specialtyMatch = !specialtyFilter || doctor.specialty.toLowerCase().includes(specialtyFilter);
        const ratingMatch = !ratingFilter || doctor.rating >= parseFloat(ratingFilter);
        
        return nameMatch && specialtyMatch && ratingMatch;
    });
    
    renderDoctorsList(filtered);
    
    if (filtered.length === 0) {
        showNotification('По вашему запросу врачей не найдено', 'info');
    } else {
        showNotification(`Найдено ${filtered.length} врачей`, 'success');
    }
}

function resetDoctorFilters() {
    document.querySelector('.search-name').value = '';
    document.querySelector('.search-specialty').value = '';
    document.querySelector('.search-rating').value = '';
    
    loadAllDoctors();
    showNotification('Фильтры сброшены', 'info');
}

function renderDoctorsList(doctors) {
    const container = document.getElementById('doctors-list');
    container.innerHTML = '';
    
    doctors.forEach((doctor, index) => {
        const card = createDoctorCard(doctor);
        container.appendChild(card);
        
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 50);
    });
}

function initializeDoctorSearch() {
    const searchInputs = document.querySelectorAll('.search-name, .search-specialty, .search-rating');
    
    searchInputs.forEach(input => {
        input.addEventListener('change', performDoctorSearch);
    });
    
    document.querySelector('.search-name').addEventListener('input', function() {
        if (this.value.length > 0) {
            setTimeout(performDoctorSearch, 300);
        } else {
            loadAllDoctors();
        }
    });
}

// ================================
// МОДАЛЬНЫЕ ОКНА
// ================================

function initializeModals() {
    // Закрытие модального окна деталей врача
    document.querySelector('.doctor-details-close').addEventListener('click', closeDoctorDetailsModal);
    
    document.getElementById('doctorDetailsModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeDoctorDetailsModal();
        }
    });
    
    // Закрытие модального окна записи
    const appointmentModal = document.getElementById('appointmentModal');
    const closeButton = document.querySelector('.modal-close');
    
    if (closeButton) {
        closeButton.addEventListener('click', closeAppointmentModal);
    }
    
    if (appointmentModal) {
        appointmentModal.addEventListener('click', function(e) {
            if (e.target === this) {
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

function bookDoctor(doctorId) {
    if (doctorId) {
        selectedDoctor = doctorsDatabase.find(d => d.id === doctorId);
    }
    
    if (!selectedDoctor) return;
    
    closeDoctorDetailsModal();
    openAppointmentModal();
}

function openAppointmentModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
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
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    
    if (name && email && phone) {
        const message = selectedDoctor ? 
            `Запись к врачу ${selectedDoctor.name} принята! Мы свяжемся с вами в ближайшее время.` :
            'Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.';
        
        showNotification('✓ ' + message, 'success');
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
            switchLanguage(lang);
        });
    });
}

// ================================
// СТАТИСТИКА
// ================================

console.log('Загружено врачей:', doctorsDatabase.length);
console.log('Средний рейтинг врачей:', (doctorsDatabase.reduce((a, d) => a + d.rating, 0) / doctorsDatabase.length).toFixed(1));
