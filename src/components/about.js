import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'

const About = () => {
  return (
    <section id="about" className="mx-auto px-6 py-12 max-w-md sm:max-w-lg md:max-w-2xl md:py-20 lg:py-32">
      <div className="text-gray-800 dark:text-white">
        <h3 className="text-4xl mb-2 dark:text-secondary">About Me</h3>
        <p className="intro font-bold text-2xl mb-10">Visual Designer and Junior Front-End Developer.</p>
        <p className="mb-10">I’m a graphic designer based in Lyon, France. I moved into development and my daily play field consists of html, scss, javascript and react. I like to learn new things everyday, challenge myself and help others. <br/><br/>I love hip-hop culture, beyond meat burgers, last.fm and spotify. I do street-workout, meditation and self-reflection. <br/><br/>I’m currently looking for a junior front-end developer position. You can find me on twitter, linkedin, github and codepen.</p>
        <div className="flex flex-col sm:flex-row">
          <ul className="text-xl mb-4 mr-10 list">
            <li><MdKeyboardArrowRight/>Graphic Design</li>
            <li><MdKeyboardArrowRight/>Accessibility</li>
            <li><MdKeyboardArrowRight/>Design Patterns</li>
            <li><MdKeyboardArrowRight/>Framworks</li>
            <li><MdKeyboardArrowRight/>Empathy</li>
          </ul>
          <ul className="text-xl list">
            <li><MdKeyboardArrowRight/>Graphic Design</li>
            <li><MdKeyboardArrowRight/>Accessibility</li>
            <li><MdKeyboardArrowRight/>Design Patterns</li>
            <li><MdKeyboardArrowRight/>Framworks</li>
            <li><MdKeyboardArrowRight/>Empathy</li>
          </ul>          
        </div>       
      </div>
    </section>
  );
}
 
export default About;