
const Intellect = ({
   addBlog,
   title,
   content,
   author,
   text,
   setTitle, 
   setContent,
   setAuthor,
   selectedFile,
   setSelectedFile,
   setText
}) => {

   
  const handlerTitle = (e) => setTitle(e.target.value)
  const handlerContent = e => setContent(e.target.value)
  const handlerAuthor = e => setAuthor(e.target.value)
  const hanlderText = e => setText(e.target.value)
  const uploadHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0])
  };

  return (
    <div className="int">
       <div className="int__container">
          <div className="int__add">
              <div className="int__users">
                 <h3 className="int__admin">Administrator Space</h3>
                <div className="int__users__user">
                  <div className="int__user">Job Kyungu</div>
                  <button className="int__logout">Logout</button>
                </div>
              </div>
              <form action="" className="int__connexion">
                 <div className="int__connect">Sign in :</div>
                 <input type="text" className="int__input" placeholder="Your name" />
                 <input type="password" className="int__input" placeholder="Your password" />
                 <button className="int__sign">Sign in</button>
              </form>
              <div className="int__form">
                 <div className="int__add__title">Add the blog now : </div>
                <form onSubmit={addBlog} className="int__form__add">
                  <input  value={title} onChange={handlerTitle} placeholder="Title" className="int__input" />
                  <input  value={content} onChange={handlerContent} placeholder="Content" className="int__input" />
                  <input  value={author} onChange={handlerAuthor} placeholder="Author" className="int__input" />
                  <input type="file" onChange={uploadHandler} className="int__input" />
                  <textarea  value={text} onChange={hanlderText} placeholder="write the text" className="int__input"></textarea>
                  <button className="int__send">add your blog</button>
                </form>
              </div>
          </div>
          <div className="int__image">
            <h1 className="int__image__title">
             The time for intellectualism has arrived! The future is within reach, let’s seize it!
            </h1>
          </div>
       </div>
    </div>
  )
}

export default Intellect