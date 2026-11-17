    import { useState } from "react";
    import Card from "../../Components/Card/Card";
    import Button from "../../Components/Button/Button";
    import imgFundo from "../../img/fundo2.jpg";

    interface FaqItem {
    id: number;
    pergunta: string;
    resposta: string;
    }

    const faqs: FaqItem[] = [
    {
        id: 1,
        pergunta: "Como o FluxFlow calcula a lotação em tempo real e o HeatMap?",
        resposta:
        "O FluxFlow combina dados históricos operacionais, informações oficiais do sistema metroferroviário e relatórios colaborativos enviados em tempo real pelos próprios passageiros para gerar um mapa de calor preciso da lotação das linhas e estações.",
    },
    {
        id: 2,
        pergunta: "Como funciona a indicação do melhor vagão para embarque?",
        resposta:
        "O aplicativo analisa a posição das escadas rolantes, saídas e catracas nas estações de transferência. Com base nisso, indica qual vagão otimiza o seu tempo de desembarque e baldeação, além de monitorar a climatização interna.",
    },
    {
        id: 3,
        pergunta: "Quais são os tipos de rotas inteligentes oferecidas pelo aplicativo?",
        resposta:
        "O FluxFlow oferece três opções principais de rotas adaptadas às suas necessidades: a Rota Normal, a Rota Menos Lotada e a Rota Mais Rápida, considerando falhas e velocidade média das linhas em tempo real.",
    },
    {
        id: 4,
        pergunta: "Como posso colaborar reportando problemas nas linhas ou estações?",
        resposta:
        "Através da rede colaborativa do FluxFlow, qualquer usuário pode enviar avisos rápidos sobre atrasos, lentidão extrema ou lotação atípica em vagões e estações específicas, ajudando a comunidade a se planejar melhor.",
    },
    {
        id: 5,
        pergunta: "O aplicativo FluxFlow é gratuito para uso?",
        resposta:
        "Sim! O FluxFlow é um aplicativo totalmente gratuito, desenvolvido para auxiliar os milhões de passageiros que utilizam o sistema metroferroviário diariamente a terem viagens mais tranquilas e eficientes.",
    },
    ];

    export default function Faq() {
    // Controla qual item do FAQ está aberto (-1 se nenhum)
    const [ativoIndex, setAtivoIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setAtivoIndex(ativoIndex === index ? null : index);
    };

    return (
        <main className="conteudo flex flex-col items-center pb-24">
        {/* SEÇÃO PRINCIPAL / HERO */}
        <section 
            className="relative w-full min-h-[75vh] md:min-h-[80vh] bg-cover bg-center bg-no-repeat border-b-[5px] border-[var(--secondary-dark)] flex items-center justify-center px-6 py-20"
            style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 26, 51, 0.78), rgba(0, 0, 0, 0.72)), url(${imgFundo})`
            }}
        >
            <div className="max-w-[96rem] w-full flex flex-col items-center text-center gap-8 z-10">
            <Card 
                titulo="FAQ - FluxFlow" 
                sub="Tire suas dúvidas sobre o transporte metroferroviário" 
                descricao="O FAQ do FluxFlow reúne perguntas e respostas rápidas para ajudar os passageiros a entenderem o funcionamento do aplicativo, status em tempo real, lotação de vagões e rotas inteligentes." 
            />
            <div className="mt-2">
                <Button navegacao="/sistema" texto="Conheça mais"/>
            </div>
            </div>
        </section>
        
        {/* SEÇÃO DE PERGUNTAS FREQUENTES */}
        <section className="w-full max-w-[100rem] px-4 sm:px-6 py-12 flex flex-col items-center gap-8">
            
            {/* Título Principal de Destaque */}
            <h1 className="w-full text-2xl sm:text-3xl md:text-4xl font-[var(--fonte-principal)] font-bold text-center bg-[var(--secondary)] border-2 border-[var(--primary)] rounded-[2.4rem] text-[var(--bg-primary)] p-6 sm:p-8 shadow-md">
            A sua dúvida sobre o metrô pode estar aqui!
            </h1>

            {/* Lista de FAQs */}
            <div className="w-full flex flex-col gap-6 mt-4">
            {faqs.map((faq, index) => {
                const estaAberto = ativoIndex === index;

                return (
                <div 
                    key={faq.id}
                    className="w-full bg-[var(--primary-dark)] rounded-[2.4rem] border-2 border-[var(--secondary)] shadow-[0_10px_25px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300"
                >
                    {/* Botão de Acionamento da Pergunta */}
                    <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left p-6 sm:p-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] gap-4"
                    aria-expanded={estaAberto}
                    >
                    <h3 className="text-[1.7rem] sm:text-[1.9rem] md:text-[2.1rem] font-[var(--fonte-texto)] font-bold text-[var(--bg-primary)] leading-snug">
                        {faq.id}) {faq.pergunta}
                    </h3>

                    {/* Ícone de Seta Animado */}
                    <div className={`w-10 h-10 rounded-full bg-[var(--bg-primary)]/10 flex items-center justify-center text-[var(--bg-primary)] shrink-0 transition-transform duration-300 ${estaAberto ? "rotate-180 bg-[var(--secondary)] text-white" : ""}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    </button>

                    {/* Conteúdo da Resposta (Acordeon Suave) */}
                    <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden px-6 sm:px-8 ${
                        estaAberto ? "max-h-[30rem] pb-8 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                    >
                    <div className="pt-4 border-t border-[var(--bg-primary)]/20">
                        <p className="font-[var(--fonte-texto)] text-[1.5rem] sm:text-[1.65rem] text-[var(--bg-primary)]/90 leading-relaxed">
                        {faq.resposta}
                        </p>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>

        </section>
        </main>
    );
    }