import React from "react";

export default function SupportSection() {
    return (
        <section className="py-24 px-2 sm:px-4  text-blue-100">
            <div className="max-w-xl mx-auto rounded-xl shadow-xl bg-gray-900/90 border border-blue-700/20 p-6 flex flex-col items-center gap-3">
                <h3 className="text-xl font-bold mb-2 text-center">Need More Help?</h3>
                <p className="text-blue-200 text-center mb-2">If your question isn’t answered above, feel free to reach out to our support team. We’re here to help you with account, product, or technical issues.</p>
                <a
                    href="https://shihab-dev.web.app/#/contact"
                    target="blank"
                    className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-gray-900 font-semibold shadow hover:from-blue-400 hover:to-blue-300 transition-colors mt-2"
                >
                    Contact Support
                </a>
            </div>
        </section>
    );
}
