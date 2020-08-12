#Return "Hello, name!" unless no name, then return "Hello, World!"

def hello(name = 'World')
    if name.length > 0
      return "Hello, #{name.capitalize}!"
    else
      return "Hello, World!"
    end
  end