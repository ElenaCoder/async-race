
let url = 'http://127.0.0.1:3000/garage';

// fetch(url)
//     .then(response => {
//         if(response.ok){
//             return response.json(); // if the HTTP status code is 200-299
//         } else {
//             console.log('Not successful');
//         }
//     })
//     .then(response =>{
//         console.log(response);
//     } )
//     .catch(error => console.log('Error'))

// fetch(url)
// .then(response => response.json())
// .then(data => {
//     garageArr = data;
//     console.log(garageArr);
// })
// .catch(error => console.log('Error'))

async function getCarsInGarage(url){
    let response = await fetch(url);
    let result = await response.json();
    // console.log(result);

    return result;
}




function getNavigationMenu(){
    const fragmentNavigationMenu = document.createDocumentFragment();

    let h1Logo = document.createElement('h1');
    h1Logo.className = 'logo';
    h1Logo.innerHTML = '<span>a</span><span>s</span><span>y</span><span>n</span><span>c</span><span>&nbsp;</span><span>r</span><span>a</span><span>c</span><span>e</span>';
    fragmentNavigationMenu.append(h1Logo);

    let divNav = document.createElement('div');
    divNav.className = 'nav';
    h1Logo.after(divNav);


    let btnToGarage = document.createElement('div');
    btnToGarage.className = 'to-garage button';
    let linkGarage = document.createElement('a');
    linkGarage.className = 'button-yellow';
    linkGarage.setAttribute('href', '#');
    linkGarage.innerHTML = 'to garage';
    btnToGarage.prepend(linkGarage);
    divNav.append(btnToGarage);

    let btnToWinners = document.createElement('div');
    btnToWinners.className = 'to-winners button';
    let linkToWinners = document.createElement('a');
    linkToWinners.className = 'button-yellow';
    linkToWinners.setAttribute('href', '#');
    linkToWinners.innerHTML = 'to winners';
    btnToWinners.prepend(linkToWinners);
    divNav.append(btnToWinners);

    return fragmentNavigationMenu;
}

let navigationMenu = getNavigationMenu();
document.body.append(navigationMenu);


/*---GARAGE view---*/
function getGarageViewContent(){
    const fragmentGarageViewContent = document.createDocumentFragment();

    let divGarageViewContent = document.createElement('div');
    divGarageViewContent.className = 'garage-content';
    fragmentGarageViewContent.prepend(divGarageViewContent)

    return fragmentGarageViewContent;
}

let garageViewContent = getGarageViewContent();
document.body.append(garageViewContent);

function getFormCreateFragment(){
    const fragmentFormCreate = document.createDocumentFragment();

    let formCreate = document.createElement("form");
    formCreate.className ='form-create';
    fragmentFormCreate.append(formCreate);

    let inputTextFormCreate = document.createElement("input");
    inputTextFormCreate.setAttribute('type', 'text');
    inputTextFormCreate.setAttribute('value', '');
    inputTextFormCreate.classList = 'input-text';
    formCreate.append(inputTextFormCreate);

    let inputColorFormCreate = document.createElement("input");
    inputColorFormCreate.setAttribute('type', 'color');
    inputColorFormCreate.setAttribute('value', '#bbbbbb');
    inputColorFormCreate.classList = 'input-color';
    formCreate.append(inputColorFormCreate);

    let btnCreate = document.createElement('div');
    btnCreate.className = 'create button';
    let linkCreate = document.createElement('a');
    linkCreate.className = 'button-gray';
    linkCreate.setAttribute('href', '#');
    linkCreate.innerHTML = 'create';
    btnCreate.prepend(linkCreate);
    formCreate.append(btnCreate);

    return fragmentFormCreate;
}

let formCreateFragment = getFormCreateFragment();
document.getElementsByClassName('garage-content')[0].append(formCreateFragment);

function getFormUpdateFragment(){
    const fragmentFormUpdate = document.createDocumentFragment();

    let formUpdate = document.createElement("form");
    formUpdate.className ='form-update';
    fragmentFormUpdate.append(formUpdate);

    let inputTextFormUpdate = document.createElement("input");
    inputTextFormUpdate.setAttribute('type', 'text');
    inputTextFormUpdate.setAttribute('value', '');
    inputTextFormUpdate.classList = 'input-text';
    formUpdate.append(inputTextFormUpdate);

    let inputColorFormUpdate = document.createElement("input");
    inputColorFormUpdate.setAttribute('type', 'color');
    inputColorFormUpdate.setAttribute('value', '#bbbbbb');
    inputColorFormUpdate.classList = 'input-color';
    formUpdate.append(inputColorFormUpdate);

    let btnUpdate = document.createElement('div');
    btnUpdate.className = 'update button';
    let linkUpdate = document.createElement('a');
    linkUpdate.className = 'button-gray';
    linkUpdate.setAttribute('href', '#');
    linkUpdate.innerHTML = 'update';
    btnUpdate.prepend(linkUpdate);
    formUpdate.append(btnUpdate);

    return fragmentFormUpdate;
}

