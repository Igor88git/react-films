import React from 'react'

class Search extends React.Component {

    state = {
        search: '', 
        type: 'all', // radio
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchFilm(this.state.search, this.state.type); // при нажатии энтер вызываем этот метод и передаем ему текущий стейт
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }), () => {
            this.props.searchFilm(this.state.search, this.state.type);
        });

    }

//  https://materializecss.com/text-inputs.html
    render() {
      return <div className="row">
          <div className="input-field">
            <input 
                className="validate" 
                placeholder='Поиск - english letters only' 
                type="search" 
                value={this.state.search}
                onChange={(event) => this.setState({search: event.target.value})}  // обновлять стейт
                onKeyDown={this.handleKey}
            />
            <button className='btn search-btn' onClick={ () => this.props.searchFilm(this.state.search, this.state.type) }>Поиск</button>
          </div>
        <div>
          
            <label>
                <input 
                    className="with-gap" 
                    name="group3" 
                    type="radio" 
                    data-type='all' 
                    onChange={this.handleFilter} 
                    checked={this.state.type === 'all'}
                />
            <span>All</span>
            </label>

            <label>
                <input 
                    className="with-gap" 
                    name="group3" 
                    type="radio" 
                    data-type='movie' 
                    onChange={this.handleFilter} 
                    checked={this.state.type === 'movie'}
                />
            <span>Films only</span>
            </label>

            <label>
                <input 
                    className="with-gap" 
                    name="group3" 
                    type="radio" 
                    data-type='series' 
                    onChange={this.handleFilter} 
                    checked={this.state.type === 'series'}
                />
            <span>Series only</span>
            </label>
          
        </div>

      </div>
    }
}

export {Search}