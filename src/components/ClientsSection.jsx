import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Calendar,
  CreditCard,
  User,
  CheckCircle,
} from "lucide-react";

import { clientPayments } from "../data/clientPayments";

const ClientSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, clientPayments.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
            Client Payments
          </h1>
          <p className="text-gray-400">
            Overview of recent client transactions and project details
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {clientPayments.map((client) => (
                <div
                  key={client.id}
                  className="min-w-[calc(33.333%-16px)] flex-shrink-0"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500 shadow-lg hover:shadow-purple-500/20 transition-all overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48">
                      <img
                        src={client.image}
                        alt={client.project}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <CheckCircle size={16} />
                        {client.status}
                      </div>
                    </div>

                    {/* Header */}
                    <div className="p-6 border-b border-slate-700">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`${client.color} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold`}
                        >
                          {client.avatar}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">
                            {client.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {client.project}
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <p className="text-gray-400 text-xs">Payment Amount</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                          {client.amount}
                        </p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-4">
                      <InfoRow
                        icon={<DollarSign size={20} />}
                        label="Total Budget"
                        value={client.budget}
                        color="purple"
                      />
                      <InfoRow
                        icon={<Calendar size={20} />}
                        label="Project Timeline"
                        value={client.timeline}
                        color="pink"
                      />
                      <InfoRow
                        icon={<CreditCard size={20} />}
                        label="Payment Method"
                        value={client.paymentMethod}
                        color="green"
                      />
                      <InfoRow
                        icon={<User size={20} />}
                        label="Payment Date"
                        value={client.paymentDate}
                        color="orange"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-800 border border-slate-700 rounded-full p-3 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-800 border border-slate-700 rounded-full p-3 disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value, color }) => (
  <div className="flex items-start gap-3">
    <div className={`bg-${color}-500/20 p-2 rounded-lg`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  </div>
);

export default ClientSection;
