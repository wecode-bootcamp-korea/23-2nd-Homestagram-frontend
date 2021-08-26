import React from 'react';
import styled from 'styled-components';
import Feed from './Feed/Feed';

const Feeds = ({ feedData, update, getData, next, followListUpdate }) => {
  return (
    <div>
      {feedData &&
        feedData.map(feedInfo => {
          return (
            <Feed
              key={feedInfo.id}
              feedInfo={feedInfo}
              update={update}
              alt={feedInfo.src}
              feeduserImg={'./images/profile.png'}
              followListUpdate={followListUpdate}
            />
          );
        })}
      {next && (
        <MoreBox>
          <More onClick={getData}>더보기</More>
        </MoreBox>
      )}
    </div>
  );
};

export default Feeds;

const MoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const More = styled.button`
  padding: 10px;
  margin-left: 12px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
  background-color: #32c6f0;
`;
