import { IoSearchOutline } from "react-icons/io5";
import brains from '../assets/blog1.png'

const BlogTop = () => {
  return (
     <div className="blog__top">
         <div className="pres">
            <div className="pres__image">
                <img src={brains} alt="" className="pres__img" />
            </div>
            <div className="pres__text">
                <h2 className="pres__title">My Blog</h2>
                <p className="pres__content">
                   Welcome to my Blog where I announce my tips and articles on web and mobile development.
                </p>
               <div className="pres__btns">
                 <button className="pres__btn">#Web</button>
                   <button className="pres__btn">#Programming</button>
                 <button className="pres__btn">#Coding</button>
               </div>
            </div>
         </div>
         <div className="search">
            <input type="text" placeholder='Search blog' className="search__input" />
            <span className="search__icons">
              <IoSearchOutline />
            </span>
         </div>
     </div>
  )
}

export default BlogTop