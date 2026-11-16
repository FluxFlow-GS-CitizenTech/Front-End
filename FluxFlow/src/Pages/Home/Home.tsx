import Card from "../../Components/Card/Card";
import imgFundo from "../../img/fundo2.jpg";
import Button from "../../Components/Button/Button";

export default function Home(){
    return (
        <main className="conteudo">
            {/* Hero Section */}
            <section 
                className="relative w-full h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat border-b-[5px] border-[var(--secondary-dark)] flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${imgFundo})`
                }}
            >
                <div className="text-center px-4">
                    <Card 
                        titulo="FluxFlow" 
                        sub="Conectando você ao melhor trajeto no metrô." 
                        descricao="Muito mais que um aplicativo de rotas, uma nova experiência de mobilidade urbana.
                            Diga adeus à superlotação e viaje com inteligência, agilidade e previsibilidade." 
                    />
                    <Button navegacao="/sistema" texto="Conheça mais"/>
                </div>
            </section>

            <div className="w-full h-auto flex flex-col">
                
                {/* Seção Ideia Principal / Pilares */}
                <section className="flex flex-col w-full h-auto gap-[3rem] bg-[var(--primary-dark)]">
                    <section className="flex flex-col justify-center text-center text-[var(--bg-dark)] font-[var(--fonte-texto)] leading-[4rem]">
                        <h2 className="text-[length:var(--titulo-main)] font-semibold my-[6rem] p-[1rem] underline decoration-[var(--secondary)]">
                            Nossa ideia principal!
                        </h2>
                        <p className="text-[2rem] font-normal mx-[2.5rem] p-[1rem]">
                            Trabalhar para transformar a mobilidade metroferroviária, <br />
                            oferecendo uma plataforma inteligente e gratuita[cite: 5] que conta com:
                        </p>
                    </section>
                    
                    {/* Grid de Funcionalidades Adaptadas ao FluxFlow */}
                    <div className="w-full h-1/2 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 max-[425px]:gap-4 border-b-[5px] border-[var(--secondary)]">
                        <section className="justify-center p-[1.5rem] bg-[var(--secondary-dark)] border-[3px] border-[var(--primary)] m-[7rem] mt-[6rem] leading-[2.5rem] rounded-[2rem] transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[8px_8px_10px_rgb(255,255,255)]">
                            <h2 className="text-[2.2rem] text-center font-[var(--fonte-texto)] leading-[3rem] mb-[3rem] mt-[1rem] text-[var(--bg-dark)]">
                                STATUS EM TEMPO REAL
                            </h2>
                            <p className="text-[1.7rem] text-center mt-[2rem] font-[var(--fonte-texto)] font-normal leading-[2.5rem]">
                                Acompanhe atrasos de linhas, velocidade média e estações congestionadas instantaneamente[cite: 5].
                            </p>
                        </section>

                        <section className="justify-center p-[1.5rem] bg-[var(--secondary-dark)] border-[3px] border-[var(--primary)] m-[7rem] mt-[6rem] leading-[2.5rem] rounded-[2rem] transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[8px_8px_10px_rgb(255,255,255)]">
                            <h2 className="text-[2.2rem] text-center font-[var(--fonte-texto)] leading-[3rem] mb-[3rem] mt-[1rem] text-[var(--bg-dark)]">
                                O MELHOR VAGÃO
                            </h2>
                            <p className="text-[1.7rem] text-center mt-[2rem] font-[var(--fonte-texto)] font-normal leading-[2.5rem]">
                                Recomendações precisas para embarque, desembarque, baldeação e monitoramento de climatização[cite: 5].
                            </p>
                        </section>

                        <section className="justify-center p-[1.5rem] bg-[var(--secondary-dark)] border-[3px] border-[var(--primary)] m-[7rem] mt-[6rem] leading-[2.5rem] rounded-[2rem] transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[8px_8px_10px_rgb(255,255,255)]">
                            <h2 className="text-[2.2rem] text-center font-[var(--fonte-texto)] leading-[3rem] mb-[3rem] mt-[1rem] text-[var(--bg-dark)]">
                                ROTAS INTELIGENTES
                            </h2>
                            <p className="text-[1.7rem] text-center mt-[2rem] font-[var(--fonte-texto)] font-normal leading-[2.5rem]">
                                Escolha entre rota normal, opção menos lotada ou percurso mais rápido conforme o seu dia[cite: 5].
                            </p>
                        </section>

                        <section className="justify-center p-[1.5rem] bg-[var(--secondary-dark)] border-[3px] border-[var(--primary)] m-[7rem] mt-[6rem] leading-[2.5rem] rounded-[2rem] transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:shadow-[8px_8px_10px_rgb(255,255,255)]">
                            <h2 className="text-[2.2rem] text-center font-[var(--fonte-texto)] leading-[3rem] mb-[3rem] mt-[1rem] text-[var(--bg-dark)]">
                                DADOS COLABORATIVOS
                            </h2>
                            <p className="text-[1.7rem] text-center mt-[2rem] font-[var(--fonte-texto)] font-normal leading-[2.5rem]">
                                HeatMap de lotação e reportagens em tempo real enviadas pela comunidade de passageiros.
                            </p>
                        </section>
                    </div>
                </section>

                
                <section className="p-[3rem] w-full h-auto flex flex-col items-center bg-[var(--bg-dark)]">
                    <div className="text-center font-[var(--fonte-texto)] m-[6rem] gap-[5rem]">
                        <h2 className="text-[length:var(--titulo-main)] mb-[3rem] font-semibold underline leading-none decoration-[var(--primary)] max-[425px]:text-[3.5rem] max-[425px]:leading-[4rem]">
                            Por que escolher o FluxFlow?
                        </h2>
                        <p className="text-[length:var(--sub-titulo)] font-normal max-[425px]:text-[2.5rem] max-[425px]:leading-[3rem]">
                            Diferenciais pensados exclusivamente para otimizar sua rotina no transporte sobre trilhos...
                        </p>
                    </div>

                    <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-12">
                        <div className="bg-[var(--secondary-dark)] border-2 border-[var(--primary)] p-8 rounded-[2rem] text-[var(--bg-dark)] shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-[2.2rem] font-bold mb-4 font-[var(--fonte-texto)]">Foco Exclusivo em Trilhos</h3>
                                <p className="text-[1.6rem] leading-[2.4rem] font-[var(--fonte-texto)]">
                                    Enquanto aplicativos tradicionais focam em ônibus[cite: 7], o FluxFlow é especializado na malha metroferroviária, mapeando estações complexas e grandes centros de transferência.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[var(--secondary-dark)] border-2 border-[var(--primary)] p-8 rounded-[2rem] text-[var(--bg-dark)] shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-[2.2rem] font-bold mb-4 font-[var(--fonte-texto)]">Guias de Estações Gigantes</h3>
                                <p className="text-[1.6rem] leading-[2.4rem] font-[var(--fonte-texto)]">
                                    Orientação interna de caminhos nas maiores estações do sistema (como Sé e Luz) para economizar cada segundo do seu trajeto[cite: 7].
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seção FAQ Call-to-Action */}
                <div className="bg-[var(--primary)] w-full h-full flex justify-center items-center border-t-[5px] border-b-[5px] border-[var(--secondary)] leading-[3.3rem]">
                    <section className="w-[60%] max-[425px]:w-full h-1/2 bg-[var(--secondary-dark)] text-center p-[2rem] max-[425px]:p-[1rem] rounded-[1.5rem] m-[9rem] max-[425px]:m-[2rem] shadow-[7px_7px_7px_rgb(82,160,18)]">
                        <h2 className="text-[length:var(--sub-titulo)] font-[var(--fonte-texto)] font-semibold text-[var(--bg-dark)] m-[3rem]">
                            Ficou Com Alguma Dúvida?
                        </h2>
                        <p className="text-[2rem] font-[var(--fonte-texto)] font-normal text-[var(--bg-dark)] mb-[4rem]">
                            Caso tenha alguma dúvida sobre o FluxFlow, preparamos um FAQ completo <br /> 
                            com as perguntas mais frequentes. Confira!
                        </p>
                        
                        <Button navegacao="/faq" texto="Tire sua dúvida"/>
                    </section>
                </div>
            </div>
        </main>
    );
}