// understanding callback


// function Processname(name, callback){
//     callback(name);
// }
// Processname('anurag', function printName(name){
//     console.log(name);
// });

// function getUser(id, callback) {
//   console.log("⏳ Fetching user...");
//   setTimeout(() => {
//     const user = { id: id, name: "Alice", email: "alice@gmail.com" };
//     callback(null, user); // null = no error
//   }, 1000);
// }

// function getOrders(userId, callback) {
//   console.log("⏳ Fetching orders...");
//   setTimeout(() => {
//     const orders = [
//       { id: 101, userId: userId, item: "Laptop" },
//       { id: 102, userId: userId, item: "Mouse" },
//     ];
//     callback(null, orders);
//   }, 1000);
// }

// function getPayment(orderId, callback) {
//   console.log("⏳ Fetching payment...");
//   setTimeout(() => {
//     const payment = { id: 201, orderId: orderId, amount: 999, status: "paid" };
//     callback(null, payment);
//   }, 1000);
// }

// function sendEmail(email, callback) {
//   console.log("⏳ Sending email...");
//   setTimeout(() => {
//     const response = { success: true, message: `Email sent to ${email}` };
//     callback(null, response);
//   }, 1000);
// }

// function logActivity(userId, callback) {
//   console.log("⏳ Logging activity...");
//   setTimeout(() => {
//     const log = { userId: userId, action: "order processed", time: new Date() };
//     callback(null, log);
//   }, 1000);
// }


// getUser(1, function (err, user) {
//   if (err) {
//     console.error("❌ Error fetching user:", err);
//   } else {
//     console.log("✅ Got user:", user);

//     getOrders(user.id, function (err, orders) {
//       if (err) {
//         console.error("❌ Error fetching orders:", err);
//       } else {
//         console.log("✅ Got orders:", orders);

//         getPayment(orders[0].id, function (err, payment) {
//           if (err) {
//             console.error("❌ Error fetching payment:", err);
//           } else {
//             console.log("✅ Got payment:", payment);

//             sendEmail(user.email, function (err, response) {
//               if (err) {
//                 console.error("❌ Error sending email:", err);
//               } else {
//                 console.log("✅ Email sent:", response);

//                 logActivity(user.id, function (err, log) {
//                   if (err) {
//                     console.error("❌ Error logging:", err);
//                   } else {
//                     console.log("✅ Activity logged:", log);
//                     console.log("🎉 All done! (Callback Hell version)");
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });


// ============================================
// WRAP THE SAME FUNCTIONS WITH PROMISES
// ============================================

function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Fetching user...");
    setTimeout(() => {
      const user = { id: id, name: "Alice", email: "alice@gmail.com" };
      resolve(user); // success
      // reject(new Error("User not found")); // ← how you'd send an error
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Fetching orders...");
    setTimeout(() => {
      const orders = [
        { id: 101, userId: userId, item: "Laptop" },
        { id: 102, userId: userId, item: "Mouse" },
      ];
      resolve(orders);
    }, 1000);
  });
}

function getPayment(orderId) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Fetching payment...");
    setTimeout(() => {
      const payment = { id: 201, orderId: orderId, amount: 999, status: "paid" };
      resolve(payment);
    }, 1000);
  });
}

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Sending email...");
    setTimeout(() => {
      const response = { success: true, message: `Email sent to ${email}` };
      resolve(response);
    }, 1000);
  });
}

function logActivity(userId) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Logging activity...");
    setTimeout(() => {
      const log = { userId: userId, action: "order processed", time: new Date() };
      resolve(log);
    }, 1000);
  });
}


// ============================================
// CALLING WITH PROMISE CHAIN
// ============================================

// let savedUser; // to share user across the chain

// getUser(1)
//   .then((user) => {
//     console.log("✅ Got user:", user);
//     savedUser = user;
//     return getOrders(user.id);
//   })
//   .then((orders) => {
//     console.log("✅ Got orders:", orders);
//     return getPayment(orders[0].id);
//   })
//   .then((payment) => {
//     console.log("✅ Got payment:", payment);
//     return sendEmail(savedUser.email);
//   })
//   .then((response) => {
//     console.log("✅ Email sent:", response);
//     return logActivity(savedUser.id);
//   })
//   .then((log) => {
//     console.log("✅ Activity logged:", log);
//     console.log("🎉 All done! (Promise version)");
//   })
//   .catch((err) => {
//     console.error("❌ Something went wrong:", err); // ONE place for all errors
//   });


  //using async await 
  // (Use the same Promise-based implementations from Version 2 above)

(async function() {
  try {
    const user    = await getUser(1);
    console.log("✅ Got user:", user);

    const orders  = await getOrders(user.id);
    console.log("✅ Got orders:", orders);

    const payment = await getPayment(orders[0].id);
    console.log("✅ Got payment:", payment);

    const emailRes = await sendEmail(user.email);
    console.log("✅ Email sent:", emailRes);

    const log     = await logActivity(user.id);
    console.log("✅ Activity logged:", log);

    console.log("🎉 All done! (Async/Await version)");

  } catch (err) {
    console.error("❌ Something went wrong:", err); // ONE catch for everything
  }
}()); // calling the function