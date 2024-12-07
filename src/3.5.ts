{
    // Access modifiers
    class BankAccount {
        readonly id: number;
        public name: string;
        private _balance: number;
        protected address: string;

        constructor(id: number, name: string, balance:number, address: string){
            this.id = id;
            this.name = name;
            this._balance = balance;
            this.address = address;
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance
        }
    }

    const goribAccount = new BankAccount(111, 'Gorid', 20, 'adamjee');
    goribAccount.addDeposit(20);

    console.log(goribAccount.getBalance());

    class Student extends BankAccount {
        test(){
            this.id;
            this.address;
        }
    }

    //
}