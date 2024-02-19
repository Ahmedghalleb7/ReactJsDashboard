import { Try } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useSelector,useDispatch} from 'react-redux';
import { getProducts } from '../store/product';
import {useNavigate} from 'react-router-dom'

function Dashboard() {
  const product =useSelector((state) =>state.product.products)
  const dispatch = useDispatch()


  const [data,setData]= useState([])

  console.log(product,"product store")
const navigate =useNavigate()
  useEffect(()=>{
dispatch(getProducts())
  },[])
  return (
    <div style={{ paddingTop : 80 ,paddingLeft:300 }} className='d-flex flex-wrap gap-3 justify-content-center mb-5 pb-5'>
      {product?.map((e,i)=>
      <Card style={{ width: '18rem' }} key={i} >
      <Card.Img variant="top" src={e.imageURL} style={{objectfit:"contain"}} width={100} height={200}/>
      <Card.Body className='d-flex flex-column justify-content-between'  >
        <Card.Title>{e.productName}</Card.Title>
        <Card.Text>
         {e.shortDescription}
        </Card.Text>
        <Button variant="primary" onClick ={ ()=>{
          navigate (`/orders/one/${e.id}`)
          console.log(e.id);
        }}>More</Button>
      </Card.Body>
    </Card>
      
      )}
    </div>
  )
}

export default Dashboard
