namespace MacroTracker.Models.Entities
{
    public class Weight
    {
        public int Id { get; set; }
        public required double Kilogram { get; set; }
        public DateTime DateLogged { get; set; } = DateTime.UtcNow;
        public required double height { get; set; }
    }
}
