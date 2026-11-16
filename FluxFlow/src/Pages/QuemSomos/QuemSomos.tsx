import giovanni from "../../img/IMG-20260328-WA0007.jpg";
import raphael from "../../img/3x4 Raphael Gomes.jpeg";
import felipe from "../../img/image.png";
import linkedin from "../../img/linkedin_logo.png";
import github from "../../img/github_logo.png";
import Card from "../../Components/Card/Card";
import imgFundo from "../../img/fundo3.jpg";
import Button from "../../Components/Button/Button";

export default function QuemSomos(){
    return (
        <main className="conteudo">
            <section 
                className="relative w-full h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat border-b-[5px] border-[var(--secondary-dark)] flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${imgFundo})`
                }}
            >
                <div className="text-center px-4">
                    <Card 
                        titulo="Quem Somos" 
                        sub="Profissionais Qualificados e Desenvolvedores do FluxFlow." 
                        descricao="Apaixonados por inovação, tecnologia e mobilidade urbana. Queremos transformar o transporte sobre trilhos em uma experiência conectada, inteligente e sem superlotação." 
                    />
                    <Button navegacao="/sistema" texto="Conheça mais"/>
                </div>
            </section>
            
            <div className="w-full h-auto flex flex-col gap-50 m-2rem md:gap-24 my-10 md:my-20">
                {/* Cabeçalho da Equipe */}
                <section className="w-full h-full flex flex-col gap-10 justify-center items-center border-b-[5px] border-[var(--secondary)] bg-[var(--bg-dark)] py-12 md:py-20">
                    <div className="w-[90%] md:w-[85%] bg-[var(--secondary-dark)] text-[var(--bg-dark)] p-10 md:p-20 rounded-[12px] text-center shadow-lg">
                        
                        <h2 className="text-4xl md:text-[var(--titulo-main)] font-[var(--fonte-texto)] font-semibold mb-8 md:mb-14 underline decoration-[var(--primary)]">
                            Equipe FluxFlow
                        </h2>

                        <p className="text-xl md:text-[2.3rem] font-[var(--fonte-texto)] text-[var(--bg-dark)] leading-relaxed md:leading-[3.5rem] max-w-5xl mx-auto">
                            Movidos pela inovação, tecnologia e impacto na mobilidade urbana[cite: 1]. <br className="hidden md:inline" />
                            Nossa equipe trabalha para desenvolver soluções inteligentes e eficientes no transporte metroferroviário[cite: 5], <br className="hidden md:inline" />
                            conectando dados em tempo real e rotas alternativas para melhorar o dia a dia dos passageiros[cite: 5].
                        </p>
                    </div>
                </section>

                {/* Profissional 1 - Giovanni */}
                <section className="w-full flex flex-col md:flex-row items-center p-8 md:p-24 lg:p-32 gap-12 lg:gap-24 bg-[var(--primary)] shadow-[0_10px_45px_rgba(68,192,197,0.45)]">
                    <img 
                        className="w-full md:w-[23vw] max-w-[320px] md:max-w-none h-auto border-[5px] border-[var(--secondary)] rounded-[1.5rem] object-cover shrink-0" 
                        src={giovanni} 
                        alt="Desenvolvedor FluxFlow - Giovanni" 
                    />

                    <div className="flex flex-col gap-10 md:gap-14 justify-center w-full">
                        <h2 className="text-3xl md:text-5xl lg:text-[var(--titulo-hero)] font-[var(--fonte-texto)] font-bold text-[var(--bg-dark)] text-center md:text-left">
                            Giovanni Zorzetto
                        </h2>

                        <div className="w-full bg-[var(--bg-primary)] border-4 border-[var(--secondary)] rounded-[1.5rem] shadow-[7px_7px_7px_rgba(255,255,255,1)] p-8 md:p-14 flex flex-col gap-8">
                            <p className="text-lg md:text-[2.2rem] font-[var(--fonte-texto)] text-center leading-relaxed md:leading-[3.5rem]">
                                “Desenvolver o FluxFlow me mostrou como a tecnologia pode resolver desafios reais do transporte urbano. Criar ferramentas de rotas inteligentes e previsões de lotação foi uma experiência fantástica[cite: 5].”
                            </p>

                            <ul className="flex items-center justify-center gap-8 md:gap-16 flex-wrap pt-4">
                                <li className="text-xl md:text-[var(--sub-titulo)] font-[var(--fonte-texto)] font-bold underline">
                                    RM569464
                                </li>
                                
                                <li>
                                    <a href="https://www.linkedin.com/in/giovanni-zorzetto-oliveira-8375b9305/" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            style={{ width: "32px", height: "32px" }} 
                                            className="!w-8 !h-8 object-contain shrink-0 inline-block transition-transform hover:scale-110" 
                                            src={linkedin} 
                                            alt="linkedin logo" 
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/Gizetto61" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            style={{ width: "32px", height: "32px" }} 
                                            className="!w-8 !h-8 object-contain shrink-0 inline-block transition-transform hover:scale-110" 
                                            src={github} 
                                            alt="GitHub logo" 
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Profissional 2 - Raphael */}
                <section className="w-full flex flex-col md:flex-row items-center p-8 md:p-24 lg:p-32 gap-12 lg:gap-24 border-t-[10px] border-[var(--bg-dark)] bg-[var(--secondary-dark)] shadow-[0_10px_40px_rgba(121,155,0,0.4)]">
                    <img 
                        className="w-full md:w-[23vw] max-w-[320px] md:max-w-none h-auto border-[5px] border-[var(--secondary)] rounded-[1.5rem] object-cover shrink-0" 
                        src={raphael} 
                        alt="Desenvolvedor FluxFlow - Raphael" 
                    />

                    <div className="flex flex-col gap-10 md:gap-14 justify-center w-full">
                        <h2 className="text-3xl md:text-5xl lg:text-[var(--titulo-hero)] font-[var(--fonte-texto)] font-bold text-[var(--bg-dark)] text-center md:text-left">
                            Raphael Gomes
                        </h2>

                        <div className="w-full bg-[var(--bg-primary)] border-4 border-[var(--secondary)] rounded-[1.5rem] shadow-[7px_7px_7px_rgba(255,255,255,1)] p-8 md:p-14 flex flex-col gap-8">
                            <p className="text-lg md:text-[2.2rem] font-[var(--fonte-texto)] text-center leading-relaxed md:leading-[3.5rem]">
                                “Participar da criação do FluxFlow ampliou minha visão sobre engenharia de software e impacto social. Contribuir para otimizar o fluxo de passageiros nas estações foi extremamente gratificante[cite: 5, 7].”
                            </p>

                            <ul className="flex items-center justify-center gap-8 md:gap-16 flex-wrap pt-4">
                                <li className="text-xl md:text-[var(--sub-titulo)] font-[var(--fonte-texto)] font-bold underline">
                                    RM572637
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com/in/raphaelbritorgb/" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            style={{ width: "32px", height: "32px" }} 
                                            className="!w-8 !h-8 object-contain shrink-0 inline-block transition-transform hover:scale-110" 
                                            src={linkedin} 
                                            alt="linkedin logo" 
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/PhaelRGB" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            style={{ width: "32px", height: "32px" }} 
                                            className="!w-8 !h-8 object-contain shrink-0 inline-block transition-transform hover:scale-110" 
                                            src={github} 
                                            alt="GitHub logo" 
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Profissional 3 - Felipe */}
                <section className="w-full flex flex-col md:flex-row items-center p-8 md:p-24 lg:p-32 gap-12 lg:gap-24 border-t-[10px] border-b-[6px] border-[var(--bg-dark)] bg-[var(--primary)] shadow-[0_10px_45px_rgba(68,192,197,0.45)]">
                    <img 
                        className="w-full md:w-[23vw] max-w-[320px] md:max-w-none h-auto border-[5px] border-[var(--secondary)] rounded-[1.5rem] object-cover shrink-0" 
                        src={felipe} 
                        alt="Desenvolvedor FluxFlow - Felipe" 
                    />

                    <div className="flex flex-col gap-10 md:gap-14 justify-center w-full">
                        <h2 className="text-3xl md:text-5xl lg:text-[var(--titulo-hero)] font-[var(--fonte-texto)] font-bold text-[var(--bg-dark)] text-center md:text-left">
                            Felipe Lima
                        </h2>

                        <div className="w-full bg-[var(--bg-primary)] border-4 border-[var(--secondary)] rounded-[1.5rem] shadow-[7px_7px_7px_rgba(255,255,255,1)] p-8 md:p-14 flex flex-col gap-8">
                            <p className="text-lg md:text-[2.2rem] font-[var(--fonte-texto)] text-center leading-relaxed md:leading-[3.5rem]">
                                "Fazer parte do desenvolvimento do FluxFlow foi desafiador e inspirador. Unimos tecnologia e colaboração em tempo real para transformar a experiência de milhões de usuários no metrô[cite: 5, 7]."
                            </p>

                            <ul className="flex items-center justify-center gap-8 md:gap-16 flex-wrap pt-4">
                                <li className="text-xl md:text-[var(--sub-titulo)] font-[var(--fonte-texto)] font-bold underline">
                                    RM569947
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com/in/felipe-lima-a4215832a/" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            style={{ width: "32px", height: "32px" }} 
                                            className="!w-8 !h-8 object-contain shrink-0 inline-block transition-transform hover:scale-110" 
                                            src={linkedin} 
                                            alt="linkedin logo" 
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/felipelima2005" target="_blank" rel="noopener noreferrer">
                                        <img 
                                            style={{ width: "32px", height: "32px" }} 
                                            className="!w-8 !h-8 object-contain shrink-0 inline-block transition-transform hover:scale-110" 
                                            src={github} 
                                            alt="GitHub logo" 
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}