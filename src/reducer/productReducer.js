export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_SUCCESS':
            return {  products: action.payload }
        case 'PRODUCT_LIST_FAIL':
            return { products: action.payload }
        default:
            return state
    }
}