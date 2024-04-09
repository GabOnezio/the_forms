import { UserDataContainer, ConatinerContent } from './style';// Certifique-se de importar o estilo corretamente
import { Scrollbars } from 'react-custom-scrollbars';
interface User {
    id: string; // Adicionado um campo id
    name: string;
    age: string;
    email: string;
}

const ReceiveFormUser = () => {
    // lendo os dados dos usuários armazenados no localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') ?? '[]') as User[];

    return (
      <ConatinerContent style={{ 
        backgroundImage: "url('https://cdn.midjourney.com/6c0ae2fb-9f7f-473d-acee-4e27590f23fd/0_1.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* O restante do seu componente */}
        <UserDataContainer>
          <Scrollbars style={{ 
            width: 800, 
            height: 700,
            backgroundColor: '#ffd85862',
            borderRadius: 30,
          }}>
            <h2>Dados do Usuáriosss</h2>
            <table>
              <thead>
                <tr>
                  <th>Usuários</th>
                  <th>Idades</th>
                  <th>Gmail</th>
                </tr>
              </thead>
              <tbody>
                {storedUsers.map((user) => (
                  <tr key={user.id}> {/* Usando o email como chave */}
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Scrollbars>
        </UserDataContainer>
      </ConatinerContent>
      );
    };
    
    export default ReceiveFormUser;