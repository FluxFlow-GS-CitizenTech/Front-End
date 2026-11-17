    import Button from "../../Components/Button/Button";
    import Card from "../../Components/Card/Card";
    import imgFundo from "../../img/fundo3.jpg";

    export default function Sistema2() {
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
                titulo="Sistema FluxFlow"
                sub="Arquitetura e funcionamento operacional"
                descricao="Nesta página detalhamos os pilares tecnológicos do FluxFlow, com foco na precisão dos dados, inteligência de rotas e relatórios em tempo real."
            />
            <div className="mt-2">
                <Button navegacao="/contato" texto="Fale com a equipe" />
            </div>
            </div>
        </section>

        {/* CONTAINER PRINCIPAL DAS SEÇÕES */}
        <div className="w-[95%] max-w-[116rem] -mt-14 z-20 flex flex-col gap-12 md:gap-16">
            
            {/* Seção I */}
            <section className="w-full flex flex-col items-center gap-10 bg-[var(--primary)] text-[var(--bg-primary)] border-2 border-[var(--secondary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,51,102,0.22)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Pilar 01 • Mobilidade
            </span>

            <h2 className="text-[2.6rem] sm:text-[3.4rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--secondary)] decoration-4 underline-offset-8 text-center leading-tight">
                I) Eficiência e Impacto na Mobilidade
            </h2>

            <ol className="w-full max-w-[92rem] grid grid-cols-1 md:grid-cols-2 gap-4 font-[var(--fonte-texto)] text-[1.7rem] sm:text-[1.9rem] font-semibold">
                {[
                "Redução do tempo de espera",
                "Descongestionamento de estações críticas",
                "Otimização do fluxo de passageiros",
                "Previsibilidade de horários",
                "Impacto positivo no transporte urbano",
                ].map((item, idx) => (
                <li
                    key={idx}
                    className="flex items-center gap-4 bg-[var(--primary-dark)]/75 border border-white/15 rounded-[1.6rem] px-6 py-5 shadow-sm"
                >
                    <span className="w-9 h-9 rounded-full bg-[var(--secondary)] text-white text-[1.5rem] font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                    </span>
                    <span>{item}</span>
                </li>
                ))}
            </ol>

            {/* Imagem comentada conforme solicitação */}
            {/* <img className="rounded-[2.4rem] p-0" src={imgIa} alt="tabela avaliação" /> */}
            </section>

            {/* Seção II */}
            <section className="w-full flex flex-col items-center gap-10 bg-[var(--primary-dark)] text-[var(--bg-primary)] border-2 border-[var(--secondary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Pilar 02 • Precisão
            </span>

            <h2 className="text-[2.6rem] sm:text-[3.4rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--secondary)] decoration-4 underline-offset-8 text-center leading-tight">
                II) Confiabilidade dos Dados
            </h2>

            <ol className="w-full max-w-[92rem] grid grid-cols-1 md:grid-cols-2 gap-4 font-[var(--fonte-texto)] text-[1.7rem] sm:text-[1.9rem] font-semibold">
                {[
                "IA de validação de relatórios",
                "Geolocalização nas estações",
                "Cruzamento com dados oficiais",
                "Assinatura de relatórios colaborativos",
                "Detecção de inconsistências operacionais",
                "Validação temporal de eventos",
                "Filtragem de duplicidade de alertas",
                ].map((item, idx) => (
                <li
                    key={idx}
                    className="flex items-center gap-4 bg-[var(--primary)]/70 border border-white/15 rounded-[1.6rem] px-6 py-5 shadow-sm"
                >
                    <span className="w-9 h-9 rounded-full bg-[var(--secondary)] text-white text-[1.5rem] font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                    </span>
                    <span>{item}</span>
                </li>
                ))}
            </ol>

            {/* Imagem comentada conforme solicitação */}
            {/* <img className="rounded-[2.4rem] p-0" src={imgConfi} alt="tabela avaliação" /> */}
            </section>

            {/* Seção III */}
            <section className="w-full flex flex-col items-center gap-10 bg-[var(--primary)] text-[var(--bg-primary)] border-2 border-[var(--secondary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,51,102,0.22)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Pilar 03 • Tempo Real
            </span>

            <h2 className="text-[2.6rem] sm:text-[3.4rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--secondary)] decoration-4 underline-offset-8 text-center leading-tight">
                III) Atualização Inteligente
            </h2>

            <ol className="w-full max-w-[92rem] grid grid-cols-1 md:grid-cols-2 gap-4 font-[var(--fonte-texto)] text-[1.7rem] sm:text-[1.9rem] font-semibold">
                {[
                "Consistência de dados em tempo real",
                "Fluxo contínuo com ajuste dinâmico",
                "Até 1 reporte diário validado: relevância máxima",
                "Muitos reportes seguidos na mesma área: balanceamento gradual",
                ].map((item, idx) => (
                <li
                    key={idx}
                    className="flex items-center gap-4 bg-[var(--primary-dark)]/75 border border-white/15 rounded-[1.6rem] px-6 py-5 shadow-sm"
                >
                    <span className="w-9 h-9 rounded-full bg-[var(--secondary)] text-white text-[1.5rem] font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                    </span>
                    <span>{item}</span>
                </li>
                ))}
            </ol>

            {/* Imagem comentada conforme solicitação */}
            {/* <img className="rounded-[2.4rem] p-0" src={imgFi} alt="tabela avaliação" /> */}
            </section>

            {/* Grid 3 Colunas para as Seções IV, V e VI (Deixa a leitura muito mais leve e dinâmica) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Seção IV */}
            <section className="flex flex-col justify-between items-center text-center gap-6 bg-[var(--primary-dark)] text-[var(--bg-primary)] border-2 border-[var(--secondary)] p-8 sm:p-10 rounded-[2.8rem] shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center gap-4">
                <span className="px-4 py-1 rounded-full bg-white/10 text-[1.3rem] font-bold uppercase tracking-wider">
                    Pilar 04
                </span>
                <h2 className="text-[2.2rem] sm:text-[2.5rem] font-[var(--fonte-principal)] font-bold underline decoration-[var(--secondary)] decoration-4 underline-offset-8 leading-snug">
                    IV) Complexidade das Linhas
                </h2>
                <p className="text-[1.65rem] sm:text-[1.8rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/90 leading-relaxed mt-2">
                    Nem toda linha ou estação possui o mesmo nível de criticidade ou fluxo.
                </p>
                </div>
                {/* Imagem comentada conforme solicitação */}
                {/* <img className="rounded-[2.4rem] p-0" src={imgDa} alt="tabela avaliação" /> */}
            </section>

            {/* Seção V */}
            <section className="flex flex-col justify-between items-center text-center gap-6 bg-[var(--primary-dark)] text-[var(--bg-primary)] border-2 border-[var(--secondary)] p-8 sm:p-10 rounded-[2.8rem] shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center gap-4">
                <span className="px-4 py-1 rounded-full bg-white/10 text-[1.3rem] font-bold uppercase tracking-wider">
                    Pilar 05
                </span>
                <h2 className="text-[2.2rem] sm:text-[2.5rem] font-[var(--fonte-principal)] font-bold underline decoration-[var(--secondary)] decoration-4 underline-offset-8 leading-snug">
                    V) Alertas e Bônus Inteligentes
                </h2>
                <p className="text-[1.65rem] sm:text-[1.8rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/90 leading-relaxed mt-2">
                    O sistema incentiva a colaboração coletiva entre os passageiros.
                </p>
                </div>
                {/* Imagem comentada conforme solicitação */}
                {/* <img className="rounded-[2.4rem] p-0" src={imgBi} alt="tabela avaliação" /> */}
            </section>

            {/* Seção VI */}
            <section className="flex flex-col justify-between items-center text-center gap-6 bg-[var(--primary-dark)] text-[var(--bg-primary)] border-2 border-[var(--secondary)] p-8 sm:p-10 rounded-[2.8rem] shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center gap-4">
                <span className="px-4 py-1 rounded-full bg-white/10 text-[1.3rem] font-bold uppercase tracking-wider">
                    Pilar 06
                </span>
                <h2 className="text-[2.2rem] sm:text-[2.5rem] font-[var(--fonte-principal)] font-bold underline decoration-[var(--secondary)] decoration-4 underline-offset-8 leading-snug">
                    VI) Filtragem Anti-Fraude
                </h2>
                <p className="text-[1.65rem] sm:text-[1.8rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/90 leading-relaxed mt-2">
                    Essencial para garantir a precisão dos alertas colaborativos.
                </p>
                </div>
                {/* Imagem comentada conforme solicitação */}
                {/* <img className="rounded-[2.4rem] p-0" src={imgPaf} alt="tabela avaliação" /> */}
            </section>
            </div>

            {/* Seção Cálculo Completo */}
            <section className="w-full flex flex-col items-center gap-8 bg-[var(--secondary-dark)] text-[var(--bg-primary)] border-2 border-[var(--primary)] p-8 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
            <span className="px-5 py-1.5 rounded-full bg-white/15 text-[1.35rem] font-bold uppercase tracking-widest">
                Arquitetura Geral
            </span>

            <h2 className="text-[2.6rem] sm:text-[3.4rem] md:text-[var(--titulo-main)] font-[var(--fonte-principal)] font-bold underline decoration-[var(--bg-primary)] decoration-4 underline-offset-8 text-center leading-tight">
                Fluxo de Dados Completo
            </h2>

            <p className="text-[1.65rem] sm:text-[1.9rem] md:text-[2.1rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/95 text-center leading-relaxed max-w-[76rem]">
                Imagem de fluxo ilustrativo do sistema de rotas e lotação.
            </p>

            {/* Espaço reservado elegante enquanto a imagem está comentada */}
            <div className="w-full max-w-[80rem] h-[22rem] sm:h-[26rem] rounded-[2rem] border-2 border-dashed border-white/35 bg-black/15 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="text-[1.6rem] sm:text-[1.8rem] font-bold text-white/90">
                Diagrama: Fluxo de Dados Completo
                </span>
                <span className="text-[1.4rem] text-white/70 max-w-[46rem]">
                Espaço reservado para o fluxograma ilustrativo de processamento de rotas e lotação.
                </span>
            </div>

            {/* Imagem comentada conforme solicitação */}
            {/* <img className="rounded-[2.4rem] p-0" src={imgFc} alt="tabela avaliação" /> */}
            </section>

            {/* Navegação de Rodapé da Página */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button navegacao="/sistema" texto="← Voltar para Sistema" />
            <Button navegacao="/faq" texto="Ver Perguntas Frequentes" />
            </div>
        </div>
        </main>
    );
    }