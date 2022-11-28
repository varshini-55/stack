function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.clear = clear;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
  }
  
  function push(element) {
    this.dataStore[this.top++] = element;
  }
  
  function peek() {
    return this.dataStore[this.top -1];
  }
  
  function pop() {
    return this.dataStore[--this.top];
  }
  
  function clear() {
    this.top = 0;
  }
  
  function length() {
    return this.top;
  }
  
  Stack.prototype.temporaryArray = [];
  Stack.prototype.temporaryTop = 0;
  Stack.prototype.pushInTemporaryArray = function(element) {
    this.temporaryArray[this.temporaryTop++] = element;
  };
  
  var s = new Stack();
  
  function fullArray(element) {
    
    element.forEach(function(item, i, arr){
      s.push(item);
    });  
  }
  
  function removeAllYellow(oldColor,newColor) {
    s.dataStore.forEach(function(item, i, arr) {
      if (item == oldColor) {
        s.pushInTemporaryArray(newColor);
      } else {
        s.pushInTemporaryArray(item);
      }
    });
    s.dataStore = s.temporaryArray;
  }
  
  
  fullArray(["blue","yellow","red","blue","yellow","red","blue","yellow","red"]);
  
  removeAllYellow("red","white");
  console.log(s.dataStore);