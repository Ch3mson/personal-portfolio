import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="flex flex-wrap justify-center text-center">

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} flex flex-wrap justify-center`}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I am a student at the University of Waterloo studying <b>Computer Science</b> with a <b>double degree</b> in <b>Business Administration</b> from Wilfrid Laurier University.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I am currently in my second semester of first year, where I will be taking 6 courses: Linear Algebra 1, Calculus 2, Elementary Algorithm Design & Data Abstraction (with a lab course), Functional Areas of Organizatoins, Macroeconomics, and Interpersonal Communications
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I have always been passionate about mathematics, which has led me to pursuing computer science to further challenge my logical and critical thinking abilities. 
        Since grade 7, I have participated in math competitions, and began programming since grade 10. Step by step, I was able to find friends to mentor me into learning new languages,
        which have eventually led me to creating this website! Currently, relatively experienced in web development, and looking to learn more about fullstack development, primarily in back-end server development. Eventually I want to branch off to different areas
        of computer science/mathematics such as web3 development and quantitative finance.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        Apart from school, I have pursued plenty of extracurricular activities. I am a competitive badminton player, having played tournaments for my high school and participated in local tournaments across British Columbia (Canada).
        I am also a relatively competitive gamer, reaching diamond in League of Legends, and obtaining top 3000 in global ranking in osu!. I played piano since grade 1, and the trumpet since grade 6. Since then, I was
        in my school's concert and jazz band for 7 years.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        In terms of practical experience and projects, here are some of them listed below:
      </motion.p>

    </div>
  );
};

export default SectionWrapper(About, "about");