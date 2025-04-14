using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User> (options)
{
    public required DbSet<Product> Products { get; set; }

    public required DbSet<Basket> Baskets {get; set;}

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.Entity<IdentityRole>()
        .HasData(
            new IdentityRole{Id ="24f75091-9276-4388-9698-36aef7b9b190", Name="Member",NormalizedName="MEMBER"},
            new IdentityRole{Id="146ab7e3-8297-4379-aaf1-e506002ed126", Name="Admin",NormalizedName="ADMIN"}
        );
    }

}
