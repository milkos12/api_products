const { faker } = require('@faker-js/faker')

class Products {
  constructor() {
    this.products = [];
    this.generate();

  }

  generate() {

    for (let index = 0; index < 10; index++) {
      this.products.push(
        {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseFloat(faker.commerce.price()),
          description: faker.commerce.productDescription(),
          image: faker.image.imageUrl(),
        })
    }
  }

  find(id) {
    let product = [];
    product = this.products.find(product=> product.id == id);
    return product
  }

  update(id, data) {
    const index = this.products.findIndex(product => product.id == id);
    this.products[index] = {id, ...data}
  }

  delete(id) {
    const index = this.products.findIndex(product => product.id == id);
    this.products.splice(index, index)
  }

  findOne(id) {
    const index = this.products.findIndex(product => product.id === id)
    return this.products[index]

  }



}

module.exports = Products;
