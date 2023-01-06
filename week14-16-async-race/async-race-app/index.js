'use strict';

import { ServerRequest } from './serverRequest.js';

const carsNumberPerPageGarage = 7;
const carsNumberPerPageWinners = 10;

let currentPageGarage = 1;
let currentPageWinners = 1;

let currentWinnersArr = [];
let raceStartedFlag = false;

function getNavigationMenu() {
    const fragmentNavigationMenu = document.createDocumentFragment();

    let h1Logo = document.createElement('h1');
    h1Logo.className = 'logo';
    h1Logo.innerHTML =
        '<span>a</span><span>s</span><span>y</span><span>n</span><span>c</span><span>&nbsp;</span><span>r</span><span>a</span><span>c</span><span>e</span>';
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

/*------------------GARAGE view------------------------*/
function getGarageViewContent() {
    const fragmentGarageViewContent = document.createDocumentFragment();

    let divGarageViewContent = document.createElement('div');
    divGarageViewContent.className = 'garage-content';
    fragmentGarageViewContent.prepend(divGarageViewContent);

    return fragmentGarageViewContent;
}

let garageViewContent = getGarageViewContent();
document.body.append(garageViewContent);

function getFormCreateFragment() {
    const fragmentFormCreate = document.createDocumentFragment();

    let formCreate = document.createElement('form');
    formCreate.className = 'form-create';
    fragmentFormCreate.append(formCreate);

    let inputTextFormCreate = document.createElement('input');
    inputTextFormCreate.setAttribute('type', 'text');
    inputTextFormCreate.setAttribute('value', '');
    // inputTextFormCreate.setAttribute('required', '');
    inputTextFormCreate.classList = 'input-text';
    formCreate.append(inputTextFormCreate);

    let inputColorFormCreate = document.createElement('input');
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

function getFormUpdateFragment() {
    const fragmentFormUpdate = document.createDocumentFragment();

    let formUpdate = document.createElement('form');
    formUpdate.className = 'form-update';
    fragmentFormUpdate.append(formUpdate);

    let inputTextFormUpdate = document.createElement('input');
    inputTextFormUpdate.setAttribute('type', 'text');
    inputTextFormUpdate.setAttribute('value', '');
    inputTextFormUpdate.classList = 'input-text';
    formUpdate.append(inputTextFormUpdate);

    let inputColorFormUpdate = document.createElement('input');
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

function getTaskbarFragment() {
    const fragmentTaskbar = document.createDocumentFragment();

    let divTaskbar = document.createElement('div');
    divTaskbar.className = 'taskbar';
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
    btnReset.className = 'button reset gray disable';
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

    btnGenerateCars.addEventListener('click', generateCarHandler);

    return fragmentTaskbar;
}

let taskbarFragment = getTaskbarFragment();
document.getElementsByClassName('garage-content')[0].append(taskbarFragment);

async function generateCarHandler() {
    let randomNamePart1Arr = [
        'Tesla',
        'Ford',
        'Mazda',
        'Volvo',
        'Mercedes',
        'Audi',
        'Honda',
        'Kia',
        'Peugeot',
        'Jaguar',
    ];
    let randomNamePart2Arr = [
        'Mustang',
        'Corvette',
        'Camaro',
        'Corolla',
        'Viper',
        'A3',
        'Cherokee',
        'Ria',
        '5008',
        'Rav4',
    ];

    for (let i = 0; i < 100; i++) {
        let randomNamePart1 = randomNamePart1Arr[getRandomNumber(0, 10)];
        let randomNamePart2 = randomNamePart2Arr[getRandomNumber(0, 10)];
        let randomName = `${randomNamePart1} ${randomNamePart2}`;
        let randomColor = getRandomColor();

        await ServerRequest.createCar(randomName, randomColor);
    }
    renderCarsInGarage();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from)) + from;
}

function getGaragePageInfoFragment() {
    const fragmentGaragePageInfo = document.createDocumentFragment();

    let divGarage = document.createElement('div');
    divGarage.className = 'garage';
    divGarage.innerHTML = 'Garage (<span class="cars-in-garage">0</span>)';
    fragmentGaragePageInfo.append(divGarage);

    let divPage = document.createElement('div');
    divPage.className = 'page-garage';
    divPage.innerHTML = 'Page #<span class="page-number"></span>';
    fragmentGaragePageInfo.append(divPage);

    return fragmentGaragePageInfo;
}

let pageGarageInfoFragment = getGaragePageInfoFragment();
document
    .getElementsByClassName('garage-content')[0]
    .append(pageGarageInfoFragment);

function getPaginationNavigation(isGarage) {
    const fragmentPaginationNavigation = document.createDocumentFragment();

    let divPaginationNavigation = document.createElement('div');
    divPaginationNavigation.className = 'pagination-navigation';
    fragmentPaginationNavigation.append(divPaginationNavigation);

    let btnToPrev = document.createElement('div');
    btnToPrev.className = 'to-prev button yelow';
    let linkToPrev = document.createElement('a');
    linkToPrev.className = 'button-gray';
    linkToPrev.setAttribute('href', '#');
    linkToPrev.innerHTML = 'prev';
    btnToPrev.prepend(linkToPrev);
    divPaginationNavigation.append(btnToPrev);

    btnToPrev.addEventListener(
        'click',
        isGarage ? toPrevPageHandlerGarage : toPrevPageHandlerWinners,
    );

    let btnToNext = document.createElement('div');
    btnToNext.className = 'to-next button yelow';
    let linkToNext = document.createElement('a');
    linkToNext.className = 'button-gray';
    linkToNext.setAttribute('href', '#');
    linkToNext.innerHTML = 'next';
    btnToNext.prepend(linkToNext);
    divPaginationNavigation.append(btnToNext);

    btnToNext.addEventListener(
        'click',
        isGarage ? toNextPageHandlerGarage : toNextPageHandlerWinners,
    );

    return fragmentPaginationNavigation;
}

function toPrevPageHandlerGarage(event) {
    if (currentPageGarage > 1) {
        currentPageGarage -= 1;
        renderCarsInGarage();
    }
}

function toNextPageHandlerGarage(event) {
    let totalCars =
        document.getElementsByClassName('cars-in-garage')[0].innerHTML;
    let pageCount = Math.ceil(totalCars / carsNumberPerPageGarage);
    if (currentPageGarage < pageCount) {
        currentPageGarage += 1;
        renderCarsInGarage();
    }
}

function toPrevPageHandlerWinners(event) {
    if (currentPageWinners > 1) {
        currentPageWinners -= 1;
        renderWinnersInTable();
    }
}

function toNextPageHandlerWinners(event) {
    let totalWinners =
        document.getElementsByClassName('winners-amount')[0].innerHTML;
    let pageCount = Math.ceil(totalWinners / carsNumberPerPageWinners);
    if (currentPageWinners < pageCount) {
        currentPageWinners += 1;
        renderWinnersInTable();
    }
}

let paginationNavigationGarage = getPaginationNavigation(true);
document
    .getElementsByClassName('garage-content')[0]
    .append(paginationNavigationGarage);

/*GARAGE VIEW - RENDERING */
/*Car rendering in Garage view from DB*/
async function renderCarsInGarage() {
    let carsInGarageResponse = await ServerRequest.getCars(
        currentPageGarage,
        carsNumberPerPageGarage,
    );
    let carsInGarageArr = await carsInGarageResponse.data;
    let pagesQuantity = Math.ceil(
        carsInGarageResponse.totalCount / carsNumberPerPageGarage,
    );

    // Rendering amount of cars in the Garage
    document.getElementsByClassName('cars-in-garage')[0].innerHTML =
        carsInGarageResponse.totalCount;

    // Rendering page and total number of pages in the Garage
    document.getElementsByClassName(
        'page-number',
    )[0].innerHTML = `${currentPageGarage}/${pagesQuantity}`;

    let trackBlockList = document.getElementsByClassName('track-block');
    while (trackBlockList.length > 0) {
        trackBlockList[0].parentNode.removeChild(trackBlockList[0]);
    }

    let fragmentCarsBlock = document.createDocumentFragment();

    carsInGarageArr.forEach((elem) => {
        let divCarBlock = document.createElement('div');
        divCarBlock.className = 'track-block';
        divCarBlock.id = `${elem.id}`;
        fragmentCarsBlock.append(divCarBlock);

        function createNavigationInCarBlockFragment(elem, node) {
            let divBlockNavigation = document.createElement('div');
            divBlockNavigation.className = 'block-nav';
            node.append(divBlockNavigation);

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
            node.append(divBlockControlPanel);

            let btnStart = document.createElement('div');
            btnStart.className = 'button yellow small';
            let linkStart = document.createElement('a');
            linkStart.className = 'button-start';
            linkStart.setAttribute('href', '#');
            linkStart.innerHTML = '&#10148;';
            btnStart.prepend(linkStart);
            divBlockControlPanel.append(btnStart);

            btnStart.addEventListener('click', startCarEngineHandler);

            let btnStop = document.createElement('div');
            btnStop.className = 'button yellow small disable';
            let linkStop = document.createElement('a');
            linkStop.className = 'button-stop';
            linkStop.setAttribute('href', '#');
            linkStop.innerHTML = '&#9724;';
            btnStop.prepend(linkStop);
            divBlockControlPanel.append(btnStop);

            btnStop.addEventListener('click', stopCarEngineHandler);
        }
        createNavigationInCarBlockFragment(elem, divCarBlock);

        function createCarTrack(elem, node) {
            let divBlockCarTrack = document.createElement('div');
            divBlockCarTrack.className = 'car-track';
            node.append(divBlockCarTrack);

            let carIcon = createCarIcon(elem.color);
            divBlockCarTrack.append(carIcon);

            let flagIcon = document.createElement('img');
            flagIcon.className = 'flag-image';
            flagIcon.style.color = `${elem.color}`;
            flagIcon.setAttribute('src', './asset/flag.svg');
            flagIcon.setAttribute('alt', 'Flag image');
            divBlockCarTrack.append(flagIcon);
        }
        createCarTrack(elem, divCarBlock);

        let selectBtn = divCarBlock.getElementsByClassName('select button')[0];
        let removeBtn = divCarBlock.getElementsByClassName('remove button')[0];
        selectBtn.addEventListener('click', selectBtnClickHandling);
        removeBtn.addEventListener('click', removetBtnClickHandling);
    });

    document.getElementsByClassName('page-garage')[0].after(fragmentCarsBlock);
}
renderCarsInGarage();
/*//Car rendering in Garage view from DB*/

async function startCarEngineHandler(event) {
    let carIconElem =
        event.currentTarget.parentNode.nextElementSibling.firstElementChild;
    const carId = event.currentTarget.parentNode.parentNode.getAttribute('id');
    let currentStartBtn = event.currentTarget.parentNode.firstElementChild;
    let currentStopBtn = event.currentTarget.parentNode.lastElementChild;

    if (currentStartBtn.classList.contains('disable')) {
        return;
    }

    let response = await ServerRequest.startCarEngine(carId);
    let time = response.distance / response.velocity;

    let carAnimation = carIconElem.animate(
        [
            // key frames
            { transform: 'translateX(0)' },
            { transform: 'translateX(82vw)' },
        ],
        {
            // sync options
            duration: time,
            iterations: 1,
            easing: 'linear',
            fill: 'forwards',
        },
    );

    let currentWinner = {
        id: carId,
        wins: '',
        time: time,
    };

    currentStartBtn.classList.add('disable');
    // setTimeout(() => currentStartBtn.classList.remove('disable'), time);
    currentStopBtn.classList.remove('disable');
    // setTimeout(() => currentStopBtn.classList.add('disable'), time);

    try {
        await ServerRequest.switchtoDriveMode(carId);
        currentWinnersArr.push(currentWinner);
        if (currentWinnersArr.length === 1) {
            let winnerId = currentWinnersArr[0].id;
            let winnerTime = currentWinnersArr[0].time;
            if (raceStartedFlag) {
                processRaceWinner(winnerId, winnerTime);
            }
        }
    } catch {
        carAnimation.pause();
        processBrokenCar(carId);
    }
    // console.log('startCarEngineBtn', currentWinnersArr);
}

async function processBrokenCar(carId) {
    let spanWinnerMessage = document.createElement('span');
    spanWinnerMessage.className = 'race-info';
    spanWinnerMessage.setAttribute(
        'style',
        'font-weight:700; color: var(--brocken-car); text-shadow: 2px 2px 8px rgb(168 183 184)',
    );
    spanWinnerMessage.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;Oops! Some problem with the car!`;
    document
        .getElementById(carId)
        .getElementsByClassName('block-nav')[0]
        .append(spanWinnerMessage);
}

async function processRaceWinner(winnerId, winnerTime) {
    await showWinnerResultInGarage(winnerId, winnerTime);

    function showWinnerResultInTable(winnerId, winnerTime) {}
}

async function showWinnerResultInGarage(winnerId, winnerTime) {
    let trackBlock = document.getElementById(winnerId);
    trackBlock.style.backgroundColor = 'var(--winner-color)';

    let spanWinnerMessage = document.createElement('span');
    spanWinnerMessage.className = 'race-info';
    spanWinnerMessage.setAttribute(
        'style',
        'font-weight:700; color: var(--yellow); text-shadow: 2px 2px 8px rgb(168 183 184)',
    );
    spanWinnerMessage.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;Winner! ${Math.floor(
        winnerTime,
    )}ms`;
    document
        .getElementById(winnerId)
        .getElementsByClassName('block-nav')[0]
        .append(spanWinnerMessage);
}

async function stopCarEngineHandler(event) {
    let carIconElem =
        event.currentTarget.parentNode.nextElementSibling.firstElementChild;
    const carId = event.currentTarget.parentNode.parentNode.getAttribute('id');
    let currentStartBtn = event.currentTarget.parentNode.firstElementChild;
    let currentStopBtn = event.currentTarget.parentNode.lastElementChild;

    if (currentStopBtn.classList.contains('disable')) {
        return;
    }

    currentStartBtn.classList.remove('disable');
    currentStopBtn.classList.add('disable');

    let carCurrentAnimation = carIconElem.getAnimations();
    if (carCurrentAnimation.length !== 0) {
        carCurrentAnimation[0].cancel();
    } else {
        carIconElem.animate(
            [
                // key frames
                { transform: 'translateX(82vw)' },
                { transform: 'translateX(0)' },
            ],
            {
                // sync options
                duration: 10,
                iterations: 1,
                easing: 'linear',
                fill: 'forwards',
            },
        );
    }

    await ServerRequest.stopCarEngine(carId);

    // Reset array after stop button clicking
    currentWinnersArr = [];
    await resetInfoAfterRace();
}

function createCarIcon(color) {
    let carIconFragment = document.createDocumentFragment();

    // Create an element within the svg - namespace (NS)
    let carIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    carIcon.classList.add('car-image');
    carIcon.setAttribute('width', '80');
    carIcon.setAttribute('height', '30');
    carIcon.setAttribute('viewBox', '0 0 212 76');
    carIcon.setAttribute('fill', 'none');
    carIconFragment.append(carIcon);

    let iconpPath1 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path',
    );
    iconpPath1.setAttribute(
        'd',
        'M178.519 24.5458C176.214 24.392 174.224 24.2604 173.234 23.9918C166.285 22.1029 141.535 20.9744 138.887 20.8558C134.632 19.7123 130.918 17.1829 126.63 14.2671C117.973 8.37356 107.195 1.03531 85.5599 0.6033L84.0597 0.589931C73.5976 0.589931 61.9337 2.68938 50.8964 5.53586C46.0253 3.75185 38.0016 1.01609 33.5145 0.599959C31.2507 0.393148 30.0921 1.45144 29.6143 2.10529C27.9601 4.37479 29.1204 8.63511 30.3566 11.7845C17.2457 16.3335 7.74705 20.6268 6.91273 21.0083L6.41616 21.3488C4.02404 23.7165 5.06955 27.1078 5.91609 29.8335C6.17136 30.6766 6.43274 31.5059 6.58677 32.2906C6.89484 33.8745 3.29488 34.888 3.25648 34.8947L0.800649 35.5143L4.06986 39.7153L1.3461 43.3736L4.35654 47.0857C2.45227 47.4304 0.615197 48.2025 0.126475 49.8566C-0.542464 52.1056 1.43425 54.4106 6.74343 57.5654C9.38471 59.1359 12.1765 60.0802 15.2908 60.5218C15.1734 59.9741 15.0949 59.4138 15.0233 58.8493C14.9513 58.2803 14.9147 57.7008 14.8859 57.1196C14.8728 56.8163 14.8396 56.5151 14.8396 56.2067C14.8396 44.1386 25.0941 34.3194 37.6974 34.3194C50.3008 34.3194 60.5561 44.1419 60.5561 56.2067C60.5561 57.9949 60.3069 59.7246 59.8819 61.387C59.7414 61.9314 59.5944 62.4721 59.415 63.001C59.2409 63.5137 59.0489 64.0121 58.836 64.5093C69.6882 67.3023 82.7886 68 92.7742 68C99.8031 68 104.594 67.6704 104.675 67.6603H163.163C162.782 67.1331 162.427 66.5824 162.097 66.0213C161.782 65.489 161.499 64.9413 161.232 64.3839C159.943 61.6862 159.206 58.6998 159.206 55.5433C159.206 43.7696 169.213 34.1878 181.509 34.1878C193.808 34.1878 203.813 43.7701 203.813 55.5433C203.813 58.2444 203.264 60.8193 202.307 63.1982C202.026 63.893 201.708 64.5728 201.36 65.2325C200.993 65.9202 200.594 66.5903 200.153 67.2317C208.141 65.7297 210.479 60.6551 210.666 60.1725C213.183 49.4521 212.135 41.0234 207.55 35.1291C200.437 25.9968 186.715 25.0868 178.519 24.5458Z',
    );
    iconpPath1.setAttribute('fill', `${color}`);
    carIcon.append(iconpPath1);

    let iconpPath2 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path',
    );
    iconpPath2.setAttribute(
        'd',
        'M182 37C171.523 37 163 45.0747 163 55C163 64.9253 171.523 73 182 73C192.477 73 201 64.9253 201 55C201 45.0747 192.477 37 182 37ZM182 67.7844C174.547 67.7844 168.505 62.0608 168.505 55C168.505 47.9392 174.547 42.2156 182 42.2156C189.453 42.2156 195.495 47.9392 195.495 55C195.495 62.0608 189.453 67.7844 182 67.7844Z',
    );
    iconpPath2.setAttribute('fill', `var(--dark-gray)`);
    carIcon.append(iconpPath2);

    let iconpPath3 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path',
    );
    iconpPath3.setAttribute(
        'd',
        'M182 43.8707C175.522 43.8707 170.252 48.8633 170.252 55C170.252 61.1368 175.522 66.1294 182 66.1294C188.478 66.1294 193.748 61.1368 193.748 55C193.748 48.8633 188.478 43.8707 182 43.8707ZM192.243 54.2905H186.543C186.427 53.608 186.142 52.9786 185.732 52.4406L189.756 48.6284C191.169 50.1694 192.078 52.1331 192.243 54.2905ZM182.737 45.295C185.013 45.4487 187.085 46.3071 188.713 47.6416L184.69 51.4531C184.122 51.0644 183.457 50.795 182.737 50.6847V45.295ZM181.263 45.295V50.6846C180.543 50.7949 179.878 51.0643 179.31 51.4531L175.287 47.6417C176.915 46.3072 178.987 45.4487 181.263 45.295ZM174.244 48.6285L178.268 52.4408C177.857 52.9786 177.573 53.608 177.457 54.2903H171.757C171.922 52.1331 172.831 50.1696 174.244 48.6285ZM171.755 55.687H177.457C177.573 56.3693 177.858 56.9987 178.268 57.5367L174.233 61.3596C172.822 59.8148 171.915 57.8474 171.755 55.687ZM181.263 64.7051C178.981 64.5509 176.904 63.6885 175.274 62.3479L179.31 58.5242C179.878 58.913 180.543 59.1825 181.263 59.2928V64.7051ZM181.263 57.8561V57.8662C180.945 57.793 180.646 57.6739 180.374 57.5163L180.381 57.5097C179.956 57.2639 179.598 56.9253 179.339 56.522L179.332 56.5285C179.166 56.2709 179.04 55.9881 178.963 55.6867H178.973C178.916 55.4625 178.882 55.2295 178.882 54.9885C178.882 54.7474 178.916 54.5144 178.973 54.2902H178.963C179.04 53.9889 179.166 53.7062 179.332 53.4485L179.339 53.455C179.598 53.0519 179.956 52.7132 180.381 52.4675L180.374 52.4608C180.646 52.3033 180.945 52.1841 181.263 52.1109V52.1211C181.5 52.0667 181.746 52.0346 182 52.0346C182.255 52.0346 182.501 52.0667 182.737 52.1211V52.1109C183.056 52.1842 183.354 52.3031 183.626 52.4607L183.619 52.4674C184.044 52.713 184.402 53.0518 184.661 53.4549L184.668 53.4484C184.835 53.706 184.96 53.9889 185.038 54.2903H185.027C185.084 54.5145 185.118 54.7476 185.118 54.9886C185.118 55.2296 185.084 55.4627 185.027 55.6869H185.038C184.96 55.9883 184.835 56.2711 184.668 56.5288L184.661 56.5223C184.402 56.9254 184.044 57.264 183.619 57.5098L183.626 57.5163C183.354 57.6739 183.056 57.793 182.737 57.8662V57.8561C182.501 57.9105 182.255 57.9426 182 57.9426C181.746 57.9426 181.5 57.9107 181.263 57.8561ZM182.737 64.7051V59.2928C183.457 59.1825 184.122 58.913 184.69 58.5244L188.726 62.3479C187.096 63.6885 185.019 64.5509 182.737 64.7051ZM189.767 61.3596L185.732 57.5368C186.142 56.9988 186.427 56.3694 186.543 55.687H192.245C192.085 57.8474 191.178 59.8148 189.767 61.3596Z',
    );
    iconpPath3.setAttribute('fill', `var(--light-gray)`);
    carIcon.append(iconpPath3);

    let iconpPath4 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path',
    );
    iconpPath4.setAttribute(
        'd',
        'M38.0002 38C27.5235 38 19 46.0747 19 56C19 65.9253 27.5235 74 38.0002 74C48.4767 74 57.0002 65.9253 57.0002 56C57.0002 46.0747 48.4765 38 38.0002 38ZM38.0002 68.7844C30.5471 68.7844 24.5054 63.0608 24.5054 56C24.5054 48.9392 30.5471 43.2156 38.0002 43.2156C45.4529 43.2156 51.4948 48.9392 51.4948 56C51.4948 63.0608 45.4527 68.7844 38.0002 68.7844Z',
    );
    iconpPath4.setAttribute('fill', `var(--dark-gray)`);
    carIcon.append(iconpPath4);

    let iconpPath5 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path',
    );
    iconpPath5.setAttribute(
        'd',
        'M38.0001 44.8707C31.5223 44.8707 26.2524 49.8633 26.2524 56C26.2524 62.1368 31.5224 67.1294 38.0001 67.1294C44.4778 67.1294 49.7478 62.1368 49.7478 56C49.7478 49.8633 44.4777 44.8707 38.0001 44.8707ZM48.2433 55.2905H42.5433C42.4268 54.608 42.1423 53.9786 41.7319 53.4406L45.7559 49.6284C47.1686 51.1694 48.0781 53.1331 48.2433 55.2905ZM38.7372 46.295C41.013 46.4487 43.0851 47.3071 44.7127 48.6416L40.6895 52.4531C40.1216 52.0644 39.4574 51.795 38.7372 51.6847V46.295ZM37.2629 46.295V51.6846C36.5427 51.7949 35.8784 52.0643 35.3105 52.4531L31.2872 48.6417C32.9148 47.3072 34.9871 46.4487 37.2629 46.295ZM30.2437 49.6285L34.268 53.4408C33.8575 53.9786 33.5731 54.608 33.4567 55.2903H27.7567C27.9219 53.1331 28.8314 51.1696 30.2437 49.6285ZM27.755 56.687H33.4568C33.5731 57.3693 33.8577 57.9987 34.2681 58.5367L30.2328 62.3596C28.8217 60.8148 27.9149 58.8474 27.755 56.687ZM37.2629 65.7051C34.981 65.5509 32.904 64.6885 31.2743 63.3479L35.3105 59.5242C35.8784 59.913 36.5427 60.1825 37.2629 60.2928V65.7051ZM37.2629 58.8561V58.8662C36.9448 58.793 36.6462 58.6739 36.3742 58.5163L36.3812 58.5097C35.9557 58.2639 35.5983 57.9253 35.3388 57.522L35.332 57.5285C35.1657 57.2709 35.0399 56.9881 34.9626 56.6867H34.9732C34.9157 56.4625 34.882 56.2295 34.882 55.9885C34.882 55.7474 34.9159 55.5144 34.9732 55.2902H34.9626C35.0399 54.9889 35.1655 54.7062 35.332 54.4485L35.3388 54.455C35.5983 54.0519 35.9559 53.7132 36.3812 53.4675L36.3742 53.4608C36.6462 53.3033 36.9448 53.1841 37.2629 53.1109V53.1211C37.4997 53.0667 37.7456 53.0346 38.0001 53.0346C38.2547 53.0346 38.5006 53.0667 38.7374 53.1211V53.1109C39.0555 53.1842 39.3539 53.3031 39.6258 53.4607L39.6188 53.4674C40.0444 53.713 40.4018 54.0518 40.6613 54.4549L40.6682 54.4484C40.8346 54.706 40.9603 54.9889 41.0377 55.2903H41.0271C41.0845 55.5145 41.1183 55.7476 41.1183 55.9886C41.1183 56.2296 41.0844 56.4627 41.0271 56.6869H41.0377C40.9603 56.9883 40.8348 57.2711 40.6682 57.5288L40.6613 57.5223C40.4018 57.9254 40.0443 58.264 39.6188 58.5098L39.6258 58.5163C39.3539 58.6739 39.0555 58.793 38.7374 58.8662V58.8561C38.5006 58.9105 38.2547 58.9426 38.0001 58.9426C37.7456 58.9426 37.4997 58.9107 37.2629 58.8561ZM38.7372 65.7051V60.2928C39.4574 60.1825 40.1216 59.913 40.6895 59.5244L44.7255 63.3479C43.096 64.6885 41.019 65.5509 38.7372 65.7051ZM45.7671 62.3596L41.732 58.5368C42.1424 57.9988 42.4268 57.3694 42.5434 56.687H48.2451C48.0851 58.8474 47.1784 60.8148 45.7671 62.3596Z',
    );
    iconpPath5.setAttribute('fill', `var(--light-gray)`);
    carIcon.append(iconpPath5);

    return carIconFragment;
}

