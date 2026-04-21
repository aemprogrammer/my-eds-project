// blocks/cards/cards.js
export default function decorate(block) {
  // Get all rows
  const rows = [...block.children];
  
  // Clear the block
  block.innerHTML = '';
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    // Skip if less than 2 cells
    if (cells.length < 2) return;
    
    // Create card
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Cell 0: Image or empty
    const firstCell = cells[0];
    const hasImage = firstCell?.querySelector('img');
    if (hasImage) {
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('card-image');
      imgWrapper.innerHTML = firstCell.innerHTML;
      card.append(imgWrapper);
    }
    
    // Cell 1: Heading
    const headingText = cells[1]?.textContent.trim() || '';
    if (headingText) {
      const h3 = document.createElement('h3');
      h3.textContent = headingText;
      card.append(h3);
    }
    
    // Cell 2: Description
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