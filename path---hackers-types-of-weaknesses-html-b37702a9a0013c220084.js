webpackJsonp([90306673419928],{718:function(t,e){t.exports={data:{markdownRemark:{html:'<p>These are the list of weakness types on HackerOne that you can choose from when submitting a report:</p>\n<table>\n<thead>\n<tr>\n<th>External ID</th>\n<th>Weakness Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>CWE-770</td>\n<td>Allocation of Resources Without Limits or Throttling</td>\n<td>The software allocates a reusable resource or group of resources on behalf of an actor without imposing any restrictions on how many resources can be allocated, in violation of the intended security policy for that actor.</td>\n</tr>\n<tr>\n<td>CWE-129</td>\n<td>Array Index Underflow</td>\n<td>The product uses untrusted input when calculating or using an array index, but the product does not validate or incorrectly validates the index to ensure the index references a valid position within the array.</td>\n</tr>\n<tr>\n<td>CWE-288</td>\n<td>Authentication Bypass Using an Alternate Path or Channel</td>\n<td>A product requires authentication, but the product has an alternate path or channel that does not require authentication.</td>\n</tr>\n<tr>\n<td>CWE-307</td>\n<td>Brute Force</td>\n<td>The software does not implement sufficient measures to prevent multiple failed authentication attempts within in a short time frame, making it more susceptible to brute force attacks.</td>\n</tr>\n<tr>\n<td>CWE-126</td>\n<td>Buffer Over-read</td>\n<td>The software reads from a buffer using buffer access mechanisms such as indexes or pointers that reference memory locations after the targeted buffer.</td>\n</tr>\n<tr>\n<td>CWE-124</td>\n<td>Buffer Underflow</td>\n<td>The software writes to a buffer using an index or pointer that references a memory location prior to the beginning of the buffer.</td>\n</tr>\n<tr>\n<td>CWE-127</td>\n<td>Buffer Under-read</td>\n<td>The software reads from a buffer using buffer access mechanisms such as indexes or pointers that reference memory locations prior to the targeted buffer.</td>\n</tr>\n<tr>\n<td>CWE-840</td>\n<td>Business Logic Errors</td>\n<td>Weaknesses in this category identify some of the underlying problems that commonly allow attackers to manipulate the business logic of an application.</td>\n</tr>\n<tr>\n<td>CWE-120</td>\n<td>Classic Buffer Overflow</td>\n<td>The program copies an input buffer to an output buffer without verifying that the size of the input buffer is less than the size of the output buffer, leading to a buffer overflow.</td>\n</tr>\n<tr>\n<td>CWE-312</td>\n<td>Cleartext Storage of Sensitive Information</td>\n<td>The application stores sensitive information in cleartext within a resource that might be accessible to another control sphere.</td>\n</tr>\n<tr>\n<td>CWE-319</td>\n<td>Cleartext Transmission of Sensitive Information</td>\n<td>The software transmits sensitive or security-critical data in cleartext in a communication channel that can be sniffed by unauthorized actors.</td>\n</tr>\n<tr>\n<td>CWE-602</td>\n<td>Client-Side Enforcement of Server-Side Security</td>\n<td>The software is composed of a server that relies on the client to implement a mechanism that is intended to protect the server.</td>\n</tr>\n<tr>\n<td>CWE-94</td>\n<td>Code Injection</td>\n<td>The software constructs all or part of a code segment using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the syntax or behavior of the intended code segment.</td>\n</tr>\n<tr>\n<td>CWE-77</td>\n<td>Command Injection - Generic</td>\n<td>The software constructs all or part of a command using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended command when it is sent to a downstream component.</td>\n</tr>\n<tr>\n<td>CWE-362</td>\n<td>Concurrent Execution using Shared Resource with Improper Synchronization (\'Race Condition\')</td>\n<td>The program contains a code sequence that can run concurrently with other code, and the code sequence requires temporary, exclusive access to a shared resource, but a timing window exists in which the shared resource can be modified by another code sequence that is operating concurrently.</td>\n</tr>\n<tr>\n<td>CWE-93</td>\n<td>CRLF Injection</td>\n<td>The software uses CRLF (carriage return line feeds) as a special element, e.g. to separate lines or records, but it does not neutralize or incorrectly neutralizes CRLF sequences from inputs.</td>\n</tr>\n<tr>\n<td>CWE-352</td>\n<td>Cross-Site Request Forgery (CSRF)</td>\n<td>The web application does not, or can not, sufficiently verify whether a well-formed, valid, consistent request was intentionally provided by the user who submitted the request.</td>\n</tr>\n<tr>\n<td>CWE-79</td>\n<td>Cross-site Scripting (XSS) - DOM</td>\n<td>In DOM-based XSS, the client performs the injection of XSS into the page; in the other types, the server performs the injection. DOM-based XSS generally involves server-controlled, trusted script that is sent to the client, such as Javascript that performs sanity checks on a form before the user submits it. If the server-supplied script processes user-supplied data and then injects it back into the web page (such as with dynamic HTML), then DOM-based XSS is possible.</td>\n</tr>\n<tr>\n<td>CWE-79</td>\n<td>Cross-site Scripting (XSS) - Generic</td>\n<td>The software does not neutralize or incorrectly neutralizes user-controllable input before it is placed in output that is used as a web page that is served to other users.</td>\n</tr>\n<tr>\n<td>CWE-79</td>\n<td>Cross-site Scripting (XSS) - Reflected</td>\n<td>The server reads data directly from the HTTP request and reflects it back in the HTTP response. Reflected XSS exploits occur when an attacker causes a victim to supply dangerous content to a vulnerable web application, which is then reflected back to the victim and executed by the web browser. The most common mechanism for delivering malicious content is to include it as a parameter in a URL that is posted publicly or e-mailed directly to the victim. URLs constructed in this manner constitute the core of many phishing schemes, whereby an attacker convinces a victim to visit a URL that refers to a vulnerable site. After the site reflects the attacker\'s content back to the victim, the content is executed by the victim\'s browser.</td>\n</tr>\n<tr>\n<td>CWE-79</td>\n<td>Cross-site Scripting (XSS) - Stored</td>\n<td>The application stores dangerous data in a database, message forum, visitor log, or other trusted data store. At a later time, the dangerous data is subsequently read back into the application and included in dynamic content. From an attacker\'s perspective, the optimal place to inject malicious content is in an area that is displayed to either many users or particularly interesting users. Interesting users typically have elevated privileges in the application or interact with sensitive data that is valuable to the attacker. If one of these users executes malicious content, the attacker may be able to perform privileged operations on behalf of the user or gain access to sensitive data belonging to the user. For example, the attacker might inject XSS into a log message, which might not be handled properly when an administrator views the logs.</td>\n</tr>\n<tr>\n<td>CWE-310</td>\n<td>Cryptographic Issues - Generic</td>\n<td>Weaknesses in this category are related to the use of cryptography.</td>\n</tr>\n<tr>\n<td>CWE-400</td>\n<td>Denial of Service</td>\n<td>The software does not properly restrict the size or amount of resources that are requested or influenced by an actor, which can be used to consume more resources than intended.</td>\n</tr>\n<tr>\n<td>CWE-502</td>\n<td>Deserialization of Untrusted Data</td>\n<td>The application deserializes untrusted data without sufficiently verifying that the resulting data will be valid.</td>\n</tr>\n<tr>\n<td>CWE-415</td>\n<td>Double Free</td>\n<td>The product calls free() twice on the same memory address, potentially leading to modification of unexpected memory locations.</td>\n</tr>\n<tr>\n<td>CWE-506</td>\n<td>Embedded Malicious Code</td>\n<td>The application contains code that appears to be malicious in nature.</td>\n</tr>\n<tr>\n<td>CWE-749</td>\n<td>Exposed Dangerous Method or Function</td>\n<td>The software provides an Applications Programming Interface (API) or similar interface for interaction with external actors, but the interface includes a dangerous method or function that is not properly restricted.</td>\n</tr>\n<tr>\n<td>CWE-642</td>\n<td>External Control of Critical State Data</td>\n<td>The software stores security-critical state information about its users, or the software itself, in a location that is accessible to unauthorized actors.</td>\n</tr>\n<tr>\n<td>CWE-610</td>\n<td>Externally Controlled Reference to a Resource in Another Sphere</td>\n<td>The product uses an externally controlled name or reference that resolves to a resource that is outside of the intended control sphere.</td>\n</tr>\n<tr>\n<td>CWE-75</td>\n<td>Failure to Sanitize Special Elements into a Different Plane (Special Element Injection)</td>\n<td>The software does not adequately filter user-controlled input for special elements with control implications.</td>\n</tr>\n<tr>\n<td>CWE-538</td>\n<td>File and Directory Information Exposure</td>\n<td>The product stores sensitive information in files or directories that are accessible to actors outside of the intended control sphere.</td>\n</tr>\n<tr>\n<td>CWE-425</td>\n<td>Forced Browsing</td>\n<td>The web application does not adequately enforce appropriate authorization on all restricted URLs, scripts, or files.</td>\n</tr>\n<tr>\n<td>CWE-122</td>\n<td>Heap Overflow</td>\n<td>A heap overflow condition is a buffer overflow, where the buffer that can be overwritten is allocated in the heap portion of memory, generally meaning that the buffer was allocated using a routine such as malloc().</td>\n</tr>\n<tr>\n<td>CWE-444</td>\n<td>HTTP Request Smuggling</td>\n<td>When malformed or abnormal HTTP requests are interpreted by one or more entities in the data flow between the user and the web server, such as a proxy or firewall, they can be interpreted inconsistently, allowing the attacker to "smuggle" a request to one device without the other device being aware of it.</td>\n</tr>\n<tr>\n<td>CWE-113</td>\n<td>HTTP Response Splitting</td>\n<td>The software receives data from an upstream component, but does not neutralize or incorrectly neutralizes CR and LF characters before the data is included in outgoing HTTP headers.</td>\n</tr>\n<tr>\n<td>CWE-284</td>\n<td>Improper Access Control - Generic</td>\n<td>The software does not restrict or incorrectly restricts access to a resource from an unauthorized actor.</td>\n</tr>\n<tr>\n<td>CWE-287</td>\n<td>Improper Authentication - Generic</td>\n<td>When an actor claims to have a given identity, the software does not prove or insufficiently proves that the claim is correct.</td>\n</tr>\n<tr>\n<td>CWE-285</td>\n<td>Improper Authorization</td>\n<td>The software does not perform or incorrectly performs an authorization check when an actor attempts to access a resource or perform an action.</td>\n</tr>\n<tr>\n<td>CWE-295</td>\n<td>Improper Certificate Validation</td>\n<td>The software does not validate, or incorrectly validates, a certificate.</td>\n</tr>\n<tr>\n<td>CWE-703</td>\n<td>Improper Check or Handling of Exceptional Conditions</td>\n<td>The software does not properly anticipate or handle exceptional conditions that rarely occur during normal operation of the software.</td>\n</tr>\n<tr>\n<td>CWE-926</td>\n<td>Improper Export of Android Application Components</td>\n<td>The Android application exports a component for use by other applications, but does not properly restrict which applications can launch the component or access the data it contains.</td>\n</tr>\n<tr>\n<td>CWE-296</td>\n<td>Improper Following of a Certificate\'s Chain of Trust</td>\n<td>The software does not follow, or incorrectly follows, the chain of trust for a certificate back to a trusted root certificate, resulting in incorrect trust of any resource that is associated with that certificate.</td>\n</tr>\n<tr>\n<td>CWE-409</td>\n<td>Improper Handling of Highly Compressed Data (Data Amplification)</td>\n<td>The software does not handle or incorrectly handles a compressed input with a very high compression ratio that produces a large output.</td>\n</tr>\n<tr>\n<td>CWE-280</td>\n<td>Improper Handling of Insufficient Permissions or Privileges</td>\n<td>The application does not handle or incorrectly handles when it has insufficient privileges to access resources or functionality as specified by their permissions. This may cause it to follow unexpected code paths that may leave the application in an invalid state.</td>\n</tr>\n<tr>\n<td>CWE-177</td>\n<td>Improper Handling of URL Encoding (Hex Encoding)</td>\n<td>The software does not properly handle when all or part of an input has been URL encoded.</td>\n</tr>\n<tr>\n<td>CWE-20</td>\n<td>Improper Input Validation</td>\n<td>The product does not validate or incorrectly validates input that can affect the control flow or data flow of a program.</td>\n</tr>\n<tr>\n<td>CWE-150</td>\n<td>Improper Neutralization of Escape, Meta, or Control Sequences</td>\n<td>The software receives input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could be interpreted as escape, meta, or control character sequences when they are sent to a downstream component.</td>\n</tr>\n<tr>\n<td>CWE-644</td>\n<td>Improper Neutralization of HTTP Headers for Scripting Syntax</td>\n<td>The application does not neutralize or incorrectly neutralizes web scripting syntax in HTTP headers that can be used by web browser components that can process raw headers, such as Flash.</td>\n</tr>\n<tr>\n<td>CWE-80</td>\n<td>Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)</td>\n<td>The software receives input from an upstream component, but it does not neutralize or incorrectly neutralizes special characters such as "&#x3C;", ">", and "&#x26;" that could be interpreted as web-scripting elements when they are sent to a downstream component that processes web pages.</td>\n</tr>\n<tr>\n<td>CWE-170</td>\n<td>Improper Null Termination</td>\n<td>The software does not terminate or incorrectly terminates a string or array with a null character or equivalent terminator.</td>\n</tr>\n<tr>\n<td>CWE-269</td>\n<td>Improper Privilege Management</td>\n<td>The software does not properly assign, modify, track, or check privileges for an actor, creating an unintended sphere of control for that actor.</td>\n</tr>\n<tr>\n<td>CWE-326</td>\n<td>Inadequate Encryption Strength</td>\n<td>The software stores or transmits sensitive data using an encryption scheme that is theoretically sound, but is not strong enough for the level of protection required.</td>\n</tr>\n<tr>\n<td>CWE-184</td>\n<td>Incomplete Blacklist</td>\n<td>An application uses a "blacklist" of prohibited values, but the blacklist is incomplete.</td>\n</tr>\n<tr>\n<td>CWE-863</td>\n<td>Incorrect Authorization</td>\n<td>The software performs an authorization check when an actor attempts to access a resource or perform an action, but it does not correctly perform the check. This allows attackers to bypass intended access restrictions.</td>\n</tr>\n<tr>\n<td>CWE-131</td>\n<td>Incorrect Calculation of Buffer Size</td>\n<td>The software does not correctly calculate the size to be used when allocating a buffer, which could lead to a buffer overflow.</td>\n</tr>\n<tr>\n<td>CWE-697</td>\n<td>Incorrect Comparison</td>\n<td>The software compares two entities in a security-relevant context, but the comparison is incorrect, which may lead to resultant weaknesses.</td>\n</tr>\n<tr>\n<td>CWE-200</td>\n<td>Information Disclosure</td>\n<td>An information disclosure is the intentional or unintentional disclosure of information to an actor that is not explicitly authorized to have access to that information.</td>\n</tr>\n<tr>\n<td>CWE-209</td>\n<td>Information Exposure Through an Error Message</td>\n<td>The software generates an error message that includes sensitive information about its environment, users, or associated data.</td>\n</tr>\n<tr>\n<td>CWE-215</td>\n<td>Information Exposure Through Debug Information</td>\n<td>The application contains debugging code that can expose sensitive information to untrusted parties.</td>\n</tr>\n<tr>\n<td>CWE-548</td>\n<td>Information Exposure Through Directory Listing</td>\n<td>A directory listing is inappropriately exposed, yielding potentially sensitive information to attackers.</td>\n</tr>\n<tr>\n<td>CWE-203</td>\n<td>Information Exposure Through Discrepancy</td>\n<td>The product behaves differently or sends different responses in a way that exposes security-relevant information about the state of the product, such as whether a particular operation was successful or not.</td>\n</tr>\n<tr>\n<td>CWE-201</td>\n<td>Information Exposure Through Sent Data</td>\n<td>The accidental exposure of sensitive information through sent data refers to the transmission of data which are either sensitive in and of itself or useful in the further exploitation of the system through standard data channels.</td>\n</tr>\n<tr>\n<td>CWE-208</td>\n<td>Information Exposure Through Timing Discrepancy</td>\n<td>Two separate operations in a product require different amounts of time to complete, in a way that is observable to an actor and reveals security-relevant information about the state of the product, such as whether a particular operation was successful or not.</td>\n</tr>\n<tr>\n<td>CWE-639</td>\n<td>Insecure Direct Object Reference (IDOR)</td>\n<td>The system\'s authorization functionality does not prevent one user from gaining access to another user\'s data or record by modifying the key value identifying the data.</td>\n</tr>\n<tr>\n<td>CWE-922</td>\n<td>Insecure Storage of Sensitive Information</td>\n<td>The software stores sensitive information without properly limiting read or write access by unauthorized actors.</td>\n</tr>\n<tr>\n<td>CWE-377</td>\n<td>Insecure Temporary File</td>\n<td>Creating and using insecure temporary files can leave application and system data vulnerable to attack.</td>\n</tr>\n<tr>\n<td>CWE-522</td>\n<td>Insufficiently Protected Credentials</td>\n<td>This weakness occurs when the application transmits or stores authentication credentials and uses an insecure method that is susceptible to unauthorized interception and/or retrieval.</td>\n</tr>\n<tr>\n<td>CWE-613</td>\n<td>Insufficient Session Expiration</td>\n<td>According to WASC, "Insufficient Session Expiration is when a web site permits an attacker to reuse old session credentials or session IDs for authorization."</td>\n</tr>\n<tr>\n<td>CWE-190</td>\n<td>Integer Overflow</td>\n<td>The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value. This can introduce other weaknesses when the calculation is used for resource management or execution control.</td>\n</tr>\n<tr>\n<td>CWE-191</td>\n<td>Integer Underflow</td>\n<td>The product subtracts one value from another, such that the result is less than the minimum allowable integer value, which produces a value that is not equal to the correct result.</td>\n</tr>\n<tr>\n<td>CWE-322</td>\n<td>Key Exchange without Entity Authentication</td>\n<td>The software performs a key exchange with an actor without verifying the identity of that actor.</td>\n</tr>\n<tr>\n<td>CWE-90</td>\n<td>LDAP Injection</td>\n<td>The software constructs all or part of an LDAP query using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended LDAP query when it is sent to a downstream component.</td>\n</tr>\n<tr>\n<td>CWE-489</td>\n<td>Leftover Debug Code (Backdoor)</td>\n<td>The application was deployed with active debugging code that can create unintended entry points.</td>\n</tr>\n<tr>\n<td>capec-549</td>\n<td>Malware</td>\n<td>An adversary installs and executes malicious code on the target system in an effort to achieve a negative technical impact.</td>\n</tr>\n<tr>\n<td>CWE-300</td>\n<td>Man-in-the-Middle</td>\n<td>The product does not adequately verify the identity of actors at both ends of a communication channel, or does not adequately ensure the integrity of the channel, in a way that allows the channel to be accessed or influenced by an actor that is not an endpoint.</td>\n</tr>\n<tr>\n<td>CWE-119</td>\n<td>Memory Corruption - Generic</td>\n<td>The software performs operations on a memory buffer, but it can read from or write to a memory location that is outside of the intended boundary of the buffer.</td>\n</tr>\n<tr>\n<td>CWE-311</td>\n<td>Missing Encryption of Sensitive Data</td>\n<td>The software does not encrypt sensitive or critical information before storage or transmission.</td>\n</tr>\n<tr>\n<td>CWE-325</td>\n<td>Missing Required Cryptographic Step</td>\n<td>The software does not implement a required step in a cryptographic algorithm, resulting in weaker encryption than advertised by that algorithm.</td>\n</tr>\n<tr>\n<td>CWE-471</td>\n<td>Modification of Assumed-Immutable Data (MAID)</td>\n<td>The software does not properly protect an assumed-immutable element from being modified by an attacker.</td>\n</tr>\n<tr>\n<td>CWE-476</td>\n<td>NULL Pointer Dereference</td>\n<td>A NULL pointer dereference occurs when the application dereferences a pointer that it expects to be valid, but is NULL, typically causing a crash or exit.</td>\n</tr>\n<tr>\n<td>CWE-193</td>\n<td>Off-by-one Error</td>\n<td>A product calculates or uses an incorrect maximum or minimum value that is 1 more, or 1 less, than the correct value.</td>\n</tr>\n<tr>\n<td>CWE-601</td>\n<td>Open Redirect</td>\n<td>A web application accepts a user-controlled input that specifies a link to an external site, and uses that link in a Redirect. This simplifies phishing attacks.</td>\n</tr>\n<tr>\n<td>CWE-78</td>\n<td>OS Command Injection</td>\n<td>The software constructs all or part of an OS command using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended OS command when it is sent to a downstream component.</td>\n</tr>\n<tr>\n<td>CWE-125</td>\n<td>Out-of-bounds Read</td>\n<td>The software reads data past the end, or before the beginning, of the intended buffer.</td>\n</tr>\n<tr>\n<td>CWE-260</td>\n<td>Password in Configuration File</td>\n<td>The software stores a password in a configuration file that might be accessible to actors who do not know the password.</td>\n</tr>\n<tr>\n<td>CWE-22</td>\n<td>Path Traversal</td>\n<td>The software uses external input to construct a pathname that is intended to identify a file or directory that is located underneath a restricted parent directory, but the software does not properly neutralize special elements within the pathname that can cause the pathname to resolve to a location that is outside of the restricted directory.</td>\n</tr>\n<tr>\n<td>CWE-35</td>\n<td>Path Traversal: \'.../...//\'</td>\n<td>The software uses external input to construct a pathname that should be within a restricted directory, but it does not properly neutralize \'.../...//\' (doubled triple dot slash) sequences that can resolve to a location that is outside of that directory.</td>\n</tr>\n<tr>\n<td>capec-98</td>\n<td>Phishing</td>\n<td>Phishing is a social engineering technique where an attacker masquerades as a legitimate entity with which the victim might do business in order to prompt the user to reveal some confidential information (very frequently authentication credentials) that can later be used by an attacker. Phishing is essentially a form of information gathering or "fishing" for information.</td>\n</tr>\n<tr>\n<td>CWE-256</td>\n<td>Plaintext Storage of a Password</td>\n<td>Storing a password in plaintext may result in a system compromise.</td>\n</tr>\n<tr>\n<td>CWE-359</td>\n<td>Privacy Violation</td>\n<td>The software does not properly prevent private data (such as credit card numbers) from being accessed by actors who either (1) are not explicitly authorized to access the data or (2) do not have the implicit consent of the people to which the data is related.</td>\n</tr>\n<tr>\n<td>capec-233</td>\n<td>Privilege Escalation</td>\n<td>An adversary exploits a weakness enabling them to elevate their privilege and perform an action that they are not supposed to be authorized to perform.</td>\n</tr>\n<tr>\n<td>CWE-23</td>\n<td>Relative Path Traversal</td>\n<td>The software uses external input to construct a pathname that should be within a restricted directory, but it does not properly neutralize sequences such as ".." that can resolve to a location that is outside of that directory.</td>\n</tr>\n<tr>\n<td>CWE-784</td>\n<td>Reliance on Cookies without Validation and Integrity Checking in a Security Decision</td>\n<td>The application uses a protection mechanism that relies on the existence or values of a cookie, but it does not properly ensure that the cookie is valid for the associated user.</td>\n</tr>\n<tr>\n<td>CWE-350</td>\n<td>Reliance on Reverse DNS Resolution for a Security-Critical Action</td>\n<td>The software performs reverse DNS resolution on an IP address to obtain the hostname and make a security decision, but it does not properly ensure that the IP address is truly associated with the hostname.</td>\n</tr>\n<tr>\n<td>CWE-807</td>\n<td>Reliance on Untrusted Inputs in a Security Decision</td>\n<td>The application uses a protection mechanism that relies on the existence or values of an input, but the input can be modified by an untrusted actor in a way that bypasses the protection mechanism.</td>\n</tr>\n<tr>\n<td>CWE-98</td>\n<td>Remote File Inclusion</td>\n<td>The PHP application receives input from an upstream component, but it does not restrict or incorrectly restricts the input before its usage in "require," "include," or similar functions.</td>\n</tr>\n<tr>\n<td>CWE-509</td>\n<td>Replicating Malicious Code (Virus or Worm)</td>\n<td>Replicating malicious code, including viruses and worms, will attempt to attack other systems once it has successfully compromised the target system or software.</td>\n</tr>\n<tr>\n<td>CWE-99</td>\n<td>Resource Injection</td>\n<td>The software receives input from an upstream component, but it does not restrict or incorrectly restricts the input before it is used as an identifier for a resource that may be outside the intended sphere of control.</td>\n</tr>\n<tr>\n<td>CWE-323</td>\n<td>Reusing a Nonce, Key Pair in Encryption</td>\n<td>Nonces should be used for the present occasion and only once.</td>\n</tr>\n<tr>\n<td>CWE-328</td>\n<td>Reversible One-Way Hash</td>\n<td>The product uses a hashing algorithm that produces a hash value that can be used to determine the original input, or to find an input that can produce the same hash, more efficiently than brute force techniques.</td>\n</tr>\n<tr>\n<td>CWE-656</td>\n<td>Security Through Obscurity</td>\n<td>The software uses a protection mechanism whose strength depends heavily on its obscurity, such that knowledge of its algorithms or key data is sufficient to defeat the mechanism.</td>\n</tr>\n<tr>\n<td>CWE-918</td>\n<td>Server-Side Request Forgery (SSRF)</td>\n<td>The web server receives a URL or similar request from an upstream component and retrieves the contents of this URL, but it does not sufficiently ensure that the request is being sent to the expected destination.</td>\n</tr>\n<tr>\n<td>CWE-384</td>\n<td>Session Fixation</td>\n<td>Authenticating a user, or otherwise establishing a new user session, without invalidating any existing session identifier gives an attacker the opportunity to steal authenticated sessions.</td>\n</tr>\n<tr>\n<td>CWE-89</td>\n<td>SQL Injection</td>\n<td>The software constructs all or part of an SQL command using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended SQL command when it is sent to a downstream component.</td>\n</tr>\n<tr>\n<td>CWE-121</td>\n<td>Stack Overflow</td>\n<td>A stack-based buffer overflow condition is a condition where the buffer being overwritten is allocated on the stack (i.e., is a local variable or, rarely, a parameter to a function).</td>\n</tr>\n<tr>\n<td>CWE-257</td>\n<td>Storing Passwords in a Recoverable Format</td>\n<td>The storage of passwords in a recoverable format makes them subject to password reuse attacks by malicious users. In fact, it should be noted that recoverable encrypted passwords provide no significant benefit over plaintext passwords since they are subject not only to reuse by malicious attackers but also by malicious insiders. If a system administrator can recover a password directly, or use a brute force search on the available information, the administrator can use the password on other accounts.</td>\n</tr>\n<tr>\n<td>CWE-367</td>\n<td>Time-of-check Time-of-use (TOCTOU) Race Condition</td>\n<td>The software checks the state of a resource before using that resource, but the resource\'s state can change between the check and the use in a way that invalidates the results of the check. This can cause the software to perform invalid actions when the resource is in an unexpected state.</td>\n</tr>\n<tr>\n<td>CWE-360</td>\n<td>Trust of System Event Data</td>\n<td>Security based on event locations are insecure and can be spoofed.</td>\n</tr>\n<tr>\n<td>CWE-843</td>\n<td>Type Confusion</td>\n<td>The program allocates or initializes a resource such as a pointer, object, or variable using one type, but it later accesses that resource using a type that is incompatible with the original type.</td>\n</tr>\n<tr>\n<td>capec-103</td>\n<td>UI Redressing (Clickjacking)</td>\n<td>In a clickjacking attack the victim is tricked into unknowingly initiating some action in one system while interacting with the UI from seemingly completely different system.</td>\n</tr>\n<tr>\n<td>CWE-391</td>\n<td>Unchecked Error Condition</td>\n<td>Ignoring exceptions and other error conditions may allow an attacker to induce unexpected behavior unnoticed.</td>\n</tr>\n<tr>\n<td>CWE-674</td>\n<td>Uncontrolled Recursion</td>\n<td>The product does not properly control the amount of recursion that takes place, which consumes excessive resources, such as allocated memory or the program stack.</td>\n</tr>\n<tr>\n<td>CWE-523</td>\n<td>Unprotected Transport of Credentials</td>\n<td>Login pages not using adequate measures to protect the user name and password while they are in transit from the client to the server.</td>\n</tr>\n<tr>\n<td>CWE-426</td>\n<td>Untrusted Search Path</td>\n<td>The application searches for critical resources using an externally-supplied search path that can point to resources that are not under the application\'s direct control.</td>\n</tr>\n<tr>\n<td>CWE-620</td>\n<td>Unverified Password Change</td>\n<td>When setting a new password for a user, the product does not require knowledge of the original password, or using another form of authentication.</td>\n</tr>\n<tr>\n<td>CWE-416</td>\n<td>Use After Free</td>\n<td>Referencing memory after it has been freed can cause a program to crash, use unexpected values, or execute code.</td>\n</tr>\n<tr>\n<td>CWE-327</td>\n<td>Use of a Broken or Risky Cryptographic Algorithm</td>\n<td>The use of a broken or risky cryptographic algorithm is an unnecessary risk that may result in the exposure of sensitive information.</td>\n</tr>\n<tr>\n<td>CWE-324</td>\n<td>Use of a Key Past its Expiration Date</td>\n<td>The product uses a cryptographic key or password past its expiration date, which diminishes its safety significantly by increasing the timing window for cracking attacks against that key.</td>\n</tr>\n<tr>\n<td>CWE-338</td>\n<td>Use of Cryptographically Weak Pseudo-Random Number Generator (PRNG)</td>\n<td>The product uses a Pseudo-Random Number Generator (PRNG) in a security context, but the PRNG is not cryptographically strong.</td>\n</tr>\n<tr>\n<td>CWE-134</td>\n<td>Use of Externally-Controlled Format String</td>\n<td>The software uses a function that accepts a format string as an argument, but the format string originates from an external source.</td>\n</tr>\n<tr>\n<td>CWE-798</td>\n<td>Use of Hard-coded Credentials</td>\n<td>The software contains hard-coded credentials, such as a password or cryptographic key, which it uses for its own inbound authentication, outbound communication to external components, or encryption of internal data.</td>\n</tr>\n<tr>\n<td>CWE-321</td>\n<td>Use of Hard-coded Cryptographic Key</td>\n<td>The use of a hard-coded cryptographic key significantly increases the possibility that encrypted data may be recovered.</td>\n</tr>\n<tr>\n<td>CWE-259</td>\n<td>Use of Hard-coded Password</td>\n<td>The software contains a hard-coded password, which it uses for its own inbound authentication or for outbound communication to external components.</td>\n</tr>\n<tr>\n<td>CWE-242</td>\n<td>Use of Inherently Dangerous Function</td>\n<td>The program calls a function that can never be guaranteed to work safely.</td>\n</tr>\n<tr>\n<td>CWE-330</td>\n<td>Use of Insufficiently Random Values</td>\n<td>The software may use insufficiently random numbers or values in a security context that depends on unpredictable numbers.</td>\n</tr>\n<tr>\n<td>CWE-451</td>\n<td>User Interface (UI) Misrepresentation of Critical Information</td>\n<td>The user interface (UI) does not properly represent critical information to the user, allowing the information - or its source - to be obscured or spoofed. This is often a component in phishing attacks.</td>\n</tr>\n<tr>\n<td>CWE-657</td>\n<td>Violation of Secure Design Principles</td>\n<td>The product violates well-established principles for secure design.</td>\n</tr>\n<tr>\n<td>CWE-261</td>\n<td>Weak Cryptography for Passwords</td>\n<td>Obscuring a password with a trivial encoding does not protect the password.</td>\n</tr>\n<tr>\n<td>CWE-640</td>\n<td>Weak Password Recovery Mechanism for Forgotten Password</td>\n<td>The software contains a mechanism for users to recover or change their passwords without knowing the original password, but the mechanism is weak.</td>\n</tr>\n<tr>\n<td>CWE-128</td>\n<td>Wrap-around Error</td>\n<td>Wrap around errors occur whenever a value is incremented past the maximum value for its type and therefore "wraps around" to a very small, negative, or undefined value.</td>\n</tr>\n<tr>\n<td>CWE-123</td>\n<td>Write-what-where Condition</td>\n<td>Any condition where the attacker has the ability to write an arbitrary value to an arbitrary location, often as the result of a buffer overflow.</td>\n</tr>\n<tr>\n<td>CWE-776</td>\n<td>XML Entity Expansion</td>\n<td>The software uses XML documents and allows their structure to be defined with a Document Type Definition (DTD), but it does not properly control the number of recursive definitions of entities.</td>\n</tr>\n<tr>\n<td>CWE-611</td>\n<td>XML External Entities (XXE)</td>\n<td>The software processes an XML document that can contain XML entities with URIs that resolve to documents outside of the intended sphere of control, causing the product to embed incorrect documents into its output.</td>\n</tr>\n<tr>\n<td>CWE-91</td>\n<td>XML Injection</td>\n<td>The software does not properly neutralize special elements that are used in XML, allowing attackers to modify the syntax, content, or commands of the XML before it is processed by an end system.</td>\n</tr>\n<tr>\n<td>CAPEC-209</td>\n<td>XSS Using MIME Type Mismatch</td>\n<td>An adversary creates a file with scripting content but where the specified MIME type of the file is such that scripting is not expected. The adversary tricks the victim into accessing a URL that responds with the script file. Some browsers will detect that the specified MIME type of the file does not match the actual type of its content and will automatically switch to using an interpreter for the real content type. If the browser does not invoke script filters before doing this, the adversary\'s script may run on the target unsanitized, possibly revealing the victim\'s cookies or executing arbitrary script in their browser.</td>\n</tr>\n</tbody>\n</table>',
frontmatter:{title:"Types of Weaknesses",id:"hackers/types-of-weaknesses",path:"/hackers/types-of-weaknesses.html",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---hackers-types-of-weaknesses-html-b37702a9a0013c220084.js.map