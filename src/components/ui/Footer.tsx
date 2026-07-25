"use client";

import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <div className="flex items-center gap-3">
              <Car className="h-8 w-8 text-yellow-400" />
              <h2 className="text-3xl font-black text-yellow-400">
                ShineGo
              </h2>
            </div>

            <p className="mt-6 text-gray-400 leading-7">
              Premium doorstep car & bike washing service with professional
              detailing, affordable pricing and trusted staff.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#pricing" className="hover:text-yellow-400">Pricing</a></li>
              <li><a href="#why-choose" className="hover:text-yellow-400">Why Choose Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>📞 +91 6206111322</li>
              <li>📧 contact@shinego.in</li>
              <li>📍 Hajipur, Bihar</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">
              Working Hours
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Mon - Sat</li>
              <li>9:00 AM - 8:00 PM</li>
              <li>Sunday: On Request</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-yellow-500/20 pt-8 text-center text-gray-500">
          © 2026 ShineGo. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}