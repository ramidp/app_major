import { Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader'
import Main1 from '../components/Main1'
import Main2 from '../components/Main2'
import Main3 from '../components/Main3'
import styled from 'styled-components';
import Main4 from './Main4';

WebFont.load ({
  google: {
    families: ['Playfair+Display:500']
  }
});

const MainTotal = () => {

  return (
    <AppContainer className="col-lg-6 col-12">
          <Routes>
              <Route path='/' element={<Main1/>}/>
              <Route path='/main2' element={<Main2/>}/>
              <Route path='/main3' element={<Main3/>}/>
              <Route path='/main4' element={<Main4/>}/>
          </Routes>
    </AppContainer> 
   );
}

export default MainTotal;

// Styled-components

const AppContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 33px;
    background-color: ${props => props.theme.primary};
    border-radius: 10px;
    padding: 20px;
    width: 710px;
    min-height: 784px;
    h1 {
        color: ${props => props.theme.fontPrim};
    }
  @media (max-width: 1100px) {
      width: 38em}
  @media (max-width: 801px) {
      width: 40em}
  @media (max-width: 650px) {
      width: 30em}
  @media (max-width: 500px) {
      width: 25em}
  @media (max-width: 400px) {
      width: 20em}
`


