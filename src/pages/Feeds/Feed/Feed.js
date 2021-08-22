import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FeedName from './FeedName/FeedName';
import PostedTag from './postedTags/PostedTag';
import Comment from './Commet/Comment';
import axios from 'axios';

const Feed = ({ feedInfo }) => {
  const {
    feeduserId,
    feeduserImg,
    content,
    alt,
    src,
    designType,
    postedDate,
    tags,
    comment,
    feedId,
    getData,
  } = feedInfo;
  const [isClickedTag, setIsClickedTag] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [bookmark, setbookmark] = useState(false);
  const stop = e => {
    e.stopPropagation();
  };
  console.log(feedInfo.feedId);
  // useEffect(() => {
  //   axios
  //     .post(`http://10.58.3.119:8000/postings/${feedInfo.feedId}/bookmark`)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // }, [bookmark]);

  const clickedBookmark = () => {
    axios
      .post(`http://10.58.3.119:8000/postings/${feedInfo.feedId}/bookmark`)
      .then(res => {
        setbookmark(prev => !prev);
      })
      .catch(err => console.log(err));
  };

  const aboutProduct = ({ target }) => {
    setIsClickedTag(target.id);
  };

  const postedTags =
    tags &&
    tags.map(({ id, xx, yy, product_title, product_price, thumbnail_url }) => {
      return (
        <PostedTag
          key={id}
          id={id}
          xx={xx}
          yy={yy}
          product_title={product_title}
          product_price={product_price}
          thumbnail_url={thumbnail_url}
          stop={stop}
          aboutProduct={aboutProduct}
          isClickedTag={isClickedTag}
        ></PostedTag>
      );
    });

  return (
    <FeedContainer id={0} onClick={aboutProduct}>
      <FeedName
        feeduserId={feeduserId}
        alt={alt}
        src={feeduserImg}
        postedDate={postedDate}
        designType={designType}
        getData={getData}
      />
      <FeedImg
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        url={src}
      >
        {isShown && postedTags}
      </FeedImg>
      <ContentAndBookmark>
        <Content>{content}</Content>
        <Bookmark
          onClick={clickedBookmark}
          src={
            bookmark ? './images/checked_bookmarks.png' : './images/ribbon.png'
          }
        ></Bookmark>
      </ContentAndBookmark>
      <Comment
        feeduserImg={feeduserImg}
        comment={comment}
        feedId={feedId}
        getData={getData}
      />
    </FeedContainer>
  );
};

const ContentAndBookmark = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Bookmark = styled.img`
  width: 30px;
  height: 30px;
  margin: 30px 20px 10px 15px;
`;
const Content = styled.div`
  margin: 30px 0px 10px 15px;
  font-size: 15px;
  line-height: 28px;
  color: rgb(66, 66, 66);
  overflow-wrap: break-word;
`;
const FeedContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 614px;
  margin-top: 60px;
  background-color: white;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

const FeedImg = styled.div`
  position: relative;
  height: 612px;
  width: 612px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100%;
  cursor: pointer;
`;

export default Feed;
