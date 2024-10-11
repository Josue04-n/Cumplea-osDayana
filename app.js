function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
}

function generateNumbers() {
    const container = document.querySelector('.numbers-container');
    
    for (let i = 0; i < 50; i++) { // Genera 50 números "19"
        const number = document.createElement('div');
        number.classList.add('number-19');
        number.textContent = '19';
        
        // Posiciones aleatorias
        number.style.top = `${Math.random() * 100}vh`;
        number.style.left = `${Math.random() * 100}vw`;
        
        container.appendChild(number);
    }
}

window.onload = generateNumbers; // Llama a la función al cargar la página
