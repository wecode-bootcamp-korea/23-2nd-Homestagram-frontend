import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideImg from './SideImg';
import DetailInfo from './DetailInfo';
import styled from 'styled-components';

const DetailPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('./data/data.json')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.err(err));
  }, []);

  return (
    <Wrap>
      <SideImg data={data} />
      <DetailInfo data={data} />
    </Wrap>
  );
};
const Wrap = styled.main`
  display: flex;
  width: 1136px;
  margin: 170px auto;
`;

export default DetailPage;
