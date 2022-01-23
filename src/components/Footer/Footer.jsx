import './Footer.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const socialsIcon = [
  {
    type: 'fab',
    name: 'facebook-f'
  },
  {
    type: 'fab',
    name: 'google-plus-g'
  },
  {
    type: 'fab',
    name: 'twitter'
  },
  {
    type: 'fab',
    name: 'dribbble'
  },
]

const footerData = [
  {
    title: 'Product',
    list: [
      'Careere',
      'About Us',
      'Insights',
      'PCI Compliance',
      'Integratlons',
      'Pricing'
    ]
  },
  {
    title: 'Service',
    list: [
      'Docs',
      'Knowledge Base',
      'System Status',
      'Tutorials',
      'Security'
    ]
  },
  {
    title: 'FAQ',
    list: [
      'About',
      'Leadership',
      'Press/News',
      'Careers/Team',
      'Contact Us'
    ]
  }
]

function Footer(){
  return<>
          <footer className="footer grid wide">
            <div className="row">
              <div className="col l-5 m-5 c-12">
                <div className="footerLeft">
                  <h3>MidBank</h3>
                  <p className="greyText">We operate our banking services in many countries around the world.</p>
                  <div className="icons">
                    {
                      socialsIcon.map((e,index)=>{
                        return<div className="icon" key={index}>
                                <FontAwesomeIcon icon={[`${e.type}`,`${e.name}`]}/>
                              </div>
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="col l-7 m-7 c-12">
                <div className="footerRight">
                  <div className="row">
                    {
                      footerData.map(e=>{
                        return<div key={e.title} className="list col l-4 m-4 c-4">
                                <div className="title">{e.title}</div>
                                <ul>
                                  {
                                    e.list.map(i=>{
                                      return<li key={i}><a href="" className="greyText">{i}</a></li>
                                    })
                                  }
                                </ul>
                              </div>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="noCopyright grid">
            <div className="row">
              <div className="col l-6 m-6 c-12">
                <span>© 2021 MidBank Mobile Banking I All Rights Reserved</span>
              </div>
              <div className="col l-6 m-6 c-0">
                <div>
                  <span>Platform</span>
                  <span>Products</span>
                  <span>Resources</span>
                </div>
              </div>
            </div>
          </div>
  </>
}

export default Footer