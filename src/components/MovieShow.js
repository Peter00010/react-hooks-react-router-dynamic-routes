import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MoviesShow({ movies }) {

    const params = useParams();
    console.log(params);

    return(
        <div>
            <h3>{movies[params.movieId].title}</h3>
        </div>
    );
}

export default MoviesShow;