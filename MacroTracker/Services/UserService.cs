﻿using MacroTracker.Data;
using MacroTracker.DTO;
using MacroTracker.Models.Entities;
using MacroTracker.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MacroTracker.Services
{
    public class UserService : IUserService
    {
  
        private readonly ApplicationDbContext dbContext;

        public UserService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<User> GetUserByIdAsync(Guid id)
        {
            var user = await dbContext.Users.FindAsync(id);

            return user;
        }

        public async Task<User> UpdateUserByIdAsync(Guid id, UpdateUserDto updateUserDto)
        {
            var user = await dbContext.Users.FindAsync(id);
            if (user == null)
            {
                return null;
            }
                user.Name = updateUserDto.Name;
                user.Email = updateUserDto.Email;
                user.Phone = updateUserDto.Phone;
                user.Password = updateUserDto.Password;
                user.UpdatedOn = DateTime.UtcNow;

            await dbContext.SaveChangesAsync();
            return user;
            }
         public async Task<List<User>> GetAllUsersAsync()
        {
            return await dbContext.Users.ToListAsync();
        }

        public async Task<User> DeleteUserByIdAsync(Guid id)
        {
            var user = await dbContext.Users.FindAsync(id);

            dbContext.Users.Remove(user);
            await dbContext.SaveChangesAsync();

            return user;
        }
        public async Task<User> AddUserAsync(AddUserDto addUserDto)
        {
            var userEntity = new User()
            {
                Email = addUserDto.Email,
                Name = addUserDto.Name,
                Phone = addUserDto.Phone,
                Password = addUserDto.Password,
                CreatedOn = DateTime.UtcNow
            };
            dbContext.Users.Add(userEntity);
            await dbContext.SaveChangesAsync();

            return userEntity;
        }
    }

}
