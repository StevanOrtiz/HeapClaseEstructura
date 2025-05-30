class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(task) {
    this.heap.push(task);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }

    return min;
  }

  heapifyUp(index) {
    let currentIndex = index;
    const current = this.heap[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parent = this.heap[parentIndex];

      if (current.priority >= parent.priority) break;

      // Swap
      this.heap[currentIndex] = parent;
      this.heap[parentIndex] = current;
      currentIndex = parentIndex;
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    const length = this.heap.length;
    const current = this.heap[currentIndex];

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let smallest = currentIndex;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex].priority < this.heap[smallest].priority
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex].priority < this.heap[smallest].priority
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === currentIndex) break;

      // Swap
      [this.heap[currentIndex], this.heap[smallest]] = [this.heap[smallest], this.heap[currentIndex]];
      currentIndex = smallest;
    }
  }

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
}
