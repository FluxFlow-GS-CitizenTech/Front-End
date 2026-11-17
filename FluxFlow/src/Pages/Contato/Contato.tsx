    import { useState, useEffect } from "react";
    import { useForm } from "react-hook-form";
    import Card from "../../Components/Card/Card";
    import Button from "../../Components/Button/Button";
    import imgFundo from "../../img/fundo2.jpg";

    interface FormularioData {
    nome: string;
    email: string;
    mensagem: string;
    }

    export default function Contato() {
    const [enviado, setEnviado] = useState(false);
    const [copiado, setCopiado] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormularioData>();

    useEffect(() => {
        if (enviado) {
        const timer = setTimeout(() => setEnviado(false), 5000);
        return () => clearTimeout(timer);
        }
    }, [enviado]);

    const copiarEmail = () => {
        navigator.clipboard.writeText("challengecfgr.2026@gmail.com");
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2500);
    };

    const onSubmit = (data: FormularioData) => {
        console.log(data);
        setEnviado(true);
        reset();
    };

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
                titulo="Contato"
                sub="Fale com a equipe do FluxFlow!"
                descricao="Acreditamos que uma mobilidade urbana eficiente começa com uma boa comunicação. Se você tem sugestões, encontrou divergências nos status das linhas ou quer saber mais sobre o projeto, entre em contato conosco."
            />
            <div className="mt-2">
                <Button navegacao="/sistema" texto="Conheça mais" />
            </div>
            </div>
        </section>

        {/* SEÇÃO PRINCIPAL DE CONTATO (Largura ampliada para 1200px) */}
        <section className="w-[95%] max-w-[120rem] -mt-14 z-20 bg-[var(--primary)] rounded-[2.4rem] md:rounded-[3.2rem] p-6 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,51,102,0.25)] flex flex-col items-center gap-10 md:gap-12">
            
            {/* CARD DE E-MAIL INTERATIVO (Alinhado com a mesma largura do formulário: 880px) */}
            <div className="w-full max-w-[88rem] flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-12 py-7 bg-[var(--bg-primary)] border-2 border-[var(--secondary)] rounded-[2rem] shadow-md transition-transform duration-300 hover:scale-[1.005]">
            <div className="flex items-center gap-5 text-center sm:text-left min-w-0">
                <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </div>
                <div className="min-w-0">
                <p className="text-[1.3rem] uppercase tracking-wider font-bold text-gray-500">
                    Canal direto por e-mail
                </p>
                <span className="block font-[var(--fonte-texto)] text-[1.6rem] sm:text-[1.9rem] md:text-[2.1rem] font-bold text-[var(--text-main)] break-words sm:whitespace-nowrap">
                    challengecfgr.2026@gmail.com
                </span>
                </div>
            </div>

            <button
                type="button"
                onClick={copiarEmail}
                className={`px-6 py-3.5 rounded-[1rem] text-[1.45rem] font-bold transition-all duration-200 cursor-pointer shrink-0 ${
                copiado
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-[var(--bg-dark)] text-[var(--primary-dark)] hover:bg-[var(--primary-dark)] hover:text-white"
                }`}
            >
                {copiado ? "✓ Copiado!" : "Copiar e-mail"}
            </button>
            </div>

            {/* FORMULÁRIO DE CONTATO (Mesma largura: 880px) */}
            <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="w-full max-w-[88rem] flex flex-col gap-7 bg-[var(--bg-primary)] p-8 sm:p-12 md:p-16 rounded-[2.4rem] border-2 border-[var(--secondary-dark)] shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
            >
            <div className="flex flex-col items-center text-center gap-2 border-b border-[var(--bg-dark)] pb-6">
                <h3 className="font-[var(--fonte-principal)] text-[2.4rem] md:text-[3rem] font-bold text-[var(--primary-dark)]">
                Envie sua mensagem
                </h3>
                <p className="font-[var(--fonte-texto)] text-[1.5rem] md:text-[1.7rem] text-gray-600 max-w-[56rem]">
                Preencha os campos abaixo e fale diretamente com nossa equipe de suporte.
                </p>
            </div>

            {enviado && (
                <div
                role="alert"
                className="w-full p-5 bg-emerald-50 border-l-4 border-emerald-600 text-emerald-800 rounded-r-xl flex items-center gap-3 shadow-sm"
                >
                <svg className="w-6 h-6 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[1.5rem] font-bold">
                    Mensagem enviada com sucesso! Responderemos em breve.
                </span>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Campo Nome */}
                <div className="flex flex-col gap-2">
                <label
                    htmlFor="nome"
                    className="font-[var(--fonte-texto)] text-[1.6rem] font-bold text-[var(--text-main)]"
                >
                    Nome completo <span className="text-[var(--secondary)]">*</span>
                </label>

                <input
                    id="nome"
                    type="text"
                    placeholder="Ex: Felipe Lima"
                    className={`w-full px-5 py-4 rounded-[1.2rem] bg-white border-2 outline-none transition-all duration-200 font-[var(--fonte-texto)] text-[1.6rem] text-[var(--text-main)] placeholder:text-gray-400 ${
                    errors.nome
                        ? "border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/15"
                        : "border-gray-300 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/15"
                    }`}
                    {...register("nome", {
                    required: "O nome é obrigatório.",
                    minLength: {
                        value: 3,
                        message: "O nome deve ter pelo menos 3 caracteres.",
                    },
                    })}
                />

                {errors.nome && (
                    <span className="text-[var(--secondary)] text-[1.35rem] font-semibold flex items-center gap-1.5 mt-0.5">
                    <span>⚠</span> {errors.nome.message}
                    </span>
                )}
                </div>

                {/* Campo E-mail */}
                <div className="flex flex-col gap-2">
                <label
                    htmlFor="email"
                    className="font-[var(--fonte-texto)] text-[1.6rem] font-bold text-[var(--text-main)]"
                >
                    E-mail <span className="text-[var(--secondary)]">*</span>
                </label>

                <input
                    id="email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    className={`w-full px-5 py-4 rounded-[1.2rem] bg-white border-2 outline-none transition-all duration-200 font-[var(--fonte-texto)] text-[1.6rem] text-[var(--text-main)] placeholder:text-gray-400 ${
                    errors.email
                        ? "border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/15"
                        : "border-gray-300 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/15"
                    }`}
                    {...register("email", {
                    required: "O e-mail é obrigatório.",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Digite um e-mail válido.",
                    },
                    })}
                />

                {errors.email && (
                    <span className="text-[var(--secondary)] text-[1.35rem] font-semibold flex items-center gap-1.5 mt-0.5">
                    <span>⚠</span> {errors.email.message}
                    </span>
                )}
                </div>
            </div>

            {/* Campo Mensagem */}
            <div className="flex flex-col gap-2">
                <label
                htmlFor="mensagem"
                className="font-[var(--fonte-texto)] text-[1.6rem] font-bold text-[var(--text-main)]"
                >
                Mensagem <span className="text-[var(--secondary)]">*</span>
                </label>

                <textarea
                id="mensagem"
                placeholder="Descreva sua dúvida, sugestão ou relato sobre as linhas..."
                className={`w-full min-h-[160px] px-5 py-4 rounded-[1.2rem] bg-white border-2 outline-none resize-y transition-all duration-200 font-[var(--fonte-texto)] text-[1.6rem] text-[var(--text-main)] placeholder:text-gray-400 ${
                    errors.mensagem
                    ? "border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/15"
                    : "border-gray-300 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/15"
                }`}
                {...register("mensagem", {
                    required: "A mensagem é obrigatória.",
                    minLength: {
                    value: 10,
                    message: "A mensagem deve ter pelo menos 10 caracteres.",
                    },
                })}
                />

                {errors.mensagem && (
                <span className="text-[var(--secondary)] text-[1.35rem] font-semibold flex items-center gap-1.5 mt-0.5">
                    <span>⚠</span> {errors.mensagem.message}
                </span>
                )}
            </div>

            <button
                type="submit"
                className="w-full py-5 px-8 mt-2 rounded-[1.2rem] bg-[var(--primary-dark)] text-[var(--bg-primary)] font-[var(--fonte-texto)] text-[1.8rem] font-bold tracking-wide cursor-pointer shadow-md transition-all duration-300 hover:bg-[var(--secondary-dark)] hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-[var(--secondary)]/30"
            >
                Enviar mensagem
            </button>
            </form>
        </section>
        </main>
    );
    }  