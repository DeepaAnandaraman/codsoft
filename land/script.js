document.addEventListener('DOMContentLoaded', function () {
    const dishes = document.querySelectorAll('.dish');

    dishes.forEach(dish => {
        dish.addEventListener('click', function () {
            const img = dish.querySelector('img');
            img.classList.toggle('clicked-image');

            const name = dish.getAttribute('data-name');
            const price = dish.getAttribute('data-price');
            const description = dish.getAttribute('data-description');
            const imgSrc = img.getAttribute('src');
            const availability = "Available"; // Set the availability status as needed

            // Store the dish details in local storage
            localStorage.setItem('dishName', name);
            localStorage.setItem('dishPrice', price);
            localStorage.setItem('dishDescription', description);
            localStorage.setItem('dishImgSrc', imgSrc);
            localStorage.setItem('dishAvailability', availability);

            // Redirect to the dish details page
            setTimeout(() => {
                window.location.href = 'dish-details.html';
            }, 300); // Delay to allow the transition to complete
        });
    });
});
