import React from 'react';
import './App.css';


class Ficha extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alunos: [
                {
                    nome: 'Rhuan',
                    idade: '20 anos',
                    polo: 'Pzr'
                },
                {
                    nome: 'Jorge Luis',
                    idade: '58 anos',
                    polo: 'cpx'
                },
                {
                    nome: 'maicon',
                    idade: '23 anos',
                    polo: 'cpx'
                },
                {
                    nome: 'Caroline',
                    idade: '19 anos',
                    polo: 'pzr'
                },
                {
                    nome: 'Estefania',
                    idade: '22 anos',
                    polo: 'pzr'
                },
                {
                    nome: 'Victor',
                    idade: '24 anos',
                    polo: 'cpx'
                },
                {
                    nome: 'Zaira',
                    idade: '24 anos',
                    polo: 'pzr'
                },
                {
                    nome: 'Cleiton',
                    idade: '19 anos',
                    polo: 'cpx'
                },
                {
                    nome: 'Rhaysssa',
                    idade: '21 anos',
                    polo: 'cpx'
                },
                {
                    nome: 'Luan',
                    idade: '18 anos',
                    polo: 'cpx'
                },
                {
                    nome: 'Arthur',
                    idade: '24 anos',
                    polo: 'cpx'
                }

            ]
        }
    }


    /*         listadeNomes = (ev) => {
                this.state.alunos.map(callback => {
                    console.log(callback.nome, callback.idade, callback.polo) 
                           return null
                }) 
        }*/

    render() {
        return (
            <div className="container">
                {/* <button onClick={this.listadeNomes} className="">Nomes</button> */}
                {this.state.alunos.map((alunos, index) => {
                    return (
                        <div className="card" key={index}>
                            <p className="nomes">{alunos.nome}</p>
                            <p className="idade">{alunos.idade}</p>
                            <p className="polo">{alunos.polo}</p>
                        </div>
                    );
            })}
            </div>)
    }
}
    export default Ficha 