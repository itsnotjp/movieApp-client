import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../UserContext';


export default function Home() {

    const { user } = useContext(UserContext);

    return (
        <>
        <Row>
            <Col className="p-4 text-center">
                <h1>Movie Catalog</h1>
                <p></p>
                <Link className="btn btn-primary" to={ user.id ? '/movies' : 'login' }>Movie List</Link>
            </Col>
        </Row>
        </>
    )
}