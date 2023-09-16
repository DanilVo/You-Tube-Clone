import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Layout from './components/LayoutArea/Layout/Layout';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Layout />
  </HashRouter>
);
