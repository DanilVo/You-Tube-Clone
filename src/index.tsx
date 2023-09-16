import ReactDOM from 'react-dom/client';
import Layout from './components/LayoutArea/Layout/Layout';
import './index.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Layout />
  </HashRouter>
);
