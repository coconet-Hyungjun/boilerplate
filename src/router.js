import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import { Home, Test, Private, NotFound } from './containers/pages';

let checkAuth = false;
const checkAuthCompo = () => {
  if (window.localStorage.userData) {
    checkAuth = true;
    return;
  }
  checkAuth = false;
  return;
};

const AuthRouter = ({ path, children, ...props }) => {
  const render = () => {
    checkAuthCompo();
    return checkAuth ? children : <Redirect to="/" />;
  };

  return <Route path={path} render={render} {...props} />;
};

const PubilcRouter = ({ path, children, ...props }) => {
  const render = () => children;

  return <Route path={path} render={render} {...props} />;
};

export default function _Router() {
  if (true) {
  } else {
    return <div>fail</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <AuthRouter path={['/private']}>
          <Route path="/private" component={Private} />
        </AuthRouter>
        <PubilcRouter path={['/', '/test']}>
          <BaseLayout>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
          </BaseLayout>
        </PubilcRouter>
        <Route path="*">
          <Switch>
            <Route component={NotFound} />
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
