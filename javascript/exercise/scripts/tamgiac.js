
    // tinh chu vi tam giac 
    function chuViTamGiac(a, b, c) {
        return a + b + c;
    }

    // tinh dien tich tam giac
    function dienTichTamGiac(a, b, c) {
        var nuaChuVi = chuViTamGiac(a, b, c)/2;
        var dienTich = Math.sqrt(nuaChuVi * (nuaChuVi - a) * (nuaChuVi - b) * (nuaChuVi - c));
        return dienTich;
    }

    // tinh chu vi hinh tron