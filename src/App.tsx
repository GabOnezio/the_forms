import RegisterUser from './pages/UserPage/registerPageState';
import ReceiveFormUser from './pages/ReceiveUserPage/ReceiveFormUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RegisterUser />} /> {/* Tornando RegisterUser a página inicial */}
          <Route path="/receive-user" element={<ReceiveFormUser />} /> {/* Rota para visualizar os dados do usuário após o cadastro */}
          {/* Adicione outras rotas aqui, por exemplo: */}
          {/* <Route path="/outra-pagina" element={<OutroComponente />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
