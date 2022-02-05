import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Listings from './pages/Listings';
import NewHome from './pages/NewHome';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

function App(props) {
  const [homes, setHomes] = useState([])
  const history = useHistory();
  const getHomes = async () => {
    const response = await fetch('http://localhost:3000/homes')
    const data = await response.json()
    console.log(data);
    setHomes(data);
  }

  useEffect(() => {
    getHomes()
  }, [])

  const addHome = async (newHome) => {
    await fetch('http://localhost:3000/homes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newHome)
    })
    getHomes()
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Listings homes={homes} />
        </Route>
        <Route exact path="/newhome">
          <NewHome addHome={addHome} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
