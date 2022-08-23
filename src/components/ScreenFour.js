import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import {listProducts} from '../action/productAction'
import {Card} from 'react-bootstrap'

const ScreenFour =() => {

    const params = useParams()

   
    const dispatch = useDispatch()
    const itemsList = useSelector(state => state.productReducer)
    const {products} = itemsList
    const {data} = products

    useEffect(() => {
      dispatch(listProducts())
    }, [dispatch])

    const details = data?.find((item) => item.department_id === params.category)
 
    const subcat = details?.department_subCategory.find(item => item.id === params.id)

    const productItems = subcat?.products.find((item) => item.id === params._id)



  return (
    <div style={{ display:'flex',alignItems:'center',flexDirection:'column',padding:'20px'}}>
        <h1>Categories (200)</h1>
        {productItems?.items.map((item,index) => (
             <Card style={{ width: '18rem',display:'flex',alignItems:'center'}} key={index}>
                 <Card.Text>
                  <p>{item} </p>
                 </Card.Text>
              </Card>
        ))}
    </div>
  )
}

export default ScreenFour