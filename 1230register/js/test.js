function outer() {
    var i = 1;
    var inner = function(){
        return ++i;
    }
    // i++;
    return inner;
}

var result = outer();

console.log("第一次调用：" + result());
console.log("第二次调用：" + result());
console.log("第三次调用：" + result());