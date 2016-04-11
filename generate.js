module.exports = function () {
    var faker = require("./faker");
    var _ = require("./lodash");
    return {
        products: _.times(6, function (n) {
            return {
                id: n,
                description: faker.lorem.text(),
                title: faker.lorem.word(),
                img: faker.image.technics()
            }
        })
    }
};