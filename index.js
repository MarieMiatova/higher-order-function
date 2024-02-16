// Задание 1.

const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
names.forEach(name => {
  console.log(`Привет, ${name}`);
});

// Задание 2.

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map(number => number * 10);
console.log(newNumbers); // [10, 20, 30, 40, 50]

// Задание 3.

const numbersOfArray = [5, 12, 8, 130, 44];
const newNumbersOfArray = numbersOfArray.filter(number => number > 10);
console.log(newNumbersOfArray); // [12, 130, 44]

// Задание 4.

const people = [
    { name: 'Иван', age: 23 },
    { name: 'Мария', age: 18 },
    { name: 'Алексей', age: 32 },
    { name: 'Ольга', age: 24 },
    { name: 'Сергей', age: 17 },
    { name: 'Анна', age: 21 }
  ];
  
  const adultPeople = people
    .filter(person => person.age > 18)
    .map(person => `${person.name} (${person.age} лет)`);
  
  console.log(adultPeople); // ['Иван (23 лет)', 'Алексей (32 лет)', 'Ольга (24 лет)', 'Анна (21 лет)']

  // Задание 5.

  const sales = [
    { product: 'Телефон', price: 50000, quantity: 1 },
    { product: 'Чехол', price: 1500, quantity: 2 },
    { product: 'Зарядное устройство', price: 2500, quantity: 1 }
  ];
  
  const totalSales = sales.reduce((total, sale) => {
    return total + (sale.price * sale.quantity);
  }, 0);
  
  console.log(`Общая стоимость продаж: ${totalSales}`);

  
