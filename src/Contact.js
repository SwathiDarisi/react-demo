import axios from 'axios'


function Contact() {
	function create(){
		axios.post("https://reqres.in/api/users",
		{
			username:"ravi@gmail.com",
			password:"ravi@123"
		})
		.then((res)=>{
			console.log(res.data)
		})
	}
		return(
		<div>
		<h1>Contact Component</h1>
        <button onClick={create}>send</button>
		</div>)
	}

export default Contact