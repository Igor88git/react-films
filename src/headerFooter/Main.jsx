import React from 'react'
import {FilmList} from '../components/FilmList'
import {Search} from '../components/Search'
import {Preloader} from '../components/Preloader'

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    // метод жизненного цикла компонент смонтировался, внутри которого мы будем делать запрос наших данных
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=e490bdaa&s=spider`)
    
    // ответ придет response который нужно преобразовать через метод json()
        .then(response => response.json())

    // потом придут нужные данные, при их получении обращаемся к setState говорим что в наши фильмы нужно положить то что лежит в data в его ключе Search
        .then(data => this.setState({movies: data.Search, loading: false})) // каждый раз когда данные загружены - loading: false
    }
    
    // если будет не 'all' а movie или series у нас появится дополнительный гет-параметр `&type=${type}`
    searchFilm = (str, type='all') => {
        this.setState({ loading: true })
        fetch(`http://www.omdbapi.com/?apikey=e490bdaa&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false})) // каждый раз когда данные загружены - loading: false
    }

    render() {
        const {movies, loading} = this.state; // деструктуризация для прелоадера,

        return <main className='container content'>
            <Search searchFilm={this.searchFilm} />
            
            {
                loading ? (  
                // Если идет загрузка, мы загружаем прелоадер
                <Preloader /> 
                ) : (
                // если не идет загрузка то загружаем фильмы
                <FilmList movies={movies} />
                ) 
            }
            
        </main>
    }
}

export{Main}