/*selectBtnClickHandling callback*/
function selectBtnClickHandling(event) {
    let selectBtn = event.currentTarget;
    function renderHighlightedTrackBlock(elem) {
        let allTrackBlocks = document.getElementsByClassName('track-block');
        Array.from(allTrackBlocks).forEach((el) =>
            el.classList.contains('selected')
                ? el.classList.remove('selected')
                : 1,
        );
        elem.parentNode.parentNode.classList.add('selected');
    }
    renderHighlightedTrackBlock(selectBtn);

    let selectedCarName =
        selectBtn.parentNode.parentNode.getElementsByClassName('car-name')[0]
            .innerHTML;
    let selectedCarColor = selectBtn.parentNode.parentNode
        .getElementsByTagName('path')[0]
        .getAttribute('fill');

    let inputUpdateNameElem = document.getElementsByClassName('input-text')[1];
    inputUpdateNameElem.value = `${selectedCarName}`;
    let inputUpdateNameColorElem =
        document.getElementsByClassName('input-color')[1];
    inputUpdateNameColorElem.value = `${selectedCarColor}`;
}
/*//selectBtnClickHandling callback*/

/*removetBtnClickHandling callback*/
async function removetBtnClickHandling(event) {
    let removeBtn = event.currentTarget;
    let carBlockElem = removeBtn.parentNode.parentNode;
    let currentCarId = carBlockElem.getAttribute('id');

    await ServerRequest.deleteCar(currentCarId);
    try {
        await ServerRequest.deleteWinner(currentCarId);
    } catch {
        console.log('No such car in Winners');
    }

    renderCarsInGarage();
}
/*//removetBtnClickHandling callback*/

