import { Component } from 'react';
// import { nanoid } from 'nanoid/non-secure';
import Container from './container/Container';
import Phonebook from './Phonebook/Phonebook';

class App extends Component{
  state = {
    contacts: [],
    name: ''
  }
   
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
   

render() {

return(
  <Container title="Phonebook">
     
 <Phonebook
 onChange={this.handleChange}
 
 />

  </Container>
  )
};
}

export default App;