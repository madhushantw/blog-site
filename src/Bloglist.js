import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Bloglist = ({blogs,title}) => {
  return (
    <div className="blog-list ">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="shadow-md  blog-prieview hover:shadow-xl" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Bloglist