/*Car creating by clicking button CREATE in Garage view*/
let createBtn = document.getElementsByClassName('create')[0];
createBtn.addEventListener('click', createNewCarHandler);

async function createNewCarHandler(event) {
    let formCreate = document.getElementsByClassName('form-create')[0];
    let newCarName = formCreate.getElementsByClassName('input-text')[0].value;
    let newCarColor = formCreate.getElementsByClassName('input-color')[0].value;

    if (newCarName) {
        await ServerRequest.createCar(newCarName, newCarColor);
        renderCarsInGarage();
    }
}
/*//Car creating by clicking button CREATE in Garage view*/

/*Car updating by clicking button UPDATE in Garage view*/

let updateBtn = document.getElementsByClassName('update')[0];
updateBtn.addEventListener('click', updateSelectedCarHandler);

async function updateSelectedCarHandler(event) {
    if (document.getElementsByClassName('selected').length) {
        let currentCarId = document
            .getElementsByClassName('selected')[0]
            .getAttribute('id');
        let currentInputUpdateNameElem =
            document.getElementsByClassName('input-text')[1];
        let currentInputUpdateColorElem =
            document.getElementsByClassName('input-color')[1];
        let currentCarName = currentInputUpdateNameElem.value;
        let currentCarColor = currentInputUpdateColorElem.value;

        await ServerRequest.updateCar(
            currentCarId,
            currentCarName,
            currentCarColor,
        );
        renderCarsInGarage();
    } else {
        alert('Please select the car you want to update.');
    }
}
/*//Car updating by clicking button UPDATE in Garage view*/

