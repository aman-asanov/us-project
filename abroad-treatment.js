// ================================
// ДАННЫЕ КЛИНИК ЗА ГРАНИЦЕЙ
// ================================

const abroadClinicsData = {

turkey: {
country: "Турция",
flag: "🇹🇷",

clinics: [

{
name: "Memorial Sisli Hospital",
city: "Стамбул",
rating: 4.9,
costRange: "$12000 - $40000",

specialization:[
"Кардиология",
"Онкология",
"Нейрохирургия",
"Трансплантация органов",
"Ортопедия"
],

procedures:[
"Кардиохирургия",
"Трансплантация печени",
"Операции на позвоночнике",
"Эндопротезирование"
],

doctors:[
{
name:"Prof. Dr. Abdullah Ozkaya",
field:"Офтальмология",
experience:"20 лет"
},
{
name:"Prof. Dr. Adnan Isgor",
field:"Общая хирургия",
experience:"25 лет"
},
{
name:"Prof. Dr. Cevat Naci Oner",
field:"Кардиология",
experience:"22 года"
}
]

},

{
name:"Acibadem Maslak Hospital",
city:"Стамбул",
rating:4.8,
costRange:"$10000 - $35000",

specialization:[
"Кардиология",
"Онкология",
"ЭКО",
"Нейрохирургия"
],

procedures:[
"ЭКО",
"Кардиохирургия",
"Операции мозга"
],

doctors:[
{
name:"Dr. Mehmet Ozkan",
field:"Кардиохирург",
experience:"20 лет"
},
{
name:"Dr. Murat Binbay",
field:"Урология",
experience:"18 лет"
}
]

},

{
name:"Medipol Mega University Hospital",
city:"Стамбул",
rating:4.8,
costRange:"$9000 - $30000",

specialization:[
"Кардиология",
"Онкология",
"Неврология",
"Трансплантация"
],

procedures:[
"Трансплантация почки",
"Кардиохирургия",
"Нейрохирургия"
],

doctors:[
{
name:"Prof. Dr. Kemal Ucar",
field:"Кардиохирург",
experience:"24 года"
},
{
name:"Dr. Serkan Keskin",
field:"Онкология",
experience:"17 лет"
}
]

},

{
name:"Liv Hospital",
city:"Стамбул",
rating:4.7,
costRange:"$10000 - $32000",

specialization:[
"Онкология",
"Кардиология",
"Гастроэнтерология"
],

procedures:[
"Лечение рака",
"Кардиохирургия",
"Лапароскопия"
],

doctors:[
{
name:"Dr. Binnur Erdag",
field:"Онкология",
experience:"19 лет"
}
]

},

{
name:"Hisar Intercontinental Hospital",
city:"Стамбул",
rating:4.7,
costRange:"$8000 - $25000",

specialization:[
"Кардиология",
"Пластическая хирургия",
"Офтальмология"
],

procedures:[
"LASIK",
"Пластические операции",
"Кардиохирургия"
],

doctors:[
{
name:"Dr. Ahmet Korkmaz",
field:"Пластическая хирургия",
experience:"18 лет"
}
]

},

{
name:"Florence Nightingale Hospital",
city:"Стамбул",
rating:4.8,
costRange:"$11000 - $34000",

specialization:[
"Кардиология",
"Онкология",
"Нейрохирургия"
],

procedures:[
"Кардиохирургия",
"Нейрохирургия"
],

doctors:[
{
name:"Prof. Dr. Ali Riza",
field:"Кардиохирург",
experience:"26 лет"
}
]

},

{
name:"Medical Park Hospital",
city:"Стамбул",
rating:4.6,
costRange:"$9000 - $28000",

specialization:[
"Ортопедия",
"Кардиология",
"Онкология"
],

procedures:[
"Эндопротезирование",
"Кардиохирургия"
],

doctors:[
{
name:"Dr. Erkan Yildirim",
field:"Ортопедия",
experience:"20 лет"
}
]

}

],

visaInfo:"E-виза онлайн",
avgStay:"7-14 дней"

},

// =======================
// ИНДИЯ
// =======================

india:{

country:"Индия",
flag:"🇮🇳",

clinics:[

{
name:"Apollo Hospitals",
city:"Ченнай",
rating:4.9,
costRange:"$7000 - $25000",

specialization:[
"Кардиология",
"Онкология",
"Трансплантация"
],

procedures:[
"Кардиохирургия",
"Трансплантация печени"
],

doctors:[
{
name:"Dr. Prathap Reddy",
field:"Кардиология",
experience:"30 лет"
},
{
name:"Dr. Ashok Rajgopal",
field:"Ортопедия",
experience:"28 лет"
}
]

},

{
name:"Medanta The Medicity",
city:"Гургаон",
rating:4.9,
costRange:"$8000 - $28000",

specialization:[
"Кардиохирургия",
"Гастроэнтерология",
"Трансплантация печени"
],

procedures:[
"Трансплантация печени",
"Кардиохирургия"
],

doctors:[
{
name:"Dr. Naresh Trehan",
field:"Кардиохирург",
experience:"35 лет"
}
]

},

{
name:"Fortis Memorial Research Institute",
city:"Дели",
rating:4.8,
costRange:"$7000 - $22000",

specialization:[
"Кардиология",
"Нейрохирургия",
"Онкология"
],

procedures:[
"Кардиохирургия",
"Операции мозга"
],

doctors:[
{
name:"Dr. Ashok Seth",
field:"Кардиология",
experience:"30 лет"
}
]

},

{
name:"MIOT International Hospital",
city:"Ченнай",
rating:4.7,
costRange:"$6000 - $20000",

specialization:[
"Ортопедия",
"Кардиология",
"Онкология"
],

procedures:[
"Эндопротезирование",
"Кардиохирургия"
],

doctors:[
{
name:"Dr. P. V. A. Mohandas",
field:"Ортопедия",
experience:"25 лет"
}
]

},

{
name:"Max Super Speciality Hospital",
city:"Дели",
rating:4.7,
costRange:"$7000 - $24000",

specialization:[
"Кардиология",
"Онкология",
"Нейрохирургия"
],

procedures:[
"Кардиохирургия",
"Онкологические операции"
],

doctors:[
{
name:"Dr. Vivek Vij",
field:"Трансплантация печени",
experience:"22 года"
}
]

}

],

visaInfo:"E-виза 2-5 дней",
avgStay:"10-21 день"

}

};

