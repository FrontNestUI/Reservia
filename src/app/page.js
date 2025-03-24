import Image from "next/image";
import Container from "./components/Container";
import Hero from "./components/Hero";
import MainNavBar from "./components/MainNavBar";
import NavCatg from "./components/NavCatg";
import TagsContainer from "./components/TagsContainer";
export default function Home() {
  return (
    <main>
      <MainNavBar/>
      <NavCatg/>
      <TagsContainer/>
      <Hero/>
      <Container/>
    </main>
  );
}
