import { Link } from 'react-router-dom';
const DoesNotExist = () => {
  return (
    <div className="does-not-exist">
      <h1>Oops! Page not found</h1>
      <Link to="/">Back to Home...</Link>
    </div>
  );
}
 
export default DoesNotExist;