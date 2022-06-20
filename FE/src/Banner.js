import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <Logo src={"/logo.png"} />
      <LinksContainer>
        <NavigationLink>About</NavigationLink>
        <NavigationLink>Portfolio</NavigationLink>
        <NavigationLink>Contact</NavigationLink>
      </LinksContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffe0cf;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 30vh;
`;

const Logo = styled.img`
  height: auto;
  width: 50%;
  max-width: 200px;
  max-height: 200px;
  margin-left: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-right: 20px;
  height: auto;
  width: auto;
`;

const NavigationLink = styled.h2`
  color: black;
  text-decoration: none;
  padding-right: 30px;
  padding-left: 30px;
  font-size: 25px;

  &:hover {
    cursor: pointer;
    border-bottom: 5px solid #cbdee9;
    color: #cbdee9;
    color: #c68688;
    font-size: 25px;
    /* font-weight: bold; */
  }
`;

export default Banner;
