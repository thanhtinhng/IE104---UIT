let phuongTrinhBac1 = {
    a: null,
    b: null,
    giai: function() {
        let a = this.a
        let b = this.b
        if (a === 0) {
            if (b === 0) {
                return '<strong>Phương trình có vô số nghiệm.</strong>'
            } else {
                return '<strong>Phương trình vô nghiệm.</strong>'
            }
        } else {
            let x = -b / a;
            return `Nghiệm của phương trình là <strong>x = ${x}</strong>`
        }
    }
}

document.getElementById('a').addEventListener('input', (event) => {
    phuongTrinhBac1.a = parseInt(event.target.value);
});

document.getElementById('b').addEventListener('input', (event) => {
    phuongTrinhBac1.b = parseInt(event.target.value);
});

let c = document.getElementById('btn1')

c.addEventListener("click", () => {
    var r = document.getElementById('result')
    r.innerHTML = phuongTrinhBac1.giai()
})

