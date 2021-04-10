import React from "react";
import styled from "styled-components";
import FlextItem from "../../layout/FlexItem";
import FlexWrapper from "../../layout/FlexWrap";
import Post from "../../UI/organisms/post/Post";

const Wrapper = styled.div`
  position: relative;
  padding-top: 2em;
  padding-bottom: 2em;
`;

const Posts = () => {
  const post_data = [
    {
      topic: "Product Design Sprint",
      content:
        "A five-day workshop that will help you answer crucial business questions",
    },
    {
      topic: "Scoping Session",
      content:
        "A workshop aimed at shaping your business idea, answering questions regarding project planning",
    },
    {
      topic: "UX Review",
      content:
        "An evaluation which will help you radically improve your product.",
    },
    {
      topic: "Code Review",
      content:
        "Do you know what one of the key secrets of success is what makes people successful in business",
    },
  ];
  return (
    <Wrapper className="container">
      <FlexWrapper>
        {post_data.map((item) => (
          <FlextItem flex={1}>
            <Post
              heading={item.topic.toLocaleUpperCase()}
              minicaption={item.content}
            />
          </FlextItem>
        ))}
      </FlexWrapper>
    </Wrapper>
  );
};

export default Posts;
