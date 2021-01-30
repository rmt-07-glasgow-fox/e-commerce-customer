export default {
  fetchCarts (state) {
    const carts = state.carts
    const temp = []

    for (let i = 0; i < carts.length; i++) {
      if (!carts[i].isPaid) temp.push(carts[i])
    }

    return temp
  },
  fetchTotalCarts (state) {
    const carts = state.carts
    let temp = 0

    for (let i = 0; i < carts.length; i++) {
      if (!carts[i].isPaid) temp++
    }

    return temp
  },
  fetchHistory (state) {
    const carts = state.carts
    const temp = []

    for (let i = 0; i < carts.length; i++) {
      if (carts[i].isPaid) temp.push(carts[i])
    }

    return temp
  },
  fetchTotalPrice (state) {
    const carts = state.carts
    let total = 0

    for (let i = 0; i < carts.length; i++) {
      if (!carts[i].isPaid) total += (carts[i].Product.price * carts[i].quantity)
    }

    return total
  }
}
