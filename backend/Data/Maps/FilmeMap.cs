using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Data.Maps
{
  public class FilmeMap : IEntityTypeConfiguration<Filme>
  {
    public void Configure(EntityTypeBuilder<Filme> builder)
    {
      builder.ToTable("Filme");
      builder.HasKey(x => x.Id);
      builder.Property(x => x.Titulo).IsRequired().HasMaxLength(200).HasColumnType("varchar(200)");
      builder.Property(x => x.ClassificacaoIndicativa).IsRequired().HasMaxLength(2).HasColumnType("int");
      builder.Property(x => x.Lancamento).IsRequired().HasMaxLength(1).HasColumnType("tinyint");
    }
  }
}