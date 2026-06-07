const DOG_API = 'https://dog.ceo/api/breeds/image/random/6';
const CAT_API = 'https://api.thecatapi.com/v1/images/search?limit=6';


async function fetchDogs(){
    try {
        const response = await fetch(DOG_API);
        const data = await response.json();
        console.log('Dog data:', data);

        return data.message;
    }

    catch(error) {
        console.log('Failed to fetch dog images:', error);
        return [];
    }

}

async function fetchCats() {
    try {
        const response = await fetch(CAT_API);
        const data = await response.json();
        console.log('Cat data', data);

        return data.map(function(cat) {
            return cat.url;
        });
    }
    catch(error) {
        console.log('Failed to fetch cat images:', error);
        return [];
    }
}

async function loadPets() {
    const dogImages = await fetchDogs();
    const catImages = await fetchCats();

    console.log('Dog Images:', dogImages);
    console.log('Cat Images:', catImages);
}

loadPets();