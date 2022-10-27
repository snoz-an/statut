var xhr = new XMLHttpRequest()
    xhr.open(
        'GET',
        // 'https://delaemit.ru/actions/logo.php?client=Фреш',
        true
    )
    xhr.send()

    xhr.onreadystatechange = function() {
        if (xhr.status === 200) {
            console.log('result', xhr.responseText)
            document.getElementById("delatimITLogo").innerHTML = xhr.responseText
        } else {
            console.log('err', xhr.responseText)
        }
    }
