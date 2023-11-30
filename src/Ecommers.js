import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { EDisplay } from './EDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  NavBarComponent from './NavBarComponent'


export const Ecommers = () => {
  const [data, setData] = useState([])
  console.log(data);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(y => {
        setData(y.data)

      }).catch((y => {
        console.log(y);
      }))
  }, [])

  return (
    <Container>
        <NavBarComponent />

       <Row >
       {
      data.map((v) => {
        return (<EDisplay title={v.title} desc={v.description} price={v.price} img={v.image}/>)
            })
        }
       </Row>
       </Container>
    )
}
