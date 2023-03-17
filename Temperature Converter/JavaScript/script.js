function convert() {
    var temperature = document.getElementById("input");
    var result = document.getElementById("Output");

    var out = document.getElementById("Scale");
    var optionSelIndex = out.options[out.selectedIndex].value;
    var optionSelectedText = out.options[out.selectedIndex].text;

    if (temperature.value !== "") {
        if (optionSelIndex == 0) {
            alert("Please Select a Unit");
        } else {
            if (optionSelectedText === "Fahrenheit") {
                result.value = ((temperature.value - 32) * 5) / 9 + "°C";
            }
            if (optionSelectedText === "Celcius") {
                result.value = (temperature.value * 9) / 5 + 32 + "°F";
            }
        }
    } else {
        alert("Please Enter Temperature To Convert");
    }
}

