using MacroTracker.DTO;
using MacroTracker.Models.Entities;

namespace MacroTracker.Services.Interfaces
{
    public interface IUserService
    {
        Task<User> GetUserByIdAsync(Guid id);
        Task<User> UpdateUserByIdAsync(Guid id, UpdateUserDto updateUserDto);
        Task<List<User>> GetAllUsersAsync();
    }
}
