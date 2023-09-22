document.addEventListener("DOMContentLoaded", function() {

    var ragearray = [];
    
    document.getElementById('loadtext').addEventListener('click', function() {
        var filereader = new FileReader();
        
        filereader.onload = function() {
            var result = filereader.result;
            document.getElementById('output').innerText = result;
        };

        // filereader.onload = function() {
        //     var result = filereader.result;
        //     result.split('\n').array.forEach(element => {
        //     ragearray.push(element);
        //     });
            

        
        
        filereader.readAsText(document.getElementById("inputfile").files[0]);
    });

    document.getElementById("ragebutton").addEventListener("click", function() {
        document.getElementById("effectdisplay").innerText = "Result";
        // document.getElementById("output").innerText = ragearray[3];

    });
});
