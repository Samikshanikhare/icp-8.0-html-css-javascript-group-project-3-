function visible(card , img) {
    // alert(card)
    switch (card && img) {

        case 'item1' && 'img-1':
            // alert(img)
            let btn1 = document.getElementById('btn')
            document.getElementById('img-1').src = "../images/certification_images/certificate"
            if (btn1.style.display === "none") {
                btn1.style.display = "block"
            }
            else {
                btn1.style.display = "none"
            }
            break;

        case 'item2' && 'img-2':
            // alert(img)
            let btn2 = document.getElementById('btn1')
            document.getElementById('img-2').src = "../images/certification_images/certificate"
            if (btn2.style.display === "none") {
                btn2.style.display = "block"
            }
            else {
                btn2.style.display = "none"
            }
            break;

        case 'item3' && 'img-3':
            document.getElementById('img-3').src = "../images/certification_images/certificate"
            let btn3 = document.getElementById('btn2')
            if (btn3.style.display === "none") {
                btn3.style.display = "block"
            }
            else {
                btn3.style.display = "none"
            }
            break;

        case 'item4' && 'img-4':
            document.getElementById('img-4').src = "../images/certification_images/certificate"
            let btn4 = document.getElementById('btn3')
            if (btn4.style.display === "none") {
                btn4.style.display = "block"
            }
            else {
                btn4.style.display = "none"
            }
            break;

        case 'item5' && 'img-5':
            document.getElementById('img-5').src = "../images/certification_images/certificate"
            let btn5 = document.getElementById('btn4')
            if (btn5.style.display === "none") {
                btn5.style.display = "block"
            }
            else {
                btn5.style.display = "none"
            }
            break;

        case 'item6' && 'img-6':
            document.getElementById('img-6').src = "../images/certification_images/certificate"
            let btn6 = document.getElementById('btn5')
            if (btn6.style.display === "none") {
                btn6.style.display = "block"
            }
            else {
                btn6.style.display = "none"
            }
            break;

        case 'item7' && 'img-7':
            document.getElementById('img-7').src = "../images/certification_images/certificate"
            let btn7 = document.getElementById('btn6')
            if (btn7.style.display === "none") {
                btn7.style.display = "block"
            }
            else {
                btn7.style.display = "none"
            }
            break;

        case 'item8' && 'img-8':
            document.getElementById('img-8').src = "../images/certification_images/certificate"
            let btn8 = document.getElementById('btn7')
            if (btn8.style.display === "none") {
                btn8.style.display = "block"
            }
            else {
                btn8.style.display = "none"
            }
            break;

        case 'item9' && 'img-9':
            document.getElementById('img-9').src = "../images/certification_images/certificate"
            let btn9 = document.getElementById('btn8')
            if (btn9.style.display === "none") {
                btn9.style.display = "block"
            }
            else {
                btn9.style.display = "none"
            }
            break;

        case 'item10' && 'img-10':
            document.getElementById('img-10').src = "../images/certification_images/certificate"
            let btn10 = document.getElementById('btn9')
            if (btn10.style.display === "none") {
                btn10.style.display = "block"
            }
            else {
                btn10.style.display = "none"
            }
            break;
    }
}