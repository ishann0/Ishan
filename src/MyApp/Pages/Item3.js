import React from 'react'
import YamanLogo from '../assests/images/Image3.png'
import '../assests/CSS/Posts.css'

const Item3 = () => {
    const width = '150px';
  return (
    <div className='container'>
        <div className='head-m'>
        <div className='Image'>
<img src={YamanLogo}
width= {width}
/>
</div>
    <h1>Yaman Sharma</h1>  

    </div>
    </div>
  )
}

export default Item3
