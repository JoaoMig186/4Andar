import './stylesComponents/card.css'

function Card({titulo,paragrafo}) {
    return(
        <div className="card">
           <h3>{titulo}</h3>
           <p>{paragrafo}</p>
        </div>
    )
 } 
 export default Card      