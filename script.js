var arr = [1, 2, [3, 4, [5, [18,[44,65],52], 6], 7], 8, [9, 10]]

Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
function f1(item, level = 0){ 
    if (item instanceof Array){
        return item.map(function(value, index){
            return f1(value, level + 1)
        }).max() - (level > 0 ? 0 : 1) // Если главный массив не считаем
    }
    return level;
}

function sum(arr) {
    var result = 0;
    arr.forEach(function (elem) {
    if (Array.isArray(elem)) {
    result += sum(elem);
    } else {
    result += elem;
    }
    });
    return result;
    }
    
    var call= function ()  {
        console.log("Максимальное количество вложенностей массива " + f1(arr))
        console.log("Сумма элементов массива " + sum(arr))
       }
        
    console.log(call())



   