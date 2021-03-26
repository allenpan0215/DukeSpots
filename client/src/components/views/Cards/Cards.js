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
              src='/images/FCIEMAS.jpg'
              text='Fitzpatrick CIEMAS'
              path='/The-Fitzpatrick-Center'
            />
            <CardItem
              src='/images/Fleishman.jpg'
              text='Fleishman Common at the Sanford School of Public Policy'
              path='/Fleishman-Common'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Lilly.jpg'
              text='Lilly Library'
              path='/Lilly-Library'
            />
            <CardItem
              src='/images/VonderHeyden.jpg'
              text='Von der Heyden Pavilion'
              path='/Von-der-Heyden'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='/images/TheEdge.jpg'
              text='The Edge at Bostock Library'
              path='/Bostock'
            />
             <CardItem
              src='/images/Perkins.jpg'
              text='Perkins Library'
              path='/Perkins'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Keohane.jpg'
              text='Keohane Atrium'
              path='/Keohane-Atrium'
            />
             <CardItem
              src='/images/grainger.jpg'
              text='Grainger Hall at The Nicholas School for the Environment'
              path='/Grainger-Hall'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Wilkinson.jpg'
              text='Wilkinson Building'
              path='/Wilkinson'
            />
             <CardItem
              src='/images/colab.jpg'
              text='Innovation Co-Lab Studio at TEC'
              path='/Innovation-CoLab'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Rubenstein.jpg'
              text='Rubenstein Library'
              path='/Rubenstein'
            />
             <CardItem
              src='/images/Ruby.jpg'
              text='The Ruby'
              path='/Ruby'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/InstituteBrain.jpg'
              text='Institute for Brain Science'
              path='/Institute-for-Brain-Science'
            />
             <CardItem
              src='/images/Edens.jpg'
              text='Edens 1C'
              path='/Edens'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/McClendon.png'
              text='McClendon Tower'
              path='/McClendon'
            />
             <CardItem
              src='/images/GrossHall.jpg'
              text='Gross Hall'
              path='/Gross-Hall'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/FFSC.jpg'
              text='French Family Science Center'
              path='/FFSC'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
