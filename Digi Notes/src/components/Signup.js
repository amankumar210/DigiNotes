import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Account created Successfully ", "success")
        }
        else {
            props.showAlert("Invalid Details", "danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='myMargin'>
            <div className='container mt-2'>
                <h2 className='my-2'>Create an account to use Digi Notes</h2>
                <div className='mt-3'>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} placeholder="Enter your Name" />
                        </div>
                        <div class="form-group my-2">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" class="form-control" id="email" name="email" onChange={onChange} placeholder="Enter your Email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group my-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="password" name="password" onChange={onChange} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
                                title="Password must contain at least one lowercase letter, one uppercase letter, one special character, and be at least 6 characters long." placeholder="Enter your Password" />
                        </div>
                        <div class="form-group my-2">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" class="form-control" id="cpassword" name="cpassword" onChange={onChange}  placeholder="Re-enter your password" />
                        </div>
                        <button type="submit" class="btn btn-primary my-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup