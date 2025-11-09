let isDropped = [false, false, false, false, false, false];

for(let i = 1; i <= 6; i++) {

    let questDiv = document.querySelector(`.quest${i}`);

    questDiv.addEventListener('click', () => {

        if(isDropped[i-1] === true) {

            document.querySelector(`.ans${i}`).style.animation = 'pullUp 200ms ease-out 0ms forwards';
            document.querySelector(`.quest${i} > svg`).style = 'transform: rotate(0deg)';
            isDropped[i-1] = false;
        }

        else {

            document.querySelector(`.ans${i}`).style.animation = 'dropDown 200ms ease-out 0ms forwards';
            document.querySelector(`.quest${i} > svg`).style = 'transform: rotate(45deg)';
            isDropped[i-1] = true;
        }
    });
}