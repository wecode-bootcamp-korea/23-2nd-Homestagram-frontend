import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './component/Nav/Nav';
import Main from './pages/Feeds/Main';
import MyPage from './pages/MyPage/MyPage';
import DetailPage from './pages/DetailPage/DetailPage';
import Footer from './component/Footer/Footer';
import OrderPage from './pages/OrderPage/OrderPage';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/detailpage/:id" component={DetailPage} />
        <Route exact path="/orderpage" component={OrderPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
