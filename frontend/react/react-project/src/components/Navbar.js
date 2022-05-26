import { useEffect, useState } from "react"
import React from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

export default function Navbar() {
  // TODO: answer here
  return (
    <nav aria-label="Navbar">
      <a href="/" aria-label="App Title">
        refresh
      </a>
      <div aria-label="App Logo">
        <img src="logo192.png" alt="App Logo" />
      </div>
    </nav>
  );
}