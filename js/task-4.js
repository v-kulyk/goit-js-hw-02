function getShippingCost(country) {
    let price;
    let message;

    switch (country.toLowerCase()) {
        case 'china':
            price = 100;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'chile':
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'australia':
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'jamaica':
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            message = "Sorry, there is no delivery to your country";
    }

    return message;
}

// Перевірка роботи функції за допомогою виведення результатів в консоль
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
