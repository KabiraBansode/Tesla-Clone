import React from 'react'
import styled from 'styled-components'
import style_comp from './style_comp.css'
import Fade from 'react-reveal/Fade';

function Section({title,description,backgroundImg,leftBtn,rightBtn,className}) {

   
    
        
    
  return (
    <Wrap bgImg={backgroundImg}>

      <Fade bottom>

        <Itemtext className='itemtext'>
          <h1>{title}</h1>
          <p>{description}</p>
        </Itemtext>

      </Fade>
 
    
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton className='${className}'>
              {leftBtn} 
            </LeftButton>


            {rightBtn &&
              <RightButton>
                {rightBtn}
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <Downarrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section


const Wrap=styled.div`

   height:100vh;
   width:100vw;
   background-repeat: no-repeat;
   background-size: cover;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
   background-position:center;
   background-image:${props=>`url("images/${props.bgImg}")`};

`
const Itemtext=styled.div`

padding-top:15vh;
text-align-center;

h1{
  font-weight:600;
  opacity:0.85;
  font-size:2.1em;
}

p{
  font-size:1.7em;
}



`
const ButtonGroup=styled.div`

display:flex;
margin-bottom:80px;

@media (max-width:768px)
{
    flex-direction:column;
}


`

const LeftButton=styled.div`

    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    margin-right:10px;
    cursor:pointer;
    @media (max-width:768px)
{
    margin-top:10px;
}

`

const RightButton=styled(LeftButton)`

 background:white;
 color:black;
 opacity:0.65;

`

const Downarrow=styled.img`

margin-top:30px;
height:40px;
animation: animateDown infinite 1.5s

`

const Buttons=styled.div`


`