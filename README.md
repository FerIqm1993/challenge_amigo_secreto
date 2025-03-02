<h1>Challenge "Amigo Secreto" de Alura</h1>
<p>Bienvenido a mi solución del challenge de Alura de la primera Fase de programa Alura: Lógica de Programación
<h2>Objetivo</h2>
<p>Mostrar el dominio de los fundamentos básicos de lógica de programación usando JS.</p>

  <p>Este código permite gestionar el proceso de añadir amigos a una lista y sortear un ganador aleatorio para un juego de "Amigo Secreto". A continuación, se detalla el funcionamiento de cada parte:</p>
    <h2>1. Agregar Amigos</h2>
    <p>Se utiliza una función <code>verificarNombre()</code> para verificar que el nombre ingresado no esté vacío, no contenga números y no haya sido agregado previamente a la lista. Si el nombre es válido, se llama a la función <code>agregarAmigo()</code> para agregarlo a un array <code>listadoAmigos</code> y mostrarlo en una lista de la interfaz.</p>
    
  <h3>Detalles de <code>verificarNombre()</code>:</h3>
    <ul>
        <li>Elimina espacios al principio y final del nombre.</li>
        <li>Verifica si el nombre contiene números o está vacío.</li>
        <li>Verifica si el amigo ya está en la lista.</li>
    </ul>

  <h3>Detalles de <code>agregarAmigo()</code>:</h3>
    <ul>
        <li>Añade el nombre al array <code>listadoAmigos</code>.</li>
        <li>Crea un nuevo elemento <code>&lt;li&gt;</code> en el HTML para mostrar el nombre en una lista.</li>
        <li>Limpia el campo de entrada de nombre después de agregarlo.</li>
    </ul>

  <h2>2. Sorteo del Ganador</h2>
    <p>La función <code>sortearAmigo()</code> permite seleccionar un ganador aleatorio de la lista de amigos. Esta función:</p>
    <ul>
        <li>Verifica que haya al menos un amigo en la lista.</li>
        <li>Selecciona un índice aleatorio dentro de la lista de amigos usando <code>Math.random()</code> y <code>Math.floor()</code>.</li>
        <li>Llama a la función <code>mostrarResultado()</code> para mostrar el ganador.</li>
    </ul>
    
  <h2>3. Mostrar el Resultado</h2>
    <p>La función <code>mostrarResultado()</code> toma el ganador y lo muestra en una lista de resultados. Esta función:</p>
    <ul>
        <li>Limpia cualquier resultado previo en la lista de resultados.</li>
        <li>Muestra el nombre del ganador en un nuevo elemento <code>&lt;li&gt;</code>.</li>
    </ul>

   <h2>Flujo Completo</h2>
    <p>El flujo del código es el siguiente:</p>
    <ol>
        <li>El usuario ingresa un nombre y lo agrega a la lista mediante el botón "Añadir".</li>
        <li>Si el nombre es válido y no se ha añadido antes, el nombre aparece en la lista de amigos.</li>
        <li>Al hacer clic en el botón "Sortear", se elige un ganador aleatorio y se muestra en la sección de resultados.</li>
    </ol>
