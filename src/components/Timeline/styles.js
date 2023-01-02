import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100vw;
  padding: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 32px 16px;
    .timelineVideos {
      margin: auto;
      width: calc(100% - 16px * 5);
      div{

      }
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          max-height: 45px;
          max-width: 88%;
          overflow-y: hidden;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
      .slick-prev:before, .slick-next:before{
        color: ${({ theme }) => theme.textColorBase || "#222222"};
      }
    }
  }
`;
