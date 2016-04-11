module.exports = function () {
    var faker = require("./faker");
    var _ = require("./lodash");
    return {
        products: _.times(6, function (n) {
            return {
                id: n,
                description: faker.lorem.paragraph(),
                title: faker.lorem.word(),
                img: faker.image.technics()
            }
        }),
        users: _.times(3, function(n){
            return {
                id: n,
                firstName: faker.name.findName(),
                lastName: faker.name.lastName(),
                userName: faker.internet.userName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber()

            }
        })
    }
};