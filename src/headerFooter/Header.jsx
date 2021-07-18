function Header() {
    // https://materializecss.com/navbar.html
    return <nav className='red darken-4'>
    <div className="nav-wrapper">
      <a href="!#" className="brand-logo">React Films</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="!#">Repo</a></li> {/* ссылку добавлю на репозиторий */}
      </ul>
    </div>
  </nav>
}

export {Header}