import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import style_comp from './style_comp.css'



function Home() {
  return (
    <Container>
        
        <Section 
        
        title="Model-S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        
        
        />
        <Section
        
        title="Model-Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        
        
        />
        <Section
        
        
        
        title="Model-3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        
        />
        <Section
        
        
        title="Model-X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        
        />



        <Section   
        title="Lowest Cost Solar Panel in India"
        description="Money-Back Gaurantee"
        backgroundImg="solar-panel.jpg"
        leftBtn="Order now"
        rightBtn="Learn More"
         />


        <Section 
        title="Solar for New Roofs"
        description="Solar Roofs costs less than New Roofs"
        backgroundImg="solar-roof.jpg"
        leftBtn="Order now"
        rightBtn="Learn More"
        
        />



        <Section className='Accessories'
        title="Accessories"
        // description="Solar Roofs costs less than New Roofs"
        backgroundImg="accessories.jpg"
        leftBtn="Shop Now"
        // rightBtn="Learn More"
        
        />
       

    </Container>
  )
}

export default Home


const Container=styled.div`

 height:100vh;

`