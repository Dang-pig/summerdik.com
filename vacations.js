const places = [
    {
        title: "Ha Long Bay",
        locat: "Ha Long city, Vietnam",
        description: "Here you can experience very diverse natural landscape, varying from long sandy beach to thousand-year-old-lime karst.",
        srcimg1: "images/halongbay1.jpg",
        srcimg2: "images/halongbay2.jpg",
        srcimg3: "images/halongbay3.jpg",
        altimg1: "Ha Long Bay - Vietnam - 1",
        altimg2: "Ha Long Bay - Vietnam - 2",
        altimg3: "Ha Long Bay - Vietnam - 3",
    },
    {
        title: "Ilulissat",
        locat: "Greenland",
        description: "Ilulissat is home to the UNESCO listed Ilulissat Icefjord, where whale blows or sled dog paws echo off icebergs larger than your imagination.",
        srcimg1: "images/ilulissat1.jpg",
        srcimg2: "images/ilulissat2.jpg",
        srcimg3: "images/ilulissat3.jpg",
        altimg1: "Ilulissat - Greenland - 1",
        altimg2: "Ilulissat - Greenland - 2",
        altimg3: "Ilulissat - Greenland - 3",
    },
    {
        title: "London",
        locat: "England",
        description: "Pack your shades and get ready to rock your summer wardrobe. Sunny day are coming and it's time to get planning!",
        srcimg1: "images/london1.jpg",
        srcimg2: "images/london2.jpg",
        srcimg3: "images/london3.jpg",
        altimg1: "London - England - 1",
        altimg2: "London - England - 2",
        altimg3: "London - England - 3",
    },
]

window.onload = function () {
    const placesContainer = document.getElementById('places-container');
    places.forEach(place => {
        const placeCard = `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card">
            <div class="row g-0">
                <div class="col-md-6">
                    <div class="img-wrapper" style="
                    border-top-left-radius: var(--bs-card-inner-border-radius);
                    border-bottom-left-radius: var(--bs-card-inner-border-radius);">
                        <img src="${place.srcimg1}" class="card-img-in-wrapper card-img-left zoomable"
                            style="border-top-left-radius: var(--bs-card-inner-border-radius);"
                            alt="${place.altimg1}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row g-0">
                        <div class="col-md-12">
                            <div class="img-wrapper" style="
                            border-top-right-radius: var(--bs-card-inner-border-radius);">
                                <img src="${place.srcimg2}"
                                    class="card-img-in-wrapper card-img-top-right zoomable"
                                    alt="${place.altimg2}">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="img-wrapper" style="
                            border-bottom-right-radius: var(--bs-card-inner-border-radius);">
                                <img src="${place.srcimg3}"
                                    class="card-img-in-wrapper card-img-bottom-right zoomable"
                                    alt="${place.altimg3}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${place.title}</h5>
                <p class="location">${place.locat}</p>
                <p class="description">${place.description}</p>
            </div>
        </div>
    </div>
      `;
        placesContainer.innerHTML += placeCard;
    });
}