import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home'
import About from "./components/About";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Intellect from "./components/Intellect";
import Announce from "./components/Announce";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = ({ children }) => children

// Logic of logicial
const App = (props) => {
    //Ces infos sont tous transformer a => Intellect.jsx
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')
    const [selectedFile, setSelectedFile] = useState();
    let [tab, setTab] = useState([])

    const url = 'http://localhost:3001/blogs'

    useEffect(() => {
        axios.get(url).then(response => {
            setTab(response.data)
        })
    },[])
    console.log(title)
    const addBlog = (e) => {
        e.preventDefault();

        let date = new Date()

        const object = {
            title: title,
            content: content,
            author: author,
            text: text,
            hour: date.getHours(),
            minutes: date.getMinutes(),
            day: date.getUTCDay(),
            month: date.getUTCMonth(),
            years: date.getFullYear()
        }
        axios.post(url, object).then(response => {
            setTab(tab.concat(response.data))
            setTitle('');
            setContent('');
            setAuthor('');
            setText('');
        })
    };

    return (
        <div className="app">
         <BrowserRouter>
           <div className="containe app__container">
               <Header />
                   <Wrapper>
                   <Routes>
                      <Route path="*" element={<Home />} />
                      <Route path="/About" element={<About />} />
                      <Route path="/skills" element={<Skills />} />
                      <Route path="/blogs/*" element={<Blogs tabs={tab} />} />
                      <Route path="/intellect" element={<Intellect addBlog={addBlog} title={title} author={author} content={content} selectedFile={selectedFile}
                       text={text} setTitle={setTitle} setContent={setContent} setText={setText}
                       setAuthor={setAuthor} setSelectedFile={setSelectedFile} />}  />
                      <Route path="/announce" element={<Announce/>} />
                      <Route path="/contact" element={<Contact />} />
                   </Routes>   
                   </Wrapper>
               </div>
            </BrowserRouter>
         </div>
    )
}
export default App