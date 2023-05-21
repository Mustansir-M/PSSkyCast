<?php
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//   // Validate form data
//   $name = $_POST['name'];
//   $email = $_POST['email'];
//   $contactNo = $_POST['contactNo'];
//   $message = $_POST['message'];

  // Verify reCAPTCHA response
  $recaptchaResponse = $_POST['g-recaptcha-response'];
  $recaptchaSecretKey = 'my_secret_key';
  $url = 'https://www.google.com/recaptcha/api/siteverify';
  $data = [
    'secret' => $recaptchaSecretKey,
    'response' => $recaptchaResponse
  ];

  $options = [
    'http' => [
      'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($data)
    ]
  ];

  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);
  $response = json_decode($result, true);

  // Check if reCAPTCHA verification is successful
  if ($response['success']) {
    header("Location: success.php");
    exit;
    // reCAPTCHA verification passed, process the form data

  } else {
    // reCAPTCHA verification failed
    echo '<p style="font-weight: bold; font-size: 30px; text-align: center;">reCAPTCHA verification failed. Please try again.</p>';
  }

?>

