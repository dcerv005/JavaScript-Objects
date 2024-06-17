// Task 1
function Account(accountNumber, balance, owner){
    this.accountNumber=accountNumber;
    this.balance=balance;
    this.owner=owner;
// Task 2
    this.deposit=function(amount){
        this.balance+=amount;
        console.log("New balance is: "+this.balance);
        return this.balance;
    }
    this.withdraw=function(amount){
        if (amount <= this.balance){
            this.balance-=amount;
            
            console.log("Available balance: "+ this.balance)
            return this.balance;
        } else{
            console.log("Not enough funds in balance")
        }
    }


}
//Task 3
function compoundInterest(account, rate=.05){
    balance=account.balance * (1+rate/12) //12 months
    console.log("New balance after one month: "+balance.toFixed(2))
} 

let account1=new Account(1, 500, "David");
account1.deposit(200);
account1.withdraw(750);
compoundInterest(account1);