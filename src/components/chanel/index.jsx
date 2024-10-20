import React from 'react'
import booy from "../../assets/img/booy.jpg"
import "./chanel.css"

export const Chanel = () => {
  return (
    <>
    <section className="bleu">
      <div className="container">
        <div className="bleu-park">
          <img src={booy} alt="" className="site" />
          <div className="blue-park-clean">
            <h2 className="coffee">Maykl impressions of England</h2>
            <p className="coffee-market">
              my name is michael i am 15 years old I'm from Mexico I took IETS
              in England oxford I entered the university I found my happiness in
              England and my love I have a daughter, my daughter's name Erika is
              from Germany He also came to England to study, he studies at the
              University of Cambridge i Queen Elizabeth in the City of London ||
              i saw I saw Big Ben and the Bookmakers Palace in London. In
              London, coffee and a burger costs UAH 160, bread costs UAH 90, and
              lemon water costs UAH 40.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
