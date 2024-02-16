import { Try } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dashboard() {
  const [data,setData]= useState([])


  useEffect(()=>{

(
  async () => {
    try {
      const res = await axios.get("http://localhost:3000/data.json")
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
)()

  },[])
  return (
    <div style={{ paddingTop : 80 ,paddingLeft:300 }} className='d-flex flex-wrap gap-3 justify-content-center mb-5 pb-5'>
      {data.map((e,i)=>
      <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={e.imageURL} style={{objectfit:"contain"}} width={100} height={200}/>
      <Card.Body className='d-flex flex-column justify-content-between'  >
        <Card.Title>{e.productName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
      
      )}
    </div>
  )
}

export default Dashboard
