//  This enum maps directly to the 'Resources' in FakerAPI, found here: https://fakerapi.it/en
//  These are the types of data that faker accepts
enum FakerResourcesEnum {
    addresses = 'addresses',
    books = 'books',
    companies = 'companies',
    credit_cards = 'credit_cards',
    images = 'images',
    persons = 'persons',
    places = 'places',
    products = 'products',
    texts = 'texts',
    users = 'users',
    custom = 'custom'
}

//  This is a function that maps string values back to the enum itself, or the corresponding UI.
export { FakerResourcesEnum };