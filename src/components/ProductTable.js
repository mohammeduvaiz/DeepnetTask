import React from 'react'
import Table from 'react-bootstrap/Table';

const Productdetails = ({productList}) => {
  console.log(productList)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {productList?.map((item,index) => (
         <tr>
         <td><input type="radio"/></td>
         <td>{item.title}</td>
         <td>{item.price}</td>
       </tr>
     ))}
      </tbody>
    </Table>
  )
}

export default Productdetails