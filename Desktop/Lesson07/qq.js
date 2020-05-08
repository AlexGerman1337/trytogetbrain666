'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money;
let start = function() {
        do {
            money = prompt('Ваш месячный доход?');
            
        } while (!isNumber(money));
    };
start();

const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 18,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
       
      let addExpenses = prompt('Перечислите возможные расходы через запятую?');
          appData.addExpenses = addExpenses.split(',');
          appData.deposit = confirm('Есть ли у вас депозит?');

      let sum;
      let str = {};
          for (let i = 0; i < 2; i++){
     
            str[i] = prompt('Введите обязательную статью расходов');
            sum = +prompt(' Во сколько это обойдется?'); 
            appData.expenses[str[i]] = +sum; 
       }   
       console.log(appData.expenses);
      },


    getexpensesMonth: function() {
       
        for (let key in appData.expenses){

            appData.expensesMonth += appData.expenses[key];
        }

        console.log("Сумма всех расходов: " + appData.expensesMonth);
    },

    getBudget: function(){
        
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        if(appData.budgetMonth <=0){
            console.log("Накопления за месяц и ежедневный бюджет отсутствуют!");
        }else{
            console.log('Месячный бюджет:' + appData.budgetMonth);
            console.log('Ежедневный бюджет: ' + appData.budgetDay);
            
        }

    },
    
    getTargetMonth: function(){
        let a = 0;
        a = Math.floor(appData.mission / appData.budgetMonth);
        if(appData.budgetMonth <=0){
            // честно признаюсь что тут я схитрили логически взял значение из appData.BudgetMonth потому что у меня не 
            //  получалось привязать ни функцию которую я прописал сверху ни по факту прописать что-то типо
            // if((a<=0) || isFinite(a) || isNaN(a)) не дало никаких резуольтатов и консоль упорно показывала
            // что цель будет достигнута за мои любимые INFINITY месяцев :CCCC
            // если ты мне поможешь и еще раз как дебилу обьяснишь что не так и как сделать что все было так
            // я буду тебе невероятно признателен!
            // с уважением, Александр Герман :D
            console.log("Цель не будет достигнута.");
        }else{
            console.log("Цель будет достигнута за " + a + " месяцев");
        }

    },

    getStatusIncome: function(){
        if(appData.budgetDay > 1200){
            console.log('у вас высокий уровень дохода');
        }
        else if(600 <= appData.budgetDay){
            console.log('у вас средний уровень дохода');
        }
        else if(0 < appData.budgetDay){
            console.log('к сожалению ваш уровень дохода ниже среднего');
        }
        else{
            console.log('что-то пошло не так');
        }
    }

};


appData.asking(),
appData.getexpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

