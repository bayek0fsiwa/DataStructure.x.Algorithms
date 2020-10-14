keywords = {"break", "case", "continue", "default", "defer", "else", "for", 
"func", "goto", "if", "map", "range", "return", "struct", "type", "elif", "else"
}

getkeyword = input('Enter the word: ')

if getkeyword in keywords:
    print(f"{getkeyword} is a keyword")
else:
    print(f"{getkeyword} is not a keyword")