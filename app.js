const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is  ${Math.round(logo[i].getTotalLength())}`);
}
const alfaLogo = document.querySelectorAll("#alfa-logo path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is  ${Math.round(alfaLogo[i].getTotalLength())}`);
}