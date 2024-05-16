import React from 'react'
import carousel from '../../assets/Abdurahman/svg/carousel.svg'
import Container from '../../helpers/Container'
import firePro from '../../assets/Abdurahman/svg/firePro.svg'
import carousel2 from '../../assets/Abdurahman/svg/carousel2.svg'

function Fire() {
  return (
    <div>
        <Container>
            <div
            className="bg-cover bg-center h-[455px] w-full mt-8 relative py-12 px-[76px]"
            style={{ backgroundImage: `url(${carousel})` }}
            >
                <div className='absolute w-[650px] h-[355px] flex flex-col gap-6'>
                    <h1 className='text-[#1F2533] font-lexend text-4xl font-semibold'>SEEDRA Basil Seeds for Indoor <br/> and Outdoor Planting</h1>
                    <p>Be sure of our quality - the freshest batches of this season. Non-GMO,<br/> Heirloom - our seeds were tested and have the best germination ratings.<br/> Your easy growing experience is our guarantee</p>
                    <div className='flex items-center gap-6'>
                        <img src={firePro}/>
                        <p className='text-[#1F2533] text-4xl font-semibold'>$12.56</p>
                        <p className='text-gray-500 text-xl font-semibold'>$15.56</p>
                    </div>
                    <div className='flex gap-3'>
                        <button className='w-[153px] h-[51px] bg-[rgb(53,151,64)] text-white rounded-md'>Add to card</button>
                        <button className='w-[153px] h-[51px] bg-slate-50 text-[rgb(53,151,64)] rounded-md'>Discover</button>
                    </div>
                </div>
            </div> 
            <div className='bg-cover bg-center w-full h-[104px] flex flex-col mt-4 justify-center items-center rounded-lg' style={{backgroundImage: `url(${carousel2})`}}>
                <p className='text-[#1F2533] text-2xl font-semibold'>We sell seeds </p>
                <p className='text-[#1F2533] text-xs font-semibold'>that always sprout and gardening supplies which never break</p>
            </div>
        </Container>
    </div>
  )
}

export default Fire