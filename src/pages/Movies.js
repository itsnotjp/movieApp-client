import { useContext, useEffect, useState } from "react"
import UserContext from "../UserContext"
import ViewMoviesAdmin from "../components/ViewMoviesAdmin";
import ViewMoviesUser from "../components/ViewMoviesUser";

export default function Movies() {

    const { user } = useContext(UserContext);
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        fetch('https://movieapi-beltran.onrender.com/movies/getMovies', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMovies(data))
    }



    useEffect(() => {
        if (user.id) {
            
            fetchMovies();
            console.log(movies);
        }

    }, [user]);

    return (
        <>
            
            {
                (user.isAdmin === true) ?
                    <ViewMoviesAdmin movies={movies} fetchMovies={fetchMovies} />
                    :
                    <ViewMoviesUser movies={movies} />
            }
        </>



    )
}