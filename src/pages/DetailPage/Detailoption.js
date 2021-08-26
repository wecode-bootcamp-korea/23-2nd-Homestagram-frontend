import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { flexBox } from '../../styles/Mixin';
import styled from 'styled-components';

const Detailoption = ({ price, option, product_title, url, productId }) => {
  const history = useHistory();
  const [list, setList] = useState([]);
  const changeOption = e => {
    const newValue = e.target.value;

    for (let i = 0; i < list.length; i++) {
      if (newValue === list[i].color) {
        alert('이미 선택한 색상입니다');
        return;
      }
    }

    setList([...list, { color: newValue, amount: 1 }]);
  };

  const changeStock = (e, stockIndex) => {
    const amount = Number(e.target.value);

    const newList = list.map((item, index) => {
      if (index === stockIndex) {
        return { ...item, amount };
      } else {
        return item;
      }
    });

    setList(newList);
  };

  const deletelist = (e, deleteIndex) => {
    const deleteList = list.filter((item, index) => {
      return index !== deleteIndex;
    });

    setList(deleteList);
  };

  const goToPayment = e => {
    if (list.length !== 0) {
      history.push({
        pathname: '/orderpage',

        state: {
          price: price,
          product_title: product_title,
          url: url,
          amount: list[0].amount,
          color: list[0].color,
          id: productId,
        },
      });
      console.log(productId);
    } else {
      alert('제품을 선택해 주세요!');
    }
  };

  const total =
    list.reduce((acc, crr) => {
      return acc + crr.amount;
    }, 0) * price;

  let stockArr = [0, 1, 2];

  return (
    <div>
      <div>
        <Colorselect onChange={changeOption} value="">
          <option value="" disabled>
            색상을 선택해주세요.
          </option>

          {option &&
            option.map((item, index) => (
              <option key={index} value={item.color_name}>
                {item.color_name}(남은 수량:{item.product_stocks})
              </option>
            ))}
        </Colorselect>
      </div>
      <div>
        <OptionList>
          {list.map((item, index) => (
            <li key={index}>
              <div>
                <span>색상:{item.color}</span>
                <Xbutton onClick={e => deletelist(e, index)}>X</Xbutton>
              </div>
              <div>
                <select
                  onChange={e => changeStock(e, index)}
                  value={item.amount}
                >
                  {stockArr.map((stock, index) => (
                    <option key={index} value={index}>
                      {stock}
                    </option>
                  ))}
                </select>
                <p>{Number(item.amount * price).toLocaleString()}원</p>
              </div>
            </li>
          ))}
        </OptionList>

        <TotaPrice>
          <span>주문금액</span>
          <span>{total.toLocaleString()}원</span>
        </TotaPrice>
        <FlexBox>
          <Button>장바구니</Button>
          <Button purchase onClick={goToPayment}>
            바로구매
          </Button>
        </FlexBox>
      </div>
    </div>
  );
};

const Colorselect = styled.select`
  width: 461px;
  height: 45px;
  margin: 20px 0;
  border-color: ${props => props.theme.blue};
  border-radius: 5px;

  :focus {
    border-color: ${props => props.theme.blue};
  }

  option {
    border-color: ${props => props.theme.blue};
  }
`;

const OptionList = styled.ul`
  margin-top: 10px;
  border-radius: 10px;

  li {
    width: 461px;
    height: 64px;
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: ${props => props.theme.lightg};

    div {
      ${flexBox('flex', 'space-between')};
      padding: 5px 10px;

      span {
        font-size: 18px;
      }
      select {
        width: 100px;
        height: 20px;
      }

      p {
        font-size: 19px;
      }
    }
  }
`;
const Xbutton = styled.button`
  background-color: transparent;
  border: none;
`;

const TotaPrice = styled.div`
  ${flexBox('flex', 'space-between')}
  width: 461px;
  line-height: 70px;
  font-weight: 800;

  span:nth-child(1) {
    font-size: 17px;
  }
  span:nth-child(2) {
    font-size: 22px;
  }
`;
const FlexBox = styled.div`
  width: 461px;
`;
const Button = styled.button`
  width: 227px;
  height: 55px;
  margin: 0 1px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.blue};
  font-size: 17px;
  font-weight: 800;
  color: ${props => (props.purchase ? 'white' : '#35c5f0')};
  background-color: ${props => (props.purchase ? '#35c5f0' : 'white')};
`;
export default Detailoption;
