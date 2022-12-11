import React, { useState } from 'react';
import './Intro.scss';
import Star from "../assest/img/Star.png"
import Product1 from "../assest/img/product1.png"
import Product2 from "../assest/img/product2.png"
import Product3 from "../assest/img/product3.png"
import Product4 from "../assest/img/product4.png"

function Intro() {
    const numb = JSON.parse(localStorage.getItem('count'))
    const wis = JSON.parse(localStorage.getItem('wish'))
    const [count, setCount] = useState(numb)
    const [wish, setWish] = useState(wis)
    const [img, setImg] = useState(0)
    window.localStorage.setItem("count", JSON.stringify(count))
    window.localStorage.setItem("wish", JSON.stringify(wish))
    console.log(numb);
  return (
    <section className='intro'>
        <div className="container">
            <div className="left">
                <ul className='left__list'>
                    <li className='left__list__items'><button onClick={()=> setImg(img == 0 ? img + 1:img == 1 ?img + 0:img == 2 ? img - 1 : img == 3 ? img - 2:img == 4? img - 3:img)}><img src={Product1} alt=""/></button></li>
                    <li className='left__list__items'><button onClick={()=> setImg(img == 0 ? img + 2:img == 1 ?img + 1:img == 2 ? img + 0 : img == 3 ? img - 1:img == 4? img - 2:img)}><img src={Product2} alt=""/></button></li>
                    <li className='left__list__items'><button onClick={()=> setImg(img == 0 ? img + 3:img == 1 ?img + 2:img == 2 ? img + 1 : img == 3 ? img + 0:img == 4? img - 1:img)}><img src={Product3} alt=""/></button></li>
                    <li className='left__list__items'><button onClick={()=> setImg(img == 0 ? img + 4:img == 1 ?img + 3:img == 2 ? img + 2 : img == 3 ? img + 1:img == 4? img - 0:img)}><img src={Product4} alt=""/></button></li>
                </ul>
                {img == 1 ? <img className='left__img' src={Product1} alt="" />:img == 2 ? <img className='left__img' src={Product2} alt="" />:img == 3 ? <img className='left__img' src={Product3} alt="" />:<img className='left__img' src={Product4} alt="" />}
                
            </div>
            <div className="right">
                {img == 1 ? <h1 className='right__name'>Hal Earrings</h1> : img  == 2 ? <h1 className='right__name'>Kaede Hair Pin Set Of 3</h1> : img == 3 ? <h1 className='right__name'>Hair Pin Set of 3</h1> : <h1 className='right__name'>Plaine Necklace</h1>}
                {img == 1 ? <p className='right__price'>$ 25,00</p> : img  == 2 ? <p className='right__price'>$ 30,00</p> : img == 3 ? <p className='right__price'>$ 35,00</p> : <p className='right__price'>$ 19,00</p>}
                <img className='right__star' src={Star} alt="" />
                <p className='right__discriptions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
                <ul className='right__list'>
                    <li className='right__list__item'>
                        <ul className='right__list__item__count'>
                            <li className='right__list__item__count__elements'><button onClick={()=> setCount(count > 0 ? count - 1 : count)}>-</button></li>
                            <li className='right__list__item__count__elements'>{numb}</li>
                            <li className='right__list__item__count__elements'><button onClick={()=> setCount(count + 1)}>+</button></li>
                        </ul>
                    </li>
                    <li className='right__list__items'><button>ADD TO CART</button></li>
                </ul>
                <ul className='right__icon__list'>
                    <ul className='wis' onClick={()=> setWish(!wish)}>
                        {wish ? <li className='right__icon__list__item red'><button><i className="bi bi-heart-fill"></i></button></li>:<li className='right__icon__list__item'><button><i class="bi bi-heart"></i></button></li>}
                    </ul>
                    <li className='right__icon__list__item q'>|</li>
                    <li className='right__icon__list__item'>
                        <ul className='right__icon__list__item__web'>
                            <li className='right__icon__list__item__web__el'><a href="#"><i className="bi bi-envelope"></i></a></li>
                            <li className='right__icon__list__item__web__el'><a href="#"><i className="bi bi-facebook"></i></a></li>
                            <li className='right__icon__list__item__web__el'><a href="#"><i className="bi bi-instagram"></i></a></li>
                            <li className='right__icon__list__item__web__el'><a href="#"><i className="bi bi-twitter"></i></a></li>
                        </ul>
                    </li>
                </ul>
                <ul className='right__count__list'>
                    <li className='right__count__list__items name'>SKU:</li>
                    <li className='right__count__list__items qq'>12</li>
                </ul>
                <ul className='right__categories__list'>
                    <li className='right__categories__list__items name'>Categories:</li>
                    <li className='right__categories__list__items qq'>Fashion, Style</li>
                </ul>
            </div>
        </div>
    </section>
  );
}

export default Intro;