/*All car race launching by clicking RACE btn in Garage view*/
let raceBtn = document.getElementsByClassName('race')[0];
raceBtn.addEventListener('click', raceLaunchHandler);

async function raceLaunchHandler(event) {
    raceStartedFlag = true;
    let resetBtn = document.getElementsByClassName('reset')[0];

    if (event.currentTarget.classList.contains('disable')) {
        return;
    }

    let allStartBtns = document.querySelectorAll('.button-start');
    allStartBtns.forEach((elem) => elem.click());

    event.currentTarget.classList.add('disable');
    resetBtn.classList.remove('disable');
}
/*//All car race launching by clicking RACE btn in Garage view*/

/*All car race reseting by clicking RESET btn in Garage view*/
let resetBtn = document.getElementsByClassName('reset')[0];
resetBtn.addEventListener('click', raceResetHandler);

async function raceResetHandler(event) {
    raceStartedFlag = false;
    let raceBtn = document.getElementsByClassName('race')[0];

    if (event.currentTarget.classList.contains('disable')) {
        return;
    }

    let allStopBtns = document.querySelectorAll('.button-stop');
    allStopBtns.forEach((elem) => elem.click());

    // await resetInfoAfterRace();

    raceBtn.classList.remove('disable');
    event.currentTarget.classList.add('disable');
}

