import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    features: [
      'Access to selected free courses',
      'Community support',
      'Limited playground access',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$9/month',
    features: [
      'Access to all courses',
      'Certificate of completion',
      'Full playground access',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Team access & management',
      'Custom course bundles',
      'Dedicated support',
      'Integration with company LMS',
    ],
    highlight: false,
  },
];

const Pricing = () => (
  <div className="max-w-5xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Pricing Plans</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, idx) => (
        <div
          key={plan.name}
          className={`rounded-xl shadow-lg p-8 flex flex-col items-center border-2 ${plan.highlight ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}
        >
          <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-green-700' : 'text-gray-800'}`}>{plan.name}</h3>
          <div className="text-3xl font-extrabold mb-4">{plan.price}</div>
          <ul className="mb-6 w-full text-left list-disc pl-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="text-gray-700 mb-2">{feature}</li>
            ))}
          </ul>
          <button
            className={`px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-300 ${plan.highlight ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-200 text-green-700 hover:bg-green-100'}`}
          >
            {plan.price === 'Free' ? 'Get Started' : plan.price === 'Contact Us' ? 'Contact Sales' : 'Subscribe'}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;
