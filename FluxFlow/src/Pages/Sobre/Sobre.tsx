import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
{/* import demostracao from "../../img/Demonstração de funcionamento da Plataforma.png";*/}
import imgFundo from "../../img/fundo3.jpg";

export default function Sobre(){
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
                        titulo="Sobre o FluxFlow" 
                        sub="Detalhes do projeto, objetivos e diferenciais de mobilidade" 
                        descricao="Introdução, Objetivos, Justificativa e RoadMap do sistema metroferroviário inteligente." 
                    />
                </div>
            </section>
            
            <div className="w-full h-auto flex flex-col gap-[6rem]">
                
                {/* Seção Introdução */}
                <section className="flex flex-col gap-[5rem] mt-[4rem] bg-[var(--primary)] text-[var(--bg-dark)] border-[4px] border-[var(--secondary)] p-[2rem] min-[426px]:p-[5rem] rounded-[4rem]">
                    <h2 className="text-[2.5rem] min-[426px]:text-[length:var(--titulo-main)] font-[var(--fonte-texto)] font-normal underline decoration-[var(--secondary)] text-center">
                        Introdução
                    </h2>
                    <p className="text-[1.5rem] leading-[2.4rem] min-[426px]:text-[2.1rem] min-[426px]:leading-[4rem] font-[var(--fonte-texto)] text-center">
                        O <strong>FluxFlow</strong> é um aplicativo gratuito[cite: 5] desenvolvido por <em>Felipe Lima, Giovanni Zorzetto e Raphael Gomes</em>[cite: 1] com o propósito de transformar a experiência dos passageiros no transporte sobre trilhos. Nossa solução utiliza dados em tempo real, inteligência de rotas e relatórios colaborativos para combater os principais gargalos enfrentados diariamente por milhões de usuários no sistema metroferroviário[cite: 5, 7, 8].
                    </p>
                </section>

                {/* Seção Objetivos */}
                <section className="flex flex-col gap-[5rem] mt-[4rem] bg-[var(--secondary-dark)] text-[var(--bg-dark)] border-[4px] border-[var(--primary)] p-[2rem] min-[426px]:p-[5rem] rounded-[4rem]">
                    <h2 className="text-[2.5rem] min-[426px]:text-[length:var(--titulo-main)] font-[var(--fonte-texto)] font-normal underline decoration-[var(--secondary)] text-center">
                        Objetivos
                    </h2>
                    <p className="text-[1.5rem] leading-[2.4rem] min-[426px]:text-[2.1rem] min-[426px]:leading-[4rem] font-[var(--fonte-texto)] text-center">
                        Nosso objetivo principal é otimizar o tempo de deslocamento e garantir viagens mais confortáveis e previsíveis. Para isso, oferecemos funcionalidades avançadas como: <strong>Status em Tempo Real</strong> de linhas e velocidades médias[cite: 5], indicação do <strong>Melhor Vagão</strong> para embarque, desembarque e baldeação[cite: 5], <strong>Rotas Alternativas Inteligentes</strong> (normais, menos lotadas ou mais rápidas)[cite: 5], além de diferenciais exclusivos como um <strong>HeatMap de lotação</strong> e guias para otimizar o trajeto dentro de estações complexas e gigantescas[cite: 7].
                    </p>
                </section>

                {/* Seção Justificativa */}
                <section className="flex flex-col gap-[5rem] mt-[4rem] bg-[var(--primary)] text-[var(--bg-dark)] border-[4px] border-[var(--secondary)] p-[2rem] min-[426px]:p-[5rem] rounded-[4rem]">
                    <h2 className="text-[2.5rem] min-[426px]:text-[length:var(--titulo-main)] font-[var(--fonte-texto)] font-normal underline decoration-[var(--secondary)] text-center">
                        Justificativa
                    </h2>
                    <p className="text-[1.5rem] leading-[2.4rem] min-[426px]:text-[2.1rem] min-[426px]:leading-[4rem] font-[var(--fonte-texto)] text-center">
                        Com mais de 4 milhões de passageiros diários no metrô[cite: 8] e estações movimentadas que registram centenas de milhares de embarques (como Sé e Luz)[cite: 8], a superlotação em horários de pico, os atrasos e a falta de orientações claras sobre o posicionamento nos trens geram estresse e perda de tempo. Embora aplicativos tradicionais de mobilidade ofereçam rotas gerais, eles focam primordialmente em ônibus[cite: 7]. O FluxFlow preenche essa lacuna com foco exclusivo no modal sobre trilhos, contando também com uma rede colaborativa onde os próprios usuários reportam alertas de linhas e vagões[cite: 7].
                    </p>
                </section>

                {/* Seção RoadMap */}
                <section className="flex flex-col gap-[5rem] mt-[4rem] bg-[var(--secondary-dark)] text-[var(--bg-dark)] border-[4px] border-[var(--primary)] p-[2rem] min-[426px]:p-[5rem] rounded-[4rem]">
                    <h2 className="text-[2.5rem] min-[426px]:text-[length:var(--titulo-main)] font-[var(--fonte-texto)] font-normal underline decoration-[var(--secondary)] text-center">
                        RoadMap
                    </h2>
                    {/* <img className="p-0 m-0 w-full h-auto block" src={demostracao} alt="Fluxo de funcionamento do FluxFlow" />*/}
                </section>
                
                <div className="flex justify-center my-8">
                    <Button navegacao="/sistema2" texto="Conheça Mais" />
                </div>

            </div>
        </main>
    );
}