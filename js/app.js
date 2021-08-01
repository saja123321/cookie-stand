
let hours = ['7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
/////////////////////// Seattle
const seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  total: 0,
  hourlyCustomers: [],
  customersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.hourlyCustomers;
  },
  numOfCookies: [],
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
      this.total += this.numOfCookies[i];

    }
    return this.numOfCookies;
  },
  result: [],
  ressultFun: function () {
    for (let i = 0; i < hours.length; i++) {
      this.result[i] = hours[i] + ' : ' + this.numOfCookies[i] + ' cookies.';
    }
    return this.result;
  },

  render: function () {
    let divE = document.getElementById('d');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};
seattle.customersPerHour();
seattle.cookiesPerHour();
seattle.ressultFun();
seattle.render();

////////////////////// Tokyo	3	24	1.2


const tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  total: 0,
  hourlyCustomers: [],
  customersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.hourlyCustomers;
  },
  numOfCookies: [],
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
      this.total += this.numOfCookies[i];

    }
    return this.numOfCookies;
  },
  result: [],
  ressultFun: function () {
    for (let i = 0; i < hours.length; i++) {
      this.result[i] = hours[i] + ' : ' + this.numOfCookies[i] + ' cookies.';
    }
    return this.result;
  },

  render: function () {
    let divE = document.getElementById('d');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};
tokyo.customersPerHour();
tokyo.cookiesPerHour();
tokyo.ressultFun();
tokyo.render();


////////////////////// Dubai	11	38	3.7


const dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  total: 0,
  hourlyCustomers: [],
  customersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.hourlyCustomers;
  },
  numOfCookies: [],
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
      this.total += this.numOfCookies[i];

    }
    return this.numOfCookies;
  },
  result: [],
  ressultFun: function () {
    for (let i = 0; i < hours.length; i++) {
      this.result[i] = hours[i] + ' : ' + this.numOfCookies[i] + ' cookies.';
    }
    return this.result;
  },

  render: function () {
    let divE = document.getElementById('d');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};
dubai.customersPerHour();
dubai.cookiesPerHour();
dubai.ressultFun();
dubai.render();


////////////////////// Paris	20	38	2.3


const paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  total: 0,
  hourlyCustomers: [],
  customersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.hourlyCustomers;
  },
  numOfCookies: [],
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
      this.total += this.numOfCookies[i];

    }
    return this.numOfCookies;
  },
  result: [],
  ressultFun: function () {
    for (let i = 0; i < hours.length; i++) {
      this.result[i] = hours[i] + ' : ' + this.numOfCookies[i] + ' cookies.';
    }
    return this.result;
  },

  render: function () {
    let divE = document.getElementById('d');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};
paris.customersPerHour();
paris.cookiesPerHour();
paris.ressultFun();
paris.render();



////////////////////// Lima	2	16	4.6


const lima = {
  name: 'Lima',
  min: 20,
  max: 38,
  avg: 2.3,
  total: 0,
  hourlyCustomers: [],
  customersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
    return this.hourlyCustomers;
  },
  numOfCookies: [],
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
      this.total += this.numOfCookies[i];

    }
    return this.numOfCookies;
  },
  result: [],
  ressultFun: function () {
    for (let i = 0; i < hours.length; i++) {
      this.result[i] = hours[i] + ' : ' + this.numOfCookies[i] + ' cookies.';
    }
    return this.result;
  },

  render: function () {
    let divE = document.getElementById('d');
    let hE = document.createElement('h3');
    hE.textContent = this.name;
    divE.appendChild(hE);
    let ulE = document.createElement('ul');
    divE.appendChild(ulE);
    for (let index = 0; index < hours.length; index++) {

      let liE = document.createElement('li');
      liE.textContent = this.result[index];
      console.log(this.result[index]);
      ulE.appendChild(liE);

    }
    let liE = document.createElement('li');
    liE.textContent = 'the total is : ' + this.total;
    ulE.appendChild(liE);
  }

};
lima.customersPerHour();
lima.cookiesPerHour();
lima.ressultFun();
lima.render();

