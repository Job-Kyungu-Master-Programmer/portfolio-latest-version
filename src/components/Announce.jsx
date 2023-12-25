import { IoTimeOutline } from "react-icons/io5";
import blog from '../assets/digital.jpeg'

const Announce = ( {  } ) => {
  return (
    <div className='annouce'>
        <div className="container annouce__container">
             <div className="annouce__image">
                <img src={blog} alt="announce" className="annouce__img" />
             </div>
             <div className="annouce__text">
                <div className="annouce__head">
                    <div className="annouce__auth">
                        <h2 className="annouce__name">Developpement web, et contruction dev</h2>
                        <h4 className="annouce__posted">
                            Posted by <span>#Job Kyungu</span>
                        </h4>
                    </div>
                    <div className="annouce__infos">
                        <strong className="annouce__icon">
                          <IoTimeOutline />
                        </strong>
                        <span className="annouce__date">24 - 05 - 1997</span>
                        <span className="annouce__date">11 : 00</span>
                    </div>
                </div>
                <div className="annouce__content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ipsa quaerat mollitia molestias labore, nam ex quia unde exercitationem cumque, dicta deserunt? A, sapiente cum quo sequi vitae ad fuga.
                </div>
             </div>
        </div>
    </div>
  )
}

export default Announce