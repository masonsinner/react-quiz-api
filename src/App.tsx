import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title from './title';
import Quizes from './quizes';
import NavBar from './navbar';
import LoginForm from './login';
import RegisterForm from './register';
import './index.css'

const App: React.FC = () => {
  return (
    <Router>
      <div id='Main'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Title />} />
          <Route id="Quizes" path="/quizzes" element={<Quizes />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
