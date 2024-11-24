import EmployeeImg from '../assets/images/employeeimg.png';
function EmployeeIndexbanner() {
  return (
    <>
      <div className='emp-banner-box'>
        <div className='emp-banner-container'>
            <div className='emp-grid-box'>
                {/* grid column */}
                <div className='emp-grid-item emp-txt-grid-item'>
                    <div className='emp-ban-text'>
                        <h2>Let’s Get
                        </h2>
                        <span>Sterted</span>
                        <p>Multi-service apps can be more valuable to security
                             breaches than single-service apps 
                             because of the multiple entry points for attackers</p>
                    </div>
                    <button className='account-btn'><span>Create Account</span>  <i className="material-icons">arrow_forward</i></button>
                </div>
                 {/* grid column */}
                <div className='emp-grid-item' style={{ justifyContent:'end' }}>
                    <img src={EmployeeImg} alt='employee img' />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeIndexbanner
