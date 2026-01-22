function generateCode(length=6){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for(let i=0;i<length;i++){
        code += chars.charAt(Math.floor(Math.random()*chars.length));
    }
    return code;
}

async function shorten(){
    let longUrl = document.getElementById("longUrl").value;
    if(!longUrl) return alert("Enter a URL");

    let code = generateCode();

    // Load existing URLs
    const urlsResponse = await fetch('urls.json');
    const urls = await urlsResponse.json();

    // Add new URL
    urls[code] = longUrl;

    // Show result
    let shortUrl = window.location.origin + '/' + code;
    document.getElementById("result").innerHTML = 
        `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a><br>
        ⚠️ To make it permanent, manually update urls.json on GitHub.`;
}
