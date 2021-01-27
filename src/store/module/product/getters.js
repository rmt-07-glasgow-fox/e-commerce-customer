export default {
  fetchHomeProducts (state) {
    const products = state.products
    const temp = []

    for (let i = 0; i < products.length; i++) {
      if (products[i].stock > 0) temp.push(products[i])
    }

    if (temp.length > 8) return temp.slice(0, 4)

    return temp
  }
}
