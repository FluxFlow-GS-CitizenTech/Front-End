    import { Link } from "react-router-dom";

    type TipoProps = {
    navegacao: string;
    texto: string;
    };

    export default function Button({ navegacao, texto }: TipoProps) {
    return (
        <Link
        to={navegacao}
        className="group inline-flex items-center justify-center gap-3 px-[3.2rem] py-[1.4rem] rounded-full border-2 border-[var(--bg-primary)]/80 bg-[var(--primary)]/85 backdrop-blur-md text-[var(--text-title)] font-[var(--fonte-texto)] text-[1.6rem] sm:text-[1.8rem] font-bold tracking-wide text-center no-underline shadow-[0_8px_25px_rgba(0,0,0,0.28)] transition-all duration-300 hover:bg-[var(--secondary)] hover:border-[var(--bg-primary)] hover:text-[var(--text-title)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(227,6,19,0.4)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--bg-primary)]/50"
        >
        <span>{texto}</span>
        <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
        </svg>
        </Link>
    );
    }