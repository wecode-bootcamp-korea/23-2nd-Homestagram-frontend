import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Feeds from './Feeds';
import MainAside from './MainAside/MainAside';
import axios from 'axios';

const Main = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // axios
    //   .get('http://172.30.1.49:8000/postings')
    //   .then(response => {
    //     console.log(response.data.POSTING_FEED);
    //     setFeedData(response.data.POSTING_FEED);
    //   })
    //   .catch(err => console.error(err));
    axios
      .get('./data/PostedData.json')
      .then(response => {
        console.log(response);
        setFeedData(response.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <MainContainer>
      <Feeds feedData={feedData} getData={getData} />
      <MainAside />
    </MainContainer>
  );
};
export default Main;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 935px;
`;
