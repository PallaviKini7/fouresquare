import React, { useState } from 'react'
import '../header/header.css'
import axios from 'axios';

function Header(props:any) {
  // const axios = require('axios');
  const [search, setsearch] = useState('')
  const [response, setresponse] = useState('')
  let cityName: any
  function getCityName(e: any) {
    e.preventDefault()
    console.log(search);

    axios.get(`http://api.positionstack.com/v1/forward?access_key=186301f635e7f6052d50c96378c7c260&query=${search}`)
      .then((resp: any) => {

        console.log(resp.data);
        setresponse(resp.data)
      });
  }

  function handleOnchange(e: any) {
    setsearch(e.target.value)
  }
  return (
    <div className='header-rect'>
      <img src={require('../../asset/image/logo (1).png')} alt="" className='logo-img' />
      <div className='search-box'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <form onSubmit={getCityName}>
          <input type="text" className='search' placeholder='Search' value={search} onChange={handleOnchange} />
        </form>



      </div>
    </div>
  )
}

export default Header