import React, { useState } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from './features/theme/themeSlice'

import Social from './components/Social'
import Overview from './components/Overview'

function App() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const [customTheme, setcustomTheme] = useState(theme)
  const [btnStatus, setBtnStatus] = useState(false)

  const handleChangeTheme = () => {
    if (theme) {
      setcustomTheme(false)
      dispatch(changeTheme(false))
    } else {
      setcustomTheme(true)
      dispatch(changeTheme(true))
    }
  }

  return (
    <Main ct={customTheme}>
      <Container>
        <TitleContainer ct={customTheme}>
          <div>
            <h2 className='test'>Social media Dashboard</h2>
            <small>Total Followers: 23,004</small>
          </div>
          <BtnContainer btnpc={btnStatus}>
            <BtnCircle btnpc={btnStatus} onClick={() => [handleChangeTheme(), btnStatus ? setBtnStatus(false) : setBtnStatus(true)]} />
          </BtnContainer>
        </TitleContainer>

        <Social />

        <h3 style={{ color: 'white', marginTop: '1.5em', marginBottom: 0, padding: 0 }}>Overview - Today</h3>
        <Overview />
      </Container>
    </Main>
  );
}

const Main = styled.div`
margin: 0;
padding: 0:
width: 100%;
height: 100vh;
font-family: 'Inter', sans-serif;
background-color: ${props => props.ct ? "white" : "hsl(230, 17%, 14%)"};

@media(max-width: 425px){
  height: 100%;
}
`

const Container = styled.div`
height: 100%;
width: 90%;
position: relative;
margin: auto;
`

const TitleContainer = styled.div`
color: ${props => props.ct ? "black" : "white"};
padding: 2em 0;
display: flex;
flex-direction: row;
justify-content:space-between;

.test{
  margin:0;
  padding:0;
}

@media(max-width: 425px){
  flex-direction: column;
}
`

const BtnContainer = styled.div`
height: 1.5em;
width: 3em;
background: linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%));
display: flex;
justify-content: ${(props) => props.btnpc ? 'end' : 'start'};
align-items: center;
border-radius: 3em;

@media(max-width: 425px){
  position: relative;
  margin-right:0;
  margin-left:auto;
}
`

const BtnCircle = styled.div`
height: 1.3em;
width: 1.3em;
margin: 0 0.2em;
justify-content: end;
border-radius: 100%;
background-color: ${(props) => props.btnpc ? 'white' : 'hsl(228, 28%, 20%)'};
cursor:pointer;
`

export default App;
