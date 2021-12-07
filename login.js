import './login.css';
// import React from 'react'
import React, { Component} from 'react'

class Login extends Component {

    state = {
      email: "",
      password: "",
      mail: "",
      prenom: "",
      motdepasse: "",
      ConfirmPassword: "",
      checkbox1: false,
      
  }
  
  handleForm = (event) =>{
    console.log(event.target.value)
      this.setState({[event.target.name] : event.target.value});
      
  }

 handleClick = (e) => {
    e.preventDefault();
    console.log('Vous êtes connecté');
  }


    render () {
    
      return (
          <form>

             <div className="col un"> Se connecter 
             
              <input type="text"  placeholder="Adresse mail" name="email" onChange={this.handleForm} /> 
      
            
              <input type="password" placeholder="Mot de passe" name="password" onChange={this.handleForm} />
              
              <div className= "checkbox">
              <input type="checkbox" name="remerber22" id="remember3" value="1" /> 
              <label htmlFor="remember"> Se souvenir de moi </label> 
              </div>

              <button className="button1" onClick={this.handleClick}>se connecter </button>
              </div> 

              <div className="col deux"> Pas encore client ?
             
              <input type="text" placeholder="Adresse mail" name="mail" onChange={this.handleForm} />
      
            
              <input type="text" placeholder="Prenom" name="prenom" onChange={this.handleForm} />

      
              <input type="password" placeholder="Mot de passe" name="motdepasse" onChange={this.handleForm} />
      
             
              <input type="password" placeholder="Se souvenir du mot de Passe" name="ConfirmPassword" onChange={this.handleForm} />
           
            
            <div className= "checkbox">
              <input type="checkbox" name="remerber22"  id="remember2" value="1"/> <label htmlFor="remember"> Accepter les conditions,fzerfegragaegergaergaegr reagaeg fefaergagae veav </label>      
              <input type="checkbox" name="remerber22"  id="remember2" value="1"/> <label htmlFor="remember"> Envoyer par mail les offres, vergaerqrgag efgzerge vergfer efqzerfer ever </label>
            </div>





              <button className="button" onClick={this.handleClick}>Inscription</button>

              </div>

        
             
            </form>
            
           
          
      );
      
      
    }
   
}


export default Login;