const MinHeap = require("../src/MinHeap");

function insertarTareasAleatorias(heap, n, max = 10) {
  for (let i = 0; i < n; i++) {
    const prioridad = Math.floor(Math.random() * max) + 1;
    heap.insertar({ name: `Tarea ${i + 1}`, priority: prioridad });
  }
}

const heap = new MinHeap();
insertarTareasAleatorias(heap, 5);
heap.imprimirBonito();
