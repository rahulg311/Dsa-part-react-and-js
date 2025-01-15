function barChart(data) {
    let srt = "\n";
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i]; j++) {
            srt += "*";
        }
        srt += "\n";
    }
    return srt;
}

console.log(barChart([5, 2, 8, 3, 4]));
