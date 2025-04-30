chrome.runtime.onInstalled.addListener(() => {
  console.log("Twitter to vxtwitter extension installed");
});

function modifyLink(text) {
  if (text.includes("x.com")) {
    return text.replace(/https?:\/\/(www\.)?x\.com/g, "https://vxtwitter.com");
  }
  return text;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "modifyClipboard" && request.text) {
    const modifiedText = modifyLink(request.text);
    sendResponse({modifiedText: modifiedText});
    return true; 
  }
});