
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__text-container">
                <p className="footer__text footer__text-name">Ástríður Haraldsdóttir Passauer</p>
                <p className="footer__text footer__text-thirdary">© 2026</p>
            </div>
            <div className="footer__text-container">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__text">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__text">LinkedIn</a>
                <p className="footer__text footer__text-thirdary">Made with React & too much caffeine</p>
            </div>
        </footer>
    )
}

export default Footer