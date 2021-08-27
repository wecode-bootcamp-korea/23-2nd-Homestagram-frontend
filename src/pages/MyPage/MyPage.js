import React, { useState, Fragment } from 'react';
import BookMark from './MypageChilds/BookMark';
import Follow from './MypageChilds/Follw';
import Purchase from './MypageChilds/Purchase';
import styled from 'styled-components';
import { flexBox } from '../../styles/Mixin';
import axios from 'axios';

const MyPage = () => {
  const [selectedMenu, setSelectedMenu] = useState({ id: 0 });
  const username = localStorage.getItem('nickname');
  const email = localStorage.getItem('email');
  const clickedMenu = listId => {
    setSelectedMenu({ id: listId });
  };

  const MENU_LIST = [
    { id: 0, listName: '북마크' },
    { id: 1, listName: '팔로잉' },
    { id: 2, listName: '구매내역' },
  ];

  return (
    <>
      <Nav>
        {MENU_LIST.map((menu, index) => {
          return (
            <li
              key={index}
              onClick={() => clickedMenu(menu.id)}
              style={{
                color: menu.id === selectedMenu.id ? '#35c5f0' : '',
              }}
            >
              {menu.listName}
            </li>
          );
        })}
      </Nav>
      <MainBox>
        <ProfileBox>
          <ShareImg src="../images/share.png" alt="share" />
          <ColumnBox>
            <ProfileImg
              src="https://ojsfile.ohmynews.com/STD_IMG_FILE/2010/0809/IE001224096_STD.jpg"
              alt="profile"
            />
            <NickName>{username}</NickName>
            <FollowNumber name="email">{email}</FollowNumber>
            <div>
              <FollowNumber>팔로워</FollowNumber>
              <FollowNumber>팔로잉</FollowNumber>
            </div>

            <IconBox>
              <img src="../images/ribbon.png" alt="ribbon" />
              <img src="../images/cart.png" alt="cart" />
              <img src="../images/ring.png" alt="ring" />
            </IconBox>
          </ColumnBox>
        </ProfileBox>
        <MainContent>
          {selectedMenu.id === 0 && <BookMark />}
          {selectedMenu.id === 1 && <Follow />}
          {selectedMenu.id === 2 && <Purchase />}
        </MainContent>
      </MainBox>
    </>
  );
};

const Nav = styled.ul`
  ${flexBox('flex', 'center', 'center')}
  width: 100%;
  height: 66px;
  border-bottom: 1px solid ${props => props.theme.gray};

  li {
    font-size: 22px;
    margin: 0 100px;
    cursor: pointer;
  }
`;

const MainBox = styled.main`
  display: flex;
  width: 1250px;
  margin: 100px auto;
  padding-bottom: 200px;
`;

const ProfileBox = styled.div`
  width: 270px;
  height: 420px;
  border: 1px solid ${props => props.theme.gray};
`;

const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const ShareImg = styled.img`
  width: 30px;
  position: relative;
  top: 20px;
  left: 215px;
`;

const ColumnBox = styled.div`
  ${flexBox('flex', 'center', 'center')}
  flex-direction: column;

  margin-top: 40px;
`;

const NickName = styled.span`
  margin: 20px 0;
  font-size: 24px; ;
`;

const FollowNumber = styled.span`
  margin: 0 10px;
  padding-bottom: ${props => (props.name === 'email' ? '20px' : '')};
`;

const IconBox = styled.div`
  ${flexBox('flex', 'center', 'center')}
  width: 217px;
  margin-top: 15px;
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme.gray};

  img {
    width: 30px;
    margin: 0 14px;
  }
`;

const MainContent = styled.section`
  width: 870px;
  margin-left: 100px;
`;

export default MyPage;
