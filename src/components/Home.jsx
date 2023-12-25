import job from '../assets/j1-r.png'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";


const Home = () => {
  return (
    <div className="home">
         <div className="container home__container">
              <div className="home__preview home__image">
                  <img src={job} alt="Job Kyungu" className="home__img" />
              </div>
              <div className="home__preview home__text">
                 <h3 className="home__gret">Hello ! I'm</h3>
                   <h1 className="home__title">Job Kyungu</h1>
                 <p className="home__content">
                    Web,Mobile <span>Developer</span> and <span>Writer</span>
                 </p>
                 <a href="jfh" className="home__down">
                  <IoCloudDownloadOutline />
                  Download CV
                 </a>
                 <div className="home__links">
                  <a href="https://github.com/Job-Kyungu-Master-Programmer" rel="noreferrer" target="_blank" className="home__links_a"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/job-kyungu-b23031190/" rel="noreferrer" target="_blank" className="home__links_a"> <GrLinkedinOption /></a>
                  <a href="d" target="_blank" className="home__links_a"> <FaInstagram /></a>
                 </div>
              </div>
         </div>
         <div className="home__bottom">
             <div className="home__bottom__copyr"> <AiOutlineCopyrightCircle />  <span>2024</span></div>
             <div className="home__bottom__linear">Web development, Programming, Coding </div>
         </div>
    </div>
  )
}

export default Home