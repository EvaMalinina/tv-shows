import * as React from "react";
import { useState } from "react";
import './hero.scss';

const title = 'Stay tuned, IT world';
const linkText = 'I\'m link.';

interface IHero {
  title: string;
  linkText: string
}

const Hero = () => {
  const [text] = useState<IHero>({title, linkText});

  return (
    <>
      <a href="#" className="text">{ text.linkText }</a>
      <h1>{ text.title }</h1>
    </>
  )
};

export default Hero;




