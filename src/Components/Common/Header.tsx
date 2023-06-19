import styled from "styled-components";
import { GiBookmarklet } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <LogoSide>
            <Logo></Logo>
            <LogoText>Bookstore</LogoText>
          </LogoSide>
          <ButtonSide>
            <Icon />
            <Button>Upload Now</Button>
          </ButtonSide>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Logo = styled(GiBookmarklet)`
  border-radius: 50%;
  border: 2px solid #363636;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.div`
  margin-left: 7px;
  font-weight: 500;
  font-size: 22px;
`;

const LogoSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: translate(0px, -2px);
    color: #363636;
  }
`;

const Icon = styled(FiSearch)`
  font-size: 30px;
  color: #363636;
  margin-right: 7px;

  :hover {
    cursor: pointer;
    transition: all 350ms;
    color: black;
  }
`;

const Button = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #e14b64;
  color: white;
  font-weight: 500;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: #f42e4f;
  }
`;

const ButtonSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  /* background-color: grey; */
  width: 90%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
