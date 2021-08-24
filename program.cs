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
            // //multiply two numbers and return product
            MethodPractice practice = new MethodPractice();
            // int result = practice.MultiplyTwoNumbers(5, 10);
            string statement = "Xamerin is an excellent example of a mobile technology.";
            practice.CountLettersX(statement);
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
    }
}

//multiply two numbers and return product