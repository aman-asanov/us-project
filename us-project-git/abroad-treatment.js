// ================================
// ДАННЫЕ КЛИНИК ЗА ГРАНИЦЕЙ
// ================================

const abroadClinicsData = {
    turkey: {
        country: 'Турция',
        flag: '🇹🇷',
        clinics: [
            {
                name: 'American Hospital Istanbul',
                city: 'Стамбул',
                specialization: ['Кардиология', 'Онкология', 'Трансплантация'],
                rating: 4.9,
                costRange: '$15,000 - $50,000',
                procedures: ['Кардиохирургия', 'Трансплантация печени', 'Панкреас', 'Лапароскопические операции']
            },
            {
                name: 'Acibadem Healthcare Group',
                city: 'Стамбул',
                specialization: ['Кардиология', 'Онкология', 'Ортопедия'],
                rating: 4.8,
                costRange: '$12,000 - $45,000',
                procedures: ['Кардиохирургия', 'Онкологические операции', 'Эндопротезирование']
            },
            {
                name: 'Hisar Intercontinental Hospital',
                city: 'Анкара',
                specialization: ['Пластическая хирургия', 'Офтальмология', 'Кардиология'],
                rating: 4.7,
                costRange: '$10,000 - $35,000',
                procedures: ['Пластические операции', 'LASIK', 'Кардиохирургия']
            }
        ],
        visaInfo: 'E-виза (за 15 минут онлайн)',
        vaccineReqs: 'COVID-19 приветствуется',
        avgStay: '7-14 дней'
    },
    india: {
        country: 'Индия',
        flag: '🇮🇳',
        clinics: [
            {
                name: 'Apollo Hospitals Delhi',
                city: 'Дели',
                specialization: ['Трансплантация', 'Кардиохирургия', 'Онкология'],
                rating: 4.9,
                costRange: '$8,000 - $30,000',
                procedures: ['Трансплантация печени', 'Кардиохирургия', 'Ортопедия']
            },
            {
                name: 'Fortis Healthcare',
                city: 'Бангалор',
                specialization: ['Кардиология', 'Онкология', 'Нейрохирургия'],
                rating: 4.8,
                costRange: '$7,000 - $28,000',
                procedures: ['Кардиохирургия', 'Онкологические операции', 'Нейрохирургия']
            },
            {
                name: 'Sri Ramakrishna Hospital',
                city: 'Коимбатур',
                specialization: ['Ортопедия', 'Офтальмология', 'Кардиология'],
                rating: 4.7,
                costRange: '$5,000 - $20,000',
                procedures: ['Эндопротезирование', 'LASIK', 'Кардиохирургия']
            }
        ],
        visaInfo: 'E-виза (за 2-5 дней онлайн)',
        vaccineReqs: 'COVID-19 стандарт',
        avgStay: '10-21 день'
    }
};

// ================================
// ИНИЦИАЛИЗАЦИЯ
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initializePlanModals();
    initializeLanguage();
});

// ================================
// ПРОСМОТР ПЛАНА ЛЕЧЕНИЯ
// ================================

function viewTreatmentPlan(country) {
    const data = abroadClinicsData[country];
    const modal = document.getElementById('planModal');
    const content = document.getElementById('planContent');
    
    let clinicsHTML = data.clinics.map((clinic, index) => `
        <div style="margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid #f0f0f0;">
            <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">${index + 1}. ${clinic.name}</h4>
            <p><strong>Город:</strong> ${clinic.city}</p>
            <p><strong>Рейтинг:</strong> ${clinic.rating} ⭐</p>
            <p><strong>Стоимость:</strong> ${clinic.costRange}</p>
            <p><strong>Специализация:</strong></p>
            <ul style="margin-left: 1.5rem; margin-bottom: 0.5rem;">
                ${clinic.specialization.map(s => `<li>${s}</li>`).join('')}
            </ul>
            <p><strong>Доступные процедуры:</strong></p>
            <ul style="margin-left: 1.5rem;">
                ${clinic.procedures.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>
    `).join('');
    
    content.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">${data.flag}</div>
            <h2>${data.country}</h2>
            <p style="color: #666; font-size: 1.1rem;">План лечения и подбор клиники</p>
        </div>
        
        <div style="background: var(--light-bg); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Информация о поездке</h4>
            <p><strong>Виза:</strong> ${data.visaInfo}</p>
            <p><strong>Требования к вакцинам:</strong> ${data.vaccineReqs}</p>
            <p><strong>Средний период пребывания:</strong> ${data.avgStay}</p>
        </div>
        
        <div>
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Рекомендуемые клиники</h3>
            ${clinicsHTML}
        </div>
        
        <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;" onclick="contactConsultant()">
            Связаться с консультантом
        </button>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePlanModal() {
    const modal = document.getElementById('planModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function initializePlanModals() {
    const modal = document.getElementById('planModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closePlanModal();
        }
    });
}

// ================================
// СВЯЗЬ С КОНСУЛЬТАНТОМ
// ================================

function contactConsultant() {
    showNotification('Консультант свяжется с вами в ближайшее время!', 'success');
    closePlanModal();
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
// УТИЛИТЫ
// ================================

// Функция для получения информации о клинике
function getClinicByCountry(country, clinicIndex) {
    return abroadClinicsData[country]?.clinics[clinicIndex];
}

// Функция для расчета стоимости
function estimateTreatmentCost(country, treatmentType) {
    // Это может быть расширено на основе типа лечения
    const countryData = abroadClinicsData[country];
    if (countryData && countryData.clinics.length > 0) {
        const firstCost = countryData.clinics[0].costRange;
        return firstCost;
    }
    return 'N/A';
}

console.log('Загружены данные клиник за границей');
console.log('Доступные страны:', Object.keys(abroadClinicsData));
