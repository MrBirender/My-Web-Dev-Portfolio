//creating a constructor function:
function BankAccount(accountNO, name, type, balance){
    this.accountNo = accountNO;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true
  }

  function hai(){
    console.log("hai")
    obj = {}
    obj.name = "sachin"
    obj.deposit = function(){

    }

  }
  
  // creating methods using prototype fucntion of constructor:
  BankAccount.prototype.deposit = function(amount){
    if(amount > 0){
      this.balance += amount;
      console.log(`Your account having no. ${this.accountNo} is credited with $${amount}.`)
    }
    else{
      console.log("Please enter a valid amount.")
    }
  }
  
  //withdraw method:
  BankAccount.prototype.withdraw = function(amount){
    if(amount => this.balance && amount > 0){
       this.balance -= amount;
       console.log(`Your account having no ${this.accountNo} is debited with $${amount}.`)
    }
    else{
      console.log('Your account does not have sufficent balance!')
    }
  }
  
  //check balance:
  BankAccount.prototype.checkbalance = function(){
    console.log(`Your account has a total of $${this.balance}.`)
  }
  
  // checking is active or not:
  BankAccount.prototype.isActive = function(){
    return this.active
  }
  
  const account1 = new BankAccount(530810100003435, "Birender", "savings", 2500);
  const account2 = new BankAccount(530810100003435, "Maya", "Current", 10000);
  const account3 = new BankAccount(530810100003435, "Kavita", "savings", 5500);
  const account4 = new BankAccount(991239813, "Sachin", "savings", 1500)

  
//   account1.checkbalance()
//   account2.deposit(300)
//   account3.withdraw(1000)
  
//   account4.withdraw(500)
 
//   account4.deposit()
//   account4.checkbalance()
  
  
  function getTotalBalance(accounts){
    let totalBalance = 0;
    for(let account of accounts ){
        if(account.isActive()){
          totalBalance += account.balance;
        }
    }
    return totalBalance
  }
  
  const accounts = [account1, account2, account3, account4]
  const totalBalance = getTotalBalance(accounts)
  console.log(`Bank has total capital of $${totalBalance}.`)
  
//   account1.isActive()