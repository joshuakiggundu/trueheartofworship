<?php 
$response = array('error' => '');
$contact_email = 'kiggundujoshua256@gmail.com';

// Validate POST request
if (!isset($_POST['data'])) {
    $response['error'] = 'Missing form data!';
    echo json_encode($response);
    die();
}

// Parse form data
parse_str($_POST['data'], $post_data);

// Validate required fields
if (empty($post_data['username']) || empty($post_data['email']) || empty($post_data['message'])) {
    $response['error'] = 'All fields are required!';
    echo json_encode($response);
    die();
}

// Sanitize inputs
$user_name = filter_var(trim($post_data['username']), FILTER_SANITIZE_STRING);
$user_email = filter_var(trim($post_data['email']), FILTER_SANITIZE_EMAIL);
$user_msg = filter_var(trim($post_data['message']), FILTER_SANITIZE_STRING);

// Validate email format
if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
    $response['error'] = 'Invalid email format!';
    echo json_encode($response);
    die();
}

if (!empty($contact_email)) {
    $subj = 'Message from Newlife-Church';
    $msg = "Subject: $subj \r\nName: $user_name \r\nE-mail: $user_email \r\nMessage: $user_msg";

    // Email Headers
    $head = "From: Newlife-Church <noreply@yourdomain.com>\r\n"
        . "Reply-To: $user_email\r\n"
        . "X-Mailer: PHP/" . phpversion();

    // Send email
    if (!@mail($contact_email, $subj, $msg, $head)) {
        $response['error'] = 'Mail function failed. Check server settings!';
    }
} else {
    $response['error'] = 'Recipient email is missing!';
}

echo json_encode($response);
die();
?>
