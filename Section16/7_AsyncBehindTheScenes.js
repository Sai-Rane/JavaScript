/*
JS runtime in the browser has 3 sections..namely JS Engine, WEB APIs and Callback Queue

The heart of every JS runtime is the JS engine.
JS engine comprises of 2 parts.Heap and Call Stack
Call stack is where code is executed and Heap is where objects are stored in memory

JS has only one thread of execution.Hence, multitasking is not possible

The Event loop has the extremely important task of doing coordination between the Call Stack(where the code is executed) and the callback in the Callback queue. The Event loop decides when each callback will be executed.

The Asynchronous tasks get executed in the WEB API environment

Microtasks Queue- A special place for all the callbacks coming from Promises.
Callbacks from all promises are stored in microtasks queue and send one by one into the Call Stack for Execution.
Microtasks Queue has highest priority than the Callback Queue

--------------------------------------------------------------------------------

https://www.youtube.com/watch?v=ByhtOgF6uYM

Execution Context
    Global Execution Context
    Function Execution Context

JS code executes in 2 phases
1st phase is the memory allocation phase where memory is allocated to all variables,functions
2nd phase is the Execution phase where operations are performed

Jitni baar bhi functions execute hote hai utni baar ek naya Execution Context ready hota hai





*/
let val1 = 10;
let val2 = 5;
function addNum(a, b) {
  let total = a + b;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
