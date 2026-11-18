import Card from "../../Components/Card/Card";
import imgFundo from "../../img/fundo2.jpg";
import Button from "../../Components/Button/Button";

export default function Home() {
    return (
        <main className="conteudo flex flex-col font-[family-name:var(--fonte-texto)] text-[1.9rem] md:text-[2.1rem]">
            {/* Seção Hero com Imagem de Fundo e Overlay Profissional */}
            <section 
                className="relative w-full min-h-[80vh] md:min-h-[85vh] bg-cover bg-center bg-no-repeat border-b-[4px] border-[var(--secondary)] flex items-center justify-center px-6 py-20"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 26, 51, 0.78), rgba(0, 0, 0, 0.72)), url(${imgFundo})`
                }}
            >
                <div className="max-w-[96rem] text-center flex flex-col items-center gap-8 z-10">
                    <Card 
                        titulo="FluxFlow" 
                        sub="Conectando você ao melhor trajeto no metrô." 
                        descricao="Muito mais que um aplicativo de rotas, uma nova experiência de mobilidade urbana. Diga adeus à superlotação e viaje com inteligência, agilidade e previsibilidade." 
                    />
                    <div className="mt-4">
                        <Button navegacao="/sistema" texto="Explorar o Sistema" />
                    </div>
                </div>
            </section>

            {/* Seção de Pilares / Funcionalidades Principais */}
            <section className="w-full py-24 px-6 md:px-16 bg-[var(--bg-dark)] flex flex-col items-center">
                <div className="max-w-[82rem] text-center mb-16">
                    <h2 className="font-[family-name:var(--fonte-principal)] text-[3.2rem] md:text-[4.2rem] font-bold text-[var(--primary-dark)] underline decoration-[var(--secondary)] decoration-4 underline-offset-8 mb-6 leading-tight">
                        Nossa ideia principal
                    </h2>
                    <p className="font-[family-name:var(--fonte-texto)] text-[1.8rem] md:text-[2.1rem] text-[var(--text-main)] leading-relaxed">
                        Trabalhamos para transformar o transporte sobre trilhos em uma experiência fluida, oferecendo uma plataforma inteligente e gratuita com pilares essenciais:
                    </p>
                </div>

                {/* Grid de Cards Modernos */}
                <div className="w-full max-w-[124rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-[var(--bg-primary)] border-2 border-[var(--primary)] p-8 sm:p-10 rounded-[2.4rem] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="font-[family-name:var(--fonte-principal)] text-[2.2rem] md:text-[2.5rem] font-bold text-[var(--primary-dark)] mb-4 leading-snug">
                                Status em Tempo Real
                            </h3>
                            <p className="font-[family-name:var(--fonte-texto)] text-[1.6rem] md:text-[1.75rem] text-[var(--text-main)] leading-relaxed">
                                Acompanhe atrasos de linhas, velocidade média e estações congestionadas instantaneamente.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[var(--bg-primary)] border-2 border-[var(--primary)] p-8 sm:p-10 rounded-[2.4rem] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="font-[family-name:var(--fonte-principal)] text-[2.2rem] md:text-[2.5rem] font-bold text-[var(--primary-dark)] mb-4 leading-snug">
                                O Melhor Vagão
                            </h3>
                            <p className="font-[family-name:var(--fonte-texto)] text-[1.6rem] md:text-[1.75rem] text-[var(--text-main)] leading-relaxed">
                                Recomendações precisas para embarque, desembarque, baldeação e monitoramento de climatização.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[var(--bg-primary)] border-2 border-[var(--primary)] p-8 sm:p-10 rounded-[2.4rem] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="font-[family-name:var(--fonte-principal)] text-[2.2rem] md:text-[2.5rem] font-bold text-[var(--primary-dark)] mb-4 leading-snug">
                                Rotas Inteligentes
                            </h3>
                            <p className="font-[family-name:var(--fonte-texto)] text-[1.6rem] md:text-[1.75rem] text-[var(--text-main)] leading-relaxed">
                                Escolha entre a rota normal, a opção menos lotada ou o percurso mais rápido para o seu dia.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[var(--bg-primary)] border-2 border-[var(--primary)] p-8 sm:p-10 rounded-[2.4rem] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="font-[family-name:var(--fonte-principal)] text-[2.2rem] md:text-[2.5rem] font-bold text-[var(--primary-dark)] mb-4 leading-snug">
                                Dados Colaborativos
                            </h3>
                            <p className="font-[family-name:var(--fonte-texto)] text-[1.6rem] md:text-[1.75rem] text-[var(--text-main)] leading-relaxed">
                                HeatMap de lotação e reportagens rápidas enviadas em tempo real pela comunidade de passageiros.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Diferenciais de UX */}
            <section className="w-full py-24 px-6 md:px-16 bg-[var(--bg-primary)] flex flex-col items-center">
                <div className="max-w-[82rem] text-center mb-16">
                    <h2 className="font-[family-name:var(--fonte-principal)] text-[3.2rem] md:text-[4.2rem] font-bold text-[var(--primary-dark)] underline decoration-[var(--secondary)] decoration-4 underline-offset-8 mb-6 leading-tight">
                        Por que escolher o FluxFlow?
                    </h2>
                    <p className="font-[family-name:var(--fonte-texto)] text-[1.8rem] md:text-[2.1rem] text-[var(--text-main)] leading-relaxed">
                        Desenvolvido por quem vive o transporte público, com foco em usabilidade e agilidade.
                    </p>
                </div>

                <div className="w-full max-w-[104rem] grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[var(--bg-dark)] border-2 border-[var(--primary-dark)] p-8 sm:p-12 rounded-[2.5rem] flex flex-col gap-4 shadow-sm">
                        <h3 className="font-[family-name:var(--fonte-principal)] text-[2.4rem] md:text-[2.8rem] font-bold text-[var(--primary-dark)]">
                            Foco Exclusivo em Trilhos
                        </h3>
                        <p className="font-[family-name:var(--fonte-texto)] text-[1.7rem] md:text-[1.95rem] text-[var(--text-main)] leading-relaxed">
                            Enquanto aplicativos convencionais dão preferência a ônibus, o FluxFlow é especializado na malha metroferroviária, entendendo a dinâmica real das estações.
                        </p>
                    </div>

                    <div className="bg-[var(--bg-dark)] border-2 border-[var(--primary-dark)] p-8 sm:p-12 rounded-[2.5rem] flex flex-col gap-4 shadow-sm">
                        <h3 className="font-[family-name:var(--fonte-principal)] text-[2.4rem] md:text-[2.8rem] font-bold text-[var(--primary-dark)]">
                            Guias de Estações Complexas
                        </h3>
                        <p className="font-[family-name:var(--fonte-texto)] text-[1.7rem] md:text-[1.95rem] text-[var(--text-main)] leading-relaxed">
                            Orientações de caminhos internos nas maiores estações de transferência de São Paulo (como Sé e Luz) para economizar minutos preciosos do seu dia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Seção Call to Action (CTA) para o FAQ */}
            <section className="w-full py-24 px-6 bg-[var(--primary)] text-[var(--text-title)] border-t-[4px] border-b-[4px] border-[var(--secondary)] flex justify-center items-center">
                <div className="w-full max-w-[88rem] bg-[var(--primary-dark)] text-center p-10 sm:p-14 md:p-16 rounded-[3rem] shadow-xl border-2 border-[var(--secondary)] flex flex-col items-center gap-8">
                    <h2 className="font-[family-name:var(--fonte-principal)] text-[2.8rem] sm:text-[3.6rem] font-bold leading-tight">
                        Ficou com alguma dúvida?
                    </h2>
                    <p className="font-[family-name:var(--fonte-texto)] text-[1.7rem] sm:text-[2rem] font-normal opacity-95 max-w-[62rem] leading-relaxed">
                        Preparamos um FAQ completo com as perguntas mais frequentes sobre o funcionamento do FluxFlow. A sua resposta pode estar lá!
                    </p>
                    <div className="pt-2">
                        <Button navegacao="/faq" texto="Acessar o FAQ" />
                    </div>
                </div>
            </section>
        </main>
    );
}