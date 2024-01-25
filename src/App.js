import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound';

function App() {

  return (
    <div className='h-screen dark:text-gray-100 dark:bg-slate-900 duration-100'>
    <Router>
      <div className="App ">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
