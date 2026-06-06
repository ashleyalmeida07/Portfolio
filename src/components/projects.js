import React from 'react'

export default function Projects() {
  return (
    <section className="testimonials section" id="projects">
      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="My">
            Projects
          </h3>
        </div>
        {/* backgroung design */}
        <div className="blog-wrapper">

          <div className="blog-wrap">
            <div className="blog-card">
              <div className="blog-content">
                <div className="blog-image">
                  <img src="./img/p1.png" alt="" loading="lazy" />
                </div>

                <div className="blog-info">
                </div>
                <h3 className="title-sm">KickStartCrypto – Web3 Crowdfunding Platform</h3>
                <p className="blog-text">
                  A decentralized crowdfunding platform on Ethereum (Sepolia) with milestone-based payouts, dual Web3/Google authentication, automated smart-contract refunds, and a real-time admin dashboard tracking on-chain events.<br />
                  <b>Tools &amp; Techniques:</b> Next.js 15, TypeScript, Solidity, Wagmi/Viem, NeonDB, Supabase.
                </p>
                <a href="https://kickstart-crypto-nine.vercel.app/" className="btn small" target="_blank"
                  rel="noopener noreferrer">
                  View Demo
                </a>
              </div>
            </div>
          </div>

          <div className="blog-wrap">
            <div className="blog-card">
              <div className="blog-content">
                <div className="blog-image">
                  <img src="./img/p2.png" alt="" loading="lazy" />
                </div>
                <div className="blog-info">
                </div>
                <h3 className="title-sm">AuthBlock — Blockchain-Based Academic Credential Verification</h3>
                <p className="blog-text">
                  A blockchain credential platform for issuing tamper-proof academic certificates across on-chain smart contract registries, with QR-code passports, OCR verification, SHA-256 hash anchoring, and a full admin portal with CI/CD deployment pipeline.<br />
                  <b>Tools &amp; Techniques:</b> Next.js, PostgreSQL, Solidity, Ethereum, AWS S3, Firebase.
                </p>
                <a href="https://auth-block-iota.vercel.app/" className="btn small" target="_blank"
                  rel="noopener noreferrer">
                  View Demo
                </a>
              </div>
            </div>
          </div>

          <div className="blog-wrap">
            <div className="blog-card">
              <div className="blog-content">
                <div className="blog-image">
                  <img src="./img/p3.png" alt="" loading="lazy" />
                </div>
                <div className="blog-info">
                </div>
                <h3 className="title-sm">CityLedger — Smart Civic Issue Tracking Platform</h3>
                <p className="blog-text">
                  A full-stack civic complaint platform with role-based access for Citizens, Field Workers, and Officers. Features blockchain-anchored complaints on Ethereum Sepolia, AI-powered spam detection using NVIDIA NIM (Llama 3.3 70B), real-time WebSocket alerts, GPS-based task routing, and community upvote escalation.<br />
                  <b>Tools &amp; Techniques:</b> Spring Boot, PostgreSQL, JWT, Web3j, Ethereum, NVIDIA NIM, WebSocket.
                </p>
                <a href="https://cityledger-qm0r.onrender.com/" className="btn small" target="_blank"
                  rel="noopener noreferrer">
                  View Demo
                </a>
              </div>
            </div>
          </div>




          <div className="blog-wrap">
            <div className="blog-card">
              <div className="blog-content">
                <div className="blog-image">
                  <img src="./img/flux.png" alt="" loading="lazy" />
                </div>
                <div className="blog-info">
                </div>
                <h3 className="title-sm">FluxAPI </h3>
                <p className="blog-text">
                  FluxAPI is a decentralized API marketplace where developers can sell unused API capacity and buyers access premium APIs at transparent rates. Node operators stake, route traffic, and earn fees through secure, blockchain-based settlements.            <b>Tools &amp; Techniques:</b>Next.js, Solidity, Ethereum, Smart Contracts, Web3.js, PostgreSQL.
                </p>
                <a href="https://flux-api-j5yx.onrender.com/" className="btn small" target="_blank"
                  rel="noopener noreferrer">
                  View Demo
                </a>
              </div>
            </div>
          </div>


        </div>


      </div>
    </section>
  )
}
