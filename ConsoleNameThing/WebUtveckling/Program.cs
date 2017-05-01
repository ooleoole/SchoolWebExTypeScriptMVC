using System;
using System.Collections.Generic;
using System.Linq;

namespace WebUtveckling
{
    class Program
    {
        private static readonly Random Random = new Random(Guid.NewGuid().GetHashCode());

        static void Main()
        {
            string[] names;

            Console.Write("Which seperator do u want to use? Default is comma ");
            var delimiterChar = Console.ReadKey().KeyChar;
            delimiterChar = delimiterChar == '\r' ? ',' : delimiterChar;
            Console.WriteLine();
            Console.Write("Do u want to display error messages? (Default is yes)");

            var errorMess = !string.Equals(Console.ReadLine(), "No", StringComparison.CurrentCultureIgnoreCase);
            do
            {
                Console.WriteLine($"Enter a number of names separated with {delimiterChar}!");
                var respons = GetInputFromUser();
                names = CreateArrayOfPeople(respons, delimiterChar);
            } while (!ValidateInput(names, errorMess));


            RespondToUser(names);
            Console.ResetColor();
            Console.Write("Press any key....");
            Console.ReadKey();

        }

        private static string CleanString(string respons)
        {
            return respons.Replace(" ", "");
        }

        private static void RespondToUser(IEnumerable<string> names)
        {

            foreach (var name in names)
            {
                Console.ForegroundColor = GetRandomConsoleColor();
                Console.WriteLine($"***SUPER-{name.ToUpper()}***");
            }
        }



        private static ConsoleColor GetRandomConsoleColor()
        {
            var consoleColors = Enum.GetValues(typeof(ConsoleColor));
            for (int i = 0; i < consoleColors.Length; i++)
            {
                if ((ConsoleColor)consoleColors.GetValue(i)==ConsoleColor.Black)
                {
                    consoleColors.SetValue(ConsoleColor.Red,i);
                }
            }
            return (ConsoleColor)consoleColors.GetValue(Random.Next(consoleColors.Length));
        }
        private static string[] CreateArrayOfPeople(string stringNames, char delimiterChar)
        {

            var names = stringNames.Split(delimiterChar);
            for (var i = 0; i < names.Length; i++)
                names[i]= CleanString(names[i]);
                
            
            return names;
        }

        private static bool ValidateInput(IEnumerable<string> inputNames, bool errorMess)
        {
            var enumerable = inputNames as string[] ?? inputNames.ToArray();


            if (!enumerable.Any() || enumerable.All(n => n.Equals("")))
            {
                Console.ForegroundColor = ConsoleColor.Red;
                var printMess = errorMess ? "The list is empty" : "";
                Console.WriteLine(printMess);
                Console.ResetColor();
                return false;
            }
            if (enumerable.Any(n => n.Length < 2 || n.Length > 9))
            {
                Console.ForegroundColor = ConsoleColor.Red;
                var printMess = errorMess ? "A person can only have a name of length 2-9" : "";
                Console.WriteLine(printMess);
                Console.ResetColor();
                return false;
            }

            return true;
        }
        private static string GetInputFromUser()
        {
            var stringNames = Console.ReadLine();
            return stringNames;
        }
    }
}