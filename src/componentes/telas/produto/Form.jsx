import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ProdutoContext from "./ProdutoContext";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaCategorias }
        = useContext(ProdutoContext);

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    return (
        <div className="modal fade" id="modalEdicao"
            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Produto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}
                        className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="mb-3">
                                <label for="txtCodigo"
                                    className="form-label">Código</label>
                                <input type="number" className="form-control"
                                    id="txtCodigo"
                                    readOnly name="codigo" value={objeto.codigo}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label for="txtNome"
                                    className="form-label">Nome</label>
                                <input type="text" className="form-control"
                                    id="txtNome" placeholder="Informe o nome"
                                    required name="nome" value={objeto.nome}
                                    onChange={handleChange} />
                                <div className="valid-feedback">
                                    Nome ok
                                </div>
                                <div className="invalid-feedback">
                                    Informe o nome
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="txtDescricao"
                                    className="form-label">Decrição</label>
                                <input type="text" className="form-control"
                                    id="txtDescricao" placeholder="Informe a descricao"
                                    required name="descricao" value={objeto.descricao}
                                    onChange={handleChange} />
                                <div className="valid-feedback">
                                    Descrição ok
                                </div>
                                <div className="invalid-feedback">
                                    Informe a descrição
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="txtEstoque"
                                    className="form-label">Estoque</label>
                                <input type="number" className="form-control"
                                    id="txtEstoque" placeholder="Informe a quantidade em estoque"
                                    required name="quantidade_estoque"
                                    value={objeto.quantidade_estoque}
                                    onChange={handleChange} />
                                <div className="valid-feedback">
                                    Estoque ok
                                </div>
                                <div className="invalid-feedback">
                                    Informe a quantidade em estoque
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="txtValor"
                                    className="form-label">Valor</label>
                                <input type="number" className="form-control"
                                    id="txtValor" placeholder="Informe o valor"
                                    required name="valor"
                                    value={objeto.valor}
                                    onChange={handleChange} />
                                <div className="valid-feedback">
                                    Valor ok
                                </div>
                                <div className="invalid-feedback">
                                    Informe o valor
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="selectAtivo"
                                    className="form-label">Ativo</label>
                                <select className="form-select"
                                    id="selectAtivo"
                                    required name="ativo"
                                    value={objeto.ativo}
                                    onChange={handleChange} >
                                    <option value={true}>Sim</option>
                                    <option value={false}>Não</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="selectCategoria"
                                    className="form-label">Categoria</label>
                                <select className="form-select"
                                    id="selectCategoria"
                                    required name="categoria"
                                    value={objeto.categoria}
                                    onChange={handleChange} >
                                    <option disabled="true" value="">
                                        Selecione a categoria
                                    </option>
                                    {
                                        listaCategorias.map((cat) => (
                                            <option key={cat.codigo}
                                                value={cat.codigo}>
                                                {cat.nome}
                                            </option>
                                        ))
                                    }
                                </select>
                                <div className="valid-feedback">
                                    Categoria OK
                                </div>
                                <div className="invalid-feedback">
                                    Selecione a categoria
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="txtDataCadastro"
                                    className="form-label">Data de cadastro</label>
                                <input type="date" className="form-control"
                                    id="txtDataCadastro" 
                                    required name="data_cadastro"
                                    value={objeto.data_cadastro}
                                    onChange={handleChange} />
                                <div className="valid-feedback">
                                    Data de cadastro ok
                                </div>
                                <div className="invalid-feedback">
                                    Informe a data de cadastro
                                </div>
                            </div>                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-primary">
                                Salvar <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;