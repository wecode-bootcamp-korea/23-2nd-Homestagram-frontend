import React from 'react';
import Feed from './Feed/Feed';

const Feeds = ({ feedData, getData }) => {
  return (
    <div>
      {feedData &&
        feedData.map(feedInfo => {
          return (
            <Feed key={feedInfo.id} feedInfo={feedInfo} getData={getData} />
          );
        })}
    </div>
  );
};

export default Feeds;
