import React from 'react';
import email from '../assets/email.svg';

const Sigin = () =>   
{
    return(
        < >
        <div className="sigin">
        <div className="sigin-info">
          <div className="sigin-title">Sign Up to Our Newsletter</div>
          <div className="sigin-paragrf mt-1 mb-4"> Yours could be one of them. </div>
          <div className="input-title">
            
            <div className="sigin-input">
                <div className="sigin-imges">
                    <img src={email} alt="sigin-img" />
                </div>
                <input
                    type="input"
                    placeholder=" Enter Your Email"
                    className="sigin-inputs "
                />
                <div className="sigin-Btns">
                    <button className="sigin-Btn">Send</button>
                </div>
            </div>
            
           
          </div>
        </div>
      </div>
         </>
    );
};

export default Sigin;
