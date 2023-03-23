import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <div className="App">
      <Header />
      <FeedbackList />
    </div>
  );
}

export default App;
