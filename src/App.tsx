import { A, Routes, Route } from '@solidjs/router'
import Home from './Home'
import About from './About'
import Projects from './Projects'

function App() {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">LExE</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><A href="/" activeClass="" inactiveClass="">Home</A></li>
            <li><A href="/about" activeClass="" inactiveClass="">About</A></li>
            <li><A href="/projects" activeClass="" inactiveClass="">Projects</A></li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Routes>

      <footer class="footer p-10 md:px-12 xl:px-48 bg-base-200 text-base-content">
        <aside class="max-w-sm">
          <p class="font-bold text-lg">Lynbrook Excellence in Education</p>
          <p class="opacity-70">
            Lynbrook Excellence in Education is an IRS approved 501(c)(3) public charity. Based on this status, all donations and corporate matching funds to Lynbrook Excellence in Education are tax deductible. Tax ID#: 45-2453655
            <br />Creative content by Mihir Pandya.
          </p>
        </aside>
        <nav>
          <header class="footer-title">Updates</header>
          <a class="link link-hover">Annual Reports</a>
          <a class="link link-hover">Newsletters</a>
        </nav>
        <nav>
          <header class="footer-title">Contact</header>
          <a class="link link-hover">Contact</a>
        </nav>
      </footer>
    </>
  )
}

export default App
