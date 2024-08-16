// calendar.js
class Calendar {
    constructor(options = {}) {
        // Default options
        this.options = {
            monthNames: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            weekNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            buttonTexts: {
                prevMonth: 'Previous Month',
                nextMonth: 'Next Month',
                prevYear: 'Previous Year',
                nextYear: 'Next Year',
                viewYear: 'View Full Year'
            },
            ...options // Override defaults with user options
        };

        // Initialize calendar state
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth();

        // Render initial calendar
        this.render();
    }

    getMonthName(month) {
        return this.options.monthNames[month];
    }

    getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }

    getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    generateCalendar(year, month) {
        const daysInMonth = this.getDaysInMonth(year, month);
        const firstDay = this.getFirstDayOfMonth(year, month);

        const calendar = [];
        let week = [];

        for (let i = 0; i < firstDay; i++) {
            week.push('');
        }

        for (let day = 1; day <= daysInMonth; day++) {
            week.push(day);
            if ((firstDay + day) % 7 === 0) {
                calendar.push(week);
                week = [];
            }
        }

        if (week.length > 0) {
            calendar.push(week);
        }

        return calendar;
    }

    renderCalendar(year, month) {
        const calendar = this.generateCalendar(year, month);
        const monthName = this.getMonthName(month);

        let html = `<h2>${monthName} ${year}</h2>`;
        html += '<table class="calendar"><thead><tr>';
        for (const dayName of this.options.weekNames) {
            html += `<th>${dayName}</th>`;
        }
        html += '</tr></thead><tbody>';

        for (const week of calendar) {
            html += '<tr>';
            for (const day of week) {
                html += `<td${day === '' ? ' class="empty"' : ''}>${day}</td>`;
            }
            html += '</tr>';
        }

        html += '</tbody></table>';
        return html;
    }

    renderYearCalendar(year) {
        const monthNames = this.options.monthNames;
        let html = `<h2>${year}</h2>`;

        for (let month = 0; month < 12; month++) {
            html += `<h3>${monthNames[month]}</h3>`;
            html += this.renderCalendar(year, month);
        }

        return html;
    }

    displayMonthCalendar(year, month) {
        const calendarContainer = document.getElementById('calendar');
        calendarContainer.innerHTML = this.renderCalendar(year, month);
    }

    displayYearCalendar(year) {
        const calendarContainer = document.getElementById('calendar');
        calendarContainer.innerHTML = this.renderYearCalendar(year);
    }

    updateCalendar(action) {
        if (action === 'prev') {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }
        } else if (action === 'next') {
            if (this.currentMonth === 11) {
                this.currentMonth = 0;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }
        } else if (action === 'prev-year') {
            this.currentYear--;
        } else if (action === 'next-year') {
            this.currentYear++;
        }

        this.displayMonthCalendar(this.currentYear, this.currentMonth);
    }

    render() {
        const calendarContainer = document.getElementById('calendar');
        calendarContainer.innerHTML = this.renderCalendar(this.currentYear, this.currentMonth);

        document.getElementById('prev-month').textContent = this.options.buttonTexts.prevMonth;
        document.getElementById('next-month').textContent = this.options.buttonTexts.nextMonth;
        document.getElementById('prev-year').textContent = this.options.buttonTexts.prevYear;
        document.getElementById('next-year').textContent = this.options.buttonTexts.nextYear;
        document.getElementById('view-year').textContent = this.options.buttonTexts.viewYear;

        document.getElementById('prev-month').addEventListener('click', () => this.updateCalendar('prev'));
        document.getElementById('next-month').addEventListener('click', () => this.updateCalendar('next'));
        document.getElementById('prev-year').addEventListener('click', () => this.updateCalendar('prev-year'));
        document.getElementById('next-year').addEventListener('click', () => this.updateCalendar('next-year'));
        document.getElementById('view-year').addEventListener('click', () => this.displayYearCalendar(this.currentYear));
    }
}

// Export as module
export default Calendar;
