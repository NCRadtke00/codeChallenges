using System;

public class Program
{
    public static void Main()
    {
        int[] nums = new int[] { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 }; // Sorted Input array
        int[] expectedNums = new int[] { 0, 1, 2, 3, 4, 2, 2, 3, 3, 4 }; // The expected answer with correct length

        int k = removeDuplicates(nums);
        Console.WriteLine(string.Join(",", nums));
    }
    private static int removeDuplicates(int[] nums)
    {
        int[] temp = new int[nums.Length]; // temp array that contains the expected length
        int j = 0; // to store index of the next unique value
                   //loop through the array

        return 0;
    }
}