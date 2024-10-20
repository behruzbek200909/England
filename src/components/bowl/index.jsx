import React from 'react'
import girl from "../../assets/img/girl.jpg"
import "./bowl.css"

export const Bowl = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="bloger">
          <div className="bloger-com">
            <h2 className="made">Erika's attitude towards England</h2>
            <p className="made-chine">
              my name is erika I am 15 years old i am german I study at the
              University of Cambridge I like to read books about love in my
              spare time I study. My favorite season is spring. I live in London
              for a year. I have a cat. I live in a guest room. My favorite
              color is pink. I like sushi London has yoga and night clubs,
              London is the city of love, London is the city of old friends
              London has yoga and night clubs, London is the city of love When I
              came to London, I was surprised to see the beauty of London I
              actually went to the London subway and I arrived in the subway I
              rested there and continued on my way. Agatha Christie Poirot's
              work written about London, the film, the crime, the crime, the
              desire to find the killer, looking at the small details, London is
              a city that has preserved its beauty and greatness.
            </p>
          </div>
          <img src={girl} alt="" className="cln" />
        </div>
      </div>
    </section>
  );
}
