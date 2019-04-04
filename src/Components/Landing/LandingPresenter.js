import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Image = styled.div`
  height: 40vh;
  background-image: url("https://images.unsplash.com/photo-1547097465-21d286cfd973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80");
  background-size: cover;
  background-position: center center;
`;

const Description = styled.p`
  font-size: 2rem;
  text-align: center;
  padding: 2rem;
  line-height: 3rem;
`;

const Landing = () => (
  <Container>
    <Image />
    <Description>
      Hello, This is my Playground for React.<br />
      Happy Coding!
    </Description>
  </Container>
);

export default Landing;
