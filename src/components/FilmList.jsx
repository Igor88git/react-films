import {Film} from './Film'

function FilmList(props) {
    const{ movies = [] } = props; // если ничего не найдено, придет пустой массив по умолчанию

    //проходит по всем фильмам что есть и через map для каждого фильма делает разметку, можно сделать спред опрератор
    return <div className='movies'>
        {movies.length ? movies.map(movie => (
            <Film key={movie.imdbID} 
            Poster={movie.Poster} 
            Title={movie.Title} 
            Type={movie.Type} 
            Year={movie.Year} />
        )) : <h6>Ошибка, ничего не найдено.</h6>
    }
    </div>
}

export {FilmList}