import React from 'react'
import "./styleSheet.css"
import Image from "../img/pain.PNG"





function Menu() {
    return (
        <div className='dov'>
            <h1 className='primary'>Mohamed Firas Bechedli</h1>
            <img src={Image} className='img' />
            <br/>
            <div>
            <img src="/twoo/magic.jpg" className='img' />
            </div>
            <div>
                <video src="/two/publicité.mp4" className='img' />
            </div>
            

            
        </div>
    )
}

export default Menu
