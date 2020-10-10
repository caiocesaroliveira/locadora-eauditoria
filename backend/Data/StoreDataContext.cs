using Backend.Data.Maps;
using Backend.Models;
using Backend.ViewModel;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
  public class StoreDataContext : DbContext
  {
    public StoreDataContext(DbContextOptions<StoreDataContext> options) : base(options)
    {

    }
    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Filme> Filmes { get; set; }
    public DbSet<Locacao> Locacoes { get; set; }

    public DbSet<ClientesViewModel> ClientesViewModel { get; set; }
    public DbSet<FilmesViewModel> FilmesViewModel { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      base.OnConfiguring(optionsBuilder);
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.ApplyConfiguration(new ClienteMap());
      modelBuilder.ApplyConfiguration(new FilmeMap());
      modelBuilder.ApplyConfiguration(new LocacaoMap());

    }
  }
}