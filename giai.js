function kq() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    var delta = b * b - 4 * a * c;

    if (delta == 0) {
        var x = -b / (2 * a);
        document.getElementById("dapan").innerHTML = "PT co nghiem kep x= " + x;
    } else {
        if (delta < 0) {
            document.getElementById("dapan").innerHTML = "PT vo nghiem!";
        } else {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.getElementById("dapan").innerHTML = "PT co 2 nghiem";
        }
    }
}