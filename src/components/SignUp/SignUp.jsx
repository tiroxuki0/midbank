import './SignUp.scss'
import {apple, facebook, google} from './images'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useState, useEffect, useRef, memo} from 'react'
import Validator  from './Validator'
import clsx from 'clsx'

const listUser = [
  {
    id:1,
    username: 'minhhuy',
    password:'123456'
  },
  {
    id:2,
    username: 'tiroxuki0',
    password:'456326545xx'
  },
  {
    id:3,
    username: 'citythree.11798',
    password:'123456789'
  }
]

function SignUp({callSignUp}){
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)
  const [showP, setShowP] = useState(false)
  const [messages, setMessages] = useState([])
  const formRef = useRef()
  useEffect(()=>{
        if(callSignUp !== 0){
          formRef.current.style.opacity = 1
          formRef.current.style.visibility = 'visible'
        }
  },[callSignUp])

  useEffect(()=>{
      Validator('#formSignUp')

        formRef.current.onclick = (e)=>{
          const target = e.target
          if(target === formRef.current){
            formRef.current.style.opacity = 0
            formRef.current.style.visibility = 'hidden'
          }
        }
        
        $('.close').onclick = ()=>{
          formRef.current.style.opacity = 0
          formRef.current.style.visibility = 'hidden'
        }

        $('.submit').onclick = (e)=>{
          e.preventDefault()
        }

  },[])

  useEffect(()=>{
    const messageElements = $$('.messages')
    const messageElementsLength = messageElements.length
    if(messageElementsLength > 0){
      messageElements.forEach(e=>{
        setTimeout(() => {
          e.remove()
        }, 3500);
      })
    }
  },[messages])


  const handleSubmit = () =>{
    const usernameInput = $(`input[name="username"]`).value
    const passwordInput = $(`input[name="password"]`).value 
    if(usernameInput && passwordInput){
      const isValid = listUser.some((user)=>{
        return usernameInput == user.username && passwordInput == user.password
      })
      const notValidUsername = listUser.some((user)=>{
        return usernameInput == user.username
      })
      const notValidPassword = listUser.some((user)=>{
        return passwordInput == user.password
      })
      if(!isValid){
        if(!notValidUsername){
          setMessages(prev => [...prev, {type: 'error', value:'Not valid username'}])
        }else{
          setMessages(prev => [...prev, {type: 'error', value:'Not valid password'}])
        }
      }else{
        setMessages(prev => [...prev, {type: 'valid', value:'Login success'}])
      }
    }
  }

  const handleShowPassword = () =>{
    setShowP(!showP)
    if(!showP){
      $(`input[name="password"]`).type = 'text'
    }else{
      $(`input[name="password"]`).type = 'password'
    }
  }

  return<>
    <div className="boxMessages">
        {
          messages.map((message,index)=>{
            return<div key={index} className={clsx('messages', `${message.type}Message`)}>
                      <div className={clsx('icons', `${message.type}Icon`)}></div>
                      <div className="message">
                        {message.value}
                      </div>
                  </div>
          })
        }
    </div>
    <div className="form" ref={formRef}>
      <form id="formSignUp">
        <div className="close">
          <div></div>
          <div></div>
        </div>
        <h2>Hello Again!</h2>
        <p>Wellcome back you've been missed!</p>
        <div className="formGroup">
            <input type="text"
                    id="username" 
                    name="username" 
                    className="formInput" 
                    placeholder="Enter username"
                    rules='required'
                    />
            <span className="formMessage"></span>
        </div>
        <div className="formGroup">
            <input type="password" 
                    id="password" 
                    name="password" 
                    className="formInput" 
                    placeholder="Password"
                    rules='required'
            />
            <div className="showPassword" onClick={handleShowPassword}>
              {!showP && <FontAwesomeIcon icon='eye'/> || <FontAwesomeIcon icon='eye-slash'/>}
            </div>
            <span className="formMessage"></span>
        </div>
        <div className="recoveryPassword">
            <span>Recoverry Password</span>
        </div>
        <div className="submit">
          <input type="submit" 
                value="Sign In"
                onClick={handleSubmit}
          />
        </div>
        <div className="signInWithOther">
          <span>Or continue with</span>
        </div>
        <div className="socials">
          <div className="socialsIcon">
            <img src={google.default}/>
          </div>
          <div className="socialsIcon">
            <img src={apple.default}/>
          </div>
          <div className="socialsIcon">
            <img src={facebook.default}/>
          </div>
        </div>
        <div className="regiser">
          <p>Not a member?<span>Regiser Now</span></p>
        </div>
      </form> 
    </div>
  </>
}

export default memo(SignUp)