// blocks/hero/hero.js
// EDS automatically calls this function when it finds a .hero div on the page

export default function decorate(block) {

  // Get all rows from the block
  const rows = [...block.children];

  // First row = heading
  const headingText = rows[0]?.textContent.trim() || '';

  // Second row = description
  const descText = rows[1]?.textContent.trim() || '';

  // Third row = button text
  const btnText = rows[2]?.textContent.trim() || '';

  // Clear the block and rebuild with semantic HTML
  block.innerHTML = '';

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('hero-content');

  // Create heading
  if (headingText) {
    const h1 = document.createElement('h1');
    h1.textContent = headingText;
    wrapper.append(h1);
  }

  // Create description
  if (descText) {
    const p = document.createElement('p');
    p.textContent = descText;
    wrapper.append(p);
  }

  // Create button
  if (btnText) {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = btnText;
    a.classList.add('hero-btn');
    wrapper.append(a);
  }

  block.append(wrapper);
}