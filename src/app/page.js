import React, { lazy } from 'react';
import Container from './components/Container';
import Hero from "./components/Hero";
import MainNavBar from "./components/MainNavBar";
import NavCatg from "./components/NavCatg";
import TagsContainer from "./components/TagsContainer";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
//const Container = lazy(() => import('./components/Container'))

export default function Home() {

 
  return (
    <main>
      <div>
        <MainNavBar/>
        <NavCatg/>
      </div>

      <div className="px-10 flex-1">
        <Hero/>
        <SearchBar/>
        <TagsContainer/>
        <Container title='Les Plus Populaires' category='hebergement'  id={'hebergements'} isPopular={true}/>
        <Container title='Hébergements a Marseille' category='hebergement' id={'hebergements'} isPopular={false}/>
        <Container title='Activités a Marseille' category='activite' id={'activites'} isPopular={false}/>
      </div>

      <Footer/>
      
      
    
    </main>
  );
}
