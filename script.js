function convertToRoman(num) {
    if (num < 1) return "Por favor, introduzca un numero mayor o igual a 1";
    if (num >= 4000) return "Por favor, introduzca un numero menor o igual a 3999";

    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let roman = "";
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            roman += numeral;
            num -= value;
        }
    }
    return roman;
}

document.getElementById("convert-btn").addEventListener("click", function () {
    const inputField = document.getElementById("number");
    const outputField = document.getElementById("output");
    const inputValue = inputField.value.trim();

    if (inputValue === "") {
        outputField.textContent = "Por favor, introduzca un numero valido";
        return;
    }

    const num = parseInt(inputValue, 10);
    outputField.textContent = isNaN(num)
        ? "Por favor, introduzca un numero valido"
        : convertToRoman(num);
});