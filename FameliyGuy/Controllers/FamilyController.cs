using System;
using Microsoft.AspNetCore.Mvc;

namespace WebKurs2.Controllers
{
    public class FamilyController : Controller
    {
        public IActionResult React(string guy)
        {
            if (guy.ToLower() == "stewie") throw new InvalidOperationException("Bad Request");
            if (guy.ToLower() == "peter") return Content("<img src=\"/images/explosion.jpg\">", "text/html");
            if (guy.ToLower() == "meg" || guy.ToLower() == "lois" || guy.ToLower() == "brian") return Content("<img src=\"/images/tumbsup.jpg\">", "text/html");


            return Content("<img src=\"/images/tumpsDown.jpg\">", "text/html");
        }

    }
}
