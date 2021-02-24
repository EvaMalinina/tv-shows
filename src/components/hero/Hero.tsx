import * as React from "react";
import './hero.scss';

const title: string = 'Stay tuned, IT world';
const linkText: string = 'I\'m link.';

const Hero = () => {
  return (
    <>
      <a href="#" className="text">{ linkText }</a>
      <h1>{ title }</h1>
    </>
  )
};

export default Hero;




