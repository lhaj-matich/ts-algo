function checkPalindrome(inputString: string): boolean {
    if (inputString === inputString.split("").reverse().join(""))
        return true;
    return false;
}
