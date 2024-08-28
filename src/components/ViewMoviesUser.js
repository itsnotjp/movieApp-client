import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

export default function ViewMoviesUser({movies}) {

    return (

        <>
            <Row>
                {
                    movies.movies && movies.movies.length > 0 ? (
                        movies.movies.map(movie => (
                            <Col md={3} key={movie._id}>
                                <MovieCard movie={movie}  />
                            </Col>
                        ))
                    ) : (
                        <Col className="text-center">
                            <p>No movies available.</p>
                        </Col>
                    )
                }
            </Row>
        </>

    )
}