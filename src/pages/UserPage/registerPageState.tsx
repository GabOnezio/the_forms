import { useState } from 'react';
import { RegisterUserContainer, StyledLabel, StyledInput, StyledButton } from './style';

// Definindo a interface User
interface User {
    id: string;
    name: string;
    age: string;
    email: string;
  }
  

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o recarregamento da pagina
    const newUser: User = { id: Date.now().toString(), name, age, email };
    const storedUsers = JSON.parse(localStorage.getItem('users') ?? '[]');
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    // Reset form fields
    setName('');
    setAge('');
    setEmail('');
    /* navigate('/receive-user, { state: {updateUsers } }'); Comentando para evitar redirecionamento */
};

  return (
    <RegisterUserContainer>
      <form onSubmit={handleSubmit}>
        <StyledLabel>
          Name:
          <StyledInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </StyledLabel>
        <StyledLabel>
          Idade:
          <StyledInput type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </StyledLabel>
        <StyledLabel>
          Email:
          <StyledInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </StyledLabel>
        <StyledButton type="submit">Cadastrar</StyledButton>
      </form>
    </RegisterUserContainer>
  );
}

export default RegisterUser;
