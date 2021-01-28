export default {
  fetchHomeCategories (state) {
    const categories = state.categories
    const temp = []

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].Products.length > 0) temp.push(categories[i])
    }

    if (temp.length > 3) return temp.slice(0, 3)

    return temp
  },
  fetchTotalCategories (state) {
    const categories = state.categories
    let temp = 0

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].Products.length > 0) temp += categories[i].Products.length
    }

    return temp
  }
}