async function resetInfoAfterRace() {
    let allInfoSpans = [...document.getElementsByClassName('race-info')];
    allInfoSpans.forEach((elem) => elem.remove());
    let allTrackBlocks = [...document.getElementsByClassName('track-block')];
    allTrackBlocks.forEach(
        (elem) => (elem.style.backgroundColor = 'var(--black)'),
    );
}
/*//All car race reseting by clicking RESET btn in Garage view*/

/*//GARAGE VIEW - RENDERING */

/*----------------//GARAGE view--------------------*/

/*----------------WINNERS view--------------------*/
function getWinnersViewContent() {
    const fragmentWinnersViewContent = document.createDocumentFragment();

    let divWinnersViewContent = document.createElement('div');
    divWinnersViewContent.className = 'winners-content hide';
    fragmentWinnersViewContent.append(divWinnersViewContent);

    return fragmentWinnersViewContent;
}

let winnersViewContent = getWinnersViewContent();
document.body.append(winnersViewContent);

function getWinnersPageInfoFragment() {
    const fragmentWinnersPageInfo = document.createDocumentFragment();

    let divWinners = document.createElement('div');
    divWinners.className = 'winners';
    divWinners.innerHTML = 'Winners (<span class="winners-amount"></span>)';
    fragmentWinnersPageInfo.append(divWinners);

    let divPageWinners = document.createElement('div');
    divPageWinners.className = 'page-winners';
    divPageWinners.innerHTML = 'Page #<span class="page-number"></span>';
    fragmentWinnersPageInfo.append(divPageWinners);

    return fragmentWinnersPageInfo;
}

