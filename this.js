// const sasha = {
//     nombre: 'Sasha',
//     saludar: function () {
//         console.log(`Hola, me llamo ${this.nombre}!`);
//     }
//   };

// sasha.saludar();


// //const saludar = harry.saludar;
// //saludar();

// // const boton = document.getElementaryById('miBoton');
// // boton.addEventListener('click', harry.saludar);

//  //Default Binding(Invocación Directa)
//  function quienSoy() {
//    console.log(`Hola, yo soy:`, window);
// }

// quienSoy();

// //Enlazamiento implícito (implicit binding)
// //Se produce cuando invocamos al método de un objeto.
// // const sacha = {
// //     nombre: "sacha",
// //     saludar: function() {
// //         console.log(`Hola, me llamo ${this.nombre}!`);
// //     },
// // hermano: {
// //     nombre: "Eric",
// //     saludar: function () {
// //         console.log(`Yo, el hermano, me llamo ${this.nombre}`);
// //     },
// //   },
// // };

// // sacha.saludar();
// // sacha.hermano.saludar();

const sacha = {
    nombre: 'Sacha',
    twitter: '@Sachalifs',
    saludar: function () {
        function seguimeEnTwitter() {
            console.log(`Seguime en Twitter: ${this.twitter}`);
    }



  console.log(`Hola, me llamo ${this.nombre}!`);
  seguimeEnTwitter();
 }
};


