import '../styles/header.css';

function Header() {
    console.log('Header component rendered'); //debug: does this appear in the browser console?
    return (
        <header>
            <h1>Memory Card Game</h1>
            <p>Flip the cards and test your memory!</p>
        </header>
    );
}

export default Header;