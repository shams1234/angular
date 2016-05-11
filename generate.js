module.exports = function () {
    var faker = require("./faker");
    var _ = require("./lodash");
    return {
        products: _.times(6, function (n) {
            return {
                id: n,
                description: faker.lorem.paragraph(),
                productName: faker.commerce.productName(),
                productPrice: faker.commerce.price(),
                productFeatures: faker.commerce.product(),
                bestRating: faker.random.number({min:3,max:5}),
                worstRating: faker.random.number({min : 0, max:3}),
                img: faker.random.image(),

        }
        }),

        reviews: _.times(45, function(n){
            return {
                id: n,
                productId: faker.random.number(5),
                description : faker.lorem.paragraph(),
                author: faker.internet.userName(),
                datePublished: faker.date.recent(),
                title: faker.name.title(),
                ratingValue: faker.random.number(5)
            }
        })
    }
};