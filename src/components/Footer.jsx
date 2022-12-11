import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="left">
                <ul className='left__list'>
                    <li className='left__list__item'><a href="#">CONTACT</a></li>
                    <li className='left__list__item'><a href="#">TERMS OF SERVICES</a></li>
                    <li className='left__list__item'><a href="#">SHIPPING AND RETURNS</a></li>
                </ul>
                <p className='left__info'>© 2022 Shelly. Terms of use and privacy policy.</p>
            </div>
            <div className="right">
                <ul className='right__list1'>
                    <li className='right__list1__itam'>Give an email, get the newsletter.</li>
                    <li className='right__list1__itam'><a href="#"><i class="bi bi-arrow-right"></i></a></li>
                </ul>
                <ul className='right__list2'>
                    <li className='right__list2__itam'><a href="https://t.me/Muhammadjonov_javlon"><i class="bi bi-telegram"></i></a></li>
                    <li className='right__list2__itam'><a href="#"><i class="bi bi-facebook"></i></a></li>
                    <li className='right__list2__itam'><a href="#"><i class="bi bi-instagram"></i></a></li>
                    <li className='right__list2__itam'><a href="#"><i class="bi bi-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
