import { useDispatch, useSelector } from 'react-redux';
import './Formes.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { addUser } from '../../redux/api';

const Formes = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let { loding, err } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const disbatchSubmit = (e) => {
        e.preventDefault();
        addUser({ name, email }, dispatch);
    }

    return (
        <div className='Formes'>
            <Form onSubmit={disbatchSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        name="email"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        // value={formData.password}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {loding ? "Loding..." : "Submit"}
                </Button>

                {err && "Error!!"}
            </Form>
        </div>
    )
}

export default Formes
