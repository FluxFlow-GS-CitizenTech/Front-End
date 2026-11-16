import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import imgFundo from "../../img/fundo3.jpg";

export default function Sistema2(){
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
                        titulo="Sistema FluxFlow" 
                        sub="Arquitetura e funcionamento operacional" 
                        descricao="Nesta página detalhamos os pilares tecnológicos do FluxFlow, com foco na precisão dos dados, inteligência de rotas e relatórios em tempo real." 
                    />
                    <Button navegacao="/sistema2" texto="Conheça mais"/>
                </div>
            </section>
                
            <div className="w-full h-auto flex flex-col gap-24">
                {/* Seção I */}
                <section className="flex flex-col gap-20 mt-16 bg-[var(--primary)] text-[var(--bg-dark)] border-4 border-[var(--secondary)] p-20 rounded-[4rem]">
                    <h2 className="text-[length:var(--titulo-main)] font-[family-name:var(--fonte-texto)] font-semibold underline decoration-[var(--secondary)] text-center">
                        I) Eficiência e Impacto na Mobilidade
                    </h2>
                    <ol className="text-[2.6rem] font-[family-name:var(--fonte-texto)] font-bold text-center leading-[4rem] flex flex-col items-center pl-0 list-inside">
                        <li className="text-center mb-2">Redução do tempo de espera;</li>
                        <li className="text-center mb-2">descongestionamento de estações críticas;</li>
                        <li className="text-center mb-2">otimização do fluxo de passageiros;</li>
                        <li className="text-center mb-2">previsibilidade de horários;</li>
                        <li className="text-center mb-2">impacto positivo no transporte urbano.</li>
                    </ol>
                    {/* Imagem comentada conforme solicitação */}
                    {/* <img className="rounded-[2.4rem] p-0" src={imgIa} alt="tabela avaliação" /> */}
                </section>

                {/* Seção II */}
                <section className="flex flex-col gap-20 mt-16 bg-[var(--primary)] text-[var(--bg-dark)] border-4 border-[var(--secondary)] p-20 rounded-[4rem]">
                    <h2 className="text-[length:var(--titulo-main)] font-[family-name:var(--fonte-texto)] font-semibold underline decoration-[var(--secondary)] text-center">
                        II) Confiabilidade dos Dados
                    </h2>
                    <ol className="text-[2.6rem] font-[family-name:var(--fonte-texto)] font-bold text-center leading-[4rem] flex flex-col items-center pl-0 list-inside">
                        <li className="text-center mb-2">IA de validação de relatórios;</li>
                        <li className="text-center mb-2">geolocalização nas estações;</li>
                        <li className="text-center mb-2">cruzamento com dados oficiais;</li>
                        <li className="text-center mb-2">assinatura de relatórios colaborativos;</li>
                        <li className="text-center mb-2">detecção de inconsistências operacionais;</li>
                        <li className="text-center mb-2">validação temporal de eventos;</li>
                        <li className="text-center mb-2">filtragem de duplicidade de alertas.</li>
                    </ol>
                    {/* Imagem comentada conforme solicitação */}
                    {/* <img className="rounded-[2.4rem] p-0" src={imgConfi} alt="tabela avaliação" /> */}
                </section>

                {/* Seção III */}
                <section className="flex flex-col gap-20 mt-16 bg-[var(--primary)] text-[var(--bg-dark)] border-4 border-[var(--secondary)] p-20 rounded-[4rem]">
                    <h2 className="text-[length:var(--titulo-main)] font-[family-name:var(--fonte-texto)] font-semibold underline decoration-[var(--secondary)] text-center">
                        III) Atualização Inteligente
                    </h2>
                    <ol className="text-[2.6rem] font-[family-name:var(--fonte-texto)] font-bold text-center leading-[4rem] flex flex-col items-center pl-0 list-inside">
                        <li className="text-center mb-2">consistência de dados em tempo real;</li>
                        <li className="text-center mb-2">fluxo contínuo com ajuste dinâmico.</li>
                        <li className="text-center mb-2">Até 1 reporte diário validado: relevância máxima.</li>
                        <li className="text-center mb-2">Muitos reportes seguidos na mesma área: balanceamento gradual.</li>
                    </ol>
                    {/* Imagem comentada conforme solicitação */}
                    {/* <img className="rounded-[2.4rem] p-0" src={imgFi} alt="tabela avaliação" /> */}
                </section>

                {/* Seção IV */}
                <section className="flex flex-col gap-20 mt-16 bg-[var(--primary)] text-[var(--bg-dark)] border-4 border-[var(--secondary)] p-20 rounded-[4rem]">
                    <h2 className="text-[length:var(--titulo-main)] font-[family-name:var(--fonte-texto)] font-semibold underline decoration-[var(--secondary)] text-center">
                        IV) Complexidade das Linhas
                    </h2>
                    <ol className="text-[2.6rem] font-[family-name:var(--fonte-texto)] font-bold text-center leading-[4rem] flex flex-col items-center pl-0 list-inside">
                        <li className="text-center mb-2">Nem toda linha ou estação possui o mesmo nível de criticidade ou fluxo.</li>
                    </ol>
                    {/* Imagem comentada conforme solicitação */}
                    {/* <img className="rounded-[2.4rem] p-0" src={imgDa} alt="tabela avaliação" /> */}
                </section>

                {/* Seção V */}
                <section className="flex flex-col gap-20 mt-16 bg-[var(--primary)] text-[var(--bg-dark)] border-4 border-[var(--secondary)] p-20 rounded-[4rem]">
                    <h2 className="text-[length:var(--titulo-main)] font-[family-name:var(--fonte-texto)] font-semibold underline decoration-[var(--secondary)] text-center">
                        V) Alertas e Bônus Inteligentes
                    </h2>
                    <ol className="text-[2.6rem] font-[family-name:var(--fonte-texto)] font-bold text-center leading-[4rem] flex flex-col items-center pl-0 list-inside">
                        <li className="text-center mb-2">O sistema incentiva a colaboração coletiva entre os passageiros.</li>
                    </ol>
                    {/* Imagem comentada conforme solicitação */}
                    {/* <img className="rounded-[2.4rem] p-0" src={imgBi} alt="tabela avaliação" /> */}
                </section>

                {/* Seção VI */}
                <section className="flex flex-col gap-20 mt-16 bg-[var(--primary)] text-[var(--bg-dark)] border-4 border-[var(--secondary)] p-20 rounded-[4rem]">
                    <h2 className="text-[length:var(--titulo-main)] font-[family-name:var(--fonte-texto)] font-semibold underline decoration-[var(--secondary)] text-center">
                        VI) Filtragem Anti-Fraude
                    </h2>
                    <ol className="text-[2.6rem] font-[family-name:var(--fonte-texto)] font-bold text-center leading-[4rem] flex flex-col items-center pl-0 list-inside">
                        <li className="text-center mb-2">Essencial para garantir a precisão dos alertas colaborativos.</li>
                    </ol>
                    {/* Imagem comentada conforme solicitação */}
                    {/* <img className="rounded-[2.4rem] p-0" src={imgPaf} alt="tabela avaliação" /> */}
                </section>

                {/* Seção Cálculo Completo */}
                <section className="flex flex-col gap-20 mt-16 bg-[var(--primary)] text-[var(--bg-dark)] border-4 border-[var(--secondary)] p-20 rounded-[4rem]">
                    <h2 className="text-[length:var(--titulo-main)] font-[family-name:var(--fonte-texto)] font-semibold underline decoration-[var(--secondary)] text-center">
                        Fluxo de Dados Completo
                    </h2>
                    <ol className="text-[2.6rem] font-[family-name:var(--fonte-texto)] font-bold text-center leading-[4rem] flex flex-col items-center pl-0 list-inside">
                        <li className="text-center mb-2">Imagem de fluxo ilustrativo do sistema de rotas e lotação.</li>
                    </ol>
                    {/* Imagem comentada conforme solicitação */}
                    {/* <img className="rounded-[2.4rem] p-0" src={imgFc} alt="tabela avaliação" /> */}
                </section>
            </div>
        </main>
    );
}