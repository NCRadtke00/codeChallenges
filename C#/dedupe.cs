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

        //second solution without 2nd array
        int j = 0; // store index of next value
        for (int i = 0; i < nums.Length - 1; i++)
        {
            if (nums[i] != nums[i + 1])
            {
                nums[j++] = nums[i];
            }
        }
        nums[j++] = nums[nums.Length - 1];
        return j;

        // first solution 
        // int[] temp = new int[nums.Length]; // temp array that contains the expected length
        // int j = 0; // to store index of the next unique value
        //            //loop through the array
        // for (int i = 0; i < nums.Length - 1; i++)
        // {
        //     //if the current value of i is not equal to the next value, store i
        //     if (nums[i] != nums[i + 1])
        //     {
        //         temp[j++] = nums[i];
        //     }
        // }
        // //store the last value regardless 
        // temp[j++] = nums[nums.Length - 1];
        // //"fix" original arr nums
        // for (int i = 0; i < j; i++)
        // {
        //     nums[i] = temp[i];
        // }
        // return j;
    }
}