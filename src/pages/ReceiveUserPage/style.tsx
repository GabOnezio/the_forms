import styled from 'styled-components';


export const Scrollbars = styled.div`
    border: 1px solid #000000;
    border-style: ridge;
    border-radius: 30px;
    background-color: #000000;

`;

export const ConatinerContent = styled.div`

    background-position: center;
    width: 100%;
    display: flex; // Flexbox para centralizar o conteúdo
    justify-content: center;
    align-items: center;
    opacity: 100%;
    background-color: #000000;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    //backdrop-filter: blur(200px);

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://cdn.midjourney.com/6c0ae2fb-9f7f-473d-acee-4e27590f23fd/0_1.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 87%;
    filter: blur(10px);
    z-index: -1;
 }
`;


export const UserDataContainer = styled.div`
    position: relative;
    width: 800px;
    height: 700px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-top: -250px;
    padding: 2px;
    background-color: initial;
    opacity: 1.84;   
    border: 0.20cap ridge rgb(0, 0, 0); /* Borda opcional para melhorar a estética */

    &::after {
        content: "";
        backface-visibility: visible;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: 1.04;
        border-radius: 30px;
        background-image: linear-gradient(2deg, #000000, #e5ff0028, #ff840047) ;
        filter: blur(11px);
        backdrop-filter: blur(12px);
        z-index: 1;
    }

    h2, table, thead, th, tbody tr {
        margin-top: 20px;
        padding-top: 10px;
        position: relative;
        text-align: center;
        z-index: 2; /* Garante que o conteúdo fique acima do efeito de vidro */
    }

    /* Estilos adicionais para h2, table, thead, th, td e tbody tr */
    h2 {
        color: #000000;
        box-sizing: border-box 34px;
        font-family: 'Roboto', sans-serif;
        margin-top: 40px;
        padding-top: 10px;
        z-index: 2; /* Garante que o texto fique acima do fundo desfocado */
        }


        table {
        border-radius: 30px; // Borda arredondadas
        position: absolute;
        top: 56px; left: 40px;
        align-content: start;
        width: 800px; // largura da tabela em relação da tela
        max-width: 700px; // Máximo de largura da tabela
        margin-bottom:78%; // Espaça    mento abaixo da tabela
        z-index: 3; /* Garante que o texto fique acima do fundo desfocado */

        }

        thead {
        color: #ffffff9f;
        position: sticky;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        margin-bottom: 3px;
        //z-index: 4; /* Garante que o texto fique acima do fundo desfocado */
    
        }

        th, td {
            padding: 2px;
            align-content: start;
            border: 1.2mm ridge rgb(0, 0, 0);
            border-radius: 30px; // Borda arredondadas
            text-align: center; // Alinhamento do texto
        }

        th {
            position: static;
            background-color: #000000eb; // Cor de fundo para os cabeçalhos da tabela
            color: #ffffff; // Cor do texto do texto para os cabeçalhos
        }
        
        tbody tr {
            position: static;
            background-color: #0e09059e; // Cor de fundo para linhas ímpares
            color: #ffffff;
        }
`;

