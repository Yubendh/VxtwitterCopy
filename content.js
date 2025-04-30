document.addEventListener('copy', function(e) {
  if (window.location.hostname.includes('x.com')) {
    const selectedText = window.getSelection().toString();
    
    if (selectedText.includes('x.com')) {
      e.preventDefault();
      
      const modifiedText = selectedText.replace(/https?:\/\/(www\.)?x\.com/g, "https://vxtwitter.com");
      
      e.clipboardData.setData('text/plain', modifiedText);
      console.log("Modified link copied to clipboard:", modifiedText);
    }
  }
});

document.addEventListener('mousedown', function(e) {
  if (e.button === 2 && e.target.tagName === 'A') {
    window.lastRightClickedLink = e.target.href;
  }
});

document.addEventListener('copy', function(e) {
  if (window.lastRightClickedLink && window.lastRightClickedLink.includes('x.com')) {
    e.preventDefault();
    const modifiedText = window.lastRightClickedLink.replace(/https?:\/\/(www\.)?x\.com/g, "https://vxtwitter.com");
    e.clipboardData.setData('text/plain', modifiedText);
    console.log("Modified context menu link copied:", modifiedText);
    window.lastRightClickedLink = null;
  }
});