import { Navbar, Footer } from "@/components/layout";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 29, 2025</p>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Parkeze Inc. ("Parkeze," "we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our parking infrastructure solutions.
              </p>
              <p className="text-muted-foreground">
                By using our services, you consent to the data practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
              <p className="text-muted-foreground mb-3">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Name, email address, phone number, and company information when you contact us or request information</li>
                <li>Account credentials when you create an account on our platform</li>
                <li>Billing and payment information for service subscriptions</li>
                <li>Communication history and inquiries submitted through our contact forms</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Usage Data</h3>
              <p className="text-muted-foreground mb-3">We automatically collect certain information when you use our services:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time spent on pages, and navigation patterns</li>
                <li>Referring website addresses</li>
                <li>Date and time stamps of your visits</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Parking Data</h3>
              <p className="text-muted-foreground mb-3">Through our parking sensors and infrastructure:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Parking space occupancy status and patterns</li>
                <li>Vehicle detection data (non-identifiable)</li>
                <li>Aggregate parking statistics and analytics</li>
                <li>Environmental sensor data (temperature, air quality where applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To provide, operate, and maintain our services</li>
                <li>To improve, personalize, and expand our services</li>
                <li>To process your transactions and manage your account</li>
                <li>To communicate with you about updates, technical notices, and support</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To generate analytics and insights about parking patterns and usage</li>
                <li>To detect, prevent, and address technical issues or fraudulent activity</li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-3">We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Service Providers</h3>
              <p className="text-muted-foreground mb-4">
                We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Business Transfers</h3>
              <p className="text-muted-foreground mb-4">
                If Parkeze Inc. is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Legal Requirements</h3>
              <p className="text-muted-foreground mb-4">
                We may disclose your information if required by law, subpoena, or other legal process, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.4 Aggregate Data</h3>
              <p className="text-muted-foreground mb-4">
                We may share aggregated, non-personally identifiable parking data and statistics with partners, clients, and the public.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and privacy</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-3">You have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Object:</strong> Object to certain processing of your personal information</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@parkeze.com" className="text-primary hover:underline">privacy@parkeze.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Parking sensor data may be retained in aggregate form for analytical and research purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground mb-3">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-muted-foreground space-y-1">
                <p><strong>Parkeze Inc.</strong></p>
                <p>Email: <a href="mailto:privacy@parkeze.com" className="text-primary hover:underline">privacy@parkeze.com</a></p>
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
