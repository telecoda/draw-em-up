var  maxFileSize = 1024 * 100;


module.exports = function(dropDiv, inputFileElement, onLoadCallback) {

    return function() {
        console.log("Setting up drag/drop for:" + dropDiv + " and :" + inputFileElement+ " with a callback to:"+ onLoadCallback);
 
        var startRead = function(evt) {
            var file = inputFileElement.files[0];

            processFile(file);

            evt.stopPropagation();
            evt.preventDefault();
        };

        var startReadFromDrag = function(evt) {
            var file = evt.dataTransfer.files[0];

            processFile(file);

            evt.stopPropagation();
            evt.preventDefault();
        };

        var processFile = function(file) {

            console.log("Div:"+dropDiv + " InputElement:" + inputFileElement);

            if (file) {
                if (file.type.match("image.*")) {
                    if (file.size > this.maxFileSize) {
                        alert("Sorry, file is too big.  We only accept files of size " + this.maxFileSize + " bytes and lower. Your file is " +file.size + " bytes");
                    } else {
                        getAsImage(file);
                    }
                }
                else {
                    alert("Sorry, image files only!");
                }
            }

        };

        var getAsImage = function(readFile) {
            var reader = new FileReader();
            reader.readAsDataURL(readFile);
            reader.onload = addImg;
        };

        var addImg = function(imgsrc) {
            onLoadCallback(imgsrc.target.result);
        };

        var doMagic = function() {
            console.log("Doing magic for:" + dropDiv + " and :" + inputFileElement+ " with a callback to:"+ onLoadCallback);
        };


        

        dropDiv.ondragover = function () { this.className = 'drophere'; doMagic(); return false; };
        dropDiv.ondragend = function () { this.className = 'draghere'; return false; };
        dropDiv.ondrop = function (e) { this.className = 'draghere'; e.preventDefault(); startReadFromDrag(e); return false; };
        inputFileElement.onchange = function(e) { startRead(e); return false; };

    }

    
    }
    
//module.exports = FileDropper;