import {SORT_PRODUCT, SEARCH_PRODUCTS, FILTER } from '../Shop/shop.types'

export const initialState = {
  data: [],
  error: false,
  sort: null,
  searchQuery: null,
  filters: {
    brandFilter: null,
    outOfStock: false,
    expressDelivery: false,
  },
}

export function shopReducer(state, action) {
  switch (action.type) {
    case SORT_PRODUCT:
      return {
        ...state,
        sort: action.payload.sort,
        data: [...state.data],
      }
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchQuery: action.payload.query,
        data: [...state.data],
      }
    case FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filter]: !state.filters[action.payload.filter],
        },
      }
    default:
      return { ...state }
  }
}
