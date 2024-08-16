# Calendara Documentation

## Overview

**Calendara** is a customizable calendar library for JavaScript that allows you to integrate and display a calendar in your web applications. It supports various customization options and is easy to use.

## When to Use

Use Calendara when you need a calendar component that is flexible and easy to integrate into your web applications. Whether you need a simple month view or a full year view, Calendara provides an easy way to manage dates and display them in a user-friendly format.

## Installation

To install Calendara, you can use npm. Run the following command:

```bash
npm install @otabekoff/calendara
```

## Usage

Here's a basic example of how to use Calendara in your JavaScript project:

```js
import Calendar from '@otabekoff/calendara';

const calendar = new Calendar({
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    buttonTexts: {
        prevMonth: 'Previous Month',
        nextMonth: 'Next Month',
        prevYear: 'Previous Year',
        nextYear: 'Next Year',
        viewYear: 'View Full Year'
    }
});
calendar.render();
```

## Configuration

- **monthNames**: An array of month names to display in the calendar.
- **weekNames**: An array of weekday names to display in the calendar.
- **buttonTexts**: Customizable texts for navigation buttons.

## License

Calendara is licensed under the [MIT License](../LICENSE.txt).

## Author

Otabek Sadiridinov