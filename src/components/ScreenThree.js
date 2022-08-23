import React from 'react'
import {useEffect} from 'react'
import {Card} from 'react-bootstrap'
import { useSelector,useDispatch} from 'react-redux'
import {listProducts} from '../action/productAction'
import {Link,useParams} from 'react-router-dom'

const ScreenThree = () => {
   
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
  
  return (
    <div style={{ display:'flex',alignItems:'center',flexDirection:'column',padding:'20px'}}>
         <h1>Categories (200)</h1>
           {subcat?.products.map((item,index) => (
            <Link to={`${item.id}`} style={{ textDecoration: 'none' }} key={index}>
              <Card style={{ width: '18rem',display:'flex',alignItems:'center'}}>
                 <Card.Text>
                  <p>{item.title} <span>({item.items.length})</span></p>
                 </Card.Text>
              </Card>
            </Link>
           ))}
           <div style={{marginTop: '50px'}}>
            <h1> Sorry no data !!!! </h1>
           </div>
    </div>
  )
}

export default ScreenThree