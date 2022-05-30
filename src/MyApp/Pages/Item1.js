import React from 'react';
import MohitLogo from '../assests/images/Image1.png'
import '../assests/CSS/Posts.css'
const Item1 = () => {
    const width='100px'
  return (
    <div className='container'>
        <div className='head-m'>
        <div className='Image'>
<img src={MohitLogo}
width= {width}
/>
</div>
    <h1>Mohit Walia</h1>  

    </div>
    </div>
  )
}

export default Item1
