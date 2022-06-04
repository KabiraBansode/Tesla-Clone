import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

function Header() { 

  const [BurgerStatus, setBurgerStatus]=useState(false)
  const cars=useSelector(selectCars);
  console.log(cars)

  return (
    <Container>
      <Logo>
       <a>
         <img src="/images/logo.svg" alt="" />
      </a>
      </Logo>

      <Menu>
        {cars && cars.map((car,index)=>
        {
          <p> <a key={index} href="#">{car}</a> </p>

        })}
       
        {/* <p> <a href="#">Model-3</a> </p>
        <p> <a href="#">Model-X</a> </p>
        <p> <a href="#">Model-Y</a> </p> */}
      </Menu>
 
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>

          <CustomMenu onClick={()=>{setBurgerStatus(true)}}/>
        </RightMenu>


        <BurgerMenu show={BurgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>{setBurgerStatus(false)}}/>
          </CloseWrapper>
          
        {cars && cars.map((car,index)=>
        (
          <li><a key={index} href="#">{car}</a></li>
        ))}
          <li> <a href="#">Existing Inventory</a></li> <hr />
          <li> <a href="#">Used Inventory</a></li><hr/>
          <li> <a href="#">Trade-In</a></li><hr/>
          <li> <a href="#">Cyber-Trcuk</a></li><hr/>
          <li> <a href="#">Roadster</a></li><hr/>
        </BurgerMenu>
    </Container>
  )
}

export default Header


const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:10px 20px;
top:0;
left:0;
right:0;
z-index:19;


`

const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
margin-right:150px;



a{
  text-transform:upperCase;
  padding:0 10px;
  flex-wrap:nowrap;
  font-weight:750;
}


@media (max-width:768px)
{
    display:none;
    
}



`

const Logo=styled.div`

padding-right:500px;

`

const RightMenu=styled.div`
display:flex;
align-items:center;


@media (max-width:768px)
{
  position: absolute;
  right: 25px;
  font-size:small;
    
}

   

a{
  font-weight:600;
  text-transform:upperCase;
  margin-right 10px;




  @media (max-width:768px)
{
  margin:-7px;
    
}


}

`

const CustomMenu=styled(MenuIcon)`
margin-left:20px;
cursor:pointer;

 
`

const BurgerMenu=styled.div`

position:fixed;
top:0;
bottom:0;
right:0;
width:300px;
background:white;
z-index:10;
padding:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:start;
list-style-type:none;


transform:${props=>props.show ? 'translateX(0)': 'translateX(100%)'};
transition:transform 0.5s ease-in;


li{
  padding:10px;
  margin-top:4px;
  border-bottom:1px solid rgba(0,0,0,.2);


  a{

    font-weight:700;
  }

}

`

const CustomClose=styled(CloseIcon)`

cursor:pointer;


`

const CloseWrapper=styled.div`
display:flex;
justify-content:end;
`