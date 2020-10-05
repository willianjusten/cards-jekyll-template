module.exports = function headingLinks () {
  const postContent = document.querySelector('main.post');
  if (postContent) {
    const headings = postContent.querySelectorAll('h2,h3,h4,h5,h6');
    const linkContent = '#';
    for (const heading of headings) {
        const linkIcon = document.createElement('a');
        linkIcon.classList.add('heading-link');
        linkIcon.setAttribute('href', `#${heading.id}`);
        linkIcon.innerHTML = linkContent;
        heading.appendChild(linkIcon);
    }
  }
};