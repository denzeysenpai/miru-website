<template>
  <div class="min-h-screen bg-surface-container-lowest">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-2xl border-b border-white/5 h-16">
      <div class="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        <NuxtLink to="/" class="text-2xl font-bold tracking-tighter text-white uppercase font-headline hover:text-primary-fixed-dim transition-colors">
          miru
        </NuxtLink>
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/" class="text-neutral-400 hover:text-white transition-colors font-headline tracking-tight text-sm">
            Home
          </NuxtLink>
          <NuxtLink to="/docs" class="text-white border-b border-cyan-400 pb-1 font-headline tracking-tight text-sm">
            Documentation
          </NuxtLink>
        </div>
        <div class="flex items-center gap-4">
          <a href="https://github.com/denzeysenpai/miru" target="_blank" class="text-cyan-400 hover:bg-white/5 p-2 rounded transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>

    <!-- Documentation Content -->
    <main class="pt-24 pb-20 px-6">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <div class="mb-16 text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary mb-6 text-[10px] font-headline font-bold tracking-widest uppercase">
            API Reference
          </div>
          <h1 class="font-headline text-4xl md:text-6xl font-bold text-white mb-6">Documentation</h1>
          <p class="text-on-surface-variant text-xl max-w-2xl mx-auto">
            Complete guide to the Miru Go debugger toolkit. Learn how to use structured logging, panic recovery, testing utilities, and the remote dashboard.
          </p>
        </div>

        <!-- Table of Contents -->
        <div class="glass-panel rounded-xl p-6 mb-12 border border-outline-variant/15">
          <h2 class="font-headline text-lg font-bold text-white mb-4">Table of Contents</h2>
          <div class="grid md:grid-cols-2 gap-2">
            <a v-for="section in tocSections" :key="section.id" :href="`#${section.id}`" 
               class="text-on-surface-variant hover:text-primary-fixed-dim transition-colors text-sm py-1">
              {{ section.title }}
            </a>
          </div>
        </div>

        <!-- Install Section -->
        <DocSection id="install" title="Install">
          <p class="text-on-surface-variant mb-4">
            Get started with Miru by installing the package via go get:
          </p>
          <CodeBlock language="bash" code="go get github.com/denzeysenpai/miru" />
        </DocSection>

        <!-- Quick Start Section -->
        <DocSection id="quick-start" title="Quick Start">
          <p class="text-on-surface-variant mb-4">
            Create a new debugger instance and configure it for your needs:
          </p>
          <CodeBlock language="go" :code="quickStartCode" />
          <p class="text-on-surface-variant mt-4">
            The example above demonstrates all core features: panic recovery with <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Catch</code>, 
            console logging with <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Out</code>, memory statistics with <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Mem</code>, 
            test groups with <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">TestGroup</code>, and execution tracing with <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Trace</code>.
          </p>
        </DocSection>

        <!-- Using Default Section -->
        <DocSection id="using-default" title="Using Default: NewDebugger">
          <p class="text-on-surface-variant mb-4">
            You can also skip the config and just stick to the defaults:
          </p>
          <CodeBlock language="go" :code="defaultCode" />
        </DocSection>

        <!-- Config Section -->
        <DocSection id="config" title="Config">
          <p class="text-on-surface-variant mb-4">
            Configure Miru with <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">DebugConfig</code>:
          </p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-on-surface-variant">
              <thead class="text-xs text-on-surface uppercase bg-surface-container-high">
                <tr>
                  <th class="px-4 py-3 rounded-l-lg">Field</th>
                  <th class="px-4 py-3">Type</th>
                  <th class="px-4 py-3">Default</th>
                  <th class="px-4 py-3 rounded-r-lg">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in configTable" :key="i" class="border-b border-outline-variant/10">
                  <td class="px-4 py-3 font-mono text-primary-fixed-dim">{{ row.field }}</td>
                  <td class="px-4 py-3 font-mono">{{ row.type }}</td>
                  <td class="px-4 py-3 font-mono">{{ row.default }}</td>
                  <td class="px-4 py-3">{{ row.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-on-surface-variant mt-4 text-sm">
            * Use <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">miru.DefaultConfig()</code> to get a config with all defaults (including <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">WithContext: true</code>).
          </p>
        </DocSection>

        <!-- Walk Section -->
        <DocSection id="walk" title="Pretty-print: Walk">
          <p class="text-on-surface-variant mb-4">
            Inspect structs, slices, and maps with indented output. Depth is limited by <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">WalkDepth</code> in config (-1 = no limit).
          </p>
          <CodeBlock language="go" :code="walkCode" />
          <p class="text-on-surface-variant mt-4 mb-2">Output (first line uses same style as other Miru logs; rest is indented):</p>
          <CodeBlock language="text" :code="walkOutput" />
        </DocSection>

        <!-- Catch Section -->
        <DocSection id="catch" title="Panic recovery: Catch">
          <p class="text-on-surface-variant mb-4">
            <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">debug.Catch(r)</code> logs the recovered panic to the <strong>console</strong> and to the <strong>log file</strong>:
          </p>
          <CodeBlock language="text" code="[Miru Catch]:	<dateTime>	SomeFunction:42	->	Caught: runtime error: ..." />
          <ul class="mt-4 space-y-2 text-on-surface-variant">
            <li class="flex items-start gap-2">
              <span class="text-red-400 font-bold">Red:</span>
              <span><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">[Miru Catch]</code> and the caught message (when Colorful is true)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 font-bold">Yellow:</span>
              <span>dateTime</span>
            </li>
          </ul>
        </DocSection>

        <!-- Out Section -->
        <DocSection id="out" title="Console logging: Out">
          <p class="text-on-surface-variant mb-4">
            Like <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">console.log</code> in JavaScript: any number of arguments, any types. <strong>Never</strong> writes to log files.
          </p>
          <CodeBlock language="go" :code="outCode" />
          <p class="text-on-surface-variant mt-4 mb-2">Output (one line per argument):</p>
          <CodeBlock language="text" :code="outOutput" />
          <ul class="mt-4 space-y-2 text-on-surface-variant">
            <li class="flex items-start gap-2">
              <span class="text-red-400 font-bold">Red:</span>
              <span><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">[Miru Out]</code></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 font-bold">Yellow:</span>
              <span>dateTime</span>
            </li>
          </ul>
          <p class="text-on-surface-variant mt-4">
            Structs, maps, and slices are serialized as JSON.
          </p>
        </DocSection>

        <!-- Tap Section -->
        <DocSection id="tap" title="Tap">
          <p class="text-on-surface-variant mb-4">
            Pass a value through a function (e.g. to log it) and get the same value back. Like Ruby's <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">tap</code>. 
            This way, you can log and get the value in the same line.
          </p>
          <CodeBlock language="go" :code="tapCode" />
        </DocSection>

        <!-- Test Section -->
        <DocSection id="test" title="Testing: Test">
          <p class="text-on-surface-variant mb-4">
            Run a function and compare its return value to the expected value. Works with or without arguments:
          </p>
          <CodeBlock language="go" :code="testCode" />
          <p class="text-on-surface-variant mt-4 mb-2">Output:</p>
          <CodeBlock language="text" :code="testOutput" />
          <ul class="mt-4 space-y-2 text-on-surface-variant">
            <li class="flex items-start gap-2">
              <span class="text-green-400 font-bold">Green:</span>
              <span><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">[Miru Test]</code>; PASSED is green, FAILED is red</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 font-bold">Yellow:</span>
              <span>dateTime and duration</span>
            </li>
          </ul>
        </DocSection>

        <!-- TestGroup Section -->
        <DocSection id="testgroup" title="Test Groups: TestGroup">
          <p class="text-on-surface-variant mb-4">
            Group related tests together and get a summary of passed/failed tests:
          </p>
          <CodeBlock language="go" :code="testGroupCode" />
          <p class="text-on-surface-variant mt-4 mb-2">Output:</p>
          <CodeBlock language="text" :code="testGroupOutput" />
          <ul class="mt-4 space-y-2 text-on-surface-variant">
            <li class="flex items-start gap-2">
              <span class="text-green-400 font-bold">Green:</span>
              <span><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">[Miru TGroup Start]</code> and <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">[Miru TGroup Close]</code> headers</span>
            </li>
            <li class="flex items-start gap-2">
              <span>PASSED tests are green, FAILED tests are red</span>
            </li>
            <li class="flex items-start gap-2">
              <span>Final summary shows (passed / total) count</span>
            </li>
          </ul>
        </DocSection>

        <!-- RemoteDashboard Section -->
        <DocSection id="remotedashboard" title="Remote Dashboard">
          <p class="text-on-surface-variant mb-4">
            Serve a small web UI that shows logs and traces live (SSE). Call once to start the server; 
            all Catch, Out, Test, Trace, Walk, CheckStack, and Mem output is streamed to the page.
          </p>
          <CodeBlock language="go" :code="dashboardCode" />
          <p class="text-on-surface-variant mt-4">
            No log file writing from the dashboard; it only streams what's already printed to the console.
          </p>
          
          <h3 class="font-headline text-xl font-bold text-white mt-8 mb-4">Dashboard Features</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="feature in dashboardFeatures" :key="feature.title" class="glass-panel p-4 rounded-lg border border-outline-variant/10">
              <h4 class="text-white font-bold mb-2">{{ feature.title }}</h4>
              <p class="text-on-surface-variant text-sm">{{ feature.description }}</p>
            </div>
          </div>

          <h3 class="font-headline text-xl font-bold text-white mt-8 mb-4">Keyboard Shortcuts</h3>
          <div class="grid md:grid-cols-2 gap-2">
            <div v-for="shortcut in keyboardShortcuts" :key="shortcut.key" class="flex items-center gap-3 p-2">
              <kbd class="px-2 py-1 bg-surface-container-high rounded text-primary-fixed-dim font-mono text-sm">{{ shortcut.key }}</kbd>
              <span class="text-on-surface-variant text-sm">{{ shortcut.action }}</span>
            </div>
          </div>
        </DocSection>

        <!-- CheckStack Section -->
        <DocSection id="checkstack" title="Stack Trace: CheckStack">
          <p class="text-on-surface-variant mb-4">
            Print the current goroutine's stack trace (console only, no file):
          </p>
          <CodeBlock language="go" code="debug.CheckStack()" />
          <p class="text-on-surface-variant mt-4">
            Output: <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">[Miru CheckStack]</code> header plus indented stack lines. 
            With <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Colorful</code>, the goroutine line is yellow.
          </p>
        </DocSection>

        <!-- Trace Section -->
        <DocSection id="trace" title="Tracing: Trace">
          <p class="text-on-surface-variant mb-4">
            Measure execution time with a deferred call:
          </p>
          <CodeBlock language="go" code='defer debug.Trace("someFunc")()' />
          <p class="text-on-surface-variant mt-4 mb-2">Output:</p>
          <CodeBlock language="text" code="[Miru Trace]:	<dateTime>	someFunc	->	0.25ms" />
          <ul class="mt-4 space-y-2 text-on-surface-variant">
            <li class="flex items-start gap-2">
              <span class="text-green-400 font-bold">Green:</span>
              <span><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">[Miru Trace]</code></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 font-bold">Yellow:</span>
              <span>dateTime and duration</span>
            </li>
          </ul>
        </DocSection>

        <!-- Mem Section -->
        <DocSection id="mem" title="Memory Statistics: Mem">
          <p class="text-on-surface-variant mb-4">
            Display runtime memory statistics including allocation, heap usage, system memory, goroutine count, and GC cycles:
          </p>
          <CodeBlock language="go" code="debug.Mem()" />
          <p class="text-on-surface-variant mt-4 mb-2">Output:</p>
          <CodeBlock language="text" code="[Miru Mem]:	<dateTime>	memory	->	alloc=12MB heap=8MB sys=45MB goroutines=3 gc=15" />
          <ul class="mt-4 space-y-2 text-on-surface-variant">
            <li class="flex items-start gap-2">
              <span class="text-green-400 font-bold">Green:</span>
              <span><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">[Miru Mem]</code></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 font-bold">Yellow:</span>
              <span>dateTime</span>
            </li>
          </ul>
          <p class="text-on-surface-variant mt-4">
            Shows alloc (current allocation), heap (heap allocation), sys (system memory), goroutines (active goroutines), and gc (GC cycles).
          </p>
        </DocSection>

        <!-- IfErr Section -->
        <DocSection id="iferr" title="Error Flow: IfErr">
          <p class="text-on-surface-variant mb-4">
            <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">IfErr</code> provides a <strong>fluent error-handling helper</strong> that lets you react to errors without repetitive <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">if err != nil</code> blocks.
          </p>
          <p class="text-on-surface-variant mb-4">
            It supports chaining actions like:
          </p>
          <ul class="list-disc list-inside space-y-2 text-on-surface-variant mb-6">
            <li><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Do()</code> – run code when an error exists</li>
            <li><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Else()</code> – run code when no error exists</li>
            <li><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Panic()</code> – panic if an error exists</li>
            <li><code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Retry()</code> – retry an operation multiple times</li>
          </ul>
          <p class="text-on-surface-variant mb-4">
            <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">IfErr</code> also <strong>logs the error automatically</strong> when it is not <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">nil</code>.
          </p>

          <h3 class="font-headline text-xl font-bold text-white mt-8 mb-4">Basic Usage</h3>
          <CodeBlock language="go" :code="ifErrCode" />

          <h3 class="font-headline text-xl font-bold text-white mt-8 mb-4">Do – Run Code on Error</h3>
          <p class="text-on-surface-variant mb-4">
            <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Do</code> executes a function <strong>only if an error occurred</strong>.
          </p>
          <CodeBlock language="go" :code="ifErrDoCode" />

          <h3 class="font-headline text-xl font-bold text-white mt-8 mb-4">Else – Handle Success</h3>
          <p class="text-on-surface-variant mb-4">
            <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Else</code> executes a function <strong>only if no error occurred</strong>.
          </p>
          <CodeBlock language="go" :code="ifErrElseCode" />

          <h3 class="font-headline text-xl font-bold text-white mt-8 mb-4">Panic on Error</h3>
          <p class="text-on-surface-variant mb-4">
            <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Panic</code> panics if an error exists.
          </p>
          <CodeBlock language="go" code="debug.IfErr(err).Panic()" />
          <p class="text-on-surface-variant mt-4 mb-2">Equivalent to:</p>
          <CodeBlock language="go" :code="ifErrPanicEquiv" />

          <h3 class="font-headline text-xl font-bold text-white mt-8 mb-4">Retry Operations</h3>
          <p class="text-on-surface-variant mb-4">
            <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">Retry</code> repeatedly executes a function until it succeeds or the retry limit is reached.
          </p>
          <CodeBlock language="go" :code="ifErrRetryCode" />
          <p class="text-on-surface-variant mt-4 mb-2">Behavior:</p>
          <ul class="list-disc list-inside space-y-2 text-on-surface-variant mb-4">
            <li>Only runs if the original error is <strong>not nil</strong></li>
            <li>Stops retrying once the function returns <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">nil</code></li>
            <li>Logs each failed retry attempt</li>
          </ul>
          <p class="text-on-surface-variant mb-2">Output Sample:</p>
          <CodeBlock language="text" :code="ifErrRetryOutput" />

          <h3 class="font-headline text-xl font-bold text-white mt-8 mb-4">Summary</h3>
          <p class="text-on-surface-variant mb-4">
            <code class="text-primary-fixed-dim bg-surface-container-high px-1 rounded">IfErr</code> enables concise and readable error handling:
          </p>
          <CodeBlock language="go" :code="ifErrSummary" />
        </DocSection>

        <!-- License Section -->
        <DocSection id="license" title="License">
          <p class="text-on-surface-variant">
            Miru is released under the <strong class="text-white">MIT License</strong>.
          </p>
        </DocSection>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-950 w-full py-12 px-6 border-t border-neutral-800/20">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-lg font-bold text-white font-headline uppercase tracking-tighter">miru</div>
          <p class="text-neutral-500 font-body text-sm">© 2024 Miru Toolkit. Released under MIT License.</p>
        </div>
        <div class="flex gap-8 text-sm font-body">
          <NuxtLink to="/docs" class="text-neutral-500 hover:text-white transition-colors">Documentation</NuxtLink>
          <a class="text-neutral-500 hover:text-white transition-colors" href="https://github.com/denzeysenpai/miru" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Table of Contents
const tocSections = [
  { id: 'install', title: 'Install' },
  { id: 'quick-start', title: 'Quick Start' },
  { id: 'using-default', title: 'Using Default' },
  { id: 'config', title: 'Config' },
  { id: 'walk', title: 'Pretty-print: Walk' },
  { id: 'catch', title: 'Panic recovery: Catch' },
  { id: 'out', title: 'Console logging: Out' },
  { id: 'tap', title: 'Tap' },
  { id: 'test', title: 'Testing: Test' },
  { id: 'testgroup', title: 'Test Groups: TestGroup' },
  { id: 'remotedashboard', title: 'Remote Dashboard' },
  { id: 'checkstack', title: 'Stack Trace: CheckStack' },
  { id: 'trace', title: 'Tracing: Trace' },
  { id: 'mem', title: 'Memory Statistics: Mem' },
  { id: 'iferr', title: 'Error Flow: IfErr' },
  { id: 'license', title: 'License' }
];

// Config table data
const configTable = [
  { field: 'OutputPath', type: 'string', default: '"./Debug Output"', description: 'Directory for log files' },
  { field: 'FolderBy', type: 'FolderBy', default: 'FolderNone', description: 'miru.Month, miru.Year, or miru.FolderNone' },
  { field: 'Colorful', type: 'bool', default: 'false', description: 'Colored console output' },
  { field: 'WithContext', type: 'bool', default: 'true*', description: 'Include function name and line number' },
  { field: 'IncludeTests', type: 'bool', default: 'false', description: 'When true, Test() results are also written to log file' },
  { field: 'WalkDepth', type: 'int', default: '5', description: 'Max depth for Walk pretty-print; -1 = no limit' }
];

// Code examples
const quickStartCode = `package main

import "github.com/denzeysenpai/miru"

func main() {
	cfg := miru.DebugConfig{
		OutputPath:   "./Debug Output",  // default
		FolderBy:     miru.Month,        // or miru.Year, or miru.FolderNone
		Colorful:     true,              // colored console output
		WithContext:  true,              // include function:line in output
		IncludeTests: false,             // when true, Test() also logs to file
	}
	debug := miru.NewDebugger()
	debug.Config(cfg)

	SomeFunction(debug)
}

func SomeFunction(debug *miru.Debugger) {
	debug.Func("SomeFunction")
	defer func() {
		if r := recover(); r != nil {
			debug.Catch(r)
		}
	}()
	
	// Console logging
	debug.Out("Processing user data", userID)
	
	// Memory statistics
	debug.Mem()
	
	// Group related tests
	tg := debug.TestGroup("User Operations")
	defer tg.Close()
	tg.Test("user creation", createUser("test@example.com") != nil)
	tg.Test("user validation", validateEmail("test@example.com"))
	
	// Trace execution time
	defer debug.Trace("database operation")()
	// ... your code ...
}`;

const defaultCode = `func TestBasics() {
	debug := miru.NewDebugger()

	debug.Out("Hello There!")
}`;

const walkCode = `type User struct{ Name string; Age int }
debug.Walk([]User{{"Alice", 30}, {"Bob", 25}})
debug.Walk(myMap)`;

const walkOutput = `[Miru Walk]:	<dateTime>	main:42	->	slice (len 2)
  [0]:
    Name: Alice
    Age: 30
  [1]:
    Name: Bob
    Age: 25`;

const outCode = `debug.Out("Hi I'm Mr. Meseeks!", 10, jsonData)`;

const outOutput = `[Miru Out]:	<dateTime>	SomeFunction:line	->	Hi I'm Mr. Meseeks!
[Miru Out]:	<dateTime>	SomeFunction:line	->	10
[Miru Out]:	<dateTime>	SomeFunction:line	->	{"key":"value"}`;

const tapCode = `x := debug.Tap(compute(), func(v interface{}) { debug.Out(v) })
// x is the result of compute(); you also logged it`;

const testCode = `// no args
debug.Test("add", func() int { return 2 + 2 }, 4)

// with args: funcName, fn, expected, then args to pass to fn
debug.Test("add", func(a, b int) int { return a + b }, 7, 3, 4)
debug.Test("fail", func() int { return 1 }, 2)`;

const testOutput = `[Miru Test]:	<dateTime>	add	->	PASSED	(0.20ms)
[Miru Test]:	<dateTime>	fail	->	FAILED	(0.22ms)`;

const testGroupCode = `tg := debug.TestGroup("User Authentication")
defer tg.Close()

tg.Test("valid login", authenticate("user", "pass") == nil)
tg.Test("invalid password", authenticate("user", "wrong") != nil)
tg.Test("empty username", authenticate("", "pass") != nil)`;

const testGroupOutput = `[Miru TGroup Start]:	<dateTime>	User Authentication
[0]	<dateTime>	valid login	->	PASSED
[1]	<dateTime>	invalid password	->	PASSED
[2]	<dateTime>	empty username	->	PASSED
[Miru TGroup Close]:	<dateTime>	(3 / 3)`;

const dashboardCode = `srv := debug.RemoteDashboard(8765) // port 0 or negative = 8765
// open http://localhost:8765
// when done: srv.Shutdown(ctx)`;

const ifErrCode = `err := doSomething()

debug.IfErr(err).
    Do(func() {
        debug.Out("operation failed")
    }).
    Else(func() {
        debug.Out("operation succeeded")
    })`;

const ifErrDoCode = `debug.IfErr(err).Do(func() {
    debug.Out("error occurred")
})`;

const ifErrElseCode = `debug.IfErr(err).
    Do(func() {
        debug.Out("failed")
    }).
    Else(func() {
        debug.Out("success")
    })`;

const ifErrPanicEquiv = `if err != nil {
    panic(err)
}`;

const ifErrRetryCode = `err = debug.IfErr(err).Retry(3, func() error {
    return reconnect()
})`;

const ifErrRetryOutput = `[Miru Err]: <dateTime> main:32 -> connection failed
[Miru Out]: retry 1/3 failed: connection refused
[Miru Out]: retry 2/3 failed: connection refused`;

const ifErrSummary = `debug.IfErr(err).Do(...)
debug.IfErr(err).Do(...).Else(...)
debug.IfErr(err).Panic()
debug.IfErr(err).Retry(3, reconnect)`;

// Dashboard features
const dashboardFeatures = [
  { title: 'Live Log Streaming', description: 'Real-time updates via Server-Sent Events (SSE). All log types displayed with timestamps and source context.' },
  { title: 'Log Type Filtering', description: 'Clickable count cards for each log type. Shows live counts with color-coded entries matching console output.' },
  { title: 'Search', description: 'Real-time search across all log entries. Searches in timestamps, log types, and message bodies.' },
  { title: 'Auto-Scroll Toggle', description: 'Enable/disable automatic scrolling to latest logs. Visual indicator shows active state.' },
  { title: 'Export Logs', description: 'Download filtered logs as timestamped text file. Exports only currently visible entries.' },
  { title: 'Keyboard Shortcuts', description: 'Ctrl+F for search, Ctrl+S for auto-scroll, Ctrl+E for export, Ctrl+C to clear, ? for help.' }
];

// Keyboard shortcuts
const keyboardShortcuts = [
  { key: 'Ctrl+F', action: 'Focus search box' },
  { key: 'Ctrl+S', action: 'Toggle auto-scroll' },
  { key: 'Ctrl+E', action: 'Export logs' },
  { key: 'Ctrl+C', action: 'Clear logs' },
  { key: 'Esc', action: 'Clear search' },
  { key: '?', action: 'Toggle shortcuts help panel' }
];
</script>

<style>
/* Documentation-specific styles */
.text-primary-fixed-dim {
  color: #00dddd;
}

.bg-surface-container-high {
  background-color: #2a2a2a;
}

kbd {
  font-family: 'JetBrains Mono', monospace;
}
</style>
