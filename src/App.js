import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store/configureStore';
import { TempUnitSelector } from './components/tempUnitSelector';
import { Home } from './pages/home';
import { History } from './pages/history';

const store = configureStore(window.REDUX_INITIAL_DATA);

const Header = styled.div`
  background-color: #26475e;
  padding: 0 40px;
  box-sizing: border-box;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;

  a {
    margin: 0 20px 0 0;
    outline: none;
    background: none;
    border: none;
    text-decoration: none;
    color: #ffffff;
  }

  @media (max-width: 540px) {
    padding: 0 10px;
  }
`;
function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Header>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/history'}>History</NavLink>
          <TempUnitSelector />
        </Header>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/history'} component={History} />
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
