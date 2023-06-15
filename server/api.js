

const axios = require("axios");

const catWikiAPIoptions = {
    headers: {
        "x-api-key":
            "live_IeWvzvyp7vvHCCbKsnRQXAGH3zGEebXvr8HQ5bsRQmQAVxKnhaWlWE7B2L7rt3tX",
    },
}
module.exports.getAllBreeds = async () => {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds",
        catWikiAPIoptions);
    return response.data;
}


module.exports.getBreedById = async (breedId) => {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds",
        catWikiAPIoptions);
    return [response.data.find(e => e.id === breedId)];
}

module.exports.getBreedImageById = async (breedId) => {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search?breed_ids=" + breedId + "&limit=10",
        catWikiAPIoptions);
    return response.data;
}

