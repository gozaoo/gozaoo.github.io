function FunAlert(Title, Text ,id) {
    var doc = document.getElementById('alertOutSide')
    doc.innerHTML = '<div class="alertBox" id="'+id+'"><h1>' + Title + '</h1><div class = "alertBoxText" ><div class = "alertBoxTextBox" >'+Text + '</div></div></div>'
    console.log(doc);
}