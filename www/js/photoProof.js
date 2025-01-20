document.getElementById("cameraTakeProofPhoto").addEventListener("click", cameraTakePicture);

function cameraTakePicture() { 
    navigator.camera.getPicture(onSuccess, onFail, {  
        quality: 50, 
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: 1,
        encodingType: 0 
    });  
    
    function onSuccess(imageData) { 
        var image = document.getElementById('photoProof'); 
        image.src = imageData;
        sendBtn.disabled = false;
    }  
    
    function onFail(message) { 
        alert('Failed because : ' + message);
    } 
}