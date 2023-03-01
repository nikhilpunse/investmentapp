import React from 'react'

const SupportCard = () => {
  return (
    <div>
        <section>
        <div className="bg-slate-900 ranade w-[273px] p-4 border border-slate-600 rounded-md">
          <p className="mb-2 text-[25px] bespoke">Premium</p>
          <p className="mb-2 text-[16px]">
            Our most advanced tools, unlimated contact,and priority
            support,built for teams.
          </p>
          <hr className="mb-2" />
          <p className="mb-2 text-[13px]">Start At</p>
          <p className="mb-2 text-[25px]">$23,000</p>
          <p className="mb-6 text-[13px]">/month</p>
          <button className="mx-3 px-12 py-2 text-[13px] rounded-xl bg-gradient-to-r from-green-300 to to-blue-700">
            Buy Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default SupportCard