let pageWinnersInfoFragment = getWinnersPageInfoFragment();
document
    .getElementsByClassName('winners-content')[0]
    .append(pageWinnersInfoFragment);

function getTableOfWinners() {
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
document
    .getElementsByClassName('winners-content')[0]
    .append(tableOfWinnersFragment);

let paginationNavigationWinners = getPaginationNavigation(false);
document
    .getElementsByClassName('winners-content')[0]
    .append(paginationNavigationWinners);

/*WINNNERS VIEW - RENDERING */
/*Car rendering in Winners view from DB*/
async function renderWinnersInTable() {
    let winnersRows = document.getElementsByClassName('tr-row');
    while (winnersRows.length > 0) {
        winnersRows[0].parentNode.removeChild(winnersRows[0]);
    }

    let winnersInTable = await ServerRequest.getWinners(
        currentPageWinners,
        carsNumberPerPageWinners,
    );
    let winnersInTableArr = await winnersInTable.data;
    let pagesQuantity = Math.ceil(
        winnersInTable.totalCount / carsNumberPerPageWinners,
    );

    // Rendering amount of cars in the table of the WINNERS view
    document.getElementsByClassName('winners-amount')[0].innerHTML =
        winnersInTable.totalCount;

    // Rendering page in the Winners
    document.getElementsByClassName(
        'page-number',
    )[1].innerHTML = `${currentPageWinners}/${pagesQuantity}`;

    let fragmentCarRowsInTable = document.createDocumentFragment();
    let tbody = document.getElementsByClassName('tbody')[0];

    for (let index = 0; index < winnersInTableArr.length; index++) {
        let elem = winnersInTableArr[index];
        let currentCar = await ServerRequest.getCar(elem.id);

        let carIcon = createCarIcon(currentCar.color);

        let tr = document.createElement('tr');
        tr.className = 'tr-row';
        fragmentCarRowsInTable.append(tr);

        let thNumber = document.createElement('td');
        thNumber.className = 'th-number';
        thNumber.innerHTML = `${index + 1}`;
        tr.append(thNumber);

        let thCar = document.createElement('td');
        thCar.className = 'th-car';
        thCar.append(carIcon);
        tr.append(thCar);

        let thName = document.createElement('td');
        thName.className = 'th-Name';
        thName.innerHTML = `${currentCar.name}`;
        tr.append(thName);

        let thWins = document.createElement('td');
        thWins.className = 'th-Wins';
        thWins.innerHTML = `${elem.wins}`;
        tr.append(thWins);

        let thBestTime = document.createElement('td');
        thBestTime.className = 'th-BestTime';
        thBestTime.innerHTML = `${elem.time}`;
        tr.append(thBestTime);
    }
    tbody.append(fragmentCarRowsInTable);
}
/*//Car rendering in Winners view from DB*/
/*//WINNNERS VIEW - RENDERING */

/*---------------//WINNERS view----------------------*/

/*Toggling between GARAGE and WINNERS views*/
let btnToGarage = document.getElementsByClassName('to-garage button')[0];
let btnToWinners = document.getElementsByClassName('to-winners button')[0];

btnToGarage.addEventListener('click', () => {
    if (
        document
            .getElementsByClassName('garage-content')[0]
            .classList.contains('hide')
    ) {
        document
            .getElementsByClassName('garage-content')[0]
            .classList.remove('hide');
    }
    document.getElementsByClassName('winners-content')[0].classList.add('hide');
    renderCarsInGarage();
});

btnToWinners.addEventListener('click', () => {
    if (
        document
            .getElementsByClassName('winners-content')[0]
            .classList.contains('hide')
    ) {
        document
            .getElementsByClassName('winners-content')[0]
            .classList.remove('hide');
    }
    document.getElementsByClassName('garage-content')[0].classList.add('hide');
    renderWinnersInTable();
});
/*//Toggling between GARAGE and WINNERS views*/
