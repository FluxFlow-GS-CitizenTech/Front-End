    import { useState } from "react";
    import { Link } from "react-router-dom";
    import logoBranca from "../../img/fluxflow_branca.png";

    export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const fecharMenu = () => setMenuAberto(false);

    return (
        <header className="w-full h-[8rem] bg-[var(--primary-dark)] border-b-[4px] border-[var(--secondary)] sticky top-0 z-50 shadow-md flex items-center">
        <nav className="w-full max-w-[124rem] mx-auto px-6 sm:px-10 flex items-center justify-between">
            
            {/* LOGO DO PROJETO */}
            <Link
            to="/"
            onClick={fecharMenu}
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105 focus:outline-none"
            >
            <img
                src={logoBranca}
                alt="Logo FluxFlow Branca"
                className="h-[4.2rem] sm:h-[4.8rem] w-auto object-contain"
            />
            <span className="font-[var(--fonte-principal)] text-[2.2rem] font-bold text-[var(--bg-primary)] tracking-tight">
                FluxFlow
            </span>
            </Link>

            {/* NAVEGAÇÃO DESKTOP */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            <li>
                <Link
                to="/quem-somos"
                className="font-[var(--fonte-texto)] text-[1.6rem] font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                >
                Quem Somos
                </Link>
            </li>
            <li>
                <Link
                to="/sobre"
                className="font-[var(--fonte-texto)] text-[1.6rem] font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                >
                Sobre
                </Link>
            </li>
            <li>
                <Link
                to="/sistema"
                className="font-[var(--fonte-texto)] text-[1.6rem] font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                >
                Sistema
                </Link>
            </li>
            <li>
                <Link
                to="/faq"
                className="font-[var(--fonte-texto)] text-[1.6rem] font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                >
                FAQ
                </Link>
            </li>
            <li>
                <Link
                to="/contato"
                className="font-[var(--fonte-texto)] text-[1.6rem] font-semibold text-[var(--bg-primary)] transition-colors hover:text-[var(--secondary)]"
                >
                Contato
                </Link>
            </li>
            </ul>

            {/* BOTÃO HAMBURGUER (MOBILE) */}
            <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu de navegação"
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-xl bg-white/10 text-[var(--bg-primary)] border border-white/20 transition-colors hover:bg-white/20 focus:outline-none"
            >
            <span
                className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ${
                menuAberto ? "rotate-45 translate-y-2" : "-translate-y-1.5"
                }`}
            />
            <span
                className={`w-6 h-0.5 bg-white rounded-full transition-opacity duration-300 my-1 ${
                menuAberto ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
                className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ${
                menuAberto ? "-rotate-45 -translate-y-2" : "translate-y-1.5"
                }`}
            />
            </button>

            {/* MENU DROPDOWN MOBILE (Com animação e fechamento ao clicar) */}
            <div
            className={`absolute top-[8rem] left-0 w-full bg-[var(--primary-dark)] border-b-4 border-[var(--secondary)] shadow-2xl transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
                menuAberto ? "max-h-[42rem] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
            }`}
            >
            <ul className="flex flex-col items-center gap-6 px-6 font-[var(--fonte-texto)] text-[1.8rem] font-semibold">
                <li>
                <Link
                    to="/quem-somos"
                    onClick={fecharMenu}
                    className="text-[var(--bg-primary)] hover:text-[var(--secondary)] transition-colors"
                >
                    Quem Somos
                </Link>
                </li>
                <li>
                <Link
                    to="/sobre"
                    onClick={fecharMenu}
                    className="text-[var(--bg-primary)] hover:text-[var(--secondary)] transition-colors"
                >
                    Sobre
                </Link>
                </li>
                <li>
                <Link
                    to="/sistema"
                    onClick={fecharMenu}
                    className="text-[var(--bg-primary)] hover:text-[var(--secondary)] transition-colors"
                >
                    Sistema
                </Link>
                </li>
                <li>
                <Link
                    to="/faq"
                    onClick={fecharMenu}
                    className="text-[var(--bg-primary)] hover:text-[var(--secondary)] transition-colors"
                >
                    FAQ
                </Link>
                </li>
                <li>
                <Link
                    to="/contato"
                    onClick={fecharMenu}
                    className="text-[var(--bg-primary)] hover:text-[var(--secondary)] transition-colors"
                >
                    Contato
                </Link>
                </li>
            </ul>
            </div>

        </nav>
        </header>
    );
    }