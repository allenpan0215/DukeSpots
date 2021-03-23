import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these great destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='The Fitzpatrick Center'
              path='/The-Fitzpatrick-Center'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Fleishman Common at the Sanford School of Public Policy'
              path='/Fleishman-Common'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lilly Library'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Von der Heyden Pavilion'
              path='/products'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='The Edge at Bostock Lib'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
