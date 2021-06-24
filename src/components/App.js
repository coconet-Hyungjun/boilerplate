import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import './App.css';
import Router from '../router';

function App() {
  return (
    <>
      <Styled.GlobalStyles />
      <Helmet>
        <title>title</title>
      </Helmet>
      <div>
        <Router />
      </div>
    </>
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
