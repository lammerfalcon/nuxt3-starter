export function useProductsApi() {
  async function list() {
    return useApi('/products')
  }

  async function create(product) {
    return useApi('/products', product)
  }

  async function update(product) {
    return useApi(`/products/${product.id}`, product)
  }

  async function remove(product) {
    return useApi(`/products/${product.id}`)
  }

  return {
    list,
    create,
    update,
    remove,
  }
}
