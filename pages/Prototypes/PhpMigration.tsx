// @ts-nocheck
import React from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  Code,
  Divider,
  Box,
  SimpleGrid,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'

const ExampleCard = ({ title, smell, modern }) => {
  const smellBg = useColorModeValue('red.50', 'red.700') as string
  const smellBorder = useColorModeValue('red.200', 'red.500') as string
  const modernBg = useColorModeValue('green.50', 'green.700') as string
  const modernBorder = useColorModeValue('green.200', 'green.500') as string
  const smellText = useColorModeValue('red.900', 'red.100') as string
  const modernText = useColorModeValue('green.900', 'green.100') as string

  return (
    <Box borderWidth="1px" borderRadius="md" p={4} mb={4}>
      <Heading as="h3" size="md" mb={3}>
        {title}
      </Heading>
      <Box mb={3} p={3} borderRadius="md" bg={smellBg} borderWidth="1px" borderColor={smellBorder}>
        <Badge colorScheme="red" variant="subtle" mb={2}>
          Smell (PHP 5)
        </Badge>
        <pre style={{ margin: 0 }}>
          <code style={{ color: useColorModeValue('black', 'white') }}>{smell}</code>
        </pre>
      </Box>
      <Box p={3} borderRadius="md" bg={modernBg} borderWidth="1px" borderColor={modernBorder}>
        <Badge colorScheme="green" variant="subtle" mb={2}>
          Modern (PHP 7/8)
        </Badge>
        <pre style={{ margin: 0 }}>
          <code style={{ color: useColorModeValue('black', 'white') }}>{modern}</code>
        </pre>
      </Box>
    </Box>
  )
}

