    import { useState } from "react";
    import { useForm } from "react-hook-form";
    import { Link, useNavigate } from "react-router-dom";
    import Button from "../../Components/Button/Button";
    import Card from "../../Components/Card/Card";
    import imgFundo from "../../img/fundo2.jpg";

    interface CadastroFormData {
    nmUsuario: string;
    dsEmail: string;
    dsSenha: string;
    }

    export default function Cadastro() {
    const [erroApi, setErroApi] = useState<string | null>(null);
    const [sucesso, setSucesso] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CadastroFormData>();

    const onSubmit = async (data: CadastroFormData) => {
        setErroApi(null);
        setSucesso(false);

        try {
        // Endpoint de cadastro conforme a API FluxFlow no Render
        const response = await fetch("https://api-fluxflow.onrender.com/fluxflow/usuario", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.status === 201 || response.status === 200 || response.status === 204) {
            setSucesso(true);
            setTimeout(() => {
            navigate("/login");
            }, 2000);
        } else if (response.status === 400) {
            setErroApi("Dados inválidos. Verifique se a senha tem pelo menos 8 caracteres e se o e-mail é válido.");
        } else {
            setErroApi("Ocorreu um erro ao realizar o cadastro. Tente novamente mais tarde.");
        }
        } catch (error) {
        console.error("Erro na requisição de cadastro:", error);
        setErroApi("Não foi possível conectar ao servidor. Verifique se a API está rodando.");
        }
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
                titulo="Cadastre-se"
                sub="Faça parte da comunidade FluxFlow"
                descricao="Crie sua conta para acessar recursos exclusivos, relatórios colaborativos e otimizar suas viagens no transporte metroferroviário."
            />
            <div className="mt-2">
                <Button navegacao="/login" texto="Já tem uma conta? Faça login" />
            </div>
            </div>
        </section>

        {/* SEÇÃO PRINCIPAL DO FORMULÁRIO */}
        <section className="w-[95%] max-w-[88rem] -mt-14 z-20 bg-[var(--primary)] rounded-[2.4rem] md:rounded-[3.2rem] p-6 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,51,102,0.25)] flex flex-col items-center gap-8">
            
            <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="w-full bg-[var(--bg-primary)] p-8 sm:p-12 md:p-16 rounded-[2.4rem] border-2 border-[var(--secondary-dark)] shadow-[0_15px_40px_rgba(0,0,0,0.18)] flex flex-col gap-7"
            >
            {/* Cabeçalho do Formulário */}
            <div className="flex flex-col items-center text-center gap-2 border-b border-[var(--bg-dark)] pb-6">
                <h3 className="font-[var(--fonte-principal)] text-[2.4rem] md:text-[3rem] font-bold text-[var(--primary-dark)]">
                Criar Nova Conta
                </h3>
                <p className="font-[var(--fonte-texto)] text-[1.5rem] md:text-[1.7rem] text-gray-600 max-w-[56rem]">
                Preencha os dados abaixo para se cadastrar na plataforma.
                </p>
            </div>

            {/* Alerta de Sucesso */}
            {sucesso && (
                <div
                role="alert"
                className="w-full p-5 bg-emerald-50 border-l-4 border-emerald-600 text-emerald-800 rounded-r-xl flex items-center gap-3 shadow-sm"
                >
                <svg className="w-6 h-6 text-emerald-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[1.5rem] font-bold">
                    Conta cadastrada com sucesso! Redirecionando para o login...
                </span>
                </div>
            )}

            {/* Alerta de Erro da API */}
            {erroApi && (
                <div
                role="alert"
                className="w-full p-5 bg-red-50 border-l-4 border-[var(--secondary)] text-[var(--secondary-dark)] rounded-r-xl flex items-center gap-3 shadow-sm"
                >
                <svg className="w-6 h-6 text-[var(--secondary)] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-[1.5rem] font-bold">
                    {erroApi}
                </span>
                </div>
            )}

            {/* Campo Nome (nmUsuario) */}
            <div className="flex flex-col gap-2">
                <label
                htmlFor="nmUsuario"
                className="font-[var(--fonte-texto)] text-[1.6rem] font-bold text-[var(--text-main)]"
                >
                Nome completo <span className="text-[var(--secondary)]">*</span>
                </label>

                <input
                id="nmUsuario"
                type="text"
                placeholder="Ex: João Silva"
                className={`w-full px-5 py-4 rounded-[1.2rem] bg-white border-2 outline-none transition-all duration-200 font-[var(--fonte-texto)] text-[1.6rem] text-[var(--text-main)] placeholder:text-gray-400 ${
                    errors.nmUsuario
                    ? "border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/15"
                    : "border-gray-300 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/15"
                }`}
                {...register("nmUsuario", {
                    required: "O nome é obrigatório.",
                    maxLength: {
                    value: 400,
                    message: "O nome deve ter no máximo 400 caracteres.",
                    },
                })}
                />

                {errors.nmUsuario && (
                <span className="text-[var(--secondary)] text-[1.35rem] font-semibold flex items-center gap-1.5 mt-0.5">
                    <span>⚠</span> {errors.nmUsuario.message}
                </span>
                )}
            </div>

            {/* Campo E-mail (dsEmail) */}
            <div className="flex flex-col gap-2">
                <label
                htmlFor="dsEmail"
                className="font-[var(--fonte-texto)] text-[1.6rem] font-bold text-[var(--text-main)]"
                >
                E-mail <span className="text-[var(--secondary)]">*</span>
                </label>

                <input
                id="dsEmail"
                type="email"
                placeholder="joao@email.com"
                className={`w-full px-5 py-4 rounded-[1.2rem] bg-white border-2 outline-none transition-all duration-200 font-[var(--fonte-texto)] text-[1.6rem] text-[var(--text-main)] placeholder:text-gray-400 ${
                    errors.dsEmail
                    ? "border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/15"
                    : "border-gray-300 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/15"
                }`}
                {...register("dsEmail", {
                    required: "O e-mail é obrigatório.",
                    maxLength: {
                    value: 600,
                    message: "O e-mail deve ter no máximo 600 caracteres.",
                    },
                    pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Informe um e-mail válido.",
                    },
                })}
                />

                {errors.dsEmail && (
                <span className="text-[var(--secondary)] text-[1.35rem] font-semibold flex items-center gap-1.5 mt-0.5">
                    <span>⚠</span> {errors.dsEmail.message}
                </span>
                )}
            </div>

            {/* Campo Senha (dsSenha) */}
            <div className="flex flex-col gap-2">
                <label
                htmlFor="dsSenha"
                className="font-[var(--fonte-texto)] text-[1.6rem] font-bold text-[var(--text-main)]"
                >
                Senha <span className="text-[var(--secondary)]">*</span>
                </label>

                <input
                id="dsSenha"
                type="password"
                placeholder="Mínimo de 8 caracteres"
                className={`w-full px-5 py-4 rounded-[1.2rem] bg-white border-2 outline-none transition-all duration-200 font-[var(--fonte-texto)] text-[1.6rem] text-[var(--text-main)] placeholder:text-gray-400 ${
                    errors.dsSenha
                    ? "border-[var(--secondary)] focus:ring-4 focus:ring-[var(--secondary)]/15"
                    : "border-gray-300 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/15"
                }`}
                {...register("dsSenha", {
                    required: "A senha é obrigatória.",
                    minLength: {
                    value: 8,
                    message: "A senha deve ter pelo menos 8 caracteres.",
                    },
                    maxLength: {
                    value: 100,
                    message: "A senha deve ter no máximo 100 caracteres.",
                    },
                })}
                />

                {errors.dsSenha && (
                <span className="text-[var(--secondary)] text-[1.35rem] font-semibold flex items-center gap-1.5 mt-0.5">
                    <span>⚠</span> {errors.dsSenha.message}
                </span>
                )}
            </div>

            {/* Botão de Envio */}
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 px-8 mt-2 rounded-[1.2rem] font-[var(--fonte-texto)] text-[1.8rem] font-bold tracking-wide transition-all duration-300 shadow-md ${
                isSubmitting
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-[var(--primary-dark)] text-[var(--bg-primary)] cursor-pointer hover:bg-[var(--secondary-dark)] hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-[var(--secondary)]/30"
                }`}
            >
                {isSubmitting ? "Cadastrando..." : "Cadastrar conta"}
            </button>

            {/* Link auxiliar para Login */}
            <div className="text-center pt-4 border-t border-[var(--bg-dark)]">
                <p className="font-[var(--fonte-texto)] text-[1.5rem] text-gray-600">
                Já possui uma conta?{" "}
                <Link
                    to="/login"
                    className="font-bold text-[var(--primary-dark)] underline hover:text-[var(--secondary-dark)]"
                >
                    Faça login aqui
                </Link>
                </p>
            </div>
            </form>
        </section>
        </main>
    );
    }