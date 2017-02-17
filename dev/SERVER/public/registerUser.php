\Stormpath\Client::$apiKeyProperties = "apiKey.id={{API KEY ID}}\napiKey.secret={{API KEY SECRET}}";

$client = \Stormpath\Client::getInstance();

$apps = $client->tenant->applications;
$apps->search = array('name' => 'My Application');
$application = $apps->getIterator()->current();