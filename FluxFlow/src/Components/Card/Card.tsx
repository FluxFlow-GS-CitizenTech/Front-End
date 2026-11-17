    type TipoProps = {
    titulo: string;
    sub: string;
    descricao: string;
    };

    export default function Card({ titulo, sub, descricao }: TipoProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-6 sm:gap-8 max-w-[90rem] mx-auto px-4">
        {/* TÍTULO PRINCIPAL DO HERO */}
        <h1 className="font-[var(--fonte-principal)] text-[4.2rem] sm:text-[6.2rem] md:text-[7.6rem] font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            {titulo}
        </h1>

        {/* SUBTÍTULO / SLOGAN */}
        {sub && (
            <h2 className="font-[var(--fonte-texto)] text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] font-bold text-white underline decoration-[var(--secondary)] decoration-4 underline-offset-8 drop-shadow-sm leading-snug">
            {sub}
            </h2>
        )}

        {/* DESCRIÇÃO */}
        {descricao && (
            <p className="font-[var(--fonte-texto)] text-[1.6rem] sm:text-[2rem] md:text-[2.2rem] text-white/95 max-w-[74rem] leading-relaxed drop-shadow-sm">
            {descricao}
            </p>
        )}
        </div>
    );
    }