
import './App.css';
import About from './components/mainComponent/About';
import Category from './components/mainComponent/Category';
import VideoSection from './components/mainComponent/VideoSection';
import MainHero from './components/mainComponent/MainHero';
import ClientSection from './components/mainComponent/ClientSection';
import PartnerSection from './components/mainComponent/PartnerSection';
import MyNav from './components/mainComponent/MyNav';
import MyFooter from './components/mainComponent/MyFooter';

function Home() {
  return (
    <>
    <MyNav/>
    <MainHero/>
    <Category/>
    <About/>
    <VideoSection/>
    <ClientSection/>
    <PartnerSection/>
    <MyFooter/>
    </>
  );
}

export default Home;
