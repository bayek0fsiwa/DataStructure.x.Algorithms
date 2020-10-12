def palindrome(str):
    pal = str[::-1]
    if pal == str:
        print("it's a palindrome")
    else:
        print("Not a palindrome")

palindrome('oppo')