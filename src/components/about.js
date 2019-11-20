import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'

const About = () => {
  return (
    <section className="mx-auto px-6 py-12 max-w-md sm:max-w-lg md:max-w-2xl md:py-20 lg:py-32">
      <div>
        <h3 className="text-4xl mb-2">About Me</h3>
        <p className="intro font-bold text-2xl mb-10">Visual Designer and Junior Front-End Developer.</p>
        <p className="mb-10">I’m a graphic designer based in Lyon, France. I moved into development and my daily play field consists of html, scss, javascript and react. I like to learn new things everyday, challenge myself and help others. <br/><br/>I love hip-hop culture, beyond meat burgers, last.fm and spotify. I do street-workout, meditation and self-reflection. <br/><br/>I’m currently looking for a junior front-end developer position. You can find me on twitter, linkedin, github and codepen.</p>
        <div className="flex flex-col sm:flex-row">
          <ul className="text-xl mb-4 mr-10">
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Graphic Design</li>
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Accessibility</li>
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Design Patterns</li>
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Framworks</li>
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Empathy</li>
          </ul>
          <ul className="text-xl">
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Graphic Design</li>
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Accessibility</li>
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Design Patterns</li>
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Framworks</li>
            <li><MdKeyboardArrowRight className="inline text-gray-500 mr-2"/>Empathy</li>
          </ul>          
        </div>       
      </div>
    </section>
  );
}
 
export default About;