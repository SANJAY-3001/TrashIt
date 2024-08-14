// Import the database connection
const db = require('../config/db');

// Function to handle the scheduling of a pickup
exports.schedulePickup = (req, res) => {
    const { user_id, name, address, date, timeFrom, timeTo, wasteType } = req.body;

    // SQL query to insert a new schedule record
    const query = `
        INSERT INTO schedule (user_id, name, address, date, time_from, time_to, waste_type) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    // Execute the query
    db.query(query, [user_id, name, address, date, timeFrom, timeTo, wasteType], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(201).json({ message: 'Pickup scheduled successfully', scheduleId: result.insertId });
    });
};

// Function to get schedule details with user details, filtered by present or future times
exports.getScheduleWithUserDetails = (req, res) => {
    const query = `
        SELECT 
            schedule.id AS schedule_id,
            schedule.user_id,
            schedule.name,
            schedule.address,
            schedule.date,
            schedule.time_from,
            schedule.time_to,
            schedule.waste_type,
            user.name AS user_name,
            user.email AS user_email
        FROM 
            schedule
        JOIN 
            user 
        ON 
            schedule.user_id = user.id
        WHERE 
            CONCAT(schedule.date, ' ', schedule.time_from) >= NOW()
        ORDER BY 
            schedule.date ASC, schedule.time_from ASC
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(200).json({ schedules: results });
    });
};
