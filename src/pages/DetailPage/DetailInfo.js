import Detailoption from './Detailoption';
import styled from 'styled-components';

const DetailInfo = ({ data, productId }) => {
  const { product_title, product_price, product_option, url } = data;
  return (
    <InfoWrap>
      <section>
        <FlexBox>
          <ProductTitle>{product_title}</ProductTitle>
          <div>
            <img src="../images/ribbon.png" alt="ribbon" />
            <img src="../images/share.png" alt="share" />
          </div>
        </FlexBox>
        <ProductPrice>
          <span>{Number(product_price).toLocaleString()}</span>
          <span>원</span>
          <div>특가</div>
        </ProductPrice>
        <ExplanationBox>
          <ExplanationTitle>혜택</ExplanationTitle>
          <span>78p 적립(WELCOME 0.3%적립)</span>
        </ExplanationBox>
        <ExplanationBox>
          <ExplanationTitle>배송</ExplanationTitle>
          <span>3,000원 (50,000원 이상 구매시 무료배송)</span>
        </ExplanationBox>
      </section>
      <Detailoption
        price={product_price}
        option={product_option}
        product_title={product_title}
        url={url}
        productId={productId}
      />
    </InfoWrap>
  );
};

const FlexBox = styled.div`
  display: flex;

  div {
    display: flex;
    margin-left: 30px;

    img {
      width: 30px;
      margin-left: 10px;
    }
  }
`;
const InfoWrap = styled.div`
  width: 461px;
  padding-left: 60px;
  margin: auto;
`;

const ProductTitle = styled.span`
  width: 350px;
  font-size: 22px;
  line-height: 33px;
`;
const ProductPrice = styled.div`
  display: flex;
  padding: 20px 0;

  span:nth-child(1) {
    font-size: 30px;
    font-weight: 900;
  }

  span:nth-child(2) {
    font-size: 26px;
  }

  div {
    width: 30px;
    height: 20px;
    margin-left: 15px;
    color: white;
    line-height: 20px;
    text-align: center;
    background-color: ${props => props.theme.pink};
    border-radius: 2px;
  }
`;
const ExplanationBox = styled.div`
  margin: 10px 0;
`;
const ExplanationTitle = styled.span`
  margin-right: 20px;
  font-size: 14px;
  color: ${props => props.theme.gray};
`;

export default DetailInfo;
