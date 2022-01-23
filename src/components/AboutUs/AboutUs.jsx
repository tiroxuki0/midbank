import './AboutUs.scss'
import {card} from '../../assets'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const circleIcons = [
  {
    circleId: 1,
    icons: []
  },
  {
    circleId: 2,
    icons: [
      {
        type: 'fal',
        name: 'university'
      },
      {
        type: 'fal',
        name: 'lock'
      },
      {
        type: 'fal',
        name: 'credit-card'
      },
    ]
  },
  {
    circleId: 3,
    icons: [
      {
        type: 'fal',
        name: 'shopping-cart'
      },
      {
        type: 'fal',
        name: 'mobile'
      },
      {
        type: 'fal',
        name: 'chart-bar'
      },
    ]
  },
]

const aboutAPI = {
  title: 'about us',
  heading: 'Wanna know About MidBank Mobile Banking',
  desc: [
    'We operate our banking services in many countries around the world.',
    'Mobile banking is the act of making financial Money transactions on a mobile device (cell phone, tablet, etc.).',
    'This activity can be as simple as a bank sending fraud or usage activity to a client’s cell phone or as complex as a clientpaying bills or sending money abroad.',
  ]
}

function AboutUs(){
  return<section className="aboutUs grid wide">
    <div className="row">
      <div className="col l-6 m-6 c-12">
        <div className="image">
          <img src={card} alt="" />
          <div className="circleLayers">
            {
              circleIcons.map(e=>{
                return<div key={e.circleId} className="circle">
                          {
                            e.icons.map(i=>{
                              return<div key={i.name} className="icon">
                                      <FontAwesomeIcon icon={i.type == 'fab' ? [`${i.type}`,`${i.name}`] : `${i.name}`}/>
                                    </div>
                            })
                          }
                      </div>
              })
            }
          </div>
        </div>
      </div>
      <div className="col l-6 m-6 c-12">
        <div className="content">
          <span>{aboutAPI.title}</span>
          <h3 className="heading">{aboutAPI.heading}</h3>
          <div className="desc greyText">
            {
              aboutAPI.desc.map((e,index)=>{
                return<p key={index}>{e}</p>
              })
            }
          </div>
          <span className="more">
            learn more
          </span>
        </div>
      </div>
    </div>
  </section>
}

export default AboutUs