let formUpdateFragment = getFormUpdateFragment();
document.getElementsByClassName('garage-content')[0].append(formUpdateFragment);

function getTaskbarFragment(){
    const fragmentTaskbar = document.createDocumentFragment();

    let divTaskbar = document.createElement("div");
    divTaskbar.className ='taskbar';
    fragmentTaskbar.append(divTaskbar);

    let btnRace = document.createElement('div');
    btnRace.className = 'button race gray';
    let linkRace = document.createElement('a');
    linkRace.className = 'button-gray';
    linkRace.setAttribute('href', '#');
    linkRace.innerHTML = 'race';
    btnRace.prepend(linkRace);
    divTaskbar.append(btnRace);

    let btnReset = document.createElement('div');
    btnReset.className = 'button reset gray';
    let linkReset = document.createElement('a');
    linkReset.className = 'button-gray';
    linkReset.setAttribute('href', '#');
    linkReset.innerHTML = 'reset';
    btnReset.prepend(linkReset);
    divTaskbar.append(btnReset);

    let btnGenerateCars = document.createElement('div');
    btnGenerateCars.className = 'button generate-cars gray big';
    let GenerateCars = document.createElement('a');
    GenerateCars.className = 'button-gray';
    GenerateCars.setAttribute('href', '#');
    GenerateCars.innerHTML = 'generate cars';
    btnGenerateCars.prepend(GenerateCars);
    divTaskbar.append(btnGenerateCars);

    return fragmentTaskbar;
}

let taskbarFragment = getTaskbarFragment();
document.getElementsByClassName('garage-content')[0].append(taskbarFragment);


function getGaragePageInfoFragment(){
    const fragmentGaragePageInfo = document.createDocumentFragment();

    let divGarage = document.createElement("div");
    divGarage.className ='garage';
    divGarage.innerHTML ='Garage (<span class="cars-in-garage"> 0 </span>)';
    // let divCarsAmount = document.createElement("span");
    // divCarsAmount.className ='cars-in-garage';
    // divCarsAmount.innerHTML = 0;
    // divGarage.append(divCarsAmount);
    fragmentGaragePageInfo.append(divGarage);

    let divPage = document.createElement("div");
    divPage.className ='page-garage';
    divPage.innerHTML ='Page #<span class="page-number">1</span>';
    fragmentGaragePageInfo.append(divPage);

    return fragmentGaragePageInfo;
}

let pageGarageInfoFragment = getGaragePageInfoFragment();
document.getElementsByClassName('garage-content')[0].append(pageGarageInfoFragment);

function getPaginationNavigationGarage(){
    const fragmentPaginationNavigationGarage = document.createDocumentFragment();

    let divPaginationNavigationGarage = document.createElement('div');
    divPaginationNavigationGarage.className = 'pagination-navigation';
    fragmentPaginationNavigationGarage.append(divPaginationNavigationGarage);

    let btnToPrev = document.createElement('div');
    btnToPrev.className = 'to-prev button gray';
    let linkToPrev = document.createElement('a');
    linkToPrev.className = 'button-gray';
    linkToPrev.setAttribute('href', '#');
    linkToPrev.innerHTML = 'prev';
    btnToPrev.prepend(linkToPrev);
    divPaginationNavigationGarage.append(btnToPrev);


    let btnToNext = document.createElement('div');
    btnToNext.className = 'to-next button gray';
    let linkToNext = document.createElement('a');
    linkToNext.className = 'button-gray';
    linkToNext.setAttribute('href', '#');
    linkToNext.innerHTML = 'next';
    btnToNext.prepend(linkToNext);
    divPaginationNavigationGarage.append(btnToNext);

    return fragmentPaginationNavigationGarage;
}

let paginationNavigationGarage = getPaginationNavigationGarage();
document.getElementsByClassName('garage-content')[0].append(paginationNavigationGarage);
/*---//GARAGE view---*/


