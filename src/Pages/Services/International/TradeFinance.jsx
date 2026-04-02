import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaGlobe, 
  FaFileContract,
  FaShip,
  FaFileInvoice,
  FaShieldAlt,
  FaDollarSign,
  FaShippingFast,
  FaHandshake,
  FaBalanceScale,
  FaUpload,
  FaDownload,
  FaFileAlt
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const TradeFinance = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" ref={sectionRef}>
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4 md:py-6">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs md:text-sm">
            <Link to="/" className="text-white/80 hover:text-white font-medium">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white font-medium">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Trade Finance</span>
          </nav>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6 md:pt-8">
        <Link 
          to="/services"
          className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm md:text-base"
        >
          <FaArrowLeft className="mr-2 md:mr-3" />
          Back to All Services
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[35vh] md:h-[50vh] overflow-hidden">
        <img
          src="/images/tradefinance.jpg"
          alt="Trade Finance"
          className="w-full h-full object-cover object-top md:object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>
        <div className="absolute inset-0 flex items-center p-4 md:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-3 md:mr-4 backdrop-blur-sm border border-white/20">
                  <FaBalanceScale className="text-white text-xl md:text-2xl" />
                </div>
                <h1 className="text-2xl md:text-5xl font-bold">
                  Trade Finance
                </h1>
              </div>
              <p className="text-sm md:text-2xl text-white/90 font-light leading-relaxed">
                Comprehensive international trade financing solutions governed by ICC UCP 600 rules and NBE directives
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Import & Export Side-by-Side Layout */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
              {/* Import Services Column */}
              <div>
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-red-50 to-white rounded-t-2xl md:rounded-t-3xl p-4 md:p-8 shadow-xl border border-red-100">
                    <div className="flex items-center justify-center mb-4 md:mb-8">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-black rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4">
                        <FaDownload className="text-white text-xl md:text-2xl" />
                      </div>
                      <h2 className="text-2xl md:text-4xl font-black text-gray-900">
                        <span className="text-red-600">Import</span> Finance
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    {/* Letter of Credit - Import */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-100 to-white rounded-lg md:rounded-xl flex items-center justify-center mr-0 md:mr-4 mb-3 md:mb-0">
                          <FaFileContract className="text-red-600 text-base md:text-xl" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Letter of Credit (L/C) / Documentary Credit</h3>
                          <div className="flex items-center text-xs md:text-sm text-gray-600">
                            <FaShieldAlt className="mr-1 md:mr-2 text-green-500" />
                            ICC UCP 600 Compliant
                          </div>
                        </div>
                      </div>
                      <div className="prose prose-sm md:prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                          A Letter of Credit (LC) is a conditional but irrevocable undertaking issued by Gadaa Bank to the exporter at the request of the importer to effect payment up to a stated amount within a stated time period against presentation of compliant documents.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                          The Letter of Credit is governed by the ICC rules defined in Uniform Customs Practice (UCP) 600, NBE Directives and the Bank's Policies and Procedures.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 md:mb-4 flex items-center text-sm md:text-base">
                          <FaFileAlt className="text-red-600 mr-2 md:mr-3" />
                          Required Documents:
                        </h4>
                        <ul className="space-y-1 md:space-y-2">
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Performa invoice</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Insurance certificate/policy</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> License</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> L/C application form</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> TIN certificate</li>
                        </ul>
                        <p className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4 italic">(Additional documents may be requested as and when situations demand)</p>
                      </div>
                    </div>

                    {/* Cash Against Document - Import (same responsive pattern) */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-100 to-white rounded-lg md:rounded-xl flex items-center justify-center mr-0 md:mr-4 mb-3 md:mb-0">
                          <FaFileInvoice className="text-red-600 text-base md:text-xl" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Cash Against Document (CAD) / Documentary Collection</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        When an importer concludes a contract with a seller indicating method of payment as documentary collection/CAD, prepare and submit its purchase order to Gadaa bank for approval before shipment of goods. After the Bank approves the purchase order, the customer instructs the seller to ship the goods and sends the documents via the exporter bank.
                      </p>
                      <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 md:mb-4 flex items-center text-sm md:text-base"><FaFileAlt className="text-red-600 mr-2 md:mr-3" /> Required Documents:</h4>
                        <ul className="space-y-1 md:space-y-2">
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Purchase order</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Performa invoice</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Insurance certificate/policy</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> License</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> TIN Certificate</li>
                        </ul>
                        <p className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4 italic">(Additional documents may be requested as and when situations demand)</p>
                      </div>
                    </div>

                    {/* Advance Payment - Import (responsive) */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-100 to-white rounded-lg md:rounded-xl flex items-center justify-center mr-0 md:mr-4 mb-3 md:mb-0">
                          <FaDollarSign className="text-red-600 text-base md:text-xl" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Advance Payment</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        Under this method, the seller receives payment from the buyer prior to shipment or rendering the service. This mode of payment is appropriate for imports of small items for values not exceeding USD 5,000.00 or its equivalent in other foreign currencies. If the advance payment is more than USD 5,000 an advance payment bank guarantee for the equivalent amount should be presented.
                      </p>
                      <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 md:mb-4 flex items-center text-sm md:text-base"><FaFileAlt className="text-red-600 mr-2 md:mr-3" /> Required Documents:</h4>
                        <ul className="space-y-1 md:space-y-2">
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Performa Invoice</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> License</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Insurance certificate/policy</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Undertaking letter for the entry of goods</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Beneficiary's Bank and A/C details</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> TIN certificate</li>
                        </ul>
                        <p className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4 italic">(Additional documents may be requested as and when situation demand)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Export Services Column (same responsive pattern) */}
              <div>
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-t-2xl md:rounded-t-3xl p-4 md:p-8 shadow-xl border border-gray-200">
                    <div className="flex items-center justify-center mb-4 md:mb-8">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-black to-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4">
                        <FaUpload className="text-white text-xl md:text-2xl" />
                      </div>
                      <h2 className="text-2xl md:text-4xl font-black text-gray-900">
                        <span className="text-gray-900">Export</span> Finance
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    {/* Letter of Credit - Export */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-100 to-white rounded-lg md:rounded-xl flex items-center justify-center mr-0 md:mr-4 mb-3 md:mb-0">
                          <FaGlobe className="text-gray-900 text-base md:text-xl" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Letter of Credit (L/C)</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        An export letter of credit is an instrument issued by a foreign bank on behalf of its importing customer favoring an exporter who is customer of Gadaa bank.
                      </p>
                      <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 md:mb-4 flex items-center text-sm md:text-base"><FaFileAlt className="text-red-600 mr-2 md:mr-3" /> Required Documents:</h4>
                        <ul className="space-y-1 md:space-y-2">
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Authenticated L/C (SWIFT MT 700)</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Commercial Invoice</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Sales contract</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> License</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> TIN certificate</li>
                        </ul>
                        <p className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4 italic">(Additional documents may be requested as and when situations demand)</p>
                      </div>
                    </div>

                    {/* Cash Against Document - Export */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-100 to-white rounded-lg md:rounded-xl flex items-center justify-center mr-0 md:mr-4 mb-3 md:mb-0">
                          <FaShippingFast className="text-gray-900 text-base md:text-xl" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Cash Against Document (CAD)</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        Under this mode of payment customers shipped the agreed upon goods to the buyer and present shipping documents along with covering letter to the bank for collection of payment.
                      </p>
                      <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 md:mb-4 flex items-center text-sm md:text-base"><FaFileAlt className="text-red-600 mr-2 md:mr-3" /> Required Documents:</h4>
                        <ul className="space-y-1 md:space-y-2">
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Commercial Invoice</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Sales contract</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> License</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Undertaking letter</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> TIN certificate</li>
                        </ul>
                        <p className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4 italic">(Additional documents may be requested as and when situations demand)</p>
                      </div>
                    </div>

                    {/* Advance Payment - Export */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-100 to-white rounded-lg md:rounded-xl flex items-center justify-center mr-0 md:mr-4 mb-3 md:mb-0">
                          <FaHandshake className="text-gray-900 text-base md:text-xl" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Advance Payment</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        This is the most basic / preferred payment methods for goods. The supplier receives cash in advance from the buyer before goods are shipped.
                      </p>
                      <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 md:mb-4 flex items-center text-sm md:text-base"><FaFileAlt className="text-red-600 mr-2 md:mr-3" /> Required Documents:</h4>
                        <ul className="space-y-1 md:space-y-2">
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Advance payment receipt (Incoming Telegraphic Transfer) advice or customs declaration along with bank advice for the sale of the Cash Notes to the Bank.</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Commercial invoice</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Sales contract</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> License</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> TIN certificate</li>
                        </ul>
                        <p className="text-gray-500 text-xs md:text-sm mt-2">(If deposited in Foreign Currency Cash Notes)</p>
                      </div>
                    </div>

                    {/* Consignment - Export */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-100 to-white rounded-lg md:rounded-xl flex items-center justify-center mr-0 md:mr-4 mb-3 md:mb-0">
                          <FaShip className="text-gray-900 text-base md:text-xl" />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Consignment</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        The consignment sales are applicable to the perishable items such as fruits, cut flowers, meat, live animals, molasses and others in accordance to the updated list provided by NBE.
                      </p>
                      <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 md:mb-4 flex items-center text-sm md:text-base"><FaFileAlt className="text-red-600 mr-2 md:mr-3" /> Required Documents:</h4>
                        <ul className="space-y-1 md:space-y-2">
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Commercial Invoice</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Sales contract</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> License</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> TIN certificate</li>
                          <li className="flex items-start text-gray-700 text-xs md:text-sm"><FaCheckCircle className="text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" /> Undertaking letter to repatriate the proceeds timely</li>
                        </ul>
                        <p className="text-gray-500 text-xs md:text-sm mt-3 md:mt-4 italic">(Additional documents may be requested as and when situations demand)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* International Partners (already responsive, but we adjust padding) */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl md:rounded-2xl p-6 md:p-12 shadow-xl border border-red-100">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                  International Network
                </h2>
                <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Gadaa Bank has partnered with leading international operators to give you worldwide coverage and convenience, including:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-2xl mx-auto">
                {[
                  { name: 'Dahabshiil', logo: '/images/Dahabshiil.png' },
                  { name: 'Ria Money Transfer', logo: '/images/Ria Money Transfer.png' }
                ].map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 shadow-lg border border-gray-200 text-center"
                  >
                    <div className="w-full h-24 md:h-32 mb-6 md:mb-8 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          // fallback handled by parent
                        }}
                      />
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">{partner.name}</h3>
                    <p className="text-sm md:text-base text-gray-600">International money transfer services</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 md:mt-12 text-center">
                <p className="text-base md:text-xl text-gray-700 font-semibold">
                  For more information please visit your nearest branch
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TradeFinance;