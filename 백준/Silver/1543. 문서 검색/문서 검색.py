str = input()
replace_str = input()

replaced_str = str.replace(replace_str,'')
print((len(str)-len(replaced_str))//len(replace_str))