import './Letter.scss'

function Letter(){
  return<section className="letter grid wide">
    <div className="row">
      <div className="col l-12 m-12 c-12">
        <div className="letterInner">
          <h3 className="heading">Subscribe Newsletter</h3>
          <p className="greyText">We operate our banking services in many countries around the world.</p>
          <form action="" className="formLetter">
            <div className="inputWrapper">
              <div className="inputMask"></div>
              <input type="text" 
                    name="email" 
                    className="formInput"
                    placeholder="Enter your email"
              />
            </div>
            <button className="button">Get started</button>
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default Letter