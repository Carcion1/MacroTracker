namespace MacroTracker.DTO
{
    public class UpdateUserDto
    {
        public Guid Id { get; set; }

        public required string Name { get; set; }

        public required string Email { get; set; }

        public required string Password { get; set; }

        public DateTime UpdatedOn { get; set; }

        public string? Phone { get; set; }
    }
}
