const productsRepository = require('../repositories/productsRepository');

const getProducts = async (categories, characters) => {
    console.log('Service: getProducts');

    let categoriesData = await this.getCategories()
    let charactersData = await this.getCharacters()

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

    if (!checkMatch(categoriesData, categoriesArray)) {
        const message = "Unknown category"
        throw new Error(message)
    } else if (!checkMatch(charactersData, charactersArray)) {
        const message = "Unknown character"
        throw new Error(message)
    }

    try {
        return await productsRepository.getProducts(categoriesArray, charactersArray);
    } catch {
        const message = "Unexpected error"
        throw new Error(message)
    }
};

const checkMatch = (databaseData, passedInData) => {
    return passedInData.every((element) => {
        return databaseData.includes(element)
    })
}

const getCategories = async () => {
    console.log('service: getCategories')
    const query = await productsRepository.getCategories()
    if (query === null) {
        const message = "Unexpected error"
        throw new Error(message)
    }
    return query
}

const getCharacters = async () => {
    console.log('service: getCharacters')
    const query = await productsRepository.getCharacters()
    if (query.length === 0) {
        const message = "Unexpected error"
        throw new Error(message)
    }
    return query
}

const getProduct = async (productID) => {
    console.log('Service: getProduct');

    try {
        return await productsRepository.getProduct(productID);
    } catch {
        const message = "Unknown product ID"
        throw new Error(message)
    }
}

module.exports.getProducts = getProducts;
module.exports.getCategories = getCategories;
module.exports.getCharacters = getCharacters;
module.exports.getProduct = getProduct;
