import Card from '../Components/Card'
import './stylesPages/CardsBox.css'

function CardsBox(){
    return(
        <div className="main__menu">   
            <h2>Benêficios conosco</h2>
                <div className="row top">
                    <Card 
                        titulo={"REDES SOCIAIS"} 
                        paragrafo={"O conteúdo de seu site compartilhado e podendo ser visto por milhões de pessoas."}
                    />
                    <Card 
                        titulo={"SUCESSO DO CLIENTE"}
                        paragrafo={"Você será atendido por profissionais experientes que lhe darão dicas de estratégias para alcançar o seu sucesso online."}
                    />
                    <Card 
                        titulo={"SITE RESPONSIVO"}
                        paragrafo={"Um site adaptável para computador, tablet e celular melhora a experiência do usuário, aumentando as interações."}
                    />
                    <Card 
                        titulo={"SITE 100% MODERNO"} 
                        paragrafo={"Site moderno como a demanda do mercado."}
                    />
                </div>
                <div className="row bottom">
                <Card 
                        titulo={"PROFISSIONAIS QUALIFICADOS"} 
                        paragrafo={"Profissionais focado em melhor dessempenho, para te entregar o melhor site possivel."}
                    />
                    <Card 
                        titulo={"MANUTENÇÃO"}
                        paragrafo={"Se você fazer um site conosco tera direito a 1 mês grâtis de manutenção."}
                    />
                    <Card 
                        titulo={"PLANOS EXCLUSIVO"}
                        paragrafo={"Planos acessivel pensando no cliente."}
                    />
                    <Card 
                        titulo={"ACESSORIA DE DÚVIDAS"} 
                        paragrafo={"Estaremos a sua disposição em caso de qualquer tipo de duvida."}
                    />
                </div>
        </div>
    )
}

export default CardsBox