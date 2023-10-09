const displayRestaurants = (data) => {
    const restaurantContainer = document.querySelector('.restaurants');

    const sortedRestaurants = data.restaurants.sort((a, b) => b.rating - a.rating);

    const favorite = sortedRestaurants.slice(0, 6);

    favorite.forEach((restaurant) => {
        const article = document.createElement('article');
        article.classList.add('restaurant-item');

        const cardImg = document.createElement('div');
        cardImg.className = "card__img";

        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', restaurant.pictureId);
        imgElement.setAttribute('alt', restaurant.name);
        
        const cityElement = document.createElement('span');
        cityElement.className = "city";
        cityElement.ariaLabel = `Location resto at ${restaurant.city}`;
        cityElement.innerText = restaurant.city;

        const cardBody = document.createElement('div');
        cardBody.className = "card__body";

        const nameElement = document.createElement('h2');
        nameElement.className = "title";
        nameElement.innerText = restaurant.name;

        const ratingElement = document.createElement('p');
        ratingElement.className = "rating";
        ratingElement.ariaLabel = "Rating";
        ratingElement.innerText = `Rating: ${restaurant.rating}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.className = "description";
        const maxChars = 100;
        descriptionElement.ariaLabel = "description";
        descriptionElement.innerText = restaurant.description.length > maxChars ? restaurant.description.slice(0, maxChars) + '...' : restaurant.description;

        article.appendChild(cardImg);
        cardImg.appendChild(imgElement);
        cardImg.appendChild(cityElement);

        article.appendChild(cardBody);
        cardBody.appendChild(nameElement);
        cardBody.appendChild(ratingElement);
        cardBody.appendChild(descriptionElement);

        restaurantContainer.appendChild(article);
    });
};

fetch('../data/DATA.json')
    .then((response) => response.json())
    .then((data) => {
        displayRestaurants(data);
    })
    .catch((error) => {
        console.log('Error:', error);
    });


export default displayRestaurants;
