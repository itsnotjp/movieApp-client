import { useContext, useEffect, useState } from "react"
import UserContext from "../UserContext"
import ViewMoviesAdmin from "../components/ViewMoviesAdmin";
import ViewMoviesUser from "../components/ViewMoviesUser";
import { Col, ListGroup, Row } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

export default function Movies() {

    const { user } = useContext(UserContext);
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch('https://movieapi-beltran.onrender.com/movies/getMovies', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMovies(data))

        console.log(movies);

    }, [user]);

    return (
        <>
            <Row>
                <Col className="my-5 pt-5 text-center mx-auto">
                    <h1>Movie List</h1>
                </Col>
            </Row>
            {
                (user.isAdmin === true) ?
                    <ViewMoviesAdmin movies={movies} />
                    :
                    <ViewMoviesUser movies={movies} />
            }
        </>



    )
}