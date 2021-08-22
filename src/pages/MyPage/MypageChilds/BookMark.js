import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BookMark = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://10.58.3.119:8000/bookmarks/list`)
      .then(res => {
        setData(res.data.LIST);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Fragment>
      <ImgBox>
        {data.map((user, index) => (
          <ImgList key={index}>
            <img src={user.posting_image_url} alt="bookmark" />
            <ProductInfoBox>
              <UserName>{user.posting_username}</UserName>
            </ProductInfoBox>
          </ImgList>
        ))}
      </ImgBox>
    </Fragment>
  );
};

const ImgBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 202px);
  grid-template-rows: repeat(4, 202px);
  gap: 80px 20px;
`;
const ImgList = styled.li`
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
const ProductInfoBox = styled.div`
  width: 180px;
  margin: auto;
`;
const UserName = styled.div`
  font-size: 22px;
  font-weight: 800;
  margin: 10px 0px;
`;

export default BookMark;
