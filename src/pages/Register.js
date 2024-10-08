import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function Register() {

    // First Name
    // Email
    // password

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {

        if ((fullName !== "" && email !== "" && password !== '' && confirmPassword !== "") && (password === confirmPassword)) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }

        if(user.id){
            navigate('/movies')
        }

    }, [email, password, confirmPassword, navigate, user.id])

    function registerUser(e) {

        e.preventDefault();

        fetch('https://movieapi-beltran.onrender.com/users/register', {

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                password: password

            })
        })
            .then(res => res.json())
            .then(data => {

                //determine the returned data. Especially useful when the given API is online.
                console.log(data);

                //data will only contain an email property if we can properly save our user.
                if (data.message === "Registered Successfully") {

                    setFullName('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');

                    Swal.fire({
                        title: "Registration Successful",
                        icon: "success",
                        text: "Thank you for registering!"
                    });

                }

            })
    }


    return (

        <Form onSubmit={(e) => registerUser(e)}>
            <h1 className="my-5 text-center">Register</h1>

            <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    required
                    value={fullName}
                    onChange={e => { setFullName(e.target.value) }} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    required
                    value={email}
                    onChange={e => { setEmail(e.target.value) }} />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    required
                    value={password}
                    onChange={e => { setPassword(e.target.value) }} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={e => { setConfirmPassword(e.target.value) }} />
            </Form.Group>
            {
                isActive

                    ? <Button variant="primary" type="submit">Submit</Button>
                    : <Button variant="primary" disabled>Submit</Button>
            }
        </Form>

    )
}