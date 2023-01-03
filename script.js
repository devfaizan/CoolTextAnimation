const logo = document.querySelectorAll('#logo path');
for (let index = 0; index < logo.length; index++) {
    console.log(`path length of ${index} is ${logo[index].getTotalLength()}`);
    // used to check paths length only    
}