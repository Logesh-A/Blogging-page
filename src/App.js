import Navbar from './navBar';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import DoesNotExist from './DoesNotExist';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/create"> <Create /> </Route>
            <Route path="/blogs/:id"> <BlogDetails /> </Route>
            <Route path="*"><DoesNotExist/></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
