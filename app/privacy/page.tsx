import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use and protect your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-gray max-w-none space-y-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <p className="text-[#0033A0] text-sm font-medium">Last updated: February 2026 · Leo Club of Sample City</p>
          </div>

          {[
            { title: '1. Information We Collect', content: 'When you contact us, donate, subscribe to our newsletter or volunteer, we collect information such as your name, email address, phone number and any details you provide. We may also collect anonymous analytics data to improve our website.' },
            { title: '2. How We Use Your Information', content: 'We use collected information to respond to inquiries, process donations, send newsletters you have subscribed to, coordinate volunteer activities, and improve our services. We do not sell or rent your personal information to third parties.' },
            { title: '3. Data Security', content: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration or destruction. However, no transmission over the internet is 100% secure.' },
            { title: '4. Cookies', content: 'Our website may use cookies to enhance your browsing experience. You can set your browser to refuse cookies, however some parts of the site may not function properly without them.' },
            { title: '5. Third-Party Links', content: 'Our website may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies.' },
            { title: '6. Club Directory Confidentiality', content: 'The Club Directory contains personal contact information of members and is strictly confidential. It must not be shared outside the club membership without express consent.' },
            { title: '7. Contact Us', content: 'If you have any questions about this privacy policy or wish to request access to or deletion of your personal data, please contact us at info@leoclubsamplecity.org or on +94 77 123 4567.' },
          ].map((section) => (
            <div key={section.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-black text-gray-900 font-display mb-3">{section.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}

          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-[#0033A0] font-semibold text-sm hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
