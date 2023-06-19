import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <Video src='https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906' autoPlay loop muted/>
       <Cover>
        <Genre></Genre>
       <TextHold>
          <BigText>Explore the World's leading <br /> Books and Authors.</BigText>
          <SmallText>Millions of designers and agencies around the world showcase their portfolio work on Dribbble. <br />The home to the world’s best design and creative professionals.</SmallText>
        </TextHold>
        <InputHolder>
        <Input placeholder="Enter a book or Author's name"/>
        <SearchIcon/>
        </InputHolder>
       </Cover>
      </Container>
    </div>
  )
}

export default HomeScreen;

const Genre = styled.div`
width: 90%;
height: 80px;
background-color: white;
position: absolute;
margin-top: -330px;
`;

const Input = styled.input`
width: 400px;
height: 35px;
border: none;
padding-left: 13px;
outline: none;
border-radius: 15px;

::placeholder{
  font-size: 16px;
  font-weight: 600;
  color: #5c5c5c;
}
`;

const SearchIcon = styled(FiSearch)`
width: 40px;
height: 40px;
border-radius: 5px;
background-color: grey;
color: black;
transition: all 350ms;

:hover{
  cursor: pointer;
  color: #393939;
}
`;

const InputHolder = styled.div`
position: absolute;
margin-top: 370px;
width: 450px;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Cover = styled.div`
height: calc(100vh - 70px);
width: 100%;
background-color: rgba(0,0,0,0.7);
position: absolute;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const SmallText = styled.div`
width: 100%;
text-align: center; 
margin-top: 25px;
`;

const BigText = styled.div`
text-align: center;
font-size: 40px;
font-weight: 700;
line-height: 50px;
margin-top: 40px;
`;

const TextHold = styled.div`
position: absolute;
color: white;
`;

const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
background-color: rgba(0,0,0,0.5);
`;

const Container = styled.div`
position: relative;
width: 100%;
height: calc(100vh - 70px);
background: rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
`;
