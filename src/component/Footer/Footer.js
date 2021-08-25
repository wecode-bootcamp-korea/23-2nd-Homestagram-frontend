import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <FooterTop>
          <CSInfo>
            <a className="csCenter">고객센터 ></a>
            <CSNumber>1670-0876</CSNumber>
            <CSTime>평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</CSTime>
          </CSInfo>
          <div className="socialLink">
            <Icon src="./images/apple.png" alt="apple" />
            <Icon src="./images/google-play.png" alt="google-play" />
            <Icon src="./images/kakao_story.png" alt="kakao-story" />
            <Icon src="./images/facebook.png" alt="facebook" />
            <Icon src="./images/instagram.png" alt="instagram" />
            <Icon src="./images/naver_blog.png" alt="naver-blog" />
            <IconNaverPost
              src="./images/naver_post.png"
              alt="naver-post"
            ></IconNaverPost>
          </div>
        </FooterTop>
        <ShortCut>
          브랜드 스토리 회사소개 채용정보 이용약관{' '}
          <Policy>개인정보처리방침</Policy> 공지사항 고객센터 고객의 소리전문가
          등록사업자 구매회원제휴/광고 문의입점신청 문의
        </ShortCut>
        <ShortCut as="address" addr>
          <CompanyInfo>
            <InfoItem>
              상호명:홈스타그램 이메일:(고객문의) cs@homestagram.com 대표이사:
              최정민 사업자등록번호:119-56-86422
              통신판매업신호번호:제2021-서울강남-0580호 주소: 서울특별시 강남구
              테헤란로 427 위워크타워 10층 작은방
            </InfoItem>
            <InfoItem>
              우리은행 채무지급보증안내 : 홈스타그램은 고객님이 현금결제한
              금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를
              보장하고 있습니다. <Service>서비스가입사실 확인</Service>
            </InfoItem>
            <InfoItem>
              홈스타그램은 개별 판매자가 상품을 판매하는 오픈마켓이며
              홈스타그램은 통신판매중개자로 거래 당사자가 아니므로, 판매자가
              등록한 상품정보 및 거래 등에 대해 일체 책임을 지지 않습니다.
              <InfoItemBottom>
                단 홈스타그램이 판매자라 등록 판매한 상품의 경우는 판매자로서
                책임을 부담합니다.
              </InfoItemBottom>
            </InfoItem>
          </CompanyInfo>
        </ShortCut>
        <Copyright>
          Copyright 2021. homestagram, Co., Ltd. All rights reserved
        </Copyright>
      </Content>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const Content = styled.div`
  max-width: 1100px;
  margin: 40px auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CSInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CSNumber = styled.a`
  font-size: 30px;
`;

const CSTime = styled.span`
  color: #919191;
  font-size: 12px;
`;

const Icon = styled.img`
  width: 30px;
  margin-right: 20px;
`;

const IconNaverPost = styled.img`
  height: 30px;
  margin-right: 20px;
`;

const ShortCut = styled.div`
  margin-top: ${props => (props.addr ? '20px' : '40px')};
  font-size: 12px;
  color: ${props => (props.addr ? '#9d9d9d' : '#6a6a6a')};
`;

const Policy = styled.span`
  font-weight: bold;
  color: black;
`;

const CompanyInfo = styled.dl`
  margin-top: 10px;
`;

const InfoItem = styled.dd`
  margin-bottom: 10px;
`;

const Service = styled.span`
  font-weight: bold;
`;

const InfoItemBottom = styled.p`
  margin-top: 10px;
`;

const Copyright = styled.p`
  margin-top: 20px;
  color: #747474;
  font-size: 13px;
`;
