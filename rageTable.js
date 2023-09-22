document.addEventListener("DOMContentLoaded", function() {
    
    var ragearray = [];
    
    document.getElementById('inputfile').addEventListener('change', function() {
        var filereader = new FileReader();
        
        filereader.onload = function() {
            var result = filereader.result;
            ragearray = result.split('\n');
            
        };

        filereader.readAsText(document.getElementById("inputfile").files[0]);
    });

    document.getElementById("ragebutton").addEventListener("click", function() {
        document.getElementById("effectdisplay").innerText = ragearray[Math.floor(Math.random() * (ragearray.length))];
        
    });
});
