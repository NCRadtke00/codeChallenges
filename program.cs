using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//FizzBuzz
//Write a short program that prints each number from 1 to 100 on a new line. For each multiple of 3, print "Fizz" instead of the number. For each multiple of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
// class Solutions
// {
//     static void FizzBuzz(String[] args)
//     {

//         for (int i = 1; i <= 100; i++)
//         {

//             string result = (i % 3 == 0 && i % 5 == 0) ? "FizzBuzz" : (i % 5 == 0) ? "Buzz" :
//                        (i % 3 == 0) ? "Fizz" : i.ToString();
//             Console.WriteLine(result);
//         }

//     }
// }

//multiply two numbers and return product
namespace Sandbox
{
    class Porgram
    {
        static void Main(string[] args)
        {
            MethodPractice practice = new MethodPractice();
            // //multiply two numbers and return product

            // int result = practice.MultiplyTwoNumbers(5, 10);
            // string statement = "Xamerin is an excellent example of a mobile technology.";
            // practice.CountLettersX(statement);
            // practice.CheckAge(15);
            practice.CSharpChallengeQuestion("would you like another problem to solve?");
            practice.EvenOrOddNum(88);
        }
    }
    class Sandbox
    {
        // //multiply two numbers and return product
        // public int MultiplyTwoNumbers(int firstNumber, int secondNumber)
        // {
        //     int firstNumber = 10;
        //     int secondNumber = 20;
        //     int result = firstNumber * secondNumber;
        //     return result;
        // }
        // //Create method to count the letter 'x' in a sentence and print the result
        // //"Xamerin is an excellent example of a mobile technology."
        // public void CountLettersX(string phrase)
        // {
        //     int xCounter = 0;
        //     for (int i = 0; i < phrase.Length; i++)
        //     {
        //         if (phrase[i] == 'X' || phrase[i] == 'x')
        //         {
        //             xCounter++;
        //         }
        //     }
        //     Console.WriteLine(xCounter);
        // }

        // public void CheckAge(int age)
        // {

        //     //Check to see if user can legally drive
        //     int userAge;
        //     int legalDrivingAge = 16;
        //     if (age > 0)
        //     {
        //         age = userAge;
        //     }
        //     else
        //     {
        //         Console.WriteLine("Please enter your age:");
        //         string userIntput = Console.ReadLine();
        //         userAge = Int32.Parse(userIntput);
        //         if (userAge <= legalDrivingAge)
        //         {
        //             Console.WriteLine("You are the legal age to drive, Buckle Up BuckARoo!");
        //         }
        //         else
        //         {
        //             Console.WriteLine("You are too young to drive buckaroo!");
        //         }
        //     }

        // }
        public void CSharpChallengeQuestion(string question) { Console.WriteLine(question); }
        public void EvenOrOddNum(int num)
        {
            for (int i = 0; i < 100; i++)
            {
                if (i % 2 == 0)
                {
                    Console.WriteLine(i + "is an even number,.");
                }
                else
                {
                    Console.WriteLine(i + "is an odd number.");
                }
            }
        }
    }
}

//multiply two numbers and return product