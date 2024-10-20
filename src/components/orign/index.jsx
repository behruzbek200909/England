import React from 'react'
import "./orign.css"
import flag from "../../assets/img/flag.jpg"
import good from "../../assets/img/good.svg"
import boll from "../../assets/img/boll.svg"
import wine from "../../assets/img/wine.svg"

export const Orign = () => {
    return (
      <>
        <section className="orign">
          <div className="container">
            <div className="orign-spaces">
              <div className="orign-spaces-prettier">
                <img
                  src={flag}
                  alt=""
                  className="flag"
                  width={30}
                  height={30}
                />
                <h2 className="foto">England</h2>
              </div>
              <div className="compas">
                <ul className="redmi">
                  <li className="redmi-com">
                    <a href="#" className="redmi-com-old">
                      Home
                    </a>
                  </li>
                  <li className="redmi-com">
                    <a href="#" className="redmi-com-old">
                      About Us
                    </a>
                  </li>
                  <li className="redmi-com">
                    <a href="#" className="redmi-com-old">
                      Pricing
                    </a>
                  </li>
                  <li className="redmi-com">
                    <a href="#" className="redmi-com-old">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
              <div className="vivaldi">
                <img src={boll} alt="" className="boll" />
                <img src={wine} alt="" className="wine" />
                <img src={good} alt="" className="good" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
