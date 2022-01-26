import './Header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import SignUp from '../SignUp/SignUp'

const menuData = [
  {
    id: 'signIn',
    name: "Sign in",
  },
  {
    id: 'product',
    name: "Product",
  },
  {
    id: 'about',
    name: "About",
  },
  {
    id: 'faq',
    name: "FAQ",
  },
  {
    id: 'service',
    name: "Service",
  },
  {
    id: 'blog',
    name: "Blog",
  }
]

function Header(){
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)
  const [bars, setBars] = useState(true)
  const [callSignUp, setCallSignUp] = useState(0)
  useEffect(()=>{
    $$('.headerMenu a')[1].classList.add('active')

    const handleScroll = () =>{
      if(window.scrollY >= 50){
        $('.header').classList.add('fixed')
      }else{
        $('.header').classList.remove('fixed')
      }
    }

    window.addEventListener('scroll',handleScroll)
    return () =>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  function removeActive(){
    const menuItems = Array.from($$('.headerMenu a'))
    menuItems.forEach(e=>{
      const classL = Array.from(e.classList)
      if(classL.includes('active')){
        e.classList.remove('active')
      } 
    })
  }

  const handleClick = (e)=>{
    e.preventDefault()

    removeActive()
    e.target.classList.add('active')
    if(e.target.innerText === 'Sign in'){
      setCallSignUp(callSignUp + 1)
    }
  }

  const handleBars = () => {
    const headerMenuWrapper = $('.headerMenuWrapper')
    headerMenuWrapper.classList.toggle('active')  
    setBars(!bars)  
  }
  return<>
  <SignUp callSignUp={callSignUp} />
  <header className="header grid wide">
    <div className="row">
      <div className="planet"></div>
      <div className="col l-2 m-2 c-2">
        <div className="logo">
          <h3>MidBank</h3>
        </div>
      </div>
      <div className="headerMenuWrapper col l-6 l-o-1 m-7 c-0">
        <div className="headerMenu">
          <div className="bars"
              onClick={handleBars}
          >
            {
              bars && <FontAwesomeIcon icon="bars" />
              || <FontAwesomeIcon icon="times" />
            }
          </div>
          <ul>
            {
              menuData.map(i=>{
                return<li key={i.id}>
                        <a href={i.id}
                          onClick={e=>handleClick(e)}
                        >{i.name}</a>
                      </li>
              })
            }
          </ul>
        </div>
      </div>
      <div className="signIn  col l-3 m-3 c-3">
        <button id="signIn" className="button"
                onClick={()=>setCallSignUp(callSignUp+1)}
        >
          <span>Sign in</span>
          <div className="arrowRight">
            <FontAwesomeIcon icon='long-arrow-alt-right' />
          </div>
        </button>
      </div>
    </div>
  </header>
  </>
}

export default Header
