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

export function Principal() {
    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [buscaIdUsuario, setBuscaIdUsuario] = useState('');
    const [usuarioBuscado, setUsuarioBuscado] = useState<Usuario | null>(null);
    const [statusUsuario, setStatusUsuario] = useState<{ tipo: 'sucesso' | 'erro' | 'info'; texto: string } | null>(null);
    
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [editIdInput, setEditIdInput] = useState('');
    const [editNome, setEditNome] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editSenha, setEditSenha] = useState('');

    const [linhas, setLinhas] = useState<Linha[]>([]);
    const [buscaIdLinha, setBuscaIdLinha] = useState('');
    const [linhaBuscada, setLinhaBuscada] = useState<Linha | null>(null);
    const [statusLinha, setStatusLinha] = useState<{ tipo: 'sucesso' | 'erro' | 'info'; texto: string } | null>(null);

    const [estacoes, setEstacoes] = useState<Estacao[]>([]);
    const [buscaIdEstacao, setBuscaIdEstacao] = useState('');
    const [estacaoBuscada, setEstacaoBuscada] = useState<Estacao | null>(null);
    const [linhasDaEstacao, setLinhasDaEstacao] = useState<any[]>([]);
    const [statusEstacao, setStatusEstacao] = useState<{ tipo: 'sucesso' | 'erro' | 'info'; texto: string } | null>(null);

    const [ocorrencias, setOcorrencias] = useState<StatusOperacional[]>([]);

    const [formPrevisao, setFormPrevisao] = useState({ dataPrevisao: '', hora: '', idEstacao: '', idLinha: '' });
    const [resultadoPrevisaoDemanda, setResultadoPrevisaoDemanda] = useState<any>(null);
    const [statusPrevisao, setStatusPrevisao] = useState<{ tipo: 'sucesso' | 'erro' | 'info'; texto: string } | null>(null);

    const [rotaForm, setRotaForm] = useState({ origem: '', destino: '', criterio: 'BALDEACOES', data: '', hora: '' });
    const [resultadoRota, setResultadoRota] = useState<any>(null);
    const [statusRota, setStatusRota] = useState<{ tipo: 'sucesso' | 'erro' | 'info'; texto: string } | null>(null);

    const API_URL = "https://api-fluxflow.onrender.com/fluxflow";

    // A API utiliza sessão HTTP (JSESSIONID), não JWT/Bearer Token.
    // credentials: 'include' faz o navegador enviar o cookie HttpOnly automaticamente.
    const getHeaders = () => ({
        'Content-Type': 'application/json'
    });

    const apiFetch = (url: string, options: RequestInit = {}) => fetch(url, {
        ...options,
        credentials: 'include',
        headers: {
            ...getHeaders(),
            ...((options.headers || {}) as Record<string, string>)
        }
    });

    const carregarDadosIniciais = async () => {
        try {
            const headers = getHeaders();
            const [resUser, resLinhas, resEstacoes, resStatus] = await Promise.all([
                apiFetch(`${API_URL}/usuario`, { headers }),
                apiFetch(`${API_URL}/linha`, { headers }),
                apiFetch(`${API_URL}/estacoes`, { headers }),
                apiFetch(`${API_URL}/status-operacional`, { headers })
            ]);

            if (resUser.status === 401) {
                navigate('/login');
                return;
            }

            if (resUser.ok) {
                const listaUsuarios = await resUser.json();
                setUsuarios(listaUsuarios);
            }
            if (resLinhas.ok) setLinhas(await resLinhas.json());
            if (resEstacoes.ok) setEstacoes(await resEstacoes.json());
            if (resStatus.ok) setOcorrencias(await resStatus.json());
        } catch (error) {
            console.error("Erro ao conectar com a API FluxFlow.", error);
        }
    };

    useEffect(() => {
        // A sessão é validada pelo backend. O cookie JSESSIONID é HttpOnly,
        // portanto não deve ser consultado via document.cookie/localStorage.
        carregarDadosIniciais();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await apiFetch(`${API_URL}/usuario/logout`, { method: 'POST' });
        } catch (e) {
            console.error(e);
        } finally {
            // O cookie JSESSIONID é HttpOnly; somente o servidor pode encerrar a sessão.
            localStorage.removeItem('userId');
            navigate('/login');
        }
    };

    const handleBuscarUsuarioPorId = async () => {
        if (!buscaIdUsuario) {
            setStatusUsuario({ tipo: 'erro', texto: 'Informe um ID de usuário válido.' });
            return;
        }
        setStatusUsuario({ tipo: 'info', texto: 'Consultando usuário...' });
        try {
            const res = await apiFetch(`${API_URL}/usuario/${buscaIdUsuario}`, { headers: getHeaders() });
            if (res.ok) {
                setUsuarioBuscado(await res.json());
                setStatusUsuario({ tipo: 'sucesso', texto: 'Usuário encontrado com sucesso!' });
            } else {
                setUsuarioBuscado(null);
                setStatusUsuario({ tipo: 'erro', texto: 'Usuário não encontrado.' });
            }
        } catch (e) {
            setStatusUsuario({ tipo: 'erro', texto: 'Erro de conexão ao buscar usuário.' });
        }
    };

    const handleAtualizarUsuario = async () => {
        const idParaAtualizar = editIdInput;
        if (!idParaAtualizar) {
            setStatusUsuario({ tipo: 'erro', texto: 'Informe o ID do usuário para alocar na URL (ex: 5).' });
            return;
        }

        setStatusUsuario({ tipo: 'info', texto: `Atualizando dados do usuário ID ${idParaAtualizar}...` });
        try {
            const payload: any = { 
                nmUsuario: editNome, 
                dsEmail: editEmail 
            };
            
            if (editSenha && editSenha.trim() !== '') {
                payload.dsSenha = editSenha;
            }

            const res = await apiFetch(`${API_URL}/usuario/${idParaAtualizar}`, {
                method: 'PUT',
                headers: getHeaders(),
                body: JSON.stringify(payload)
            });

            if (res.ok || res.status === 204 || res.status === 200) {
                setStatusUsuario({ tipo: 'sucesso', texto: `Usuário ID ${idParaAtualizar} atualizado com sucesso!` });
                setEditandoId(null);
                setEditSenha('');
                setEditIdInput('');
                carregarDadosIniciais();
            } else if (res.status === 400) {
                setStatusUsuario({ tipo: 'erro', texto: 'Erro 400: Dados inválidos ou ID incorreto.' });
            } else if (res.status === 401 || res.status === 403) {
                setStatusUsuario({ tipo: 'erro', texto: 'Sessão não autenticada ou sem permissão. Faça login novamente e tente outra vez.' });
            } else {
                setStatusUsuario({ tipo: 'erro', texto: `Erro ao atualizar. Status HTTP: ${res.status}` });
            }
        } catch (e) { 
            setStatusUsuario({ tipo: 'erro', texto: 'Erro de conexão na atualização.' }); 
        }
    };

    const handleExcluirUsuario = async (id?: number) => {
        if (!id || !confirm('Deseja excluir esta conta?')) return;
        try {
            const res = await apiFetch(`${API_URL}/usuario/${id}`, { method: 'DELETE', headers: getHeaders() });
            if (res.ok || res.status === 204) {
                setStatusUsuario({ tipo: 'sucesso', texto: 'Conta excluída com sucesso!' });
                setUsuarioBuscado(null);
                carregarDadosIniciais();
            } else {
                setStatusUsuario({ tipo: 'erro', texto: 'Erro ao excluir conta (verifique se é o seu próprio ID).' });
            }
        } catch (e) { 
            setStatusUsuario({ tipo: 'erro', texto: 'Erro de conexão ao excluir.' }); 
        }
    };

    const handleBuscarLinhaPorId = async () => {
        if (!buscaIdLinha) {
            setStatusLinha({ tipo: 'erro', texto: 'Informe um ID de linha válido.' });
            return;
        }
        setStatusLinha({ tipo: 'info', texto: 'Buscando linha...' });
        try {
            const res = await apiFetch(`${API_URL}/linha/${buscaIdLinha}`, { headers: getHeaders() });
            if (res.ok) {
                setLinhaBuscada(await res.json());
                setStatusLinha({ tipo: 'sucesso', texto: 'Linha localizada com sucesso!' });
            } else {
                setLinhaBuscada(null);
                setStatusLinha({ tipo: 'erro', texto: 'Linha não encontrada.' });
            }
        } catch (e) {
            setStatusLinha({ tipo: 'erro', texto: 'Erro de conexão ao buscar linha.' });
        }
    };

    const handleBuscarEstacaoPorId = async () => {
        if (!buscaIdEstacao) {
            setStatusEstacao({ tipo: 'erro', texto: 'Informe um ID de estação válido.' });
            return;
        }
        setStatusEstacao({ tipo: 'info', texto: 'Consultando estação e vínculos...' });
        try {
            const [resEst, resLinhasEst] = await Promise.all([
                apiFetch(`${API_URL}/estacoes/${buscaIdEstacao}`, { headers: getHeaders() }),
                apiFetch(`${API_URL}/estacoes/${buscaIdEstacao}/linhas`, { headers: getHeaders() })
            ]);
            if (resEst.ok) {
                setEstacaoBuscada(await resEst.json());
                setStatusEstacao({ tipo: 'sucesso', texto: 'Estação consultada com sucesso!' });
            } else {
                setEstacaoBuscada(null);
                setStatusEstacao({ tipo: 'erro', texto: 'Estação não encontrada.' });
            }

            if (resLinhasEst.ok) setLinhasDaEstacao(await resLinhasEst.json());
            else setLinhasDaEstacao([]);
        } catch (e) {
            setStatusEstacao({ tipo: 'erro', texto: 'Erro de conexão ao consultar estação.' });
        }
    };

    const handleCalcularPrevisao = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatusPrevisao({ tipo: 'info', texto: 'Calculando previsão sob demanda...' });
        setResultadoPrevisaoDemanda(null);
        try {
            const url = `${API_URL}/previsoes-lotacao?dataPrevisao=${formPrevisao.dataPrevisao}&hora=${formPrevisao.hora}&idEstacao=${formPrevisao.idEstacao}&idLinha=${formPrevisao.idLinha}`;
            const res = await apiFetch(url, { method: 'POST', headers: getHeaders() });
            if (res.ok) {
                const data = await res.json();
                setResultadoPrevisaoDemanda(data);
                setStatusPrevisao({ tipo: 'sucesso', texto: 'Previsão calculada com sucesso!' });
            } else {
                setStatusPrevisao({ tipo: 'erro', texto: 'Erro ao calcular previsão. Verifique os parâmetros.' });
            }
        } catch (e) {
            setStatusPrevisao({ tipo: 'erro', texto: 'Erro de conexão no cálculo de previsão.' });
        }
    };

    const handleCalcularRota = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatusRota({ tipo: 'info', texto: rotaForm.criterio === 'LOTACAO' ? 'Processando rota por menor lotação...' : 'Calculando rota otimizada...' });
        setResultadoRota(null);
        try {
            let url = `${API_URL}/rotas?origem=${rotaForm.origem}&destino=${rotaForm.destino}&criterio=${rotaForm.criterio}`;
            if (rotaForm.criterio === 'LOTACAO') {
                if (rotaForm.data) url += `&data=${rotaForm.data}`;
                if (rotaForm.hora !== '') url += `&hora=${rotaForm.hora}`;
            }

            const res = await apiFetch(url, { headers: getHeaders() });
            if (res.ok) {
                const data = await res.json();
                setResultadoRota(data);
                setStatusRota({ tipo: 'sucesso', texto: 'Rota calculada com sucesso!' });
            } else {
                setStatusRota({ tipo: 'erro', texto: 'Erro ao calcular rota. Verifique os IDs informados.' });
            }
        } catch (e) {
            setStatusRota({ tipo: 'erro', texto: 'Erro de conexão ao calcular rota.' });
        }
    };

    const renderStatusBox = (status: { tipo: 'sucesso' | 'erro' | 'info'; texto: string } | null) => {
        if (!status) return null;
        const cores = {
            sucesso: 'bg-emerald-50 border-emerald-300 text-emerald-800',
            erro: 'bg-red-50 border-red-300 text-red-800',
            info: 'bg-sky-50 border-sky-300 text-sky-800'
        };
        return (
            <div className={`p-4 rounded-xl border-2 text-[1.4rem] font-semibold mt-4 transition-all ${cores[status.tipo]}`}>
                {status.texto}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] font-[var(--fonte-texto)] text-[var(--text-main)] pb-24">
            <header className="bg-[var(--primary-dark)] border-b-[4px] border-[var(--secondary)] px-4 sm:px-12 py-6 shadow-md flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-0 z-50">
                <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="w-5 h-5 bg-[var(--secondary)] rounded-full animate-pulse shrink-0" />
                    <div>
                        <h1 className="font-[var(--fonte-principal)] text-[2.4rem] sm:text-[3rem] font-bold tracking-tight text-[var(--bg-primary)]">
                            Flux<span className="text-[var(--secondary)]">Flow</span>
                        </h1>
                        <p className="text-[1.3rem] sm:text-[1.5rem] text-gray-200 font-semibold tracking-wider uppercase">Painel Operacional Central</p>
                    </div>
                </div>
                <button 
                    onClick={handleLogout} 
                    className="px-5 py-2.5 bg-red-50 text-red-600 border-2 border-red-200 rounded-[1.2rem] font-bold text-[1.4rem] sm:text-[1.6rem] hover:bg-red-100 transition-all cursor-pointer shadow-sm w-full sm:w-auto text-center"
                >
                    Encerrar Sessão
                </button>
            </header>

            <main className="max-w-[124rem] mx-auto px-4 sm:px-8 mt-8 sm:mt-12 space-y-8 sm:space-y-12">
                <section className="bg-white p-6 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                        <h2 className="font-[var(--fonte-principal)] text-[2.2rem] sm:text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                            🗺️ Planejamento de Rotas
                        </h2>
                        <p className="text-[1.4rem] sm:text-[1.5rem] text-gray-600 mt-1">Calcule o melhor trajeto entre estações por Baldeações, Estações, Tempo ou Lotação.</p>
                    </div>

                    <form onSubmit={handleCalcularRota} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">ID Origem</label>
                            <input type="number" required placeholder="Ex: 2" value={rotaForm.origem} onChange={e => setRotaForm({...rotaForm, origem: e.target.value})} className="p-3 sm:p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.5rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">ID Destino</label>
                            <input type="number" required placeholder="Ex: 35" value={rotaForm.destino} onChange={e => setRotaForm({...rotaForm, destino: e.target.value})} className="p-3 sm:p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.5rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">Critério</label>
                            <select value={rotaForm.criterio} onChange={e => setRotaForm({...rotaForm, criterio: e.target.value})} className="p-3 sm:p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.5rem]">
                                <option value="BALDEACOES">BALDEACOES</option>
                                <option value="ESTACOES">ESTACOES</option>
                                <option value="TEMPO">TEMPO</option>
                                <option value="LOTACAO">LOTACAO (Demorado)</option>
                            </select>
                        </div>
                        {rotaForm.criterio === 'LOTACAO' && (
                            <>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[1.4rem] font-bold">Data (AAAA-MM-DD)</label>
                                    <input type="text" value={rotaForm.data} onChange={e => setRotaForm({...rotaForm, data: e.target.value})} className="p-3 sm:p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.5rem]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[1.4rem] font-bold">Hora (0-23)</label>
                                    <input type="number" min="0" max="23" value={rotaForm.hora} onChange={e => setRotaForm({...rotaForm, hora: e.target.value})} className="p-3 sm:p-4 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] text-[1.5rem]" />
                                </div>
                            </>
                        )}
                        <div className="md:col-span-5 flex justify-end">
                            <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-[var(--primary-dark)] text-white text-[1.6rem] font-bold rounded-[1.2rem] cursor-pointer hover:opacity-90 shadow-md">
                                Calcular Rota
                            </button>
                        </div>
                    </form>

                    {renderStatusBox(statusRota)}

                    {resultadoRota && (
                        <div className="mt-4 p-6 bg-slate-50 border-2 border-gray-200 rounded-[1.8rem] space-y-4 overflow-x-auto">
                            <h3 className="text-[1.8rem] font-bold text-[var(--primary-dark)]">Resultado do Trajeto:</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[1.4rem] sm:text-[1.5rem]">
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

                <section className="bg-white p-6 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-6">
                    <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h2 className="font-[var(--fonte-principal)] text-[2.2rem] sm:text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                                🚇 Gerenciamento de Linhas
                            </h2>
                            <p className="text-[1.4rem] sm:text-[1.5rem] text-gray-600 mt-1">Listagem oficial de linhas do Metrô e CPTM.</p>
                        </div>
                        <div className="flex w-full sm:w-auto gap-2">
                            <input type="number" placeholder="ID Linha" value={buscaIdLinha} onChange={e => setBuscaIdLinha(e.target.value)} className="p-3 bg-slate-50 border border-gray-300 rounded-xl text-[1.4rem] w-full sm:w-36" />
                            <button onClick={handleBuscarLinhaPorId} className="px-5 py-3 bg-slate-900 text-white rounded-xl text-[1.4rem] font-bold cursor-pointer shrink-0">Buscar</button>
                        </div>
                    </div>

                    {renderStatusBox(statusLinha)}

                    {linhaBuscada && (
                        <div className="p-4 bg-slate-50 border rounded-xl text-[1.5rem]">
                            <p><strong>ID:</strong> {linhaBuscada.idLinha} | <strong>Código:</strong> {linhaBuscada.dsCodigo} | <strong>Nome:</strong> {linhaBuscada.nmLinha} | <strong>Operador:</strong> {linhaBuscada.tpOperador}</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {linhas.map((l) => (
                            <div key={l.idLinha || l.dsCodigo} className="p-5 rounded-[1.6rem] bg-slate-50 border border-gray-200 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: l.dsCor || '#005CA9' }} />
                                        <span className="font-bold text-[1.7rem] text-[var(--primary-dark)] truncate">{l.nmLinha}</span>
                                    </div>
                                    <p className="text-[1.4rem] text-gray-600">Operador: <span className="font-semibold">{l.tpOperador}</span></p>
                                    <p className="text-[1.4rem] text-gray-600">Status: <span className="font-semibold">{l.stLinha}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white p-6 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-6">
                    <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h2 className="font-[var(--fonte-principal)] text-[2.2rem] sm:text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                                🚉 Consulta de Estações
                            </h2>
                            <p className="text-[1.4rem] sm:text-[1.5rem] text-gray-600 mt-1">Listagem de estações e verificação de linhas associadas.</p>
                        </div>
                        <div className="flex w-full sm:w-auto gap-2">
                            <input type="number" placeholder="ID Estação" value={buscaIdEstacao} onChange={e => setBuscaIdEstacao(e.target.value)} className="p-3 bg-slate-50 border border-gray-300 rounded-xl text-[1.4rem] w-full sm:w-36" />
                            <button onClick={handleBuscarEstacaoPorId} className="px-5 py-3 bg-slate-900 text-white rounded-xl text-[1.4rem] font-bold cursor-pointer shrink-0">Consultar</button>
                        </div>
                    </div>

                    {renderStatusBox(statusEstacao)}

                    {estacaoBuscada && (
                        <div className="p-4 bg-slate-50 border rounded-xl text-[1.5rem] space-y-2">
                            <p><strong>Estação:</strong> {estacaoBuscada.nmEstacao} (ID: {estacaoBuscada.idEstacao})</p>
                            <p><strong>Linhas Associadas:</strong> {JSON.stringify(linhasDaEstacao)}</p>
                        </div>
                    )}

                    <div className="overflow-x-auto max-h-80 overflow-y-auto">
                        <table className="w-full text-left border-collapse min-w-[400px]">
                            <thead>
                                <tr className="border-b border-gray-200 text-gray-500 text-[1.4rem] font-bold uppercase tracking-wider">
                                    <th className="py-3 px-4">ID</th>
                                    <th className="py-3 px-4">Nome da Estação</th>
                                    <th className="py-3 px-4">Situação</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-[1.5rem]">
                                {estacoes.map((e) => (
                                    <tr key={e.idEstacao} className="hover:bg-slate-50">
                                        <td className="py-3 px-4 font-bold">{e.idEstacao}</td>
                                        <td className="py-3 px-4 font-bold text-[var(--primary-dark)]">{e.nmEstacao}</td>
                                        <td className="py-3 px-4">
                                            <span className="px-3 py-1 rounded-full text-[1.3rem] font-bold bg-emerald-50 text-emerald-700">
                                                {e.stEstacao}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="bg-white p-6 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                        <h2 className="font-[var(--fonte-principal)] text-[2.2rem] sm:text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                            ⚠️ Status Operacional
                        </h2>
                        <p className="text-[1.4rem] sm:text-[1.5rem] text-gray-600 mt-1">Monitoramento de atrasos, interrupções e manutenções ativas.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ocorrencias.map((oc) => (
                            <div key={oc.idOcorrencia || Math.random()} className="p-5 rounded-[1.6rem] bg-slate-50 border border-gray-200 space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-[1.5rem] text-rose-600">{oc.tpOcorrencia}</span>
                                    <span className="text-[1.2rem] font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800">{oc.dsSituacao}</span>
                                </div>
                                <p className="text-[1.4rem] text-gray-800"><strong>Status:</strong> {oc.dsStatus}</p>
                                <p className="text-[1.2rem] text-gray-500">Início: {oc.dtInicio} | Origem: {oc.dsOrigem}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white p-6 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                        <h2 className="font-[var(--fonte-principal)] text-[2.2rem] sm:text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                            📊 Previsão de Lotação sob Demanda
                        </h2>
                        <p className="text-[1.4rem] sm:text-[1.5rem] text-gray-600 mt-1">Calcule novas estimativas de fluxo em tempo real.</p>
                    </div>

                    <form onSubmit={handleCalcularPrevisao} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-[1.8rem] border">
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">Data (AAAA-MM-DD)</label>
                            <input type="text" required value={formPrevisao.dataPrevisao} onChange={e => setFormPrevisao({...formPrevisao, dataPrevisao: e.target.value})} className="p-3 bg-white border rounded-xl text-[1.4rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">Hora (0-23)</label>
                            <input type="number" min="0" max="23" required value={formPrevisao.hora} onChange={e => setFormPrevisao({...formPrevisao, hora: e.target.value})} className="p-3 bg-white border rounded-xl text-[1.4rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">ID Estação</label>
                            <input type="number" required value={formPrevisao.idEstacao} onChange={e => setFormPrevisao({...formPrevisao, idEstacao: e.target.value})} className="p-3 bg-white border rounded-xl text-[1.4rem]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[1.4rem] font-bold">ID Linha</label>
                            <input type="number" required value={formPrevisao.idLinha} onChange={e => setFormPrevisao({...formPrevisao, idLinha: e.target.value})} className="p-3 bg-white border rounded-xl text-[1.4rem]" />
                        </div>
                        <div className="md:col-span-4 flex justify-end">
                            <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-[var(--primary-dark)] text-white text-[1.5rem] font-bold rounded-xl cursor-pointer shadow-md">
                                Calcular Previsão Sob Demanda
                            </button>
                        </div>
                    </form>

                    {renderStatusBox(statusPrevisao)}

                    {resultadoPrevisaoDemanda && (
                        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-[1.6rem] text-[1.5rem] space-y-2">
                            <p className="font-bold text-emerald-800">Previsão Calculada com Sucesso:</p>
                            <p><strong>Classificação:</strong> {resultadoPrevisaoDemanda.dsClassificacao}</p>
                            <p><strong>Índice de Lotação (0-100):</strong> {resultadoPrevisaoDemanda.vlIndiceLotacao}</p>
                            <p><strong>Modelo Utilizado:</strong> {resultadoPrevisaoDemanda.dsModeloUtilizado}</p>
                        </div>
                    )}
                </section>

                <section className="bg-white p-6 sm:p-10 rounded-[2.4rem] border-2 border-[var(--primary-dark)]/15 shadow-xl space-y-6">
                    <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h2 className="font-[var(--fonte-principal)] text-[2.2rem] sm:text-[2.4rem] font-bold text-[var(--primary-dark)] flex items-center gap-3">
                                ⚙️ Painel de Controle de Usuários
                            </h2>
                            <p className="text-[1.4rem] sm:text-[1.5rem] text-gray-600 mt-1">Endpoints integrados: GET, PUT e DELETE em tempo real.</p>
                        </div>
                        <button onClick={carregarDadosIniciais} className="w-full sm:w-auto px-6 py-3 bg-[var(--primary-dark)] text-white text-[1.5rem] font-bold rounded-[1.2rem] transition cursor-pointer shadow-md text-center">
                            🔄 Atualizar Lista
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input type="number" placeholder="Consultar por ID exato" value={buscaIdUsuario} onChange={e => setBuscaIdUsuario(e.target.value)} className="flex-1 bg-slate-50 border-2 border-gray-300 rounded-[1.2rem] px-4 py-3 text-[1.5rem] outline-none" />
                        <button onClick={handleBuscarUsuarioPorId} className="px-6 py-3 bg-slate-900 text-white font-bold text-[1.5rem] rounded-[1.2rem] cursor-pointer">Consultar ID</button>
                        <button onClick={() => setUsuarioBuscado(null)} className="px-5 py-3 bg-gray-100 text-gray-700 font-semibold text-[1.5rem] rounded-[1.2rem] cursor-pointer">Limpar</button>
                    </div>

                    {renderStatusBox(statusUsuario)}

                    {usuarioBuscado ? (
                        <div className="border-2 border-[var(--primary-dark)]/20 rounded-[2rem] p-6 space-y-4 bg-slate-50 shadow-md">
                            <div className="flex items-center justify-between">
                                <span className="text-[1.4rem] font-bold bg-[var(--primary)]/10 text-[var(--primary-dark)] px-3 py-1 rounded-xl">ID Encontrado: {usuarioBuscado.idUsuario}</span>
                                <button onClick={() => handleExcluirUsuario(usuarioBuscado.idUsuario)} className="px-4 py-2 bg-red-50 text-red-600 text-[1.4rem] font-bold rounded-xl border border-red-200">Excluir Conta</button>
                            </div>
                            <p className="text-[1.6rem]"><strong>Nome:</strong> {usuarioBuscado.nmUsuario}</p>
                            <p className="text-[1.6rem]"><strong>E-mail:</strong> {usuarioBuscado.dsEmail}</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {usuarios.map(u => (
                                <div key={u.idUsuario} className="border border-gray-200 rounded-[2rem] p-5 bg-slate-50 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    {editandoId === u.idUsuario ? (
                                        <div className="flex-1 space-y-3 w-full">
                                            <input 
                                                type="number" 
                                                value={editIdInput} 
                                                onChange={e => setEditIdInput(e.target.value)} 
                                                placeholder="Digite o seu ID exato (Ex: 5)" 
                                                className="w-full bg-white border-2 border-emerald-500 p-3 rounded-xl text-[1.5rem] font-bold" 
                                            />
                                            <input type="text" value={editNome} onChange={e => setEditNome(e.target.value)} placeholder="Novo Nome" className="w-full bg-white border-2 border-gray-300 p-3 rounded-xl text-[1.5rem]" />
                                            <input type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} placeholder="Novo E-mail" className="w-full bg-white border-2 border-gray-300 p-3 rounded-xl text-[1.5rem]" />
                                            <input type="password" value={editSenha} onChange={e => setEditSenha(e.target.value)} placeholder="Nova Senha" className="w-full bg-white border-2 border-gray-300 p-3 rounded-xl text-[1.5rem]" />
                                            <div className="flex gap-2">
                                                <button onClick={handleAtualizarUsuario} className="px-5 py-2.5 bg-emerald-600 text-white text-[1.4rem] font-bold rounded-xl cursor-pointer">Salvar na URL</button>
                                                <button onClick={() => { setEditandoId(null); setEditSenha(''); setEditIdInput(''); }} className="px-5 py-2.5 bg-gray-200 text-gray-700 text-[1.4rem] font-bold rounded-xl cursor-pointer">Cancelar</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className="text-[1.3rem] font-bold bg-[var(--primary)]/10 text-[var(--primary-dark)] px-2.5 py-0.5 rounded-lg">ID: {u.idUsuario}</span>
                                            <h4 className="font-bold text-[1.8rem] text-[var(--primary-dark)] mt-2">{u.nmUsuario}</h4>
                                            <p className="text-[1.4rem] text-gray-600 mt-0.5">{u.dsEmail}</p>
                                        </div>
                                    )}

                                    <div className="flex gap-2 self-end sm:self-center">
                                        {editandoId !== u.idUsuario && (
                                            <button onClick={() => { setEditandoId(u.idUsuario!); setEditIdInput(u.idUsuario?.toString() || localStorage.getItem('userId') || ''); setEditNome(u.nmUsuario || ''); setEditEmail(u.dsEmail || ''); setEditSenha(''); }} className="px-4 py-2 bg-sky-50 text-sky-600 text-[1.4rem] font-bold rounded-xl border border-sky-200 cursor-pointer">Editar</button>
                                        )}
                                        <button onClick={() => handleExcluirUsuario(u.idUsuario)} className="px-4 py-2 bg-red-50 text-red-600 text-[1.4rem] font-bold rounded-xl border border-red-200 cursor-pointer">Excluir</button>
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