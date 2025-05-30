printHeap() {
  console.log(this.heap.map(task => `(${task.name}, P:${task.priority})`).join(", "));
}

printHeapPretty() {
  console.log("Tareas en el heap por nivel:");
  let level = 0;
  let itemsInLevel = 1;
  let index = 0;

  while (index < this.heap.length) {
    let levelTasks = "";
    for (let i = 0; i < itemsInLevel && index < this.heap.length; i++) {
      const task = this.heap[index];
      levelTasks += `(${task.name}, P:${task.priority}) `;
      index++;
    }
    console.log(`Nivel ${level}: ${levelTasks}`);
    level++;
    itemsInLevel *= 2;
  }
}
