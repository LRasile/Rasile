// @ts-nocheck
import React from 'react'

const ExampleCard = ({ title, smell, modern }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '1rem', marginBottom: '1rem' }}>
      <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>
        {title}
      </h3>
      <div style={{ marginBottom: '0.75rem', padding: '0.75rem', borderRadius: '6px', backgroundColor: '#FED7D7', border: '1px solid #FC8181' }}>
        <span style={{ backgroundColor: '#E53E3E', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', marginBottom: '0.5rem', display: 'inline-block' }}>
          Smell (PHP 5)
        </span>
        <pre style={{ margin: 0 }}>
          <code style={{ color: 'black' }}>{smell}</code>
        </pre>
      </div>
      <div style={{ padding: '0.75rem', borderRadius: '6px', backgroundColor: '#C6F6D5', border: '1px solid #68D391' }}>
        <span style={{ backgroundColor: '#38A169', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', marginBottom: '0.5rem', display: 'inline-block' }}>
          Modern (PHP 7/8)
        </span>
        <pre style={{ margin: 0 }}>
          <code style={{ color: 'black' }}>{modern}</code>
        </pre>
      </div>
    </div>
  )
}

export default function PhpMigration() {
  return (
    <div className="col-12">
      <h1 style={{ fontSize: '1.875rem', marginBottom: '1rem' }}>
        PHP 5 → 7/8: Dos and Don'ts
      </h1>
      <p style={{ marginBottom: '0.5rem' }}>
        A quick, practical checklist to migrate legacy PHP 5 codebases to PHP 7.x or 8.x. Focus on type safety, modern
        APIs, and removing deprecated features.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Do
      </h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          Enable per-file strict typing: <code>declare(strict_types=1);</code>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Add scalar and return types where possible (e.g. <code>function add(int $a, int $b): int</code>).
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Replace ext/mysql with PDO or MySQLi and use prepared statements.</li>
        <li style={{ marginBottom: '0.5rem' }}>
          Use modern language features: null coalescing <code>??</code>, nullsafe <code>?-&gt;</code> (PHP 8), spaceship{' '}
          <code>&lt;=&gt;</code>, array destructuring, <code>??=</code> (PHP 7.4).
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Replace <code>create_function</code> and <code>preg_replace('/e')</code> with closures and
          <code>preg_replace_callback</code>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Use <code>password_hash</code> / <code>password_verify</code> for credentials.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Replace <code>mt_rand</code>/<code>rand</code> with <code>random_int</code> / <code>random_bytes</code>{' '}
          (cryptographically secure).
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Handle engine errors via exceptions (<code>Error</code>, <code>TypeError</code>, <code>ParseError</code>), not
          silencing with <code>@</code>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Use <code>intdiv($a, $b)</code> when you need integer division semantics.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Replace <code>__autoload</code> with <code>spl_autoload_register</code> or Composer autoloading.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Fix <code>count()</code> on non-countable values; guard with <code>is_countable()</code> (PHP 7.3+).
        </li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Don't
      </h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Do not use removed extensions: ext/mysql, ext/ereg, ext/mcrypt (use OpenSSL/Sodium), etc.</li>
        <li style={{ marginBottom: '0.5rem' }}>
          Do not rely on <code>each()</code> (removed in PHP 8); refactor to <code>foreach</code>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Do not depend on old-style constructors (method named like the class); use <code>__construct</code>.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Do not pass strings to <code>assert()</code> (no eval); pass boolean expressions.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>Do not depend on magic quotes, register_globals, or call-time pass-by-reference.</li>
        <li style={{ marginBottom: '0.5rem' }}>
          Do not suppress errors with <code>@</code>; use proper exception handling.
        </li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Spot the smells (PHP 5 patterns to replace)
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
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
      </div>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Common refactors
      </h2>
      <hr style={{ marginBottom: '0.75rem' }} />
      <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
        Database
      </p>
      <pre>
        <code style={{ color: 'black' }}>{`// Before (PHP 5, removed)
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

      <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
        Regex
      </p>
      <pre>
        <code style={{ color: 'black' }}>{`// Before
$out = preg_replace('/(\w+)/e', 'strtoupper("$1")', $in);

// After
$out = preg_replace_callback('/(\w+)/', function ($m) { return strtoupper($m[1]); }, $in);
`}</code>
      </pre>

      <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
        Types and null handling
      </p>
      <pre>
        <code style={{ color: 'black' }}>{`declare(strict_types=1);

function greet(?string $name): string {
  return 'Hello ' . ($name ?? 'world');
}
`}</code>
      </pre>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Behavior changes / gotchas
      </h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          Division now returns float; use <code>intdiv</code> for integer division.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          More strict comparisons and type errors when type hints are present (<code>TypeError</code> thrown).
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <code>foreach</code> by-reference and in-loop modifications can behave differently; avoid mutating the
          iterated array unless intentional.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          Many warnings/notices became exceptions or promoted to errors in PHP 8 (e.g., passing null to non-nullable).
        </li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        Upgrade tips
      </h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Upgrade incrementally: 5.x → 7.4 first, then 8.x.</li>
        <li style={{ marginBottom: '0.5rem' }}>Run static analysis (Psalm/PHPStan) and fix reported issues.</li>
        <li style={{ marginBottom: '0.5rem' }}>Run with deprecations enabled; fix all E_DEPRECATED before next major.</li>
        <li style={{ marginBottom: '0.5rem' }}>Ensure test coverage for critical paths before refactors.</li>
      </ul>
    </div>
  )
}
