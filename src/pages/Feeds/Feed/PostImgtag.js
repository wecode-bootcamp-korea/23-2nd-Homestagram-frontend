import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import Modal from '../../../component/Modal/Modal';
import styled from 'styled-components';

const DraggableButtonInCard = () => {
  const [position, setPosition] = useState({
    id: 0,
    xx: 0,
    yy: 0,
    productId: 0,
  });
  const [plusAndSubmit, setPlusAndSubmit] = useState(true);
  const [buttonData, setButtonData] = useState([]);
  const [purchaseProduct, setPurchaseProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([
    {
      id: 0,
      thumbnail: '',
      name: '',
      price: '',
    },
  ]);
  const [targetbutton, setTargetbutton] = useState(0);

  useEffect(() => {
    fetch('./data/purchaseProduct.json')
      .then(res => res.json())
      .then(dates => {
        setPurchaseProduct(dates);
      });
  }, []);

  const dragButton = data => {
    setPosition(prev => {
      return {
        ...prev,
        xx: data.x,
        yy: data.y,
      };
    });
  };

  const cancelPlusButton = ({ target }) => {
    if (target.name === 'totalCencel') {
      setButtonData([]);
      setPlusAndSubmit(true);
    } else {
      if (target.name === 'goBack') {
        setProductsListModal(!productsListModal);
      }
      setPosition(prev => {
        return {
          ...prev,
          id: position.id - 1,
          productId: 0,
        };
      });
      setPlusAndSubmit(!plusAndSubmit);
    }
  };

  const plusbutton = ({ target }) => {
    if (target.name === 'plus') {
      setProductsListModal(!productsListModal);
      setPosition(prev => {
        return { ...prev, id: position.id + 1 };
      });
      setPlusAndSubmit(!plusAndSubmit);
    } else if (position.xx === 0 && position.yy === 0) {
      alert('태그버튼을 옮겨주세요');
    } else {
      setButtonData(prev => {
        return [...prev, position];
      });
      setPosition(prev => {
        return { ...prev, xx: 0, yy: 0 };
      });
      setPlusAndSubmit(!plusAndSubmit);
    }
  };

  const aboutProduct = ({ target }) => {
    if (Number(target.id) !== 0) {
      const targetProduct = buttonData.filter(data => {
        return data.id === Number(target.id);
      });
      setSelectedProduct(
        purchaseProduct.filter(({ id }) => {
          return id === targetProduct[0].productId;
        })
      );
    }
    setTargetbutton(target.id);
  };

  const stop = e => {
    e.stopPropagation();
  };

  const button = buttonData.map(({ id, xx, yy, productId }) => {
    return (
      <div onClick={stop}>
        <Draggable disabled={true} key={id} defaultPosition={{ x: xx, y: yy }}>
          <Button id={id} onClick={aboutProduct}>
            +
          </Button>
        </Draggable>
        {id === Number(targetbutton) && (
          <Draggable
            disabled={true}
            defaultPosition={{ x: xx + 12, y: yy + 12 }}
          >
            <HoverButton>
              <ProductImg src="./images/img.jpg" />
              <ProductInfo>
                <Product name="productName">{selectedProduct[0].name}</Product>
                <Product>{selectedProduct[0].price}</Product>
              </ProductInfo>
              <div>
                <Select>선택</Select>
              </div>
            </HoverButton>
          </Draggable>
        )}
      </div>
    );
  });

  const [productsListModal, setProductsListModal] = useState(false);

  const onOffModal = id => {
    if (id !== 'products') {
      setPosition(prev => {
        return {
          ...prev,

          productId: id,
        };
      });
      setProductsListModal(!productsListModal);
    }
  };

  return (
    <>
      <ImgTagcontainer id={0} onClick={aboutProduct}>
        {!plusAndSubmit && (
          <Draggable
            bounds="parent"
            onDrag={(e, data) => dragButton(data)}
            defaultPosition={{ x: 0, y: 0 }}
          >
            <Button onClick={stop}>+</Button>
          </Draggable>
        )}
        {button}
        {productsListModal && (
          <Modal name="products" id="products" onOffModal={onOffModal}>
            <ProductButton title="title">
              {purchaseProduct === []
                ? '구매하신 목록이 없습니다 !'
                : '구매 목록 중 상품을 선택해주세요'}
            </ProductButton>

            {purchaseProduct.map(({ id, thumbnail, name, price }) => {
              return (
                <ProductButton onClick={() => onOffModal(id)} key={id}>
                  <ProductImg src="./images/img.jpg" />
                  <ProductInfo>
                    <Product name="productName">{name}</Product>
                    <Product>{price}원</Product>
                  </ProductInfo>
                  <div>
                    <Select>선택</Select>
                  </div>
                </ProductButton>
              );
            })}
            <ProductButton name="goBack" onClick={cancelPlusButton}>
              돌아가기
            </ProductButton>
          </Modal>
        )}
      </ImgTagcontainer>
      {plusAndSubmit ? (
        <button name="plus" onClick={plusbutton}>
          추가하기
        </button>
      ) : (
        <button name="sumit" onClick={plusbutton}>
          등록하기
        </button>
      )}
      {!plusAndSubmit && (
        <button name="cencel" onClick={cancelPlusButton}>
          취소하기
        </button>
      )}
      <button name="totalCencel" onClick={cancelPlusButton}>
        태그 전부 삭제
      </button>
    </>
  );
};

export default DraggableButtonInCard;

const ImgTagcontainer = styled.div`
  position: relative;
  height: 612px;
  width: 612px;
`;

const ProductButton = styled.button`
  display: flex;
  position: ${props => (props.type ? 'absolute' : '')};
  width: 100%;
  align-items: center;
  margin: 0px;
  padding: 6px 16px;
  color: ${props => (props.title ? '#35c5f0' : '')};
  background: white;
  border-style: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
`;

const HoverButton = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  width: 280px;
  margin: 0px;
  padding: 6px 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
  background-color: rgba(255, 255, 255, 0.86);
  border-style: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  z-index: 10000;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  border-radius: 22px;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;
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

const Product = styled.div`
  color: #424242;
  line-height: 19px;
  font-size: ${props => (props.name ? '13px' : '11px')};
  font-weight: ${props => (props.name ? '700' : '400')};
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 15px;
  border: 0.3px solid #35c5f0;
  border-radius: 20px;
`;
const Button = styled.button`
  position: absolute;
  width: 24px;
  color: white;
  border-radius: 50%;
  background-color: #36c5f1;

  /* &:hover + HoverButton {
    display: block;
  } */
`;
