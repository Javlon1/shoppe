import About from '../../components/About';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Intro from '../../components/Intro';
import './Home.scss';

function Home() {
  return (
    <div className="home">
        <Header/>
        <Intro/>
        <About/>
        <Footer/>
    </div>
  );
}

export default Home;
