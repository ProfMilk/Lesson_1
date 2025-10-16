   //Lab 1
   class Car{
    constructor(make,model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
   }
   getDescription(){
    return this.year+" "+this.make+" "+ this.model;
   }
}

const car1 = new Car("Toyota", "Camry", 2021);
console.log(car1.getDescription());

//Lab 2
class BankAccount{
    constructor(owner,balance) {
        this.owner = owner;
        this.balance = balance;
   }

   deposit(amount){
    this.balance+=amount
   }

   withdraw(amount){
    this.balance-=amount
   }

   getBalance(){
    return"Balance: $"+this.balance
   }
}

const acc = new BankAccount("Alex", 100);
acc.deposit(50);
acc.withdraw(30);
console.log(acc.getBalance());

// Lab 4
class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  }
  
  const library = [
    new Book("1984", "George Orwell", 328),
    new Book("The Hobbit", "J.R.R. Tolkien", 310),
    new Book("Dune", "Frank Herbert", 412)
  ];
  
 
  function listBooks(books) {
    books.forEach(book => {
      console.log(book.title + " by " + book.author);
    });
  }
  
  
  function getShortBooks(books) {
    return books.filter(book => book.pages < 350);
  }
  
 
  listBooks(library);

  
  console.log(getShortBooks(library));
  
//Lab 5
class User {
    #password;
  
    constructor(username) {
      this.username = username;
    }
  
    setPassword(p) {
      if (p.length < 6) {
        console.log("Password must be at least 6 characters long.");
        return;
      }
      this.#password = p;
      console.log("Password set successfully.");
    }
  
 
    checkPassword(p) {
      if (p === this.#password) {
        return "Access granted";
      } else {
        return "Access denied";
      }
    }
  }
  

  const u1 = new User("azahar");
  u1.setPassword("abc123");
  console.log(u1.checkPassword("abc123")); 
  console.log(u1.checkPassword("wrong"));  
  
  // Extension test
  const u2 = new User("testUser");
  u2.setPassword("123");