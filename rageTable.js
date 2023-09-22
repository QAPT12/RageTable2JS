document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('loadtext').addEventListener('click', function() {
        var filereader = new FileReader();
        
        filereader.onload = function() {
            var result = filereader.result;
            document.getElementById('output').innerText = result;
        };
        
        filereader.readAsText(document.getElementById("inputfile").files[0]);
    });
});