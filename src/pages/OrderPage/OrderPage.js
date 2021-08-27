import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import PaypalButton from './PaypalButton/PaypalButton';

const OrderPage = () => {
  const zonecodeInput = useRef('');
  const addrInput = useRef('');

  const [postWindow, setPosWindow] = useState(false);
  const location = useLocation();

  const handleComplete = data => {
    const zonecode = data.zonecode;
    const fullAddress = data.address;
    zonecodeInput.current.value = zonecode;
    addrInput.current.value = fullAddress;
  };

  const postWindowOn = () => {
    setPosWindow(!postWindow);
  };

  let themeObj = {
    searchBgColor: '#35c5f0', //검색창 배경색
    queryTextColor: '#FFFFFF', //검색창 글자색
  };

  const { url, product_title, price, amount, color, id } = location.state;
  return (
    <Wrapper>
      <OrderContainer>
        <TitleText>주문/결제</TitleText>
        <ShippingAddr>
          배송지
          <hr />
          <UserInfoContainer>
            <UserInfo>
              <UserInfoText>받는 사람</UserInfoText>
              <UserInfoInput />
            </UserInfo>
            <UserInfo>
              <UserInfoText>연락처</UserInfoText>
              <CarrierSelect readOnly>010</CarrierSelect>
              <UserInfoInput placeholder="입력해주세요" />
            </UserInfo>
            {postWindow && (
              <DaumPostcode
                onComplete={handleComplete}
                autoClose={true}
                autoResize={true}
                theme={themeObj}
                style={{ marginBottom: '10px' }}
              />
            )}
            <AddressContainer>
              <UserInfoText>주소</UserInfoText>
              <div>
                <UserInfo>
                  <SearchAddr onClick={postWindowOn}>주소찾기</SearchAddr>
                  <UserInfoInput type="text" ref={zonecodeInput} />
                </UserInfo>
                <UserInfo>
                  <UserInfoInput type="text" ref={addrInput} />
                </UserInfo>
                <UserInfo>
                  <UserInfoInput type="text" placeholder="상세주소 입력" />
                </UserInfo>
              </div>
            </AddressContainer>
          </UserInfoContainer>
        </ShippingAddr>
        <OderProudcts>
          주문상품
          <hr />
          <ProductsContainer>
            <OneProduct>
              <OneProductImage src={url} alt="product" />
              <OneProductInfo>
                <OneProductName>{product_title}</OneProductName>
                <OneProductOption></OneProductOption>
                <OneProductPrice>
                  {Number(price).toLocaleString()}원 {amount}개 option:{color}
                </OneProductPrice>
              </OneProductInfo>
            </OneProduct>
          </ProductsContainer>
        </OderProudcts>
      </OrderContainer>
      <Payment>
        <Paybox>
          <PayInfo>
            <PayInfoTitle>결제금액</PayInfoTitle>
            <PayInfoKind>
              <PayInfoText>총 상품 금액</PayInfoText>
              <PayInfoPrice>
                {(Number(price) * amount).toLocaleString()}원
              </PayInfoPrice>
            </PayInfoKind>
            <PayInfoKind>
              <PayInfoText>배송비</PayInfoText>
              <PayInfoPrice>0원</PayInfoPrice>
            </PayInfoKind>
            <PayInfoKind>
              <PayInfoText>쿠폰 사용</PayInfoText>
              <PayInfoPrice>0원</PayInfoPrice>
            </PayInfoKind>
            <PayInfoKind>
              <PayInfoText>포인트 사용</PayInfoText>
              <PayInfoPrice>0원</PayInfoPrice>
            </PayInfoKind>
            <hr />
            <AmountPay>
              <TotalPaymentText>최종 결제 금액</TotalPaymentText>
              <TotalPaymentPrice>
                {(Number(price) * amount).toLocaleString()}원
              </TotalPaymentPrice>
            </AmountPay>
          </PayInfo>
          <PayButton>
            <PaypalButton price={Number(price)} productId={id} />
            {(Number(price) * amount).toLocaleString()}원 결제하기
          </PayButton>
        </Paybox>
      </Payment>
    </Wrapper>
  );
};

export default OrderPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;

const TitleText = styled.header`
  margin-top: 50px;
  font-size: 30px;
  font-weight: bold;
`;

const ShippingAddr = styled.div`
  width: 500px;
  margin: 50px 0 100px 0;
  font-size: 20px;
  font-weight: bold;
`;
const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressContainer = styled.div`
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
  width: 410px;
  margin-bottom: 20px;
`;

const UserInfoText = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  margin-right: 30px;
  font-size: 15px;
  color: rgb(117, 117, 117);
  line-height: 18px;
`;

const UserInfoInput = styled.input`
  width: 100%;
  padding: 8px 15px 9px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 21px;
`;

const CarrierSelect = styled.div`
  text-align: center;
  width: 100px;
  padding-top: 13px;
  margin-right: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
`;

const SearchAddr = styled.button`
  text-align: center;
  width: 100px;
  margin-right: 10px;
  background: none;
  border-radius: 5px;
  border: 1px solid #35c5f0;
  user-select: none;
  font-weight: bold;
  color: #35c5f0;
  cursor: pointer;
`;

const OderProudcts = styled.div`
  width: 500px;
  font-size: 20px;
  font-weight: bold;
`;

const ProductsContainer = styled.div``;

const OneProduct = styled.div`
  display: flex;
`;

const OneProductImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 12px;
  border-radius: 4px;
`;

const OneProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const OneProductName = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
`;

const OneProductOption = styled.ul`
  margin-bottom: 10px;
  font-size: 12px;
`;

const OneProductPrice = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Payment = styled.section`
  position: relative;
`;
const Paybox = styled.div`
  position: sticky;
  top: 80px;
`;

const PayInfo = styled.div`
  padding-top: 30px;
  border: 1px solid #ebebed;
`;

const PayInfoTitle = styled.strong`
  padding: 20px 0 0 20px;
  font-size: 20px;
  font-weight: bold;
`;

const PayInfoKind = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
  margin: 30px 0;
`;

const PayInfoText = styled.div`
  margin-right: 200px;
`;

const PayInfoPrice = styled.div`
  font-weight: bold;
`;

const AmountPay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  padding: 0 20px 20px 20px;
`;

const TotalPaymentText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TotalPaymentPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #35c5ef;
`;

const PayButton = styled.button`
  text-align: center;
  width: 100%;
  padding: 15px 10px;
  margin-top: 20px;
  background-color: #35c5f0;
  border: 1px solid #35c5f0;
  border-radius: 4px;
  user-select: none;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  line-height: 20px;
  cursor: pointer;
`;
