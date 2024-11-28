//import GlobalStyle from './src/styles'
import gitlogo from '../assets/logo.png';
import {Container} from './styles';
function App() {
  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="github logo" /> 
    </Container>
  );
}

export default App;
