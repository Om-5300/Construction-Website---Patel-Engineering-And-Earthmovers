import { BookOpen, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./LegalPages.css";

export function LegalPages() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  useEffect(() => {
    document.title = "Privacy Policy & Terms & Conditions | Patel Engineering";
  }, []);

  return (
    <div className="legal-page">
      {/* Header */}
      <div className="legal-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-inner"
          >
            <Shield size={40} color="var(--primary-teal)" />
            <h1>Legal Information</h1>
            <p>Privacy Policy & Terms and Conditions</p>
          </motion.div>
        </div>
      </div>

      <div className="container section-padding">
        {/* Tab Navigation */}
        <div className="legal-tabs">
          <button
            className={`tab-button ${activeTab === "privacy" ? "active" : ""}`}
            onClick={() => setActiveTab("privacy")}
          >
            <Shield size={18} />
            Privacy Policy
          </button>
          <button
            className={`tab-button ${activeTab === "terms" ? "active" : ""}`}
            onClick={() => setActiveTab("terms")}
          >
            <BookOpen size={18} />
            Terms & Conditions
          </button>
        </div>

        {/* Privacy Policy Tab */}
        {activeTab === "privacy" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="legal-content"
          >
            <h2>Privacy Policy</h2>
            <p className="last-updated">Last Updated: June 2026</p>

            <section>
              <h3>1. Introduction</h3>
              <p>
                Patel Engineering & Earthmovers ("we", "us", "our") operates the website
                and services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h3>2. Information Collection and Use</h3>
              <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
              <ul>
                <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include:
                  <ul>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Cookies and Usage Data</li>
                  </ul>
                </li>
                <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages you visit, the time and date of your visit, and other diagnostic data.</li>
              </ul>
            </section>

            <section>
              <h3>3. Use of Data</h3>
              <p>Patel Engineering & Earthmovers uses the collected data for various purposes:</p>
              <ul>
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer care and support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h3>4. Security of Data</h3>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h3>5. Changes to This Privacy Policy</h3>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h3>6. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:hemantbarasara@gmail.com">hemantbarasara@gmail.com</a><br />
                <strong>Phone:</strong> <a href="tel:+919825735300">+91 98257 35300</a><br />
                <strong>Location:</strong> Morbi, Gujarat, India
              </p>
            </section>
          </motion.div>
        )}

        {/* Terms & Conditions Tab */}
        {activeTab === "terms" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="legal-content"
          >
            <h2>Terms & Conditions</h2>
            <p className="last-updated">Last Updated: June 2026</p>

            <section>
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing and using this website and services provided by Patel Engineering & Earthmovers, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h3>2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Patel Engineering & Earthmovers website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h3>3. Disclaimer</h3>
              <p>
                The materials on Patel Engineering & Earthmovers website are provided on an 'as is' basis. Patel Engineering & Earthmovers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h3>4. Limitations</h3>
              <p>
                In no event shall Patel Engineering & Earthmovers or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Patel Engineering & Earthmovers or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h3>5. Accuracy of Materials</h3>
              <p>
                The materials appearing on Patel Engineering & Earthmovers website could include technical, typographical, or photographic errors. Patel Engineering & Earthmovers does not warrant that any of the materials on the website are accurate, complete, or current. Patel Engineering & Earthmovers may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h3>6. Links</h3>
              <p>
                Patel Engineering & Earthmovers has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Patel Engineering & Earthmovers of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h3>7. Modifications</h3>
              <p>
                Patel Engineering & Earthmovers may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h3>8. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h3>9. Contact Us</h3>
              <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:hemantbarasara@gmail.com">hemantbarasara@gmail.com</a><br />
                <strong>Phone:</strong> <a href="tel:+919825735300">+91 98257 35300</a><br />
                <strong>Location:</strong> Morbi, Gujarat, India
              </p>
            </section>
          </motion.div>
        )}
      </div>
    </div>
  );
}
