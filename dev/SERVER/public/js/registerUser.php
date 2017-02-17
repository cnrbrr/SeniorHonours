<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
 <?php \Stormpath\Client::$apiKeyProperties = "apiKey.id={{5Z9FR5F0AAJCLQHZOTPWPTESJ}}\napiKey.secret={{aO3Cxa02/hv1TH/UmVPm1Zp4P+mJpH90noYIoc8M/hw}}";

$client = \Stormpath\Client::getInstance();

$apps = $client->tenant->applications;
$apps->search = array('name' => 'My Application');
$application = $apps->getIterator()->current();
$account = \Stormpath\Resource\Account::instantiate(
  array('givenName' => 'John',
        'surname' => 'Smith',
        'username' => 'johnsmith',
        'email' => 'john.smith@example.com',
        'password' => '4P@$$w0rd!'));

$application->createAccount($account);
echo ("DONE");
?> 
 </body>
</html>
