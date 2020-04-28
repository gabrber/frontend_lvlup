const getDate = () => {
    var currentYear = new Date().getFullYear();
    const rightsYear = document.querySelector('.rights__year');
    rightsYear.innerHTML = currentYear;
}

export default getDate;