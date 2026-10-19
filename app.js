
const PRODUCTS = [
    // BURGERLAR
    { id: "burger", name: "Classic Burger", category: "Burgerlar", emoji: "🍔", description: "Mazali go'shtli klassik burger", price: 35000, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58bd?auto=format&fit=crop&w=600&q=80" },
    { id: "double-burger", name: "Double Burger", category: "Burgerlar", emoji: "🍔", description: "Ikki qavat go'sht va pishloq", price: 48000, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=600&q=80" },
    { id: "chicken-burger", name: "Chicken Burger", category: "Burgerlar", emoji: "🍔", description: "Tovuq go'shtli burger", price: 32000, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80" },
    { id: "fries", name: "Fri kartoshka", category: "Burgerlar", emoji: "🍟", description: "Qarsildoq fri kartoshka", price: 18000, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80" },

    // PITSALAR
    { id: "pizza", name: "Margherita Pizza", category: "Pitsalar", emoji: "🍕", description: "Pishloq va pomidorli pizza", price: 55000, image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80" },
    { id: "pepperoni", name: "Pepperoni Pizza", category: "Pitsalar", emoji: "🍕", description: "Pepperoni kolbasali pizza", price: 65000, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80" },
    { id: "four-cheese", name: "4 Cheese Pizza", category: "Pitsalar", emoji: "🧀", description: "To'rt xil pishloqli pizza", price: 72000, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80" },
    { id: "chicken-pizza", name: "Chicken Pizza", category: "Pitsalar", emoji: "🍕", description: "Tovuq go'shti va pishloq", price: 68000, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" },
    { id: "mix-pizza", name: "Mix Pizza", category: "Pitsalar", emoji: "🍕", description: "Turli masalliqli maxsus pizza", price: 75000, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80" },
    { id: "meat-pizza", name: "Meat Pizza", category: "Pitsalar", emoji: "🍕", description: "Go'shtli to'yimli pizza", price: 78000, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80" },

    // TAOMLAR
    { id: "wings", name: "Chicken Wings", category: "Taomlar", emoji: "🍗", description: "Mazali tovuq qanotchalari", price: 38000, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80" },
    { id: "sandwich", name: "Club Sandwich", category: "Taomlar", emoji: "🥪", description: "Tovuq va sabzavotli sendvich", price: 30000, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80" },
    { id: "pasta", name: "Alfredo Pasta", category: "Taomlar", emoji: "🍝", description: "Qaymoqli sousli makaron", price: 42000, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80" },
    { id: "salad", name: "Caesar Salat", category: "Taomlar", emoji: "🥗", description: "Tovuq va yangi sabzavotlar", price: 32000, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80" },

    // ISSIQ ICHIMLIKLAR
    { id: "espresso", name: "Espresso", category: "Issiq ichimliklar", emoji: "☕", description: "Quyuq va xushbo'y qahva", price: 15000, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80" },
    { id: "coffee", name: "Cappuccino", category: "Issiq ichimliklar", emoji: "☕", description: "Sut ko'pikli xushbo'y qahva", price: 25000, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80" },
    { id: "latte", name: "Latte", category: "Issiq ichimliklar", emoji: "☕", description: "Sutli yumshoq qahva", price: 24000, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80" },
    { id: "hot-chocolate", name: "Hot Chocolate", category: "Issiq ichimliklar", emoji: "🍫", description: "Issiq shokoladli ichimlik", price: 23000, image: "https://images.unsplash.com/photo-1542990253-0b8be9e109f0?auto=format&fit=crop&w=600&q=80" },

    // SOVUQ ICHIMLIKLAR
    { id: "ice-latte", name: "Ice Latte", category: "Sovuq ichimliklar", emoji: "🧋", description: "Muzli sutli qahva", price: 25000, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80" },
    { id: "smoothie", name: "Strawberry Smoothie", category: "Sovuq ichimliklar", emoji: "🍓", description: "Qulupnayli salqin ichimlik", price: 28000, image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80" },
    { id: "orange-juice", name: "Apelsin sharbati", category: "Sovuq ichimliklar", emoji: "🍊", description: "Apelsin sharbati", price: 20000, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80" },
    { id: "lemonade", name: "Limonad", category: "Sovuq ichimliklar", emoji: "🍋", description: "Limonli salqin ichimlik", price: 18000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=600&q=80" },
    { id: "milkshake", name: "Milkshake", category: "Sovuq ichimliklar", emoji: "🥤", description: "Sutli shirin kokteyl", price: 27000, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80" },
    { id: "ice-tea", name: "Ice Tea", category: "Sovuq ichimliklar", emoji: "🧊", description: "Muzli choy", price: 16000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80" },

    // SHIRINLIKLAR
    { id: "cake", name: "Cheesecake", category: "Shirinliklar", emoji: "🍰", description: "Shirin va yumshoq desert", price: 30000, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80" },
    { id: "chocolate-cake", name: "Chocolate Cake", category: "Shirinliklar", emoji: "🍫", description: "Shokoladli mazali tort", price: 25000, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" }
];

// Narxni formatlash
function money(number) {
    return Number(number).toLocaleString("uz-UZ") + " so'm";
}

// Brauzerda saqlangan ma'lumotlarni o'qish
function readData(key, fallback = []) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
        return fallback;
    }
}

// Ma'lumotlarni saqlash
function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Ma'lumotni saqlashda xato:", error);
    }
}

// Savatni olish
function getCart() {
    return readData("cafeHouseCart", []);
}

// Savatdagi mahsulotlar sonini ko'rsatish
function updateCount() {
    const count = getCart().reduce(
        (sum, item) => sum + Number(item.qty || 0), 0
    );

    document.querySelectorAll("#cart-count, #selected-count")
        .forEach(element => {
            element.textContent = count;
        });
}

// Savatga mahsulot qo'shish
function addToCart(id) {
    const product = PRODUCTS.find(item => item.id === id);
    if (!product) return;

    const cart = getCart();
    const selected = cart.find(item => item.id === id);

    if (selected) {
        selected.qty = Number(selected.qty || 0) + 1;
    } else {
        cart.push({ id: id, qty: 1 });
    }

    saveData("cafeHouseCart", cart);
    updateCount();
    renderProducts();
    renderOrder();
}

// Kategoriya bo'yicha mahsulotlarni chiqarish
let activeCategory = "Hammasi";

function renderProducts() {
    const box = document.getElementById("products");
    if (!box) return;

    const cart = getCart();

    const filteredProducts = PRODUCTS.filter(product => {
        if (activeCategory === "Hammasi") return true;

        if (activeCategory === "Ichimliklar") {
            return (
                product.category === "Issiq ichimliklar" ||
                product.category === "Sovuq ichimliklar"
            );
        }

        return product.category === activeCategory;
    });

    if (filteredProducts.length === 0) {
        box.innerHTML = "<p>Bu bo'limda mahsulot yo'q.</p>";
        return;
    }

    box.innerHTML = filteredProducts.map(product => {
        const selected = cart.find(item => item.id === product.id);

        return `
            <article class="card">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.emoji} ${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${money(product.price)}</div>
                <button
                    type="button"
                    class="${selected ? "added" : ""}"
                    onclick="addToCart('${product.id}')">
                    ${selected
                        ? "✓ Tanlandi (" + selected.qty + ")"
                        : "Savatga qo'shish"}
                </button>
            </article>
        `;
    }).join("");
}

// Buyurtma sahifasidagi savatni ko'rsatish
function renderOrder() {
    const box = document.getElementById("order-items");
    if (!box) return;

    const totalBox = document.getElementById("order-total");
    const cart = getCart();

    if (cart.length === 0) {
        box.innerHTML = `
            <p class="empty">
                Savat bo'sh. Avval menyudan mahsulot tanlang.<br><br>
                <a href="menu.html" class="btn">Menyuga o'tish</a>
            </p>
        `;

        if (totalBox) totalBox.textContent = money(0);
        return;
    }

    let total = 0;

    box.innerHTML = cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if (!product) return "";

        const qty = Number(item.qty || 1);
        const sum = product.price * qty;
        total += sum;

        return `
            <div class="order-row">
                <span>${product.emoji} ${product.name} × ${qty}</span>
                <b>${money(sum)}</b>
                <button type="button" onclick="changeQty('${product.id}', -1)">−</button>
                <button type="button" onclick="changeQty('${product.id}', 1)">+</button>
                <button type="button" onclick="removeFromCart('${product.id}')">O'chirish</button>
            </div>
        `;
    }).join("");

    if (totalBox) totalBox.textContent = money(total);
}

// Mahsulot sonini o'zgartirish
function changeQty(id, change) {
    const cart = getCart();
    const item = cart.find(product => product.id === id);
    if (!item) return;

    item.qty = Number(item.qty || 1) + change;

    const updated = cart.filter(product => product.qty > 0);

    saveData("cafeHouseCart", updated);
    updateCount();
    renderOrder();
    renderProducts();
}

// Mahsulotni savatdan o'chirish
function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);

    saveData("cafeHouseCart", cart);
    updateCount();
    renderOrder();
    renderProducts();
}

// Mijoz ma'lumotlarini oldindan to'ldirish
function loadCustomer() {
    const form = document.getElementById("order-form");
    if (!form) return;

    const customer = readData("cafeHouseCustomer", {});

    if (form.elements.name) form.elements.name.value = customer.name || "";
    if (form.elements.phone) form.elements.phone.value = customer.phone || "";
    if (form.elements.address) form.elements.address.value = customer.address || "";
    if (form.elements.note) form.elements.note.value = customer.note || "";
}

// Matnni xavfsiz chiqarish
function escapeText(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// Buyurtmani rasmiylashtirish
function acceptOrder(event) {
    event.preventDefault();

    const cart = getCart();

    if (cart.length === 0) {
        alert("Avval menyudan mahsulot tanlang!");
        return;
    }

    const form = event.target;

    const customer = {
        name: form.elements.name.value.trim(),
        phone: form.elements.phone.value.trim(),
        address: form.elements.address.value.trim(),
        note: form.elements.note ? form.elements.note.value.trim() : ""
    };

    if (!customer.name || !customer.phone || !customer.address) {
        alert("Iltimos, ism, telefon va manzilni kiriting.");
        return;
    }

    const items = cart.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);

        if (!product) return null;

        return {
            name: product.name,
            qty: Number(item.qty || 1),
            price: product.price
        };
    }).filter(Boolean);

    const total = items.reduce(
        (sum, item) => sum + item.qty * item.price, 0
    );

    const order = {
        number: Date.now(),
        date: new Date().toLocaleString("uz-UZ"),
        customer,
        items,
        total
    };

    const orders = readData("cafeHouseOrders", []);
    orders.unshift(order);

    saveData("cafeHouseOrders", orders);
    saveData("cafeHouseCustomer", customer);
    saveData("cafeHouseCart", []);

    updateCount();
    renderOrder();

    form.hidden = true;

    const confirmation = document.getElementById("confirmation");

    if (!confirmation) {
        alert("Buyurtma brauzerda saqlandi.");
        return;
    }

    confirmation.hidden = false;

    confirmation.innerHTML = `
        <h3>✅ Buyurtmangiz qabul qilindi!</h3>
        <p><b>Buyurtma raqami:</b> ${String(order.number).slice(-7)}</p>
        <p><b>Buyurtmachi:</b> ${escapeText(customer.name)}</p>
        <p><b>Telefon:</b> ${escapeText(customer.phone)}</p>
        <p><b>Manzil:</b> ${escapeText(customer.address)}</p>
        <p><b>Mahsulotlar:</b>
            ${items.map(item =>
                `${escapeText(item.name)} × ${item.qty}`
            ).join(", ")}
        </p>
        <p><b>Jami:</b> ${money(total)}</p>
        ${customer.note
            ? `<p><b>Izoh:</b> ${escapeText(customer.note)}</p>`
            : ""}
        <p class="muted">
            Buyurtma ushbu brauzerda saqlandi.
            Telegramga yuborish hali ulanmagan.
        </p>
        <a href="menu.html" class="btn">Yana buyurtma berish</a>
    `;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Sahifa yuklanganda kerakli funksiyalarni ishga tushirish
document.addEventListener("DOMContentLoaded", () => {
    updateCount();
    renderProducts();
    renderOrder();
    loadCustomer();

    // Kategoriya tugmalarini ishlatish
    document.querySelectorAll(".category-btn").forEach(button => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.category;

            document.querySelectorAll(".category-btn").forEach(btn => {
                btn.classList.toggle("active", btn === button);
            });

            renderProducts();
        });
    });

    // Buyurtma formasini ishlatish
    const form = document.getElementById("order-form");

    if (form) {
        form.addEventListener("submit", acceptOrder);
    }
});
const BOT_TOKEN = '8804043531:AAFGu8P97sSX5KlEA0mIXbM-0mhCD1QZ2N0';
const CHAT_ID = '7017606280';

function sendToTelegram(orderData) {
    const message = `
📦 <b>Yangi Buyurtma! (#${orderData.id})</b>

👤 <b>Buyurtmachi:</b> ${orderData.name}
📞 <b>Telefon:</b> ${orderData.phone}
📍 <b>Manzil:</b> ${orderData.address}
🛒 <b>Mahsulotlar:</b> ${orderData.items}
💰 <b>Jami:</b> ${orderData.total}
💬 <b>Izoh:</b> ${orderData.comment || 'Yo\'q'}
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('Buyurtma Telegramga muvaffaqiyatli yuborildi!');
        } else {
            console.error('Telegramga yuborishda xatolik:', data);
        }
    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
    });
}
