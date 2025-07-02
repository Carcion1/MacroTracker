using MacroTracker.Data;
using MacroTracker.DTO;
using MacroTracker.Models.Entities;
using MacroTracker.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MacroTracker.Controllers
{
    // goes to localhost:xxxx/api/User
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        // GETTING ALL USERS
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAllUsers()
        {
            var allUsers = await _userService.GetAllUsersAsync();

            return Ok(new
            {
                message = "Returning all users",
                Users = allUsers
            });
        }
        // ADDING USERS
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> AddUser(AddUserDto addUserDto)
        {
            // converting user dto to type of user entity
            var userEntity = new User()
            {
                Email = addUserDto.Email,
                Name = addUserDto.Name,
                Phone = addUserDto.Phone,
                Password = addUserDto.Password,
                CreatedOn = DateTime.UtcNow
            };
            dbContext.Users.Add(userEntity);
            await dbContext.SaveChangesAsync(); // save changes because we are adding e.g

            // services code above.

            return CreatedAtAction(nameof(GetUserById), new { id = userEntity.Id }, new
            {
                message = "User created successfully",
                user = userEntity
            });
            // returns 201 response
        }

        [HttpGet]
        [Route("{id:Guid}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]// google what route means
        // getting user id will output a success, (200 & 404 not found) 
        public async Task<IActionResult> GetUserByIdAsync(Guid id) // make sure parameter matches route.
        {
            var user = await _userService.GetUserByIdAsync(id);
            // FindAsync more efficient because it checks if entity is tracked in memory. Designed for primary key look ups.
            if (user is null)
            {
                return NotFound("User id has not been found."); // 404 error. can also pass message.
            }
            return Ok(new
            {
                message = "Successfully retrieved user",
                User = user
            }); // implement first or default.

        } // needs to know what ID to search database

        [HttpPut]
        [Route("{id:Guid}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task <IActionResult> UpdateUser(Guid id, UpdateUserDto updateUserDto)
        {
            var user = await _userService.UpdateUserByIdAsync(id, updateUserDto); // finding user by id.
            // so instead of dbcontext.users.findasync(id)
            // var user = await UserService.UpdateUser
            // For controllers, everything HTTP request should be left here.
            //Services should contain the business logic which is then referenced by the controller
            if (user is null)
            {
                return NotFound("User id has not been found."); // returns a 404 error.
            }
            else
            {
                return Ok(new
                {
                    message = "User updated successfully",
                    updatedUser = user
                });
                // returns 200 response code. 
            }
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await dbContext.Users.FindAsync(id);

            if (user is null)
            {
                return NotFound("Cannot find a user with this id to delete.");
            }
            else
            {
               dbContext.Users.Remove(user);
               await dbContext.SaveChangesAsync();

               return NoContent();
                // check response code for delete.
            }
        } 
    }


}
