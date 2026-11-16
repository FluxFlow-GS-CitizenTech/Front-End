import logoBranca from "../../img/fluxflow_branca.png";

export default function Footer(){
    return(
        <footer className="w-full bg-[var(--primary-dark)] text-[var(--bg-primary)] border-t-[4px] border-[var(--secondary)] py-12 px-6 md:px-16 flex flex-col items-center text-center gap-6">
            <div className="flex items-center gap-4 justify-center">
                <img 
                    src={logoBranca} 
                    alt="Logo FluxFlow Branca" 
                    className="h-10 w-auto object-contain" 
                />
                <h2 className="text-2xl md:text-3xl font-bold font-[var(--fonte-texto)]">
                    FluxFlow
                </h2>
            </div>
            
            <p className="max-w-2xl text-sm md:text-base font-[var(--fonte-texto)] opacity-90 leading-relaxed">
                Transformando a mobilidade urbana sobre trilhos. Nossa missão é conectar passageiros a dados em tempo real, rotas inteligentes e previsões precisas para viagens mais eficientes e sem superlotação.
            </p>

            <div className="w-full max-w-xl h-[1px] bg-[var(--secondary)] opacity-40 my-2"></div>

            <p className="text-xs md:text-sm font-[var(--fonte-texto)] opacity-75">
                © 2026 FluxFlow — Todos os direitos reservados.
            </p>
        </footer>
    );
}