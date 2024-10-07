import { useEffect, useState } from 'react'
import '../styles/global.css'
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageHome from '.';
import PageCertificates from './Certificates';
import PageProjects from './Projects';
import NotFound from './NotFound';


function App() {
    const pageTitles = {
      '/': 'Sobre',
      '/certificates': 'Certificados',
      '/projects': 'Projetos',
      '/contact': 'Contato',
  };

  const location = useLocation();
  const pageName = pageTitles[location.pathname] || 'Unknown Page';

    useEffect(() => {
        document.title = `Felipe Mota - ${pageName}`;
    }, [pageName]);

  return (
      <>
          <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/certificates" element={<PageCertificates />} />
              <Route path="/projects" element={<PageProjects />} />
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </>
  );
}

// Wrapper para o layout de roteamento
const AppWrapper = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, []);

    if (isClient) {
        return (
            <Router>
                <Header />
                <App />
            </Router>
        );
    }
}

export default AppWrapper;