import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const KakaoLogin = () => {
  const { Kakao } = window;
  const [login, setLogin] = useState(false);
  // const [userInfo, setUserInfo] = useState({
  //   user_id: 0,
  //   nickname: '',
  //   email: '',
  // });

  const handlelogout = () => {
    setLogin(!login);
    //  localStorage.removeItem('kakao_faab735225616551bbbcc9852afc8a06');
    console.log('로그아웃 버튼을 눌렀어!');
  };

  const handlelogin = async () => {
    Kakao.Auth.login({
      scope: 'profile_nickname , account_email',
      persistAccessToken: false,
      success: async function (response) {
        const res = await axios.post('http://10.58.4.22:8000/users/signin', {
          body: JSON.stringify({ access_token: response.access_token }),
        });
        console.log(res);
        localStorage.setItem({ token: res.token });
      },
      fail: function (error) {
        alert('로그인에 실패했습니다.');
      },
    });
    setLogin(!login);
  };

  return (
    <>
      {!login ? (
        <ImgStyle
          name="kakao"
          onClick={handlelogin}
          src="/images/kakao_login_medium.png"
          alt="카카오"
        />
      ) : (
        <ImgStyle
          name="kakao"
          onClick={handlelogout}
          src="/images/kakao_login_medium.png"
          alt="로그아웃"
        />
      )}
    </>
  );
};

const ImgStyle = styled.img`
  color: palevioletred;
  font-size: 1em;
  border: ${props => (props.alt === '로그아웃' ? '2px solid black' : 'none')};
`;

export default KakaoLogin;
