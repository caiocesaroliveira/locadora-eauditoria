using System;

namespace Backend.ViewModel
{
  public class ClientesViewModel
  {
    public int Id { get; set; }
    public string Nome { get; set; }
    public string CPF { get; set; }
    public DateTime DataNascimento { get; set; }
    public int TotalAluguel { get; set; }
  }
}