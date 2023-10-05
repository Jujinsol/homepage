document.addEventListener("DOMContentLoaded", function() {
    // 버튼 클릭 시 알림 메시지 표시
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function() {
        alert("Button clicked!");
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