/*---TO WINNERS view---*/
function getWinnersViewContent(){
    const fragmentWinnersViewContent = document.createDocumentFragment();

    let divWinnersViewContent = document.createElement('div');
    divWinnersViewContent.className = 'winners-content hide';
    fragmentWinnersViewContent.append(divWinnersViewContent)

    return fragmentWinnersViewContent;
}

let winnersViewContent = getWinnersViewContent();
document.body.append(winnersViewContent);

function getWinnersPageInfoFragment(){
    const fragmentWinnersPageInfo = document.createDocumentFragment();

    let divWinners = document.createElement("div");
    divWinners.className ='winners';
    divWinners.innerHTML ='Winners (<span class="winners-amount"> 0 </span>)';
    fragmentWinnersPageInfo.append(divWinners);

    let divPageWinners = document.createElement("div");
    divPageWinners.className ='page-winners';
    divPageWinners.innerHTML ='Page #<span class="page-number">1</span>';
    fragmentWinnersPageInfo.append(divPageWinners);

    return fragmentWinnersPageInfo;
}

let pageWinnersInfoFragment = getWinnersPageInfoFragment();
document.getElementsByClassName('winners-content')[0].append(pageWinnersInfoFragment);

function getTableOfWinners(){
    let fragmentTableOfWinners = document.createDocumentFragment();

    let table = document.createElement('table');
    table.className = 'table-winners';
    fragmentTableOfWinners.append(table);

    let thead = document.createElement('thead');
    thead.className = 'thead';
    table.append(thead);

    let tbody = document.createElement('tbody');
    tbody.className = 'tbody';
    table.append(tbody);

    let tr = document.createElement('tr');
    tr.className = 'tr-header';
    thead.append(tr);

    let thNumber = document.createElement('th');
    thNumber.className = 'th-number';
    thNumber.innerHTML = 'Number';
    tr.append(thNumber);

    let thCar = document.createElement('th');
    thCar.className = 'th-car';
    thCar.innerHTML = 'Car';
    tr.append(thCar);

    let thName = document.createElement('th');
    thName.className = 'th-Name';
    thName.innerHTML = 'Name';
    tr.append(thName);

    let thWins = document.createElement('th');
    thWins.className = 'th-Wins';
    thWins.innerHTML = 'Wins';
    tr.append(thWins);

    let thBestTime = document.createElement('th');
    thBestTime.className = 'th-BestTime';
    thBestTime.innerHTML = 'BestTime';
    tr.append(thBestTime);

    return fragmentTableOfWinners;
}

let tableOfWinnersFragment = getTableOfWinners();
document.getElementsByClassName('winners-content')[0].append(tableOfWinnersFragment);

function getPaginationNavigationWinners(){
    const fragmentPaginationNavigationWinners = document.createDocumentFragment();

    let divPaginationNavigationWinners = document.createElement('div');
    divPaginationNavigationWinners.className = 'pagination-navigation';
    fragmentPaginationNavigationWinners.append(divPaginationNavigationWinners);

    let btnToPrev = document.createElement('div');
    btnToPrev.className = 'to-prev button gray';
    let linkToPrev = document.createElement('a');
    linkToPrev.className = 'button-gray';
    linkToPrev.setAttribute('href', '#');
    linkToPrev.innerHTML = 'prev';
    btnToPrev.prepend(linkToPrev);
    divPaginationNavigationWinners.append(btnToPrev);


    let btnToNext = document.createElement('div');
    btnToNext.className = 'to-next button gray';
    let linkToNext = document.createElement('a');
    linkToNext.className = 'button-gray';
    linkToNext.setAttribute('href', '#');
    linkToNext.innerHTML = 'next';
    btnToNext.prepend(linkToNext);
    divPaginationNavigationWinners.append(btnToNext);

    return fragmentPaginationNavigationWinners;
}

let paginationNavigationWinners = getPaginationNavigationWinners();
document.getElementsByClassName('winners-content')[0].append(paginationNavigationWinners);

/*---//TO WINNERS view---*/





/*Toggling between GARAGE content and  TO WINNERS content view*/
let btnToGarage = document.getElementsByClassName("to-garage button")[0];
let btnToWinners = document.getElementsByClassName("to-winners button")[0];

btnToGarage.addEventListener('click', () => {
    if(document.getElementsByClassName('garage-content')[0].classList.contains("hide")){
        document.getElementsByClassName('garage-content')[0].classList.remove("hide");
    }
    document.getElementsByClassName('winners-content')[0].classList.add("hide");
})

