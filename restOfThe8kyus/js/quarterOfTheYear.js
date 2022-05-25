const quarterOf = (month) => {
    if(month <=3) {
        return 1
    } else if (month>=10) {
        return 4
    } else if(month<= 6) {
        return 2
    } else {
        return 3
    }
    
}