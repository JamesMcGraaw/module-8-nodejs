const productsRepository = require('../repositories/productsRepository');

const getProducts = async (categories, characters) => {
    console.log('Service: getProducts');

    let categoriesData = await this.getCategories()
    categoriesData = categoriesData.data

    let charactersData = await this.getCharacters()
    charactersData = charactersData.data

    let categoriesArray = []
    let charactersArray = []

    if (categories) {
        categoriesArray = categories.split(',')
    } else {
        categoriesArray = categoriesData
    }

    if (characters) {
        charactersArray = characters.split(',')
    } else {
        charactersArray = charactersData
    }

    let checkMatch = (databaseData, passedInData) => {
        const databaseValues = Object.values(databaseData);
        const passedInValues = Object.values(passedInData);

        return passedInValues.every((element) => {
            return databaseValues.includes(element)
        })
    }

    if (!checkMatch(categoriesData, categoriesArray)) {
        const message = "Unknown category"
        throw new Error(message)
    } else if (!checkMatch(charactersData, charactersArray)) {
        const message = "Unknown character"
        throw new Error(message)
    }

    try {
        const query = await productsRepository.getProducts(categoriesArray, charactersArray);
        return {"message": "Successfully found products.", "data": query}
    } catch {
        const message = "Unexpected error"
        throw new Error(message)
    }
};

const getCategories = async () => {
    console.log('service: getCategories')
    const query = await productsRepository.getCategories()
    if (query === null) {
        const message = "Unexpected error"
        throw new Error(message)
    }
    return {"message": "Successfully found categories.", "data": query}
}

const getCharacters = async () => {
    console.log('service: getCharacters')
    const query = await productsRepository.getCharacters()
    if (query.length === 0) {
        const message = "Unexpected error"
        throw new Error(message)
    }
    return {"message": "Successfully found characters.", "data": query}
}

const getProduct = async (productID) => {
    console.log('Service: getProduct');
    const query = await productsRepository.getProduct(productID);
    if (query !== null) {
        return {"message": "Successfully found product.", "data": query}
    } else {
        return {"message": "Unknown product ID", "data": []}
    }
}

module.exports.getProducts = getProducts;
module.exports.getCategories = getCategories;
module.exports.getCharacters = getCharacters;
module.exports.getProduct = getProduct;
