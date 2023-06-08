function task1() {
    for (let i = 2; i <= 100; i++) {
        for (let j = 2; j <= i; j++) {
            if ((i % j == 0) && (j != i)) {
                break;
            } else {
                console.log(i);
                break;
            }
        }
    }
}
function task2(){
    let i = 0
    do {
        if (i==0){
            console.log(i+' - це нуль')
        }
        else if (i%2==0){
            console.log(i+' - парне число')
        }
        else if (i!==0) {console.log(i+' - непарне число')}
        i++
    }while (i<=10)
}
function task3(){
    for (let i = 0; i < 10; console.log(i++)){}
}
