async function shorten() {
    let longUrl = document.getElementById("longUrl").value.trim();
    let customCode = document.getElementById("customCode").value.trim();

    if (!longUrl) return alert("Enter a URL");
    if (!customCode) return alert("Enter a short code");

    const urlsResponse = await fetch('/tinyurl/urls.json');  // add /tinyurl/
    const urls = await urlsResponse.json();

    if (urls[customCode]) {
        return alert("This code is already taken. Choose another.");
    }

    urls[customCode] = longUrl;

    let shortUrl = window.location.origin + '/tinyurl/' + customCode + '.craft';
    document.getElementById("result").innerHTML =
        `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a><br>
        ⚠️ To make it permanent, update urls.json in GitHub.`;
}
