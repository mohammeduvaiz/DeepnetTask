import React from 'react'
import {useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {listProducts} from '../action/productAction'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Productdetails from './ProductTable'

const ScreenOne = () =>  {
    const dispatch = useDispatch()
    const itemsList = useSelector(state => state.productReducer)
    const {products} = itemsList
    const {data} = products
    
    useEffect(() => {
      dispatch(listProducts())
    }, [dispatch])

    
  return (
    <div style={{ display:'flex',alignItems:'center',flexDirection:'column',padding:'20px'}}>
      <h1>Categories (200)</h1>
        {data?.map((item,index) => ( 
                <Link style={{ textDecoration: 'none' }} to={`${item.department_id}`}  key={index}>
                  <Card style={{ width: '18rem',display:'flex',alignItems:'center'}}>
                     <Card.Text>
                       <p>{item.department_id} <span>({item.department_numProducts})</span></p>
                     </Card.Text>
                  </Card>
                </Link>
        ))}
        <div style={{marginTop:"30px" ,width:'700px'}}>
        {data?.map((item) => (
          <>
           <h3>{item.department_name}</h3>
           <Productdetails productList = {item.fav_products}/> 
           </>
        ))}
        </div>
    </div>
    
  )
}

export default ScreenOne