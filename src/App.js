import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFount from './pages/NotFount';
import Category from './pages/Category';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='content container'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contact} />
          <Route path='/category/:name' component={Category} />
          <Route component={NotFount} />
        </Switch>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
