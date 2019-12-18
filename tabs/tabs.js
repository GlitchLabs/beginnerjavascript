const tabs = document.querySelector('.tabs');
// const jsButton = document.querySelector(`#js`);
// const rubyButton = document.querySelector(`#ruby`);
// const phpButton = document.querySelector(`#php`);

const tabButtons = tabs.querySelectorAll(`[role='tab']`);
const tabPanels = Array.from(tabs.querySelectorAll(`[role='tabpanel']`));

function handleTabClick(event) {
  const clickedTab = event.currentTarget;
  const clickedTabId = clickedTab.attributes[2].nodeValue;
  // console.dir(clickedTab);

  // hide all tab panels
  tabPanels.forEach(panel => (panel.hidden = true));
  // mark all tabs as unselected

  // Method 1
  // tabButtons.forEach(tab => (tab.attributes[1].nodeValue = false));
  // Method 2
  tabButtons.forEach(tab => tab.setAttribute(`aria-selected`, false));

  // mark the clicked tab as selected
  // method 1
  // clickedTab.attributes[1].nodeValue = true;
  // Method 2
  clickedTab.setAttribute(`aria-selected`, true);
  // find the associated tab panel and show it
  // Method 1
  /* tabPanels.forEach(panel => {
    const panelAriaLabel = panel.attributes[1].nodeValue;
    // console.dir(panel);
    console.log(panelAriaLabel, clickedTabId);
    if (panel.attributes[1].nodeValue === clickedTabId) {
      console.log('equal');
      panel.hidden = false;
    }
  }); */
  // Method 2
  /* const tabPanel2 = tabs.querySelector(`[aria-labelledby=${clickedTabId}]`);
  console.log(tabPanel2);
  tabPanel.hidden = false;
*/
  // Method 3

  const tabPanel3 = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === clickedTabId
  );
  // console.log(tabPanel3);
  tabPanel3.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

const isAdmin = true;
function showUp() {
  console.log('we show up out here');
}

const result = isAdmin && showUp();
