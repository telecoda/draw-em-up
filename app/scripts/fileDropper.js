var fileDropper = {

    maxFileSize : 1024 * 100,
    that : undefined,
    onImageLoadCallback : undefined,
    inputFileElement : undefined,

    init: function(dropDiv, inputFileElement, onLoadCallback) {

        that = this;
        that.onLoadCallback = onLoadCallback;
        that.inputFileElement = inputFileElement;
        var dropDiv = document.getElementById(dropDiv);

        
        if (dropDiv == undefined) {
            alert("Element:" + dropDiv + " not found");
        }

        dropDiv.ondragover = function () { this.className = 'drophere'; that.doMagic(); return false; };
        dropDiv.ondragend = function () { this.className = 'draghere'; return false; };
        dropDiv.ondrop = function (e) { this.className = 'draghere'; e.preventDefault(); that.startReadFromDrag(e); return false; };
        
        // add onchanged handler to inputFileElement
        var inputFile = document.getElementById(inputFileElement);
        if (inputFile == undefined) {
            alert("Element:" + inputFileElement + " not found");
        }

        inputFile.onchange = function(e) { that.startRead(e); return false; };

    },

    startRead: function(evt) {
        var file = document.getElementById(this.inputFileElement).files[0];

        this.processFile(file);

        evt.stopPropagation();
        evt.preventDefault();
    },

    startReadFromDrag: function(evt) {
        var file = evt.dataTransfer.files[0];

        this.processFile(file);

        evt.stopPropagation();
        evt.preventDefault();
    },

    processFile: function(file) {

        if (file) {
            if (file.type.match("image.*")) {
                if (file.size > this.maxFileSize) {
                    alert("Sorry, file is too big.  We only accept files of size " + this.maxFileSize + " bytes and lower. Your file is " +file.size + " bytes");
                } else {
                    this.getAsImage(file);
                }
            }
            else {
                alert("Sorry, image files only!");
            }
        }

    },

    getAsImage: function(readFile) {
        var reader = new FileReader();
        reader.readAsDataURL(readFile);
        reader.onload = this.addImg;
    },

    addImg: function(imgsrc) {
        that.onLoadCallback(imgsrc.target.result);
    },

    doMagic: function() {
        console.log("doing the magic");
    }

}

module.exports = fileDropper;