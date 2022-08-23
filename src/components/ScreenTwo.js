import React from 'react'
import {useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {listProducts} from '../action/productAction'
import {Card} from 'react-bootstrap'
import {Link,useParams} from 'react-router-dom'
import {Productdetails} from '../components'

const ScreenTwo = () => {
    const params = useParams()

    const dispatch = useDispatch()
    const itemsList = useSelector(state => state.productReducer)
    const {products} = itemsList
    const {data} = products
    
    useEffect(() => {
      dispatch(listProducts())
    }, [dispatch])

  const details = data?.find((item) => item.department_id === params.category)
  console.log(details)

  return (
    <div  style={{ display:'flex',alignItems:'center',flexDirection:'column',padding:'20px'}}>
         <h1>Categories (200)</h1>
   {
     details?.department_subCategory.map((item,index) => (
            <Link style={{ textDecoration: 'none' }} to={`${item.id}`}  key={index}>
              <Card style={{ width: '18rem',display:'flex',alignItems:'center'}}>
                  <Card.Text>
                  <p>{item.name} <span>({item.totalProducts})</span></p>
                  </Card.Text>
              </Card>
            </Link>
    ))}
      <div style={{marginTop:"30px" ,width:'700px'}}>
           <Productdetails productList = {details?.fav_products}/> 
        </div>
    </div>
  )
}

export default ScreenTwo