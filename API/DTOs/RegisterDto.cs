using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace API.DTOs;

public class RegisterDto
{
    [Required]
    public string Email { get; set; } = string.Empty;
    public required string Password { get; set; }

}
