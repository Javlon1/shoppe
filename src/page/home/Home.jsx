import About from '../../components/About';
import Header from '../../components/Header';
import Intro from '../../components/Intro';
import './Home.scss';

function Home() {
  return (
    <div className="home">
        <Header/>
        <Intro/>
        <About/>
    </div>
  );
}

export default Home;
