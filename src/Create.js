import  { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [auther, setAuther] =useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, auther };

    setIsPending(true);

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('New blog aded');
      setIsPending(false);
    })
    // history.go(-1);
    history.push('/');
  }
  
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
        <form onSubmit={handelSubmit}>

          <label>Blog title</label>
          <input 
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type="text" 
            required 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <label>Blog Body</label>
          <textarea 
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required
            value={body}
            onChange={(e)=>setBody(e.target.value)}
          ></textarea>

          <label>Blog author</label>
          <select
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={auther}
            onChange={(e)=>setAuther(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>

          {!isPending && <button className='mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Add Blog</button>}
          {isPending && <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' disabled>Adding blog...</button>}
        </form>
    </div>
  )
}

export default Create