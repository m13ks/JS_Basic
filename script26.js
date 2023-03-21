function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.increment = function() {
        this.value++;
    };
  
    this.decrement = function() {
        this.value--;
    };
}
  
function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
  
    this.clear = function() {
        this.value = startingValue;
    };
}
  
  
CancelableAccumulator.prototype = Object.create(Accumulator.prototype);s