{
    // Getter and Setter

    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // =========== setter =======
        // addDeposit(amount: number){
        //     this._balance = this._balance + amount;
        // }

        set deposit(amount: number){
            this._balance = this._balance + amount
        }

        // ===== Getter ========
        // getBalance(){
        //     return this._balance
        // }

        get balance(){
            return this._balance
        }
    }

    const goribAccount = new BankAccount(111, 'Gorid', 20);

        // =========== setter =======
    // goribAccount.addDeposit(20);
    goribAccount.deposit = 30;

        // ===== Getter ========
    // console.log(goribAccount.getBalance());
    console.log(goribAccount.balance);

    class Student extends BankAccount {
        test(){
            this.id;
            this._balance
        }
    }


    //
}