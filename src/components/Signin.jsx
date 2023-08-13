import { Link } from 'react-router-dom'
function Createaccount(){
	return (
	<>
	<form className = "signup-form">
	<h1>Signin to Your Popx account</h1>
	<p> Lorem ipsum dolor sit amet consectetur adipsicing elit</p>
	<fieldset>
	<legend className="input-heading">Email Address</legend>
	<input className= "input-field" placeholder="enter email address" type = "text" />
	</fieldset>
	
	<fieldset>
	<legend className="input-heading">Password</legend>
	<input className= "input-field" placeholder="Enter password" type = "password" />
	</fieldset>
	<Link to = {"/dashboard/"} ><button className = "signin-submit " style ={{backgroundColor:'grey'}} type ="submit" value = "login" ><b>Login to PopX</b></button></Link>
	</form>
	</>
	)
}
export default Createaccount;