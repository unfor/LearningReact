var obj = { 
    age: 18, 
    foo: function (func) { 
      func()
      console.log(arguments)
      arguments[0]()
    }
  } 
  var age = 10;
  function temp () {
    console.log(this.age)
  }
  obj.foo(temp)