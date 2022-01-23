import './CTA.scss'
import {CTA} from '../../assets'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ctaHeading = {
  title: '',
  heading: 'Secure way to Buy and Sell from Your Mobile App',
  text: ' Gemini is a licensed New York trust company that mnday underregular bank exams and is subject to the cybersecurity audits conducted by the New York.',
}

function CTASection(){
  return<section className="cta grid wide">
    <div className="spotlight"></div>
    <div className="row">
      <div className="col l-6 m-6 c-12">
        <div className="content">
          <div className="contentInner">
            <h3 className="heading">
              {ctaHeading.heading}
            </h3>
            <p className="greyText">
              {ctaHeading.text}
            </p>
            <div className="buttons">
              <div className="button1Wrapper">
                <div className="button1Mask"></div>
                <button className="button1">
                  <FontAwesomeIcon icon={['fab','app-store-ios']}/>
                  <span>App Store</span>
                </button>
              </div>
              <button className="button2">
                <FontAwesomeIcon icon={['fab','google-play']}/>
                <span>Play Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col l-6 m-6 c-12">
        <div className="image">
          <img src={CTA} alt="" />
        </div>
      </div>
    </div>
  </section>
}

export default CTASection