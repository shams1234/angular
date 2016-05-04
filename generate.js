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
                reviews: _.times(faker.random.number(15), function(n){
                    return {
                        id: n,
                        productId: "2",
                        description : faker.lorem.paragraph(),
                        author: faker.internet.userName(),
                        datePublished: faker.date.recent(),
                        title: faker.name.title(),
                        ratingValue: faker.random.number(5)
                    }
                })
        }
        }),
       
        users: _.times(15, function(n){
            return {
                id: n,
                productsId : faker.random.number({min:0,max:15}),
                firstName: faker.name.findName(),
                lastName: faker.name.lastName(),
                userName: faker.internet.userName(),
                userEmail: faker.internet.email(),
                userPhone: faker.phone.phoneNumber(),
                userPassword: faker.internet.password()

            }
        })
    }
};