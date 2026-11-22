const navigation = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', function (event) {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('show');
});

const pageTitle = document.querySelector("main h1");

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-4944-thumb.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    },
    {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 51921,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28222-thumb.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, September, 17",
        area: 30659,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4089-thumb.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3544-thumb.jpg"

    },
];

// Select the HTML elements
const templesContainer = document.querySelector("#temples");

// Display the temple cards
function displayTemples(templeList) {
    templesContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        card.innerHTML = `
            <img src="${temple.imageUrl}"
                alt="${temple.templeName}"
                loading="lazy">

            <div class="temple-info">
                <h2>${temple.templeName}</h2>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Size: ${temple.area.toLocaleString()} sq ft</p>
            </div>
`;
        templesContainer.appendChild(card);
    });
}

// Filter the temples

function filterTemples(category) {
    let filteredTemples = temples;

    if (category === "old") {
        filteredTemples = temples.filter(temple =>
            new Date(temple.dedicated).getFullYear() < 1900
        );
    }
    else if (category === "new") {
        filteredTemples = temples.filter(temple =>
            new Date(temple.dedicated).getFullYear() > 2000
        );
    }
    else if (category === "large") {
        filteredTemples = temples.filter(temple =>
            temple.area > 90000
        );
    }
    else if (category === "small") {
        filteredTemples = temples.filter(temple =>
            temple.area < 10000
        );
    }
    pageTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    displayTemples(filteredTemples);
}


// Respond to navigation clicks
document.querySelector("#home").addEventListener("click", () => {
    filterTemples("home");
});

document.querySelector("#old").addEventListener("click", () => {
    filterTemples("old");
});

document.querySelector("#new").addEventListener("click", () => {
    filterTemples("new");
});

document.querySelector("#large").addEventListener("click", () => {
    filterTemples("large");
});

document.querySelector("#small").addEventListener("click", () => {
    filterTemples("small");
});

// Display all temples when the page loads
displayTemples(temples);
templeImage.loading = "lazy";

const currentyear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentyear;

document.getElementById("lastModified").textContent = document.lastModified;