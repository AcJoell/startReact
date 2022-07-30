import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className="App-search">
        <main className="boxMain">
          <h1>¡GIFs at your fingertips!!</h1>        
          <Link to="/gif/Animals" className="links">Animals!</Link>
          <Link to="/gif/Actions" className="links">Actions!</Link>
          <Link to="/gif/Cartoons" className="links">Cartoons!</Link>
          <Link to="/gif/Emotions" className="links">Emotions!</Link>
          <Link to="/gif/Gaming" className="links">Gaming!</Link>
          <Link to="/gif/Originals" className="links">Originals!</Link>
        </main>
      </section>
      <section className="App-content">
        <Route path='/gif/:keyword' component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;