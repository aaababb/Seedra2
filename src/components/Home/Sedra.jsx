import React from 'react'
import { styled } from 'styled-components'
import pomidorPhoto from '../../assets/turdalu/pomidor-1.svg'

function Sedra() {
  return (
    <div>
        <ContainerProduct>
            <div>
                <DivSedor>
                    <h1>Seedra helps to grow fast and efficiant</h1>
                </DivSedor>
                <ProgrfTaxt>
                    <p>
                    SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                    </p>
                </ProgrfTaxt>
                <DivText>
                    <p>
                    Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. 
                    </p>
                </DivText>
                <DivYurText>
                    <p>
                    Your easy growing experience is our guarantee
                    Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more
                    </p>
                </DivYurText>
                <DivTextPomidorik>
                    <p>
                    Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product
                    </p>
                </DivTextPomidorik>
            </div>
            <div>
                <img src={pomidorPhoto}/>
            </div>
            
        </ContainerProduct>
    </div>
  )
}

export default Sedra

const ContainerProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    

`
const DivSedor = styled.div`
    width: 500px;
    height: 108px;
    color: rgb(31, 37, 51);
    font-family: Lexend;
    font-size: 30px;
    font-weight: 600;

`
const ProgrfTaxt = styled.p`
    width: 521px;
    color: rgb(31, 37, 51);
    font-size: 16px;
    font-weight: 300;

`
const DivText = styled.p`
    width: 521px;
    color: rgb(31, 37, 51);
    font-size: 16px;
    font-weight: 300;
    margin-top: 20px;

`
const DivYurText = styled.p`
    width: 521px;
    color: rgb(31, 37, 51);
    font-size: 16px;
    font-weight: 300;
    margin-top: 20px;
`
const DivTextPomidorik = styled.p`
    width: 521px;
    color: rgb(31, 37, 51);
    font-size: 16px;
    font-weight: 300;
    margin-top: 20px;
`