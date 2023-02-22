import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data, error, isPending } = useFetch('http://localhost:5000/blogs');

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div><img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="" style={{height:"200px",width:"200px"}}/></div>}
            {data && <BlogList blogs = { data } title = "All Blogs!"></BlogList>}
        </div>
    );
}
 
export default Home;
