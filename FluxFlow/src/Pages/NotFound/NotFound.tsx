    import { Link } from "react-router-dom";

    export default function NotFound() {
    return (
        <main className="conteudo w-full flex flex-col items-center justify-center gap-8 px-6 py-16 md:py-24">
        {/* CARD PRINCIPAL 404 */}
        <div className="w-full max-w-[88rem] bg-[var(--primary)] border-2 border-[var(--secondary-dark)] rounded-[3.2rem] p-8 sm:p-14 md:p-20 text-center shadow-[0_20px_50px_rgba(0,51,102,0.22)] relative overflow-hidden">
            {/* Badge discreto de status */}
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-[var(--primary-dark)]/70 border border-[var(--bg-primary)]/20 text-[var(--bg-primary)] font-[var(--fonte-texto)] text-[1.35rem] font-bold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--secondary)] animate-pulse" />
            Erro 404 • Rota inexistente
            </div>

            {/* Número 404 */}
            <h1 className="font-[var(--fonte-principal)] text-[8.5rem] sm:text-[11rem] md:text-[14rem] font-extrabold text-[var(--bg-primary)] leading-none tracking-wider mb-4 drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)] select-none">
            404
            </h1>

            {/* Subtítulo */}
            <h2 className="font-[var(--fonte-principal)] text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem] font-bold text-[var(--bg-primary)] mb-6 leading-tight">
            Ops! Estação não encontrada.
            </h2>

            {/* Descrição */}
            <p className="font-[var(--fonte-texto)] text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] text-[var(--bg-primary)]/95 leading-relaxed max-w-[60rem] mx-auto mb-12">
            Parece que você pegou uma linha que não existe no{" "}
            <span className="font-bold underline decoration-[var(--secondary)] decoration-2 underline-offset-4">
                FluxFlow
            </span>
            . Mas não se preocupe, retorne à plataforma e siga rumo ao seu destino com rotas inteligentes!
            </p>

            {/* Botão de Retorno */}
            <div className="flex justify-center">
            <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 bg-[var(--bg-primary)] text-[var(--secondary-dark)] font-[var(--fonte-texto)] font-bold text-[1.7rem] md:text-[1.9rem] px-12 py-5 rounded-[3rem] border-2 border-[var(--secondary-dark)] shadow-md transition-all duration-300 hover:bg-[var(--secondary-dark)] hover:text-[var(--bg-primary)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.28)] active:translate-y-0"
            >
                Voltar para o início
            </Link>
            </div>
        </div>

        {/* CARD INFERIOR DE SUPORTE (Com ação direta para /contato) */}
        <section className="w-full max-w-[64rem] bg-[var(--secondary-dark)] border-2 border-[var(--primary)] rounded-[2.4rem] px-8 py-6 text-center text-[var(--bg-primary)] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-[var(--fonte-texto)] text-[1.5rem] md:text-[1.65rem] leading-snug text-center sm:text-left">
            Precisa de ajuda com o trajeto? Fale com a equipe do{" "}
            <span className="font-bold">FluxFlow</span>.
            </p>

            <Link
            to="/contato"
            className="shrink-0 px-6 py-3 rounded-[2rem] bg-[var(--bg-primary)] text-[var(--secondary-dark)] font-[var(--fonte-texto)] text-[1.45rem] font-bold transition-all duration-200 hover:bg-[var(--primary-dark)] hover:text-[var(--bg-primary)]"
            >
            Ir para Suporte →
            </Link>
        </section>
        </main>
    );
    }