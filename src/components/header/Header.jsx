import Logo from './Logo'
import User from './User'
import SearchBar from './SearchBar'
import './Header.css'

function Header() {
  return (
    <header className="Header">
        <Logo />
        <SearchBar />
        <User />
    </header>
  )
}

export default Header