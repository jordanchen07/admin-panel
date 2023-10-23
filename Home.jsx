import React from 'react'
import 
{BsFillBellFill}from 'react-icons/bs' 
import { IoEyeSharp} from 'react-icons/io5'
import {GrUpdate} from 'react-icons/gr'
import {AiFillDelete} from 'react-icons/ai'

function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>VIEW</h3>
                    <IoEyeSharp className='card_icon'/>
                </div>
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>UPDATE</h3>
                    <GrUpdate className='card_icon'/>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DELETE</h3>
                    <AiFillDelete className='card_icon'/>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                
            </div>
        </div>

       
    </main>
  )
}

export default Home
