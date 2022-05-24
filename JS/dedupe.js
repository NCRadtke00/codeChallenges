var arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // Sorted Input array
var expectedArr = [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]; // The expected answer with correct length

var k = removeDuplicates(arr);
Console.WriteLine(string.Join(",", arr));

function removeDuplicates(arr) {

    if (arr.length == 0 || arr.length == 1) {
        return arr.length;
    }
    // checking if the arr is empty or with 1 element
    var j = 0;
    //to store index of next unique element
    for (var i = 0; i < arr.length - 1; i++) {

        if (arr[i] != arr[i + 1]) {
            //check if i is not equal to next value
            arr[j++] = arr[i];
            //store value if i is unique
        }
        arr[j++] = arr[arr.length - 1];
    }
    return j;
};
