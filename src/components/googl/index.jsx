import React from 'react'
import  computer from "../../assets/img/computer.webp"
import pen from "../../assets/img/pen.webp"
import laptop from "../../assets/img/laptop.jpg"
import "./googl.css"

export const Googl = () => {
  return (
    <>
      <section className="googl">
        <div className="container">
          <div className="googl-node">
            <h2 className="arsenal">computer work in Anlya</h2>
                <div className="mack"></div>
                </div>
            <div className="boat-done-app">
              <div className="boat-done-app-park">
                <img src={computer} alt="" className="stick" />
                <h3 className="strong">Best job ever</h3>
                <p className="long">
                  If you know web programming or understand computers, you can
                  easily get a job as a buyer. Your monthly salary depends on
                  your work, at least $150 per month. abet wati deserim hours
                  will last you will be served cake and coffee for lunch.
                </p>
              </div>
              <div className="boat-done-app-park">
                <img src={pen} alt="" className="stick" />
                <h3 className="strong">Exclusive benefits</h3>
                <p className="long">
                  If you know web programming or understand computers, you can
                  easily get a job as a buyer. Your monthly salary depends on
                  your work, at least $150 per month. abet wati deserim hours
                  will last you will be served cake and coffee for lunch.
                </p>
              </div>
              <div className="boat-done-app-park">
                <img src={laptop} alt="" className="river" />
                <h3 className="strong">unlimited mobile</h3>
                <p className="long">
                  If you know web programming or understand computers, you can
                  easily get a job as a buyer. Your monthly salary depends on
                  your work, at least $150 per month. abet wati deserim hours
                  will last you will be served cake and coffee for lunch.
                </p>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
