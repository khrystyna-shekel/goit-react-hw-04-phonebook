import React from 'react';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledBtn,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`Contact with name ${name} already exists!`);
      return;
    }

    this.props.handleAddContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleFormSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            onChange={this.handleInput}
            name="name"
            type="text"
            value={this.state.name}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledInput
            onChange={this.handleInput}
            name="number"
            type="tel"
            value={this.state.number}
            required
          />
        </StyledLabel>
        <StyledBtn type="submit">Add to contact</StyledBtn>
      </StyledForm>
    );
  }
}
