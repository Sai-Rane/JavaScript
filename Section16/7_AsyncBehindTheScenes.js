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




*/
