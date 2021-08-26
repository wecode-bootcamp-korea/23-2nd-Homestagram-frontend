import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const Modal = ({ onOffModal, name, children, id }) => {
  const stop = e => {
    e.stopPropagation();
  };

  const handleModal = e => {
    const { id } = e.target;
    onOffModal(id);
    if (id === 'products') {
      e.stopPropagation();
    }
  };
  return (
    <ModalContainer name={name} id={id} onClick={handleModal}>
      <ModalBox name={name} onClick={stop}>
        {children}
      </ModalBox>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
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

const myPageModal = css`
  position: absolute;
  top: 55px;
  right: 320px;
  width: 200px;
  border: ${({ name }) =>
    name === 'signupTitle' ? '1px sod #424242' : '1px solid #ededed'};
  border-radius: 0 0 3px 3px;
  z-index: 1100;
`;

const ModalBox = styled.div`
  ${props => (props.name === 'mypage' ? myPageModal : '')};
  box-shadow: ${props =>
    props.name === 'products' ? 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px' : ''};
  background-color: ${props =>
    props.name === 'products' ? 'rgba(255, 255, 255, 0.86)' : ''};
`;

export default Modal;
