import { Navbar, Footer } from "@/components/layout";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 29, 2025</p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Parkeze Inc. ("Parkeze," "we," "our," or "us") concerning your access to and use of our website, services, products, and parking infrastructure solutions (collectively, the "Services").
              </p>
              <p className="text-muted-foreground">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground mb-4">
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms.
              </p>
              <p className="text-muted-foreground">
                If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Services Description</h2>
              <p className="text-muted-foreground mb-3">Parkeze provides:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Smart parking sensors and IoT hardware for real-time parking space monitoring</li>
                <li>Cloud-based analytics dashboard for parking data visualization and insights</li>
                <li>API access for integration with third-party applications and systems</li>
                <li>Data analytics and reporting services for parking infrastructure optimization</li>
                <li>Related consulting and support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Account Registration and Security</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Account Creation</h3>
              <p className="text-muted-foreground mb-4">
                To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate and current.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Account Security</h3>
              <p className="text-muted-foreground mb-3">You are responsible for:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access or security breaches</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Account Termination</h3>
              <p className="text-muted-foreground mb-4">
                We reserve the right to suspend or terminate your account if you violate these Terms or engage in any conduct we deem harmful to our Services or other users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use Policy</h2>
              <p className="text-muted-foreground mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use our Services for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Transmit any viruses, malware, or other harmful code</li>
                <li>Reverse engineer, decompile, or disassemble any aspect of our Services</li>
                <li>Use automated systems or scripts to access or collect data from our Services</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Harvest or collect information about other users without their consent</li>
                <li>Use our Services to transmit spam, unsolicited communications, or advertising</li>
                <li>Violate the intellectual property rights of Parkeze or any third party</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Parkeze Property</h3>
              <p className="text-muted-foreground mb-4">
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, data compilations, software, and the compilation thereof (collectively, "Content"), are the exclusive property of Parkeze Inc. or its licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Limited License</h3>
              <p className="text-muted-foreground mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use our Services for your internal business purposes or personal use.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">6.3 User Content</h3>
              <p className="text-muted-foreground mb-4">
                If you submit, upload, or otherwise make available any content through our Services ("User Content"), you retain ownership of your User Content. However, you grant Parkeze a worldwide, royalty-free, sublicensable license to use, reproduce, modify, and distribute your User Content solely for the purpose of providing and improving our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Payment and Fees</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Certain features of our Services may require payment of fees. All fees are quoted in U.S. dollars unless otherwise specified. We reserve the right to change our fees upon reasonable notice.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Payment Terms</h3>
              <p className="text-muted-foreground mb-4">
                Payment is due according to the terms specified in your subscription or service agreement. Failure to pay fees on time may result in suspension or termination of your access to the Services.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Refunds</h3>
              <p className="text-muted-foreground mb-4">
                Refund policies are determined on a case-by-case basis and are outlined in your specific service agreement. Generally, fees for hardware, setup, and subscription services are non-refundable except as required by law.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">7.4 Taxes</h3>
              <p className="text-muted-foreground mb-4">
                You are responsible for paying all applicable taxes associated with your use of our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Data and Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Your use of our Services is subject to our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
              <p className="text-muted-foreground">
                By using our Services, you acknowledge that parking data collected through our sensors may be used for analytics, reporting, and service improvement purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. API Terms</h2>
              <p className="text-muted-foreground mb-3">If you access our API, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Comply with API rate limits and usage restrictions</li>
                <li>Not use the API in any way that could damage or overburden our systems</li>
                <li>Properly attribute Parkeze as the data source when displaying our data</li>
                <li>Keep your API credentials confidential and secure</li>
                <li>Immediately notify us of any security breaches or unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Hardware and Equipment</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">10.1 Hardware Ownership</h3>
              <p className="text-muted-foreground mb-4">
                Parking sensors and hardware provided by Parkeze remain the property of Parkeze unless explicitly sold to the customer under a purchase agreement.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">10.2 Installation and Maintenance</h3>
              <p className="text-muted-foreground mb-4">
                Installation, maintenance, and support terms are specified in your service agreement. You are responsible for providing reasonable access to installation sites and maintaining appropriate environmental conditions for equipment operation.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">10.3 Warranty</h3>
              <p className="text-muted-foreground mb-4">
                Hardware is covered by a limited warranty as specified in your purchase or lease agreement. This warranty does not cover damage caused by misuse, unauthorized modifications, or environmental factors beyond normal operating conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">11.1 "As Is" Disclaimer</h3>
              <p className="text-muted-foreground mb-4">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE. PARKEZE DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">11.2 Limitation of Liability</h3>
              <p className="text-muted-foreground mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, PARKEZE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Your access to or use of (or inability to access or use) our Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="text-muted-foreground">
                IN NO EVENT SHALL PARKEZE'S TOTAL LIABILITY TO YOU EXCEED THE GREATER OF $100 OR THE AMOUNT YOU PAID TO PARKEZE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify, defend, and hold harmless Parkeze Inc., its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your access to or use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights, including intellectual property rights</li>
                <li>Your User Content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Term and Termination</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">13.1 Term</h3>
              <p className="text-muted-foreground mb-4">
                These Terms remain in effect while you use our Services or maintain an account with us.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">13.2 Termination by You</h3>
              <p className="text-muted-foreground mb-4">
                You may terminate your account at any time by contacting us. Termination may be subject to the terms of your service agreement.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">13.3 Termination by Parkeze</h3>
              <p className="text-muted-foreground mb-4">
                We may suspend or terminate your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">13.4 Effect of Termination</h3>
              <p className="text-muted-foreground mb-4">
                Upon termination, your right to use the Services will immediately cease. Sections of these Terms that by their nature should survive termination will survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Dispute Resolution and Governing Law</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">14.1 Governing Law</h3>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of South Carolina, United States, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">14.2 Dispute Resolution</h3>
              <p className="text-muted-foreground mb-4">
                Any dispute arising out of or relating to these Terms or our Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive or other equitable relief in a court of competent jurisdiction.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">14.3 Class Action Waiver</h3>
              <p className="text-muted-foreground mb-4">
                You agree that any arbitration or proceeding shall be limited to the dispute between you and Parkeze individually. You waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">15. General Provisions</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">15.1 Changes to Terms</h3>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">15.2 Severability</h3>
              <p className="text-muted-foreground mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">15.3 Entire Agreement</h3>
              <p className="text-muted-foreground mb-4">
                These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and Parkeze regarding our Services.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">15.4 Waiver</h3>
              <p className="text-muted-foreground mb-4">
                No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">15.5 Assignment</h3>
              <p className="text-muted-foreground mb-4">
                You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
              <p className="text-muted-foreground mb-3">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="text-muted-foreground space-y-1">
                <p><strong>Parkeze Inc.</strong></p>
                <p>Email: <a href="mailto:legal@parkeze.com" className="text-primary hover:underline">legal@parkeze.com</a></p>
                <p>General Inquiries: <a href="mailto:hello@parkeze.com" className="text-primary hover:underline">hello@parkeze.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
