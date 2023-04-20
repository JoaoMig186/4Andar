import './stylesPages/Acessoria.css'
import Header from '../Components/Header'
import React from 'react';

class Acessoria extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id:0,
            nome:'',
            nomeEmpresa:'',
            email:'',
            numero:'',
            desc:'',
            clientes: []
        }
    }

    registerClient = (cliente) =>{
        if((this.state.nome === "") || (this.state.email === "") || (this.state.numero === "") || (this.state.desc === "")){
            return
        } else {
            fetch("http://localhost:5000/clientes", {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(cliente)})
            .then(response => {
            if (response.ok){
                this.pesquisarClient();
            } else {
                alert("Erro. Cliente não foi cadastrado, tente novamente");
            }
        })
        }
    }

    componentDidMount(){
        this.pesquisarClient();
    }

    pesquisarClient(){
        fetch("http://localhost:5000/clientes")
        .then(response => response.json())
        .then(datas => {
            this.setState({clientes : datas})
        })
    }

    nomeSaving = (e) => {
        this.setState({
            nome: e.target.value
            
        })
    }   

    nomeEmpresaSaving = (e) => {
        this.setState({
            nomeEmpresa: e.target.value
            
        })
    }

    emailSaving = (e) => {
        this.setState({
            email: e.target.value
            
        })
    }

    numeroSaving = (e) => {
        this.setState({
            numero: e.target.value
            
        })
    }

    descSaving = (e) => {
        this.setState({
            desc: e.target.value
            
        })
    }

    saveDatas = () => {
        const cliente ={
            id:0,
            nome: this.state.nome,
            nomeEmpresa: this.nomeEmpresa,
            email: this.state.email,
            numero: this.state.numero,
            desc: this.state.desc
        }

        this.registerClient(cliente);
    }

    render(){
        console.log(this.state.nome)
        return(
                <div className='div-form'>
                    <div>
                        <h1>Acessoria ao cliente</h1>
                        <h3>Se você acessou a esta página é porque você está precisando de ajuda para montar seu site ou sistema!</h3>
                        <h4>No formulário abaixo você pode fornecer informações sobre o seu projeto :)</h4><br/>
                        <span style={{color:"black"}}>(*) obrigatório</span>
                        <form onSubmit={ () =>{
                            alert(`Obrigado ${this.state.nome}. Sua requisição de acessoria foi feita, em breve retornaremos em seu e-mail ou número para abordarmos sobre eu projeto!`)
                        }}> 
                            <span>* Seu nome:</span>
                            <input type="text" id="nome" required onChange={this.nomeSaving}/>
                            <span>Nome da empresa:</span>
                            <input type="text" id="nomeEmpresa" placeholder="Caso não tenha, pode deixar em branco" onChange={this.nomeEmpresaSaving}/>
                            <span>* Seu e-mail:</span>
                            <input type="text" id="email" required onChange={this.emailSaving}/>
                            <span>* Seu número com DDD:</span>
                            <input type="number" id="num" required onChange={this.numeroSaving}/>
                            <span>* Nos conte um pouco sobre o projeto:</span>
                            <textarea placeholder='De uma descrição detalhada da sua empresa, projeto ou serviço' id="desc" required onChange={this.descSaving}/>
                            <button onClick={this.saveDatas}>Enviar</button>
                        </form>
                    </div>
                    <div>
                        <h4>Clientes que entraram em contato:</h4>
                        <div className="tabela">
                            { 
                            this.state.clientes.map((cliente) =>
                            <div className="cadaItem">
                                <span>{cliente.nome}</span>
                            </div>
                            )
                            }
                            
                        </div>
                    </div>
                    
                </div>
        )
    }
    
} export default Acessoria