export default function PhpMigration() {
  return (
    <div className="col-12">
      <Heading as="h1" size="xl" mb={4}>
        PHP 5 → 7/8: Dos and Don'ts
      </Heading>
      <Text mb={2}>
        A quick, practical checklist to migrate legacy PHP 5 codebases to PHP 7.x or 8.x. Focus on type safety, modern
        APIs, and removing deprecated features.
      </Text>

      <Heading as="h2" size="lg" mt={6} mb={2}>
        Do
      </Heading>
      <List spacing={2} styleType="disc" pl={6}>
        <ListItem>
          Enable per-file strict typing: <Code>declare(strict_types=1);</Code>
        </ListItem>
        <ListItem>
          Add scalar and return types where possible (e.g. <Code>function add(int $a, int $b): int</Code>).
        </ListItem>
        <ListItem>Replace ext/mysql with PDO or MySQLi and use prepared statements.</ListItem>
        <ListItem>
          Use modern language features: null coalescing <Code>??</Code>, nullsafe <Code>?-&gt;</Code> (PHP 8), spaceship{' '}
          <Code>&lt;=&gt;</Code>, array destructuring, <Code>??=</Code> (PHP 7.4).
        </ListItem>
        <ListItem>
          Replace <Code>create_function</Code> and <Code>preg_replace('/e')</Code> with closures and
          <Code>preg_replace_callback</Code>.
        </ListItem>
        <ListItem>
          Use <Code>password_hash</Code> / <Code>password_verify</Code> for credentials.
        </ListItem>
        <ListItem>
          Replace <Code>mt_rand</Code>/<Code>rand</Code> with <Code>random_int</Code> / <Code>random_bytes</Code>{' '}
          (cryptographically secure).
        </ListItem>
        <ListItem>
          Handle engine errors via exceptions (<Code>Error</Code>, <Code>TypeError</Code>, <Code>ParseError</Code>), not
          silencing with <Code>@</Code>.
        </ListItem>
        <ListItem>
          Use <Code>intdiv($a, $b)</Code> when you need integer division semantics.
        </ListItem>
        <ListItem>
          Replace <Code>__autoload</Code> with <Code>spl_autoload_register</Code> or Composer autoloading.
        </ListItem>
        <ListItem>
          Fix <Code>count()</Code> on non-countable values; guard with <Code>is_countable()</Code> (PHP 7.3+).
        </ListItem>
      </List>

      <Heading as="h2" size="lg" mt={6} mb={2}>
        Don't
      </Heading>
      <List spacing={2} styleType="disc" pl={6}>
        <ListItem>Do not use removed extensions: ext/mysql, ext/ereg, ext/mcrypt (use OpenSSL/Sodium), etc.</ListItem>
        <ListItem>
          Do not rely on <Code>each()</Code> (removed in PHP 8); refactor to <Code>foreach</Code>.
        </ListItem>
        <ListItem>
          Do not depend on old-style constructors (method named like the class); use <Code>__construct</Code>.
        </ListItem>
        <ListItem>
          Do not pass strings to <Code>assert()</Code> (no eval); pass boolean expressions.
        </ListItem>
        <ListItem>Do not depend on magic quotes, register_globals, or call-time pass-by-reference.</ListItem>
        <ListItem>
          Do not suppress errors with <Code>@</Code>; use proper exception handling.
        </ListItem>
      </List>

      <Heading as="h2" size="lg" mt={6} mb={2}>
        Spot the smells (PHP 5 patterns to replace)
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <ExampleCard
          title="ext/mysql → PDO"
          smell={`$link = mysql_connect($host, $user, $pass);
mysql_select_db('app');
mysql_query("INSERT INTO users(name) VALUES ('$name')");`}
          modern={`$pdo = new PDO('mysql:host=localhost;dbname=app', $user, $pass, [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
]);
$stmt = $pdo->prepare('INSERT INTO users(name) VALUES (:name)');
$stmt->execute([':name' => $name]);`}
        />

        <ExampleCard
          title="ereg_* → preg_*"
          smell={`if (ereg('^foo', $value)) {
  // ...
}`}
          modern={`if (preg_match('/^foo/', $value) === 1) {
  // ...
}`}
        />

        <ExampleCard
          title="preg_replace with /e modifier"
          smell={`$out = preg_replace('/(\\w+)/e', 'strtoupper("$1")', $in);`}
          modern={`$out = preg_replace_callback('/(\\w+)/', function ($m) {
  return strtoupper($m[1]);
}, $in);`}
        />

        <ExampleCard
          title="mcrypt_* → openssl/sodium"
          smell={`$plain = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $cipher, MCRYPT_MODE_CBC, $iv);`}
          modern={`$plain = openssl_decrypt($cipher, 'aes-128-cbc', $key, OPENSSL_RAW_DATA, $iv);`}
        />

        <ExampleCard
          title="create_function → closures"
          smell={`$adder = create_function('$a,$b', 'return $a + $b;');`}
          modern={`$adder = function (int $a, int $b): int {
  return $a + $b;
};`}
        />

        <ExampleCard
          title="Old-style constructor → __construct"
          smell={`class User {
  function User() { /* ... */ }
}`}
          modern={`class User {
  public function __construct() { /* ... */ }
}`}
        />

        <ExampleCard
          title="each() iteration → foreach"
          smell={`reset($arr);
while (list($k, $v) = each($arr)) {
  // ...
}`}
          modern={`foreach ($arr as $k => $v) {
  // ...
}`}
        />

        <ExampleCard
          title="assert with string → boolean expression"
          smell={`assert('$a === $b');`}
          modern={`assert($a === $b);`}
        />

        <ExampleCard
          title="__autoload → spl_autoload_register / Composer"
          smell={`function __autoload($class) {
  include $class . '.php';
}`}
          modern={`spl_autoload_register(function ($class) {
  require __DIR__ . '/src/' . str_replace('\\\
', '/', $class) . '.php';
});
// or Composer's autoload via vendor/autoload.php`}
        />

        <ExampleCard
          title="Call-time pass-by-reference"
          smell={`function foo(&$x) { /* ... */ }
foo(&$var); // ❌ call-time reference`}
          modern={`function foo(&$x) { /* ... */ }
foo($var); // ✅ reference defined in signature only`}
        />

        <ExampleCard
          title="Magic quotes / stripping"
          smell={`if (get_magic_quotes_gpc()) {
  $name = stripslashes($_POST['name']);
}`}
          modern={`$stmt = $pdo->prepare('INSERT INTO users(name) VALUES (:name)');
$stmt->execute([':name' => $_POST['name']]); // rely on parameterization`}
        />

        <ExampleCard
          title="Non-secure randomness → CSPRNG"
          smell={`$token = md5(uniqid(mt_rand(), true));`}
          modern={`$token = bin2hex(random_bytes(32));`}
        />
      </SimpleGrid>

      <Heading as="h2" size="lg" mt={6} mb={2}>
        Common refactors
      </Heading>
      <Divider mb={3} />
      <Text fontWeight="bold" mb={1}>
        Database
      </Text>
      <pre>
        <code style={{ color: useColorModeValue('black', 'white') }}>{`// Before (PHP 5, removed)
// $link = mysql_connect($host, $user, $pass);
// mysql_query("INSERT ...");

// After (PDO)
$pdo = new PDO('mysql:host=localhost;dbname=app', $user, $pass, [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
]);
$stmt = $pdo->prepare('INSERT INTO users(name) VALUES (:name)');
$stmt->execute([':name' => $name]);
`}</code>
      </pre>

      <Text fontWeight="bold" mb={1}>
        Regex
      </Text>
      <pre>
        <code style={{ color: useColorModeValue('black', 'white') }}>{`// Before
$out = preg_replace('/(\w+)/e', 'strtoupper("$1")', $in);

// After
$out = preg_replace_callback('/(\w+)/', function ($m) { return strtoupper($m[1]); }, $in);
`}</code>
      </pre>

      <Text fontWeight="bold" mb={1}>
        Types and null handling
      </Text>
      <pre>
        <code style={{ color: useColorModeValue('black', 'white') }}>{`declare(strict_types=1);

function greet(?string $name): string {
  return 'Hello ' . ($name ?? 'world');
}
`}</code>
      </pre>

      <Heading as="h2" size="lg" mt={6} mb={2}>
        Behavior changes / gotchas
      </Heading>
      <List spacing={2} styleType="disc" pl={6}>
        <ListItem>
          Division now returns float; use <Code>intdiv</Code> for integer division.
        </ListItem>
        <ListItem>
          More strict comparisons and type errors when type hints are present (<Code>TypeError</Code> thrown).
        </ListItem>
        <ListItem>
          <Code>foreach</Code> by-reference and in-loop modifications can behave differently; avoid mutating the
          iterated array unless intentional.
        </ListItem>
        <ListItem>
          Many warnings/notices became exceptions or promoted to errors in PHP 8 (e.g., passing null to non-nullable).
        </ListItem>
      </List>

      <Heading as="h2" size="lg" mt={6} mb={2}>
        Upgrade tips
      </Heading>
      <List spacing={2} styleType="disc" pl={6}>
        <ListItem>Upgrade incrementally: 5.x → 7.4 first, then 8.x.</ListItem>
        <ListItem>Run static analysis (Psalm/PHPStan) and fix reported issues.</ListItem>
        <ListItem>Run with deprecations enabled; fix all E_DEPRECATED before next major.</ListItem>
        <ListItem>Ensure test coverage for critical paths before refactors.</ListItem>
      </List>
    </div>
  )
}
