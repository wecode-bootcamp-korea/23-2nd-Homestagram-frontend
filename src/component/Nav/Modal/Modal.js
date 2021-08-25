import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const Modal = ({ onOffModal, name, children, id }) => {
  const stop = e => {
    e.stopPropagation();
  };

  const handlemodal = e => {
    const { id } = e.target;
    onOffModal(e.target.id);
    if (id === 'products') {
      e.stopPropagation();
    }
  };
  return (
    <ModalCantainer name={name} id={id} onClick={handlemodal}>
      <ModalBox name={name} onClick={stop}>
        {children}
      </ModalBox>
    </ModalCantainer>
  );
};

const ModalCantainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100000;
  background: ${props => (props.name === 'write' ? '#00000080' : '')};
`;

const mypageModal = css`
  position: absolute;
  top: 72px;
  right: 0px;
  width: 200px;
  border: 1px solid #ededed;
  border-radius: 0 0 3px 3px;
  z-index: 1100;
`;

const ModalBox = styled.div`
  ${props => (props.name === 'mypage' ? mypageModal : '')};
  box-shadow: ${props =>
    props.name === 'products' ? 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px' : ''};
  background-color: ${props =>
    props.name === 'products' ? 'rgba(255, 255, 255, 0.86)' : ''};
`;

export default Modal;
