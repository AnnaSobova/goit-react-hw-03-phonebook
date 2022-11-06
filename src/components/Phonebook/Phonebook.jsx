import {Component }from 'react';
import FormPhonebook from './Form/Form';
import InputName from './Input/InputName';


class Phonebook extends Component{
    state = {
        name: '',
        number: '',
      };

      handleChange= event=>{
        const{name,value}=event.currentTarget;
        this.setState({[name]: value});
      };

       
      handleSubmit=event=>{
        event.preventDefault();
        this.props.OnSubmit(this.state);
        this.reset();
      };
     
      reset=()=>{
        this.setState({name:'',number:''});
      }

       render(){
        return(
            <>
            <FormPhonebook onSubmit={this.clickOnBtnSubmit}>
              <InputName value={this.state.name} onChange={this.handleChange}/>
            </FormPhonebook>
            </>
        )
       }

      

};

export default Phonebook;



