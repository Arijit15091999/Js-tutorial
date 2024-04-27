function downloadData(url) {
    console.log('downloading data from ' + url)
    setTimeout(function() {
        console.log('data downloaded from ' + url)
        console.log('time taken is 5s')
        const downloadedData = 'dummy data'
        const fileName = saveFile(downloadedData)
        const newUrl = 'www.abc.com'
        uploadFile(newUrl, fileName)
    }, 5000)
}

function saveFile(data) {
    console.log('saving file')
    return 'newFile.txt'
}

function uploadFile(url, fileName) {
    console.log(`uploading ${fileName} to ` + url)
    setTimeout(function() {
        console.log(`${fileName} uploaded to ${url}`)
        console.log('done')
    }, 5000)
}

downloadData('www.xyz.com')