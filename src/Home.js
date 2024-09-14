
import './App.css';
import About from './components/About';
import Category from './components/Category';
import MainHero from './components/MainHero';
import MyNav from './components/MyNav';

function Home() {
  return (
    <>
    <MyNav/>
    <MainHero/>
    <Category/>
    <About/>
    </>
  );
}

export default Home;
