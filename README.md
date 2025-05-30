HeapClase
Integrantes: Stevan Ortiz 408902 Correo institucional luis.ortiz03@unicatolica.edu.co Breve descripción de la solución: Esta implementa la estructura de datos minheap para gestionar una cola de tareas con prioridad, donde la mas baja representa mayor urgencia. Cada tarea es un objeto con un nombre y una prioridad. donde se puede: Insertar nuevas tareas en el heap (insert). Extraer la tarea más urgente (extractMin). Visualizar el estado actual del heap (printHeap y printHeapPretty). Se incluye una función adicional insertRandomTasksToHeap para insertar tareas aleatorias y simular su ejecución.

Instrucciones de ejecución Abre una terminal. Navega al directorio donde guardaste el archivo. Ejecuta el programa con el siguiente comando:

node nombrearchivo.js Resultado esperado: Verás mensajes en consola mostrando cómo se insertan tareas con prioridad.
const heap = new MinHeap(); insertRandomTasksToHeap(heap, 5);
