namespace MacroTracker.Models.Entities
{
    public class User
    {
        public Guid Id { get; set; }

        public required string Name { get; set; }

        public required string Email { get; set; }

        public required string Password { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn {  get; set; }
        public string? Phone { get; set; }
    }
}
