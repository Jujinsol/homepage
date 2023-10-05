document.addEventListener("DOMContentLoaded", function() {
    // 버튼 클릭 시 알림 메시지 표시
    const alertButton = document.getElementById("alert-button");
/*     alertButton.addEventListener("click", function() {
        alert("Button clicked!");
    }); */

    // "Learn more" 버튼 클릭 시 learn.html로 이동
    alertButton.addEventListener("click", function() {
        window.location.href = "learn-more.html";
    });

    // 이미지 변경
    const imageElement = document.getElementById("change-image");
    const originalImageSrc = imageElement.src;
    const newImageSrc = "./images/mountain.jpg";

    imageElement.addEventListener("mouseover", function() {
        imageElement.src = newImageSrc;
    });

    imageElement.addEventListener("mouseout", function() {
        imageElement.src = originalImageSrc;
    });
});