(function() {
    var images = document.querySelectorAll('img'),
        errorImageCount = 0,
        errorImageCache = {};

    console.clear();
    for (var i = 0; image = images[i]; i++) {
        if (errorImageCache[image.src]) {
            continue;
        }
        if (image.width !== image.naturalWidth || image.height !== image.naturalHeight) {
            errorImageCount++;
            errorImageCache[image.src] = true;
            console.log('Image Size Checker: %s, display:%dx%d, natural:%dx%d', image.src, image.width, image.height, image.naturalWidth, image.naturalHeight);
        }
    }

    if (errorImageCount) {
        console.log('%c%d images are not served properly!', "color:white;background:red;font-size:16px;", errorImageCount);
    } else {
        console.log('all images are served properly!', "color:white;background:green;font-size:16px;");
    }
})();
