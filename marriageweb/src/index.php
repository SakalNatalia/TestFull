<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $data = [
        'name' => $_POST['name'] ?? '',
        'email' => $_POST['email'] ?? '',
        'attending' => $_POST['attending'] ?? '',
        'message' => $_POST['message'] ?? ''
    ];

    // Encode as JSON
    $jsonData = json_encode($data, JSON_PRETTY_PRINT);

    // Save to rsvp.json
    file_put_contents('rsvp.json', $jsonData);

    // Optional: show a thank you message or redirect
    echo "Thank you! Your RSVP has been submitted.";
} else {
    echo "Please submit the form.";
}

