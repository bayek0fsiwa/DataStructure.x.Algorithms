use std::io;

fn factorial(num: i64) -> i64 {
    return if num == 1 {
        1
    }else{
        num * factorial(num - 1)
    }
}