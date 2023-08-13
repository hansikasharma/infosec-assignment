import {Link} from 'react-router-dom'

function Createaccount(){
	return (
	<><form className = "signup-form">
	<h1>Create your PopX account</h1>
	<fieldset>
	<legend className="input-heading">Full Name<span className = "star">*</span></legend>
	<input className= "input-field" placeholder="Marry Doe" type = "text" />
	</fieldset>
	
	<fieldset>
	<legend className="input-heading">Phone Number<span className = "star">*</span></legend>
	<input className= "input-field" placeholder="Marry Doe" type = "text" />
	</fieldset>
	<fieldset>
	<legend className="input-heading">Email Address<span className = "star">*</span> </legend>
	<input className= "input-field" placeholder="Marry Doe" type = "text" />
	</fieldset>
	<fieldset>
	<legend className="input-heading">Password <span className = "star">*</span></legend>
	<input className= "input-field" placeholder="Marry Doe" type = "text" />
	</fieldset>
	<fieldset>
	<legend className="input-heading">Company Name<span className = "star">*</span> </legend>
	<input className= "input-field" placeholder="Marry Doe" type = "text" />
	</fieldset>
	<div className="radio-buttons">
	<p>Are you an agency? <span className="star" >*</span></p>
	<input type = "radio" value = "yes" name = "yes-no"/><label for = "yes">YES</label>
	<input type = "radio" value = "no" name = "yes-no" /><label for = "no">NO</label>
	
	</div>
	<Link to = "/dashboard/" ><button className = "signin-submit"  type ="submit" value = "login" ><b>Create Account</b></button></Link>
	</form>
	</>
	)
}
export default Createaccount;