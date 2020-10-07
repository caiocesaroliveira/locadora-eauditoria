using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Data.Maps
{
  public class ClienteMap : IEntityTypeConfiguration<Cliente>
  {
    public void Configure(EntityTypeBuilder<Cliente> builder)
    {
      builder.ToTable("Cliente");
      builder.HasKey(x => x.Id);
      builder.Property(x => x.Nome).IsRequired().HasMaxLength(200).HasColumnType("varchar(200)");
      builder.Property(x => x.CPF).IsRequired().HasMaxLength(11).HasColumnType("varchar(11)");
      builder.Property(x => x.DataNascimento).HasColumnType("smalldatetime");
    }
  }
}