import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import './styles.css';



class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            menu: '',
            massa: '',
            entrega: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { nome, menu, massa, entrega } = steps;

        this.setState({ nome, menu, massa, entrega });
    }

    render() {
        const { nome, menu, massa, entrega } = this.state;
        return (
                <div style={{ width: '100%' }}>
                    <h3>Resumo do Pedido</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td>nome:</td>
                            <td>{nome.value}</td>
                        </tr>
                        <tr>
                            <td>Pizza:</td>
                            <td>{menu.value}</td>
                        </tr>
                        <tr>
                            <td>massa:</td>
                            <td>{massa.value}</td>
                        </tr>
                        <tr>
                            <td>entrega:</td>
                            <td>{entrega.value}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

class App extends Component {
    render() {
        return (
            <div className={"container-center"}>
                <ChatBot
                    width="500px"
                    heigth
                    headerTitle="ChatBot"
                    placeholder=" "
                    speechSynthesis={{ enable: true, lang: 'br' }}
                    steps={[
                        {
                            id: '1',
                            message: 'Seja bem vindo a pizzaria do Bruno! Me informe o seu nome?',
                            trigger: 'nome',
                        },
                        {
                            id: 'nome',
                            user: true,
                            trigger: '3',
                            placeholder: "Digite o seu nome",
                        },
                        {
                            id: '3',
                            message: 'Olá {previousValue}! E ai, o que você vai pedir hoje?',
                            trigger: 'menu',
                        },
                        {
                            id: 'menu',
                            placeholder: "Selecione a sua pizza",
                            options: [
                                { value: 'Bacon', label: 'Pizza de Bacon', trigger: '5' },
                                { value: 'Mussarela', label: 'Pizza de Mussarela', trigger: '5' },
                                { value: 'Calabresa', label: 'Pizza de Calabresa', trigger: '5' },
                                { value: 'Portuguesa', label: 'Pizza de Portuguesa', trigger: '5' },
                                { value: 'Quatro Queijos', label: 'Pizza de Quatro Queijos', trigger: '5' },
                                { value: 'Provolone', label: 'Pizza de Provolone', trigger: '5' },
                                { value: 'Peperoni', label: 'Pizza de Peperoni', trigger: '5' },
                            ],
                        },
                        {
                            id: '5',
                            message: 'Boa escolha... Qual tipo de massa?',
                            trigger: 'massa',
                        },
                        {
                            id: 'massa',
                            placeholder: "Selecione a massa",
                            options: [
                                { value: 'Fina', label: 'Massa fina', trigger: '6' },
                                { value: 'Grossa', label: 'Massa Grossa', trigger: '6' },
                            ],
                        },
                        {
                            id: '6',
                            message: 'Perfeito... me infome o seu endereço?',
                            trigger: 'entrega',
                        },
                        {
                            id: 'entrega',
                            user: true,
                            trigger: '7',
                            placeholder: "Digite Rua, Número, Cidade e CEP",
                        },
                        {
                            id: '7',
                            message: 'Ótimo! Confira o resumo do seu pedido',
                            trigger: 'review',
                            placeholder: " ",
                        },
                        {
                            id: 'review',
                            component: <Review />,
                            asMessage: true,
                            trigger: 'update',
                            placeholder: " ",
                        },
                        {
                            id: 'update',
                            message: 'Deseja alterar algo?',
                            trigger: 'update-question',
                            placeholder: " ",
                        },
                        {
                            id: 'update-question',
                            placeholder: " ",
                            options: [
                                { value: 'sim', label: 'Sim', trigger: 'update-yes' },
                                { value: 'nao', label: 'Não', trigger: 'end-message' },
                            ],
                        },
                        {
                            id: 'update-yes',
                            message: 'O que você deseja alterar?',
                            trigger: 'update-fields',
                        },
                        {
                            id: 'update-fields',
                            options: [
                                { value: 'nome', label: 'nome', trigger: 'update-nome' },
                                { value: 'menu', label: 'menu', trigger: 'update-menu' },
                                { value: 'massa', label: 'massa', trigger: 'update-massa' },
                                { value: 'entrega', label: 'entrega', trigger: 'update-entrega' },
                            ],
                        },
                        {
                            id: 'update-nome',
                            update: 'nome',
                            trigger: '7',
                        },
                        {
                            id: 'update-menu',
                            update: 'menu',
                            trigger: '7',
                        },
                        {
                            id: 'update-massa',
                            update: 'massa',
                            trigger: '7',
                        },
                        {
                            id: 'update-entrega',
                            update: 'entrega',
                            trigger: '7',
                        },
                        {
                            id: 'end-message',
                            message: 'Pedido Feito! Normalmente demora uns 30 minutos. Para mais detalhes ligue (11)99999-9999, Obrigado.',
                            end: true,
                        },
                    ]}
                />


            </div>
        );
    }
}

export default App;