import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import './App.css';
import Router from '../router';
import dotenv from 'dotenv';
import { useContextProvider as ContextProvider } from '../hooks/useContextProvider';

dotenv.config();
function App() {
  return (
    <ContextProvider>
      <Styled.GlobalStyles />
      <Helmet>
        <title>title</title>
      </Helmet>
      <div>
        <Router />
      </div>
    </ContextProvider>
  );
}

const Styled = {
  GlobalStyles: createGlobalStyle`
  ${reset};
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    li {
      list-style: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }

    img {
      display: block;
    }

  `,
};

export default App;
