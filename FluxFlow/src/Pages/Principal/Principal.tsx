import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Usuario {
    idUsuario?: number;
    nmUsuario?: string;
    dsEmail?: string;
    dtCadastro?: string;
    stUsuario?: string;
}

interface Linha {
    idLinha?: number;
    dsCodigo?: string;
    nmLinha?: string;
    dsCor?: string;
    tpOperador?: string;
    stLinha?: string;
}

interface Estacao {
    idEstacao?: number;
    nmEstacao?: string;
    stEstacao?: string;
}

interface StatusOperacional {
    idOcorrencia?: number;
    tpOcorrencia?: string;
    dsStatus?: string;
    dsSituacao?: string;
    dtInicio?: string;
    dsOrigem?: string;
}

interface PrevisaoLotacao {
    idPrevisao?: number;
    dsClassificacao?: string;
    dsModeloUtilizado?: string;
    dtPrevisao?: string;
    vlHoraReferencia?: number;
    vlIndiceLotacao?: number;
}

// Funções auxiliares para manipulação de cookies
const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
};

const deleteCookie = (name: string) => {
    document.cookie = `${name}=; path=/; max-age=0;`;
};

export function Principal() {
    const navigate = useNavigate();

    // Estados de Usuários
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [buscaIdUsuario, setBuscaIdUsuario] = useState('');
    const [usuarioBuscado, setUsuarioBuscado] = useState<Usuario | null>(null);
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [editNome, setEditNome] = useState('');
    const [editEmail, setEditEmail] = useState('');

    // Estados de Linhas
    const [linhas, setLinhas] = useState<Linha[]>([]);
    const [buscaIdLinha, setBuscaIdLinha] = useState('');
    const [linhaBuscada, setLinhaBuscada] = useState<Linha | null>(null);

    // Estados de Estações
    const [estacoes, setEstacoes] = useState<Estacao[]>([]);
    const [buscaIdEstacao, setBuscaIdEstacao] = useState('');
    const [estacaoBuscada, setEstacaoBuscada] = useState<Estacao | null>(null);
    const [linhasDaEstacao, setLinhasDaEstacao] = useState<any[]>([]);

    // Estados de Status Operacional
    const [ocorrencias, setOcorrencias] = useState<StatusOperacional[]>([]);

    // Estados de Previsões de Lotação
    const [previsoes, setPrevisoes] = useState<PrevisaoLotacao[]>([]);
    const [formPrevisao, setFormPrevisao] = useState({ dataPrevisao: '', hora: '', idEstacao: '', idLinha: '' });
    const [resultadoPrevisaoDemanda, setResultadoPrevisaoDemanda] = useState<any>(null);

    // Estados de Planejamento de Rotas
    const [rotaForm, setRotaForm] = useState({ origem: '', destino: '', criterio: 'BALDEACOES', data: '', hora: '' });
    const [resultadoRota, setResultadoRota] = useState<any>(null);

    const [mensagem, setMensagem] = useState<{ tipo: 'sucesso' | 'erro'; texto: string } | null>(null);
    const [carregando, setCarregando] = useState(false);

    // URL base oficial da API FluxFlow no Render
    const API_URL = "https://api-fluxflow.onrender.com/fluxflow";

    const getHeaders = () => {
        const token = getCookie('token') || localStorage.getItem('token');
        return {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        };
    };

    // Carregamento inicial de dados essenciais
    const carregarDadosIniciais = async () => {
        setCarregando(true);
        try {
            const headers = getHeaders();
            const [resUser, resLinhas, resEstacoes, resStatus, resPrevisoes] = await Promise.all([
                fetch(`${API_URL}/usuario`, { headers }),
                fetch(`${API_URL}/linha`, { headers }),
                fetch(`${API_URL}/estacoes`, { headers }),
                fetch(`${API_URL}/status-operacional`, { headers }),
                fetch(`${API_URL}/previsoes-lotacao`, { headers })
            ]);

            if (resUser.ok) setUsuarios(await resUser.json());
            if (resLinhas.ok) setLinhas(await resLinhas.json());
            if (resEstacoes.ok) setEstacoes(await resEstacoes.json());
            if (resStatus.ok) setOcorrencias(await resStatus.json());
            if (resPrevisoes.ok) {
                const dadosPrevisoes = await resPrevisoes.json();
                // Limita a exibição inicial para evitar travar a tela (conforme nota da doc sobre volume de dados)
                setPrevisoes(dadosPrevisoes.slice(0, 50)); 
            }
        } catch (error) {
            setMensagem({ tipo: 'erro', texto: 'Erro ao conectar com a API FluxFlow.' });
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        const token = getCookie('token') || localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        carregarDadosIniciais();
    }, [navigate]);

    // Logout
    const handleLogout = async () => {
        try {
            await fetch(`${API_URL}/usuario/logout`, { method: 'POST', headers: getHeaders() });
        } catch (e) {
            console.error(e);
        } finally {
            deleteCookie('token');
            localStorage.removeItem('token');
            navigate('/login');
        }
    };

    // CRUD Usuários
    const handleBuscarUsuarioPorId = async () => {
        if (!buscaIdUsuario) return;
        try {
            const res = await fetch(`${API_URL}/usuario/${buscaIdUsuario}`, { headers: getHeaders() });
            if (res.ok) setUsuarioBuscado(await res.json());
            else setUsuarioBuscado(null);
        } catch (e) { console.error(e); }
    };

    const handleAtualizarUsuario = async (id: number) => {
        try {
            const res = await fetch(`${API_URL}/usuario/${id}`, {
                method: 'PUT',
                headers: getHeaders(),
                body: JSON.stringify({ nmUsuario: editNome, dsEmail: editEmail })
            });
            if (res.ok || res.status === 204) {
                setMensagem({ tipo: 'sucesso', texto: 'Usuário atualizado com sucesso!' });
                setEditandoId(null);
                carregarDadosIniciais();
            }
        } catch (e) { setMensagem({ tipo: 'erro', texto: 'Erro ao atualizar usuário.' }); }
    };

    const handleExcluirUsuario = async (id?: number) => {
        if (!id || !confirm('Deseja excluir esta conta?')) return;
        try {
            const res = await fetch(`${API_URL}/usuario/${id}`, { method: 'DELETE', headers: getHeaders() });
            if (res.ok || res.status === 204) {
                setMensagem({ tipo: 'sucesso', texto: 'Conta excluída com sucesso!' });
                setUsuarioBuscado(null);
                carregarDadosIniciais();
            }
        } catch (e) { setMensagem({ tipo: 'erro', texto: 'Erro ao excluir conta.' }); }
    };

    // Consultar Linha por ID
    const handleBuscarLinhaPorId = async () => {
        if (!buscaIdLinha) return;
        try {
            const res = await fetch(`${API_URL}/linha/${buscaIdLinha}`, { headers: getHeaders() });
            if (res.ok) setLinhaBuscada(await res.json());
            else setLinhaBuscada(null);
        } catch (e) { console.error(e); }
    };

    // Consultar Estação por ID e suas Linhas
    const handleBuscarEstacaoPorId = async () => {
        if (!buscaIdEstacao) return;
        try {
            const [resEst, resLinhasEst] = await Promise.all([
                fetch(`${API_URL}/estacoes/${buscaIdEstacao}`, { headers: getHeaders() }),
                fetch(`${API_URL}/estacoes/${buscaIdEstacao}/linhas`, { headers: getHeaders() })
            ]);
            if (resEst.ok) setEstacaoBuscada(await resEst.json());
            else setEstacaoBuscada(null);

            if (resLinhasEst.ok) setLinhasDaEstacao(await resLinhasEst.json());
            else setLinhasDaEstacao([]);
        } catch (e) { console.error(e); }
    };

    // Calcular Previsão sob Demanda (POST /previsoes-lotacao)
    const handleCalcularPrevisao = async (e: React.FormEvent) => {
        e.preventDefault();
        setCarregando(true);
        setResultadoPrevisaoDemanda(null);
        try {
            const url = `${API_URL}/previsoes-lotacao?dataPrevisao=${formPrevisao.dataPrevisao}&hora=${formPrevisao.hora}&idEstacao=${formPrevisao.idEstacao}&idLinha=${formPrevisao.idLinha}`;
            const res = await fetch(url, { method: 'POST', headers: getHeaders() });
            if (res.ok) {
                const data = await res.json();
                setResultadoPrevisaoDemanda(data);
                setMensagem({ tipo: 'sucesso', texto: 'Previsão calculada com sucesso!' });
            } else {
                setMensagem({ tipo: 'erro', texto: 'Erro ao calcular previsão. Verifique os parâmetros.' });
            }
        } catch (e) {
            setMensagem({ tipo: 'erro', texto: 'Erro de conexão no cálculo de previsão.' });
        } finally {
            setCarregando(false);
        }
    };

    // Calcular Rota (GET /rotas)
    const handleCalcularRota = async (e: React.FormEvent) => {
        e.preventDefault();
        setCarregando(true);
        setResultadoRota(null);
        try {
            let url = `${API_URL}/rotas?origem=${rotaForm.origem}&destino=${rotaForm.destino}&criterio=${rotaForm.criterio}`;
            if (rotaForm.criterio === 'LOTACAO') {
                if (rotaForm.data) url += `&data=${rotaForm.data}`;
                if (rotaForm.hora !== '') url += `&hora=${rotaForm.hora}`;
            }

            if (rotaForm.criterio === 'LOTACAO') {
                setMensagem({ tipo: 'sucesso', texto: 'Processando rota por menor lotação... Isso pode levar de 3 a 5 minutos conforme documentação técnica.' });
            }

            const res = await fetch(url, { headers: getHeaders() });
            if (res.ok) {
                const data = await res.json();
                setResultadoRota(data);
                setMensagem({ tipo: 'sucesso', texto: 'Rota calculada com sucesso!' });
            } else {
                setMensagem({ tipo: 'erro', texto: 'Erro ao calcular rota. Verifique os IDs informados.' });
            }
        } catch (e) {
            setMensagem({ tipo: 'erro', texto: 'Erro de conexão ao calcular rota.' });
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] font-[var(--fonte-texto)] text-[var(--text-main)] pb-24">
            
            {/* TOP BAR / HEADER EXCLUSIVO */}
            <header className="bg-[var(--primary-dark)] border-b-[4px] border-[var(--secondary)] px-8 sm:px-16 py-8 shadow-md flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="w-5 h-5 bg-[var(--secondary)] rounded-full animate-pulse" />
                    <div>
                        <h1 className="font-[var(--fonte-principal)] text-[3rem] font-bold tracking-tight text-[var(--bg-primary)]">
                            Flux<span className="text-[var(--secondary)]">Flow</span>
                        </h1>
                        <p className="text-[1.6rem] text-gray-200 font-semibold tracking-wider uppercase">Painel Operacional Central & Integração Total</p>
                    </div>
                </div>
                <button 
                    onClick={handleLogout} 
                    className="px-6 py-3 bg-red-50 text-red-600 border-2 border-red-200 rounded-[1.4rem] font-bold text-[1.6rem] hover:bg-red-100 transition-all cursor-pointer shadow-sm"
                >
                    Encerrar Sessão
                </button>
            </header>

            <main className="max-w-[124rem] mx-auto px-6 sm:px-10 mt-12 space-y-12">

                {/* Feedback Toast */}
                {mensagem && (
                    <div className={`p-6 rounded-[1.6rem] text-[1.6rem] font-bold flex justify-between items-center shadow-xl border-2 ${mensagem.tipo === 'erro' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
                        <span>{carregando ? "Processando requisição na API..." : mensagem.texto}</span>
                        <button onClick={() => setMensagem(null)} className="font-bold ml-4 cursor-pointer text-[2rem]">✕</button>
                    </div>
                )}

                {/* BLOCO 1: PLANEJAMENTO DE ROTAS (GET /rotas) */}
                <section className="bg-white p-8 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-8">
                    <div className="border-b border-gray-200 pb-5">
                        <h2 className="font-[var(--fonte-principal)] text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                            🗺️ Planejamento de Rotas
                        </h2>
                        <p className="text-[1.5rem] text-gray-600 mt-1">Calcule o melhor trajeto entre estações por Baldeações, Menor Número de Estações, Tempo ou Lotação[cite: 13].</p>
                    </div>

                    <form onSubmit={handleCalcularRota} className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.5rem] font-bold">ID Origem</label>
                            <input type="number" required placeholder="Ex: 2" value={rotaForm.origem} onChange={e => setRotaForm({...rotaForm, origem: e.target.value})} className="p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.6rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.5rem] font-bold">ID Destino</label>
                            <input type="number" required placeholder="Ex: 35" value={rotaForm.destino} onChange={e => setRotaForm({...rotaForm, destino: e.target.value})} className="p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.6rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.5rem] font-bold">Critério</label>
                            <select value={rotaForm.criterio} onChange={e => setRotaForm({...rotaForm, criterio: e.target.value})} className="p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.6rem]">
                                <option value="BALDEACOES">BALDEACOES[cite: 13]</option>
                                <option value="ESTACOES">ESTACOES[cite: 13]</option>
                                <option value="TEMPO">TEMPO[cite: 13]</option>
                                <option value="LOTACAO">LOTACAO (Demorado)</option>
                            </select>
                        </div>
                        {rotaForm.criterio === 'LOTACAO' && (
                            <>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[1.5rem] font-bold">Data (AAAA-MM-DD)</label>
                                    <input type="date" value={rotaForm.data} onChange={e => setRotaForm({...rotaForm, data: e.target.value})} className="p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.6rem]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[1.5rem] font-bold">Hora (0-23)</label>
                                    <input type="number" min="0" max="23" value={rotaForm.hora} onChange={e => setRotaForm({...rotaForm, hora: e.target.value})} className="p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.6rem]" />
                                </div>
                            </>
                        )}
                        <div className="md:col-span-5 flex justify-end">
                            <button type="submit" disabled={carregando} className="px-8 py-4 bg-[var(--primary-dark)] text-white text-[1.6rem] font-bold rounded-[1.2rem] cursor-pointer hover:opacity-90">
                                {carregando ? "Calculando Rota..." : "Calcular Rota"}
                            </button>
                        </div>
                    </form>

                    {resultadoRota && (
                        <div className="mt-6 p-6 bg-slate-50 border-2 border-gray-200 rounded-[1.8rem] space-y-4">
                            <h3 className="text-[1.8rem] font-bold text-[var(--primary-dark)]">Resultado do Trajeto:</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[1.5rem]">
                                <p><strong>Total Trechos:</strong> {resultadoRota.totalTrechos}</p>
                                <p><strong>Total Estações:</strong> {resultadoRota.totalEstações || resultadoRota.totalEstacoes}</p>
                                <p><strong>Baldeações:</strong> {resultadoRota.totalBaldeacoes}</p>
                                <p><strong>Tempo Total:</strong> {resultadoRota.tempoTotal} min</p>
                            </div>
                            {resultadoRota.classificacaoLotacao && (
                                <p className="text-[1.5rem]"><strong>Classificação Lotação:</strong> <span className="text-emerald-600 font-bold">{resultadoRota.classificacaoLotacao}</span></p>
                            )}
                        </div>
                    )}
                </section>

                {/* BLOCO 2: LINHAS (GET /linha) */}
                <section className="bg-white p-8 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-8">
                    <div className="border-b border-gray-200 pb-5 flex justify-between items-center">
                        <div>
                            <h2 className="font-[var(--fonte-principal)] text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                                🚇 Gerenciamento de Linhas
                            </h2>
                            <p className="text-[1.5rem] text-gray-600 mt-1">Consulta e listagem oficial de linhas do Metrô e CPTM[cite: 5, 10].</p>
                        </div>
                        <div className="flex gap-2">
                            <input type="number" placeholder="ID Linha" value={buscaIdLinha} onChange={e => setBuscaIdLinha(e.target.value)} className="p-3 bg-slate-50 border border-gray-300 rounded-xl text-[1.5rem] w-32" />
                            <button onClick={handleBuscarLinhaPorId} className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[1.5rem] font-bold cursor-pointer">Buscar</button>
                        </div>
                    </div>

                    {linhaBuscada && (
                        <div className="p-4 bg-slate-50 border rounded-xl text-[1.6rem]">
                            <p><strong>ID:</strong> {linhaBuscada.idLinha} | <strong>Código:</strong> {linhaBuscada.dsCodigo} | <strong>Nome:</strong> {linhaBuscada.nmLinha} | <strong>Operador:</strong> {linhaBuscada.tpOperador}</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {linhas.map((l) => (
                            <div key={l.idLinha || l.dsCodigo} className="p-5 rounded-[1.6rem] bg-slate-50 border border-gray-200 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: l.dsCor || '#005CA9' }} />
                                        <span className="font-bold text-[1.8rem] text-[var(--primary-dark)]">{l.nmLinha}</span>
                                    </div>
                                    <p className="text-[1.4rem] text-gray-600">Operador: <span className="font-semibold">{l.tpOperador}</span></p>
                                    <p className="text-[1.4rem] text-gray-600">Status: <span className="font-semibold">{l.stLinha}</span>[cite: 10]</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BLOCO 3: ESTAÇÕES E VÍNCULOS (GET /estacoes) */}
                <section className="bg-white p-8 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-8">
                    <div className="border-b border-gray-200 pb-5 flex justify-between items-center">
                        <div>
                            <h2 className="font-[var(--fonte-principal)] text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                                🚉 Consulta de Estações e Linhas
                            </h2>
                            <p className="text-[1.5rem] text-gray-600 mt-1">Listagem de estações e verificação de linhas associadas[cite: 10].</p>
                        </div>
                        <div className="flex gap-2">
                            <input type="number" placeholder="ID Estação" value={buscaIdEstacao} onChange={e => setBuscaIdEstacao(e.target.value)} className="p-3 bg-slate-50 border border-gray-300 rounded-xl text-[1.5rem] w-32" />
                            <button onClick={handleBuscarEstacaoPorId} className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[1.5rem] font-bold cursor-pointer">Consultar</button>
                        </div>
                    </div>

                    {estacaoBuscada && (
                        <div className="p-4 bg-slate-50 border rounded-xl text-[1.6rem] space-y-2">
                            <p><strong>Estação:</strong> {estacaoBuscada.nmEstacao} (ID: {estacaoBuscada.idEstacao})[cite: 10]</p>
                            <p><strong>Linhas Associadas (/linhas):</strong> {JSON.stringify(linhasDaEstacao)}[cite: 10]</p>
                        </div>
                    )}

                    <div className="overflow-x-auto max-h-80 overflow-y-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 text-gray-500 text-[1.5rem] font-bold uppercase tracking-wider">
                                    <th className="py-4 px-6">ID</th>
                                    <th className="py-4 px-6">Nome da Estação</th>
                                    <th className="py-4 px-6">Situação</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-[1.7rem]">
                                {estacoes.map((e) => (
                                    <tr key={e.idEstacao} className="hover:bg-slate-50">
                                        <td className="py-4 px-6 font-bold">{e.idEstacao}</td>
                                        <td className="py-4 px-6 font-bold text-[var(--primary-dark)]">{e.nmEstacao}</td>
                                        <td className="py-4 px-6">
                                            <span className="px-4 py-1.5 rounded-full text-[1.4rem] font-bold bg-emerald-50 text-emerald-700">
                                                {e.stEstacao}[cite: 10]
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* BLOCO 4: STATUS OPERACIONAL (GET /status-operacional) */}
                <section className="bg-white p-8 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-8">
                    <div className="border-b border-gray-200 pb-5">
                        <h2 className="font-[var(--fonte-principal)] text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                            ⚠️ Status Operacional (Ocorrências)
                        </h2>
                        <p className="text-[1.5rem] text-gray-600 mt-1">Monitoramento de atrasos, interrupções e manutenções ativas.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ocorrencias.map((oc) => (
                            <div key={oc.idOcorrencia || Math.random()} className="p-5 rounded-[1.6rem] bg-slate-50 border border-gray-200 space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-[1.6rem] text-rose-600">{oc.tpOcorrencia}[cite: 11]</span>
                                    <span className="text-[1.3rem] font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800">{oc.dsSituacao}[cite: 11]</span>
                                </div>
                                <p className="text-[1.5rem] text-gray-800"><strong>Status:</strong> {oc.dsStatus}[cite: 11]</p>
                                <p className="text-[1.3rem] text-gray-500">Início: {oc.dtInicio} | Origem: {oc.dsOrigem}[cite: 11]</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BLOCO 5: PREVISÕES DE LOTAÇÃO & GERAÇÃO SOB DEMANDA (POST /previsoes-lotacao) */}
                <section className="bg-white p-8 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-8">
                    <div className="border-b border-gray-200 pb-5">
                        <h2 className="font-[var(--fonte-principal)] text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                            📊 Previsões de Lotação & Geração Sob Demanda
                        </h2>
                        <p className="text-[1.5rem] text-gray-600 mt-1">Consulte previsões persistidas ou calcule novas estimativas em tempo real.</p>
                    </div>

                    <form onSubmit={handleCalcularPrevisao} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-[1.8rem] border">
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">Data (AAAA-MM-DD)</label>
                            <input type="date" required value={formPrevisao.dataPrevisao} onChange={e => setFormPrevisao({...formPrevisao, dataPrevisao: e.target.value})} className="p-3 bg-white border rounded-xl text-[1.5rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">Hora (0-23)</label>
                            <input type="number" min="0" max="23" required value={formPrevisao.hora} onChange={e => setFormPrevisao({...formPrevisao, hora: e.target.value})} className="p-3 bg-white border rounded-xl text-[1.5rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">ID Estação</label>
                            <input type="number" required value={formPrevisao.idEstacao} onChange={e => setFormPrevisao({...formPrevisao, idEstacao: e.target.value})} className="p-3 bg-white border rounded-xl text-[1.5rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">ID Linha</label>
                            <input type="number" required value={formPrevisao.idLinha} onChange={e => setFormPrevisao({...formPrevisao, idLinha: e.target.value})} className="p-3 bg-white border rounded-xl text-[1.5rem]" />
                        </div>
                        <div className="md:col-span-4 flex justify-end">
                            <button type="submit" className="px-6 py-3 bg-[var(--primary-dark)] text-white text-[1.5rem] font-bold rounded-xl cursor-pointer">
                                Calcular Previsão Sob Demanda[cite: 11, 12]
                            </button>
                        </div>
                    </form>

                    {resultadoPrevisaoDemanda && (
                        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-[1.6rem] text-[1.6rem] space-y-2">
                            <p className="font-bold text-emerald-800">Previsão Calculada com Sucesso:</p>
                            <p><strong>Classificação:</strong> {resultadoPrevisaoDemanda.dsClassificacao}[cite: 12]</p>
                            <p><strong>Índice de Lotação (0-100):</strong> {resultadoPrevisaoDemanda.vlIndiceLotacao}[cite: 12]</p>
                            <p><strong>Modelo Utilizado:</strong> {resultadoPrevisaoDemanda.dsModeloUtilizado}[cite: 12]</p>
                        </div>
                    )}
                </section>

                {/* BLOCO 6: GERENCIAMENTO DE USUÁRIOS (CRUD Completo) */}
                <section className="bg-white p-8 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-5 gap-6">
                        <div>
                            <h2 className="font-[var(--fonte-principal)] text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                                ⚙️ Painel de Controle de Usuários (API)
                            </h2>
                            <p className="text-[1.5rem] text-gray-600 mt-1">Endpoints integrados: GET, PUT e DELETE em tempo real[cite: 8].</p>
                        </div>
                        <button onClick={carregarDadosIniciais} className="px-6 py-3.5 bg-[var(--primary-dark)] hover:bg-[var(--secondary-dark)] text-white text-[1.6rem] font-bold rounded-[1.4rem] transition cursor-pointer shadow-md">
                            🔄 Atualizar Lista (/usuario)[cite: 8]
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <input type="number" placeholder="Consultar por ID exato (Ex: 1, 2...)" value={buscaIdUsuario} onChange={e => setBuscaIdUsuario(e.target.value)} className="flex-1 bg-slate-50 border-2 border-gray-300 rounded-[1.4rem] px-6 py-4 text-[1.7rem] outline-none" />
                        <button onClick={handleBuscarUsuarioPorId} className="px-8 py-4 bg-slate-900 text-white font-bold text-[1.6rem] rounded-[1.4rem] cursor-pointer">Consultar por ID[cite: 8]</button>
                        <button onClick={() => setUsuarioBuscado(null)} className="px-6 py-4 bg-gray-100 text-gray-700 font-semibold text-[1.6rem] rounded-[1.4rem] cursor-pointer">Limpar</button>
                    </div>

                    {usuarioBuscado ? (
                        <div className="border-2 border-[var(--primary-dark)]/20 rounded-[2rem] p-8 space-y-5 bg-slate-50 shadow-md">
                            <div className="flex items-center justify-between">
                                <span className="text-[1.5rem] font-bold bg-[var(--primary)]/10 text-[var(--primary-dark)] px-4 py-1.5 rounded-xl">ID Encontrado: {usuarioBuscado.idUsuario}</span>
                                <button onClick={() => handleExcluirUsuario(usuarioBuscado.idUsuario)} className="px-4 py-2 bg-red-50 text-red-600 text-[1.5rem] font-bold rounded-xl border border-red-200">Excluir Conta (DELETE)[cite: 8]</button>
                            </div>
                            <p className="text-[1.8rem]"><strong>Nome:</strong> {usuarioBuscado.nmUsuario}</p>
                            <p className="text-[1.8rem]"><strong>E-mail:</strong> {usuarioBuscado.dsEmail}</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {usuarios.map(u => (
                                <div key={u.idUsuario} className="border border-gray-200 rounded-[2rem] p-6 bg-slate-50 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                    {editandoId === u.idUsuario ? (
                                        <div className="flex-1 space-y-4 w-full mr-4">
                                            <input type="text" value={editNome} onChange={e => setEditNome(e.target.value)} placeholder="Novo Nome" className="w-full bg-white border-2 border-gray-300 p-4 rounded-[1.2rem] text-[1.6rem]" />
                                            <input type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} placeholder="Novo E-mail" className="w-full bg-white border-2 border-gray-300 p-4 rounded-[1.2rem] text-[1.6rem]" />
                                            <div className="flex gap-3">
                                                <button onClick={() => handleAtualizarUsuario(u.idUsuario!)} className="px-6 py-3 bg-emerald-600 text-white text-[1.5rem] font-bold rounded-[1.2rem] cursor-pointer">Salvar (PUT)[cite: 8]</button>
                                                <button onClick={() => setEditandoId(null)} className="px-6 py-3 bg-gray-200 text-gray-700 text-[1.5rem] font-bold rounded-[1.2rem] cursor-pointer">Cancelar</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className="text-[1.4rem] font-bold bg-[var(--primary)]/10 text-[var(--primary-dark)] px-3 py-1 rounded-lg">ID: {u.idUsuario}</span>
                                            <h4 className="font-bold text-[2rem] text-[var(--primary-dark)] mt-3">{u.nmUsuario}</h4>
                                            <p className="text-[1.5rem] text-gray-600 mt-1">{u.dsEmail}</p>
                                        </div>
                                    )}

                                    <div className="flex gap-3 self-end sm:self-center">
                                        {editandoId !== u.idUsuario && (
                                            <button onClick={() => { setEditandoId(u.idUsuario!); setEditNome(u.nmUsuario || ''); setEditEmail(u.dsEmail || ''); }} className="px-5 py-3 bg-sky-50 text-sky-600 text-[1.5rem] font-bold rounded-[1.2rem] border border-sky-200 cursor-pointer">Editar</button>
                                        )}
                                        <button onClick={() => handleExcluirUsuario(u.idUsuario)} className="px-5 py-3 bg-red-50 text-red-600 text-[1.5rem] font-bold rounded-[1.2rem] border border-red-200 cursor-pointer">Excluir[cite: 8]</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

            </main>
        </div>
    );
}

export default Principal;