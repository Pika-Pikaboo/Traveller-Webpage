const openbtn = document.querySelector(".hamburger");
const navigation = document.querySelector(".sec-nav");

openbtn.addEventListener('click', () => {
    if (navigation.style.display === 'block') {
        navigation.style.display = 'none';
        navigation.setAttribute("id", "haha");
    } else {
        navigation.style.display = 'block';
        navigation.setAttribute("id", "Home");
    }
});