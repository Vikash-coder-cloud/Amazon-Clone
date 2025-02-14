/* shopping Box */

let details = document.querySelector("#shopDetails");
let amount = document.querySelector("#amountRate");
let mrp = document.querySelector("#mrpRate");
let b1 = document.querySelector("#deal1");
let b2 = document.querySelector("#deal2");
let b3 = document.querySelector("#deal3");
let b4 = document.querySelector("#deal4");
let shopImageEl = document.getElementById("shopImage");

let details2 = document.querySelector("#shopDetailsEl");
let amount2 = document.querySelector("#amountEl");
let mrp2 = document.querySelector("#mrpEl");
let b5 = document.querySelector("#gym1ButtonEl1");
let b6 = document.querySelector("#gym2ButtonEl2");
let b7 = document.querySelector("#gym3ButtonEl3");
let b8 = document.querySelector("#gym4ButtonEl4");
let shopImageEl2 = document.getElementById("shopImage2");

const remove = () => {
    b1.classList.remove("buttonBorder");
    b2.classList.remove("buttonBorder");
    b3.classList.remove("buttonBorder");
    b4.classList.remove("buttonBorder");
}

const addEffect = () => {
    b1.classList.add("hoverEffect");
    b2.classList.add("hoverEffect");
    b3.classList.add("hoverEffect");
    b4.classList.add("hoverEffect");
}

b1.addEventListener("click", () => {
    remove();
    addEffect();
    details.textContent = "Chipkali® Magical Universal Elastic Premium Stretchable Magic Slipcover Stretch Dining…";
    amount.textContent = "1799";
    mrp.textContent = "₹2,499.00";
    b1.classList.add("buttonBorder");
    b1.classList.remove("hoverEffect");
    shopImageEl.src = "IMG-20241126-WA0014.jpg";
});

b2.addEventListener("click", () => {
    remove();
    addEffect();
    details.textContent = "Persian Bedside Runner Carpet for Bedroom/Living Room, Anti Skid Coating (B…";
    amount.textContent = "1249";
    mrp.textContent = "₹2,499.00";
    b2.classList.add("buttonBorder");
    b2.classList.remove("hoverEffect");
    shopImageEl.src = "IMG-20241126-WA0017.jpg";
});

b3.addEventListener("click", () => {
    remove();
    addEffect();
    details.textContent = "Carpets for Living Room Handwoven 3D Curved Pattern Shaggy Super Soft Fluffy an…";
    amount.textContent = "2390";
    mrp.textContent = "₹5,466.00";
    b3.classList.add("buttonBorder");
    b3.classList.remove("hoverEffect");
    shopImageEl.src = "IMG-20241126-WA0011.jpg";
});

b4.addEventListener("click", () => {
    remove();
    addEffect();
    details.textContent = "Nuha Rugs Modern Soft Fluffy Large Shaggy Rug for Bedroom Living Room Home Decor…";
    amount.textContent = "3499";
    mrp.textContent = "₹6,999.00";
    b4.classList.add("buttonBorder");
    b4.classList.remove("hoverEffect");
    shopImageEl.src = "topDeals4.png";
});

const remove2 = () => {
    b5.classList.remove("buttonBorder");
    b6.classList.remove("buttonBorder");
    b7.classList.remove("buttonBorder");
    b8.classList.remove("buttonBorder");
}

const addEffect2 = () => {
    b5.classList.add("hoverEffect");
    b6.classList.add("hoverEffect");
    b7.classList.add("hoverEffect");
    b8.classList.add("hoverEffect");
}

b5.addEventListener("click", () => {
    remove2();
    addEffect2();
    details2.textContent = "Lifelong PVC Hex Dumbbells Pack of 2 (5kg*2) Black Color for Home Gym Equip …";
    amount2.textContent = "509";
    mrp2.textContent = "₹1,000.00";
    b5.classList.add("buttonBorder");
    b5.classList.remove("hoverEffect");
    shopImageEl2.src = 'IMG-20241126-WA0006.jpg';
});

b6.addEventListener("click", () => {
    remove2();
    addEffect2();
    details2.textContent = "Bodyband Hand Grip Workout Strengthener, Adjustable Hand Gripper…";
    amount2.textContent = "99";
    mrp2.textContent = "₹899.00";
    b6.classList.add("buttonBorder");
    b6.classList.remove("hoverEffect");
    shopImageEl2.src = "IMG-20241126-WA0009.jpg";
});

b7.addEventListener("click", () => {
    remove2();
    addEffect2();
    details2.textContent = "Yonex Mavis 350 Green Cap Nylon Shuttlecock (Yellow)";
    amount2.textContent = "1149";
    mrp2.textContent = "₹1,530.00";
    b7.classList.add("buttonBorder");
    b7.classList.remove("hoverEffect");
    shopImageEl2.src = "IMG-20241126-WA0008.jpg";
});

b8.addEventListener("click", () => {
    remove2();
    addEffect2();
    details2.textContent = "Fitness Mantra® Beanie Cap & Muffler for Men & Women";
    amount2.textContent = "99";
    mrp2.textContent = "₹499.00";
    b8.classList.add("buttonBorder");
    b8.classList.remove("hoverEffect");
    shopImageEl2.src = "IMG-20241126-WA0016.jpg";
});

/* shopping Box ^^ */