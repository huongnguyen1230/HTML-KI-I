function numericonly()
{
    if (!event.keyCode >=48 && event.keyCode <=57)
    event.returnValue=false;
}
function countWords()
{
    var message = document.getElementById('txtMessage').value;
    massage= massage.replace(/\s+/g, '');
    var numberOfWords = massage.split('').length;
    document.getElementById('txtTrack').value = "words Remaning:+" +
        "eval(50 - numberOfWords);"
        "if (numberOfWords >50)"
        alert ("too many wwords.");

}