class MinHeap {
  constructor() {
    this.heap = [];
  }

  insertar(tarea) {
    this.heap.push(tarea);
    this.reorganizarArriba(this.heap.length - 1);
  }

  extraerMinimo() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const fin = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = fin;
      this.reorganizarAbajo(0);
    }
    return min;
  }

  reorganizarArriba(indice) {
    while (indice > 0) {
      const padre = Math.floor((indice - 1) / 2);
      if (this.heap[indice].priority >= this.heap[padre].priority) break;
      [this.heap[indice], this.heap[padre]] = [this.heap[padre], this.heap[indice]];
      indice = padre;
    }
  }

  reorganizarAbajo(indice) {
    const tamaño = this.heap.length;
    while (true) {
      const izquierda = 2 * indice + 1;
      const derecha = 2 * indice + 2;
      let menor = indice;

      if (izquierda < tamaño && this.heap[izquierda].priority < this.heap[menor].priority) {
        menor = izquierda;
      }

      if (derecha < tamaño && this.heap[derecha].priority < this.heap[menor].priority) {
        menor = derecha;
      }

      if (menor === indice) break;

      [this.heap[indice], this.heap[menor]] = [this.heap[menor], this.heap[indice]];
      indice = menor;
    }
  }

  imprimirHeap() {
    console.log(this.heap.map(t => `(${t.name}, P:${t.priority})`).join(", "));
  }

  imprimirBonito() {
    console.log("Heap por niveles:");
    let nivel = 0, cantidad = 1, indice = 0;
    while (indice < this.heap.length) {
      let nivelLine = "";
      for (let i = 0; i < cantidad && indice < this.heap.length; i++) {
        const tarea = this.heap[indice++];
        nivelLine += `(${tarea.name}, P:${tarea.priority}) `;
      }
      console.log(`Nivel ${nivel++}: ${nivelLine}`);
      cantidad *= 2;
    }
  }
}

module.exports = MinHeap;
