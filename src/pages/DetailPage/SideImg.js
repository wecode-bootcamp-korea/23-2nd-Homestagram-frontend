import styled from 'styled-components';

const SideImg = props => {
  const { url, product_images } = props.data;

  return (
    <FlexBox>
      <SideImgCotainer>
        {product_images &&
          product_images.map((img, index) => (
            <Imglist key={index}>
              <Img src={img} alt="sideimg" />
            </Imglist>
          ))}
      </SideImgCotainer>
      <ThumbnailImg>
        <img src={url} alt="thumbnailimg" />
      </ThumbnailImg>
    </FlexBox>
  );
};
const SideImgCotainer = styled.ul`
  margin-right: 10px;
`;
const Imglist = styled.li`
  width: 56px;
  height: 56px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  :hover {
    border: 1px solid ${props => props.theme.blue};
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;

  :hover {
    transform: scale(1.3);
    transition: all 0.2s linear;
  }
`;
const ThumbnailImg = styled.div`
  width: 558px;
  height: 558px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const FlexBox = styled.div`
  display: flex;
`;
export default SideImg;
