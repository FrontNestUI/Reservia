import React, { lazy } from 'react';
import Container from '../components/Container';
import Hero from "../components/Hero";
import MainNavBar from "../components/MainNavBar";
import NavCatg from "../components/NavCatg";
import TagsContainer from "../components/TagsContainer";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import DesktopNavBar from '../components/DesktopNavBar';
import ActiviteContainer from '../components/ActiviteContainer';
//const Container = lazy(() => import('./components/Container'))

export default function Home() {

 
  return (
    <main className=' py-2 min-h-screen flex flex-col'>
      <section className='md:px-15'>
        <div id='mobile_nav' className='block md:hidden'>
          <MainNavBar/>
          <NavCatg/>
        </div>
        <div id='desktop_nav' className='md:block hidden'>
          <DesktopNavBar/>
        </div>
        <div className="px-10">
          <Hero/>
          <SearchBar/>
          <TagsContainer/>

          <div className='md:flex md:flex-row-reverse md:justify-between'> 
            <Container title='Les Plus Populaires' category='hebergement'  id={'hebergements'} isPopular={true}/>
            <Container title='Hébergements a Marseille' category='hebergement' id={'hebergements'} isPopular={false}/>
          </div>
      
          <ActiviteContainer/>
        </div>
      </section>
     
      <Footer/>
    
    </main>
  );
}
