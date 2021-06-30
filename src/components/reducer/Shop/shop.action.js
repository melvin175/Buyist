import { SORT_PRODUCT, SEARCH_PRODUCTS, FILTER } from '../Shop/shop.types'

export const handleSort = (sort) => ({
  type: SORT_PRODUCT,
  payload: {
    sort,
  },
})

export const handleSearch = (query) => ({
  type: SEARCH_PRODUCTS,
  payload: {
    query,
  },
})

export const handleFilter = (filter) => ({
  type: FILTER,
  payload: {
    filter,
  },
})