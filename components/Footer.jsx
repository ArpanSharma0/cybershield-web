"use client";
import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Services: ["SEO Optimization", "Paid Advertising", "Website Development", "Ecommerce Growth", "App Development", "Website Maintenance"],
  Company: ["About Us", "Case Studies", "Our Process", "Careers", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-stroke">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="text-3xl font-bold tracking-tighter flex items-center gap-2 mb-8">
              <span className="w-8 h-8 bg-accent-gradient rounded-full" />
              CyberShield
            </Link>
            <p className="text-muted leading-relaxed mb-8">
              Growth-focused agency that builds revenue-generating websites and marketing systems. 
              Helping startups and businesses scale since 2012.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-stroke bg-surface/30 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-muted uppercase tracking-widest">Available for Q2 Projects</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-foreground">Services</h4>
            <ul className="flex flex-col gap-4 text-muted">
              {footerLinks.Services.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-accent transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-foreground">Company</h4>
            <ul className="flex flex-col gap-4 text-muted">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-accent transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-foreground">Contact</h4>
            <ul className="flex flex-col gap-6 text-muted">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0" />
                <span>123 Growth St, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <span>hello@cybershield.agency</span>
              </li>
            </ul>
            
            <div className="mt-10 flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center hover:bg-accent-gradient hover:border-transparent transition-all group">
                  <Icon size={18} className="group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-stroke text-center text-sm text-muted">
          <p>© 2026 CyberShield Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
