// Функція для генерації сніжинок
function createSnowflakes() {
    const numberOfSnowflakes = 50;  // Кількість сніжинок
    const snowflakesContainer = document.querySelector('.snowflakes');

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Випадковий горизонтальний розмір сніжинки
        const size = Math.random() * 10 + 10; // Сніжинка розміром від 10px до 20px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Випадкове розташування сніжинки по горизонталі
        snowflake.style.left = Math.random() * 100 + 'vw'; // Random from 0 to 100% of the viewport width
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Випадкова тривалість падіння
        snowflake.style.animationDelay = Math.random() * 5 + 's'; // Випадкова затримка перед початком анімації

        // Випадковий початковий рівень прозорості
        snowflake.style.opacity = Math.random() * 0.5 + 0.5; // opacity between 0.5 and 1

        // Створення "сніжинки" з символом ❄
        snowflake.textContent = '❄';
        
        // Додаємо сніжинку в контейнер
        snowflakesContainer.appendChild(snowflake);
    }
}

// Запускаємо функцію для створення сніжинок
createSnowflakes();
