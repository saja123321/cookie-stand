
let hours = ['7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
function CookieStand(name , min , max , avg ){

  this.name = name ;
  this.min = min ;
  this.max = max ;
  this.avg = avg ;
  this.total = 0 ;
  this.hourlyCustomers = [];
  this.numOfCookies = [];
  this.result = [];
}

CookieStand.prototype.customersPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.hourlyCustomers[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }
  return this.hourlyCustomers;
};

CookieStand.prototype.cookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.numOfCookies[i] = Math.floor(this.hourlyCustomers[i] * this.avg);
    this.total += this.numOfCookies[i];
  }
  return this.numOfCookies;
};
CookieStand.prototype.ressultFun = function () {
  for (let i = 0; i < hours.length; i++) {
    this.result[i] = this.numOfCookies[i];
  }
  return this.result;
};

let seattle = new CookieStand('Seattle' ,23 , 65 , 6.3 );
let tokyo = new CookieStand('Tokyo', 3 , 24 ,1.2);
let dubai = new CookieStand ('Dubai',11,38, 3.7);
let paris = new CookieStand('Paris', 20, 38, 2.3);
const lima = new CookieStand('Lima', 20, 38, 2.3);

let loc = [seattle,tokyo,dubai,paris,lima];
/////////////
let divE = document.getElementById('d');
let tableE = document.createElement('table');
divE.appendChild(tableE);

CookieStand.prototype.render = function () {
  let totalOfTotal = 0;
  let trE = document.createElement('tr');
  tableE.appendChild(trE);

  let tdL = document.createElement('td');
  tdL.textContent = this.name;
  trE.appendChild(tdL);

  for (let index = 0; index < hours.length; index++) {

    let tdE = document.createElement('td');
    tdE.textContent = this.result[index];
    totalOfTotal += this.result[index];
    trE.appendChild(tdE);
  }
  let tdE = document.createElement('td');
  tdE.textContent = totalOfTotal ;
  trE.appendChild(tdE);
};

function hedarCreat(){
  let headRowTE = document.createElement('tr');
  tableE.appendChild(headRowTE);

  let tdL = document.createElement('td');
  tdL.textContent = 'Locations';
  headRowTE.appendChild(tdL);
  for (let index = 0; index < hours.length; index++) {
    let headTE = document.createElement('th');
    headTE.textContent = hours[index];
    headRowTE.appendChild(headTE);
  }
  let tdE = document.createElement('th');
  tdE.textContent = 'Location Total' ;
  headRowTE.appendChild(tdE);
}
hedarCreat();



for (let index = 0; index < loc.length; index++) {
  loc[index].customersPerHour();
  loc[index].cookiesPerHour();
  loc[index].ressultFun();
  loc[index].render();

}
let totalEachHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function totalHoury(){
  let t = 0 ;

  let footerTE = document.createElement('tr');
  footerTE.id = 'footerId';

  tableE.appendChild(footerTE);

  let tdL = document.createElement('td');
  tdL.textContent = 'Totals';
  footerTE.appendChild(tdL);
  for(let x= 0 ; x<hours.length ; x++){
    for (let y =0 ; y < loc.length ; y++ ){
      totalEachHour[x] += loc[y].result[x];
    }
    t += totalEachHour[x];
    let tdTE = document.createElement('td');
    tdTE.textContent = totalEachHour[x] ;
    footerTE.appendChild(tdTE);
  }
  let tdTE = document.createElement('td');
  tdTE.textContent = t;
  footerTE.appendChild(tdTE);
}
totalHoury();


let cookiesForm = document.getElementById('cookiesForm');
cookiesForm.addEventListener('submit' , addLocation);

function addLocation (event){
  event.preventDefault();
  delFooter();
  let newLocName = event.target.locNameId.value;
  let newLocMin = event.target.locMinId.value;
  let newLocMax = event.target.locMaxId.value;
  let newLocAvg = event.target.locAvgId.value;
  let newLoc = new CookieStand(newLocName , newLocMin , newLocMax , newLocAvg );
  loc.push(newLoc);
  newLoc.customersPerHour();
  newLoc.cookiesPerHour();
  newLoc.ressultFun();
  newLoc.render();

  totalHoury();

}

function delFooter(){
  let footerRow=document.getElementById('footerId');
  footerRow.remove();
}


