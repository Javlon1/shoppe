import './About.scss';
import Product1 from "../assest/img/product1.png"
import Product2 from "../assest/img/product2.png"
import Product4 from "../assest/img/product4.png"

function About() {
  return (
    <section className='about'>
        <div className="container">
            <div className="about__header">
                <div className="about__header__container">
                    <ul className='about__header__container__list'>
                        <li className='about__header__container__list__item'><button>Description</button></li>
                        <li className='about__header__container__list__item'><button>Aditional information</button></li>
                        <li className='about__header__container__list__item'><button>Reviews(0)</button></li>
                    </ul>
                </div>
                {<p className='discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.</p>}
            </div>
            <h1 className='title'>Similar Items</h1>
            <ul className='list'>
                <li className='list__items'>
                    <div>
                        <img src={Product1} alt="" />
                        <h1>Ollie Earrings</h1>
                        <p>$ 30,00</p>
                    </div>
                </li>
                <li className='list__items'>
                    <div>
                        <img src={Product4} alt="" />
                        <h1>Hal Earrings</h1>
                        <p>$ 25,00</p>
                    </div>
                </li>
                <li className='list__items'>
                    <div>
                        <img src={Product2} alt="" />
                        <h1>Kaede Hair Pin Set Of 3</h1>
                        <p>$ 30,00</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}

export default About;