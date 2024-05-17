import React from 'react'
import { styled } from 'styled-components'
import Hr from '../../assets/turdalu/hr'
import imgSidra from '../../assets/turdalu/Frame.png'
import imginistagrm from '../../assets/turdalu/instagram-1.png'
import imgfizbuk from '../../assets/turdalu/fizbuk-2.svg'
import Container from "../../helpers/Container"

function Footer() {
  return (
    <Container>
      
      <DivALLProductc>
          <h1>ALL PRODUCTS</h1>
          <Hr/>
          <DivText>
            <h1>ABOUT SEEDRA</h1>
          </DivText>
          <Hr/>
          <DivOurBloc>
            <h1>OUR BLOG</h1>
          </DivOurBloc>
          <div>
            <img src={imgSidra} />
          </div>
          <DivTerms>
            <h2>Terms&Conditions</h2>
          </DivTerms>
          <Hr/>
          <DivPivacy>
            <h2>Privacy Policy</h2>
          </DivPivacy>
      </DivALLProductc>
          <DivLiny></DivLiny>
          <DivImgfeizbuk>
            <DivFeizbuk>
              <img src={imginistagrm}/>
              <img src={imgfizbuk}/>
            </DivFeizbuk>
              <h2>All rights reserved</h2>
          </DivImgfeizbuk>
    </Container>
  )
}

export default Footer

const DivALLProductc = styled.div`
height: 172px;
 color: #359740;
 display:flex;
 align-items: center;
 margin-top: 50px;
 justify-content: space-between;
 gap:30px
 
`

const DivText =  styled.div`
  color:#70737C;
  
`
const DivOurBloc = styled.div`
  color: #70737C;
`
const DivTerms = styled.div`
  color: #70737C;
`
const DivPivacy = styled.div`
  color: #70737C;
`
const DivLiny = styled.div`
  border: 1px solid;
  height: 0px;
  color: #359740;
`
const DivImgfeizbuk = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  color: #70737C;

`
const DivFeizbuk = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`