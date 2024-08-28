import { Button, Col, Row, Table } from "react-bootstrap"

export default function ViewMoviesAdmin({movies}) {

    
    


    const mapMovie = () => {
        {
            movies.movies && movies.movies.length > 0 ? (
                movies.movies.map(movie => (
                    
                    <tr className="text-center" key={movie._id}>
                            <th>{movie.name}</th>
                            <th>{movie.director}</th>
                            <th>{movie.genre}</th>
                            <th>{movie.year}</th>
                            <th>{movie.description}</th>
                            <th>
                                <Button variant="info" >Update</Button>
                                <Button variant="success" >ADD WORKOUT</Button>
                                <Button variant="danger" >Delete</Button>
                            </th>

                        </tr>
                ))
            ) : (
                <Col className="text-center">
                    <p>No movies available.</p>
                </Col>
            )
        }
    } 





    return (
        <>
            <Row>
                <Col className="p-4 text-center">
                    <h1>Admin Dashboard</h1>
                    <Button variant="success" 
                // onClick={showAddWorkoutModal}
                >
                    ADD WORKOUT
                </Button>
                </Col>
            </Row>
            
                
                

                {/* <AddWorkout show={addWorkoutModal} handleClose={closeAddWorkoutModal} onAdd={addWorkout} /> */}
            

            <Row>



                <Table striped bordered hover responsive>
                    <thead>
                        <tr className="text-center">
                            <th>Name</th>
                            <th>Director</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Description</th>
                            <th colSpan={3}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {mapMovie()}
                    </tbody>
                </Table>
            </Row>




        </>
    )
}