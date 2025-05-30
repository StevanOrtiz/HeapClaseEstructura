function insertRandomTasksToHeap(heap, n, max = 10) {
  console.log(`Insertando ${n} tareas aleatorias en el heap:\n`);

  for (let i = 0; i < n; i++) {
    const priority = Math.floor(Math.random() * max) + 1;
    const name = `Tarea ${i + 1}`;
    console.log(`Insertando: ${name} con prioridad ${priority}`);
    heap.insert({ name, priority });
  }

  console.log("\n ---- Representación del heap: ----");
  heap.printHeapPretty();

  console.log("\n ---- Heap como arreglo: ----");
  heap.printHeap();

  console.log("\n ---- Extraer mínimo: ----");
  console.log("Min:", heap.extractMin());

  console.log("\n ---- Heap después de extraer mínimo: ----");
  heap.printHeap();
}
