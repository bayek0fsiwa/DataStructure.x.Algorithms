character = input('Enter The Character: ').lower()

if(
       character == 'a' 
    or character == 'e' 
    or character == 'i' 
    or character == 'o' 
    or character == 'u'
    ):
    print(f"{character} is a vowel")
else:
    print(f"{character} is a consonant")