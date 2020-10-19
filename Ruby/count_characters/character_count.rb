# The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

# What if the string is empty? Then the result should be empty object literal, {}.

def count_chars(s)
    hash = Hash.new(0)
    s.split('').map {|n| hash[n] += 1}
    return hash
    end