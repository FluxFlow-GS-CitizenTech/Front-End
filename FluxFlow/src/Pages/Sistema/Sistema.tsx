    import relatorios from "../../img/relatorios.png";
    import rotasStatus from "../../img/rotas.png";
    import Button from "../../Components/Button/Button";
    import Card from "../../Components/Card/Card";
    import imgFundo from "../../img/fundo3.jpg";

    export default function Sistema() {
    return (
        <main className="conteudo flex flex-col items-center pb-24">
        {/* HERO SECTION */}
        <section
            className="relative w-full min-h-[75vh] md:min-h-[80vh] bg-cover bg-center bg-no-repeat border-b-[5px] border-[var(--secondary-dark)] flex items-center justify-center px-6 py-20"
            style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 26, 51, 0.78), rgba(0, 0, 0, 0.72)), url(${imgFundo})`,
            }}
        >
            <div className="max-w-[96rem] w-full flex flex-col items-center text-center gap-8 z-10">
            <Card
                titulo="Sistema"
                sub="Funcionamento prático do FluxFlow"
                descricao="Demonstração visual, protótipos de rotas e status em tempo real"
            />
            <div className="mt-2">
                <Button navegacao="/sistema2" texto="Conheça mais" />
            </div>
            </div>
        </section>

        {/* CONTAINER PRINCIPAL DAS SEÇÕES */}
        <div className="w-[95%] max-w-[116rem] -mt-14 z-20 flex flex-col gap-12 md:gap-16">
            
            {/* Seção 1: Protótipo Status e Rotas */}
            <section className="w-full flex flex-col items-center gap-8 bg-[var(--primary)] text-[var(--bg-primary)] border-2 border-[var(--secondary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,51,102,0.22)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Módulo 01 • Navegação
            </span>

            <h2 className="text-[2.8rem] sm:text-[3.6rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--secondary)] decoration-4 underline-offset-8 text-center leading-tight">
                Rotas Inteligentes e Status em Tempo Real
            </h2>

            <p className="text-[1.65rem] sm:text-[1.9rem] md:text-[2.1rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/95 text-center leading-relaxed max-w-[82rem]">
                Esta seção apresenta a prototipação inicial de como o usuário visualiza o status das linhas, a velocidade média e as opções de rotas (normal, menos lotada ou mais rápida).
            </p>

            {/* Pills de Escaneabilidade Rápida */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <span className="px-5 py-2 rounded-full bg-[var(--primary-dark)] border border-white/20 text-[1.4rem] font-semibold">
                Rota Normal
                </span>
                <span className="px-5 py-2 rounded-full bg-[var(--primary-dark)] border border-white/20 text-[1.4rem] font-semibold">
                Rota Menos Lotada
                </span>
                <span className="px-5 py-2 rounded-full bg-[var(--primary-dark)] border border-white/20 text-[1.4rem] font-semibold">
                Rota Mais Rápida
                </span>
            </div>

            
            <img
                className="rounded-2xl p-0 max-w-[90%] max-h-[80vh] w-auto h-auto block mx-auto object-contain"
                src={rotasStatus}
                alt="Protótipo Rotas e Status"
            /> 
            
            </section>

            {/* Seção 2: Protótipo HeatMap e Dados Colaborativos */}
            <section className="w-full flex flex-col items-center gap-8 bg-[var(--secondary-dark)] text-[var(--bg-primary)] border-2 border-[var(--primary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Módulo 02 • Colaboração
            </span>

            <h2 className="text-[2.8rem] sm:text-[3.6rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--bg-primary)] decoration-4 underline-offset-8 text-center leading-tight">
                HeatMap e Relatórios Colaborativos
            </h2>

            <p className="text-[1.65rem] sm:text-[1.9rem] md:text-[2.1rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/95 text-center leading-relaxed max-w-[82rem]">
                Esta seção apresenta a interface de mapeamento de calor (HeatMap) e o envio de relatórios colaborativos por parte dos passageiros para monitorar a lotação dos vagões.
            </p>

            {/* Pills de Escaneabilidade Rápida */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <span className="px-5 py-2 rounded-full bg-black/25 border border-white/20 text-[1.4rem] font-semibold">
                Mapa de Calor por Vagão
                </span>
                <span className="px-5 py-2 rounded-full bg-black/25 border border-white/20 text-[1.4rem] font-semibold">
                Alertas da Comunidade
                </span>
                <span className="px-5 py-2 rounded-full bg-black/25 border border-white/20 text-[1.4rem] font-semibold">
                Monitoramento ao Vivo
                </span>
            </div>

            <img
                className="rounded-2xl p-0 max-w-[90%] max-h-[80vh] w-auto h-auto block mx-auto object-contain"
                src={relatorios}
                alt="Protótipo HeatMap e Colaboração"
            /> 
            </section>

            {/* CTA Final */}
            <div className="flex justify-center pt-4">
            <Button navegacao="/sistema2" texto="Conheça Mais" />
            </div>
        </div>
        </main>
    );
    }