btnToWinners.addEventListener('click', () => {
    if(document.getElementsByClassName('winners-content')[0].classList.contains("hide")){
        document.getElementsByClassName('winners-content')[0].classList.remove("hide");
    }
    document.getElementsByClassName('garage-content')[0].classList.add("hide");
})
/*//Toggling between GARAGE and  TO WINNERS view*/

/*Working with car */

async function renderCarsInGarage(){

    let url = 'http://127.0.0.1:3000/garage';
    let carsInGarageArr = await getCarsInGarage(url);
    console.log(carsInGarageArr);
    let fragmentCarsInGarage = document.createDocumentFragment();

    carsInGarageArr.forEach(elem =>{
        // const car = new Car(elem.name, elem.color, elem.id);

        let fragmentCarBlock = document.createDocumentFragment();

        let divCarBlock = document.createElement('div');
        divCarBlock.className = 'track-block';
        fragmentCarBlock.append(divCarBlock);

        let divBlockNavigation = document.createElement('div');
        divBlockNavigation.className = 'block-nav';
        divCarBlock.append(divBlockNavigation);

        let btnSelect = document.createElement('div');
        btnSelect.className = 'select button gray';
        let linkSelect = document.createElement('a');
        linkSelect.className = 'button-select';
        linkSelect.setAttribute('href', '#');
        linkSelect.innerHTML = 'select';
        btnSelect.append(linkSelect);
        divBlockNavigation.append(btnSelect);

        let btnRemove = document.createElement('div');
        btnRemove.className = 'remove button gray';
        let linkRemove = document.createElement('a');
        linkRemove.className = 'button-remove';
        linkRemove.setAttribute('href', '#');
        linkRemove.innerHTML = 'remove';
        btnRemove.append(linkRemove);
        divBlockNavigation.append(btnRemove);

        let carName = document.createElement('div');
        carName.className = 'car-name';
        carName.innerHTML = `${elem.name}`;
        divBlockNavigation.append(carName);


        let divBlockControlPanel = document.createElement('div');
        divBlockControlPanel.className = 'control-panel';
        divCarBlock.append(divBlockControlPanel);

        let btnStart = document.createElement('div');
        btnStart.className = 'button yellow small';
        let linkStart = document.createElement('a');
        linkStart.className = 'button-start';
        linkStart.setAttribute('href', '#');
        linkStart.innerHTML = '&#10148;';
        btnStart.prepend(linkStart);
        divBlockControlPanel.append(btnStart);

        let btnStop = document.createElement('div');
        btnStop.className = 'button yellow small';
        let linkStop = document.createElement('a');
        linkStop.className = 'button-stop';
        linkStop.setAttribute('href', '#');
        linkStop.innerHTML = '&#9724;';
        btnStop.prepend(linkStop);
        divBlockControlPanel.append(btnStop);


        function renderCarTrack(node) {
            let divBlockCarTrack = document.createElement('div');
            divBlockCarTrack.className = 'car-track';

            // Create an element within the svg - namespace (NS)
            let carIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            carIcon.classList.add('car-image');
            carIcon.setAttribute('width', '60');
            carIcon.setAttribute('height', '30');
            carIcon.setAttribute('viewBox', '0 0 212 76');
            carIcon.setAttribute('fill', 'none');
            divBlockCarTrack.append(carIcon);

            let iconpPath1 = document.createElementNS('http://www.w3.org/2000/svg','path');
            iconpPath1.setAttribute('d', 'M178.518 24.6566C176.214 24.5006 174.224 24.367 173.234 24.0944C166.285 22.1774 141.534 21.0322 138.887 20.9118C134.632 19.7513 130.918 17.1843 126.63 14.2252C117.972 8.2441 107.195 0.796805 85.5597 0.35838L84.0595 0.344812C73.5973 0.344812 61.9335 2.47546 50.8962 5.36423C46.0252 3.55371 38.0014 0.777302 33.5143 0.354989C31.2505 0.145105 30.092 1.21912 29.6142 1.88269C27.9599 4.18591 29.1202 8.50953 30.3564 11.7057C17.2456 16.3223 7.74692 20.6794 6.9126 21.0665L6.41602 21.4121C4.02391 23.815 5.06942 27.2566 5.91596 30.0229C6.17123 30.8785 6.43261 31.7202 6.58664 32.5165C6.89471 34.1239 3.29475 35.1525 3.25635 35.1593L0.800527 35.7881L4.06972 40.0515L1.34598 43.7642L4.35641 47.5315C2.45214 47.8813 0.615075 48.6649 0.126353 50.3435C-0.542585 52.6259 1.43412 54.9652 6.74329 58.1669C9.38457 59.7607 12.1764 60.719 15.2907 61.1672C15.1733 60.6113 15.0948 60.0427 15.0232 59.4699C14.9512 58.8924 14.9145 58.3043 14.8857 57.7145C14.8727 57.4066 14.8395 57.1009 14.8395 56.788C14.8395 44.5405 25.0939 34.5755 37.6973 34.5755C50.3006 34.5755 60.5559 44.5439 60.5559 56.788C60.5559 58.6028 60.3067 60.3582 59.8817 62.0453C59.7412 62.5978 59.5942 63.1464 59.4148 63.6832C59.2407 64.2035 59.0487 64.7093 58.8358 65.2139C69.688 68.0484 82.7884 68.7565 92.774 68.7565C99.8029 68.7565 104.594 68.422 104.674 68.4118H163.163C162.782 67.8767 162.427 67.3178 162.097 66.7484C161.782 66.2082 161.499 65.6523 161.231 65.0867C159.942 62.3489 159.206 59.3181 159.206 56.1147C159.206 44.1661 169.212 34.4419 181.508 34.4419C193.807 34.4419 203.813 44.1665 203.813 56.1147C203.813 58.8559 203.263 61.4691 202.307 63.8834C202.026 64.5885 201.707 65.2784 201.359 65.9479C200.992 66.6458 200.593 67.3259 200.153 67.9768C208.141 66.4524 210.479 61.3024 210.666 60.8127C213.182 49.933 212.135 41.3791 207.549 35.3972C200.436 26.1292 186.715 25.2057 178.518 24.6566Z');
            iconpPath1.setAttribute('fill', `${elem.color}`);
            carIcon.append(iconpPath1);

            let iconpPath2 = document.createElementNS('http://www.w3.org/2000/svg','path');
            iconpPath2.setAttribute('d', 'M18.8828 61.4479C21.0205 69.6189 28.6227 75.6717 37.6968 75.6717C45.6887 75.6717 52.5465 70.9817 55.5339 64.2819C55.756 63.7808 55.9519 63.2673 56.1295 62.7445C56.3119 62.2107 56.4659 61.6688 56.599 61.1146C56.9354 59.7247 57.1296 58.2801 57.1296 56.7884C57.1296 46.3608 48.4282 37.9056 37.6968 37.9056C26.965 37.9056 18.2645 46.3608 18.2645 56.7884C18.2645 57.2269 18.3011 57.6568 18.3325 58.0918C18.3727 58.6613 18.4377 59.2235 18.5302 59.776C18.624 60.3412 18.7392 60.8971 18.8828 61.4479Z');
            iconpPath2.setAttribute('fill', `${elem.color}`);
            carIcon.append(iconpPath2);

            let iconpPath3 = document.createElementNS('http://www.w3.org/2000/svg','path');
            iconpPath3.setAttribute('d', 'M181.508 74.4581C187.059 74.4581 192.037 72.115 195.489 68.4088C196.01 67.8465 196.507 67.2584 196.958 66.6347C197.362 66.0788 197.743 65.503 198.079 64.9048C199.547 62.295 200.387 59.2972 200.387 56.1117C200.387 45.9796 191.936 37.769 181.508 37.769C171.08 37.769 162.631 45.9791 162.631 56.1117C162.631 59.3757 163.514 62.4311 165.049 65.0833C165.382 65.6591 165.749 66.2116 166.141 66.745C166.569 67.3263 167.03 67.8788 167.526 68.4088C170.981 72.1184 175.961 74.4581 181.508 74.4581Z');
            iconpPath3.setAttribute('fill', `${elem.color}`);
            carIcon.append(iconpPath3);

            let flagIcon = document.createElement('img');
            flagIcon.className = 'flag-image';
            flagIcon.style.color = `${elem.color}`;
            flagIcon.setAttribute('src', './asset/flag.svg');
            flagIcon.setAttribute('alt', 'Flag image');
            divBlockCarTrack.append(flagIcon);

            return node.append(divBlockCarTrack);
        }
        renderCarTrack(divCarBlock);


        fragmentCarsInGarage.append(fragmentCarBlock);
    })

    document.getElementsByClassName('page-garage')[0].after(fragmentCarsInGarage);

}

renderCarsInGarage();


/*//Working with car */