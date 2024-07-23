function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function generateMealPlan() {
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const name = document.getElementById('name').value;
    const goal = document.getElementById('goal').value;

    let mealPlan = `
        <html>
        <head>
            <title>Weekly Meal Plan</title>
            <style>
                body { font-family: monospace; }
                h1, h2 { text-align: center; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid black; padding: 8px; text-align: center; }
            </style>
        </head>
        <body>
            <h1>${name}'s Meal Plan</h1>
            <h2>Goal: ${goal}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Breakfast</th>
                        <th>Snack 1</th>
                        <th>Lunch</th>
                        <th>Snack 2</th>
                        <th>Dinner</th>
                    </tr>
                </thead>
                <tbody>
    `;

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    days.forEach(day => {
        mealPlan += `
            <tr>
                <td>${day}</td>
                <td>${document.getElementById(day.toLowerCase() + 'Breakfast').value}</td>
                <td>${document.getElementById(day.toLowerCase() + 'Snack1').value}</td>
                <td>${document.getElementById(day.toLowerCase() + 'Lunch').value}</td>
                <td>${document.getElementById(day.toLowerCase() + 'Snack2').value}</td>
                <td>${document.getElementById(day.toLowerCase() + 'Dinner').value}</td>
            </tr>
        `;
    });

    mealPlan += `
                </tbody>
            </table>
        </body>
        </html>
    `;

    const mealPlanWindow = window.open('', '_blank');
    mealPlanWindow.document.open();
    mealPlanWindow.document.write(mealPlan);
    mealPlanWindow.document.close();
}

function printMealPlan() {
    window.print();
}

function downloadMealPlan() {
    const mealPlan = document.body.innerHTML;
    const blob = new Blob([mealPlan], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mealPlan.html';
    link.click();
}
