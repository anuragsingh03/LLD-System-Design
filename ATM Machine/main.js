/**
 * Main.js — equivalent of Java main()
 * Demonstrates all ATM flows:
 *  1. Normal happy flow — insert card, correct PIN, withdraw
 *  2. Wrong PIN flow
 *  3. Insufficient balance flow
 *  4. Eject without withdrawal
 *  5. NoCash state
 */
const ATM     = require('./ATM');
const Card    = require('./model/Card');
const Account = require('./model/Account');

const separator = (title) => {
  console.log(`\n${'─'.repeat(45)}`);
  console.log(` ${title}`);
  console.log('─'.repeat(45));
};

// ── Setup ATM with Rs.5000 cash ──────────────────────────────────────────
const atm = new ATM(5000);

// ── Setup accounts ───────────────────────────────────────────────────────
const card1    = new Card('4111-1111-1111-1111');
const account1 = new Account('ACC-001', '1234', 2000);

const card2    = new Card('4222-2222-2222-2222');
const account2 = new Account('ACC-002', '9999', 500);

// ════════════════════════════════════════════
separator('FLOW 1: Happy path — correct PIN + withdrawal');
// ════════════════════════════════════════════
console.log(`ATM State: ${atm.getATMState()}`);

atm.insertCard(card1);
console.log(`ATM State: ${atm.getATMState()}`);

atm.authenticatePIN(account1, '1234');   // correct PIN
console.log(`ATM State: ${atm.getATMState()}`);

atm.withdraw(account1, 1000);
console.log(`ATM State: ${atm.getATMState()}`);


// ════════════════════════════════════════════
separator('FLOW 2: Wrong PIN — card gets ejected');
// ════════════════════════════════════════════
atm.insertCard(card1);
atm.authenticatePIN(account1, '0000');   // wrong PIN
console.log(`ATM State: ${atm.getATMState()}`);


// ════════════════════════════════════════════
separator('FLOW 3: Insufficient account balance');
// ════════════════════════════════════════════
atm.insertCard(card2);
atm.authenticatePIN(account2, '9999');
atm.withdraw(account2, 2000);            // account only has Rs.500
console.log(`ATM State: ${atm.getATMState()}`);
atm.ejectCard();


// ════════════════════════════════════════════
separator('FLOW 4: Eject card without withdrawal');
// ════════════════════════════════════════════
atm.insertCard(card1);
atm.authenticatePIN(account1, '1234');
atm.ejectCard();
console.log(`ATM State: ${atm.getATMState()}`);


// ════════════════════════════════════════════
separator('FLOW 5: ATM runs out of cash — NoCashState');
// ════════════════════════════════════════════
// Drain the ATM (Rs.4000 remaining after flow 1 withdrew Rs.1000)
atm.insertCard(card1);
atm.authenticatePIN(account1, '1234');
atm.withdraw(account1, 1000);           // account1 now has Rs.0 left... let's use card2 to drain ATM

const bigCard    = new Card('4333-3333-3333-3333');
const bigAccount = new Account('ACC-003', '5678', 99999);

atm.insertCard(bigCard);
atm.authenticatePIN(bigAccount, '5678');
atm.withdraw(bigAccount, 3000);         // drains ATM to Rs.0 (ATM had Rs.4000, withdrew Rs.1000 + Rs.3000)
console.log(`ATM State: ${atm.getATMState()}`);

atm.insertCard(card2);                  // should be blocked