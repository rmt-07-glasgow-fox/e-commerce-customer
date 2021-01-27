export default {
  fetchCarts (state) {
    const carts = state.carts
    const temp = []

    for (let i = 0; i < carts.length; i++) {
      if (!carts[i].isPaid) temp.push(carts[i])
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
  }
}
