using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Data.Maps
{
  public class LocacaoMap : IEntityTypeConfiguration<Locacao>
  {
    public void Configure(EntityTypeBuilder<Locacao> builder)
    {
      builder.ToTable("Locacao");
      builder.HasKey(x => x.Id);
      builder.Property(x => x.DataLocacao).IsRequired().HasColumnType("datetime");
      builder.Property(x => x.DataDevolucao).IsRequired().HasColumnType("datetime");
      builder.HasOne(x => x.Cliente).WithMany(x => x.Locacoes);
      builder.HasOne(x => x.Filme).WithMany(x => x.Locacoes);
    }
  }
}