
import woman from '../assets/woman.png'
import camera from '../assets/camera.jpg'


function Dashboard(){
	return (
	<>
	<div className="account-main">
	<div className="account-heading">
	<b><p>Account Settings</p></b>
	</div>
	<div className="user-details">
	<div className="user-image"><img src ={woman}alt ="Mary Doe" width = {100} height = {100}/>
	<img src ={camera} height= {40} width = {40} className="camera" alt ="add image"/>
	</div>
	<div className = "user-name"><p><b>Marry Doe</b></p>
	<p>Marry@gmail.com</p></div>
	</div>
	<div className="user-info"> A young nurse is working at night in a Long Term Care facility which looks after comatose paitents.
On her break, she explores the building.
The building is quite large, larger than it needs to be, and old (at least 100 years old).

</div>
<div className="details-area"></div>
	</div>
	</>
	)
}
export default Dashboard