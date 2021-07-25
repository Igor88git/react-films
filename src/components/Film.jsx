function Film(props) {
    
    const {
        Title: title, 
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    // https://materializecss.com/cards.html
    
    return <div id={id} className="card film">
    <div className="card-image waves-effect waves-block waves-light">

      {/* проверка есть ли постер, если нет то не показывать */}
      {
        poster === 'N/A' ? 
        <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`} />
        :
        <img className="activator" src={poster} />
      }

    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p>{year} <span className='right'>{type}</span></p>
    </div>
    
  </div>
}

export {Film}
