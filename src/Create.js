import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, body, author };
    setIsPending(true);
    fetch('http://localhost:5000/blogs', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog)
    })
    .then(()=> {
      setIsPending(false);
      history.push('/');
    });
  }
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input 
          required
          type="text"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />

        <label>Blog Body:</label>
        <textarea
          rows="7"
          required
          value={body}
          onChange={(e)=> setBody(e.target.value)}
        ></textarea>

        <label>Blog Author</label>
        <input 
          required
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
          type="text"
        />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;