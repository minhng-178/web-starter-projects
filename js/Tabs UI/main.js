// Binding
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Get Element
const tabsMenu = $$('.tab-item');
const tabsPane = $$('.tab-pane');
const lineTabMenu = $('.tabs__line')

// Function

// Init
function start() {
    handleLineMenu($('.tab-item--active'));
}
start()

// handle click event to change tab
tabsMenu.forEach(
    (tab, index) => tab.onclick = function (e) {
        handleActiveTab(this);
        handleActiveTabContent(tabsPane[index])
    }
)

function handleActiveTab(tab) {
    // remove class 'active' from active tab
    $('.tab-item--active').classList.remove('tab-item--active');
    // active for tab onClick
    tab.classList.add('tab-item--active');
    handleLineMenu(tab);
}

function handleLineMenu(tabActive) {
    lineTabMenu.style.width = tabActive.offsetWidth + 'px';
    lineTabMenu.style.left = tabActive.offsetLeft + 'px';
}

function handleActiveTabContent(tabContent) {
    // remove class 'active' from active tab
    $('.tab-pane--active').classList.remove('tab-pane--active');
    // active for tab onClick
    tabContent.classList.add('tab-pane--active');
}
