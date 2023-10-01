import { Link } from '@inertiajs/react';
import React from 'react'

const Navbar = ({ user }) => {
  return (
      <div>
          <div className="navbar fixed top-0 w-full shadow">
              <div className="navbar-start">
                  {/* menu hidden */}
                  <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"
                              />
                          </svg>
                      </label>
                      <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                      >
                          <div data-aos="fade-down" data-aos-delay="100">
                              <li>
                                  <a className="text-2xl " href="/pupuk">
                                      Pupuk
                                  </a>
                              </li>
                          </div>
                          <div data-aos="fade-down" data-aos-delay="200">
                              <li>
                                  <a className="text-2xl" href="/obat">
                                      Obat
                                  </a>
                              </li>
                          </div>
                          <div data-aos="fade-down" data-aos-delay="300">
                              <li tabIndex={0}>
                                  <details>
                                      <summary className="text-2xl ">
                                          Alat
                                      </summary>
                                      <ul className="p-2">
                                          <li>
                                              <a>Submenu 1</a>
                                          </li>
                                          <li>
                                              <a>Submenu 2</a>
                                          </li>
                                      </ul>
                                  </details>
                              </li>
                          </div>
                          <div data-aos="fade-down" data-aos-delay="400">
                              <li>
                                  <a className="text-2xl ">Tentang</a>
                              </li>
                          </div>
                      </ul>
                  </div>
                  <a
                      data-aos="fade-down"
                      data-aos-delay="500"
                      className="btn btn-ghost lg:hidden normal-case text-4xl flex items-center justify-center"
                      href="/"
                  >
                      Mitra Tani
                  </a>
              </div>
              {/* menu hidden */}
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                      <div data-aos="fade-down" data-aos-delay="100">
                          <li>
                              <a className="text-2xl " href="/pupuk">
                                  Pupuk
                              </a>
                          </li>
                      </div>
                      <div data-aos="fade-down" data-aos-delay="200">
                          <li>
                              <a href="/obat" className="text-2xl">
                                  Obat
                              </a>
                          </li>
                      </div>
                      <li>
                          <a
                              className="btn btn-ghost normal-case text-4xl"
                              href="/"
                          >
                              Mitra Tani
                          </a>
                      </li>
                      <div data-aos="fade-down" data-aos-delay="300">
                          <li tabIndex={0}>
                              <details>
                                  <summary className="text-2xl ">Alat</summary>
                                  <ul className="p-2">
                                      <li>
                                          <a>Submenu 1</a>
                                      </li>
                                      <li>
                                          <a>Submenu 2</a>
                                      </li>
                                  </ul>
                              </details>
                          </li>
                      </div>
                      <div data-aos="fade-down" data-aos-delay="400">
                          <li>
                              <a className="text-2xl ">Tentang</a>
                          </li>
                      </div>
                  </ul>
              </div>
              <div className="navbar-end">
                  <div className="dropdown dropdown-end">
                      <label
                          tabIndex={0}
                          className="btn btn-ghost btn-circle avatar"
                      >
                          <div className="w-10 rounded-full">
                              <img src="" />
                          </div>
                      </label>
                      <ul
                          tabIndex={0}
                          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                      >
                          {!user ? (
                              <>
                                  <li>
                                     <Link href={route("login")}>Login</Link>
                                  </li>
                              </>
                          ) : (
                              <>
                                  <li>
                                      <Link href={route("dashboard")}>Dashboard</Link>
                                  </li>
                                  <li>
                                      <Link href={route("logout")} method='post' as='button'>Logout</Link>
                                  </li>
                              </>
                          )}
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Navbar
