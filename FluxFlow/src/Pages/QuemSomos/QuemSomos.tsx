import giovanni from "../../img/IMG-20260328-WA0007.jpg";
    import raphael from "../../img/3x4 Raphael Gomes.jpeg";
    import felipe from "../../img/image.png";
    import linkedin from "../../img/linkedin_logo.png";
    import github from "../../img/github_logo.png";
    import Card from "../../Components/Card/Card";
    import imgFundo from "../../img/fundo3.jpg";
    import Button from "../../Components/Button/Button";

    interface MembroEquipe {
    nome: string;
    rm: string;
    sala: string;
    foto: string;
    alt: string;
    depoimento: string;
    linkedinUrl: string;
    githubUrl: string;
    tema: "primary" | "secondary";
    }

    const membros: MembroEquipe[] = [
    {
        nome: "Giovanni Zorzetto",
        rm: "RM569464",
        sala: "1TDSPH",
        foto: giovanni,
        alt: "Desenvolvedor FluxFlow - Giovanni Zorzetto",
        depoimento:
        "Desenvolver o FluxFlow me mostrou como a tecnologia pode resolver desafios reais do transporte urbano. Criar ferramentas de rotas inteligentes e previsões de lotação foi uma experiência fantástica.",
        linkedinUrl: "https://www.linkedin.com/in/giovanni-zorzetto-oliveira-8375b9305/",
        githubUrl: "https://github.com/Gizetto61",
        tema: "primary",
    },
    {
        nome: "Raphael Gomes",
        rm: "RM572637",
        sala: "1TDSPH",
        foto: raphael,
        alt: "Desenvolvedor FluxFlow - Raphael Gomes",
        depoimento:
        "Participar da criação do FluxFlow ampliou minha visão sobre engenharia de software e impacto social. Contribuir para otimizar o fluxo de passageiros nas estações foi extremamente gratificante.",
        linkedinUrl: "https://www.linkedin.com/in/raphaelbritorgb/",
        githubUrl: "https://github.com/PhaelRGB",
        tema: "secondary",
    },
    {
        nome: "Felipe Lima",
        rm: "RM569947",
        sala: "1TDSPH",
        foto: felipe,
        alt: "Desenvolvedor FluxFlow - Felipe Lima",
        depoimento:
        "Fazer parte do desenvolvimento do FluxFlow foi desafiador e inspirador. Unimos tecnologia e colaboração em tempo real para transformar a experiência de milhões de usuários no metrô.",
        linkedinUrl: "https://www.linkedin.com/in/felipe-lima-a4215832a/",
        githubUrl: "https://github.com/felipelima2005",
        tema: "primary",
    },
    ];

    export default function QuemSomos() {
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
                titulo="Quem Somos"
                sub="Profissionais Qualificados e Desenvolvedores do FluxFlow."
                descricao="Apaixonados por inovação, tecnologia e mobilidade urbana. Queremos transformar o transporte sobre trilhos em uma experiência conectada, inteligente e sem superlotação."
            />
            <div className="mt-2">
                <Button navegacao="/sistema" texto="Conheça mais" />
            </div>
            </div>
        </section>

        {/* CABEÇALHO DA EQUIPE (Com sobreposição sutil no Hero) */}
        <section className="w-[95%] max-w-[116rem] -mt-14 z-20 bg-[var(--secondary-dark)] text-[var(--bg-primary)] p-8 sm:p-14 md:p-16 rounded-[2.8rem] border-2 border-[var(--primary)] text-center shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
            <span className="inline-block px-5 py-1.5 mb-4 rounded-full bg-white/10 text-[1.35rem] font-bold uppercase tracking-widest text-[var(--bg-primary)]">
            Time de Desenvolvimento
            </span>

            <h2 className="text-[3rem] sm:text-[3.8rem] md:text-[4.4rem] font-[var(--fonte-principal)] font-bold mb-6 underline decoration-[var(--primary)] decoration-4 underline-offset-8">
            Equipe FluxFlow
            </h2>

            <p className="text-[1.65rem] sm:text-[1.9rem] md:text-[2.1rem] font-[var(--fonte-texto)] text-[var(--bg-primary)]/95 leading-relaxed max-w-[82rem] mx-auto">
            Movidos pela inovação, tecnologia e impacto na mobilidade urbana. Nossa equipe trabalha para desenvolver soluções inteligentes e eficientes no transporte metroferroviário, conectando dados em tempo real e rotas alternativas para melhorar o dia a dia dos passageiros.
            </p>
        </section>

        {/* LISTA DE MEMBROS DA EQUIPE */}
        <div className="w-[95%] max-w-[116rem] flex flex-col gap-12 md:gap-16 mt-14 md:mt-20">
            {membros.map((membro, index) => {
            const isPrimary = membro.tema === "primary";
            const isReversed = index % 2 !== 0;

            return (
                <section
                key={membro.rm}
                className={`w-full flex flex-col ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center p-8 sm:p-12 md:p-16 gap-10 lg:gap-16 rounded-[3rem] border-2 shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-1 ${
                    isPrimary
                    ? "bg-[var(--primary)] border-[var(--secondary)]"
                    : "bg-[var(--secondary-dark)] border-[var(--primary)]"
                }`}
                >
                {/* Foto Padronizada com Proporção Fixa */}
                <div className="w-full max-w-[28rem] sm:max-w-[30rem] aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-[var(--bg-primary)] shadow-xl shrink-0 bg-[var(--bg-dark)]">
                    <img
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    src={membro.foto}
                    alt={membro.alt}
                    />
                </div>

                {/* Conteúdo e Card de Depoimento */}
                <div className="flex flex-col gap-6 md:gap-8 justify-center w-full">
                    <div
                    className={`flex flex-col ${
                        isReversed ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                    } items-center text-center gap-2`}
                    >
                    <span className="px-4 py-1 rounded-full bg-black/20 text-[var(--bg-primary)] font-[var(--fonte-texto)] text-[1.35rem] font-bold uppercase tracking-wider">
                        Desenvolvedor • FluxFlow
                    </span>
                    <h2 className="text-[3.2rem] sm:text-[4rem] md:text-[4.8rem] font-[var(--fonte-principal)] font-bold text-[var(--bg-primary)] leading-tight drop-shadow-sm">
                        {membro.nome}
                    </h2>
                    </div>

                    {/* Caixa de Citação e Contatos */}
                    <div
                    className={`w-full bg-[var(--bg-primary)] border-2 rounded-[2.2rem] shadow-lg p-8 sm:p-10 md:p-12 flex flex-col gap-8 ${
                        isPrimary ? "border-[var(--secondary)]" : "border-[var(--primary)]"
                    }`}
                    >
                    <p className="text-[1.65rem] sm:text-[1.85rem] md:text-[2rem] font-[var(--fonte-texto)] text-[var(--text-main)] text-center leading-relaxed italic">
                        “{membro.depoimento}”
                    </p>

                    {/* Rodapé do Card: RM + Sala + Redes Sociais */}
                    <div className="flex items-center justify-center sm:justify-between flex-wrap gap-6 pt-6 border-t border-[var(--bg-dark)]">
                        <div className="flex items-center gap-3">
                            <span className="px-5 py-2 rounded-[1rem] bg-[var(--bg-dark)] text-[var(--primary-dark)] font-[var(--fonte-texto)] text-[1.6rem] md:text-[1.8rem] font-extrabold tracking-wide">
                            {membro.rm}
                            </span>
                            <span className="px-5 py-2 rounded-[1rem] bg-[var(--primary-dark)] text-white font-[var(--fonte-texto)] text-[1.6rem] md:text-[1.8rem] font-extrabold tracking-wide">
                            {membro.sala}
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                        <a
                            href={membro.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`LinkedIn de ${membro.nome}`}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-[1.2rem] bg-white border border-gray-300 text-[var(--text-main)] font-[var(--fonte-texto)] text-[1.45rem] font-bold shadow-sm transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:-translate-y-0.5"
                        >
                            <img
                            className="w-6 h-6 object-contain"
                            src={linkedin}
                            alt=""
                            />
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href={membro.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub de ${membro.nome}`}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-[1.2rem] bg-white border border-gray-300 text-[var(--text-main)] font-[var(--fonte-texto)] text-[1.45rem] font-bold shadow-sm transition-all duration-200 hover:border-[var(--text-main)] hover:bg-[var(--text-main)] hover:text-white hover:-translate-y-0.5"
                        >
                            <img
                            className="w-6 h-6 object-contain"
                            src={github}
                            alt=""
                            />
                            <span>GitHub</span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            );
            })}
        </div>
        </main>
    );
    }