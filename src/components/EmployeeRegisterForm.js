import React from 'react';
import EmpRegImg from '../assets/images/empregisterimg.png';
function EmployeeRegisterForm() {
  return (
    <>
      <div className="emp-register-container">
        <div className="emp-register-box">
          <div className="emp-reg-grid-box">
            <div className="emp-reg-grid-item emp-reg-grid-item-img">
            
              <img src={EmpRegImg} alt="Employee" className="emp-sticky-img" />
             
            </div>
            <div className="emp-reg-grid-item emp-reg-grid-item-form">
              <div className="emp-reg-form-box">
                <h2 className="emp-reg-form-head">Register Now</h2>
                <form className="emp-reg-form">
                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Name</label>
                        <input type="text" placeholder="Enter name" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Mobile number</label>
                        <input type="text" placeholder="+91 95*****132" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                  </div>
                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Email</label>
                        <input type="email" placeholder="Enter email" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Password</label>
                        <input type="password" placeholder="Enter password" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Email</label>
                        <input type="email" placeholder="Enter email" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Password</label>
                        <input type="password" placeholder="Enter password" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Email</label>
                        <input type="email" placeholder="Enter email" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Password</label>
                        <input type="password" placeholder="Enter password" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Email</label>
                        <input type="email" placeholder="Enter email" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Password</label>
                        <input type="password" placeholder="Enter password" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                  </div>


                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Email</label>
                        <input type="email" placeholder="Enter email" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Password</label>
                        <input type="password" placeholder="Enter password" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                  </div>

                  <div className="emp-row">
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Email</label>
                        <input type="email" placeholder="Enter email" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                    <div className="emp-col">
                      <div className="emp-form-control">
                        <label className="emp-label">Password</label>
                        <input type="password" placeholder="Enter password" className="emp-input-field" />
                        <p className="emp-error">Error</p>
                      </div>
                    </div>
                  </div>
                  <div className="emp-link-box">
                    <label className="emp-checkbox-label">
                    <input type="checkbox" className="emp-custom-checkbox" />
                     <p>Once verified by admin only you can access this employee login</p>
                    </label>
                  </div>
                  <div className="emp-submit-box">
                    <button type="submit" className="emp-sign-up-btn">Sign up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeRegisterForm;
