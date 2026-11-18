    import Button from "../../Components/Button/Button";
    import Card from "../../Components/Card/Card";
    import demostracao from "../../img/rondmap.png";
    import imgFundo from "../../img/fundo3.jpg";

    export default function Sobre() {
    return (
        <main className="conteudo flex flex-col items-center pb-24">
        {/* HERO SECTION */}
        <section 
            className="relative w-full min-h-[75vh] md:min-h-[80vh] bg-cover bg-center bg-no-repeat border-b-[5px] border-[var(--secondary-dark)] flex items-center justify-center px-6 py-20"
            style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 26, 51, 0.78), rgba(0, 0, 0, 0.72)), url(${imgFundo})`
            }}
        >
            <div className="max-w-[96rem] w-full flex flex-col items-center text-center gap-8 z-10">
            <Card 
                titulo="Sobre o FluxFlow" 
                sub="Detalhes do projeto, objetivos e diferenciais de mobilidade" 
                descricao="Introdução, Objetivos, Justificativa e RoadMap do sistema metroferroviário inteligente." 
            />
            </div>
        </section>
        
        {/* CONTAINER PRINCIPAL DAS SEÇÕES */}
        <div className="w-[95%] max-w-[116rem] -mt-14 z-20 flex flex-col gap-12 md:gap-16">
            
            {/* Seção Introdução */}
            <section className="flex flex-col items-center gap-8 bg-[var(--primary)] text-[var(--bg-primary)] border-2 border-[var(--secondary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,51,102,0.22)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Visão Geral
            </span>

            <h2 className="text-[2.8rem] sm:text-[3.6rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--secondary)] decoration-4 underline-offset-8 text-center leading-tight">
                Introdução
            </h2>

            <p className="text-[1.65rem] sm:text-[1.9rem] md:text-[2.1rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/95 text-center leading-relaxed max-w-[82rem]">
                O <strong className="font-bold underline decoration-[var(--secondary)]">FluxFlow</strong> é um aplicativo gratuito desenvolvido por <span className="font-semibold text-white">Felipe Lima, Giovanni Zorzetto e Raphael Gomes</span>[cite: 1] com o propósito de transformar a experiência dos passageiros no transporte sobre trilhos. Nossa solução utiliza dados em tempo real, inteligência de rotas e relatórios colaborativos para combater os principais gargalos enfrentados diariamente por milhões de usuários no sistema metroferroviário.
            </p>
            </section>

            {/* Seção Objetivos */}
            <section className="flex flex-col items-center gap-8 bg-[var(--secondary-dark)] text-[var(--bg-primary)] border-2 border-[var(--primary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Metas e Foco
            </span>

            <h2 className="text-[2.8rem] sm:text-[3.6rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--bg-primary)] decoration-4 underline-offset-8 text-center leading-tight">
                Objetivos
            </h2>

            <p className="text-[1.65rem] sm:text-[1.9rem] md:text-[2.1rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/95 text-center leading-relaxed max-w-[82rem]">
                Nosso objetivo principal é otimizar o tempo de deslocamento e garantir viagens mais confortáveis e previsíveis. Para isso, oferecemos funcionalidades avançadas como: <strong className="font-bold">Status em Tempo Real</strong> de linhas e velocidades médias, indicação do <strong className="font-bold">Melhor Vagão</strong> para embarque, desembarque e baldeação, <strong className="font-bold">Rotas Alternativas Inteligentes</strong> (normais, menos lotadas ou mais rápidas), além de diferenciais exclusivos como um <strong className="font-bold">HeatMap de lotação</strong> e guias para otimizar o trajeto dentro de estações complexas.
            </p>
            </section>

            {/* Seção Justificativa */}
            <section className="flex flex-col items-center gap-8 bg-[var(--primary)] text-[var(--bg-primary)] border-2 border-[var(--secondary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,51,102,0.22)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Relevância Urbana
            </span>

            <h2 className="text-[2.8rem] sm:text-[3.6rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--secondary)] decoration-4 underline-offset-8 text-center leading-tight">
                Justificativa
            </h2>

            <p className="text-[1.65rem] sm:text-[1.9rem] md:text-[2.1rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/95 text-center leading-relaxed max-w-[82rem]">
                Com mais de 4 milhões de passageiros diários no metrô e estações movimentadas que registram centenas de milhares de embarques (como Sé e Luz), a superlotação em horários de pico, os atrasos e a falta de orientações claras geram estresse e perda de tempo. Embora aplicativos tradicionais ofereçam rotas gerais focadas em ônibus, o FluxFlow preenche essa lacuna com foco exclusivo no modal sobre trilhos, contando também com uma rede colaborativa onde os próprios usuários reportam alertas.
            </p>
            </section>

            {/* Seção RoadMap */}
            <section className="flex flex-col items-center gap-8 bg-[var(--secondary-dark)] text-[var(--bg-primary)] border-2 border-[var(--primary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Evolução do Projeto
            </span>

            <h2 className="text-[2.8rem] sm:text-[3.6rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--bg-primary)] decoration-4 underline-offset-8 text-center leading-tight">
                RoadMap
            </h2>

            <p className="text-[1.65rem] sm:text-[1.9rem] md:text-[2.1rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/95 text-center leading-relaxed max-w-[82rem]">
                Acompanhamento estruturado das etapas de desenvolvimento, prototipação e validação da plataforma FluxFlow.
            </p>

            
            <div className="w-full max-w-[92rem] mt-4 p-2 bg-black/20 rounded-[2.4rem] border-2 border-white/20 shadow-xl overflow-hidden">
                <img 
                className="w-full h-auto object-contain rounded-[2rem]" 
                src={demostracao} 
                alt="RoadMap e Fluxo de Funcionamento do FluxFlow" 
                />
            </div>
            </section>
            
            
            <div className="flex justify-center pt-4">
            <Button navegacao="/sistema2" texto="Conheça Mais" />
            </div>

        </div>
        </main>
    );
    }