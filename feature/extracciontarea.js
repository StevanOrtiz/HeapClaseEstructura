insert(task) {
  this.heap.push(task);
  this.heapifyUp(this.heap.length - 1);
}

heapifyUp(index) {
  let currentIndex = index;
  const current = this.heap[currentIndex];

  while (currentIndex > 0) {
    const parentIndex = Math.floor((currentIndex - 1) / 2);
    const parent = this.heap[parentIndex];

    if (current.priority >= parent.priority) break;

    this.heap[currentIndex] = parent;
    this.heap[parentIndex] = current;
    currentIndex = parentIndex;
  }
}
