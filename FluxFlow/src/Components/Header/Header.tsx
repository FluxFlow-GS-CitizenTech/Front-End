import { Link } from "react-router-dom";
import logoBranca from "../../img/fluxflow_branca.png";

export default function Header(){
    return (
        <header className="w-full h-[80px] bg-[var(--primary-dark)] border-b-[4px] border-[var(--secondary)] sticky top-0 z-50 shadow-md">
            <nav className="w-full h-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
                
                {/* Logo / Link inicial */}
                <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
                    <img 
                        src={logoBranca} 
                        alt="Logo FluxFlow Branca" 
                        className="h-10 sm:h-12 w-auto object-contain" 
                    />
                </Link>

                {/* Lista de Navegação */}
                <ul className="flex items-center gap-6 sm:gap-10">
                    <li>
                        <Link 
                            to="/quem-somos" 
                            className="font-[var(--fonte-texto)] text-sm sm:text-lg font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                        >
                            Quem Somos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/sobre" 
                            className="font-[var(--fonte-texto)] text-sm sm:text-lg font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                        >
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/sistema" 
                            className="font-[var(--fonte-texto)] text-sm sm:text-lg font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                        >
                            Sistema
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/faq" 
                            className="font-[var(--fonte-texto)] text-sm sm:text-lg font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contato" 
                            className="font-[var(--fonte-texto)] text-sm sm:text-lg font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                        >
                            Contato
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}