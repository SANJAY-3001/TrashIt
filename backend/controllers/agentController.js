const pool = require('../config/db'); // Import your database connection pool
const { sendEmail } = require('../services/emailService'); 

// POST route to handle form submission
const applyJob = (req, res) => {
    const { first_name, last_name, email, phone_number, city, state_province, country, postal_code, privacy_policy_accepted, text_notifications } = req.body;

    const query = `
        INSERT INTO agent_applications (
            first_name, last_name, email, phone_number, city, state_province, country, postal_code, privacy_policy_accepted, text_notifications
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [first_name, last_name, email, phone_number, city, state_province, country, postal_code, privacy_policy_accepted, text_notifications];

    pool.query(query, values, (err, results) => {
        if (err) {
            console.error('Error inserting application:', err);
            return res.status(500).json({ message: 'Error inserting application', error: err });
        }
        res.status(201).json({ message: 'Application submitted successfully' });
    });
};

const getAllApplications = (req, res) => {
    const query = 'SELECT * FROM agent_applications ORDER BY created_at DESC';

    pool.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching job applications:', err);
            return res.status(500).json({ message: 'Error fetching job applications', error: err });
        }
        res.status(200).json(results);
    });
};

const approveApplication = (req, res) => {
    const { id } = req.params;

    // Update the application status to approved
    const query = `UPDATE agent_applications SET isapproved = 1 WHERE id = ?`;

    pool.query(query, [id], async (err, results) => {
        if (err) {
            console.error('Error approving application:', err);
            return res.status(500).json({ message: 'Error approving application', error: err });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Application not found' });
        }

        // Fetch the updated application details to get the email address
        pool.query(`SELECT email FROM agent_applications WHERE id = ?`, [id], async (err, results) => {
            if (err) {
                console.error('Error fetching application details:', err);
                return res.status(500).json({ message: 'Error fetching application details', error: err });
            }

            const email = results[0].email;
            const subject = 'Your Application Has Been Approved';
            const text = 'Congratulations! Your job application has been approved.';

            console.log(`Attempting to send email to ${email}`);

            try {
                await sendEmail(email, subject, text);
                console.log(`Email successfully sent to ${email}`);
                res.status(200).json({ message: 'Application approved and email sent successfully' });
            } catch (emailError) {
                console.error('Error sending email:', emailError);
                res.status(500).json({ message: 'Application approved, but error sending email', error: emailError });
            }
        });
    });
};

module.exports = {
    applyJob,
    getAllApplications,
    approveApplication
};
