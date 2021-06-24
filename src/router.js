import { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BaseLayout, CustomLayout } from './components/layout';
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
  return (
    <BrowserRouter>
      <Switch>
        <AuthRouter path={['/private']}>
          <CustomLayout>
            <Switch>
              <Route path="/private" component={Private} />
            </Switch>
          </CustomLayout>
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
