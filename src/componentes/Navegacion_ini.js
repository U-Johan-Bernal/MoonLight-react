import React from "react";
import 'firebase/auth';
import logo_nav from '../imagenes/logo_nav.jpg';
import fire from '../Firebase-config'

// class component
class Navegacion_ini extends React.Component{
 
    
    state={
        isSwitchOn: false,
      }

    render(){
        const isOn=this.state.isSwitchOn;
        const logout=()=>{
        fire.auth().signOut();
    }
    return (
        <div>
            <nav className="navegacion">
                
                <img src={logo_nav} alt="Logo" className="navegacion-logo"></img>
                <ul className={ isOn ? "navegacion-menu" : "navegacion-menu.show" }>
                <li>
                    <a href="https://www.canva.com/design/DAEZsPBqsaA/VU7Pg3r5CagSOZr2kJGoTg/view?utm_content=DAEZsPBqsaA&utm_campaign=designshare&utm_medium=link&utm_source=vieser#2">Catálogo</a>
                </li>
                <li>
                    <a href="/">Sobre Nosotros</a>
                </li>
                <li>
                    <a href="/Contacto">Contactanos</a>
                </li> 
                <li>    
                    <a href="/">PQR</a>
                </li>
                <li>
                    <button onClick={logout}>Cerrar Sesion</button>
                </li>
                </ul>
                <ul className="navegacion-menu-derecha">
                <li>
                    <a href="/">
                        <i className="fas fa-search"></i>
                    </a>
                </li>
                
            </ul>
            <div className="menu-btn" >
                    <i className="fas fa-bars"
                        onClick={()=>this.setState({isSwitchOn: !isOn})}
                    ></i>
            </div>  
            </nav>    
        </div>    
    );
  }
}
export default Navegacion_ini;