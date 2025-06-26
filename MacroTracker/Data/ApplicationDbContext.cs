using MacroTracker.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace MacroTracker.Data
{
    public class ApplicationDbContext : DbContext // this class comes from ef core package.
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) // ctor to create a constructor
            // if multiple db context then have to specify within the <> 
        {

        }

        // Add a property for the collection that we are going to store in the database. We are going to store users in database
        public DbSet<User> Users { get; set; }
    }
}
