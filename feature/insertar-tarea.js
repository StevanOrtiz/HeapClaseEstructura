// Inserta una tarea y reorganiza hacia arriba
const MinHeap = require("../src/MinHeap");
const heap = new MinHeap();

heap.insertar({ name: "Tarea A", priority: 3 });
heap.insertar({ name: "Tarea B", priority: 1 });

heap.imprimirHeap();
