import React from 'react'
import BlogTop from './BlogTop'
import blog from '../assets/67.jpeg'
import Announce from './Announce'
import { Link, Route, Routes } from 'react-router-dom'

const Blogs = ( { tabs } ) => {
  // console.log('dd' , tab)
  return (
    <div className='blog'>
       <div className="container blog__container">
         <BlogTop />
         <div className="blog__list">
            {tabs.map(item => 
              <Link className="blog__item" key={item.id} to={`blog${item.id}`}>
                <div className="blog__image">
                  <img src={blog} alt="Blog post by Job Kyungu" className="blog__img" />
                </div>
                <div className="blog__text">
                    <h3 className="blog__name">{item.title}</h3>
                    <p className="blog__content">{item.content}.</p>
                    <div className="blog__preview">
                      <div className="blog__part">
                        <div className="blog__author">Author : </div>
                        <span className="blog__auth__name">{item.author}</span>
                      </div>
                      <div className="blog__part__date">
                        <div className="blog__date-name">Posted on</div>
                        <div className="blog__date">{item.day}.{item.month}.{item.years}</div>
                      </div>
                  </div>
              </div>
            </Link>  
            )}
         </div>
         <div>
         <Routes>
            <Route path=":id" element={<Announce tabs={tabs} />} />
          </Routes>
        </div>
       </div>
    </div>
  )
}

export default Blogs