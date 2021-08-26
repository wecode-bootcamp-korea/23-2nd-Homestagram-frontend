import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const PostedTag = ({
  id,
  xx,
  yy,
  product_title,
  product_price,
  thumbnail_url,
  stop,
  aboutProduct,
  isClickedTag,
  product_id,
}) => {
  let history = useHistory();
  const goToDetailPage = () => {
    history.push(`/detailpage/${product_id}`);
  };
  return (
    <div onClick={stop}>
      <Draggable disabled={true} key={id} defaultPosition={{ x: xx, y: yy }}>
        <Button id={id} onClick={aboutProduct}>
          +
        </Button>
      </Draggable>
      {Number(id) === Number(isClickedTag) && (
        <Draggable
          disabled={true}
          defaultPosition={{ x: Number(xx) + 12, y: Number(yy) + 12 }}
        >
          <HoverButton onClick={goToDetailPage}>
            <ProductImg src={thumbnail_url} alt={thumbnail_url} />
            <ProductInfo>
              <Product name="productName">{product_title}</Product>
              <Product>{product_price}</Product>
            </ProductInfo>
            <div>
              <Select>선택</Select>
            </div>
          </HoverButton>
        </Draggable>
      )}
    </div>
  );
};

export default PostedTag;

const Button = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  color: white;
  border-radius: 50%;
  border: none;
  background-color: #36c5f1;
`;

const HoverButton = styled.button`
  position: absolute;
  z-index: 10000;
  display: flex;
  width: 280px;
  align-items: center;
  cursor: pointer;
  margin: 0px;
  padding: 6px 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
  background-color: rgba(255, 255, 255, 0.86);
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 15px;
  border-radius: 4px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  border-radius: 22px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: left;
`;

const Product = styled.div`
  font-weight: 700;
  color: #424242;
  font-size: ${props => (props.name ? '13px' : '11px')};
  font-weight: ${props => (props.name ? '700' : '400')};
  line-height: 19px;
`;

const Select = styled.div`
  text-align: center;
  padding: 6px 15px;
  line-height: 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #35c5f0;
`;
