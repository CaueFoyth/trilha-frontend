class Utilitario{
    static converterCelsiusParaFahrenheit(celsius){
        return (celsius * 9/5) + 32;
    }
}

let celsius = 25;

console.log(`A temperatura de ${celsius}°C em Fahrenheit é: ${Utilitario.converterCelsiusParaFahrenheit(celsius)}°F`);