const allMonths = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4,
    May: 5, Jun: 6, Jul: 7, Aug: 8,
    Sept: 9, Oct: 10, Nov: 11, Dec: 12
}

const homePage = document.getElementById('years');
const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, d) => {
    acc[d.id] = d;
    return acc
}, {});
const months = [...document.querySelectorAll('.daysCalendar')].reduce((acc, d) => {
    acc[d.id] = d;
    return acc
}, {})

document.body.innerHTML = '';
document.body.appendChild(homePage);


homePage.addEventListener('click', e => {
    e.stopImmediatePropagation();
    const target = e.target;
    if (target.tagName === 'DIV' || target.tagName === 'TD') {
        let selectedYear = target.textContent.trim();
        const calendarYear = `year-${selectedYear}`;
        document.body.innerHTML = '';
        document.body.appendChild(years[calendarYear]);
    }
});

document.body.addEventListener('click', e => {
    const target = e.target;
    if (target.tagName === 'CAPTION') {
        const section = target.parentNode.parentNode;
        if(section.id.includes('year-')){
            document.body.innerHTML = '';
            document.body.appendChild(homePage);
        } else if (section.id.includes('month-')){
            let selectedYear = section.id;
            selectedYear = selectedYear.split('-')[1];
            const calendarYear = `year-${selectedYear}`;
            document.body.innerHTML = '';
            document.body.appendChild(years[calendarYear])
        }

    } else if (target.tagName === 'DIV' || target.tagName === 'TD') {
        const month = target.textContent.trim();
        const curYear = document.querySelector('caption').textContent.trim();
        const curMonth = allMonths[month];
        if (curMonth !== undefined) {
            const calendarMonth = `month-${curYear}-${curMonth}`;
            document.body.innerHTML = '';
            document.body.appendChild(months[calendarMonth]);
        }
    }
})