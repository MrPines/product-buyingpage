import React from 'react'
import './ProductPage.css'
import { assets } from '../../assets/assets'
import Input from '../input/Input'
import Colorb from '../colorb/colorb'
import Counter from '../counter/counter'

export default function ProductPage() {
  return (
    <div className="product-container">
    <div className='product-display'>
      <div className='product-display-left'>
        <div className='product-display-img-list'>
          <img src={assets.shirt_1} alt="" />
          <img src={assets.shirt_2} alt="" />
          <img src={assets.shirt_3} alt="" />
        </div>

        <div className='product-display-img'>
            <img className='product-display-main-img' src={assets.shirt_1} alt="" />
        </div>
      </div>
        <div className='product-display-right'>
            <h1>Mountaineering Jacket</h1>
            <div className='product-display-right-stars'>
                <img src={assets.stars} alt="" />
                <p>5/5</p>
            </div>

            <div className='product-display-right-prices'>
              <p className="product-display-right-price-old">$250</p>
              <p className="product-display-right-price-new">$200</p>
              <div className='product-display-right-discount'><p>-40%</p></div>
            </div>

            <div className="product-display-right-desc">
              This detailed Jacket which is perfect for any occasion.Crafted from high quality cloth. Offers superior comfort and styles.
            </div>

            <span className='line'></span>

            <div className='product-display-right-colors'>
            <p>Select Color</p>
             <Colorb></Colorb>
            </div>

            <span className='line'></span>

            <div className="product-display-right-size">
              <p>Choose Size</p>
              <Input></Input>
            </div>

            <span className='line'></span>

            <div className='cart'>
               <Counter></Counter>

               <button className='add'>Add To Cart</button>
            </div>
        </div>
    </div>
    </div>
  )
}
