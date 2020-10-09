using System;

namespace Backend.Models
{
  public class Locacao
  {
    public int Id { get; set; }
    public DateTime DataLocacao { get; set; }
    public DateTime DataDevolucao { get; set; }
    public Boolean Devolvido { get; set; }
    public int ClienteId { get; set; }
    public Cliente Cliente { get; set; }
    public int FilmeId { get; set; }
    public Filme Filme { get; set; }
  }
}