// import uplode from "../../img/UploadPage.png";
// import rankig from "../../img/Protótipo Ranking.png";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import imgFundo from "../../img/fundo3.jpg";

export default function Sistema(){
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
                        titulo="Sistema" 
                        sub="Funcionamento prático do FluxFlow" 
                        descricao="Demonstração visual, protótipos de rotas e status em tempo real" 
                    />
                    <Button navegacao="/sistema2" texto="Conheça mais"/>
                </div>
            </section>
            
            <div className="w-full h-auto flex flex-col gap-24">
                {/* Seção Protótipo Status e Rotas */}
                <section className="flex flex-col gap-20 mt-16 bg-[var(--primary)] text-[var(--bg-dark)] border-4 border-[var(--secondary)] p-20 rounded-[4rem]">
                    <h2 className="text-[length:var(--titulo-main)] font-[family-name:var(--fonte-texto)] underline decoration-[var(--secondary)] text-center">
                        Rotas Inteligentes e Status em Tempo Real
                    </h2>
                    <p className="text-[2.1rem] font-[family-name:var(--fonte-texto)] text-center leading-[4rem]">
                        Esta seção apresenta a prototipação inicial de como o usuário visualiza o status das linhas, a velocidade média e as opções de rotas (normal, menos lotada ou mais rápida)[cite: 5].
                    </p>
                    
                    {/* Imagem comentada conforme solicitação */}
                    {/* 
                    <img
                        className="rounded-2xl p-0 max-w-[90%] max-h-[80vh] w-auto h-auto block mx-auto object-contain"
                        src={rankig}
                        alt="Protótipo Rotas e Status"
                    /> 
                    */}
                </section>

                {/* Seção Protótipo HeatMap e Dados Colaborativos */}
                <section className="flex flex-col gap-20 mt-16 bg-[#8BA61D] text-white border-4 border-[var(--secondary)] p-20 rounded-[4rem]">
                    <h2 className="text-[length:var(--titulo-main)] font-[family-name:var(--fonte-texto)] underline decoration-white text-center">
                        HeatMap e Relatórios Colaborativos
                    </h2>
                    <p className="text-[2.1rem] font-[family-name:var(--fonte-texto)] text-center leading-[4rem]">
                        Esta seção apresenta a interface de mapeamento de calor (HeatMap) e o envio de relatórios colaborativos por parte dos passageiros para monitorar a lotação dos vagões[cite: 5, 7].
                    </p>
                    
                    {/* Imagem comentada conforme solicitação */}
                    {/* 
                    <img
                        className="rounded-2xl p-0 max-w-[90%] max-h-[80vh] w-auto h-auto block mx-auto object-contain"
                        src={uplode}
                        alt="Protótipo HeatMap e Colaboração"
                    /> 
                    */}
                </section>

                <div className="flex justify-center pb-12">
                    <Button navegacao="/sistema2" texto="Conheça Mais" />
                </div>
            </div>
        </main>
    );
}