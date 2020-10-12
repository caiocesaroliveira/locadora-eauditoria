import React, { useContext, useEffect, useState } from 'react'
import { ClienteContext } from '../../contexts/Cliente/ClienteContext'
import { ClienteContextType } from '../../contexts/Cliente/ClienteContextType'
import { useForm } from 'react-hook-form'
import { useParams, useHistory, Link } from 'react-router-dom'

interface EditClienteForm {
  id: number
  nome: string
  cpf: string
  dataNascimento: string
}

interface EditClienteParams {
  id: string
}
const EditCliente: React.FC = () => {
  let history = useHistory()
  const { editCliente, clientes } = useContext<ClienteContextType>(
    ClienteContext
  )
  const [selectedCliente, setSelectedCliente] = useState<EditClienteForm>({
    id: 0,
    nome: '',
    cpf: '',
    dataNascimento: '',
  })
  const { id } = useParams<EditClienteParams>()

  useEffect(() => {
    const selCliente = clientes.find(
      c => c.id === parseInt(id)
    ) as EditClienteForm
    setSelectedCliente(selCliente)
  }, [])

  const { register, handleSubmit, errors } = useForm<EditClienteForm>()

  const onSubmit = (data: EditClienteForm, e: any) => {
    e.preventDefault()
    editCliente(parseInt(id), data)
    history.push('/clientes')
  }

  const handleOnChange = (userKey: string, value: string) => {
    setSelectedCliente({ ...selectedCliente, [userKey]: value })
  }

  return (
    <form onSubmit={handleSubmit<EditClienteForm>(onSubmit)}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Novo Cliente</legend>

        <div className="uk-margin">
          <input
            className="uk-input"
            type="number"
            name="id"
            // disabled
            value={selectedCliente.id}
            onChange={e => handleOnChange('id', e.target.value)}
            ref={register}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="nome"
            placeholder="Informe o nome"
            value={selectedCliente.nome}
            onChange={e => handleOnChange('nome', e.target.value)}
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.nome && <span>Campo obrigatório</span>}
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="cpf"
            placeholder="Informe o cpf"
            value={selectedCliente.cpf}
            onChange={e => handleOnChange('cpf', e.target.value)}
            ref={register}
          />
          {errors.nome && <span>Campo obrigatório</span>}
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="date"
            name="dataNascimento"
            placeholder="Informe a data de nascimento"
            value={selectedCliente.dataNascimento}
            onChange={e => handleOnChange('dataNascimento', e.target.value)}
            ref={register}
          />
          {errors.nome && <span>Campo obrigatório</span>}
        </div>

        <div className="uk-margin">
          <button className="uk-button uk-button-primary uk-margin-small-right">
            Salvar
          </button>
          <Link to="/clientes">
            <button type="button" className="uk-button uk-button-default">
              Cancelar
            </button>
          </Link>{' '}
        </div>
      </fieldset>
    </form>
  )
}
export default EditCliente
