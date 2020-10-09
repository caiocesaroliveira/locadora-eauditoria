export class Locacao {
  constructor(
    public id: number,
    public dataLocacao: Date,
    public dataDevolucao: Date,
    public devolvido: boolean,
    public clienteId: number,
    public filmeId: number
  ) {}
}
