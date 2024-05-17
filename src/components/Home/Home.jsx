
import React from 'react'
import img from "../../assets/Abdurahman/svg/Frame 16 (1).svg";
import imge from "../../assets/Abdurahman/svg/Frame 15.svg";
import imgvector from "../../assets/Abdurahman/svg/Vector.svg"
import imgvector1 from "../../assets/Abdurahman/svg/Vector (1).svg"
import imgvector2 from "../../assets/Abdurahman/svg/Vector (2).svg"
import imgvector3 from "../../assets/Abdurahman/svg/Vector (3).svg"
import imgvector4 from "../../assets/Abdurahman/svg/Vector (4).svg"
import Container from "../../helpers/Container"
import { styled } from 'styled-components';
import Fire from './Fire'
import Sedra from './Sedra';

function Home() {
  return ( 
    <div>
        <Fire/>

        <Container>
            <DIVContainer>
              <HeaderText>Our product.</HeaderText>
              <HeaderStyleButton>View all (12)</HeaderStyleButton>
            </DIVContainer>
            <ContainerIcon>
            <DivIcon>
                <img src={img}/>
                <h1>ALL</h1>
            </DivIcon>
            <DivIcon>
                <img src={imge}/>
                <h1>BUNDLE</h1>
            </DivIcon>
            <DivIcon>
                <img src={imgvector}/>
                <h1>HERBS</h1>
            </DivIcon>
            <DivIcon>
                <img src={imgvector1}/>
                <h1>VEGETABLES</h1>
            </DivIcon>
            <DivIcon>
                <img src={imgvector2} />
                <h1>FRUITS</h1>
            </DivIcon>
            <DivIcon>
                <img src={imgvector3} />
                <h1>SUPPLIES</h1>
            </DivIcon>
            <DivIcon>
                <img src={imgvector4}/>
                <h1>FLOWERS</h1>
            </DivIcon> 
            </ContainerIcon>
        </Container>
        <Sedra/>
import Fire from './Fire'
// import Category from './Category'

function Home() {
  return (
    <div>
        <Fire/>
        {/* <Category/> */}
    </div>
  )
}

export default Home


const HeaderStyleButton = styled.button`
  border: 1px solid rgb(239, 239, 239);
  width: 155px;
  height: 51px;
  border-radius: 8px;
  color: rgb(53, 151, 64);


`;

const HeaderText = styled.h1`
  font-size: 36px;
  color: rgb(31, 37, 51);
  font-family: Lexend;
`;

const DivIcon = styled.div`
  width: 135px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid rgb(239, 239, 239);
  border-radius: 8px;
  color: rgb(31, 37, 51);
  font-family: Lexend;
`;

const DIVContainer = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     flex-direction: row;
     margin-top: 30px;
    
`;

const ContainerIcon = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin-top: 30px;

`;
