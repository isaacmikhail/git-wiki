//import GlobalStyle from './src/styles'
import gitlogo from '../assets/logo.png';
import {Container} from './styles';
import Input from '../Components/Input';
import ItemRepo from '../Components/ItemRepo';
import { useState } from 'react';
import Button from '../Components/button';
import { api } from '../services/API';


function App() {
    const [currentRepo, setCurrentRepo]= useState('')
    const [repos, setRepos]=useState([]);
    const handleSearchRepo = async() => {
      const {data}= await api.get(`repos/${currentRepo}`)
      if(data.id){
        setRepos(prev=> [...prev, data]);
      }
    }
  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="github logo" />
      <Input value={currentRepo} onChange={(e)=> setCurrentRepo( e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo}/>)}
      
    </Container>
  );
}

export default App;
