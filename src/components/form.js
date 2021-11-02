 import React from "react"

 class Form extends React.Component {
     render (){
         console.log(this.props)
        return (
            <div class="row">
                <div class=" ms-4 col-4">
                    <form  onSubmit={this.props.onSubmit}>
                        <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.props.onChangePassword}></input>
                        </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={this.props.onChangeRememberMe}></input>
                        <label class="form- check-label" for="exampleCheck1">remember me </label>
                    </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>          
            </div> 
        
        )
            

    }
 }

 export default Form 

