const calculateBMI = () => {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    console.log(height, weight);
    var bmi = weight / (height * height);
    document.getElementById('bmi').innerHTML = bmi;
    if (bmi < 18) {
        document.getElementById('bmi').style.background = "blue";
        document.getElementById('bmi').style.color = "white";
    }
    else if (bmi >= 18 && bmi <= 24) {
        document.getElementById('bmi').style.background = "green";
        document.getElementById('bmi').style.color = "white";

    }
    else {
        document.getElementById('bmi').style.background = "red";
        document.getElementById('bmi').style.color = "white";

    }
}