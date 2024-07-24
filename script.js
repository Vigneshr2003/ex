// let backendValue = 0;

// function updateColor() {
//     let roundDiv = document.getElementById('circle1')
//             if(backendValue !==0) {
//           roundDiv.style.backgroundColor = 'green';
//     } else {
//         roundDiv.style.backgroundColor = 'red';
//     }
// }

// function simulateBackendUpdate(newValue){
//     backendValue = newValue;
//     updateColor();
// }
// setTimeout(() => {
//     simulateBackendUpdate(2);
// } , 2000);


function update() {
    
    return Math.floor(Math.random() * 10); 
}

function updateLevel() {
    const MeasureLevel = document.getElementById('circle1');
    const Level = update();

    MeasureLevel.textContent = Level;

    if (Level > 0) {
        MeasureLevel.style.backgroundColor = 'green';
        MeasureLevel.style.boxShadow = '0 0 20px 5px rgba(0, 255, 0, 0.6)';
    } else {
        MeasureLevel.style.backgroundColor = 'red';
        MeasureLevel.style.boxShadow = '0 0 20px 5px rgba(255, 0, 0, 0.6)';
    }
}


setInterval(updateLevel, 1000);
