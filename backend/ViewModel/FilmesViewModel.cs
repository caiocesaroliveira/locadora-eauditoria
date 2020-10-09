namespace Backend.ViewModel
{
  public class FilmesViewModel
  {
    public int Id { get; set; }
    public string Titulo { get; set; }
    public int ClassificacaoIndicativa { get; set; }
    public byte Lancamento { get; set; }
    public int TotalAluguel { get; set; }
  }
}