// =====================================
// ПОКАЗ ПЛАНА ЛЕЧЕНИЯ
// =====================================

function viewTreatmentPlan(country){

const data=abroadClinicsData[country]

const modal=document.getElementById("planModal")
const content=document.getElementById("planContent")

let clinicsHTML=data.clinics.map((clinic,index)=>{

let doctorsHTML=(clinic.doctors||[]).map(d=>
`<li>${d.name} — ${d.field} (${d.experience})</li>`
).join("")

let specHTML=(clinic.specialization||[]).map(s=>`<li>${s}</li>`).join("")
let procHTML=(clinic.procedures||[]).map(p=>`<li>${p}</li>`).join("")

return`

<div style="margin-bottom:30px;border-bottom:1px solid #eee;padding-bottom:20px">

<h3>${index+1}. ${clinic.name}</h3>

<p><b>Город:</b> ${clinic.city}</p>
<p><b>Рейтинг:</b> ${clinic.rating} ⭐</p>
<p><b>Стоимость:</b> ${clinic.costRange}</p>

<b>Направления:</b>
<ul>${specHTML}</ul>

<b>Процедуры:</b>
<ul>${procHTML}</ul>

<b>Врачи:</b>
<ul>${doctorsHTML}</ul>

</div>
`

}).join("")

content.innerHTML=`

<div style="text-align:center;margin-bottom:30px">

<h2>${data.flag} Лечение в стране: ${data.country}</h2>

<p><b>Виза:</b> ${data.visaInfo}</p>
<p><b>Средний срок лечения:</b> ${data.avgStay}</p>

</div>

${clinicsHTML}

<button class="btn btn-primary" onclick="contactConsultant()">
Связаться с консультантом
</button>

`

modal.style.display="block"
document.body.style.overflow="hidden"

}

// =====================================

function closePlanModal(){
document.getElementById("planModal").style.display="none"
document.body.style.overflow="auto"
}

// =====================================

function contactConsultant(){

closePlanModal()

let toast=document.createElement("div")

toast.className="consult-toast"

toast.innerText="Консультант скоро свяжется с вами"

document.body.appendChild(toast)

setTimeout(()=>{
toast.classList.add("show")
},50)

setTimeout(()=>{
toast.classList.remove("show")

setTimeout(()=>{
toast.remove()
},400)

},3500)

}