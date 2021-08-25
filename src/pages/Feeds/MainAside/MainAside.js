import React from 'react';
import styled from 'styled-components';

const MainAside = () => {
  return (
    <MainAsideAll>
      <MainAsideContainer>
        <Userprofil>
          <UserImg alt="mango_9324Profilimg" src="./images/img.jpg" />
          <div>
            <div>최정민</div>
          </div>
        </Userprofil>
      </MainAsideContainer>
    </MainAsideAll>
  );
};
export default MainAside;

const MainAsideAll = styled.div`
  position: relative;
`;

const MainAsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 60px;
  border: 1px solid gray;
`;

const Userprofil = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 293px;
  margin-bottom: 4px;
  padding-bottom: 4px 0px 3px 0px;
`;

const UserImg = styled.img`
  padding: 3px 8px;
  border-radius: 100%;
  height: 46px;
  width: 46px;
`;
