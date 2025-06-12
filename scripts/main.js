function copyToClipboard() {
    const text = document.getElementById('wallet').innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied: " + text);
    });
  }
  