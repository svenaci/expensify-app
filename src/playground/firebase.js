// database.ref("expenses").push({
//   description: "Gum",
//   note: "",
//   amount: 195,
//   createdAt: 0,
// });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "payment for the rent",
//   amount: 109500,
//   createdAt: 2342342342,
// });

// database.ref("expenses").push({
//   description: "Credit Card",
//   note: "",
//   amount: 4500,
//   createdAt: 745533,
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });
