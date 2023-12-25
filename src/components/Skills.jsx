import { PiStudent } from "react-icons/pi";
import { LiaBrainSolid } from "react-icons/lia";
import data from './data'
import Linear from "./Linear";

import html from '../assets/html.png'
import css from '../assets/css.png'
import sass from '../assets/sass.png'
import js from '../assets/javascript.png'
import git from '../assets/git.png'
import react from '../assets/react-js.png'
import nativejs from '../assets/react-native.png'
import nodejs from '../assets/nodejs.png'
import mongod from '../assets/mongod.png'
import firebase from '../assets/firebase.png'
import exp from '../assets/67.jpeg'
import php from '../assets/php.png'
import { useState } from "react";

const Skills = ( ) => {
   const [skill, setKill] = useState(null);

  return (
    <div className='skills'>
        <div className="container skills__container">
            <h1 className="skills__title">Skills</h1>
            <div className="skills__buttons" onClick={() => setKill(!skill)}>
            <div className={skill ? "skills__button" : "buttonOver"}>
              <PiStudent />
                <span>Education</span>
              </div>
            <div className={skill ? "buttonOver" : "skills__button"}>
              <LiaBrainSolid />
               <span>Experiences</span>   
             </div>
            </div>
            <div className="skills__skill">
              <div className={skill ? "offEduc" : "skills__skillins skills__education "}>
                 <div className="skills__image">
                    <div className="skills__list">
                        <div className="skills__item">
                           <img src={html} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">HTML</h3>
                              <button className="skills__btn">99.2%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={css} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">CSS</h3>
                              <button className="skills__btn">97%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={sass} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">SCSS</h3>
                              <button className="skills__btn">97%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={git} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">Git</h3>
                              <button className="skills__btn">90%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={js} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">Javascript</h3>
                              <button className="skills__btn">70%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={react} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">React JS</h3>
                              <button className="skills__btn">68%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={nativejs} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">React Native</h3>
                              <button className="skills__btn">77%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={nodejs} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">Node JS</h3>
                              <button className="skills__btn">65%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={php} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">PHP</h3>
                              <button className="skills__btn">35%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={mongod} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">Mongodb</h3>
                              <button className="skills__btn">66%</button>
                           </div>
                        </div>
                        <div className="skills__item">
                           <img src={firebase} alt="node js portfolio" className="skills__img" />
                           <div className="skills__text">
                              <h3 className="skills__languages">Firebase</h3>
                              <button className="skills__btn">59.5%</button>
                           </div>
                        </div>
                    </div>
                 </div>
                  <div className="skills__details">
                      <div className="skills__preview">
                         <Linear />
                         <div className="skills__cards">
                           {data.educOne.map(edu => 
                              <div className="skills__card" key={edu.id}>
                              <span className="skills__icons">
                                 <PiStudent />
                              </span>
                              <div className="skills__card__text">
                                 <div className="skills__bloc">
                                    <h3 className="skills__card__title">{edu.university}</h3>
                                    <span className="skills__card__degr">{edu.options}</span>
                                 </div>
                                 <div className="skills__bloc skills__dt">
                                     <div className="skills__date">{edu.date}</div>
                                     <div className="skills__id">{edu.id}</div>
                                 </div>
                              </div>
                           </div>
                            )}
                         </div>
                      </div>
                      <div className="skills__preview">
                         <Linear />
                         <div className="skills__cards">
                            {data.eduTw.map(edu => 
                                <div className="skills__card" key={edu.id}>
                                <span className="skills__icons">
                                   <PiStudent />
                                </span>
                                <div className="skills__card__text">
                                   <div className="skills__bloc">
                                      <h3 className="skills__card__title">{edu.university}</h3>
                                      <span className="skills__card__degr">{edu.options}</span>
                                   </div>
                                   <div className="skills__bloc skills__dt">
                                       <div className="skills__date">{edu.date}</div>
                                       <div className="skills__id">{edu.id}</div>
                                   </div>
                                </div>
                             </div>
                              )}
                         </div>
                      </div>
                  </div>
              </div>


              {/* ///experience  */}
              <div className={skill ? "openExpert" : "skills__skillins skills__experiences"}>
                 <div className="skills__image">
                    <img src={exp} alt="portfolio web job education" className="skills__experiences__img" />
                    <div className="skills__text">
                        <div className="skills__cont">Conference on the evolution of technology in Central Africa. </div>
                    </div>
                 </div>
                  <div className="skills__details">
                      <div className="skills__preview">
                      <Linear />
                         <div className="skills__cards">
                             {data.experOne.map(expert => 
                                 <div className="skills__card" key={expert.id}>
                                 <span className="skills__icons">
                                    <PiStudent />
                                 </span>
                                 <div className="skills__card__text">
                                    <div className="skills__bloc">
                                       <h3 className="skills__card__title">{expert.jobs}</h3>
                                       <span className="skills__card__degr">{expert.post}</span>
                                    </div>
                                    <div className="skills__bloc">
                                        <div className="skills__date">{expert.date}</div>
                                        <div className="skills__id">{expert.id}</div>
                                    </div>
                                 </div>
                              </div>
                              )}
                         </div>
                      </div>
                      <div className="skills__preview">
                      <Linear />
                      <div className="skills__cards">
                             {data.experOne.map(expert => 
                                 <div className="skills__card" key={expert.id}>
                                 <span className="skills__icons">
                                    <PiStudent />
                                 </span>
                                 <div className="skills__card__text">
                                    <div className="skills__bloc">
                                       <h3 className="skills__card__title">{expert.jobs}</h3>
                                       <span className="skills__card__degr">{expert.post}</span>
                                    </div>
                                    <div className="skills__bloc">
                                        <div className="skills__date">{expert.date}</div>
                                        <div className="skills__id">{expert.id}</div>
                                    </div>
                                 </div>
                              </div>
                              )}
                         </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills