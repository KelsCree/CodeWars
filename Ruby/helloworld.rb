#Return "Hello, name!" unless no name, then return "Hello, World!"

def hello(name)
    if name.length > 0
      new_name = name.capitalize
      return "Hello, #{new_name}!"
    else
      return 'Hello, World!'  
    end
 end