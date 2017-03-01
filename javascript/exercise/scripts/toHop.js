// Tinh giai thua theo de quy
function giaiThua(n) {
    if (n < 2) {
        return 1;
    }

    return n * giaiThua(n - 1)
}

// tinh giai thua su dung vong lap
function giaiThuaLap(n) {
    if (n < 2) {
        return 1;
    }

    var ketQua = 1;
    for (var i = 2; i < n; i++) {
        ketQua *= i;
    }
    return ketQua;
}

// tinh to hop chap k cua n
function combination(k, n) {
    var nGiaiThua = giaiThuaLap(n)
    var kGiaiThua = giaiThuaLap(k);
    var nTrukGiaiThua = giaiThuaLap(n - k);
    return nGiaiThua / (kGiaiThua * nTrukGiaiThua);
}

// tinh chinh hop chap k cua n
function arrangement(k, n) {
    var nGiaiThua = giaiThuaLap(n);
    var nTrukGiaiThua = giaiThuaLap(n - k);
    return nGiaiThua / nTrukGiaiThua;
}