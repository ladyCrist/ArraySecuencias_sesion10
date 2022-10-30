function SecuenciaArray() {
  let limiteSec = 8;

  //
  let array1 = [];
  let array2 = [];
  let array3 = [];
  let array4 = [];

  //
  console.log("MODELO 1010");
  for (let i = 0; i < limiteSec; i++) {
    //Secuencia 1
    if (i % 2 == 0) {
      array1.push("1");
    } else {
      array1.push("0");
    }
  }
  console.log(array1);

  //
  console.log("");
  console.log("MODELO -11-11");
  for (let i = 0; i < limiteSec; i++) {
    //Secuencia 2
    if (i % 2 == 0) {
      array2.push("-1");
    } else {
      array2.push("1");
    }
  }
  console.log(array2);

  //
  console.log("");
  console.log("MODELO 12-1-2");
  for (let i = 1; i <= limiteSec; i++) {
    //Secuencia 3
    if (i % 4 == 1) {
      array3.push("1");
    } else if (i % 4 == 2) {
      array3.push("2");
    } else if (i % 4 == 3) {
      array3.push("-1");
    } else if (i % 4 == 0) {
      array3.push("-2");
    }
  }
  console.log(array3);

  //
  console.log("");
  console.log("MODELO 345");
  for (let i = 1; i <= limiteSec; i++) {
    if (i % 3 == 1) {
      array4.push("3");
    }
    if (i % 3 == 2) {
      array4.push("4");
    }
    if (i % 3 == 0) {
      array4.push("5");
    }
  }
  console.log(array4);
}
