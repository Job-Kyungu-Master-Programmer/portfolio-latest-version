import job from '../assets/job-kyungu.jpeg'
import { CiMail } from "react-icons/ci";
import { SlPhone } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";




const Contact = () => {
  return (
    <div className='contact'>
      <h2 className="contact__title">Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__cards">
              <div className="contact__card contact__card__image">
                 <img src={job} alt="job kyungu" className="contact__img" />
              </div>
              <div className="contact__card contact__card__form">
                <form action="" className="contact__form">
                   <input type="text" placeholder='Your name' className="contact__input" />
                   <input type="text" placeholder='Your number' className="contact__input" />
                   <textarea type="text" placeholder='Your message' className="contact__input contact__textarea" ></textarea>
                   <button type='submit' className="contact__button">Send your message</button>
                </form>
              </div>
            </div>
            <div className="contact__item">
              <div className="contact__item__image">
                 <img src={job} alt="" className="contact__item__img" />
              </div>
              <div className="contact__item__text">
                    <a href="tel:+79966178726" alt="link " className="contact__item__link">
                    <SlPhone />
                       <span className="contact__item__sp">+7 - 9966 - 17 8726</span>
                    </a>
                    <a href="mailto:lodokyungu@gmail.com" alt="link " className="contact__item__link">
                       <CiMail />
                         <span className="contact__item__sp">lodokyungu@gmail.com</span>
                    </a>
                    <a href="#address" alt="link " className="contact__item__link">
                    <IoLocationOutline />
                       <span className="contact__item__sp">
                        Pervomanskiy-prospekt 74K1, Moscow, Russia
                       </span>
                    </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact