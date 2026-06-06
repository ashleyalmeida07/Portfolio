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
                  ● Built a decentralized Web3 crowdfunding platform on Ethereum (Sepolia) using Next.js 15, TypeScript, and Solidity, featuring milestone-based payouts and automated smart-contract refunds<br />
                  ● Engineered a dual-authentication full-stack app integrating Wagmi/Viem for Web3 wallets and NextAuth for Google logins, backed by NeonDB (PostgreSQL) and Supabase<br />
                  ● Created an automated email notification system and admin dashboard, tracking real-time on-chain events for users
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
                  ● Built a blockchain credential platform using Next.js, PostgreSQL, Solidity, and Ethereum (Sepolia) to issue tamper-proof degrees, marksheets, and course certificates across three on-chain smart contract registries<br />
                  ● Implemented AWS S3 storage, QR-code passports, OCR-based verification, and SHA-256 hash anchoring on Ethereum for real-time credential authenticity checks<br />
                  ● Delivered a full admin portal with bulk issuance, blockchain transaction tracking, QR-code Academic Passports, Firebase Storage, and a GitHub Actions CI/CD pipeline gating Vercel deployments
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
                  <img src="./img/Screenshot 2025-04-25 172745.png" alt="" loading="lazy" />
                </div>
                <div className="blog-info">
                </div>
                <h3 className="title-sm">CampusInk</h3>
                <p className="blog-text">
                  Developed a Next.js frontend to showcase student achievements, including research papers, patents, and projects. Features include data submission, filtering by student, department, year, SDGs, searchable listings and a responsive interface to enhance visibility for faculty, recruiters, and research communities.<br />
                  <b>Tools &amp; Techniques:</b> Next.js, Render.
                </p>
                <a href="https://campusink.onrender.com/" className="btn small" target="_blank"
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
