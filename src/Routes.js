import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './component/Nav/Nav';
// import SignPage from './pages/SignPage/SignPage';
import Feeds from './pages/Feeds/Feeds';
import MyPage from './pages/MyPage/MyPage';
import DetailPage from './pages/DetailPage/DetailPage';
import Footer from './component/Footer/Footer';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Feeds} />
        {/* <Route exact path="/signpage" component={SignPage} /> */}
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/detailpage" component={DetailPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
