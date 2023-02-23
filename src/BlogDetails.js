import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id }  = useParams();
  const {data: blog, isPending, error } = useFetch('http://localhost:5000/blogs/' + id);
  const history = useHistory();

  const handleDelete = (e) => {
    fetch('http://localhost:5000/blogs/' + id, {
      method: "DELETE" 
    })
    .then(() => {
      history.push('/');
    })
  }

  return (  
    <div className="blog-details">
      { isPending && <div><img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="" style={{height:"200px",width:"200px"}}/></div> }
      { error && <div>{ error }</div> }
      { blog && 
        (
          <article>
            <h2>{ blog.title }</h2>
            <p>By { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleDelete}>Delete Blog</button>
          </article>
        )
      }
    </div>
  );
}
 
export default BlogDetails;