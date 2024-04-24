import type { ICategoryList } from '~/types/Categories'

export function useCategoriesApi() {
  async function list(): Promise<ICategoryList> {
    return useApi<ICategoryList>('/categories')
  }

  async function create(category) {
    return useApi('/categories', product)
  }

  async function update(category) {
    return useApi(`/categories/${product.id}`, product)
  }

  async function remove(category) {
    return useApi(`/categories/${product.id}`)
  }

  return {
    list,
    create,
    update,
    remove,
  }
}
