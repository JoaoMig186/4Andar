import './stylesComponents/header.css'
import '../App.css'

// const header = {
//   width: "100%",
//   height: "100vh",
//   gridArea: "header"
// }

// const menuBox = {
//   zIndex: "2",
//   position: "relative",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   height: "65px",
//   backgroundColor: "transparent",
//   width: "100%"
// }

// const ListOne = {
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   listStyle: "none",
//   width: "30%"
// }

// const ListTwo = {
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "end",
//   alignItems: "center",
//   listStyle: "none",
//   width: "30%"
// }

// const menuBoxList = {
//   color: "#000",
//   textDecoration: "none",
//   fontSize: "1.8rem",
//   fontweight: "500",
//   marginRight: "15px",
//   marginLeft: "15px"
// }

// const menuBoxLogo = {
//   color: "#000",
//   textDecoration: "none",
//   fontSize: "1.5rem",
//   fontWeight: "900"
// }


// header - style={header}
// div - style={menuBox}
// ul - style={ListOne}
// a-li - style={menuBoxList}
// a-li - style={menuBoxList}
// a-li - style={menuBoxLogo}
// ul - style={ListTwo}
// a-li - style={menuBoxList}
// a-li - style={menuBoxList}

function Header() {
  return (
    <header className="header">
    <div className="caixa_menu">
        <ul className="One_list">
          <li>Acessoria ao cliente</li>
           <li>Todos projetos</li>
         </ul>
       <h1>Quarto Andar</h1>
       <ul className="two_list">
        <li>Contatos</li> 
        <li>Nossos Desenvolvedores</li>
     </ul>
    </div>
    <div id="menuMobile_icone"> 
        <div></div>
        <div></div>
        <div></div>
    </div>
    </header>
  )
}

export default Header