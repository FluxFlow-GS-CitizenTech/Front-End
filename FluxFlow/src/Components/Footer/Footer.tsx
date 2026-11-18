    import { Link } from "react-router-dom";
    import logoBranca from "../../img/fluxflow_branca.png";

    export default function Footer() {
    return (
        <footer className="w-full bg-[var(--primary-dark)] text-[var(--bg-primary)] border-t-[4px] border-[var(--secondary)] pt-14 pb-10 px-6 sm:px-12">
        <div className="w-full max-w-[116rem] mx-auto flex flex-col gap-10">
            
            {/* BLOCO SUPERIOR: MARCA + NAVEGAÇÃO RÁPIDA */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 text-center md:text-left">
            
            {/* Coluna da Marca */}
            <div className="flex flex-col items-center md:items-start gap-4 max-w-[54rem]">
                <Link to="/" className="flex items-center gap-4 group">
                <img
                    src={logoBranca}
                    alt="Logo FluxFlow Branca"
                    className="h-[4.2rem] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <h2 className="text-[2.6rem] md:text-[3rem] font-extrabold font-[var(--fonte-principal)] tracking-tight">
                    FluxFlow
                </h2>
                </Link>

                <p className="text-[1.5rem] md:text-[1.6rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/85 leading-relaxed">
                Transformando a mobilidade urbana sobre trilhos. Nossa missão é conectar passageiros a dados em tempo real, rotas inteligentes e previsões precisas para viagens mais eficientes e sem superlotação.
                </p>
            </div>

            {/* Coluna de Links Rápidos (Evita o usuário ter que subir tudo até o Header) */}
            <nav aria-label="Links do rodapé" className="flex flex-col items-center md:items-end gap-4">
                <span className="text-[1.35rem] uppercase tracking-widest font-bold text-[var(--bg-primary)]/60">
                Navegação Rápida
                </span>
                <ul className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3 font-[var(--fonte-texto)] text-[1.55rem] font-semibold">
                <li>
                    <Link
                    to="/"
                    className="hover:text-white underline-offset-4 hover:underline decoration-[var(--secondary)] decoration-2 transition-colors"
                    >
                    Início
                    </Link>
                </li>
                <li>
                    <Link
                    to="/sistema"
                    className="hover:text-white underline-offset-4 hover:underline decoration-[var(--secondary)] decoration-2 transition-colors"
                    >
                    Sistema
                    </Link>
                </li>
                <li>
                    <Link
                    to="/quem-somos"
                    className="hover:text-white underline-offset-4 hover:underline decoration-[var(--secondary)] decoration-2 transition-colors"
                    >
                    Quem Somos
                    </Link>
                </li>
                <li>
                    <Link
                    to="/faq"
                    className="hover:text-white underline-offset-4 hover:underline decoration-[var(--secondary)] decoration-2 transition-colors"
                    >
                    FAQ
                    </Link>
                </li>
                <li>
                    <Link
                    to="/contato"
                    className="hover:text-white underline-offset-4 hover:underline decoration-[var(--secondary)] decoration-2 transition-colors"
                    >
                    Contato
                    </Link>
                </li>
                </ul>
            </nav>
            </div>

            {/* DIVISOR */}
            <div className="w-full h-[1px] bg-[var(--bg-primary)]/15" />

            {/* BARRA INFERIOR: COPYRIGHT */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center font-[var(--fonte-texto)] text-[1.35rem] md:text-[1.45rem] text-[var(--bg-primary)]/75">
            <p>© 2026 FluxFlow — Todos os direitos reservados.</p>
            <p className="text-[1.3rem] text-[var(--bg-primary)]/60">
                Mobilidade Inteligente & Colaborativa
            </p>
            </div>

        </div>
        </footer>
    );
    }