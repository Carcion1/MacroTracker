using MacroTracker.DTO;
using MacroTracker.Services;
using MacroTracker.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MacroTracker.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
        public class LoginController : ControllerBase
        {
            private readonly IUserService _userService;

            public LoginController(IUserService userService)
            {
                _userService = userService;
            }
        [HttpPost]
        public async Task<IActionResult> GetUserByEmailAsync([FromBody] LoginDto loginDto)
        {
            var result = await _userService.GetUserByEmailAsync(loginDto.Email);
            if(result == null)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }
                 return Ok(new { message = "Login successful", user = result });
        }
    }
    }

