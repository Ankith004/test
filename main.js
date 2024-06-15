function goToManual(semester) {
    // You can replace this URL with the actual URL of the page containing the lab manual for the selected semester
    window.location.href = 'lab_manuals/' + semester.replace(/\s+/g, '-').toLowerCase() + '.html';
}
