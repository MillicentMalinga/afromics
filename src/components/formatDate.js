function formatDate(isoString) {
    let date = new Date(isoString);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export default formatDate;