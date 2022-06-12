import React from 'react'
import MyLogo from './MyLogo.png'
import './Home.css'
export default function Home() {
  return (
    <>
      <div className="container HomeContainer">
        <div className="row">
        <div className="col-lg-6 col-md-6 HomeDiv1 ">
          <img src={MyLogo} className='HomeImg' width="300" height="300" />
        </div>
        <div className="col-lg-6 col-md-6 AboutPage">
          <h3>ABOUT US </h3>
          <p>OM GEMS AND JEWELLERS is a company that imports and exports "High Quality Natural Sapphires" as well as other precious and semi-precious gems. At OGJ, we endeavour to offer you the most comprehensive selection of Gemstones that are astrologically required to wear. We don't simply offer gemstones; we provide an unrivalled gemstone buying experience right at your fingertips! </p>
          <p>
            OGJ serves the expanding demands of today's always-on-the-go consumers to discover, explore, buy, and know more about their Gemstones, with a youthful workforce focused on innovation, customer pleasure, and transparency. Effortless returns, free shipping, BIS Hallmark, 100 percent certified gemstones, best and honest rates, and distinctive designs are all available through our policies.
          </p>
          <p>
            Considering gemstones, then explore OM GEMS AND JEWELLERS !
          </p>
        </div>
        </div>
        </div>
      </>
      )
}
