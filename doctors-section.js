// ================================
// БАЗА ДАННЫХ ВРАЧЕЙ ДЛЯ РЕГИСТРАЦИИ
// ================================

let registeredDoctors = [];
let doctorReferrals = [];

// ================================
// ИНИЦИАЛИЗАЦИЯ
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    loadStoredData();
});

// ================================
// РЕГИСТРАЦИЯ ВРАЧА
// ================================

function registerDoctor() {
    const message = `
        Спасибо! Вы будете перенаправлены на форму регистрации.
        
        Для полной регистрации потребуются:
        - Копия лицензии врача
        - Диплом об образовании
        - Подтверждение опыта
        - Реквизиты для выплат
        
        Обработка заявки занимает 2-3 рабочих дня.
    `;
    showNotification('Регистрация открыта! ' + message, 'success');
}

// ================================
// ОТПРАВКА НАПРАВЛЕНИЯ ПАЦИЕНТА
// ================================

function submitReferral(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Получаем данные из формы
    const doctorName = form.querySelector('input[placeholder="ФИО врача"]').value;
    const specialty = form.querySelector('select').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const patientName = form.querySelector('input[placeholder="ФИО пациента"]').value;
    const age = form.querySelector('input[placeholder="Возраст"]').value;
    const diagnosis = form.querySelectorAll('input[type="text"]')[2].value;
    const country = form.querySelectorAll('select')[1].value;
    
    // Создаем объект направления
    const referral = {
        id: Date.now(),
        dateCreated: new Date().toLocaleDateString('ru-RU'),
        doctor: {
            name: doctorName,
            specialty: specialty,
            email: email,
            phone: phone
        },
        patient: {
            name: patientName,
            age: age
        },
        diagnosis: diagnosis,
        preferredCountry: country,
        status: 'Новое'
    };
    
    // Сохраняем направление
    doctorReferrals.push(referral);
    saveData();
    
    // Показываем подтверждение
    showNotification(`✓ Направление пациента ${patientName} успешно отправлено!`, 'success');
    
    // Очищаем форму
    form.reset();
    
    // Логируем
    console.log('Новое направление:', referral);
}

// ================================
// ХРАНЕНИЕ ДАННЫХ
// ================================

function saveData() {
    localStorage.setItem('doctorReferrals', JSON.stringify(doctorReferrals));
    localStorage.setItem('registeredDoctors', JSON.stringify(registeredDoctors));
}

function loadStoredData() {
    const storedReferrals = localStorage.getItem('doctorReferrals');
    const storedDoctors = localStorage.getItem('registeredDoctors');
    
    if (storedReferrals) {
        doctorReferrals = JSON.parse(storedReferrals);
    }
    
    if (storedDoctors) {
        registeredDoctors = JSON.parse(storedDoctors);
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
        white-space: pre-wrap;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
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
// УТИЛИТЫ
// ================================

// Получить все направления врача
function getDoctorReferrals(doctorEmail) {
    return doctorReferrals.filter(ref => ref.doctor.email === doctorEmail);
}

// Получить статистику
function getReferralStatistics() {
    return {
        totalReferrals: doctorReferrals.length,
        newReferrals: doctorReferrals.filter(ref => ref.status === 'Новое').length,
        processedReferrals: doctorReferrals.filter(ref => ref.status === 'В процессе').length,
        completedReferrals: doctorReferrals.filter(ref => ref.status === 'Завершено').length
    };
}

// Обновить статус направления
function updateReferralStatus(referralId, newStatus) {
    const referral = doctorReferrals.find(ref => ref.id === referralId);
    if (referral) {
        referral.status = newStatus;
        saveData();
        return true;
    }
    return false;
}

// ================================
// ЭКСПОРТ СТАТИСТИКИ
// ================================

function exportReferralData() {
    const stats = getReferralStatistics();
    const csvContent = [
        ['Направление', 'Врач', 'Пациент', 'Диагноз', 'Страна', 'Дата', 'Статус'],
        ...doctorReferrals.map(ref => [
            ref.id,
            ref.doctor.name,
            ref.patient.name,
            ref.diagnosis,
            ref.preferredCountry,
            ref.dateCreated,
            ref.status
        ])
    ];
    
    console.log('Статистика направлений:', stats);
    console.log('Экспортированные данные:', csvContent);
    
    return csvContent;
}

// ================================
// ЛОГИРОВАНИЕ
// ================================

console.log('Модуль врачей загружен');
console.log('Текущие направления:', doctorReferrals);
