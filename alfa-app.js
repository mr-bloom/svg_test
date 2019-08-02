const alfaLogo = document.querySelectorAll("#alfa-logo path");

for (let i = 0; i < alfaLogo.length; i++) {
    console.log(`Letter ${i} is  ${Math.round(alfaLogo[i].getTotalLength())}`);
}