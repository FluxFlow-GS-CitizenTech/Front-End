import Card from "../../Components/Card/Card";
import imgFundo from "../../img/fundo2.jpg";
import Button from "../../Components/Button/Button";

export default function Faq() {
    return (
        <main className="conteudo">
            {/* Seção Principal / Hero */}
            <section 
                className="relative w-full h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat border-b-[5px] border-[var(--secondary-dark)] flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${imgFundo})`
                }}
            >
                <div className="text-center px-4">
                    <Card 
                        titulo="FAQ - FluxFlow" 
                        sub="Tire suas dúvidas sobre o transporte metroferroviário" 
                        descricao="O FAQ do FluxFlow reúne perguntas e respostas rápidas para ajudar os passageiros a entenderem o funcionamento do aplicativo, status em tempo real, lotação de vagões e rotas inteligentes." 
                    />
                    <Button navegacao="/sistema" texto="Conheça mais"/>
                </div>
            </section>
            
            {/* Seção de Perguntas Frequentes */}
            <section className="w-full h-auto py-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-[var(--fonte-texto)] font-bold text-center bg-[var(--secondary)] border-3 border-[var(--primary)] rounded-[3rem] text-[var(--bg-primary)] m-4 sm:m-8 md:m-[4.5rem] p-4 md:p-8 shadow-md">
                    A sua dúvida sobre o metrô pode estar aqui!
                </h1>

                {/* Pergunta 1 */}
                <section className="group relative w-auto flex flex-col justify-center gap-6 m-[1.6rem] md:m-[7rem] p-[1rem] bg-[var(--primary-dark)] rounded-[3rem] shadow-[7px_7px_7px_rgb(82,160,18)] border-3 border-[var(--secondary)]">
                    <h3 className="text-[1.5rem] md:text-[var(--sub-titulo)] font-[var(--fonte-texto)] font-bold text-center text-[var(--bg-primary)] mt-8 leading-[2.5rem] md:leading-normal">
                        1) Como o FluxFlow calcula a lotação em tempo real e o HeatMap?
                    </h3>
                    <div className="relative inline-block text-center pb-4">
                        <button className="bg-transparent text-[var(--bg-primary)] px-[20px] py-[12px] border-3 border-[var(--secondary-dark)] cursor-pointer rounded-[3rem] transition-all duration-1000 hover:bg-[var(--bg-primary)] hover:text-[var(--secondary-dark)]">
                            Ver Resposta
                        </button>
                        <div className="hidden group-hover:block absolute left-0 right-0 mx-auto w-full min-w-[160px] bg-[var(--secondary-dark)] shadow-[0_5px_15px_rgba(0,0,0,0.2)] rounded-[10px] overflow-hidden z-10 p-4">
                            <p className="text-[var(--bg-primary)]">
                                O FluxFlow combina dados históricos operacionais, informações oficiais do sistema metroferroviário e relatórios colaborativos enviados em tempo real pelos próprios passageiros para gerar um mapa de calor preciso da lotação das linhas e estações.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pergunta 2 */}
                <section className="group relative w-auto flex flex-col justify-center gap-6 m-[1.6rem] md:m-[7rem] p-[1rem] bg-[var(--primary-dark)] rounded-[3rem] shadow-[7px_7px_7px_rgb(82,160,18)] border-3 border-[var(--secondary)]">
                    <h3 className="text-[1.5rem] md:text-[var(--sub-titulo)] font-[var(--fonte-texto)] font-bold text-center text-[var(--bg-primary)] mt-8 leading-[2.5rem] md:leading-normal">
                        2) Como funciona a indicação do melhor vagão para embarque?
                    </h3>
                    <div className="relative inline-block text-center pb-4">
                        <button className="bg-transparent text-[var(--bg-primary)] px-[20px] py-[12px] border-3 border-[var(--secondary-dark)] cursor-pointer rounded-[3rem] transition-all duration-1000 hover:bg-[var(--bg-primary)] hover:text-[var(--secondary-dark)]">
                            Ver Resposta
                        </button>
                        <div className="hidden group-hover:block absolute left-0 right-0 mx-auto w-full min-w-[160px] bg-[var(--secondary-dark)] shadow-[0_5px_15px_rgba(0,0,0,0.2)] rounded-[10px] overflow-hidden z-10 p-4">
                            <p className="text-[var(--bg-primary)]">
                                O aplicativo analisa a posição das escadas rolantes, saídas e catracas nas estações de transferência. Com base nisso, indica qual vagão otimiza o seu tempo de desembarque e baldeação, além de monitorar a climatização interna[cite: 5].
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pergunta 3 */}
                <section className="group relative w-auto flex flex-col justify-center gap-6 m-[1.6rem] md:m-[7rem] p-[1rem] bg-[var(--primary-dark)] rounded-[3rem] shadow-[7px_7px_7px_rgb(82,160,18)] border-3 border-[var(--secondary)]">
                    <h3 className="text-[1.5rem] md:text-[var(--sub-titulo)] font-[var(--fonte-texto)] font-bold text-center text-[var(--bg-primary)] mt-8 leading-[2.5rem] md:leading-normal">
                        3) Quais são os tipos de rotas inteligentes oferecidas pelo aplicativo?
                    </h3>
                    <div className="relative inline-block text-center pb-4">
                        <button className="bg-transparent text-[var(--bg-primary)] px-[20px] py-[12px] border-3 border-[var(--secondary-dark)] cursor-pointer rounded-[3rem] transition-all duration-1000 hover:bg-[var(--bg-primary)] hover:text-[var(--secondary-dark)]">
                            Ver Resposta
                        </button>
                        <div className="hidden group-hover:block absolute left-0 right-0 mx-auto w-full min-w-[160px] bg-[var(--secondary-dark)] shadow-[0_5px_15px_rgba(0,0,0,0.2)] rounded-[10px] overflow-hidden z-10 p-4">
                            <p className="text-[var(--bg-primary)]">
                                O FluxFlow oferece três opções principais de rotas adaptadas às suas necessidades: a Rota Normal, a Rota Menos Lotada e a Rota Mais Rápida, considerando falhas e velocidade média das linhas em tempo real[cite: 5].
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pergunta 4 */}
                <section className="group relative w-auto flex flex-col justify-center gap-6 m-[1.6rem] md:m-[7rem] p-[1rem] bg-[var(--primary-dark)] rounded-[3rem] shadow-[7px_7px_7px_rgb(82,160,18)] border-3 border-[var(--secondary)]">
                    <h3 className="text-[1.5rem] md:text-[var(--sub-titulo)] font-[var(--fonte-texto)] font-bold text-center text-[var(--bg-primary)] mt-8 leading-[2.5rem] md:leading-normal">
                        4) Como posso colaborar reportando problemas nas linhas ou estações?
                    </h3>
                    <div className="relative inline-block text-center pb-4">
                        <button className="bg-transparent text-[var(--bg-primary)] px-[20px] py-[12px] border-3 border-[var(--secondary-dark)] cursor-pointer rounded-[3rem] transition-all duration-1000 hover:bg-[var(--bg-primary)] hover:text-[var(--secondary-dark)]">
                            Ver Resposta
                        </button>
                        <div className="hidden group-hover:block absolute left-0 right-0 mx-auto w-full min-w-[160px] bg-[var(--secondary-dark)] shadow-[0_5px_15px_rgba(0,0,0,0.2)] rounded-[10px] overflow-hidden z-10 p-4">
                            <p className="text-[var(--bg-primary)]">
                                Através da rede colaborativa do FluxFlow, qualquer usuário pode enviar avisos rápidos sobre atrasos, lentidão extrema ou lotação atípica em vagões e estações específicas, ajudando a comunidade a se planejar melhor[cite: 7].
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pergunta 5 */}
                <section className="group relative w-auto flex flex-col justify-center gap-6 m-[1.6rem] md:m-[7rem] p-[1rem] bg-[var(--primary-dark)] rounded-[3rem] shadow-[7px_7px_7px_rgb(82,160,18)] border-3 border-[var(--secondary)]">
                    <h3 className="text-[1.5rem] md:text-[var(--sub-titulo)] font-[var(--fonte-texto)] font-bold text-center text-[var(--bg-primary)] mt-8 leading-[2.5rem] md:leading-normal">
                        5) O aplicativo FluxFlow é gratuito para uso?
                    </h3>
                    <div className="relative inline-block text-center pb-4">
                        <button className="bg-transparent text-[var(--bg-primary)] px-[20px] py-[12px] border-3 border-[var(--secondary-dark)] cursor-pointer rounded-[3rem] transition-all duration-1000 hover:bg-[var(--bg-primary)] hover:text-[var(--secondary-dark)]">
                            Ver Resposta
                        </button>
                        <div className="hidden group-hover:block absolute left-0 right-0 mx-auto w-full min-w-[160px] bg-[var(--secondary-dark)] shadow-[0_5px_15px_rgba(0,0,0,0.2)] rounded-[10px] overflow-hidden z-10 p-4">
                            <p className="text-[var(--bg-primary)]">
                                Sim! O FluxFlow é um aplicativo totalmente gratuito[cite: 5], desenvolvido para auxiliar os milhões de passageiros que utilizam o sistema metroferroviário diariamente a terem viagens mais tranquilas e eficientes.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}