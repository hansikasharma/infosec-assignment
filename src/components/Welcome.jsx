import {Link} from 'react-router-dom'

function Welcome() {
	return(
		<>
		<div className = "welcome-main">
		<div className= "welcome-text">
		<h1>Welcome to PopX</h1>
		<p>Lorem ipsum dolor sit  amet consectetur adipiscing elit</p>
		</div>
		<div className = "welcome-buttons">
		<Link to = "createaccount" ><button className = "signin-submit"  type ="submit" value = "login" ><b>Create Account</b></button></Link>
		<Link to = "signin"> <button className = "signin-submit" style ={{backgroundColor:'#cebafb'}} type ="submit" value = "login" ><b>Already Registered? Login</b></button></Link>
		</div>
		</div>
		
		
		</>
	)
}
export default Welcome;