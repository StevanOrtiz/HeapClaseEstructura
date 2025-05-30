const MinHeap = require("../src/MinHeap");
const heap = new MinHeap();

heap.insertar({ name: "Tarea 1", priority: 5 });
heap.insertar({ name: "Tarea 2", priority: 2 });

heap.imprimirHeap();
heap.imprimirBonito();
