import { IoCloudDownloadOutline } from "react-icons/io5";
import { GiNewBorn } from "react-icons/gi";
import { IoCodeSharp } from "react-icons/io5";
import job1 from '../assets/j2.png'
import job from '../assets/j3.png'

const About = () => {
  return (
    <div className='about'>
        <div className="container about__container">
            <div className="about__preview about__image">
                 <div className="about__card">
                    <img src={job} alt="about me" className="about__card__img" />
                    <div className="about__card__text">
                       <h1 className="about__card__title">About me</h1>
                       <h3 className="about__card__content">who am I ?</h3>
                       <span className="about__card__btn">Web,Mobile Developer</span>
                    </div>
                 </div>
                 <div className="about__items">
                  <div className="about__item">
                      React JS
                  </div>
                  <div className="about__item">
                      Firebase
                  </div>
                  <div className="about__item">
                      Node JS
                  </div>
                  <div className="about__item">
                    Javascript
                  </div>
                  <div className="about__item">
                    MongoDB
                  </div>
                  <div className="about__item">
                     React Native
                  </div>
                 </div>
                 <div className="about__me">
                     <span className="about__born">
                       <GiNewBorn className="about__born-ico"  />
                       <span className="about__born-sp">May 24th</span>
                     </span>
                     <h4 className="about__coding">
                       <IoCodeSharp />
                     </h4>
                     <p className="about__me__content">
                       I was born in Kinshasa, I am Congolese from the DRC by birth
                     </p>
                     <div className="about__prev">
                       <div className="about__prev-image">
                          <img src={job1} alt="about met portfolio" className="about__prev-img" />
                       </div>
                       <div className="about__prev__identity">
                           <span className="about__prev-dev">Web Developer</span>
                           <h3 className="about__prev-title">Job Kyungu</h3>
                       </div>
                     </div>
                     <div className="about__me__linear">
                       <div className="about__me__line"></div>
                     </div>
                 </div>
            </div>
            <div className="about__preview about__text">
                <h3 className="about__title">My introduction</h3>
                <p className="about__content">
                  My name is Job Kyungu, I am in the final year of my Bachelor's degree in Computer Science and Information Technology at <span>Moscow Polytechnic University</span>. 
                  Having clear ambitions, I have acquired in-depth expertise in web and mobile development, thanks to several apprenticeship courses outside of university.
                </p>
                <p className="about__content">
                  In terms of skills, I have significant knowledge and experience in this field. I worked for 2.5 years as a web developer in a Russian company, CDO-Global.
                </p>
                <p className="about__content">
                Outside of coding, I am heavily inspired by nature and life experiences, which sometimes inspires me to write.
                I write regularly for journals and magazines, and plan to publish my first book in the future.
                </p>
                <a href="jfh" className="home__down">
                  <IoCloudDownloadOutline />
                  Download CV
                 </a>
            </div>
        </div>
    </div>
  )
}

export default About