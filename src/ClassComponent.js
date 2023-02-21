import React from 'react'

class ClassComponent extends React.Component{
	state={
		name:"swathi",
		year:2003,
		inputValue:"",
		students:[
		{
			name:"siri",
			age:19,
			gender:"female"
		},
         {
         	name:"stefan",
         	age:30,
         	gender:"male"
         }

		]
	}
	handleClick=()=>{
		console.log(this.state.inputValue)
        this.setState({
        	inputValue:""
        })
	}
	handleChange=(e)=>{
		this.setState({
			inputValue:e.target.value
		})
	}
	render()
	{
		return(
			<div>
			<h2>Good Morning</h2>
			<p>{this.state.name}</p>
			<p>{this.state.year}</p>
			{
				this.state.students.map((pos)=>(
				<div>
				<p>{pos.name}</p>
				<p>{pos.age}</p>
				<p>{pos.gender}</p>

				</div>
				))
			}
			<input value={this.state.inputValue}
			 onChange={this.handleChange}/>
			<button onClick={this.handleClick}>Submit</button>
			 </div>
			 )
	}
}
export default ClassComponent
