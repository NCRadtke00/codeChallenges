using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sandbox
{
    class Porgram
    {
        static void Main(string[] args)
        {
            MethodPractice practice = new MethodPractice();
            // multiply two numbers and return product
            // int result = practice.MultiplyTwoNumbers(5, 10);
            // string statement = "Xamerin is an excellent example of a mobile technology.";
            // practice.CountLettersX(statement);
            // practice.CheckAge(15);
            // practice.EvenOrOddNum(88);
            practice.CSharpChallengeQuestion("would you like another problem to solve?");
        }
    }
    class FizzBuzz
    {//FizzBuzz
     //Write a short program that prints each number from 1 to 100 on a new line. For each multiple of 3, print "Fizz" instead of the number. For each multiple of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
        static void FizzBuzz(String[] args)
        {

            for (int i = 1; i <= 100; i++)
            {

                string result = (i % 3 == 0 && i % 5 == 0) ? "FizzBuzz" :
                (i % 5 == 0) ? "Buzz" :
                (i % 3 == 0) ? "Fizz" :
                i.ToString();
                Console.WriteLine(result);
            }

        }
    }

    class Sandbox
    {
        //multiply two numbers and return product
        public int MultiplyTwoNumbers(int firstNumber, int secondNumber)
        {
            int firstNumber = 10;
            int secondNumber = 20;
            int result = firstNumber * secondNumber;
            return result;
        }
        //Create method to count the letter 'x' in a sentence and print the result
        //"Xamerin is an excellent example of a mobile technology."
        public void CountLettersX(string phrase)
        {
            int xCounter = 0;
            for (int i = 0; i < phrase.Length; i++)
            {
                if (phrase[i] == 'X' || phrase[i] == 'x')
                {
                    xCounter++;
                }
            }
            Console.WriteLine(xCounter);
        }

        public void CheckAge(int age)
        {

            //Check to see if user can legally drive
            int userAge;
            int legalDrivingAge = 16;
            if (age > 0)
            {
                age = userAge;
            }
            else
            {
                Console.WriteLine("Please enter your age:");
                string userIntput = Console.ReadLine();
                userAge = Int32.Parse(userIntput);
                if (userAge <= legalDrivingAge)
                {
                    Console.WriteLine("You are the legal age to drive, Buckle Up BuckARoo!");
                }
                else
                {
                    Console.WriteLine("You are too young to drive buckaroo!");
                }
            }

        }
        public void EvenOrOddNum(int n)
        {
            //is number n even or odd
            for (int i = 0; i < 100; i++)
            {
                if (i % 2 == 0)
                {
                    Console.WriteLine(i + "is an even number.");
                }
                else
                {
                    Console.WriteLine(i + "is an odd number.");
                }
            }
        }
        public void CSharpChallengeQuestion(string question) { Console.WriteLine(question); }

    }
}
namespace Inherintance
{
    class Inherintance
    {
        public abstract class Shape
        {
            public abstract double Area();
        }
        public class Rectangle : Shape
        {
            public double height;
            public double width;
            public Rectangle(double Height, double Width)
            {
                height = Height;
                width = Width;
            }
            public override double Area()
            {
                int area = height * width;
                return area;
            }
        };
        public class Circle : Shape
        {
            public double radius;
            public override double Area()
            {
                int area = radius * radius * Math.PI;
                return area;
            }
        };
    }

}
namespace Autodealer
{
    public static void Main(strings[] args)
    {
        Dealership dealership = new Dealership();
        Automobile car = new Automobile("Chevy", "K-Car", 1985, 275578, 65, "rust", 132.23);
        dealership.AddAutomobile(car);
        Console.WriteLine(dealership);
        dealership.RemoveAutomobile(car);
        Console.WriteLine(dealership);

    }
    public class Automobile
    {
        private string make;
        private string model;
        private int year;
        private int mileage;
        private int topSpeed;
        private string color;
        private double price;
    }
    public class Dealership
    {
        List<Automobile> automobiles;
        public Dealership()
        {
            automobiles = new List<Automobile>();
        }
        public void AddAutomobile(Automobile automobile)
        {
            automobile.Add(automobile);
        }
        public void RemoveAutomobile(Automobile automobile)
        {
            automobile.Remove(automobile);
        }
    }
}
namespace CapitalizeLetter
{
    //return the first letter capitilized for every word in a pharse 
    public static void Main(strings[] args)
    {
        CapitalizeLetter capitalizeLetter = new CapitalizeLetter();
        capitalizeLetter.CapFirstLetterEachWord("hellow world mic check one two");
    }
    public string CapFirstLetterEachWord(string word)
    {
        string newWord = "";
        newWord += word[0].ToString().ToUpper();
        for (int i = 1; i < word.Length; i++)
        {
            if (word[i] == ' ')
            {
                newWord += ' ';
                newWord += word[i + 1].ToString().ToUpper();
                i++;
            }
            else
            {
                newWord += word[i].ToString();
            }
            return newWord;
        }
    }

}
namespace nextQuestion
{
    //
    public static void Main(strings[] args) { }

}
namespace nextQuestion
{
    //
    public static void Main(strings[] args) { }

}

//lucky number 8, our lucky number is 8. return true if a or b = 8, return true if a + b = 8 true, and return true if subtracted =8 true 
namespace Lucky
{
    public static void Main(strings[] args)
    {
        Lucky lucky = new Lucky();
        lucky.isNumberLucky(13);
        lucky.isNumberLucky(2, 6);
        lucky.isNumberLucky(8, 0);
    }
    public isNumberLucky(int a, int b)
    {
        int c = a + b;
        int d = a - b;
        int e = b - c;
        if (a == 8 || b == 8 || c == 8 || d == 8 || e == 8)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
//convert temp c to f
namespace CtoF
{
    public static void Main(strings[] args)
    {
        double c = 30;
        double f = CtoF.ConvertCtoF(c);
        Console.WriteLine(" C temp = {0} , F temp = {0}", c, f);
    }
    public static double ConvertCtoF(double c)
    {
        double f = (c * 9 / 5) + 32;
        return f;
    }
}