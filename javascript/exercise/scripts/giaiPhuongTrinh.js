// giai phuong trinh bac hai
function giaiPhuongTrinhBacHai(a, b, c) {
    // tinh delta
    var delta = b * b - 4 * a * c;

    // kiem tra delta
    if (delta < 0) {
        alert('Phuong trinh vo nghiep!');
        return;
    }

    if (delta == 0) {
        var x = -b / 2 * a;
        alert('Phuong trinh co nghiep kep x1 = x2 = ' + x);
        return;
    }

    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / 2 * a;
        var x2 = (-b - Math.sqrt(delta)) / 2 * a;
        alert('Phuong trinh co hai nghiep phan biet, x1 = ' + x1 + ", x2 = " + x2);
        return;
    }
}