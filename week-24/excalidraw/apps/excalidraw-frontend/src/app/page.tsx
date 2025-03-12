"use client"
import React from 'react';
import { Pencil, Shapes, Share2, Download, Users, Github, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
    {/* Navigation */}
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Shapes className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">Excalidraw</span>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <a href="#features" className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </a>
              <a href="#how-it-works" className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                How it works
              </a>
              <a href="#testimonials" className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Testimonials
              </a>
              <a href="#pricing" className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Pricing
              </a>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Link href="/signin" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign in
            </Link>
            <a href="#" className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Try it now
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#features" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              How it works
            </a>
            <a href="#testimonials" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-4">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                Sign in
              </a>
              <a href="#" className="block w-full px-5 py-3 text-center font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md shadow">
                Try it now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>

    {/* Hero Section */}
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Create beautiful</span>
                <span className="block text-purple-500">diagrams together</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A virtual whiteboard for sketching hand-drawn like diagrams. Collaborate with others in real-time and share your ideas effortlessly.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                    Start drawing
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-100 bg-purple-800 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-80"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="People collaborating on a whiteboard"
        />
      </div>
    </div>

    {/* Features Section */}
    <div id="features" className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need to create amazing diagrams
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Our Excalidraw clone provides all the tools you need to bring your ideas to life.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <Pencil className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-white">Intuitive Drawing Tools</h3>
                <p className="mt-2 text-base text-gray-400">
                  Create hand-drawn diagrams with our easy-to-use tools. Sketch, add shapes, and annotate with a natural feel.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-white">Real-time Collaboration</h3>
                <p className="mt-2 text-base text-gray-400">
                  Work together with your team in real-time. See changes as they happen and collaborate seamlessly.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <Share2 className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-white">Easy Sharing</h3>
                <p className="mt-2 text-base text-gray-400">
                  Share your diagrams with a simple link. No account required for viewers to see your creations.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <Download className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-white">Export Options</h3>
                <p className="mt-2 text-base text-gray-400">
                  Export your diagrams in multiple formats including PNG, SVG, and JSON for future editing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* How it works */}
    <div id="how-it-works" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">How it works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Start drawing in seconds
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Our simple process gets you from idea to visualization in no time.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-500 text-white mx-auto">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-white">Create a new drawing</h3>
              <p className="mt-2 text-base text-gray-400">
                Click "Start drawing" to open a new canvas. No sign-up required to get started.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-500 text-white mx-auto">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-white">Sketch your ideas</h3>
              <p className="mt-2 text-base text-gray-400">
                Use our intuitive tools to create diagrams, flowcharts, wireframes, or anything you can imagine.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-500 text-white mx-auto">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-white">Share and collaborate</h3>
              <p className="mt-2 text-base text-gray-400">
                Invite others to view or edit your drawing with a simple link. Export when you're done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div id="testimonials" className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Loved by teams worldwide
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            See what our users have to say about their experience.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">Sarah Johnson</h4>
                  <p className="text-gray-400">Product Designer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "This tool has completely transformed how our design team collaborates. The hand-drawn style adds a personal touch to our wireframes."
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">Michael Chen</h4>
                  <p className="text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I use this daily for system architecture diagrams. The real-time collaboration feature is a game-changer for remote teams."
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">Emily Rodriguez</h4>
                  <p className="text-gray-400">Project Manager</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Perfect for brainstorming sessions. We can quickly sketch out ideas and export them for our documentation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Pricing */}
    <div id="pricing" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Choose the plan that's right for you or your team.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="p-8 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
            <h3 className="text-xl font-medium text-white">Free</h3>
            <p className="mt-4 text-gray-400">Perfect for individuals and small projects.</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-white">$0</span>
              <span className="text-base font-medium text-gray-400">/mo</span>
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Unlimited diagrams</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Basic shapes and tools</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">PNG/SVG export</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Basic sharing</p>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="block w-full bg-gray-700 border border-gray-600 rounded-md py-2 text-sm font-medium text-white text-center hover:bg-gray-600">
                Start for free
              </a>
            </div>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg shadow-lg border-2 border-purple-500 relative">
            <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
              <div className="inline-block px-4 py-1 text-sm font-semibold tracking-wider uppercase bg-purple-500 text-white rounded-full">
                Most Popular
              </div>
            </div>
            <h3 className="text-xl font-medium text-white">Pro</h3>
            <p className="mt-4 text-gray-400">For professionals and small teams.</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-white">$12</span>
              <span className="text-base font-medium text-gray-400">/mo</span>
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Everything in Free</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Advanced shapes library</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Real-time collaboration</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Version history</p>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="block w-full bg-purple-600 border border-transparent rounded-md py-2 text-sm font-medium text-white text-center hover:bg-purple-700">
                Start free trial
              </a>
            </div>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg shadow-sm border border-gray-700">
            <h3 className="text-xl font-medium text-white">Enterprise</h3>
            <p className="mt-4 text-gray-400">For organizations with advanced needs.</p>
            <p className="mt-8">
              <span className="text-4xl font-extrabold text-white">$49</span>
              <span className="text-base font-medium text-gray-400">/mo</span>
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Everything in Pro</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">SSO authentication</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Advanced permissions</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-green-400" />
                </div>
                <p className="ml-3 text-sm text-gray-300">Dedicated support</p>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="block w-full bg-gray-700 border border-gray-600 rounded-md py-2 text-sm font-medium text-white text-center hover:bg-gray-600">
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-purple-900">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block">Start using Excalidraw today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-purple-200">
          Join thousands of users who are already creating beautiful diagrams with our tool.
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-purple-50 sm:w-auto"
        >
          Start drawing for free
        </a>
      </div>
    </div>

    {/* Footer */}
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2025 Excalidraw Clone. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
  );
}
