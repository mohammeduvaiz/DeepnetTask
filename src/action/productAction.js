import axios from 'axios'

export const listProducts = () => async (dispatch) => {
    try {
         console.log("My name is")
        const { data } = await axios.get('/electronic.json')
        dispatch({
            type:'PRODUCT_LIST_SUCCESS', payload: data
        })

    } catch (error) {
        dispatch({
            type:'PRODUCT_LIST_FAIL', payload: error
        })
    }
}