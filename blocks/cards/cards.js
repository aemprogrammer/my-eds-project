// blocks/cards/cards.js
// EDS automatically calls this function when it finds a .cards div on the page

export default function decorate(block) {

  // Each row in the Word/Docs table becomes one card
  const rows = [...block.children];

  // Clear the block — we will rebuild it properly
  block.innerHTML = '';

  // Create a cards container div
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');

  rows.forEach((row) => {
    // Each row has columns (cells)
    const cells = [...row.children];

    // Create a card div
    const card = document.createElement('div');
    card.classList.add('card');

    // Column 0: Image (if exists)
    const imgCell = cells[0];
    if (imgCell) {
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('card-image');
      if (imgCell.querySelector('img')) {
        imgWrapper.innerHTML = imgCell.innerHTML;
      } else {
        // No image — skip image wrapper
        imgWrapper.innerHTML = imgCell.innerHTML;
      }
      card.append(imgWrapper);
    }

    // Column 1: Heading
    const headingText = cells[1]?.textContent.trim() || '';
    if (headingText) {
      const h3 = document.createElement('h3');
      h3.textContent = headingText;
      card.append(h3);
    }

    // Column 2: Description
    const descText = cells[2]?.textContent.trim() || '';
    if (descText) {
      const p = document.createElement('p');
      p.textContent = descText;
      card.append(p);
    }

    cardsContainer.append(card);
  });

  block.append(cardsContainer);
}