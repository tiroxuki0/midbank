import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Home.scss'
import {masterCard} from '../../assets'
import VanillaTilt from 'vanilla-tilt';
import {useEffect} from 'react'

function Home(){

  useEffect(()=>{
    VanillaTilt.init(document.querySelector("#masterCard"), {
      max: 25,
      speed: 400
    });
  },[])

  return<section className="home grid wide">
    <div className="spotlight"></div>
    <div className="row">
      <div className="col l-6 m-6 c-12">
        <div className="image">
          <div id="masterCard">
            <img src={masterCard} alt="" />
          </div>
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          
        </div>
      </div>
      <div className="col l-6 m-6 c-12">
        <div className="content">
          <h3 className="heading">Stronger Banking,
Greater Service</h3>
          <p className="greyText">Get the most accurate market data, alerts, conversions, tools and more — all within the same app.</p>
          <div className="buttons">
            <button className="button">
              <span>Start Transaction</span>
            </button>
            <button className="button">
              <FontAwesomeIcon icon="arrow-alt-circle-down" />
              <span>Download App</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Home