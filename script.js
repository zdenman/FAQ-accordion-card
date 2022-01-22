const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", () => {
        const height = accordionItemHeader.nextElementSibling.scrollHeight;
        // console.log(height);
        accordionItemHeader.classList.toggle("active");
        if (accordionItemHeader.classList.contains("active")){
            accordionItemHeader.nextElementSibling.style.maxHeight = `${height}px`;
        }else{
            accordionItemHeader.nextElementSibling.style.maxHeight = `0px`;
        }
    });
});
