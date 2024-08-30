export async function getProducts(category: string, limit: number = 0) {
  const res = await fetch('https://fakestoreapi.com/products/category/' + category + '?limit=' + limit)
  const json = await res.json()
  return json
}

export async function getProductById(id: number) {
  try {
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const json = await res.json()

    return json

  }
  catch (error) {
    const json = null

    return json
  }
}