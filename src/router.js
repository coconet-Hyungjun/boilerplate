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
  console.log('auth');
  const render = () => {
    checkAuthCompo();
    return checkAuth ? children : <Redirect to="/" />;
  };

  return <Route path={path} render={render} {...props} />;
};

const PubilcRouter = ({ path, children, ...props }) => {
  console.log('public');
  const render = () => children;

  return <Route path={path} render={render} {...props} />;
};

export default function _Router() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRouter path={['/private']}>
          <Switch>
            <Route path="/private" component={Private} />
          </Switch>
        </AuthRouter>
        <PubilcRouter exact path={['/', '/test']}>
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/test" component={Test} />
            </Switch>
          </BaseLayout>
        </PubilcRouter>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
