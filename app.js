function test(a) {
    let div1 = document.createElement("div");
    div1.innerHTML = "La variable a vaut " + a;
    document.body.appendChild(div1);
    ((a += 2) < 20) ? test(a) : null;
}
test(1);